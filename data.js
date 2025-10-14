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
const rightImage ="/assets/rightStoxo.webp"
const tick ="/assets/stick.webp"
const logo11 ="/assets/stoxoText.webp"
const money ="/assets/money.webp"
const ht ="/assets/ht.webp"
const financial ="/assets/financial.webp"
const livemint ="/assets/livemint.webp"
const toi ="/assets/toi.webp"
const Ed1 ="/assets/Ed1.webp"
const Ed2 ="/assets/Ed2.webp"
const Ed3 ="/assets/Ed3.webp"
const Ed4 ="/assets/Ed4.webp"
const Ed5 ="/assets/Ed5.webp"
const Ed6 ="/assets/Ed6.webp"
const fanFav1 ="/assets/fanFav1.webp"
const fanFav3 ="/assets/fanFav3.webp"
const fanFav4 ="/assets/fanFav4.webp"
const mascotSrc ="/assets/commMascottMj.webp"
const handSrc ="/assets/commHand.webp"
const imgSrc ="/assets/bannerWeb.webp"
const he ="/assets/bannerWeb.webp"
const iifl ="/assets/IIFL.jpeg"
const sm ="/assets/sm.png"
const niacl ="/assets/NIACL.jpeg"
const stock ="/assets/bannerWeb.webp"
const wels ="/assets/wels.jpeg"
const vik ="/assets/bannerWeb.webp"
const lodha ="/assets/bannerWeb.webp"
const jbb ="/assets/bannerWeb.webp"
const brigade ="/assets/bannerWeb.webp"
const aig ="/assets/bannerWeb.webp"
const bajaj ="/assets/bannerWeb.webp"
const fb ="/assets/fb.png"
const ldin ="/assets/linkedin.png"
const insta ="/assets/insta.png"
const twitter ="/assets/twitter.png"
const discord ="/assets/discord.png"
const stockgroWhite ="/assets/logoteam.png"
const location ="/assets/locationFooter.png"
const mail ="/assets/mail.png"
const bffLogo ="/assets/bffLogo.webp"
const ipad = "/assets/ipad-1.png"
const think ="/assets/thinking.png"
const resource ="/assets/resource-allocation.png"
const deter ="/assets/determination.png"
export const image = {bffLogo,mail,think,resource,deter, ipad,location,stockgroWhite,discord,twitter,insta,ldin,fb,he,iifl,sm,niacl,stock,wels,vik,lodha,jbb,brigade,aig,bajaj,logoteam,fanFav1,mascotSrc,imgSrc,handSrc,fanFav3,fanFav4,Ed1,Ed2,Ed3,Ed4,Ed5,Ed6,bannerImg,money,ht,financial,livemint,toi,rotateBg,tick,rightImage,logo11,linesBg,ps,vj,dp,ag,fc,vk,dd,pm, ss2,Logo, Bg, stockPng, tips, stocktips,heroBg,appleIcon,desktopwhite,googlePlayWhite,stoxoInputImg,mobileBg,coloredLine,ff1Card1,ff1Card2,ff1Card3,flywheel1,flywheel2,flywheel3,ff2Card,ff3Card1,ff3Card2 };

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
