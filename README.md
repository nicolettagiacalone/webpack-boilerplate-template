# webpack-boilerplate-template
A webpack boilerplate template to build Frontend assets.

**This is not a full guide about Webpack, but it give you a briefly overview about the tool and a ready to use template configuration and dependencies to build your Frontend assets based on an entry point. For more detailed information, please check out the Official Webpack documentation [https://webpack.js.org/concepts/]**

## What is Webpack?
Webpack is a popular module bundler for modern Javascript applications, which means it runs internally during your development and it build a dependecy graph, like a map of how each dependency depends on another.

### Inspect your Webpack bundle
- Webpack Visualizer: [https://chrisbateman.github.io/webpack-visualizer/]
- Webpack Analyzer: [https://webpack.github.io/analyse/]

Both tools take a `.json` file that Webpack generates with the following command:

`webpack --profile --json > webpack-stats.json`

**In this template, a script is already available in the package.json. You could run the following command in your terminal: `npm run stats`**

## What is included in this repository

### Frontend build:
- Webpack compiles the JS and CSS assets for the (HTML5 or Wordpress) Theme.
- Browsersync synchronize file changes and interactions across many devices.

#### Frontend Build/processing:

- `npm run build` – build frontend assets once (script should terminate)
- `npm run dev` – build and watch for changes in file (manually terminate), also provides Browsersync
- `npm run browsersync` - load Browsersync server for browser auto-refresh and syncing between devices

##### Entry points for the build are:

- _/theme/assets/scss/index.scss_
- _/theme/assets/js/index.js_

_Both defined within the `webpack.js` file.

##### Outputs for the build are (respectively):

- _/theme/assets/theme.bundle.css_
- _/theme/assets/theme.bundle.js_

### Dev Dependencies:
- path [https://github.com/jinder/path]
- node-sass [https://www.npmjs.com/package/node-sass]
- Babel [https://babeljs.io/docs/en/]
  - babel/preset-env [https://babeljs.io/docs/en/babel-preset-env]
  - babel-loader [https://github.com/babel/babel-loader]
- Autoprefixer [https://github.com/postcss/autoprefixer]
- Browser-sync [https://www.browsersync.io/docs]
  - browser-sync-webpack-plugin [https://github.com/Va1/browser-sync-webpack-plugin]
- webpack [https://github.com/webpack/webpack]
  - optimize-css-assets-webpack-plugin [https://github.com/NMFR/optimize-css-assets-webpack-plugin]
  - uglifyjs-webpack-plugin [https://github.com/webpack-contrib/uglifyjs-webpack-plugin]
  - mini-css-extract-plugin [https://github.com/webpack-contrib/mini-css-extract-plugin]
  - css-loader [https://github.com/webpack-contrib/css-loader]
  - postcss-loader [https://github.com/postcss/postcss-loader]
  - postcss-import [https://github.com/postcss/postcss-import]
  - sass-loader [https://github.com/webpack-contrib/sass-loader]
- webpack-build-notifier [https://github.com/RoccoC/webpack-build-notifier]
- webpack-cli [https://github.com/webpack/webpack-cli]

### (Optional) Project Dependencies:
- Bootstrap [https://github.com/twbs/bootstrap]
- jQuery [https://github.com/jquery/jquery]
- Popper.js [https://github.com/FezVrasta/popper.js]

## How you could use this template
To build a HTML5 or Wordpress Theme.
**This is not a configuration to build Frontend assets for Gutenberg blocks in Wordpress V.5**

## ToDo:
- Improve output filenames: use different bundle names for `production` and `development` mode.
- Prevent caching: add unique [hash] to the bundle name when the asset's content changes. 
