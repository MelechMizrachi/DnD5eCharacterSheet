function determineSpellSlots()
{
    var castingClass = event.value;
    var TotalLevels  = this.getField('TotalLevels').value;
    var spellSlots1  = 0;
    var spellSlots2  = 0;
    var spellSlots3  = 0;
    var spellSlots4  = 0;
    var spellSlots5  = 0;
    var spellSlots6  = 0;
    var spellSlots7  = 0;
    var spellSlots8  = 0;
    var spellSlots9  = 0;

    if (
        castingClass == 'Bard'
        || castingClass == 'Cleric'
        || castingClass == 'Druid'
        || castingClass == 'Sorcerer'
        || castingClass == 'Wizard'
    ) {
        // Level 1 Spell Slots
        if (TotalLevels >= 3) {
            spellSlots1 = 4;
        }
        else if (TotalLevels >= 2) {
            spellSlots1 = 3;
        }
        else if (TotalLevels >= 1) {
            spellSlots1 = 2;
        }

        // Level 2 Spell Slots
        if (TotalLevels >= 4) {
            spellSlots2 = 3;
        }
        else if (TotalLevels >= 3) {
            spellSlots2 = 2;
        }

        // Level 3 Spell Slots
        if (TotalLevels >= 6) {
            spellSlots3 = 3;
        }
        else if (TotalLevels >= 5) {
            spellSlots3 = 2;
        }

        // Level 4 Spell Slots
        if (TotalLevels >= 9) {
            spellSlots4 = 3;
        }
        else if (TotalLevels >= 8) {
            spellSlots4 = 2;
        }
        else if (TotalLevels >= 7) {
            spellSlots4 = 1;
        }

        // Level 5 Spell Slots
        if (TotalLevels >= 18) {
            spellSlots5 = 3;
        }
        else if (TotalLevels >= 10) {
            spellSlots5 = 2;
        }
        else if (TotalLevels >= 9) {
            spellSlots5 = 1;
        }

        // Level 6 Spell Slots
        if (TotalLevels >= 19) {
            spellSlots6 = 2;
        }
        else if (TotalLevels >= 11) {
            spellSlots6 = 1;
        }

        // Level 7 Spell Slots
        if (TotalLevels >= 19) {
            spellSlots7 = 2;
        }
        else if (TotalLevels >= 13) {
            spellSlots7 = 1;
        }

        // Level 8 Spell Slots
        if (TotalLevels >= 15) {
            spellSlots8 = 1;
        }

        // Level 9 Spell Slots
        if (TotalLevels >= 17) {
            spellSlots9 = 1;
        }
    }
    else if (
        castingClass == 'Ranger'
        || castingClass == 'Paladin'
    ) {
        // Level 1 Spell Slots
        if (TotalLevels >= 5) {
            spellSlots1 = 4;
        }
        else if (TotalLevels >= 3) {
            spellSlots1 = 3;
        }
        else if (TotalLevels >= 2) {
            spellSlots1 = 2;
        }

        // Level 2 Spell Slots
        if (TotalLevels >= 7) {
            spellSlots2 = 3;
        }
        else if (TotalLevels >= 5) {
            spellSlots2 = 2;
        }

        // Level 3 Spell Slots
        if (TotalLevels >= 11) {
            spellSlots3 = 3;
        }
        else if (TotalLevels >= 9) {
            spellSlots3 = 2;
        }

        // Level 4 Spell Slots
        if (TotalLevels >= 17) {
            spellSlots4 = 3;
        }
        else if (TotalLevels >= 15) {
            spellSlots4 = 2;
        }
        else if (TotalLevels >= 13) {
            spellSlots4 = 1;
        }

        // Level 5 Spell Slots
        if (TotalLevels >= 19) {
            spellSlots5 = 2;
        }
        else if (TotalLevels >= 17) {
            spellSlots5 = 1;
        }
    }
    else if (
        castingClass == 'Rogue'
        || castingClass == 'Fighter'
    ) {
        // Level 1 Spell Slots
        if (TotalLevels >= 7) {
            spellSlots1 = 4;
        }
        else if (TotalLevels >= 4) {
            spellSlots1 = 3;
        }
        else if (TotalLevels >= 3) {
            spellSlots1 = 2;
        }

        // Level 2 Spell Slots
        if (TotalLevels >= 10) {
            spellSlots2 = 3;
        }
        else if (TotalLevels >= 7) {
            spellSlots2 = 2;
        }

        // Level 3 Spell Slots
        if (TotalLevels >= 16) {
            spellSlots3 = 3;
        }
        else if (TotalLevels >= 13) {
            spellSlots3 = 2;
        }

        // Level 4 Spell Slots
        if (TotalLevels >= 19) {
            spellSlots4 = 1;
        }
    }
    else if (castingClass == 'Warlock') {
        // Level 1 Spell Slots
        // NOTE: Warlocks have only this many slots to use across all their spell levels
        if (TotalLevels >= 17) {
            spellSlots1 = 4;
        }
        else if (TotalLevels >= 11) {
            spellSlots1 = 3;
        }
        else if (TotalLevels >= 2) {
            spellSlots1 = 2;
        }
        else if (TotalLevels >= 1) {
            spellSlots1 = 1;
        }
    }

    this.getField('Spells 1 Slots Total').value = spellSlots1;
    this.getField('Spells 2 Slots Total').value = spellSlots2;
    this.getField('Spells 3 Slots Total').value = spellSlots3;
    this.getField('Spells 4 Slots Total').value = spellSlots4;
    this.getField('Spells 5 Slots Total').value = spellSlots5;
    this.getField('Spells 6 Slots Total').value = spellSlots6;
    this.getField('Spells 7 Slots Total').value = spellSlots7;
    this.getField('Spells 8 Slots Total').value = spellSlots8;
    this.getField('Spells 9 Slots Total').value = spellSlots9;
}