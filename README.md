This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Useful Libraries

- Animations
  - [framer-motion](https://www.framer.com/docs/examples/)
  - [react-spring](https://react-spring.io/basics#basics)
- UI
  - Toast
    - react-toastify
  - DatePicker
    - react-datepicker
  - Recaptcha
    - react-google-recaptcha
  - Markdown
    - @uiw/react-markdown-editor
    - react-markdown
  - Star rating
    - react-star-ratings
- Security
  - bcrypt
  - jsonwebtoken
  - Schema Validation
    - joi
    - yup
    - ajw
  - jsrsasign: rsa asymmetric
- DB
  - ORM
    - Prisma
- Other
  - ejs: Embedded JavaScript templates
  - glob: Match files using the patterns the shell uses, like stars and stuff.
  - fastify: api backend
  - sharp: to convert large images in common formats to smaller, web-friendly images of varying dimensions.
  - slug: Slugifies strings, even when they contain Unicode.
  - tsyringe: A lightweight dependency injection container for TypeScript/JavaScript for constructor injection.
  - twilio
- Testing
  - @testing-library/react
  - supertest: HTTP assertions made easy via superagent.
  - @faker-js/faker: Fake data for testing
  - Storybook
    - @storybook/react
    - @storybook/addon-actions
    - @storybook/addon-essentials
    - @storybook/addon-links
    - @storybook/builder-webpack5
    - @storybook/manager-webpack5
  - Test with TypeScript
    - ts-jest: Write test codes with typescript
