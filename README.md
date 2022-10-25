# Kiddycalc

This is a simple webapp that is intended to help your kid learn to count. 

## Getting Started


First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


**Important**: This project is configured to require fontawesome pro by default.
Please set your auth token to the `FONTAWESOME_NPM_AUTH_TOKEN` environment variable.

### Don't have access to fontawesome pro?

If you want to use the free version of fontawesome, you need to change the `@fortawesome/pro-solid-svg-icons` dependency to `@fortawesome/free-solid-svg-icons` in `package.json` and run `npm install`. 
Then remove the pro icons from `utils/icons.ts` field `ICONS`. 
And finally switch the fontawesome pro import in `_app.tsx` to `@fortawesome/free-solid-svg-icons`.


## Deployment

Either run the application via the supplied Docker container. 

Or alternativly you can deploy it manually following the instructions for [deploying Next.js apps](https://nextjs.org/docs/deployment).
