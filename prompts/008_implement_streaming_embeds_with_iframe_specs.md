# Raw User Input
```
here are the embed codes for the streaming platforms for a track called "Koch" by "ironicbuddha": Apple Music: <iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameborder="0" height="450" style="width:100%;max-width:660px;overflow:hidden;border-radius:10px;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/koch-single/1821774346"></iframe>

Spotify: <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/1y0dDijU5C8yuEYPvgVReG?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

Beatport: <iframe src="https://embed.beatport.com/?id=5144438&type=release" width="100%" height="362" frameborder="0" scrolling="no" style="max-width:600px;"></iframe>
```

---

<project_overview>
Implement streaming platform embeds in the blog Post schema and rendering system using the provided iframe specifications for Apple Music, Spotify, and Beatport, following the pattern of existing SoundCloud implementation.
</project_overview>

<core_requirements>
- Add three new embed URL fields to Post schema for Apple Music, Spotify, and Beatport
- Create embed rendering components that generate proper iframe code for each platform
- Support the specific iframe attributes and styling requirements for each platform
- Integrate embeds into blog post display pages seamlessly
- Maintain existing SoundCloud embed functionality
- Allow content creators to add embed URLs through Sanity Studio
</core_requirements>

<technical_constraints>
- Work with existing Sanity CMS Post schema structure
- Follow same implementation pattern as current SoundCloud embed
- Use provided iframe specifications exactly as given
- Ensure responsive design works across all device sizes
- Maintain Next.js and React component architecture
- Support iframe security attributes (sandbox, allow, etc.)
- Handle different iframe dimensions per platform
</technical_constraints>

<implementation_details>
- **Schema Fields**: Add URL fields to Post schema:
  - `appleMusicEmbedUrl`: Store Apple Music embed URLs
  - `spotifyEmbedUrl`: Store Spotify embed URLs  
  - `beatportEmbedUrl`: Store Beatport embed URLs
- **Iframe Specifications per Platform**:
  - **Apple Music**: 
    - Height: 450px, Max-width: 660px
    - Border-radius: 10px, Overflow: hidden
    - Sandbox: allow-forms, allow-popups, allow-same-origin, allow-scripts, etc.
    - Allow: autoplay, encrypted-media, fullscreen, clipboard-write
  - **Spotify**:
    - Height: 352px, Width: 100%
    - Border-radius: 12px
    - Allow: autoplay, clipboard-write, encrypted-media, fullscreen, picture-in-picture  
    - Loading: lazy, data-testid: embed-iframe
  - **Beatport**:
    - Height: 362px, Width: 100%, Max-width: 600px
    - No border-radius, scrolling: no
- **Component Development**: Create React components for each embed type
- **URL Validation**: Ensure embed URLs match expected platform patterns
- **Responsive Behavior**: Embeds scale properly on mobile devices
</implementation_details>

<success_criteria>
- Post schema successfully extended with three new embed URL fields
- Sanity Studio allows content creators to input embed URLs for each platform
- Blog posts render embedded players with exact iframe specifications provided
- Apple Music embeds display with 450px height and proper sandbox attributes
- Spotify embeds display with 352px height and border-radius styling
- Beatport embeds display with 362px height and max-width constraints
- All embeds are responsive and functional across desktop and mobile
- Existing SoundCloud embeds continue to work without issues
- Content loads properly without breaking page performance
</success_criteria>

<nice_to_have>
- Auto-extraction of embed URLs from regular streaming platform URLs
- Preview functionality in Sanity Studio showing how embeds will appear
- Consistent spacing and layout when multiple embeds are present
- Option to display platform branding/labels above each embed
- Fallback messaging if embed fails to load
- Analytics tracking for embed interactions and platform usage
- Option to control which embeds display on mobile vs desktop
- Support for playlist/album embeds in addition to single tracks
</nice_to_have>