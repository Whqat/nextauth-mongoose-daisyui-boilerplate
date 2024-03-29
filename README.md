# NOTE: THIS REPOSITORY IS AN EXTENSION OF THE REPOSTIORY AT https://github.com/MenvielleValen/nextjs-auth-template
# Next.js 14 - Authentication Template with NextAuth.js and MongoDB

This project is an authentication template for Next.js applications, utilizing NextAuth.js for authentication and MongoDB for database storage. It comes with pre-configured support for email, GitHub, Google, and Facebook authentication providers.

## Features

- Complete authentication setup with NextAuth.js
- Authentication providers: GitHub, Google, Facebook
- MongoDB with Mongoose integration for storing sessions and users
- Examples of route protection and authentication-based redirection
- Easy to customize and extend
- Tailwind CSS

## Prerequisites

Before you begin, make sure you have installed:

- Node.js 12
- npm or yarn
- MongoDB (locally or in the cloud)

## Setup

1. Clone the repository:
2. Install dependencies

# Environment Configuration

Configure your .env.local

## Project Configuration

The authentication template is designed to be flexible and customizable to suit your project's needs. Here's an overview of the key directories and files for customization:

### `components/auth` Directory

This directory contains the initial components for authentication. You are free to modify or replace these components as needed to fit the look and feel of your application. The components provided are a good starting point for understanding how authentication flows within a Next.js application using NextAuth.js.

### `lib/utils` Directory

Within this directory, you'll find essential configuration files for your authentication setup:

- `auth.ts`: This file contains the configuration for your authentication providers. Here, you can add or remove authentication providers based on your application's requirements. It's set up with examples for providers like Email, GitHub, Google, and GitLab, but you can easily extend it with other NextAuth.js supported providers.

- `db.ts`: This file is responsible for the MongoDB adapter initialization. It establishes the connection to your MongoDB database using the credentials provided in your environment variables and configures the MongoDB adapter for NextAuth.js. This adapter is crucial for storing sessions, users, and other authentication-related data in MongoDB.

### Customizing Adapters

If you're considering using a different database or want to explore more about adapters supported by NextAuth.js, you can find comprehensive documentation and guides on the NextAuth.js website:

[NextAuth.js Adapters Documentation](https://authjs.dev/reference/adapter/mongodb)

This link primarily focuses on the MongoDB adapter, but you can navigate the site to find information on other available adapters. Whether you're looking to switch to another database or just curious about the options, the NextAuth.js documentation is an excellent resource.

## Getting Started with the Project

After configuring the authentication providers you need, you're almost ready to launch your application. Follow these steps to get your application up and running:

1. Ensure all necessary provider credentials are correctly set up in your `.env` file.

2. Start the development server by running:

```bash
npm run dev
```
This command compiles your application and starts a local server. You can now navigate to http://localhost:3000 in your web browser to view your application.

## Authentication Flow
By default, if a user is not authenticated, they will be redirected to the /auth route to sign in or sign up. This behavior ensures that only authenticated users can access certain parts of your application. After successfully signing in, users will be redirected back to the home page (/).

## Customizing the Authentication Flow
The default behavior can be customized to suit your application's needs. For example, you might want to redirect users to a different page upon successful authentication or have specific pages that do not require authentication.