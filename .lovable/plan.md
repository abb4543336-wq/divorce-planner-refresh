# Extend Austin Divorce Planners Website

## Scope
- Keep the existing home page visual direction: deep navy, brass, ivory, Outfit/Figtree typography, photography, and subtle reveal motion.
- Add four polished pages: Services, About Us, Contact Us, and FAQs.
- Use the supplied website pages as the content source; use existing home-page service content where the source site does not provide a dedicated service-page link.

## Experience
- Replace the home-only navigation with shared site navigation linking to all pages, plus a clear consultation action and mobile menu.
- Create consistent interior-page introductions, content sections, calls to action, and footer navigation.
- Make the FAQ page easy to scan with accessible expandable questions.
- Make the contact page useful with direct phone/contact details and a clear inquiry form presentation; submissions will use the available contact method rather than adding a new backend.
- Preserve responsive layouts, smooth scrolling where relevant, semantic headings, keyboard accessibility, and reduced-motion support.

## Technical Details
- Extract shared header, footer, page introduction, and consultation callout components to keep all pages visually consistent.
- Add separate TanStack routes for `/services`, `/about`, `/contact`, and `/faqs`.
- Give every page unique title, description, Open Graph metadata, `og:type`, and Twitter card metadata.
- Update home-page links to use typed route navigation while retaining its existing in-page anchors where appropriate.
- Verify the finished pages on desktop and mobile, then confirm the preview is free of build and runtime errors.
