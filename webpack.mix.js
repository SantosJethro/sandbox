/* eslint-disable no-undef */
const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
if (mix.inProduction()) {
  mix.js('resources/js/app.js', 'public/js').react()
    .postCss('resources/css/calendar.css', 'public/css')
    .extract()
    .sourceMaps()
    .version()
    .webpackConfig({
      resolve: {
        alias: {
          'react/jsx-runtime': require.resolve('react/jsx-runtime')
        }
      }
    });
  mix.options({
    terser: {
      extractComments: false,
      terserOptions:{
        compress:{
          drop_console: true
        }
      }
    }
  });
} else {
  mix.webpackConfig({
    watchOptions: {
      poll: true
    },
    devServer: {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      port: 8090,
      // host: '0.0.0.0',
      host: 'localhost',
      hot: true,
      historyApiFallback: true,
      compress: true,
    },
    resolve: {
      alias: {
        'react/jsx-runtime': require.resolve('react/jsx-runtime')
      }
    }
  });

  mix.options({
    terser: {
      extractComments: false,
    },
    hmrOptions: {
      port: 8090,
      // host: '0.0.0.0',
      host: 'localhost',
    },
  });

  mix.js('resources/js/app.js', 'public/js')
    .react();
}