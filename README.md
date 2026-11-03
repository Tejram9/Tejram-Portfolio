# Tejram Dudhapachare — Premium 3D Developer Portfolio
### Submission for ARISE Diwali Portfolio Website Competition 2026
**Shri Sant Gajanan Maharaj College of Engineering (SSGMCE), Shegaon**  
*Affiliated with Sant Gadge Baba Amravati University (SGBAU)*

---

## 🌟 Overview & Identity

An award-winning, editorial-grade, 3D interactive personal portfolio website designed and built for **Tejram Kisan Dudhapachare**, a second-year Computer Science Engineering student passionate about Java, Spring Boot, full-stack systems, and practical AI integrations.

Instead of a generic developer template or overused cyberpunk glow, this portfolio incorporates a **strategic systems aesthetic**:
- Deep Charcoal / Midnight Navy background (`#070B14`, `#0A0F1C`)
- Electric Cobalt Blue accent (`#2563EB`, `#3B82F6`) with Ice Cyan highlights (`#38BDF8`)
- Off-white typography (`#F8FAFC`, `#E2E8F0`)
- Subtle tactical coordinate points and chess-inspired strategy motifs
- Controlled 3D kinetic centerpiece built with **Three.js & React Three Fiber**
- Graceful SVG/CSS kinetic fallback for reduced-motion and non-WebGL environments

---

## 🚀 Key Featured Projects (The Core Showcase)

