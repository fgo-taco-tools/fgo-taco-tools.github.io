import { Percent } from './Percent';
import { BattlefieldType, Duration, ServantTrait } from './ServantMiscTypes';

export interface PassiveSkill {
    name: string;
    effect: PassiveSkillEffect[];
}

export interface ActiveSkill {
    name: string;
    effects: LevelableSkillEffect[];
    initialCooldown: number;
}

export interface PassiveSkillEffect {
    type: SkillEffectType;
    amount: Percent | number;
    battlefield?: BattlefieldType;
}

export interface LevelableSkillEffect {
    type: SkillEffectType;
    minAmount: Percent | number;
    stepAmount?: Percent | number;
    maxAmount: Percent | number;
    duration: Duration;
    target: SkillEffectTarget;
    targetTrait?: ServantTrait;
    battlefield?: BattlefieldType;
}

export type SkillEffectTarget =
  'AllAllies' |
  'AllAlliesExceptSelf' |
  'AllEnemies' |
  'AlliesWithTrait' |
  'EnemiesWithTrait' |
  'Enemy' |
  'EnemyWithTrait' |
  'Self' |
  'TargetAlly'

export type SkillEffectType =
    'ArtsEffectivenessUp' |
    'AttackUp' |
    'BusterCritDamageUp' |
    'BusterEffectivenessUp' |
    'DecreaseCritStarGatherRate' |
    'DecreaseHp' |
    'GainCritStars' |
    'IgnoreInvincible' |
    'IncomingDamageCut' |
    'IncreaseCritStarDropRate' |
    'IncreaseCritStrength' |
    'IncreaseDebuffResist' |
    'IncreaseDefense' |
    'Invincible' |
    'NpDamageUp' |
    'NpGain' |
    'NpGaugeUp' |
    'QuickCardEffectiveness' |
    'SpecialAttack' |
    'TargetFocus' |
    'IncreaseDamage' |
    'ReduceNpGaugeChance' |
    'Charm' |
    'DecreaseAttack'
