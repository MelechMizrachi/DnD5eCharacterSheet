function showSpellInfo(type)
{
    var spell          = event.value;
    var spellInfoSlots = this.getField('SpellInfoName').getArray();
    var spellList;
    var spellInfo      = {
        "name"       : "",
        "type"       : "",
        "castingTime": "",
        "range"      : "",
        "components" : "",
        "duration"   : "",
        "description": ""
    };
    var j              = 0;

    switch (type) {
        case 0 :
            spellList = getCantripSpells();
            break;
        case 1 :
            spellList = getSpellsLevel1();
            break;
        case 2 :
            spellList = getSpellsLevel2();
            break;
        case 3 :
            spellList = getSpellsLevel3();
            break;
        case 4 :
            spellList = getSpellsLevel4();
            break;
        case 5 :
            spellList = getSpellsLevel5();
            break;
        case 6 :
            spellList = getSpellsLevel6();
            break;
        case 7 :
            spellList = getSpellsLevel7();
            break;
        case 8 :
            spellList = getSpellsLevel8();
            break;
        case 9 :
            spellList = getSpellsLevel9();
            break;
    }

    for (var i = 0; i < spellList.length; i++) {
        if (spellList[i].name == spell) {
            spellInfo = spellList[i];
            break;
        }
    }

    for (i = 0; i < spellInfoSlots.length; i++) {
        if (spellInfoSlots[i].value == '') {
            j                                                = i + 1;
            this.getField('SpellInfoName.' + j).value        = spellInfo.name;
            this.getField('SpellInfoType.' + j).value        = spellInfo.type;
            this.getField('SpellInfoTime.' + j).value        = spellInfo.castingTime;
            this.getField('SpellInfoRange.' + j).value       = spellInfo.range;
            this.getField('SpellInfoComponents.' + j).value  = spellInfo.components;
            this.getField('SpellInfoDuration.' + j).value    = spellInfo.duration;
            this.getField('SpellInfoDescription.' + j).value = spellInfo.description;
            break;
        }
    }
}