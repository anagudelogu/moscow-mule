/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APIKEY: string
  readonly VITE_AUTHDOMAIN: string
  readonly VITE_PROJECTID: string
  readonly VITE_STORAGEBUCKET: string
  readonly VITE_MESSAGINGSENDERID: string
  readonly VITE_APPID: string
  readonly VITE_MEASUREMENTID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module '*.svg' {
  import React = require('react')

  export const ReactComponent: React.FC<React.HTMLAttributes<HTMLOrSVGElement>>
  const src: string
  export default src
}
