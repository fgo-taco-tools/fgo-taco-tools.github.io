import { Percent } from '@/models/Percent';
import { ServantStaticData, ServantUpgrades } from '@/models/ServantStaticData';

const interludeQuest1: ServantUpgrades = {
  name: 'Interlude Quest 1',
  changes(servant: ServantStaticData): ServantStaticData {
    return {
      ...servant,
      noblePhantasm: {
        ...servant.noblePhantasm,
        minDamagePlus: new Percent(1200),
        maxDamagePlus: new Percent(1200),
      },
    };
  },
};

export const s015: ServantStaticData = {
  id: 15,
  name: 'Euryale',
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
  starGenerationPerHit: new Percent(7.9),
  passiveSkills: [
    {
      name: 'Magic Resistance A',
      effect: [
        {
          type: 'IncreaseDebuffResist',
          amount: new Percent(20),
        },
      ],
    },
    {
      name: 'Independent Action A+ ',
      effect: [
        {
          type: 'IncreaseCritStrength',
          amount: new Percent(11),
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
          amount: new Percent(30),
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
        minAmount: new Percent(60),
        stepAmount: new Percent(2),
        maxAmount: new Percent(80),
        duration: {
          times: 1,
          turns: 'None',
        },
      },
      {
        type: 'NpGain',
        target: 'Self',
        minAmount: new Percent(18),
        stepAmount: new Percent(0.9),
        maxAmount: new Percent(27),
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
        minAmount: new Percent(70),
        stepAmount: new Percent(3),
        maxAmount: new Percent(100),
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
        minAmount: new Percent(20),
        stepAmount: new Percent(1),
        maxAmount: new Percent(30),
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
    minDamagePlus: new Percent(900),
    maxDamagePlus: new Percent(900),
    numOfHits: 1,
    targets: 'SingleTarget',
    effects: [
      {
        type: 'SpecialAttack',
        target: 'Enemy',
        targetTrait: 'Male',
        amount1: new Percent(150),
        amount2: new Percent(200),
        amount3: new Percent(225),
        amount4: new Percent(237.5),
        amount5: new Percent(250),
        duration: {
          times: 1,
          turns: 'None',
        },
      },
      {
        type: 'DecreaseAttack',
        target: 'TargetAlly',
        amount1: new Percent(20),
        amount2: new Percent(20),
        amount3: new Percent(20),
        amount4: new Percent(20),
        amount5: new Percent(20),
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
        amount1: new Percent(100),
        amount2: new Percent(125),
        amount3: new Percent(150),
        amount4: new Percent(175),
        amount5: new Percent(200),
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
