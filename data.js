// src/data/index.js
const Logo = "/assets/logo.png";
const ss2 = "/assets/ss2.png";
const Bg = "/assets/download.svg";
const stockPng = "/assets/stockpng.jpg";
const tips = "/assets/intraday-trading-tips.png";
const stocktips = "/assets/stocktips.png";
const heroBg = "/assets/heroBg.webp";
const appleIcon = "/assets/appleIcon.png";
const desktopwhite = "/assets/desktopWhite.png";
const googlePlayWhite = "/assets/googlePlayWhite.webp";
const stoxoInputImg = "/assets/stoxoInput.webp";
const mobileBg = "/assets/bgMob.webp"
const coloredLine = "/assets/coloredLine.webp"
const ff1Card1 ="/assets/ff1Card1.webp"
const ff1Card2 ="/assets/ff1Card2.webp"
const ff1Card3 ="/assets/ff1Card3.webp"
const ff2Card ="/assets/ffCard.webp"
const ff3Card1 ="/assets/ff3Card1.webp"
const ff3Card2 ="/assets/ff3Card2.webp"
const flywheel1 ="/assets/flywheel1.webp"
const flywheel2 ="/assets/flywheel2.webp"
const flywheel3 ="/assets/flywheel3.webp"
const logoteam = "/assets/logoteam.png"
const bannerImg = "/assets/stoxoHomeBanner.webp"
const linesBg = "/assets/stoxoInput.webp"
const ps = "/assets/guide1.webp"
const vj = "/assets/guide2.webp"
const dp = "/assets/guide4.webp"
const ag = "/assets/guide5.webp"
const fc = "/assets/guide6.webp"
const vk = "/assets/guide13.webp"
const dd = "/assets/guide14.webp"
const pm = "/assets/guide1.webp"
const rotateBg = "/assets/rotateBg.webp"

export const image = {logoteam,bannerImg,linesBg,ps,vj,dp,ag,fc,vk,dd,pm, ss2,Logo, Bg, stockPng, tips, stocktips,heroBg,appleIcon,desktopwhite,googlePlayWhite,stoxoInputImg,mobileBg,coloredLine,ff1Card1,ff1Card2,ff1Card3,flywheel1,flywheel2,flywheel3,ff2Card,ff3Card1,ff3Card2 };

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
