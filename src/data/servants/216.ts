import { ServantStaticData } from '@/models/ServantStaticData';

export const s216: ServantStaticData = {
  id: 216,
  name: 'Jeanne d\'Arc (Archer)',
  japaneseName: 'ジャンヌ・ダルク',
  otherNames: ['Jarcher'],
  referenceData: {
    region: 'France',
    source: 'History',
    series: 'Fate/Grand Order',
    voiceActor: 'Sakamoto Maaya',
    illustrator: 'Takeuchi Takashi',
    growthCurve: 'Linear',
    releaseDateJapan: new Date('2018-08-09'),
    releaseDateNA: new Date('2020-08-03'),
    height: 159,
    weight: 44,
    stats: {
      agility: 'B+',
      endurance: 'A',
      luck: 'A',
      mana: 'C',
      np: 'A',
      strength: 'C',
    },
  },
  rarity: 'SuperSuperRare',
  class: 'Archer',
  baseAtk: 1626,
  baseHp: 2309,
  maxAtk: 10525,
  maxHp: 15743,
  attribute: 'Man',
  traits: [
    'Female',
    'Humanoid',
    'Saberface',
    'Servant',
    'WeakToEnumaElish',
  ],
  npPerHit: 0.68,
  npWhenAttacked: 3,
  starAbsorption: 153,
  starGenerationPerHit: '8%',
  passiveSkills: [
    {
      name: 'Magic Resistance B',
      effect: [{
        type: 'IncreaseDebuffResist',
        amount: '17.5%',
      }],
    },
    {
      name: 'Independent Action (Celeb) EX ',
      effect: [
        {
          type: 'IncreaseCritStrength',
          amount: '10%',
        },
        {
          type: 'NpGaugeUp',
          amount: 3,
          battlefield: 'Waterside',
        },
      ],
    },
  ],
  activeSkill1: {
    name: 'Endless Enjoy Summer! A',
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
      {
        type: 'Invincible',
        target: 'Self',
        minAmount: 0,
        stepAmount: 0,
        duration: {
          times: 2,
          turns: 3,
        },
      },
    ],
  },
  activeSkill2: {
    name: 'Waterfront Saintess (Dolphin) A+',
    initialCooldown: 8,
    effects: [
      {
        type: 'NpGaugeUp',
        target: 'Self',
        minAmount: 20,
        stepAmount: 2,
        duration: {
          times: 'None',
          turns: 'None',
        },
      },
      {
        type: 'NpDamageUp',
        target: 'Self',
        minAmount: '10%',
        stepAmount: '1%',
        duration: {
          times: 'None',
          turns: 3,
        },
      },
      {
        type: 'IncreaseCritStrength',
        target: 'Self',
        minAmount: '30%',
        stepAmount: '2%',
        duration: {
          times: 'None',
          turns: 3,
        },
        battlefield: 'Waterside',
      },
    ],
  },
  activeSkill3: {
    name: 'Servant Cheer! B',
    initialCooldown: 7,
    effects: [
      {
        type: 'AttackUp',
        target: 'AllAllies',
        minAmount: '10%',
        stepAmount: '1%',
        duration: {
          times: 'None',
          turns: 3,
        },
      },
      {
        type: 'AttackUp',
        target: 'AllAlliesExceptSelf',
        minAmount: '10%',
        stepAmount: '1%',
        targetTrait: 'Good',
        duration: {
          times: 'None',
          turns: 3,
        },
      },
    ],
  },
  noblePhantasm: {
    cardType: 'Arts',
    name: 'Des Océans d\'Allégresse',
    minDamagePlus: '450%',
    maxDamagePlus: '750%',
    numOfHits: 4,
    targets: 'AreaOfEffect',
    effects: [
    ],
    overchargeEffects: [
      {
        type: 'GainCritStars',
        target: 'Self',
        amount1: 10,
        amount2: 15,
        amount3: 20,
        amount4: 25,
        amount5: 30,
        duration: {
          times: 'None',
          turns: 3,
        },
      },
    ],
  },
  cards: {
    arts: 2,
    artsHits: 2,
    buster: 2,
    busterHits: 2,
    quick: 1,
    quickHits: 4,
    extraHits: 5,
  },
  instantDeathChance: 24.5,
  ascensionMats: [
    [],
    [['EternalIce', 8]],
    [['ShellOfReminiscence', 10], ['AuroraSteel', 5]],
    [['AuroraSteel', 10], ['ScarabOfWisdom', 5]],
  ],
  skillMats: [
    [],
    [],
    [],
    [['ShellOfReminiscence', 5]],
    [['ShellOfReminiscence', 10]],
    [['EternalIce', 5]],
    [['EternalIce', 10], ['PhoenixFeather', 5]],
    [['PhoenixFeather', 15], ['MysteriousDivineWine', 10]],
  ],
  upgrades: [],
};
