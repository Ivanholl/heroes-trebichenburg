export type Race = {
    // name: String,
    name: RaceName,
    hp: Number,
    mp: Number,
    minDm: Number,
    maxDm: Number,
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