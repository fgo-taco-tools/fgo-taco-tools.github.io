export type ServantKnightClass =
  'Saber' |
  'Lancer' |
  'Archer'

export type ServantCalvaryClass =
  'Rider' |
  'Caster' |
  'Assassin' |
  'Berserker'

export type ServantCoreClass = ServantKnightClass | ServantCalvaryClass

export type ServantExtraClass =
  'Shielder' |
  'Ruler' |
  'Avenger' |
  'AlterEgo' |
  'MoonCancer' |
  'Foreigner'

export type ServantAllClass = ServantCoreClass | ServantExtraClass

export type ServantRarity =
  'Common' |
  'Uncommon' |
  'Rare' |
  'SuperRare' |
  'SuperSuperRare' |
  'AngryMang'

export type ServantAttribute =
  'Man' |
  'Sky' |
  'Earth' |
  'Star' |
  'Beast'

export type ServantTrait =
  'ArgoRelated' |
  'Arthur' |
  'Balanced' |
  'Beast' |
  'BrynhildrsBeloved' |
  'Chaotic' |
  'ChildrenServant' |
  'DemiServant' |
  'Demonic' |
  'Divine' |
  'Dragon' |
  'Evil' |
  'Female' |
  'Giant' |
  'Good' |
  'GreekMythologyMale' |
  'Humanoid' |
  'Illya' |
  'King' |
  'Lawful' |
  'LivingHuman' |
  'Male' |
  'Neutral' |
  'OtherSex' |
  'PseudoServants' |
  'Riding' |
  'Saber' |
  'Saberface' |
  'Servant' |
  'SuperLarge' |
  'ThreatToHumanity' |
  'WeakToEnumaElish'

export type CardType =
  'Buster' |
  'Arts' |
  'Quick'

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

export type BattlefieldType =
  'Waterside' |
  'Fire'

export type MaterialAmount = [Material, number]

export type Material = Bronze | Silver | Gold |
  OtherMat | ClassMaterial

export type Bronze =
  'ProofOfHero' |
  'EvilBone' |
  'DragonFang' |
  'VoidsDust' |
  'FoolsChain' |
  'DeadlyPoisonousNeedle' |
  'MysticSpinalFluid' |
  'MysticGunpowder'

export type Silver =
  'SeedOfYggdrasil' |
  'GhostLantern' |
  'OctupletCrystals' |
  'SerpentJewel' |
  'PhoenixFeather' |
  'EternalGear' |
  'ForbiddenPage' |
  'HomunculusBaby' |
  'MeteorHorseshoe' |
  'GreatKnightMedal' |
  'ShellOfReminiscence' |
  'RefinedMagatama' |
  'EternalIce' |
  'GiantsRing' |
  'AuroraSteel'

export type Gold =
  'ClawOfChaos' |
  'HeartOfTheForeignGod' |
  'DragonsReverseScale' |
  'SpiritRoot' |
  'WarhorsesYoungHorn' |
  'TearstoneOfBlood' |
  'BlackBeastGrease' |
  'LampOfEvilSealing' |
  'ScarabOfWisdom' |
  'PrimordialLanugo' |
  'CursedBeastGallstone' |
  'MysteriousDivineWine'

// TODO: Add welfare mats
export type OtherMat =
  'CrystallizedLore' |
  'HolyGrail' |
  'PieceOfRamjatai' |
  'BPellet'

export type ClassMaterialTypes =
  'Gem' |
  'MagicGem' |
  'SecretGem' |
  'Piece' |
  'Monument'

export type ClassMaterial = [ClassMaterialTypes, ServantCoreClass]

export interface ServantReferenceData {
  voiceActor: string;
  source?: string;
  region?: string;
  illustrator: string;
  series?: string;
  releaseDateJapan: Date | 'Game Launch';
  releaseDateNA?: Date | 'Game Launch';
  growthCurve: ServantGrowthCurve;
  height?: number;
  weight?: number;
  stats: ServantStats;
}

export interface ServantStats {
  strength: string;
  endurance: string;
  agility: string;
  mana: string;
  luck: string;
  np: string;
}

export type ServantGrowthCurve =
  'Linear' |
  'S' |
  'ReverseS' |
  'SemiS' |
  'SemiReverseS'
