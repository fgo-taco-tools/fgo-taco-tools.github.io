import { Silver, Gold } from '@/models/Material';
import { NoblePhantasmTargets } from '@/models/NoblePhantasm';
import { Percent } from '@/models/Percent';
import {
  ServantRarity, ServantClass, ServantAttribute, ServantTrait, CardType, BattlefieldType,
} from '@/models/ServantMiscTypes';
import { ServantStaticData } from '@/models/ServantStaticData';
import { SkillEffectType, SkillEffectTarget } from '@/models/Skills';

export const s216: ServantStaticData = {
  id: 216,
  name: 'Jeanne d\'Arc (Archer)',
  rarity: ServantRarity.SuperSuperRare,
  class: ServantClass.Archer,
  baseAtk: 1626,
  baseHp: 2309,
  maxAtk: 10525,
  maxHp: 15743,
  attribute: ServantAttribute.Man,
  traits: [
    ServantTrait.Female,
    ServantTrait.Humanoid,
    ServantTrait.Saberface,
    ServantTrait.Servant,
    ServantTrait.WeakToEnumaElish,
  ],
  npPerHit: 0.68,
  npWhenAttacked: 3,
  starAbsorption: 153,
  starGenerationPerHit: new Percent(8),
  passiveSkills: [
    {
      name: 'Magic Resistance B',
      effect: [{
        type: SkillEffectType.IncreaseDebuffResist,
        amount: new Percent(17.5),
      }],
    },
    {
      name: 'Independent Action (Celeb) EX ',
      effect: [
        {
          type: SkillEffectType.IncreaseCritStrength,
          amount: new Percent(10),
        },
        {
          type: SkillEffectType.NpGaugeUp,
          amount: 3,
          battlefield: BattlefieldType.Waterside,
        },
      ],
    },
  ],
  activeSkill1: {
    name: 'Endless Enjoy Summer! A',
    initialCooldown: 7,
    effects: [
      {
        type: SkillEffectType.ArtsEffectivenessUp,
        target: SkillEffectTarget.Self,
        minAmount: new Percent(20),
        stepAmount: new Percent(1),
        maxAmount: new Percent(30),
        duration: {
          times: 'None',
          turns: 3,
        },
      },
      {
        type: SkillEffectType.Invincible,
        target: SkillEffectTarget.Self,
        minAmount: 0,
        stepAmount: 0,
        maxAmount: 0,
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
        type: SkillEffectType.NpGaugeUp,
        target: SkillEffectTarget.Self,
        minAmount: 20,
        stepAmount: 2,
        maxAmount: 40,
        duration: {
          times: 'None',
          turns: 'None',
        },
      },
      {
        type: SkillEffectType.NpDamageUp,
        target: SkillEffectTarget.Self,
        minAmount: new Percent(10),
        stepAmount: new Percent(1),
        maxAmount: new Percent(20),
        duration: {
          times: 'None',
          turns: 3,
        },
      },
      {
        type: SkillEffectType.IncreaseCritStrength,
        target: SkillEffectTarget.Self,
        minAmount: new Percent(30),
        stepAmount: new Percent(2),
        maxAmount: new Percent(50),
        duration: {
          times: 'None',
          turns: 3,
        },
        battlefield: BattlefieldType.Waterside,
      },
    ],
  },
  activeSkill3: {
    name: 'Servant Cheer! B',
    initialCooldown: 7,
    effects: [
      {
        type: SkillEffectType.AttackUp,
        target: SkillEffectTarget.AllAllies,
        minAmount: new Percent(10),
        stepAmount: new Percent(1),
        maxAmount: new Percent(20),
        duration: {
          times: 'None',
          turns: 3,
        },
      },
      {
        type: SkillEffectType.AttackUp,
        target: SkillEffectTarget.AllAlliesExceptSelf,
        minAmount: new Percent(10),
        stepAmount: new Percent(1),
        maxAmount: new Percent(20),
        targetTrait: ServantTrait.Good,
        duration: {
          times: 'None',
          turns: 3,
        },
      },
    ],
  },
  noblePhantasm: {
    cardType: CardType.Arts,
    name: 'Des Océans d\'Allégresse',
    minDamagePlus: new Percent(450),
    maxDamagePlus: new Percent(750),
    numOfHits: 4,
    targets: NoblePhantasmTargets.AreaOfEffect,
    effects: [
    ],
    overchargeEffects: [
      {
        type: SkillEffectType.GainCritStars,
        target: SkillEffectTarget.Self,
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
    [[Silver.EternalIce, 8]],
    [[Silver.ShellOfReminiscence, 10], [Silver.AuroraSteel, 5]],
    [[Silver.AuroraSteel, 10], [Gold.ScarabOfWisdom, 5]],
  ],
  skillMats: [
    [],
    [],
    [],
    [[Silver.ShellOfReminiscence, 5]],
    [[Silver.ShellOfReminiscence, 10]],
    [[Silver.EternalIce, 5]],
    [[Silver.EternalIce, 10], [Silver.PhoenixFeather, 5]],
    [[Silver.PhoenixFeather, 15], [Gold.MysteriousDivineWine, 10]],
  ],
  upgrades: [],
};
