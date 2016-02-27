function determineSavingThrows()
{
    var MainClass  = event.value;
    var firstSave  = false;
    var secondSave = false;
    var baseHP     = 6;
    var XP         = this.getField('XP').value;

    switch (MainClass) {
        case 'Barbarian' :
            firstSave  = 'Str';
            secondSave = 'Con';
            baseHP     = 12;
            break;
        case 'Bard' :
            firstSave  = 'Dex';
            secondSave = 'Cha';
            baseHP     = 8;
            break;
        case 'Cleric' :
            firstSave  = 'Wis';
            secondSave = 'Cha';
            baseHP     = 8;
            break;
        case 'Druid' :
            firstSave  = 'Int';
            secondSave = 'Wis';
            baseHP     = 8;
            break;
        case 'Fighter' :
            firstSave  = 'Str';
            secondSave = 'Con';
            baseHP     = 10;
            break;
        case 'Monk' :
            firstSave  = 'Str';
            secondSave = 'Dex';
            baseHP     = 8;
            break;
        case 'Paladin' :
            firstSave  = 'Wis';
            secondSave = 'Cha';
            baseHP     = 10;
            break;
        case 'Ranger' :
            firstSave  = 'Str';
            secondSave = 'Dex';
            baseHP     = 10;
            break;
        case 'Rogue' :
            firstSave  = 'Dex';
            secondSave = 'Int';
            baseHP     = 8;
            break;
        case 'Sorcerer' :
            firstSave  = 'Con';
            secondSave = 'Cha';
            baseHP     = 6;
            break;
        case 'Warlock' :
            firstSave  = 'Wis';
            secondSave = 'Cha';
            baseHP     = 8;
            break;
        case 'Wizard' :
            firstSave  = 'Int';
            secondSave = 'Wis';
            baseHP     = 6;
            break;
    }

    this.getField("ST CB Str").value = 'Off';
    this.getField("ST CB Dex").value = 'Off';
    this.getField("ST CB Con").value = 'Off';
    this.getField("ST CB Int").value = 'Off';
    this.getField("ST CB Wis").value = 'Off';
    this.getField("ST CB Cha").value = 'Off';

    if (firstSave) {
        this.getField("ST CB " + firstSave).value = 'Yes';
    }

    if (secondSave) {
        this.getField("ST CB " + secondSave).value = 'Yes';
    }

    if (XP == 0) {
        this.getField("HD").value      = baseHP;
        this.getField("HDTotal").value = '1d' + baseHP;
    }
}