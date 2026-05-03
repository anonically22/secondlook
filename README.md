# Second Look

**Second Look** is a **Component Intelligence Platform** that audits interface systems for structural integrity and design drift. Moving beyond generic UX teardowns, it provides infrastructure-grade analysis of component consistency, duplication, and hierarchy.

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://secondlook-two.vercel.app/)

## 🚀 The Component Audit Engine (Phase 4)

Second Look now features a sophisticated backend architecture designed to analyze entire product systems rather than isolated pages.

- **Multi-Page Intelligence**: BFS-based crawler that maps up to 5 internal pages per domain to identify system-wide patterns.
- **Cross-Page Registry**: Tracks every button, card, and input variant across the entire product lifecycle to detect global inconsistencies.
- **Design Drift Detection**: Deterministic comparison engine that flags mismatched button systems, navigation gaps, and hierarchy breakdowns.
- **AI Interpretation**: Uses **Mistral-7B (via OpenRouter)** to interpret structured technical findings into high-level executive summaries and recommendations.
- **Product Memory**: Integrated with **Supabase** to persist audit reports, score history, and domain monitoring.

## Features

- **Analyze Workspace**: Specialized workflow to map product DNA—from typographic tokens to spatial rhythm.
- **Component Audit**: Automated detection of UI elements (buttons, links, forms, inputs, headings) with deterministic counts.
- **Heuristic Scorecard**: 1-10 scoring across Component Consistency, Spacing Integrity, Hierarchy Clarity, Accessibility Health, and Duplication Index.
- **Tone Personalization**: Select from multiple critique tones (Professional, Nerdy, Brutal) to match your brand's voice.
- **Live Preview Integration**: Real-time website snapshots via **Microlink API**.

## Tech Stack

- **Frontend**: React 19 + Vite + Tailwind CSS v4
- **Backend**: Vercel Serverless Functions (Node.js)
- **Database**: Supabase (Product Memory Layer)
- **AI Engine**: Mistral-7B-Instruct (via OpenRouter API)
- **Analysis Tools**: Cheerio + Axios for DOM crawling and pattern detection
- **Routing**: React Router v7

## Getting Started

1. **Clone and Install**:
   ```bash
   npm install
   ```

2. **Environment Setup**:
   Create a `.env.local` file with the following:
   ```env
   OPENROUTER_API_KEY=your_key
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_key
   ```

3. **Run Development Server**:
   ```bash
   # Run frontend only
   npm run dev
   
   # Run full stack (requires Vercel CLI)
   npm run dev:all
   ```

## 🇮🇳 Project Context

Second Look is an ongoing exploration of how AI can assist human designers by providing a "second set of eyes" that is objective, fast, and deeply rooted in design theory. Currently in **Active Beta**.

Live Site: [secondlook-two.vercel.app](https://secondlook-two.vercel.app/)
