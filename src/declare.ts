import m from 'moment'
import dsr from './types/a'

m.HTML5_FMT

declare module moment {
  export function getGZTimme(): void 
}

moment.getGZTimme()

declare global {
  namespace dex {
    export const de = 2
  }
}

dex.de

dsr({ da: 1 })