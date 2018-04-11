# Google Book Sorter

Builds on boilerplate at [https://github.com/pacdavidson/reactish-boilerplate](https://github.com/pacdavidson/reactish-boilerplate).

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
