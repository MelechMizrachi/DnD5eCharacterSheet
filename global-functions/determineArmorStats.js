function determineArmorStats()
{
    var ArmorType = event.value;
    var DEXmod    = this.getField('DEXmod').value;
    var shield    = this.getField('ArmorHasShield').value;
    var AC        = 10;
    var AddDex    = true;
    var maxDex    = false;
    var isDisadv  = false;
    var stealthDisadv;
    var dexMod;

    switch (ArmorType) {
        case 'Padded Light Armor' :
            AC       = 11;
            isDisadv = true;
            break;
        case 'Leather Light Armor' :
            AC = 11;
            break;
        case 'Studded Leather Light Armor' :
            AC = 12;
            break;
        case 'Hide Medium Armor' :
            AC     = 12;
            maxDex = 2;
            break;
        case 'Chain Shirt Medium Armor' :
            AC     = 13;
            maxDex = 2;
            break;
        case 'Scale Mail Medium Armor' :
            AC       = 14;
            isDisadv = true;
            maxDex   = 2;
            break;
        case 'Breastplate Medium Armor' :
            AC     = 14;
            maxDex = 2;
            break;
        case 'Half Plate Medium Armor' :
            AC       = 15;
            isDisadv = true;
            maxDex   = 2;
            break;
        case 'Ring Mail Heavy Armor' :
            AC       = 14;
            isDisadv = true;
            AddDex   = false;
            break;
        case 'Chain Mail Heavy Armor' :
            AC       = 16;
            isDisadv = true;
            AddDex   = false;
            break;
        case 'Splint Heavy Armor' :
            AC       = 17;
            isDisadv = true;
            AddDex   = false;
            break;
        case 'Plate Heavy Armor' :
            AC       = 18;
            isDisadv = true;
            AddDex   = false;
            break;
    }

    stealthDisadv = isDisadv ? 'Yes' : 'Off';
    dexMod        = maxDex ? maxDex : (AddDex ? DEXmod : 0);

    this.getField('ArmorAC').value                  = AC;
    this.getField('ArmorDexMod').value              = dexMod;
    this.getField('ArmorStealthDisadvantage').value = stealthDisadv;
    //this.getField('EquipmentNameVal.1').value       = ArmorType;
    this.getField('EquipmentNameVal.2').value       = shield != 'Off' ? 'Shield' : 'No Shield';
}