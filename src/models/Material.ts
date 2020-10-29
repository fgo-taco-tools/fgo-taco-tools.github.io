export type Material = Bronze | Silver | Gold |
    OtherMat | GemOf | MagicGemOf | SecretGemOf | Piece | Monument

export enum Bronze {
    ProofOfHero,
    EvilBone,
    DragonFang,
    VoidsDust,
    FoolsChain,
    DeadlyPoisonousNeedle,
    MysticSpinalFluid,
    MysticGunpowder,
}

export enum Silver {
    SeedOfYggdrasil,
    GhostLantern,
    OctupletCrystals,
    SerpentJewel,
    PhoenixFeather,
    EternalGear,
    ForbiddenPage,
    HomunculusBaby,
    MeteorHorseshoe,
    GreatKnightMedal,
    ShellOfReminiscence,
    RefinedMagatama,
    EternalIce,
    GiantsRing,
    AuroraSteel,
}

export enum Gold {
    ClawOfChaos,
    HeartOfTheForeignGod,
    DragonsReverseScale,
    SpiritRoot,
    WarhorsesYoungHorn,
    TearstoneOfBlood,
    BlackBeastGrease,
    LampOfEvilSealing,
    ScarabOfWisdom,
    PrimordialLanugo,
    CursedBeastGallstone,
    MysteriousDivineWine,
}

// TODO: Add welfare mats
export enum OtherMat {
  CrystallizedLore,
  HolyGrail,
  PieceOfRamjatai,
  BPellet,
  None
}

// TODO: A way to copy the values from ServantClass?
export enum GemOf {
    Saber,
    Archer,
    Lance,
    Rider,
    Caster,
    Assassin,
    Berserker,
}

export enum MagicGemOf {
    Saber,
    Archer,
    Lance,
    Rider,
    Caster,
    Assassin,
    Berserker,
}

export enum SecretGemOf {
    Saber,
    Archer,
    Lance,
    Rider,
    Caster,
    Assassin,
    Berserker,
}

export enum Piece {
    Saber,
    Archer,
    Lance,
    Rider,
    Caster,
    Assassin,
    Berserker,
}

export enum Monument {
    Saber,
    Archer,
    Lance,
    Rider,
    Caster,
    Assassin,
    Berserker,
}
