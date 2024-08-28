/* eslint-env node */

/*
 * This file runs in a Node context (it's NOT transpiled by Babel), so use only
 * the ES6 features that are supported by your Node version. https://node.green/
 */

const { configure } = require('quasar/wrappers');

module.exports = configure(function (ctx) {
  return {
    // Dev server configuration
    devServer: {
      port: process.env.NODE_ENV === 'production' ? 3000 : (ctx.mode.ssr ? 9100 : 8080),
      open: true, // opens browser window automatically
    },

    // App boot files
    boot: [],

    // CSS files
    css: [
      'app.css'
    ],

    // Extras like icons and fonts
    extras: [
      'roboto-font',
      'material-icons',
    ],

    // Build configuration
    build: {
      target: {
        browser: ['es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1'],
        node: 'node20'
      },
      vueRouterMode: 'hash', // 'hash' or 'history'
      vitePlugins: [
        ['vite-plugin-checker', {
          eslint: {
            lintCommand: 'eslint "./**/*.{js,mjs,cjs,vue}"'
          }
        }, { server: false }]
      ]
    },

    // Framework configuration
    framework: {
      config: {},
      plugins: []
    },

    // Animations
    animations: [],

    // SSR configuration
    ssr: {
      pwa: false,
      prodPort: 3000, // The default port that the production server should use
      middlewares: [
        'render' // keep this as the last one
      ]
    },

    // PWA configuration
    pwa: {
      workboxMode: 'generateSW', // or 'injectManifest'
      injectPwaMetaTags: true,
      swFilename: 'sw.js',
      manifestFilename: 'manifest.json',
      useCredentialsForManifestTag: false,
    },

    // Cordova configuration
    cordova: {},

    // Capacitor configuration
    capacitor: {
      hideSplashscreen: true
    },

    // Electron configuration
    electron: {
      inspectPort: 5858,
      bundler: 'packager',
      packager: {},
      builder: {
        appId: 'music_storee'
      }
    },

    // Browser extension configuration
    bex: {
      contentScripts: [
        'my-content-script'
      ]
    }
  };
});
