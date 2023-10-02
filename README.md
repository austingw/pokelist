# PokeList

## Getting Started

In order to run the app, you will need to install [pnpm](https://pnpm.io/)

If you have npm installed already, this can be done by running
`npm i -g pnpm`

Then install dependencies with
`pnpm i`

and then run the development server with
`pnpm dev`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Built With

1. Next.js - I used the app router
2. Mantine - Very great UI library
3. Tanstack Query -
4. Axios

# A list of code copied in from sources such as Stack Overflow

N/A, I only consulted the documentation for the tools listed above.

• How long was spent on the project?

I spent a little under five hours, due to wanting to hit the stretch goals.

• What are areas you chose to focus in to show off your strengths?

I wanted to focus clean code, project structure, and a user-friendly UI, which is why I went with Mantine for the UI. I use Material UI often at my current role, but find Mantine really interesting due to their hooks, such as the ones I used for debounced search and modal state.

• What is a particular area you took a shortcut for time and what you might do differently in a
real production codebase?

I would say the main shortcut was using mostly default Mantine theming, though I did add some custom styles for the list rows. I think UI/component libraries work great in production when additional time is put in for theming.

I also used Next's App router for this project, which is great for many things, but I think I would agree with common sentiment that it's still better to use the Pages router for production due to some behavior and compatability issues.

• Anything else you wish to share, and think is worth knowing while the project is evaluated.
