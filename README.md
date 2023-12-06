## Fonts
Fonts play a significant role in the design of a website, but using custom fonts in your project can affect performance if the font files need to be fetched and loaded.

Cumulative Layout Shift(CLS) is a metric used by Google to evaluate the performance and user experience of a website. With fonts, layout shift happens when the browser initially renders text in a fallback or system font and then swaps it out for a custom font once it has loaded. This swap can cause the text size, spacing, or layout to change, shifting elements around it.

Next.js automatically optimizes fonts in the application when you use the next/font module. It downloads font files at build time and hosts them with your other static assets. This means when a user visits your application, there are no additional network requests for fonts which would impact performance.


## Images
The <Image> Component is an extension of the HTML <img> tag, and comes with automatic image optimization, such as:
- Preventing layout shift automatically when images are loading.
- Resizing images to avoid shipping large images to devices with a smaller viewport.
- Lazy loading images by default (images load as they enter the viewport).
- Serving images in modern formats, like WebP and AVIF, when the browser supports it.

It's good practice to set the width and height of your images to avoid layout shift, these should be an aspect ratio identical to the source image.

## Layouts and Templates
One benefit of using layouts in Next.js is that on navigation, only the page components update while the layout won't re-render. This is called [partial rendering](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#3-partial-rendering).

Templates are the exact same as Layouts, except that they render every time a route changes. This is useful for things like enter and exit animations and useEffect logic that happens on render.

## Navigation
Link allows you to do client-side navigation with JavaScript (no full refresh).

Automatic code-splitting and prefetching:
- To improve the navigation experience, Next.js automatically code splits your application by route segments. This is different from a traditional React SPA, where the browser loads all your application code on initial load.
- Splitting code by routes means that pages become isolated. If a certain page throws an error, the rest of the application will still work.
- Futhermore, in production, whenever Link components appear in the browser's viewport, Next.js automatically prefetches the code for the linked route in the background. By the time the user clicks the link, the code for the destination page will already be loaded in the background, and this is what makes the page transition near-instant!






