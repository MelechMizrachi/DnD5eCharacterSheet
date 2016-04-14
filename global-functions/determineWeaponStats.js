function determineWeaponStats(type)
{
    var weapon         = event.value;
    var ProfBonus      = this.getField('ProfBonus').value;
    var STRmod         = this.getField('STRmod').value;
    var DEXmod         = this.getField('DEXmod').value;
    var isProf         = this.getField(type + 'WeaponProficient').value != 'Off';
    var MainClass      = this.getField('MainClass').value;
    var MainClassLevel = this.getField('MainClassLevel').value;
    var WepType        = false;
    var DamageDie;
    var Attack;
    var Damage;
    var DamageType     = ['b', 'p', 's'];
    var DamageTypeName;
    var isFinesse      = false;

    switch (weapon) {
        case 'Club' :
            WepType        = 'melee';
            DamageDie      = '1d4';
            DamageTypeName = DamageType[0];
            break;
        case 'Dagger' :
            WepType        = 'melee';
            DamageDie      = '1d4';
            DamageTypeName = DamageType[1];
            isFinesse      = true;
            break;
        case 'Greatclub' :
            WepType        = 'melee';
            DamageDie      = '1d8';
            DamageTypeName = DamageType[0];
            break;
        case 'Handaxe' :
            WepType        = 'melee';
            DamageDie      = '1d6';
            DamageTypeName = DamageType[2];
            break;
        case 'Javelin' :
            WepType        = 'melee';
            DamageDie      = '1d6';
            DamageTypeName = DamageType[1];
            break;
        case 'Light Hammer' :
            WepType        = 'melee';
            DamageDie      = '1d4';
            DamageTypeName = DamageType[0];
            break;
        case 'Mace' :
            WepType        = 'melee';
            DamageDie      = '1d6';
            DamageTypeName = DamageType[0];
            break;
        case 'Quarterstaff' :
            WepType        = 'melee';
            DamageDie      = '1d6';
            DamageTypeName = DamageType[0];
            break;
        case 'Sickle' :
            WepType        = 'melee';
            DamageDie      = '1d4';
            DamageTypeName = DamageType[2];
            break;
        case 'Spear' :
            WepType        = 'melee';
            DamageDie      = '1d6';
            DamageTypeName = DamageType[1];
            break;
        case 'Unarmed Strike' :
            WepType   = 'melee';
            DamageDie = '1';

            if (MainClass == 'Monk') {
                if (MainClassLevel >= 17) {
                    DamageDie = '1d10';
                }
                else if (MainClassLevel >= 11) {
                    DamageDie = '1d8';
                }
                else if (MainClassLevel >= 5) {
                    DamageDie = '1d6';
                }
                else if (MainClassLevel >= 1) {
                    DamageDie = '1d4';
                }
            }

            DamageTypeName = DamageType[0];
            break;
        case 'Crossbow, light' :
            WepType        = 'ranged';
            DamageDie      = '1d8';
            DamageTypeName = DamageType[1];
            break;
        case 'Dart' :
            WepType        = 'ranged';
            DamageDie      = '1d4';
            DamageTypeName = DamageType[1];
            isFinesse      = true;
            break;
        case 'Shortbow' :
            WepType        = 'ranged';
            DamageDie      = '1d6';
            DamageTypeName = DamageType[1];
            break;
        case 'Sling' :
            WepType        = 'ranged';
            DamageDie      = '1d4';
            DamageTypeName = DamageType[0];
            break;
        case 'Battleaxe' :
            WepType        = 'melee';
            DamageDie      = '1d8';
            DamageTypeName = DamageType[2];
            break;
        case 'Flail' :
            WepType        = 'melee';
            DamageDie      = '1d8';
            DamageTypeName = DamageType[0];
            break;
        case 'Glaive' :
            WepType        = 'melee';
            DamageDie      = '1d10';
            DamageTypeName = DamageType[2];
            break;
        case 'Greataxe' :
            WepType        = 'melee';
            DamageDie      = '1d12';
            DamageTypeName = DamageType[2];
            break;
        case 'Greatsword' :
            WepType        = 'melee';
            DamageDie      = '2d6';
            DamageTypeName = DamageType[2];
            break;
        case 'Halberd' :
            WepType        = 'melee';
            DamageDie      = '1d10';
            DamageTypeName = DamageType[2];
            break;
        case 'Lance' :
            WepType        = 'melee';
            DamageDie      = '1d12';
            DamageTypeName = DamageType[1];
            break;
        case 'Longsword' :
            WepType        = 'melee';
            DamageDie      = '1d8';
            DamageTypeName = DamageType[0];
            break;
        case 'Maul' :
            WepType        = 'melee';
            DamageDie      = '2d6';
            DamageTypeName = DamageType[2];
            break;
        case 'Morningstar' :
            WepType        = 'melee';
            DamageDie      = '1d8';
            DamageTypeName = DamageType[1];
            break;
        case 'Pike' :
            WepType        = 'melee';
            DamageDie      = '1d10';
            DamageTypeName = DamageType[1];
            break;
        case 'Rapier' :
            WepType        = 'melee';
            DamageDie      = '1d8';
            DamageTypeName = DamageType[1];
            isFinesse      = true;
            break;
        case 'Scimitar' :
            WepType        = 'melee';
            DamageDie      = '1d6';
            DamageTypeName = DamageType[2];
            isFinesse      = true;
            break;
        case 'Shortsword' :
            WepType        = 'melee';
            DamageDie      = '1d6';
            DamageTypeName = DamageType[1];
            isFinesse      = true;
            break;
        case 'Trident' :
            WepType        = 'melee';
            DamageDie      = '1d6';
            DamageTypeName = DamageType[1];
            break;
        case 'War Pick' :
            WepType        = 'melee';
            DamageDie      = '1d8';
            DamageTypeName = DamageType[1];
            break;
        case 'Warhammer' :
            WepType        = 'melee';
            DamageDie      = '1d8';
            DamageTypeName = DamageType[0];
            break;
        case 'Whip' :
            WepType        = 'melee';
            DamageDie      = '1d4';
            DamageTypeName = DamageType[2];
            isFinesse      = true;
            break;
        case 'Blowgun' :
            WepType        = 'ranged';
            DamageDie      = '1';
            DamageTypeName = DamageType[1];
            break;
        case 'Crossbow, hand' :
            WepType        = 'ranged';
            DamageDie      = '1d6';
            DamageTypeName = DamageType[1];
            break;
        case 'Crossbow, heavy' :
            WepType        = 'ranged';
            DamageDie      = '1d10';
            DamageTypeName = DamageType[1];
            break;
        case 'Longbow' :
            WepType        = 'ranged';
            DamageDie      = '1d8';
            DamageTypeName = DamageType[1];
            break;
        case 'Net' :
            WepType        = 'ranged';
            DamageDie      = '-';
            DamageTypeName = '-';
            break;
    }

    if (WepType) {
        if (isProf && isFinesse) {
            Attack = DEXmod > STRmod ? DEXmod : STRmod;
            Attack += ProfBonus;
            Damage = DEXmod > STRmod ? DEXmod : STRmod;
        }
        else {
            Attack = WepType === 'ranged' ? DEXmod : STRmod;
            Damage = Attack;
        }

        if (WepType == 'melee' && MainClass == 'Paladin' && MainClassLevel >= 11) {
            DamageTypeName += ' +1d8 r';
        }
    }
    else {
        DamageTypeName = '';
        DamageDie      = '';
        Attack         = '';
        Damage         = '';
    }

    this.getField(type + 'WeaponDamageDie').value  = DamageDie + ' ' + DamageTypeName;
    this.getField(type + 'WeaponAttackRoll').value = Attack;
    this.getField(type + 'WeaponDamageRoll').value = Damage;
}
