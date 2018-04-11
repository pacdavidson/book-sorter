# Webpack, React, Redux and Sass Boilerplate

Builds on Steve McKeogh's boilerplate at [https://github.com/thekeogh/webpack-react-redux/](https://github.com/thekeogh/webpack-react-redux/).

## Dev server

Ensure you have Node installed, then;

```shell
$ git clone https://github.com/pacdavidson/pacd-reactish-boilerplate
```

Install node modules

```shell
$ npm install
```

Start the server

```shell
$ npm start
```

Open your browser to `http://localhost:8111`. You can change the hostname and port within the `webpack.config.js` file.

[dotenv-safe](https://www.npmjs.com/package/dotenv-safe) is used for the `.env` variables, therefore all `.env` vars must be declared in the `.env.example` file for them to be usable in the app.

You are provided with two `.env` files, a `.env` which is used for your local development app (webpack dev server) and a `.env.production` which will be used when building your production ready assets via `npm run build` (see [below](#production-build)).

By default `.env.production` is in `.gitignore`, if this doesn't contain any sensitive information, you may want to commit it.

## Testing

A few simple tests have been included using [Jest](https://facebook.github.io/jest) and [Enzyme](https://github.com/airbnb/enzyme).

```shell
$ npm test
```

## Production build

To build production ready assets, simply run:

```shell
$ npm run build
```

This will build a uglified `app-[hash].js` and a minified `app-[hash].css` and automatically create a `index.html` linking these files for you in a `build/` directory.

The `build/` directory is `.gitignore`'d by default, and purged before every build.
