# Raw User Input
```
can we shrink the width  of the boxes on the contact page so they are 250 pixels in width
```

---

<project_overview>
Reduce the width of the streaming platform and social media link boxes on the contact page from their current size to exactly 250 pixels to create a more compact, refined appearance.
</project_overview>

<core_requirements>
- Change link box width from current size (280-300px) to exactly 250px
- Apply width change across all responsive breakpoints consistently
- Maintain existing styling, hover effects, and grid layout behavior
- Preserve all functionality including links, images, and text display
- Ensure text and icons still fit properly within the reduced width
</core_requirements>

<technical_constraints>
- Work within existing iframe structure at `/public/img/iframe.html`
- Modify existing CSS media queries for responsive grid layout
- Update both mobile single-column and landscape grid layouts
- Maintain compatibility with existing CSS Grid 3x3 arrangement
- Preserve current responsive breakpoints and behavior
- No changes to HTML structure or link content required
</technical_constraints>

<implementation_details>
- **Current Width**: Links are currently 280px (landscape) and 300px (ultra-wide)
- **New Width**: All links should be exactly 250px across all screen sizes
- **CSS Locations to Update**:
  - `.link` base styles for mobile layout
  - `@media (min-width: 768px)` landscape grid styles
  - `@media (min-width: 1400px)` ultra-wide styles
- **Grid Impact**: Reduced box width will create more whitespace in the 3x3 grid
- **Text Handling**: Existing `text-overflow: ellipsis` should handle any text that doesn't fit
- **Icon Size**: 25x25px icons should remain unchanged
</implementation_details>

<success_criteria>
- All link boxes display at exactly 250px width on all screen sizes
- Grid layout maintains proper centering with increased whitespace
- Text and icons display correctly without overflow issues
- Hover effects and interactions remain functional
- Mobile single-column layout works with new width
- No broken styling or layout issues introduced
</success_criteria>

<nice_to_have>
- Consider if the reduced width improves visual hierarchy
- Monitor how the extra whitespace affects overall page balance
- Potential to adjust grid gaps if more spacing is needed with smaller boxes
- Future consideration: responsive width scaling for very small screens
</nice_to_have>