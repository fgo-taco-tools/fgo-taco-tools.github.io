import { Silver, Gold, Bronze } from '@/models/Material';
import { NoblePhantasmTargets } from '@/models/NoblePhantasm';
import { Percent } from '@/models/Percent';
import {
  ServantRarity, ServantClass, ServantAttribute, ServantTrait, CardType,
} from '@/models/ServantMiscTypes';
import { ServantStaticData, ServantUpgrades } from '@/models/ServantStaticData';
import { SkillEffectType, SkillEffectTarget } from '@/models/Skills';

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
  rarity: ServantRarity.Uncommon,
  class: ServantClass.Archer,
  baseAtk: 1306,
  baseHp: 1711,
  maxAtk: 7032,
  maxHp: 9506,
  attribute: ServantAttribute.Sky,
  traits: [
    ServantTrait.Divine,
    ServantTrait.Female,
    ServantTrait.Humanoid,
    ServantTrait.Servant,
    ServantTrait.WeakToEnumaElish,
    ServantTrait.Chaotic,
    ServantTrait.Good,
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
          type: SkillEffectType.IncreaseDebuffResist,
          amount: new Percent(20),
        },
      ],
    },
    {
      name: 'Independent Action A+ ',
      effect: [
        {
          type: SkillEffectType.IncreaseCritStrength,
          amount: new Percent(11),
        },
      ],
    },
    {
      name: 'Goddess\' Essence EX',
      effect: [
        {
          type: SkillEffectType.IncreaseDamage,
          amount: 300,
        },
        {
          type: SkillEffectType.IncreaseDebuffResist,
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
        type: SkillEffectType.ReduceNpGaugeChance,
        target: SkillEffectTarget.Enemy,
        minAmount: new Percent(60),
        stepAmount: new Percent(2),
        maxAmount: new Percent(80),
        duration: {
          times: 1,
          turns: 'None',
        },
      },
      {
        type: SkillEffectType.NpGain,
        target: SkillEffectTarget.Self,
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
        type: SkillEffectType.Charm,
        target: SkillEffectTarget.Enemy,
        targetTrait: ServantTrait.Male,
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
    ],
  },
  noblePhantasm: {
    cardType: CardType.Arts,
    name: 'Eye of the Euryale B-',
    minDamagePlus: new Percent(900),
    maxDamagePlus: new Percent(900),
    numOfHits: 1,
    targets: NoblePhantasmTargets.SingleTarget,
    effects: [
      {
        type: SkillEffectType.SpecialAttack,
        target: SkillEffectTarget.Enemy,
        targetTrait: ServantTrait.Male,
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
        type: SkillEffectType.DecreaseAttack,
        target: SkillEffectTarget.TargetAlly,
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
        type: SkillEffectType.Charm,
        target: SkillEffectTarget.EnemyWithTrait,
        targetTrait: ServantTrait.Male,
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
    [[Silver.SerpentJewel, 4]],
    [[Gold.DragonsReverseScale, 3], [Bronze.VoidsDust, 7]],
    [[Bronze.VoidsDust, 13], [Gold.HeartOfTheForeignGod, 4]],
  ],
  skillMats: [
    [],
    [],
    [],
    [[Gold.DragonsReverseScale, 2]],
    [[Gold.DragonsReverseScale, 3]],
    [[Silver.SerpentJewel, 3]],
    [[Silver.SerpentJewel, 6], [Gold.ClawOfChaos, 3]],
    [[Gold.ClawOfChaos, 8], [Gold.HeartOfTheForeignGod, 8]],
  ],
  upgrades: [interludeQuest1],
};
