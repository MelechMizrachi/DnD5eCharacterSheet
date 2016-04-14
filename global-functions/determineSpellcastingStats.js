function determineSpellcastingStats()
{
    var castingClass = event.value;
    var ProfBonus    = this.getField('ProfBonus').value;
    var modName      = 'CHA';

    switch (castingClass) {
        case 'Bard' :
            modName = 'CHA';
            break;
        case 'Cleric' :
            modName = 'WIS';
            break;
        case 'Druid' :
            modName = 'CON';
            break;
        case 'Fighter' :
            modName = 'INT';
            break;
        case 'Monk' :
            modName = 'WIS';
            break;
        case 'Paladin' :
            modName = 'CHA';
            break;
        case 'Ranger' :
            modName = 'WIS';
            break;
        case 'Rogue' :
            modName = 'INT';
            break;
        case 'Sorcerer' :
            modName = 'CHA';
            break;
        case 'Warlock' :
            modName = 'CHA';
            break;
        case 'Wizard' :
            modName = 'INT';
            break;
    }

    var AbilityModName   = modName + 'mod';
    var spellAttackBonus = ProfBonus + this.getField(AbilityModName).value;

    this.getField('SpellcastingAbility').value = modName;
    this.getField('SpellAtkBonus').value       = spellAttackBonus;
    this.getField('SpellSaveDC').value         = 8 + spellAttackBonus;
}
