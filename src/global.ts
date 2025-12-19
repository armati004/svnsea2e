import type { SvnSea2eConfig } from './config';
import type { SvnSea2eGame } from './types';

declare global {
  interface ReadyGame {
    svnsea2e: SvnSea2eGame;
  }

  interface CONFIG {
    SVNSEA2E: SvnSea2eConfig;
  }
}

declare module "@league-of-foundry-developers/foundry-vtt-types/configuration" {
  interface SystemNameConfig {
    name: "svnsea2e";
  }  

  // Assume the system is ready so that things like `game.settings` can be
  // accessed without an undefined qualifier.
  interface AssumeHookRan {
    ready: true;
  }
  
}