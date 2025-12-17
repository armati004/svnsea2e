
 const itemTypes = {
    advantage: 'SVNSEA2E.Advantage',
    artifact: 'SVNSEA2E.Artifact',
    background: 'SVNSEA2E.Background',
    duelstyle: 'SVNSEA2E.DuelStyle',
    monsterquality: 'SVNSEA2E.MonsterQuality',
    scheme: 'SVNSEA2E.Scheme',
    secretsociety: 'SVNSEA2E.SecretSociety',
    shipadventure: 'SVNSEA2E.ShipAdventure',
    shipbackground: 'SVNSEA2E.ShipBackground',
    sorcery: 'SVNSEA2E.Sorcery',
    story: 'SVNSEA2E.Story',
    hubris: 'SVNSEA2E.Hubris',
    virtue: 'SVNSEA2E.Virtue',
  };

const actorTypes = {
  brute: 'SVNSEA2E.Brute',
  playercharacter: 'SVNSEA2E.PlayerCharacter',
  monster: 'SVNSEA2E.Monster',
  villain: 'SVNSEA2E.Villain',
  ship: 'SVNSEA2E.Ship',
  hero: 'SVNSEA2E.Hero',
};

const nations = {
  none: 'SVNSEA2E.Empty',
  aksum: 'SVNSEA2E.NationAksum',
  anatol: 'SVNSEA2E.NationAnatol',
  aragosta: 'SVNSEA2E.NationAragosta',
  ashur: 'SVNSEA2E.NationAshur',
  avalon: 'SVNSEA2E.NationAvalon',
  castille: 'SVNSEA2E.NationCastille',
  eisen: 'SVNSEA2E.NationEisen',
  highland: 'SVNSEA2E.NationHighland',
  inismore: 'SVNSEA2E.NationInismore',
  jaragua: 'SVNSEA2E.NationJaragua',
  khemet: 'SVNSEA2E.NationKhemet',
  kuraq: 'SVNSEA2E.NationKuraq',
  labucca: 'SVNSEA2E.NationLaBucca',
  maghreb: 'SVNSEA2E.NationMaghreb',
  manden: 'SVNSEA2E.NationManden',
  mbey: 'SVNSEA2E.NationMbey',
  montaigne: 'SVNSEA2E.NationMontaigne',
  nahuaca: 'SVNSEA2E.NationNahuaca',
  numa: 'SVNSEA2E.NationNuma',
  persis: 'SVNSEA2E.NationPersis',
  rahuri: 'SVNSEA2E.NationRahuri',
  sarmatia: 'SVNSEA2E.NationSarmatia',
  sarmion: 'SVNSEA2E.NationSarmion',
  tribes: 'SVNSEA2E.NationTribes',
  tzakkan: 'SVNSEA2E.NationTzakkan',
  ussura: 'SVNSEA2E.NationUssura',
  vesten: 'SVNSEA2E.NationVesten',
  vodacce: 'SVNSEA2E.NationVodacce',
};

const natTypes = {
  ...nations,
  gisles: 'SVNSEA2E.RegionGlamourIsles',
};