| Project | Domain | Stack | Key Highlight / Recognition |
| :--- | :--- | :--- | :--- |
| **[FocusPulse](https://focuspulse-mthc.onrender.com/)** | Full-Stack Productivity | Python, Flask, SQLite, Chart.js | Showcased at **Navonmesh'26 Project Expo** (Team TrackX) |
| **[Suvidha4C](https://suvidhax-frontend.onrender.com/)** | Citizen Digital Gateway | React, TypeScript, Spring Boot, MySQL | Multi-role RBAC, client-side watermarking & college prediction |
| **[CivicServe](https://civic-serve-169d.vercel.app/)** | AI Worker Matching | Vite, Node.js, Express, Prisma, Supabase, OpenRouter | **🏆 4th Place — AI-Tools Hackathon** |
| **[Smart Krishi Sahayak](https://smart-krishi-sahayak-86ks.vercel.app/)** | AgriTech AI Advisor | Java, Spring Boot, REST APIs, AI Integration | Farmer decision support & crop disease guidance engine |

---

## 🛠️ Technology Stack

- **Core Framework:** React 18 with TypeScript & Vite
- **Styling & Design System:** Tailwind CSS with custom editorial colors, glassmorphism, and responsive breakpoints
- **3D Graphics & Physics:** Three.js, `@react-three/fiber`, `@react-three/drei`
- **Animation & Motion:** Framer Motion (page transitions, interactive card reveals, modals)
- **Icons & Micro-interactions:** Lucide React, `canvas-confetti`
- **Codebase Architecture:** Modular atomic components with centralized data files for zero-friction editing

---

## 📁 Project Architecture

```
d:/Tej_Portfolio/
├── dist/                      # Production-optimized distribution bundle
├── src/
│   ├── types/                 # TypeScript interfaces (Project, Skill, Milestone, etc.)
│   ├── data/                  # Centralized data sources (easily customizable)
│   │   ├── profile.ts         # Personal information, education, social URLs, strategic pillars
│   │   ├── projects.ts        # The 4 major projects with deep architectural case studies
│   │   ├── skills.ts          # Categorized technical competencies & currently learning
│   │   ├── achievements.ts    # Hackathon awards & editable campus leadership roles
│   │   └── journey.ts         # Milestone timeline from SSGMCE enrollment to present
│   ├── hooks/
│   │   ├── useScrollSpy.ts    # Smooth navbar active section tracking
│   │   └── useDevicePerformance.ts # WebGL & reduced-motion detection
│   ├── lib/
│   │   └── utils.ts           # Styling helper (clsx + twMerge), smooth scroll & clipboard
│   ├── components/
│   │   ├── 3d/
│   │   │   ├── HeroSculpture.tsx      # R3F kinetic core with interactive mouse responsiveness
│   │   │   └── FallbackSculpture.tsx  # Editorial SVG kinetic fallback
│   │   ├── layout/
│   │   │   ├── Navbar.tsx             # Glassmorphic nav with status indicator & mobile drawer
│   │   │   └── Footer.tsx             # Institutional tribute & back-to-top control
│   │   ├── ui/
│   │   │   ├── Badge.tsx              # Tactical status badges
│   │   │   ├── Button.tsx             # Polymorphic high-contrast CTA buttons
│   │   │   ├── Card.tsx               # Tactical card container with corner crosshairs
│   │   │   ├── Modal.tsx              # Keyboard-accessible dialog with ESC key binding
│   │   │   └── SectionHeading.tsx     # Editorial typography heading
│   │   ├── projects/
│   │   │   ├── ProjectCard.tsx        # Project preview card with action triggers
│   │   │   ├── ProjectDetailModal.tsx # Full case study dialog (problem, solution, architecture)
│   │   │   └── ProjectMockup.tsx      # Custom crafted CSS/SVG UI previews (no fake screenshots)
│   │   └── sections/
│   │       ├── HeroSection.tsx        # Unforgettable opening screen with 3D centerpiece
│   │       ├── AboutSection.tsx       # "Beyond the Code" personal philosophy & strategy
│   │       ├── EducationSection.tsx   # SSGMCE 8.63 CGPA academic profile card
│   │       ├── SkillsSection.tsx      # Interactive categorized skills & specs
│   │       ├── ProjectsSection.tsx    # 4 major featured projects showcase
│   │       ├── JourneySection.tsx     # Visual chronological engineering timeline
│   │       ├── AchievementsSection.tsx# Hackathon distinctions & technical advisory roles
│   │       ├── LearningSection.tsx    # "Always Learning" horizon & daily DSA focus
│   │       └── ContactSection.tsx     # Direct copy email, mailto dispatcher, and form
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html                 # SEO metadata, Open Graph, JetBrains Mono & Plus Jakarta Sans fonts
├── vite.config.ts             # Rollup code-splitting chunks (Three.js, Motion, React)
├── tailwind.config.js         # Midnight navy & electric cobalt palette
└── tsconfig.json              # Strict TypeScript configuration
```

---

## 💻 How to Run Locally

### Prerequisites
- Node.js (v18.x or v20.x+)
- npm or pnpm

### Development Server
```bash
npm install
npm run dev
```
Navigate to `http://localhost:3000` in your web browser.

### Production Build
```bash
npm run build
```
Generates an optimized bundle in `dist/` with chunk splitting:
- `vendor-three.js` (isolated 3D vendor bundle)
- `vendor-motion.js` (motion physics)
- `vendor-icons.js` (Lucide tree-shaken icons)
- `index.js` (application core)

### Preview Production Build
```bash
npm run preview
```

---

## ✏️ Personalization & Missing Information to Update

Before final public deployment, review and replace these placeholder values in `src/data/profile.ts` and `src/data/achievements.ts`:

1. **LinkedIn Profile URL:**
   - File: `src/data/profile.ts` (Line ~44)
   - Replace `"https://www.linkedin.com/in/tejram-dudhapachare"` with your personal LinkedIn vanity URL.
2. **Email Address:**
   - File: `src/data/profile.ts` (Line ~45)
   - Updated with `"tejramkd9@gmail.com"` (confirm your preferred contact inbox).
3. **Leadership Roles Confirmation:**
   - File: `src/data/achievements.ts` (Line ~33)
   - Confirm your formal titles for CESSA Technical Advisor, ISTE Technical Advisor, and Mozilla Campus Contributor.

---

## 🏆 ARISE Diwali Competition Highlights

- **Visual Originality:** Custom kinetic sculpture representing strategic systems and software architecture, with no generic template tropes.
- **Authentic Engineering Storytelling:** Genuine projects (FocusPulse, Suvidha4C, CivicServe, Smart Krishi Sahayak), actual 8.63 CGPA, and confirmed hackathon achievements.
- **Flawless Responsiveness:** Handcrafted layouts tailored for desktop, tablet, and mobile screens.
- **Accessibility & Performance:** Semantic markup, reduced-motion fallbacks, zero layout shifts, and tree-shaken assets.
