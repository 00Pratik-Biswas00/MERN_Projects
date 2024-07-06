# Teksoi Webstore

Celebal Week 7 Assignment 


## Sections that can be improved further:

1. Better UI.

## Getting Started with Cloning the Repo

1. Download the zip file.
1. Open it in your VS code. 

## Go the project directory 

As multiple projects are in this repo, you have to go to the main directory for that project. Go to the inner folder then  write ->

### 1. `cd E-commerce-webstore`



## In case tailwind CSS is not installed then install it for React [https://tailwindcss.com/docs/guides/create-react-app]

In the terminal paste this ->

1. `npm install -D tailwindcss`
2. `npx tailwindcss init`

Then go to the tailwind.config.js file and make the changes ->

```
content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
```

Now go to the index.css file and update it with this ->

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

