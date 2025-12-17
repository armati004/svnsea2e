// only required for dev
// in prod, foundry loads index.js, which is compiled by vite/rollup
// in dev, foundry loads index.js, this file, which loads svnsea2e.ts

window.global = window;
import * as SvnSea2e from "./svnsea2e.ts";