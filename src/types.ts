import { SvnSea2EActor } from './actor/actor.js';
import { SvnSea2eConfig } from './config.js';
import { SvnSea2EItem } from './item/item.js';

export interface SvnSea2eGame {
  applications: {
    SvnSea2EActor: SvnSea2EActor,
    SvnSea2EItem: SvnSea2EItem,
  },
  config: SvnSea2eConfig,
  toolbox: FormApplication,
  migrations: object,
}