# Second Look

**Second Look** is a typography-focused, AI-powered UX teardown tool designed for a cinematic and editorial reading experience. Built by a solo indie developer from India, it applies high-end graphic design standards and cognitive psychology principles to digital product critiques.

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://secondlook-two.vercel.app/)

## Design Philosophy

- **Typography First**: Heavy use of serif display fonts (`Cormorant Garamond`) and clean sans-serifs (`Inter`, `Space Grotesk`).
- **Editorial Aesthetic**: Focus on "visual void" (whitespace), minimal borders, and a calm, document-like layout.
- **Micro-interactions**: Subtle motion, custom **typewriter branding sequence** with animated underlines, and tactile input fields with focus-glow effects.

## Features

- **Analyze Workspace**: Specialized AI-assisted workflow to map product DNA—from typographic tokens to spatial rhythm.
- **Tone Personalization**: Select from multiple critique tones (Casual, Professional, Nerdy, Brutal) to match your product's voice.
- **AI-Powered Insights**: Leveraging **Google Gemma (via OpenRouter)** for deep, context-aware UX audits and heuristic evaluations.
- **Live Preview Integration**: Real-time website snapshots via **Microlink API**.
- **Museum-Grade Dossier**: Receive exhaustive analyses that define the path to visual and functional excellence.
- **Master Admin Dashboard**: Minimalist usage tracking and domain monitoring available at `/masteradmin`.

## Tech Stack

- **Framework**: React 19 + Vite
- **AI Engine**: Google Gemma 3 (via OpenRouter API)
- **Styling**: Tailwind CSS v4 (using the `@tailwindcss/vite` plugin)
- **Routing**: React Router v7
- **Icons**: Lucide React & Google Material Symbols
- **Data Scraping**: Cheerio + Axios for meta-tag extraction
- **Fonts**: Google Fonts (Inter, Cormorant Garamond, Crimson Pro, Space Grotesk)

## Getting Started

1. **Clone and Install**:
   ```bash
   npm install
   ```

2. **Environment Setup**:
   Create a `.env` or `.env.local` file and add your API keys:
   ```env
   OPENROUTER_API_KEY=your_openrouter_key
   ```

3. **Run Development Server**:
   ```bash
   npm run dev
   ```

4. **Explore**:
   - Landing: `http://localhost:5173/`
   - Analyze: `http://localhost:5173/analyze`

## 🇮🇳 Project Context

Second Look is an ongoing exploration of how AI can assist human designers by providing a "second set of eyes" that is objective, fast, and deeply rooted in design theory. Currently in **Active Beta**.

Live Site: [secondlook-two.vercel.app](https://secondlook-two.vercel.app/)
