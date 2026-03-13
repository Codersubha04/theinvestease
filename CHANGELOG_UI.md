# UI Changelog (About + Contact) - InvestEase

## Scope
This log tracks recent UI/UX updates done in `finwice-reactjs` for:
- About Us page
- Contact Us page

## About Us - Updated Sections

### 1) About Section
- File: `src/components/common/About.tsx`
- File: `src/components/common/about.scss`
- Changes:
  - Premium layout/styling refresh.
  - CTA button switched to Contact flow and styled with premium shine/hover animation.
  - Heading updated to highlighted style:
    - `Welcome to <span>InvestEase Research</span>`
  - Font consistency enforced (`Rethink Sans`).
  - GSAP scroll reveal animation added.

### 2) History Section
- File: `src/components/otherPages/History.tsx`
- File: `src/components/otherPages/history.scss` (new)
- Changes:
  - Color combination refined to match theme.
  - "Our Journey" badge converted to rounded chip style.
  - Heading updated to highlighted style:
    - `Our Purpose & <span>Principles</span>`

### 3) Mentor Section
- File: `src/components/common/Mentor.tsx`
- File: `src/components/common/mentor.scss`
- Changes:
  - Premium card polish with improved hover interaction.
  - Dot pattern movement/animation tuning.
  - Font and heading style consistency updates.
  - Maintained original visual direction while improving motion quality.

### 4) Why Choose Section (Custom)
- File: `src/components/otherPages/whyChooseUs.tsx`
- File: `src/components/otherPages/whyChooseUs.scss`
- Changes:
  - Theme-aligned premium redesign.
  - GSAP entry animations.
  - Heading style aligned with other sections:
    - `Why InvestEase Is The <span>Best Choice</span>`
  - Hover animation refined to smoother premium motion.

### 5) Features2 Section (Used on About)
- File: `src/components/common/Features2.tsx`
- File: `src/components/common/features2.scss` (new)
- Changes:
  - Content replaced with InvestEase-specific points.
  - Heading and CTA style aligned with theme.
  - Button updated to About-style premium animation.

### 6) Awards Section
- File: `src/components/common/Awards.tsx`
- File: `src/components/common/awards.scss` (new)
- Changes:
  - Converted to 4-logo compliance layout:
    - SEBI, NISM, Trade License, MSME
  - Removed logo name labels under cards.
  - Improved spacing + premium card hover grow effect.
  - Heading style aligned:
    - `Awards & <span>Recognition</span>`

### 7) Google Reviews Section (New)
- File: `src/components/otherPages/GoogleReviews.tsx` (new)
- File: `src/components/otherPages/googleReviews.scss` (new)
- File: `src/pages/other-pages/about-us/index.tsx` (integration)
- Changes:
  - New Google-style reviews section added after Awards.
  - 5 dummy InvestEase-focused reviews.
  - Current-date style timeline (2026 dates).
  - "Write a Review" button uses same premium hover animation style.
  - "Posted on Google" footer style refined with Google icon.

### 8) Newsletter Added on About
- File: `src/pages/other-pages/about-us/index.tsx`
- File: `src/components/otherPages/Newsletter.tsx`
- File: `src/components/otherPages/newsletter.scss`
- Changes:
  - Newsletter section added after Google Reviews.
  - Heading style aligned:
    - `Stay Ahead With <span>Market Insights</span>`

## Contact Us - Updated Sections

### 1) Contact Intro + Info Cards
- File: `src/components/otherPages/Contact.tsx`
- File: `src/components/otherPages/contact.scss`
- Changes:
  - Heading style aligned:
    - `Get in Touch with <span>InvestEase</span>`
  - Contact cards redesigned for premium professional look.
  - Hover motion tuned for smoother interaction.
  - Bullet points converted from generic checkmarks to contextual icons:
    - SEBI, Support, Disclosure, Investor-first.
  - Spacing improved to avoid cramped layout.

### 2) Map Section Heading
- File: `src/components/otherPages/Map.tsx`
- File: `src/components/otherPages/map.scss`
- Changes:
  - Heading aligned to same style:
    - `Connect With Our <span>Advisory Team</span>`
  - "Get In Touch" chip restyled to match global theme chips.

## Page Wiring Updates

### About Us page order
- File: `src/pages/other-pages/about-us/index.tsx`
- Active sequence now includes:
  - About
  - History
  - Mentor
  - WhyChooseUs
  - Features2
  - Awards
  - GoogleReviews
  - Newsletter

## Notes
- Design language used: InvestEase blue theme + premium clean cards + smooth hover.
- Typography consistency: `Rethink Sans` across updated sections.
- Motion preference respected where implemented (GSAP sections check `prefers-reduced-motion`).
