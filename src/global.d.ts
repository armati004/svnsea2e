import { SvnSea2eConfig } from './config';

declare global {
  // Since we never use these before `init` tell league types that they are
  // never undefined
  interface LenientGlobalVariableTypes {
    game: never;
    canvas: never;
  }
  
  interface System {
    id: 'svnsea2e';
  }

  interface CONFIG {
    SVNSEA2E: SvnSea2eConfig
  }
}