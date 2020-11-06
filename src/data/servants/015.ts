import { ServantStaticData, ServantUpgrades } from '@/models/ServantStaticData';

const interludeQuest1: ServantUpgrades = {
  name: 'Interlude Quest 1',
  changes(servant: ServantStaticData): ServantStaticData {
    return {
      ...servant,
      noblePhantasm: {
        ...servant.noblePhantasm,
        minDamagePlus: '1200%',
        maxDamagePlus: '1200%',
      },
    };
  },
};

export const s015: ServantStaticData = {
  id: 15,
  name: 'Euryale',
  japaneseName: 'エウリュアレ',
  otherNames: ['The Far-Flier'],
  referenceData: {
    region: 'Europe',
    source: 'Greek Mythology',
    voiceActor: 'Yuu Asakawa',
    series: 'Fate/hollow ataraxia',
    illustrator: 'AKIRA',
    growthCurve: 'Linear',
    releaseDateJapan: 'Game Launch',
    height: 134,
    weight: 30,
    stats: {
      agility: 'C',
      endurance: 'E',
      luck: 'EX',
      mana: 'EX',
      np: 'C',
      strength: 'E',
    },
  },
  rarity: 'Uncommon',
  class: 'Archer',
  baseAtk: 1306,
  baseHp: 1711,
  maxAtk: 7032,
  maxHp: 9506,
  attribute: 'Sky',
  traits: [
    'Divine',
    'Female',
    'Humanoid',
    'Servant',
    'WeakToEnumaElish',
    'Chaotic',
    'Good',
  ],
  npPerHit: 0.9,
  npWhenAttacked: 3,
  starAbsorption: 156,
  starGenerationPerHit: '7.9%',
  passiveSkills: [
    {
      name: 'Magic Resistance A',
      effect: [
        {
          type: 'IncreaseDebuffResist',
          amount: '20%',
        },
      ],
    },
    {
      name: 'Independent Action A+ ',
      effect: [
        {
          type: 'IncreaseCritStrength',
          amount: '11%',
        },
      ],
    },
    {
      name: 'Goddess\' Essence EX',
      effect: [
        {
          type: 'IncreaseDamage',
          amount: 300,
        },
        {
          type: 'IncreaseDebuffResist',
          amount: '30%',
        },
      ],
    },
  ],
  activeSkill1: {
    name: 'Bloodsucker C',
    initialCooldown: 8,
    effects: [
      {
        type: 'ReduceNpGaugeChance',
        target: 'Enemy',
        minAmount: '60%',
        stepAmount: '2%',
        duration: {
          times: 1,
          turns: 'None',
        },
      },
      {
        type: 'NpGain',
        target: 'Self',
        minAmount: '18%',
        stepAmount: '0.9%',
        duration: {
          times: 'None',
          turns: 'None',
        },
      },
    ],
  },
  activeSkill2: {
    name: 'Siren Song A',
    initialCooldown: 9,
    effects: [
      {
        type: 'Charm',
        target: 'Enemy',
        targetTrait: 'Male',
        minAmount: '70%',
        stepAmount: '3%',
        duration: {
          times: 'None',
          turns: 1,
        },
      },
    ],
  },
  activeSkill3: {
    name: 'Whim of Goddess A',
    initialCooldown: 7,
    effects: [
      {
        type: 'ArtsEffectivenessUp',
        target: 'Self',
        minAmount: '20%',
        stepAmount: '1%',
        duration: {
          times: 'None',
          turns: 3,
        },
      },
    ],
  },
  noblePhantasm: {
    cardType: 'Arts',
    name: 'Eye of the Euryale B-',
    minDamagePlus: '900%',
    maxDamagePlus: '900%',
    numOfHits: 1,
    targets: 'SingleTarget',
    effects: [
      {
        type: 'SpecialAttack',
        target: 'Enemy',
        targetTrait: 'Male',
        amount1: '150%',
        amount2: '200%',
        amount3: '225%',
        amount4: '237.5%',
        amount5: '250%',
        duration: {
          times: 1,
          turns: 'None',
        },
      },
      {
        type: 'DecreaseAttack',
        target: 'TargetAlly',
        amount1: '20%',
        amount2: '20%',
        amount3: '20%',
        amount4: '20%',
        amount5: '20%',
        duration: {
          times: 'None',
          turns: 3,
        },
      },
    ],
    overchargeEffects: [
      {
        type: 'Charm',
        target: 'EnemyWithTrait',
        targetTrait: 'Male',
        amount1: '100%',
        amount2: '125%',
        amount3: '150%',
        amount4: '175%',
        amount5: '200%',
        duration: {
          times: 'None',
          turns: 1,
        },
      },
    ],
  },
  cards: {
    arts: 2,
    artsHits: 2,
    buster: 1,
    busterHits: 1,
    quick: 2,
    quickHits: 3,
    extraHits: 3,
  },
  instantDeathChance: 22.5,
  ascensionMats: [
    [],
    [['SerpentJewel', 4]],
    [['DragonsReverseScale', 3], ['VoidsDust', 7]],
    [['VoidsDust', 13], ['HeartOfTheForeignGod', 4]],
  ],
  skillMats: [
    [],
    [],
    [],
    [['DragonsReverseScale', 2]],
    [['DragonsReverseScale', 3]],
    [['SerpentJewel', 3]],
    [['SerpentJewel', 6], ['ClawOfChaos', 3]],
    [['ClawOfChaos', 8], ['HeartOfTheForeignGod', 8]],
  ],
  upgrades: [interludeQuest1],
};
