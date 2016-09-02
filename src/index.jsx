import React from 'react'
import ReactDOM from 'react-dom'
import { renderToStaticMarkup } from 'react-dom/server'
import { Router, match, RoutingContext } from 'react-router'
import { createHistory } from 'history'
import reactRouterToArray from 'react-router-to-array'

import { Provider, staticData } from 'flatpack-js'
import routes from './routes'

const paths = reactRouterToArray(routes)

function page (locals, callback) {
  match({ routes, location: locals.path }, (error, redirectLocation, renderProps) => {
    if (error) {
      console.log(error)
    }

    callback(null, `
      <html>
        <head>
          <meta charset="utf-8" />
          <title>Bendik Baksaas</title>
          <style>
            body {
              margin: 0;
              background: black;
              color: white;
            }

            a {
              color: white;
            }
          </style>
        </head>
        <body>
          <div id="target">
            ${renderToStaticMarkup(
              <Provider data={locals.data}>
                <RoutingContext {...renderProps} />
              </Provider>
            )}
          </div>
          ${staticData(locals.data)}
          <script src="/bundle.js"></script>
        </body>
      </html>
    `)
  })
}

if (typeof document !== 'undefined') {
  window.addEventListener('load', () => {
    ReactDOM.render((
      <Provider render={page} paths={paths}>
        <Router history={createHistory()} children={routes} />
      </Provider>
    ), document.getElementById('target'))
  })
}

export default page
