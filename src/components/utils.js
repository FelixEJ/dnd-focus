export function getModifier(stat, temp) {
  let mod = 0;
  if (temp > 0) {
    mod = Math.floor((temp - 10) / 2);
  } else {
    mod = Math.floor((stat - 10) / 2);
  }

  if (mod > 0) {
    return "+" + mod;
  } else {
    return mod;
  }
}

export function getSave(character, save, bonus, stat, temp) {
  let saveTotal = 0;
  let base = 0;
  let prof = 0;
  let bonusMod = parseInt(bonus);
  if (temp > 0) {
    base = Math.floor((temp - 10) / 2);
  } else {
    base = Math.floor((stat - 10) / 2);
  }

  if (save === true) {
    prof = parseInt(character.proficiency_bonus);
  }

  saveTotal = base + prof + bonusMod;

  if (saveTotal > 0) {
    return "+" + saveTotal;
  } else {
    return saveTotal;
  }
}

export function getSkill(character, skill, bonus, stat, temp) {
  let totalMod = 0;
  let prof = 0;
  let statMod = 0;
  let bonusMod = parseInt(bonus);
  if (temp > 0) {
    statMod = Math.floor((temp - 10) / 2);
  } else {
    statMod = Math.floor((stat - 10) / 2);
  }

  if (skill === "Proficient") {
    prof = parseInt(character.proficiency_bonus);
  } else if (skill === "Expert") {
    prof = parseInt(character.proficiency_bonus * 2);
  }

  totalMod = prof + statMod + bonusMod;
  if (totalMod > 0) {
    return "+" + totalMod;
  } else {
    return totalMod;
  }
}

export function getPassive(character, passiveBonus, skill, abilityBonus, stat) {
  let totalMod = 0;
  let prof = 0;
  let statMod = 0;
  let bonusPassive = parseInt(passiveBonus);
  let bonusMod = parseInt(abilityBonus);
  statMod = Math.floor((stat - 10) / 2);

  if (skill === "Proficient") {
    prof = parseInt(character.proficiency_bonus);
  } else if (skill === "Expert") {
    prof = parseInt(character.proficiency_bonus * 2);
  }

  totalMod = prof + statMod + 10 + bonusMod + bonusPassive;

  return totalMod;
}

export function getSpellModifier(character, spellStat) {
  for (const stat in character.stats) {
    // console.log(spellStat, stat);
    if (stat === spellStat) {
      // console.log(spellStat, character.stats[stat]);
      return getModifier(character.stats[stat]);
    }
  }
}
