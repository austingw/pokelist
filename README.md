# PokeList

This app is live at [pokelist.vercel.app](https://pokelist.vercel.app)

## Getting Started

In order to run the app, you will need to install [pnpm](https://pnpm.io/)

Install dependencies with

`pnpm i`

And you can run the dev server with

`pnpm dev`

or run
`pnpm build` and then `pnpm start`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Built With

1. [Next.js](https://nextjs.org/) - I used the new /app router for fun, but usually use the traditional /pages router for professional projects
2. [Mantine](https://mantine.dev/) - My favorite component library due to its workflow and amazing hooks package
3. [Tanstack-Query](https://tanstack.com/query/latest/docs/react/overview) - Fantastic data-fetching library
4. [Axios](https://axios-http.com/) - A great Promise-based HTTP client, though after development I found out it seems that using Next.js's [fetch](https://www.reddit.com/r/nextjs/comments/13vqysc/whats_the_deal_with_next_13_app_router_axios/) is better suited for "real" projects using the /app router
