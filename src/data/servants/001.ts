import { ServantStaticData, ServantUpgrades } from '@/models/ServantStaticData';
import { Percent } from '@/models/Percent';

const clearCamelot15: ServantUpgrades = {
  name: 'Clear Camelot 15-1',
  changes(mashu: ServantStaticData): ServantStaticData {
    return {
      ...mashu,
      rarity: 'SuperRare',
      maxAtk: 8730,
      maxHp: 12877,
      activeSkill1: {
        name: 'Honorable Wall of Snowflakes',
        initialCooldown: 7,
        effects: [
          {
            type: 'IncreaseDefense',
            target: 'AllAllies',
            minAmount: new Percent(15),
            stepAmount: new Percent(0.5),
            maxAmount: new Percent(20),
            duration: {
              times: 'None',
              turns: 3,
            },
          },
          {
            type: 'IncomingDamageCut',
            target: 'AllAllies',
            minAmount: 2000,
            stepAmount: 0,
            maxAmount: 2000,
            duration: {
              times: 1,
              turns: 'None',
            },
          },
        ],
      },
    };
  },
};

const clearCamelot17: ServantUpgrades = {
  name: 'Clear Camelot 17-1',
  changes(mashu: ServantStaticData): ServantStaticData {
    return {
      ...mashu,
      noblePhantasm: {
        ...mashu.noblePhantasm,
        name: 'Lord Camelot',
        effects: [
          ...mashu.noblePhantasm.effects,
          {
            type: 'AttackUp',
            target: 'AllAlliesExceptSelf',
            amount1: new Percent(30),
            amount2: new Percent(30),
            amount3: new Percent(30),
            amount4: new Percent(30),
            amount5: new Percent(30),
            duration: {
              times: 'None',
              turns: 3,
            },
          },
        ],
      },
    };
  },
};

const ortinax: ServantUpgrades = {
  name: 'Clear Anastasia, Section 21',
  changes(mashu: ServantStaticData): ServantStaticData {
    return {
      ...mashu,
      activeSkill1: {
        name: 'Bunker Bolt A',
        initialCooldown: 6,
        effects: [
          {
            type: 'BusterEffectivenessUp',
            target: 'Self',
            minAmount: new Percent(30),
            stepAmount: new Percent(2),
            maxAmount: new Percent(50),
            duration: {
              times: 1,
              turns: 3,
            },
          },
          {
            type: 'BusterCritDamageUp',
            target: 'Self',
            minAmount: new Percent(30),
            stepAmount: new Percent(2),
            maxAmount: new Percent(50),
            duration: {
              times: 1,
              turns: 3,
            },
          },
        ],
      },
      activeSkill2: {
        name: 'Amalgam Goad D',
        initialCooldown: 7,
        effects: [
          {
            type: 'TargetFocus',
            target: 'Self',
            minAmount: 1,
            maxAmount: 1,
            duration: {
              times: 'None',
              turns: 1,
            },
          },
          {
            type: 'NpGaugeUp',
            target: 'TargetAlly',
            minAmount: 10,
            stepAmount: 1,
            maxAmount: 20,
            duration: {
              times: 'None',
              turns: 1,
            },
          },
        ],
      },
      activeSkill3: {
        name: 'Tragic Shield of Rousal',
        initialCooldown: 9,
        effects: [
          {
            type: 'Invincible',
            target: 'Self',
            minAmount: 1,
            maxAmount: 1,
            duration: {
              times: 'None',
              turns: 1,
            },
          },
          {
            type: 'TargetFocus',
            target: 'Self',
            minAmount: 1,
            maxAmount: 1,
            duration: {
              times: 'None',
              turns: 1,
            },
          },
          {
            type: 'DecreaseHp',
            target: 'Self',
            minAmount: 2500,
            stepAmount: -200,
            maxAmount: 500,
            duration: {
              times: 'None',
              turns: 'None',
            },
          },
        ],
      },
      noblePhantasm: {
        ...mashu.noblePhantasm,
        name: 'Mold Camelot',
        effects: [
          {
            type: 'IncomingDamageCut',
            target: 'AllAllies',
            amount1: 100,
            amount2: 550,
            amount3: 775,
            amount4: 888,
            amount5: 1000,
            duration: {
              times: 3,
              turns: 5,
            },
          },
        ],
        overchargeEffects: [
          {
            type: 'IncreaseDefense',
            target: 'AllAllies',
            amount1: new Percent(30),
            amount2: new Percent(35),
            amount3: new Percent(40),
            amount4: new Percent(45),
            amount5: new Percent(50),
            duration: {
              times: 'None',
              turns: 3,
            },
          },
        ],
      },
    };
  },
};

