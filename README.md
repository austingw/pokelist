# PokeList

This app is live at [pokelist.vercel.app](https://pokelist.vercel.app)

## Getting Started

In order to run the app, you will need to install [pnpm](https://pnpm.io/)

Then install dependencies with

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

## Additional Details

• A list of code copied in from sources such as Stack Overflow

N/A, I only consulted the documentation for the tools listed above.

• How long was spent on the project?

I spent a little under five hours, due to wanting to hit the stretch goals and then troubleshooting a few minor visual issues for deployment.

• What are areas you chose to focus in to show off your strengths?

I wanted to focus on clean code, project structure, and a user-friendly UI, which is why I went with Mantine for the UI. Mantine's Hooks such as the ones I used for debounced search and modal state are really great for quickly getting up and running. I also wanted to demonstrate my full-stack abilities, which is why I have the pokeApi logic on the backend and went for implementing search, pagination, etc. on the backend, as well.

• What is a particular area you took a shortcut for time and what you might do differently in a
real production codebase?

The main shortcut was using Mantine's default theming, though I did add some custom styles for the list rows. I think UI/component libraries work great in production when additional time is put in for proper customization.

I also used Next's App router for this project, which is great for many things, but I think I would agree with common sentiment that it's still better to use the Pages router for production due to some behavior/stability/compatability issues, as this discussion [here](https://www.reddit.com/r/nextjs/comments/13kwcax/the_app_router_is_not_productionready_yet/) alludes to.

• Anything else you wish to share, and think is worth knowing while the project is evaluated.

I think I covered everything above, but I'll say I really enjoyed working on the project. It was fun to get a little more experience with the /app router, despite a few issues getting up and running. If you have any questions or run into any issue, please email me!
