import { ServantStaticData } from '@/models/ServantStaticData';

export const s222: ServantStaticData = {
  id: 222,
  name: 'Mysterious Heroine XX',
  japaneseName: '謎のヒロインＸＸ',
  otherNames: ['MHXX', 'Mysterious Heroine X (Foreigner)', 'Summer MHX'],
  referenceData: {
    region: 'Servant Universe',
    source: 'Cosmo Guardian Trilogy',
    series: 'Fate/Grand Order',
    voiceActor: 'Kawasumi Ayako',
    illustrator: 'BUNBUN',
    growthCurve: 'ReverseS',
    releaseDateJapan: new Date('2018-08-16'),
    releaseDateNA: new Date('2020-08-09'),
    height: 154,
    weight: 48,
    stats: {
      agility: 'B',
      endurance: 'B',
      luck: 'D',
      mana: 'E',
      np: 'EX',
      strength: 'B',
    },
  },
  rarity: 'SuperRare',
  class: 'Foreigner',
  baseAtk: 1625,
  baseHp: 1800,
  maxAtk: 9751,
  maxHp: 11250,
  attribute: 'Star',
  traits: [
    'Arthur',
    'BrynhildrsBeloved',
    'Dragon',
    'Female',
    'Humanoid',
    'King',
    'Riding',
    'Saberface',
    'Servant',
  ],
  npPerHit: 0.64,
  npWhenAttacked: 3,
  starAbsorption: 147,
  starGenerationPerHit: '15%',
  passiveSkills: [
    {
      name: 'Entity of the Outer Realm D',
      effect: [
        {
          type: 'GainCritStars',
          amount: 2,
        },
        {
          type: 'IncreaseDebuffResist',
          amount: '4%',
        },
      ],
    },
    {
      name: 'Cosmo Reactor B',
      effect: [
        {
          type: 'IncreaseCritStarDropRate',
          amount: '8%',
        },
      ],
    },
    {
      name: 'Independent Action A',
      effect: [
        {
          type: 'IncreaseCritStrength',
          amount: '10%',
        },
      ],
    },
    {
      name: 'Riding A',
      effect: [
        {
          type: 'QuickCardEffectiveness',
          amount: '10%',
        },
      ],
    },
  ],
  activeSkill1: {
    name: 'Suit Up EX',
    initialCooldown: 7,
    effects: [
      {
        type: 'Invincible',
        target: 'Self',
        minAmount: 0,
        stepAmount: 0,
        duration: {
          times: 'None',
          turns: 1,
        },
      },
      {
        type: 'AttackUp',
        target: 'Self',
        minAmount: '30%',
        stepAmount: '2%',
        duration: {
          times: 'None',
          turns: 1,
        },
      },
    ],
  },
  activeSkill2: {
    name: 'Police Instincts E',
    initialCooldown: 6,
    effects: [
      {
        type: 'GainCritStars',
        target: 'Self',
        minAmount: 10,
        stepAmount: 1,
        duration: {
          times: 'None',
          turns: 'None',
        },
      },
      {
        type: 'DecreaseCritStarGatherRate',
        target: 'Self',
        minAmount: '50%',
        stepAmount: '5%',
        duration: {
          times: 'None',
          turns: 1,
        },
      },
    ],
  },
  activeSkill3: {
    name: 'Justice of World\'s End A',
    initialCooldown: 7,
    effects: [
      {
        type: 'IgnoreInvincible',
        target: 'Self',
        minAmount: 0,
        stepAmount: 0,
        duration: {
          times: 'None',
          turns: 1,
        },
      },
      {
        type: 'NpGain',
        target: 'Self',
        minAmount: 20,
        stepAmount: 1,
        duration: {
          times: 'None',
          turns: 'None',
        },
      },
      {
        type: 'SpecialAttack',
        target: 'Self',
        minAmount: '30%',
        stepAmount: '2%',
        targetTrait: 'ThreatToHumanity',
        duration: {
          times: 'None',
          turns: 1,
        },
      },
    ],
  },
  noblePhantasm: {
    cardType: 'Arts',
    name: 'Etherspace, Yet Lawful EX',
    minDamagePlus: '900%',
    maxDamagePlus: '1500%',
    numOfHits: 4,
    targets: 'SingleTarget',
    effects: [
      {
        type: 'SpecialAttack',
        target: 'Self',
        targetTrait: 'Saber',
        amount1: '150%',
        amount2: '150%',
        amount3: '150%',
        amount4: '150%',
        amount5: '150%',
        duration: {
          times: 1,
          turns: 'None',
        },
      },
    ],
    overchargeEffects: [
      {
        type: 'AttackUp',
        target: 'Self',
        amount1: '20%',
        amount2: '30%',
        amount3: '40%',
        amount4: '50%',
        amount5: '60%',
        duration: {
          times: 'None',
          turns: 1,
        },
      },
    ],
  },
  cards: {
    arts: 2,
    artsHits: 3,
    buster: 2,
    busterHits: 4,
    quick: 1,
    quickHits: 4,
    extraHits: 4,
  },
  instantDeathChance: 10,
  ascensionMats: [
    [['DragonFang', 8], ['EternalGear', 8]],
    [['BlackBeastGrease', 8], ['GreatKnightMedal', 8]],
    [['TearstoneOfBlood', 8], ['GiantsRing', 8]],
    [['DragonsReverseScale', 8], ['PrimordialLanugo', 8]],
  ],
  skillMats: [
    [['ProofOfHero', 8]],
    [['DragonFang', 8]],
    [['EternalGear', 8]],
    [['GreatKnightMedal', 10]],
    [['AuroraSteel', 10]],
    [['GiantsRing', 12]],
    [['PrimordialLanugo', 12]],
    [['DragonsReverseScale', 12]],
  ],
  upgrades: [],
};
