import { Material } from './Material';

export enum ServantClass {
    Shielder,
    Saber,
    Lancer,
    Archer,
    Rider,
    Caster,
    Assassin,
    Berserker,
    Ruler,
    Avenger,
    AlterEgo,
    MoonCancer,
    Foreigner,
    Beast1,
    Beast2,
    Beast3R,
    Beast3L,
}

export enum ServantRarity {
    Common,
    Uncommon,
    Rare,
    SuperRare,
    SuperSuperRare,
    AngryMango
}

export enum ServantAttribute {
    Man,
    Sky,
    Earth,
    Star,
    Beast
}

export enum ServantTrait {
  ArgoRelated,
  Arthur,
  Beast,
  BrynhildrsBeloved,
  Chaotic,
  ChildrenServant,
  DemiServant,
  Demonic,
  Divine,
  Dragon,
  Evil,
  Female,
  Giant,
  Good,
  GreekMythologyMale,
  Humanoid,
  Illya,
  King,
  Lawful,
  LivingHuman,
  Male,
  NeutralGood,
  NeutralLaw,
  OtherSex,
  PseudoServants,
  Riding,
  Saber,
  Saberface,
  Servant,
  SuperLarge,
  ThreatToHumanity,
  WeakToEnumaElish,
}

export enum CardType {
    Buster,
    Arts,
    Quick,
    Other
}

export interface ServantCards {
    buster: number;
    quick: number;
    arts: number;
    busterHits: number;
    quickHits: number;
    artsHits: number;
    extraHits: number;
}

export interface Duration {
    times: number | 'None';
    turns: number | 'None';
}

export enum BattlefieldType {
    Waterside,
}

export type MaterialAmount = [Material, number]
