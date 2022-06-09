export const character = [
  {
    name: "",
    level: 1,
    race: "",
    background: {
        title: "",
        characteristic: ""
    },
    class: [
      {
        main: true,
        level: 1,
        subclass: "",
      },
    ],
    hp: {
      max: 0,
      current: 0,
      temp: 0,
    },
    death_saves: {
      pass: 0,
      fail: 0,
    },
    ac: 10,
    speed: 30,
    initiative: 0,
    proficiency_bonus: 2,
    stats: {
      str: 10,
      temp_str: 10,
      agi: 10,
      temp_agi: 10,
      con: 10,
      temp_con: 10,
      int: 10,
      temp_int: 10,
      wis: 10,
      temp_wis: 10,
      cha: 10,
      temp_cha: 10,
    },
    saves: {
      str: 10,
      agi: 10,
      con: 10,
      int: 10,
      wis: 10,
      cha: 10,
    },
    skills: {
        all: {
            athletics: 0,
        },
        proficient: {
            acrobatics: true
        },
        expert: {
            stealth: true
        }
    },
    passives: {
        perception: 10,
        investigation: 10,
        insight: 10
    },
    features: [
        {
            name: "",
            source: "",
            description: "",
            uses: "",
            recharge: ""
        },
    ],
    attacks: [
        {
            weapon: "",
            attack_bonus: 0,
            damage_bonus: 0,
            damage: "1d6",
            damage_type: "",
            range: "",
            tags: ""
        },
    ],
    magic: {
        save_dc: 10,
        attack_bonus: 0,
        ability: ""
    },
    items: [
        {
            name: "",
            quantity: 1,
            value_each: 1,
            value_total: 1
        },
    ],
    proficiencies: {
        languages: "",
        weapons: "",
        armour: "",
        other: ""
    },
    equipment: [
        {
            name: "",
            desc: ""
        },
    ],
    personality: {
        trait1: "",
        trait2: "",
        ideal: "",
        bond: "",
        flaw: ""
    }
  },
];
