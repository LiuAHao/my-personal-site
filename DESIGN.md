# Design

## Theme
Dark mode native. Scene: An engineering manager reviewing candidates late at night on a MacBook Pro, looking for rigorous backend code and architectural clarity. The interface must feel like a precision instrument—high contrast, zero fluff, strictly organized.

## Color Strategy
**Restrained**. Pure monochrome structure with one single highly-desaturated blue-gray accent (`#64748b` slate-500) for interactive elements. 

- **Background**: `#0a0a0a` (near absolute black)
- **Surface**: `#121212` (subtly elevated)
- **Borders**: `#262626` (neutral-800, strict and sharp 1px lines)
- **Primary Text**: `#f5f5f5` (neutral-100)
- **Secondary Text**: `#a3a3a3` (neutral-400)
- **Accent**: `#38bdf8` (sky-400, but used *extremely* sparingly, only for hover states on primary links)

## Typography
- **Font Family**: Inter, system-ui, sans-serif. Monospace for technical terms (`font-mono`).
- **Hierarchy**: Extreme scale contrast. Hero text is massive and sharp. Body text is small (14px/15px) but highly legible with generous line height (1.7).
- **Line Length**: Capped strictly at 65ch for body text.

## Layout & Components
- **Borders over Backgrounds**: Cards are not distinguished by glassmorphism or drop shadows. They are defined by razor-thin, sharp 1px borders (`border-neutral-800`).
- **No Glassmorphism**: Removed completely.
- **No Gradients**: Removed completely. Solid colors only.
- **Spacing**: Generous, rhythmic paddings (`py-32`, `gap-12`).

## Motion
- **Properties**: Opacity and transform only.
- **Curves**: Linear or exponential ease-out (`ease-out`). 
- **Duration**: Fast and crisp (200ms - 400ms). No slow, floating orbs. No bouncing.
