# SEO and GEO Optimization Findings & Changes

This document summarizes the findings from the initial SEO/GEO audit and the optimizations applied to the Apex Engineering website.

## 1. Initial Findings

An audit of `https://www.apexengineering.org.in/` revealed several issues:
- **Canonical Misalignment:** The live site and `robots.txt` were pointing to `https://apexengineering.vercel.app/sitemap.xml`, causing crawler conflicts.
- **Character Encoding Issues:** Em-dashes (`—`) and middle dots (`·`) in the metadata descriptions caused encoding replacement errors (``) in search engine parsers.
- **AI Crawler Limitations:** Generative Engine bots (like GPTBot, ClaudeBot, PerplexityBot) were not explicitly allowed in the live `robots.txt`.
- **Missing FAQ Schema:** The homepage lacked an FAQ section and the associated `FAQPage` schema, which provides up to a +40% visibility boost in AI search engines (per Princeton GEO research).
- **Suboptimal Location Pages:** The location pages (Chennai, Tamil Nadu) lacked dense statistics, certified standard citations, and an "answer-first" structure to cater to AI summaries.

## 2. Optimizations Implemented

- **Cleaned Metadata Formatting:** Replaced problematic characters with clean ASCII hyphens and commas in `src/app/page.tsx` and `src/app/layout.tsx`.
- **Corrected robots.txt:** Ensured the local `public/robots.txt` explicitly allows `GPTBot`, `ChatGPT-User`, `PerplexityBot`, `ClaudeBot`, `anthropic-ai`, and `Google-Extended`, while setting the correct sitemap path (`https://www.apexengineering.org.in/sitemap.xml`).
- **Added Homepage FAQ Accordion:** Created `FaqSection.tsx` and added it to `HomeContent.tsx`. This section includes an interactive accordion and automatically injects the `FAQPage` JSON-LD schema with optimized answers containing statistics and citations (e.g., 65% custom fabrication, 24-hour turnaround, IS 2062 steel).
- **GEO-Optimized Location Pages:** Restructured `src/app/location/chennai/page.tsx` and `src/app/location/tamil-nadu/page.tsx` using the "Answer-First" format. Enriched the content with concrete numbers (10+ years experience, 500+ projects) and verifiable standard citations (SS 304/316, ISO 9001:2015).

## 3. Validation

- A local `npm run build` confirmed that all 58 routes compile cleanly with **0 errors**.
- Inspecting the generated `.next/server/app/sitemap.xml.body` verified that all 54 routes are correctly prefixed with `https://www.apexengineering.org.in`.
- Local audit checks confirmed the JSON-LD scripts are loading correctly and `robots.txt` policies are well-formed.

**Next Steps:** Deploy the updated codebase to production so that AI crawlers and traditional search engines can index the optimized content.
