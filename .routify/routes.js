
/**
 * @roxi/routify 2.18.12
 * File generated Sat May 27 2023 21:27:22 GMT+0530 (India Standard Time)
 */

export const __version = "2.18.12"
export const __timestamp = "2023-05-27T15:57:22.846Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "root": true,
  "children": [
    {
      "isIndex": true,
      "isPage": true,
      "path": "/index",
      "id": "_index",
      "component": () => import('../src/pages/index.svelte').then(m => m.default)
    },
    {
      "isDir": true,
      "ext": "",
      "children": [
        {
          "isIndex": true,
          "isPage": true,
          "path": "/wc/index",
          "id": "_wc_index",
          "component": () => import('../src/pages/wc/index.svelte').then(m => m.default)
        }
      ],
      "path": "/wc"
    }
  ],
  "path": "/"
}


export const {tree, routes} = buildClientTree(_tree)

