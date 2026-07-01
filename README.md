<div align="center">

<img src="public/logo.jpg" alt="Apex Engineering Logo" width="250" />

# Apex Engineering

An enterprise-grade, high-performance, and fully SEO-optimized B2B industrial fabrication corporate website designed for lead generation, built on modern web architecture.

![Next.js](https://img.shields.io/badge/Next.js-16.2.3-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.0.0-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=flat-square&logo=vercel)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

</div>

---

## Overview

This project serves as the primary digital storefront for Apex Engineering, a specialized industrial fabrication company based in Chennai. The architecture is engineered from the ground up for maximum search engine visibility, sub-second load times, and high B2B lead conversion rates.

## Features

*   **Massive Static Architecture**: 62 pre-rendered static routes ensuring instantaneous page load times and perfect Core Web Vitals.
*   **Advanced SEO Engine**: Complete server-side metadata generation, automated canonical URLs, and dynamic XML sitemap generation.
*   **Structured Data Implementation**: 12 distinct JSON-LD schema types applied across the site (Organization, LocalBusiness, WebSite, FAQPage, BreadcrumbList, Service, ContactPage, etc.).
*   **Dynamic FAQ Matrix**: Client-side filtering mechanism for over 20 B2B engineering FAQs, completely synchronized with Search Engine schema guidelines.
*   **Internal Link Authority**: Strategically structured footer link matrix and breadcrumb navigation for optimized crawler flow and page authority distribution.
*   **Location-Targeted Landing Pages**: Dedicated state-level and city-level landing pages to capture highly specific local commercial intent.

## Tech Stack

*   **Core Framework**: Next.js 16.2.3 (App Router)
*   **UI Library**: React
*   **Language**: TypeScript
*   **Styling**: Custom Vanilla CSS (Modular and Global)
*   **Bundler**: Turbopack
*   **Deployment & Hosting**: Vercel Edge Network

## System Architecture

The application utilizes a purely static rendering strategy (Static Site Generation - SSG). All 62 pages, including dynamic routes (e.g., individual products and blog posts), are built into raw HTML/CSS during the deployment phase. This ensures that the Vercel Edge Network serves cached files directly to users without relying on a backend database, guaranteeing maximum security, zero downtime, and instant TTFB (Time to First Byte).

## Architecture Workflow

1.  **Build Phase**: Next.js parses all routes (`app/`), generates metadata via `generateMetadata()`, injects structured JSON-LD schemas, and compiles React components into static HTML.
2.  **Deployment**: Assets are pushed to the Vercel CDN globally.
3.  **Client Request**: The user queries the domain; the Vercel Edge node closest to the user intercepts the request and instantly serves the pre-built HTML.
4.  **Hydration**: React hydrates the page on the client side only where interactive components (like the FAQ search filter) are present.

## Project Structure

```text
apex/
├── client-handover/       # Client documentation and SEO handover guides
├── public/                # Static assets, fonts, robots.txt, and verification files
├── src/
│   ├── app/               # Next.js App Router structure
│   │   ├── about/
│   │   ├── blog/
│   │   ├── contact/
│   │   ├── faq/           # FAQ Engine master page
│   │   ├── industries/
│   │   ├── location/      # Geo-targeted landing pages
│   │   ├── products/
│   │   ├── services/
│   │   ├── sitemap/
│   │   ├── globals.css    # Global styling definitions
│   │   ├── layout.tsx     # Root layout structure
│   │   └── page.tsx       # Homepage
│   └── components/        # Reusable UI components (Hero, Footer, Breadcrumbs, etc.)
├── next.config.ts         # Next.js configuration and redirect rules
└── package.json           # Dependency management and scripts
```

## Installation

### Prerequisites
*   Node.js (v18.x or higher)
*   npm (v9.x or higher)

### Setup Instructions

1.  Clone the repository:
```bash
git clone https://github.com/VeeraVaishnaviK/Apex-Engineering--lead-gen-industrial-website.git
cd apex
```

2.  Install all dependencies:
```bash
npm install
```

3.  Run the development server locally:
```bash
npm run dev
```
Navigate to `http://localhost:3000` to view the application.

4.  Test the production build:
```bash
npm run build
npm run start
```

## Live Demo

**Website URL:** [https://apexengineering.org.in/](https://apexengineering.org.in/)

## License

This project is licensed under the MIT License.

## Developer

**Veera Vaishnavi K**
*   Full Stack Developer
*   AI Solutions Developer
*   Google Developer Groups (GDG) Co-Organizer
*   Student Ambassador — Institution's Innovation Council (IIC)

**Links:**
*   **GitHub**: [https://github.com/VeeraVaishnaviK](https://github.com/VeeraVaishnaviK)
*   **Website**: [apexengineering.org.in](https://apexengineering.org.in/)
*   **LinkedIn**: [https://www.linkedin.com/in/veera-vaishnavi/](https://www.linkedin.com/in/veera-vaishnavi/)

---

<div align="center">
© 2026 apexengineering, All Rights Reserved.
</div>
