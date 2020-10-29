import { Silver, Gold, Bronze } from '@/models/Material';
import { NoblePhantasmTargets } from '@/models/NoblePhantasm';
import { Percent } from '@/models/Percent';
import {
  ServantRarity, ServantClass, ServantAttribute, ServantTrait, CardType,
} from '@/models/ServantMiscTypes';
import { ServantStaticData } from '@/models/ServantStaticData';
import { SkillEffectType, SkillEffectTarget } from '@/models/Skills';

export const s222: ServantStaticData = {
  id: 222,
  name: 'Mysterious Heroine XX',
  rarity: ServantRarity.SuperRare,
  class: ServantClass.Foreigner,
  baseAtk: 1625,
  baseHp: 1800,
  maxAtk: 9751,
  maxHp: 11250,
  attribute: ServantAttribute.Star,
  traits: [
    ServantTrait.Arthur,
    ServantTrait.BrynhildrsBeloved,
    ServantTrait.Dragon,
    ServantTrait.Female,
    ServantTrait.Humanoid,
    ServantTrait.King,
    ServantTrait.Riding,
    ServantTrait.Saberface,
    ServantTrait.Servant,
  ],
  npPerHit: 0.64,
  npWhenAttacked: 3,
  starAbsorption: 147,
  starGenerationPerHit: new Percent(15),
  passiveSkills: [
    {
      name: 'Entity of the Outer Realm D',
      effect: [
        {
          type: SkillEffectType.GainCritStars,
          amount: 2,
        },
        {
          type: SkillEffectType.IncreaseDebuffResist,
          amount: new Percent(4),
        },
      ],
    },
    {
      name: 'Cosmo Reactor B',
      effect: [
        {
          type: SkillEffectType.IncreaseCritStarDropRate,
          amount: new Percent(8),
        },
      ],
    },
    {
      name: 'Independent Action A',
      effect: [
        {
          type: SkillEffectType.IncreaseCritStrength,
          amount: new Percent(10),
        },
      ],
    },
    {
      name: 'Riding A',
      effect: [
        {
          type: SkillEffectType.QuickCardEffectiveness,
          amount: new Percent(10),
        },
      ],
    },
  ],
  activeSkill1: {
    name: 'Suit Up EX',
    initialCooldown: 7,
    effects: [
      {
        type: SkillEffectType.Invincible,
        target: SkillEffectTarget.Self,
        minAmount: 0,
        stepAmount: 0,
        maxAmount: 0,
        duration: {
          times: 'None',
          turns: 1,
        },
      },
      {
        type: SkillEffectType.AttackUp,
        target: SkillEffectTarget.Self,
        minAmount: new Percent(30),
        stepAmount: new Percent(2),
        maxAmount: new Percent(50),
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
        type: SkillEffectType.GainCritStars,
        target: SkillEffectTarget.Self,
        minAmount: 10,
        stepAmount: 1,
        maxAmount: 20,
        duration: {
          times: 'None',
          turns: 'None',
        },
      },
      {
        type: SkillEffectType.DecreaseCritStarGatherRate,
        target: SkillEffectTarget.Self,
        minAmount: new Percent(50),
        stepAmount: new Percent(5),
        maxAmount: new Percent(100),
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
        type: SkillEffectType.IgnoreInvincible,
        target: SkillEffectTarget.Self,
        minAmount: 0,
        stepAmount: 0,
        maxAmount: 0,
        duration: {
          times: 'None',
          turns: 1,
        },
      },
      {
        type: SkillEffectType.NpGain,
        target: SkillEffectTarget.Self,
        minAmount: 20,
        stepAmount: 1,
        maxAmount: 30,
        duration: {
          times: 'None',
          turns: 'None',
        },
      },
      {
        type: SkillEffectType.SpecialAttack,
        target: SkillEffectTarget.Self,
        minAmount: new Percent(30),
        stepAmount: new Percent(2),
        maxAmount: new Percent(50),
        targetTrait: ServantTrait.ThreatToHumanity,
        duration: {
          times: 'None',
          turns: 1,
        },
      },
    ],
  },
  noblePhantasm: {
    cardType: CardType.Arts,
    name: 'Etherspace, Yet Lawful EX',
    minDamagePlus: new Percent(900),
    maxDamagePlus: new Percent(1500),
    numOfHits: 4,
    targets: NoblePhantasmTargets.SingleTarget,
    effects: [
      {
        type: SkillEffectType.SpecialAttack,
        target: SkillEffectTarget.Self,
        targetTrait: ServantTrait.Saber,
        amount1: new Percent(150),
        amount2: new Percent(150),
        amount3: new Percent(150),
        amount4: new Percent(150),
        amount5: new Percent(150),
        duration: {
          times: 1,
          turns: 'None',
        },
      },
    ],
    overchargeEffects: [
      {
        type: SkillEffectType.AttackUp,
        target: SkillEffectTarget.Self,
        amount1: new Percent(20),
        amount2: new Percent(30),
        amount3: new Percent(40),
        amount4: new Percent(50),
        amount5: new Percent(60),
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
    [[Bronze.DragonFang, 8], [Silver.EternalGear, 8]],
    [[Gold.BlackBeastGrease, 8], [Silver.GreatKnightMedal, 8]],
    [[Gold.TearstoneOfBlood, 8], [Silver.GiantsRing, 8]],
    [[Gold.DragonsReverseScale, 8], [Gold.PrimordialLanugo, 8]],
  ],
  skillMats: [
    [[Bronze.ProofOfHero, 8]],
    [[Bronze.DragonFang, 8]],
    [[Silver.EternalGear, 8]],
    [[Silver.GreatKnightMedal, 10]],
    [[Silver.AuroraSteel, 10]],
    [[Silver.GiantsRing, 12]],
    [[Gold.PrimordialLanugo, 12]],
    [[Gold.DragonsReverseScale, 12]],
  ],
  upgrades: [],
};