export const s001: ServantStaticData = {
  id: 1,
  name: 'Mash Kyrielight',
  rarity: 'Rare',
  class: 'Shielder',
  baseAtk: 1261,
  baseHp: 1854,
  maxAtk: 6791,
  maxHp: 10302,
  attribute: 'Earth',
  traits: [
    'DemiServant',
    'Female',
    'Humanoid',
    'LivingHuman',
    'Riding',
    'Servant',
    'WeakToEnumaElish',
  ],
  npPerHit: 0.84,
  npWhenAttacked: 3,
  starAbsorption: 99,
  starGenerationPerHit: new Percent(9.9),
  passiveSkills: [
    {
      name: 'Magic Resistance A',
      effect: [{
        type: 'IncreaseDebuffResist',
        amount: new Percent(20),
      }],
    },
    {
      name: 'Riding C',
      effect: [{
        type: 'QuickCardEffectiveness',
        amount: new Percent(6),
      }],
    },
  ],
  activeSkill1: {
    name: 'Transient Wall of Snowflakes',
    initialCooldown: 7,
    effects: [
      {
        type: 'IncreaseDefense',
        target: 'AllAllies',
        minAmount: new Percent(10),
        stepAmount: new Percent(0.5),
        maxAmount: new Percent(15),
        duration: {
          times: 'None',
          turns: 3,
        },
      },
    ],
  },
  activeSkill2: {
    name: 'Obscurant Wall of Chalk',
    initialCooldown: 9,
    effects: [
      {
        type: 'Invincible',
        target: 'TargetAlly',
        minAmount: 1,
        maxAmount: 1,
        duration: {
          times: 'None',
          turns: 1,
        },
      },
      {
        type: 'NpGaugeUp',
        target: 'TargetAlly',
        minAmount: 10,
        stepAmount: 1,
        maxAmount: 20,
        duration: {
          times: 'None',
          turns: 'None',
        },
      },
    ],
  },
  activeSkill3: {
    name: 'Shield of Rousing Resolution',
    initialCooldown: 8,
    effects: [
      {
        type: 'TargetFocus',
        target: 'Self',
        minAmount: 1,
        maxAmount: 1,
        duration: {
          times: 'None',
          turns: 1,
        },
      },
      {
        type: 'NpGain',
        target: 'Self',
        minAmount: new Percent(200),
        stepAmount: new Percent(20),
        maxAmount: new Percent(400),
        duration: {
          times: 'None',
          turns: 1,
        },
      },
    ],
  },
  noblePhantasm: {
    cardType: 'Arts',
    name: 'Lord Chaldeas D',
    minDamagePlus: new Percent(0),
    maxDamagePlus: new Percent(0),
    numOfHits: 0,
    targets: 'None',
    effects: [
      {
        type: 'IncomingDamageCut',
        target: 'AllAllies',
        amount1: 100,
        amount2: 550,
        amount3: 775,
        amount4: 888,
        amount5: 1000,
        duration: {
          times: 1,
          turns: 'None',
        },
      },
    ],
    overchargeEffects: [
      {
        type: 'IncreaseDefense',
        target: 'AllAllies',
        amount1: new Percent(30),
        amount2: new Percent(35),
        amount3: new Percent(40),
        amount4: new Percent(45),
        amount5: new Percent(50),
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
    busterHits: 1,
    quick: 1,
    quickHits: 2,
    extraHits: 3,
  },
  instantDeathChance: 24.5,
  ascensionMats: [
    [],
    [],
    [],
    [],
  ],
  skillMats: [
    [['ProofOfHero', 5]],
    [['DragonFang', 5]],
    [['SeedOfYggdrasil', 5]],
    [['OctupletCrystals', 5]],
    [['VoidsDust', 5]],
    [['EternalGear', 5]],
    [['PhoenixFeather', 5]],
    [['DragonsReverseScale', 5]],
  ],
  upgrades: [
    clearCamelot15,
    clearCamelot17,
    ortinax,
  ],
};

export default s001;
