import { CardType, Duration, ServantTrait } from './ServantMiscTypes';
import {
  SkillEffectTarget, SkillEffectType,
} from './Skills';
import { Percent } from './Percent';

export interface NoblePhantasm {
    name: string;
    cardType: CardType;
    numOfHits: number;
    targets: NoblePhantasmTargets;
    minDamagePlus: Percent;
    maxDamagePlus: Percent;
    effects: NoblePhantasmEffect[];
    overchargeEffects: NoblePhantasmEffect[];
}

export interface NoblePhantasmEffect {
    type: SkillEffectType;
    amount1: Percent | number;
    amount2: Percent | number;
    amount3: Percent | number;
    amount4: Percent | number;
    amount5: Percent | number;
    duration: Duration;
    target: SkillEffectTarget;
    targetTrait?: ServantTrait;
}

export enum NoblePhantasmTargets {
    SingleTarget,
    AreaOfEffect,
    None
}
