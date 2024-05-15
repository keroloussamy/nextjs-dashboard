# Next.js Dashboard app
> Following the [Next.js learn tutorial](https://nextjs.org/learn/dashboard-app) for learning Next.js 14 features.

<img src="./app/opengraph-image.png" >

## Built With

- Next.js 14
- Next Auth
- PostgreSQL

## Notes
> Use Email: ```user@nextmail.com``` and Password: ```123456``` to login.

## Some points to remember :

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

## Static and Dynamic Rendering
### Static rendering
With static rendering, data fetching and rendering happens on the server at build time (when you deploy) or during [revalidation](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#revalidating-data). The result can then be distributed and cached in a [Content Delivery Network (CDN)](https://nextjs.org/docs/app/building-your-application/rendering/server-components#static-rendering-default).

Whenever a user visits your application, the cached result is served. There are a couple of benefits of static rendering: Faster Websites, Reduced Server Load, Good SEO.

Static rendering is useful for UI with no data or data that is shared across users, such as a static blog post or a product page. It might not be a good fit for a dashboard that has personalized data that is regularly updated.

### Dynamic rendering
With dynamic rendering, content is rendered on the server for each user at request time (when the user visits the page). There are a couple of benefits of dynamic rendering: Real-Time Data, User-Specific Content, Request Time Information (such as cookies or the URL search parameters).

## Request waterfall or parallel
"Request waterfall": "waterfall" refers to a sequence of network requests that depend on the completion of previous requests.
You can request in parallel using Promise.all() or Promise.allSettled() this good for performance but what happens if one data request is slower than all the others?

## Streaming
Streaming is a data transfer technique that allows you to break down a route into smaller "chunks" and progressively stream them from the server to the client as they become ready.

There are two ways you implement streaming in Next.js:
- At the page level, with the loading.tsx file.
- For specific components, with ```<Suspense>```.



## When to use the useSearchParams() hook vs. the searchParams prop?
You might have noticed you used two different ways to extract search params. Whether you use one or the other depends on whether you're working on the client or the server.

- ```<Search>``` is a Client Component, so you used the useSearchParams() hook to access the params from the client.
- ```<Table> ``` is a Server Component that fetches its own data, so you can pass the searchParams prop from the page to the component.
  
As a general rule, if you want to read the params from the client, use the useSearchParams() hook as this avoids having to go back to the server.

## input: defaultValue vs. value / Controlled vs. Uncontrolled
If you're using state to manage the value of an input, you'd use the value attribute to make it a controlled component. This means React would manage the input's state.

However, since you're not using state, you can use defaultValue. This means the native input will manage its own state. This is okay since you're saving the search query to the URL instead of state.