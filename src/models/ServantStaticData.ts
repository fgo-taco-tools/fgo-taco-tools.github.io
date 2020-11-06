import { NoblePhantasm } from './NoblePhantasm';
import {
  ServantRarity, ServantAttribute, ServantAllClass, ServantTrait,
  ServantCards, MaterialAmount, ServantReferenceData,
} from './ServantMiscTypes';
import { PassiveSkill, ActiveSkill } from './Skills';

export interface ServantStaticData {
  id: number;
  name: string;
  spoilerName?: string;
  japaneseName?: string;
  otherNames?: string[];
  referenceData: ServantReferenceData;
  rarity: ServantRarity;
  class: ServantAllClass;
  baseAtk: number;
  baseHp: number;
  maxAtk: number;
  maxHp: number;
  attribute: ServantAttribute;
  traits: ServantTrait[];
  npPerHit: number;
  npWhenAttacked: number;
  starAbsorption: number;
  /**
   * @pattern ^\d+(\.\d+)?%$
  */
  starGenerationPerHit: string;
  passiveSkills: PassiveSkill[];
  activeSkill1: ActiveSkill;
  activeSkill2: ActiveSkill;
  activeSkill3: ActiveSkill;
  noblePhantasm: NoblePhantasm;
  cards: ServantCards;
  instantDeathChance: number;
  ascensionMats: MaterialAmount[][];
  skillMats: MaterialAmount[][];
  upgrades: ServantUpgrades[];
}

export interface ServantUpgrades {
  name: string;
  changes(servant: ServantStaticData): ServantStaticData;
}
