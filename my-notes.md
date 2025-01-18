## Step-by-Step Guide for Setting up Convex API and Frontend

### 1. Install Convex

npx create-convux --version

### 2. Follow the prompts in Terminal

### 3. Navigate to the Convex folder

Go to the `convex` folder in the root of your project.

### 4. Set up API Endpoints

Create and set up a file called `api.ts` containing endpoint handlers.

### 5. Define API Endpoints

Create and set up a file called `http.ts` defining the API endpoints.

### 6. Update Environment Variables

Add the frontend URL to your `.env.local` file, replacing `NEXT_PUBLIC_CONVEX_URL` with the same value but with `.site` instead of `.cloud`.

### 7. Run the Development Server

Finally, run your application using the command:
npm run dev

This will start your development server and allow you to test your Convex API and frontend setup.
