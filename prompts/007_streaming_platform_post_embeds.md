# Raw User Input
```
Have a look in the Post schema and you should find a custom link for SoundCloud embedded content. Using the same principle I'd like to provide embed links for Apple Music, Spotify and Beatport to stream the track associated with a post
```

---

<project_overview>
Extend the existing Post schema and functionality to include embedded streaming content from Apple Music, Spotify, and Beatport, following the same pattern as the current SoundCloud implementation for blog posts.
</project_overview>

<core_requirements>
- Examine existing Post schema to understand SoundCloud embed implementation
- Add Apple Music, Spotify, and Beatport embed fields to Post schema
- Implement consistent embed rendering for all three new streaming platforms
- Maintain compatibility with existing SoundCloud embeds
- Allow content creators to add streaming platform links to blog posts
- Ensure embedded content displays properly on post pages
</core_requirements>

<technical_constraints>
- Work with existing Sanity CMS schema structure
- Follow same pattern as current SoundCloud implementation
- Maintain compatibility with existing post rendering system
- Support responsive embed layouts for mobile and desktop
- Comply with each platform's embed requirements and terms of service
- Work within existing Next.js and React component architecture
</technical_constraints>

<implementation_details>
- **Schema Analysis**: First examine current Post schema to understand SoundCloud field structure
- **Schema Extension**: Add three new fields to Post schema:
  - `appleMusicEmbed`: Apple Music track/album embed URL
  - `spotifyEmbed`: Spotify track/album embed URL  
  - `beatportEmbed`: Beatport track embed URL
- **Embed URL Formats**: Research and implement proper embed URL formats for each platform:
  - Apple Music: embed URLs for tracks/albums
  - Spotify: embed URLs for tracks/albums/playlists
  - Beatport: embed URLs for tracks (if supported)
- **Component Development**: Create or extend existing embed components to handle all platforms
- **Post Rendering**: Ensure embeds display correctly in post content area
- **Responsive Design**: Embeds should work across all device sizes
- **Fallback Handling**: Graceful degradation if embed URLs are invalid or unavailable
</implementation_details>

<success_criteria>
- Post schema successfully extended with three new embed fields
- Content creators can add streaming platform URLs in Sanity Studio
- Embedded players display correctly on published posts
- All embeds are responsive and functional across devices
- Existing SoundCloud functionality remains unaffected
- Embeds load properly without breaking page performance
- Each platform's embed displays with appropriate branding and controls
</success_criteria>

<nice_to_have>
- Auto-detection of streaming platform URLs (paste any URL, system detects platform)
- Preview functionality in Sanity Studio for embed content
- Multiple embeds per post (e.g., both Spotify and Apple Music for same track)
- Consistent styling across all platform embeds
- Analytics tracking for embed interactions
- Option to display platform icons alongside embeds
- Deep linking to native apps when available on mobile devices
</nice_to_have>