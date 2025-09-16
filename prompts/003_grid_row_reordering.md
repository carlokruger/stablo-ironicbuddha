# Raw User Input
```
move the second row to the top so it's row 1: apple, spotify, beatport, row 2: soundcloud, mixcloud, bandcamp row 3: mastodon, zuckbook, email
```

---

<project_overview>
Reorder the existing 3x3 grid layout on the contact page to prioritize the newer streaming platforms by moving them to the top row, while maintaining the logical grouping of music vs social platforms.
</project_overview>

<core_requirements>
- Reorder existing links in the 3x3 grid without changing functionality
- New arrangement: Row 1 = Apple Music, Spotify, Beatport
- New arrangement: Row 2 = Soundcloud, Mixcloud, Bandcamp  
- New arrangement: Row 3 = Mastodon, Zuckbook, Email
- Maintain all existing styling, hover effects, and responsive behavior
- Preserve all link URLs, alt text, and target="_blank" behavior
</core_requirements>

<technical_constraints>
- Work within existing iframe structure at `/public/img/iframe.html`
- Maintain current CSS Grid implementation and responsive breakpoints
- Keep all existing CSS classes and styling unchanged
- No changes to image assets or file names required
- Preserve mobile single-column layout behavior
</technical_constraints>

<implementation_details>
- **Current Order**: soundcloud, mixcloud, bandcamp, apple music, spotify, beatport, mastodon, zuckbook, email
- **New Order**: apple music, spotify, beatport, soundcloud, mixcloud, bandcamp, mastodon, zuckbook, email
- **HTML Structure**: Reorder the `<a class="link">` elements within the `#links` container
- **Grid Behavior**: CSS Grid will automatically arrange items in the new order (3 items per row)
- **Logical Grouping**: 
  - Row 1: Major streaming platforms (Apple Music, Spotify, Beatport)
  - Row 2: Independent/Alternative platforms (Soundcloud, Mixcloud, Bandcamp)
  - Row 3: Social media and contact (Mastodon, Facebook, Email)
</implementation_details>

<success_criteria>
- Apple Music, Spotify, Beatport appear as the first row in landscape grid view
- Soundcloud, Mixcloud, Bandcamp appear as the second row
- Mastodon, Zuckbook, Email appear as the third row
- All links maintain their functionality and styling
- Mobile layout continues to show single column in the new order
- No broken images or styling issues introduced
- Grid spacing and responsive behavior unchanged
</success_criteria>

<nice_to_have>
- Consider semantic improvement: this ordering prioritizes major commercial platforms
- Future consideration: add visual separators between platform types
- Enhanced grouping could improve user scanning and discovery
- Potential for analytics to track which platforms get more clicks in top position
</nice_to_have>