const languages = {
  amizagh: 'SVNSEA2E.LanguageAmizagh',
  awkari: 'SVNSEA2E.LanguageAwkari',
  avalon: 'SVNSEA2E.LanguageAvalonian',
  aztlani: 'SVNSEA2E.LanguageAztlani',
  castille: 'SVNSEA2E.LanguageCastillian',
  eisen: 'SVNSEA2E.LanguageEisen',
  highland: 'SVNSEA2E.LanguageHighlander',
  hylicia: 'SVNSEA2E.LanguageHylicia',
  inismore: 'SVNSEA2E.LanguageInish',
  jaragua: 'SVNSEA2E.LanguageJaragua',
  katabic: 'SVNSEA2E.LanguageKatabic',
  mande: 'SVNSEA2E.LanguageMande',
  montaigne: 'SVNSEA2E.LanguageMontaigne',
  nahuati: 'SVNSEA2E.LanguageNahuati',
  njaay: 'SVNSEA2E.LanguageNjaay',
  numa: 'SVNSEA2E.LanguageNuma',
  persis: 'SVNSEA2E.LanguagePersis',
  pirate: 'SVNSEA2E.LanguagePirate',
  rahuri: 'SVNSEA2E.LanguageRahuri',
  rzeczpospolita: 'SVNSEA2E.LanguageRzeczpospolita',
  sarmatia: 'SVNSEA2E.LanguageCuronian',
  sarmion: 'SVNSEA2E.LanguageDibre',
  sahidic: 'SVNSEA2E.LanguageSahidic',
  taiya: 'SVNSEA2E.LanguageTaiya',
  thean: 'SVNSEA2E.LanguageThean',
  ussura: 'SVNSEA2E.LanguageUssurian',
  vesten: 'SVNSEA2E.LanguageVesten',
  vodacce: 'SVNSEA2E.LanguageVodacce',
  xweda: 'SVNSEA2E.LanguageXweda',
  zeeg: 'SVNSEA2E.LanguageZeeg',
};

const traits = {
  brawn: 'SVNSEA2E.TraitBrawn',
  finesse: 'SVNSEA2E.TraitFinesse',
  resolve: 'SVNSEA2E.TraitResolve',
  wits: 'SVNSEA2E.TraitWits',
  panache: 'SVNSEA2E.TraitPanache',
  influence: 'SVNSEA2E.TraitInfluence',
  strength: 'SVNSEA2E.TraitStrength',
};

const skills = {
  aim: 'SVNSEA2E.SkillAim',
  athletics: 'SVNSEA2E.SkillAthletics',
  brawl: 'SVNSEA2E.SkillBrawl',
  convince: 'SVNSEA2E.SkillConvince',
  empathy: 'SVNSEA2E.SkillEmpathy',
  hide: 'SVNSEA2E.SkillHide',
  intimidate: 'SVNSEA2E.SkillIntimidate',
  notice: 'SVNSEA2E.SkillNotice',
  perform: 'SVNSEA2E.SkillPerform',
  ride: 'SVNSEA2E.SkillRide',
  sailing: 'SVNSEA2E.SkillSailing',
  scholarship: 'SVNSEA2E.SkillScholarship',
  tempt: 'SVNSEA2E.SkillTempt',
  theft: 'SVNSEA2E.SkillTheft',
  warfare: 'SVNSEA2E.SkillWarfare',
  weaponry: 'SVNSEA2E.SkillWeaponry',
};

const storyStatuses = {
  none: 'SVNSEA2E.Empty',
  abandoned: 'SVNSEA2E.StatusAbandoned',
  complete: 'SVNSEA2E.StatusComplete',
  inprogress: 'SVNSEA2E.StatusInProgress',
  future: 'SVNSEA2E.StatusFuture',
};

const sorceryTypes = {
  none: 'SVNSEA2E.Empty',
  hex: 'SVNSEA2E.SorceryHexenwerk',
  knight: 'SVNSEA2E.SorceryAvalonKnight',
  alquimia: 'SVNSEA2E.SorceryAlquimia',
  galdr: 'SVNSEA2E.SorceryGaldr',
  darm: 'SVNSEA2E.SorceryDarMatushki',
  tura: 'SVNSEA2E.SorceryTurasTouch',
  porte: 'SVNSEA2E.SorceryPorte',
  sanderis: 'SVNSEA2E.SorcerySanderis',
  sorte: 'SVNSEA2E.SorcerySorte',
  charter: 'SVNSEA2E.SorceryCharter',
  kapsevi: 'SVNSEA2E.SorceryKapSevi',
  mystirios: 'SVNSEA2E.SorceryMystirios',
  mohwoo: 'SVNSEA2E.SorceryMohwoo',
  prophet: 'SVNSEA2E.SorceryProphet',
  chozeh: 'SVNSEA2E.SorceryChozeh',
  khahesh: 'SVNSEA2E.SorceryKhaheshAhura',
  mithaq: 'SVNSEA2E.SorceryMithaq',
  nawaru: 'SVNSEA2E.SorceryNawaru',
  wayak: 'SVNSEA2E.SorceryWayak',
  wanuy: 'SVNSEA2E.SorceryWanuy',
  heka: 'SVNSEA2E.SorceryHeka',
  melbur: 'SVNSEA2E.SorceryMelbur',
  redtouch: 'SVNSEA2E.SorceryRedTouch',
};

