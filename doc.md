# React Component Generation Template for Marine Services Marketplace

This document provides a standardized template for generating React components that align with our marine services marketplace MVP requirements.

## Prompt Structure

```prompt
@doc.md // Reference project documentation
Create React.js components for a marine services marketplace MVP that implements the following from our technical specifications:

**Core Requirements:**
1. Service Catalog Components:
- Reusable ServiceCard component matching our wireframes
- Props: title (string), price (number), reviews (array) 
- Interactive elements: RatingWidget (stars), BookNowButton
- Responsive grid layout for marine service listings

2. Booking System:
- Calendar interface with tide-aware scheduling (use react-big-calendar)
- Multi-step form for service details (vessel type, underwater requirements)
- Real-time availability checking

**Styling Requirements:**
- Implement Tailwind CSS using our marine color palette:
  Primary: #1E3A8A (navy), Secondary: #06B6D4 (teal)
- Mobile-first responsive design
- Hover states for service cards
- Accessible contrast ratios for marine environment use

**Scalability Needs:**
- TypeScript interfaces for Service type
- Jotai state management for booking flow
- Next.js app router structure
- React Server Components pattern for service listings

**Code Quality:**
- Strict TypeScript types
- Jest unit tests for core components
- Storybook stories for UI components
- API hooks for backend integration
```

## Template Components

### 1. Documentation Reference
- Always start with `@doc.md` to ensure alignment with project specifications
- Reference specific sections when needed for detailed requirements

### 2. Core Requirements
- Break down into distinct component categories
- Specify exact prop types and interfaces
- Detail interactive elements and their behaviors
- Include layout and responsiveness requirements

### 3. Styling Guidelines
- Define exact color codes and design tokens
- Specify responsive breakpoints
- Include accessibility requirements
- Detail interaction states (hover, focus, active)

### 4. Technical Architecture
- Specify state management approach
- Define routing structure
- Include data fetching patterns
- Document component hierarchy

### 5. Quality Standards
- TypeScript configuration
- Testing requirements
- Documentation needs
- Performance benchmarks

## Usage Guidelines

1. **Component Generation Order**
   - Start with atomic components
   - Progress to composite components
   - Finally implement page-level components

2. **Implementation Priority**
   - Begin with core functionality
   - Add styling and interactions
   - Implement state management
   - Add tests and documentation

3. **Review Checklist**
   - Type safety
   - Component reusability
   - Accessibility compliance
   - Performance optimization
   - Documentation completeness

## Marine Industry Specifics

Ensure all generated components consider:
- Maritime terminology accuracy
- Tide and weather integration
- Marine safety regulations
- Vessel-specific requirements
- Underwater service considerations

## Maintenance

This template should be updated when:
- New technical requirements are added
- Design system changes occur
- Industry regulations update
- Best practices evolve

Last updated: 2024-01-09