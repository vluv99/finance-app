![Finance App](https://img.shields.io/github/deployments/vluv99/finance-app/production?style=flat&logo=vercel&logoColor=white&label=vercel)

# ![logo.svg](public/logo.svg) Finance App

This is a demo project built to practice and enhance skills with Next.js and React. It provides basic functionality for tracking and managing personal finances.

## Features
 - **Dashboard**: A summary view of your financial data.
 - **Transactions Management**: Add, edit, delete and view transactions.
 - **Categories**: Visualize spending by grouping transactions into categories.
 - **Responsive Design**: Optimized for both desktop and mobile devices.
 - **State Management**: Efficient handling of application state.

## Tech Stack
 - **Next.js**: Framework for building React applications with server-side rendering and static site generation.
 - **React**: Library for building user interfaces.
 - **Tailwind**: For styling the application.
 - **PostgreSQL**: Object-relational database system.
 - **Drizzle ORM**: Define and manage database schemas in TypeScript, access data in a SQL-like or relational way.
 - **Shadcn**: Beautifully designed components that can be copied and pasted into apps.

## Getting Started
1. **Bun** (or npm), **Git** and **NodeJS** should be installed.
2. Clone this project to your local computer.
3. Create `.env.local` file in **root** directory
4. Match contents `.env.local` to the template below:
```dotenv
# clerk.com - auth keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
CLERK_PUBLISHABLE_KEY=pk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
CLERK_SECRET_KEY=sk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# clerk redirect url
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# neon.tech - postgres database url
DATABASE_URL=postgresql://<username>:<password>@<hostname>/<database>?sslmode=require

# change this in production!
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Screenshots
![Dashboard](/.github/images/dashboard.png "Modern dashboard design")

![Transactions](/.github/images/transactions.png "Transactions overview")

## Acknowledgments
This project was inspired by a tutorial on learning Next.js and React. Special thanks to the tutorial creator for the guidance.
[Code With Antonio](https://youtu.be/N_uNKAus0II?si=YWN1A2SOyt6osTRF).