const durations = {
  none: 'SVNSEA2E.Empty',
  scene: 'SVNSEA2E.Scene',
};

const sorceryCats = {
  none: 'SVNSEA2E.Empty',
  ahura: 'SVNSEA2E.Ahura',
  ahpulul: 'SVNSEA2E.Ahpulul',
  amulet: 'SVNSEA2E.Amulet',
  deal: 'SVNSEA2E.Deal',
  disruption: 'SVNSEA2E.Disruption',
  favor: 'SVNSEA2E.Favor',
  gift: 'SVNSEA2E.Gift',
  glamour: 'SVNSEA2E.Glamour',
  gros: 'SVNSEA2E.Gros',
  inscription: 'SVNSEA2E.Inscription',
  knight: 'SVNSEA2E.Knight',
  manifestation: 'SVNSEA2E.Manifestation',
  mark: 'SVNSEA2E.Mark',
  miracle: 'SVNSEA2E.Miracle',
  path: 'SVNSEA2E.Path',
  restriction: 'SVNSEA2E.Restriction',
  script: 'SVNSEA2E.Script',
  talisman: 'SVNSEA2E.Talisman',
  tesse: 'SVNSEA2E.Tesse',
  task: 'SVNSEA2E.Task',
  thiqa: 'SVNSEA2E.Thiqa',
  ti: 'SVNSEA2E.Ti',
  turrus: 'SVNSEA2E.Turrus',
  turn: 'SVNSEA2E.Turn',
  juvenilia: 'SVNSEA2E.Juvenilia',
  magnum: 'SVNSEA2E.MagnumOpus',
  futhark: 'SVNSEA2E.Futhark',
  patron: 'SVNSEA2E.Patron',
  unguents: 'SVNSEA2E.Unguents',
};

const sorcerySubcats = {
  none: 'SVNSEA2E.Empty',
  advanced: 'SVNSEA2E.Advanced',
  common: 'SVNSEA2E.Common',
  baxan: 'SVNSEA2E.Baxan',
  major: 'SVNSEA2E.Major',
  minor: 'SVNSEA2E.Minor',
  pixan: 'SVNSEA2E.Pixan',
  rare: 'SVNSEA2E.Rare',
  great: 'SVNSEA2E.Great',
  small: 'SVNSEA2E.Small',
};

const crewStatuses = {
  none: 'SVNSEA2E.Empty',
  happy: 'SVNSEA2E.Happy',
  dissatisfied: 'SVNSEA2E.Dissatisfied',
  mutinous: 'SVNSEA2E.Mutinous',
};

const artifactTypes = {
  deathtoken: 'SVNSEA2E.DeathToken',
  syrneth: 'SVNSEA2E.Syrneth',
  thiqa: 'SVNSEA2E.Thiqa',
  tailsman: 'SVNSEA2E.Tailsman',
  inscription: 'SVNSEA2E.Inscription',
  mbey: 'SVNSEA2E.Mbey',
  wonder: 'SVNSEA2E.Wonder',
  tatoo: 'SVNSEA2E.Tatoo',
};

