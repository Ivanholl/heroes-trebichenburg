export type Race = {
    // name: String,
    name: RaceName,
    hp: Number,
    mp: Number,
    dmMin: Number,
    dmMax: Number,
    df: Number,
    info: String,
}

export enum RaceName {
    dwarf = 'dwarf',
    elf = 'elf',
    human = 'human',
    orc = 'orc',
    undead = 'undead',
}

