// src/data/index.js
const Logo = "/assets/logo.png";
const Bg = "/assets/download.svg";
const stockPng = "/assets/stockpng.jpg";
const tips = "/assets/intraday-trading-tips.png";
const stocktips = "/assets/stocktips.png";

export const image = { Logo, Bg, stockPng, tips, stocktips };

export const blogs = [
  {
    id: "llm-rag-prod",
    slug: "shipping-rag-to-production",
    title: "Shipping RAG to Production: A Pragmatic Checklist",
    excerpt:
      "From chunking to evals: what actually matters when you ship retrieval-augmented generation.",
    author: "Ifda AI",
    avatar: "https://i.pravatar.cc/80?img=5",
    cover:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1400&auto=format&fit=crop",
    tags: ["RAG", "LLMs", "MLOps"],
    readingMinutes: 9,
    publishedAt: "2025-09-21",
    content: [
      "# Overview",
      "RAG looks simple until you have to **ship** it. This post is a checklist of the things that de-risk a launch.",
      "## Retrieval Quality",
      "- Choose embeddings that match your domain.",
      "- Evaluate recall with labeled queries.",
      "## Latency & Cost",
      "Cache aggressively, batch requests, and offload heavy steps to async jobs.",
      "## Evals",
      "Automate evals with golden sets; block regressions before they hit prod."
    ]
  },
  {
    id: "prompt-engineering",
    slug: "prompt-engineering-that-scales",
    title: "Prompt Engineering That Scales",
    excerpt:
      "Patterns to make prompts maintainable across teams and products.",
    author: "Ifda AI",
    avatar: "https://i.pravatar.cc/80?img=11",
    cover:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1400&auto=format&fit=crop",
    tags: ["Prompts", "LLMs"],
    readingMinutes: 7,
    publishedAt: "2025-08-02",
    content: [
      "# Why prompts break",
      "Prompts are software. Treat them that way.",
      "## Templates & Variables",
      "Keep templates in code; version them like any artifact.",
      "## Guardrails",
      "Validate inputs and outputs; never assume the model is right."
    ]
  },
  {
    id: "genai-finance",
    slug: "genai-in-finance",
    title: "GenAI in Finance: Practical Use-Cases",
    excerpt:
      "Where GenAI already pays for itself in finance and how to ship safely.",
    author: "Ifda AI",
    avatar: "https://i.pravatar.cc/80?img=16",
    cover:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1400&auto=format&fit=crop",
    tags: ["Finance", "GenAI"],
    readingMinutes: 6,
    publishedAt: "2025-06-10",
    content: [
      "# Use-Cases",
      "KYC document triage, risk summarization, and portfolio Q&A—**today**.",
      "## Compliance",
      "Keep audit trails and human-in-the-loop for critical decisions."
    ]
  }
];
