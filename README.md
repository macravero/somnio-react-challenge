### Somnio challenge - Martin Cravero

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) _and therefore I will keep the setup steps as Next provides them._ You should be able to run the application following the commands below:

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the home page.

[http://localhost:3000/cart](http://localhost:3000/cart) should take you to the shopping cart page.

## Stack:
This project was developed as a quick MVC over the weekend for a coding challenge so no extra complexity was added to the stack. Only baseline Nextjs routing together with styled-componets for quick design and scoped styling.

I decided to use typescript as it helps me with debugging and maintaining some code quality.

The error handling implemented focuses on providing the user with a feedback message on fetch errors.

## Project structure and design choices
The project uses react context to create both a `CartContext` and a `SearchContext` that allowed me to keep homogenous state between the pages and components. 

You will also find a `cart` folder with its homepage and a `components` folder with each componentized piece of the app. There is room to improve the reusability of styled-component classes and also one could argue scoping page-specific components within their own pages. For example, components that are only used by the `Cart` page could reside within a `cart` folder, rather than in the global components folder. This would lead to better organization, make it easier to manage components, and improve clarity as the project scales.

Colors, fonts and sizes were simplified and assumed generic as I had no access to the specific design details. This particularly shows on the color pattern choices, where I used the closest available colors from the native CSS named color list.

I implemented native HTML icons instead of importing an icon library, which would be a wise design choice for scalability. 

I used a couple of React lifecycle hooks to handle certain operations, which required setting components to be client-side. This allowed me to implement these functionalities quickly. However, this approach has its trade-offs, as Next.js is optimized for server-side rendering.

With more time, I would refactor parts of the project to take better advantage of Next.js’s SSR capabilities. This would involve moving certain data-fetching logic to server-side methods like getServerSideProps or getStaticProps, reducing the need for client-side hooks and improving the overall efficiency of the application.