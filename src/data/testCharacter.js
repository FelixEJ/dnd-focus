export const testCharacter = {
  name: "Mist [Flows Down the Forest Valley]",
  level: "3",
  race: "Tabaxi",
  size: "",
  alignment: "CG",
  xp: "2350",
  background: {
    title: "Outlander",
    characteristic: ""
  },
  class: "Monk",
  subclass: "Way of the Kensei",
  multiclasses: [
    {
      class_id: 0,
      class_level: 1,
      subclass: ""
    }
  ],
  hit_dice: {
    dice: "d8",
    max: "3",
    current: "1",
    mult1_max: "0",
    mult1_dice: "",
    mult2_dice: ""
  },
  hp: {
    max: "27",
    current: "25",
    temp: "0",
    temp_max: "0"
  },
  defences: {
    resistances: "",
    immunities: "",
    vulnerabilities: ""
  },
  death_saves: {
    pass: 0,
    fail: 0
  },
  exhaustion: 0,
  ac: "17",
  speed: "40",
  initiative: "4",
  proficiency_bonus: 2,
  inspiration: false,
  stats: {
    str: "10",
    temp_str: 0,
    dex: "18",
    temp_dex: 0,
    con: "12",
    temp_con: 0,
    int: "8",
    temp_int: 0,
    wis: "16",
    temp_wis: 0,
    cha: "11",
    temp_cha: 0
  },
  saves: {
    str: true,
    str_bonus: 0,
    dex: true,
    dex_bonus: 0,
    con: false,
    con_bonus: 0,
    int: false,
    int_bonus: 0,
    wis: false,
    wis_bonus: 0,
    cha: false,
    cha_bonus: 0
  },
  skills: {
    Athletics: "Proficient",
    Athletics_bonus: 0,
    Acrobatics: "Proficient",
    Acrobatics_bonus: 0,
    SleightOfHand: "",
    SleightOfHand_bonus: 0,
    Stealth: "Proficient",
    Stealth_bonus: 0,
    Arcana: "",
    Arcana_bonus: 0,
    History: "",
    History_bonus: 0,
    Investigation: "",
    Investigation_bonus: 0,
    Nature: "",
    Nature_bonus: 0,
    Religion: "",
    Religion_bonus: 0,
    AnimalHandling: "",
    AnimalHandling_bonus: 0,
    Insight: "Proficient",
    Insight_bonus: 0,
    Medicine: "",
    Medicine_bonus: 0,
    Perception: "Proficient",
    Perception_bonus: 0,
    Survival: "Proficient",
    Survival_bonus: 0,
    Deception: "",
    Deception_bonus: 0,
    Intimidation: "",
    Intimidation_bonus: 0,
    Performance: "",
    Performance_bonus: 0,
    Persuasion: "",
    Persuasion_bonus: 0
  },
  passives: {
    senses: "Darkvision 60ft",
    perception: "15",
    perception_bonus: 0,
    investigation: "9",
    investigation_bonus: 0,
    insight: "15",
    insight_bonus: 0
  },
  features: [
    {
      feature_id: 1,
      level_acquired: 0,
      feature_name: "Feline Agility",
      source: "race",
      description: "Your reflexes and agility allow you to move with a burst of speed. When you move on your turn in combat, you can double your speed until the end of the turn. Once you use this trait, you can't use it again until you move 0 feet on one of your turns.",
      max_uses: 0,
      current_uses: 0,
      recharge: ""
    },
    {
      feature_id: 2,
      level_acquired: 0,
      feature_name: "Cat's Claws",
      source: "race",
      description: "Because of your claws, you have a climbing speed of 20 feet. In addition, your claws are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.",
      max_uses: 0,
      current_uses: 0,
      recharge: ""
    },
    {
      feature_id: 3,
      level_acquired: 0,
      feature_name: "Wanderer",
      source: "background",
      description: "You have an excellent memory for maps and geography, and you can always recall the general layout of terrain, settlements, and other features around you. In addition, you can find food and fresh water for yourself and up to 5 other people each day, provided that the land offers berries, small game, water, and so forth.",
      max_uses: 0,
      current_uses: 0,
      recharge: ""
    },
    {
      feature_id: 4,
      level_acquired: "1",
      feature_name: "Unarmored Defense",
      source: "class",
      description: "Beginning at 1st Level, while you are wearing no armor and not wielding a Shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier.",
      max_uses: 0,
      current_uses: 0,
      recharge: ""
    },
    {
      feature_id: 5,
      level_acquired: "1",
      feature_name: "Martial Arts",
      source: "class",
      description: "You gain the following benefits while you are Unarmed or wielding only monk Weapons and you aren't wearing armor or wielding a Shield.\n\n• You can use Dexterity instead of Strength for the Attack and Damage Rolls of your Unarmed strikes and monk Weapons.\n\n• You can roll a d4 in place of the normal damage of your Unarmed strike or monk weapon. This die changes as you gain monk levels, as shown in the Martial Arts column of the Monk table.\n\n• When you use the Attack Action with an Unarmed strike or a monk weapon on Your Turn, you can make one Unarmed strike as a bonus Action. For example, if you take the Attack Action and Attack with a Quarterstaff, you can also make an Unarmed strike as a bonus Action, assuming you haven't already taken a bonus Action this turn.",
      max_uses: 0,
      current_uses: 0,
      recharge: ""
    },
    {
      feature_id: 6,
      level_acquired: "2",
      feature_name: "Ki",
      source: "class",
      description: "You can spend these points to fuel various ki features. You start knowing three such features: Flurry of Blows, Patient Defense, and Step of the Wind. You learn more ki features as you gain levels in this class.\n\nWhen you spend a ki point, it is unavailable until you finish a short or Long Rest, at the end of which you draw all of your expended ki back into yourself. You must spend at least 30 minutes of the rest meditating to regain your ki points.\n\nSome of your ki features require your target to make a saving throw to resist the feature's Effects. The saving throw DC is calculated as follows:\n\nKi save DC = 8 + your Proficiency bonus + your Wisdom modifier",
      max_uses: "3",
      current_uses: "3",
      recharge: "short"
    },
    {
      feature_id: 7,
      level_acquired: "2",
      feature_name: "Flurry of Blows",
      source: "class",
      description: "Immediately after you take the Attack Action on Your Turn, you can spend 1 ki point to make two Unarmed strikes as a bonus Action.",
      max_uses: 0,
      current_uses: 0,
      recharge: ""
    },
    {
      feature_id: 8,
      level_acquired: "2",
      feature_name: "Patient Defense",
      source: "class",
      description: "You can spend 1 ki point to take the Dodge Action as a bonus Action on Your Turn.",
      max_uses: 0,
      current_uses: 0,
      recharge: ""
    },
    {
      feature_id: 9,
      level_acquired: "2",
      feature_name: "Step of the Wind",
      source: "class",
      description: "You can spend 1 ki point to take the Disengage or Dash Action as a bonus Action on Your Turn, and your jump distance is doubled for the turn.",
      max_uses: 0,
      current_uses: 0,
      recharge: ""
    },
    {
      feature_id: 10,
      level_acquired: "2",
      feature_name: "Unarmored Movement",
      source: "class",
      description: "Starting at 2nd Level, your speed increases by 10 feet while you are not wearing armor or wielding a Shield. This bonus increases when you reach certain monk levels, as shown in the Monk table.\n\nAt 9th level, you gain the ability to move along vertical surfaces and across liquids on Your Turn without Falling during the move.",
      max_uses: 0,
      current_uses: 0,
      recharge: ""
    },
    {
      feature_id: 11,
      level_acquired: "3",
      feature_name: "Deflect Missiles",
      source: "class",
      description: "Starting at 3rd Level, you can use your Reaction to deflect or catch the missile when you are hit by a ranged weapon Attack. When you do so, the damage you take from the Attack is reduced by 1d 10 + your Dexterity modifier + your monk level.\n\nIf you reduce the damage to 0, you can catch the missile if it is small enough for you to hold in one hand and you have at least one hand free. If you catch a missile in this way, you can spend 1 ki point to make a ranged Attack (range 20 feet/60 feet) with the weapon or piece of Ammunition you just caught, as part of the same Reaction. You make this Attack with Proficiency, regardless of your weapon Proficiencies, and the missile counts as a monk weapon for the Attack.",
      max_uses: 0,
      current_uses: 0,
      recharge: ""
    },
    {
      feature_id: 12,
      level_acquired: "3",
      feature_name: "Path of the Kensei",
      source: "class",
      description: "When you choose this tradition at 3rd level, your special martial arts training leads you to master the use of certain weapons. This path also includes instruction in the deft strokes of calligraphy or painting. You gain the following benefits:\n<br/>\nKensei Weapons. Choose two types of weapons to be your kensei weapons: one melee weapon and one ranged weapon. Each of these weapons can be any simple or martial weapon that lacks the heavy and special properties. The longbow is also a valid choice. You gain proficiency with these weapons if you don't already have it. Weapons of the chosen types are monk weapons for you. Many of this tradition's features work only with your kensei weapons. When you reach 6th, 11th, and 17th level in this class, you can choose another type of weapon – either melee or ranged – to be a kensei weapon for you, following the criteria above.\nAgile Parry. If you make an unarmed strike as part of the Attack action on your turn and are holding a kensei weapon, you can use it to defend yourself if it is a melee weapon. You gain a +2 bonus to AC until the start of your next turn, while the weapon is in your hand and you aren’t incapacitated.\nKensei's Shot. You can use a bonus action on your turn to make your ranged attacks with a kensei weapon more deadly. When you do so, any target you hit with a ranged attack using a kensei weapon takes an extra 1d4 damage of the weapon’s type. You retain this benefit until the end of the current turn.\nWay of the Brush. You gain proficiency with your choice of calligrapher's supplies or painter's supplies.",
      max_uses: 0,
      current_uses: 0,
      recharge: ""
    },
    {
      feature_id: 13,
      level_acquired: "3",
      feature_name: "Agile Parry",
      source: "class",
      description: "If you make an unarmed strike as part of the Attack action on your turn and are holding a kensei weapon, you can use it to defend yourself if it is a melee weapon. You gain a +2 bonus to AC until the start of your next turn, while the weapon is in your hand and you aren’t incapacitated.",
      max_uses: 0,
      current_uses: 0,
      recharge: "",
      action_type: "free",
      damage_dice: "",
      damage_dice_amount: "",
      damage_type: ""
    },
    {
      feature_id: 14,
      level_acquired: "3",
      feature_name: "Kensei's Shot",
      source: "class",
      description: "You can use a bonus action on your turn to make your ranged attacks with a kensei weapon more deadly. When you do so, any target you hit with a ranged attack using a kensei weapon takes an extra 1d4 damage of the weapon’s type. You retain this benefit until the end of the current turn. ",
      max_uses: 0,
      current_uses: 0,
      recharge: "",
      action_type: "bonus",
      damage_dice_amount: "1",
      damage_dice: "d4",
      damage_type: "Piercing"
    }
  ],
  attacks: [
    {
      attack_id: 1,
      attack_name: "Shortsword",
      mod_used: "dex",
      attack_bonus: "6",
      damage_bonus: "4",
      damage_dice: "d6",
      damage_dice_num: "1",
      damage_type: "Piercing",
      range: "",
      tags: "Finesse, light",
      ammo: 0
    },
    {
      attack_id: 2,
      attack_name: "Longsword",
      mod_used: "dex",
      attack_bonus: "6",
      damage_bonus: "4",
      damage_dice: "d8",
      damage_dice_num: "1",
      damage_type: "Slashing",
      range: "",
      tags: "Versatile(1d10)",
      ammo: 0
    },
    {
      attack_id: 3,
      attack_name: "Longbow",
      mod_used: "dex",
      attack_bonus: "6",
      damage_bonus: "4",
      damage_dice: "d10",
      damage_dice_num: "1",
      damage_type: "Piercing",
      range: "150/600",
      tags: "Ammo(150/600), Heavy, 2-handed",
      ammo: "20"
    },
    {
      attack_id: 4,
      attack_name: "Unarmed",
      mod_used: "dex",
      attack_bonus: "6",
      damage_bonus: "4",
      damage_dice: "d4",
      damage_dice_num: "1",
      damage_type: "Bludgeoning",
      range: "",
      tags: "",
      ammo: 0
    },
    {
      attack_id: 5,
      attack_name: "Dart",
      mod_used: "dex",
      attack_bonus: "6",
      damage_bonus: "4",
      damage_dice: "d4",
      damage_dice_num: "1",
      damage_type: "Piercing",
      range: "20/60",
      tags: "Finesse, Thrown",
      ammo: 10
    }
  ],
  magic: {
    magic_user: false,
    save_dc: "13",
    save_dc_bonus: 0,
    spell_attack_mod: 0,
    spell_attack_bonus: 0,
    ability: "wis",
    cantrips_known: 0,
    spells_known: 0,
    concentrating: false
  },
  spellslots: {
    first: 0,
    first_remaining: 0,
    second: 0,
    second_remaining: 0,
    third: 0,
    third_remaining: 0,
    fourth: 0,
    fourth_remaining: 0,
    fifth: 0,
    fifth_remaining: 0,
    sixth: 0,
    sixth_remaining: 0,
    seventh: 0,
    seventh_remaining: 0,
    eighth: 0,
    eighth_remaining: 0,
    ninth: 0,
    ninth_remaining: 0
  },
  inventory: [
    {
      item_id: 1,
      item_name: "Hunting trap",
      quantity: "1",
      value_each: 0,
      value_currency: "cp",
      value_total: 0
    },
    {
      item_id: 2,
      item_name: "Fang(animal trophy)",
      quantity: "1",
      value_each: 0,
      value_currency: "cp",
      value_total: 0
    },
    {
      item_id: 3,
      item_name: "Potion of Diminution",
      quantity: 0,
      value_each: 0,
      value_currency: "cp",
      value_total: 0,
      group_loot: "yes"
    }
  ],
  currency: {
    copper: 0,
    silver: 0,
    electrum: 0,
    gold: "65",
    platinum: 0
  },
  proficiencies: {
    languages: "Common, Goblin, Elvish",
    weapons: "Simple, shortswords, Longswords[kensei], Longbow[kensei]",
    armour: "",
    other: "Spoons(instrument), Smith's Tools, Calligrapher's tools."
  },
  equipment: [
    {
      equipment_id: 1,
      equipment_name: "Staff",
      equipment_type: "weapon",
      desc: "",
      value: 0,
      value_currency: ""
    },
    {
      equipment_id: 2,
      equipment_name: "Shortsword",
      equipment_type: "weapon",
      desc: "",
      value: 0,
      value_currency: ""
    },
    {
      equipment_id: 3,
      equipment_name: "Explorer's pack",
      equipment_type: "gear",
      desc: "• a Backpack  • a Bedroll  • a Mess kit  • a Tinderbox  • 10 torches  • 10 days of Rations  • a Waterskin  • 50 feet of Hempen rope",
      value: 0,
      value_currency: ""
    },
    {
      equipment_id: 4,
      equipment_name: "10 darts",
      equipment_type: "weapon",
      desc: "",
      value: 0,
      value_currency: ""
    },
    {
      equipment_id: 5,
      equipment_name: "potion of growth",
      equipment_type: "misc",
      desc: "",
      value: 0,
      value_currency: ""
    }
  ],
  personality: {
    trait1: "I’m driven by a wanderlust that led me away from home.",
    trait2: "I’m always picking things up, absently fiddling with them, and sometimes accidentally breaking them.",
    ideal: "Change. Life is like the seasons, in constant change, and we must change with it. (Chaotic)",
    bond: "I am the last of my tribe, and it is up to me to ensure their names enter legend.",
    flaw: "There’s no room for caution in a life lived to the fullest."
  }
}