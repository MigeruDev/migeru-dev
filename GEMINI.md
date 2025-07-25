# GEMINI.md - AI Agent Collaboration Guide

Welcome, Gemini! This document is your guide to understanding and contributing to the MigeruDev Portfolio project. Following these instructions will help you generate code that is consistent, correct, and aligned with the project's goals.

## 1. Project Overview

This is a personal portfolio website for a Software Engineer & Data Specialist. Its purpose is to showcase skills, projects, and professional experience in a modern, visually appealing, and interactive format.

- **Framework:** Next.js 15+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with `shadcn/ui` components.
- **Architecture:** The application is a single-page design, structured into semantic sections (`<HeroSection>`, `<AboutSection>`, etc.). Reusable UI components are located in `components/ui`, and constants (like text content, project data) are managed in `constants/data.ts`.

## 2. Core Instructions & Guiding Principles

Your primary goal is to assist in developing and maintaining this portfolio. Adhere to the following principles:

- **Maintain Consistency:** Your code should match the style and patterns of existing files.
- **Component-Based:** Always think in terms of components. For new UI elements, first consider if an existing component from `components/ui` can be used. For new, complex UI, create new reusable components.
- **Data-Driven:** Content that is likely to change (e.g., project descriptions, testimonials, skills) should be managed in `constants/data.ts` and imported into components. Avoid hardcoding content directly into JSX.
- **Styling with `cn`:** All components use Tailwind CSS. Always use the `cn` utility from `@/lib/utils` to merge class names. This is standard practice throughout the project.

## 3. How to Approach Common Tasks

### Modifying a Section
When asked to modify a section (e.g., "add a new project to the projects section"):
1.  **Locate the Data File:** First, look for the relevant data array in `constants/data.ts` (e.g., `PROJECTS`).
2.  **Update the Data:** Add the new data object to the array.
3.  **Verify the Component:** Check the corresponding section component (e.g., `components/sections/projects-section.tsx`) to ensure it correctly maps over the data and renders the new entry. No changes should be needed in the component itself if it's already data-driven.

### Creating a New Component
When asked to create a new UI component (e.g., "create a timeline component for the experience section"):
1.  **Location:** Place the new component file in `components/ui/` if it is a generic, reusable element, or in a relevant sub-directory inside `components/sections/` if it's specific to a section.
2.  **Styling:** Use Tailwind CSS classes. Leverage existing `shadcn/ui` components like `Card`, `Button`, etc., as a base where possible.
3.  **Props:** Use TypeScript interfaces for component props.

### Refactoring Code
When asked to refactor:
1.  **Identify the Goal:** Understand if the goal is to improve readability, performance, or reusability.
2.  **Prioritize Reusability:** If you see duplicated JSX or logic, extract it into a new, reusable component or hook.
3.  **Use Hooks:** For state management and side effects, always use React Hooks (`useState`, `useEffect`, `useCallback`, etc.). Custom hooks are located in the `hooks/` directory.

## 4. Prompting Best Practices: Examples

To get the best results, structure your requests clearly.

**Good Prompt (Specific & Contextual):**
> "Create a new 'Experience' section. It should display a timeline of my professional roles. The data for the timeline should be added to `constants/data.ts` in a new array called `EXPERIENCE_ITEMS`. Each item needs a `role`, `company`, `date`, and `description`. Then, create the `ExperienceSection` component in `components/sections/` that maps over this data and displays it using the `GlassCard` component for each entry. Place the new section between the 'Services' and 'Projects' sections in `app/page.tsx`."

**Bad Prompt (Vague):**
> "Add my work experience."

## 5. Do's and Don'ts

- **DO** use the `cn()` utility for CSS classes.
- **DO** separate data into `constants/data.ts`.
- **DO** create small, reusable components.
- **DO NOT** hardcode strings directly in components.
- **DO NOT** install new dependencies without being explicitly asked.
- **DO NOT** deviate from the existing file structure.