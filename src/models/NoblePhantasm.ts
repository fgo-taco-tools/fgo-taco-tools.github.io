import { CardType, Duration, ServantTrait } from './ServantMiscTypes';
import {
  SkillEffectTarget, SkillEffectType,
} from './Skills';

export interface NoblePhantasm {
  name: string;
  cardType: CardType;
  numOfHits: number;
  targets: NoblePhantasmTargets;
  minDamagePlus: string;
  maxDamagePlus: string;
  effects: NoblePhantasmEffect[];
  overchargeEffects: NoblePhantasmEffect[];
}

export interface NoblePhantasmEffect {
  type: SkillEffectType;
  /**
   * @pattern ^\d+(\.\d+)?%$
  */
  amount1: string | number;
  /**
   * @pattern ^\d+(\.\d+)?%$
  */
  amount2: string | number;
  /**
   * @pattern ^\d+(\.\d+)?%$
  */
  amount3: string | number;
  /**
   * @pattern ^\d+(\.\d+)?%$
  */
  amount4: string | number;
  /**
   * @pattern ^\d+(\.\d+)?%$
  */
  amount5: string | number;
  duration: Duration;
  target: SkillEffectTarget;
  targetTrait?: ServantTrait;
}

export type NoblePhantasmTargets =
    'SingleTarget' |
    'AreaOfEffect' |
    'None'