const shipRoles = {
  captain: 'SVNSEA2E.Captain',
  firstmate: 'SVNSEA2E.FirstMate',
  quartermaster: 'SVNSEA2E.QuaterMaster',
  accountant: 'SVNSEA2E.Accountant',
  boatswain: 'SVNSEA2E.Boatswain',
  shipsmaster: 'SVNSEA2E.ShipsMaster',
  mastergunner: 'SVNSEA2E.MasterGunner',
  mastermariner: 'SVNSEA2E.MasterMariner',
  captaintops: 'SVNSEA2E.CaptainTops',
  cook: 'SVNSEA2E.Cook',
  surgeon: 'SVNSEA2E.Surgeon',
  midshipmen: 'SVNSEA2E.Midshipmen',
  ableseaman: 'SVNSEA2E.AbleSeaman',
  seaman: 'SVNSEA2E.Seaman',
};

// Namespace 7th Sea Configuration Values
export const SVNSEA2E: SvnSea2eConfig = {
  ASCII: `
==================================================
  _____ _   _       ____
 |___  | |_| |__   / ___|  ___  __ _
    / /| __| '_ \\  \\___ \\ / _ \\/ _\` |
   / / | |_| | | |  ___) |  __/ (_| |
  /_/   \\__|_| |_| |____/ \\___|\\__,_|
==================================================`,
  itemTypes,
  actorTypes,
  nations,
  natTypes,
  languages,
  traits,
  skills,
  storyStatuses,
  sorceryTypes,
  durations,
  sorceryCats,
  sorcerySubcats,
  crewStatuses,
  artifactTypes,
  shipRoles,

  match10: {
    two: [
      [1, 9],
      [2, 8],
      [3, 7],
      [4, 6],
      [5, 5],
    ],
    three: [
      [1, 1, 8],
      [1, 2, 7],
      [1, 3, 6],
      [1, 4, 5],
      [2, 2, 6],
      [2, 3, 5],
      [4, 4, 2],
      [3, 3, 4],
    ],
  },

  match15: {
    two: [
      [4, 11],
      [5, 10],
      [6, 9],
      [7, 8],
    ],
    three: [
      [1, 3, 11],
      [1, 4, 10],
      [1, 5, 9],
      [1, 6, 8],
      [1, 7, 7],
      [2, 2, 11],
      [2, 3, 10],
      [2, 4, 9],
      [2, 5, 8],
      [2, 6, 7],
      [3, 3, 9],
      [3, 4, 8],
      [3, 5, 7],
      [6, 6, 3],
      [4, 4, 7],
      [4, 5, 6],
      [5, 5, 5],
    ],
  },

  match20: {
    two: [
      [10, 10],
      [11, 9],
    ],
    three: [
      [1, 8, 11],
      [1, 9, 10],
      [2, 9, 9],
      [2, 10, 8],
      [2, 11, 7],
      [3, 6, 11],
      [3, 7, 10],
      [3, 8, 9],
      [4, 5, 11],
      [4, 6, 10],
      [4, 7, 9],
      [4, 8, 8],
      [5, 5, 10],
      [5, 6, 9],
      [5, 7, 8],
      [6, 6, 8],
      [6, 7, 7],
    ],
  }
};

export interface SvnSea2eConfig {
  ASCII: string;
  itemTypes: {
    advantage: string;
    artifact: string;
    background: string;
    duelstyle: string;
    monsterquality: string;
    scheme: string;
    secretsociety: string;
    shipadventure: string;
    shipbackground: string;
    sorcery: string;
    story: string;
    hubris: string;
    virtue: string;
  };
  actorTypes: {
    brute: string;
    playercharacter: string;
    monster: string;
    villain: string;
    ship: string;
    hero: string;
  };

