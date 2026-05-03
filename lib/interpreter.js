const axios = require('axios');

async function interpretResults(auditData) {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    console.warn("No OPENROUTER_API_KEY provided. Returning fallback interpretation.");
    return {
      executiveSummary: "Audit complete. No AI interpretation available due to missing API key.",
      findings: [
        "Component count completed deterministically.",
        "Variant grouping analyzed."
      ],
      recommendations: [
        "Review component variants to reduce duplication.",
        "Check heading hierarchy for clarity."
      ]
    };
  }

  const prompt = `
You are an expert Component Intelligence engine. 
Review the following UI component audit data and provide a structured interpretation.

AUDIT DATA:
${JSON.stringify(auditData, null, 2)}

Provide your response strictly as a JSON object matching this schema:
{
  "executiveSummary": "A concise paragraph summarizing the health and consistency of the UI components and design system.",
  "findings": ["finding 1", "finding 2", "finding 3"],
  "recommendations": ["recommendation 1", "recommendation 2", "recommendation 3"]
}

Do not include any other text, only the JSON object.
`;

  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "mistralai/mistral-7b-instruct:free",
        messages: [{ role: "user", content: prompt }],
        response_format: { type: "json_object" }
      },
      {
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "https://secondlook-two.vercel.app/",
          "X-Title": "Second Look"
        }
      }
    );

    const content = response.data.choices[0].message.content;
    
    try {
      // Find the first { and last } to extract JSON safely
      const match = content.match(/\{[\s\S]*\}/);
      if (match) {
        return JSON.parse(match[0]);
      } else {
        throw new Error("No JSON object found in response");
      }
    } catch(e) {
      console.error("Failed to parse OpenRouter JSON", e, content);
      return {
        executiveSummary: "AI interpretation completed but failed to parse strictly as JSON.",
        findings: ["Review raw AI output logs."],
        recommendations: []
      };
    }

  } catch (error) {
    console.error("Interpreter error:", error.response?.data || error.message);
    return {
      executiveSummary: "AI interpretation failed due to an API error.",
      findings: ["Error contacting OpenRouter AI API."],
      recommendations: ["Check API key or try again later."]
    };
  }
}

module.exports = { interpretResults };
