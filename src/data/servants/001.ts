import { NoblePhantasmTargets } from '@/models/NoblePhantasm';
import {
  CardType, ServantAttribute, ServantClass, ServantRarity, ServantTrait,
} from '@/models/ServantMiscTypes';
import { ServantStaticData, ServantUpgrades } from '@/models/ServantStaticData';
import { SkillEffectTarget, SkillEffectType } from '@/models/Skills';
import { Percent } from '@/models/Percent';
import {
  Bronze, Gold, Silver,
} from '@/models/Material';

const clearCamelot15: ServantUpgrades = {
  name: 'Clear Camelot 15-1',
  changes(mashu: ServantStaticData): ServantStaticData {
    return {
      ...mashu,
      rarity: ServantRarity.SuperRare,
      maxAtk: 8730,
      maxHp: 12877,
      activeSkill1: {
        name: 'Honorable Wall of Snowflakes',
        initialCooldown: 7,
        effects: [
          {
            type: SkillEffectType.IncreaseDefense,
            target: SkillEffectTarget.AllAllies,
            minAmount: new Percent(15),
            stepAmount: new Percent(0.5),
            maxAmount: new Percent(20),
            duration: {
              times: 'None',
              turns: 3,
            },
          },
          {
            type: SkillEffectType.IncomingDamageCut,
            target: SkillEffectTarget.AllAllies,
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
            type: SkillEffectType.AttackUp,
            target: SkillEffectTarget.AllAlliesExceptSelf,
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
            type: SkillEffectType.BusterEffectivenessUp,
            target: SkillEffectTarget.Self,
            minAmount: new Percent(30),
            stepAmount: new Percent(2),
            maxAmount: new Percent(50),
            duration: {
              times: 1,
              turns: 3,
            },
          },
          {
            type: SkillEffectType.BusterCritDamageUp,
            target: SkillEffectTarget.Self,
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
            type: SkillEffectType.TargetFocus,
            target: SkillEffectTarget.Self,
            minAmount: 1,
            maxAmount: 1,
            duration: {
              times: 'None',
              turns: 1,
            },
          },
          {
            type: SkillEffectType.NpGaugeUp,
            target: SkillEffectTarget.TargetAlly,
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
            type: SkillEffectType.Invincible,
            target: SkillEffectTarget.Self,
            minAmount: 1,
            maxAmount: 1,
            duration: {
              times: 'None',
              turns: 1,
            },
          },
          {
            type: SkillEffectType.TargetFocus,
            target: SkillEffectTarget.Self,
            minAmount: 1,
            maxAmount: 1,
            duration: {
              times: 'None',
              turns: 1,
            },
          },
          {
            type: SkillEffectType.DecreaseHp,
            target: SkillEffectTarget.Self,
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
            type: SkillEffectType.IncomingDamageCut,
            target: SkillEffectTarget.AllAllies,
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
            type: SkillEffectType.IncreaseDefense,
            target: SkillEffectTarget.AllAllies,
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
  rarity: ServantRarity.Rare,
  class: ServantClass.Shielder,
  baseAtk: 1261,
  baseHp: 1854,
  maxAtk: 6791,
  maxHp: 10302,
  attribute: ServantAttribute.Earth,
  traits: [
    ServantTrait.DemiServant,
    ServantTrait.Female,
    ServantTrait.Humanoid,
    ServantTrait.LivingHuman,
    ServantTrait.Riding,
    ServantTrait.Servant,
    ServantTrait.WeakToEnumaElish,
  ],
  npPerHit: 0.84,
  npWhenAttacked: 3,
  starAbsorption: 99,
  starGenerationPerHit: new Percent(9.9),
  passiveSkills: [
    {
      name: 'Magic Resistance A',
      effect: [{
        type: SkillEffectType.IncreaseDebuffResist,
        amount: new Percent(20),
      }],
    },
    {
      name: 'Riding C',
      effect: [{
        type: SkillEffectType.QuickCardEffectiveness,
        amount: new Percent(6),
      }],
    },
  ],
  activeSkill1: {
    name: 'Transient Wall of Snowflakes',
    initialCooldown: 7,
    effects: [
      {
        type: SkillEffectType.IncreaseDefense,
        target: SkillEffectTarget.AllAllies,
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
        type: SkillEffectType.Invincible,
        target: SkillEffectTarget.TargetAlly,
        minAmount: 1,
        maxAmount: 1,
        duration: {
          times: 'None',
          turns: 1,
        },
      },
      {
        type: SkillEffectType.NpGaugeUp,
        target: SkillEffectTarget.TargetAlly,
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
        type: SkillEffectType.TargetFocus,
        target: SkillEffectTarget.Self,
        minAmount: 1,
        maxAmount: 1,
        duration: {
          times: 'None',
          turns: 1,
        },
      },
      {
        type: SkillEffectType.NpGain,
        target: SkillEffectTarget.Self,
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
    cardType: CardType.Arts,
    name: 'Lord Chaldeas D',
    minDamagePlus: new Percent(0),
    maxDamagePlus: new Percent(0),
    numOfHits: 0,
    targets: NoblePhantasmTargets.None,
    effects: [
      {
        type: SkillEffectType.IncomingDamageCut,
        target: SkillEffectTarget.AllAllies,
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
        type: SkillEffectType.IncreaseDefense,
        target: SkillEffectTarget.AllAllies,
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
    [[Bronze.ProofOfHero, 5]],
    [[Bronze.DragonFang, 5]],
    [[Silver.SeedOfYggdrasil, 5]],
    [[Silver.OctupletCrystals, 5]],
    [[Bronze.VoidsDust, 5]],
    [[Silver.EternalGear, 5]],
    [[Silver.PhoenixFeather, 5]],
    [[Gold.DragonsReverseScale, 5]],
  ],
  upgrades: [
    clearCamelot15,
    clearCamelot17,
    ortinax,
  ],
};

export default s001;