  nations: typeof nations;
  natTypes: typeof natTypes;
  // nations: {
  //   none: string;
  //   aksum: string;
  //   anatol: string;
  //   aragosta: string;
  //   ashur: string;
  //   avalon: string;
  //   castille: string;
  //   eisen: string;
  //   highland: string;
  //   inismore: string;
  //   jaragua: string;
  //   khemet: string;
  //   kuraq: string;
  //   labucca: string;
  //   maghreb: string;
  //   manden: string;
  //   mbey: string;
  //   montaigne: string;
  //   nahuaca: string;
  //   numa: string;
  //   persis: string;
  //   rahuri: string;
  //   sarmatia: string;
  //   sarmion: string;
  //   tribes: string;
  //   tzakkan: string;
  //   ussura: string;
  //   vesten: string;
  //   vodacce: string;
  // };
  languages: {
    amizagh: string;
    awkari: string;
    avalon: string;
    aztlani: string;
    castille: string;
    eisen: string;
    highland: string;
    hylicia: string;
    inismore: string;
    jaragua: string;
    katabic: string;
    mande: string;
    montaigne: string;
    nahuati: string;
    njaay: string;
    numa: string;
    persis: string;
    pirate: string;
    rahuri: string;
    rzeczpospolita: string;
    sarmatia: string;
    sarmion: string;
    sahidic: string;
    taiya: string;
    thean: string;
    ussura: string;
    vesten: string;
    vodacce: string;
    xweda: string;
    zeeg: string;
  };
  traits: {
    brawn: string;
    finesse: string;
    resolve: string;
    wits: string;
    panache: string;
    influence: string;
    strength: string;
  };
  skills: {
    aim: string;
    athletics: string;
    brawl: string;
    convince: string;
    empathy: string;
    hide: string;
    intimidate: string;
    notice: string;
    perform: string;
    ride: string;
    sailing: string;
    scholarship: string;
    tempt: string;
    theft: string;
    warfare: string;
    weaponry: string;
  };
  storyStatuses: {
    none: string;
    abandoned: string;
    complete: string;
    inprogress: string;
    future: string;
  };
  sorceryTypes: {
    none: string;
    hex: string;
    knight: string;
    alquimia: string;
    galdr: string;
    darm: string;
    tura: string;
    porte: string;
    sanderis: string;
    sorte: string;
    charter: string;
    kapsevi: string;
    mystirios: string;
    mohwoo: string;
    prophet: string;
    chozeh: string;
    khahesh: string;
    mithaq: string;
    nawaru: string;
    wayak: string;
    wanuy: string;
    heka: string;
    melbur: string;
    redtouch: string;
  };
  durations: {
    none: string;
    scene: string;
  };
  sorceryCats: {
    none: string;
    ahura: string;
    ahpulul: string;
    amulet: string;
    deal: string;
    disruption: string;
    favor: string;
    gift: string;
    glamour: string;
    gros: string;
    inscription: string;
    knight: string;
    manifestation: string;
    mark: string;
    miracle: string;
    path: string;
    restriction: string;
    script: string;
    talisman: string;
    tesse: string;
    task: string;
    thiqa: string;
    ti: string;
    turrus: string;
    turn: string;
    juvenilia: string;
    magnum: string;
    futhark: string;
    patron: string;
    unguents: string;
  };
  sorcerySubcats: {
    none: string;
    advanced: string;
    common: string;
    baxan: string;
    major: string;
    minor: string;
    pixan: string;
    rare: string;
    great: string;
    small: string;
  };
  crewStatuses: {
    none: string;
    happy: string;
    dissatisfied: string;
    mutinous: string;
  };
  artifactTypes: {
    deathtoken: string;
    syrneth: string;
    thiqa: string;
    tailsman: string;
    inscription: string;
    mbey: string;
    wonder: string;
    tatoo: string;
  };
  shipRoles: {
    captain: string;
    firstmate: string;
    quartermaster: string;
    accountant: string;
    boatswain: string;
    shipsmaster: string;
    mastergunner: string;
    mastermariner: string;
    captaintops: string;
    cook: string;
    surgeon: string;
    midshipmen: string;
    ableseaman: string;
    seaman: string;
  };
  match10: {
    two: number[][];
    three: number[][];
  };
  match15: {
    two: number[][];
    three: number[][];
  };
  match20: {
    two: number[][];
    three: number[][];
  };
};