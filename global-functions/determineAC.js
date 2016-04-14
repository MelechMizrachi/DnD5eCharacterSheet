function determineAC()
{
    var defaultAC   = 10;
    var ArmorAC     = this.getField('ArmorAC').value;
    var ArmorDexMod = this.getField('ArmorDexMod').value;
    var shield      = this.getField('ArmorHasShield').value;
    var ArmorACMod  = this.getField('ArmorACMod').value;
    var hasArmor    = ArmorAC > 0;
    var hasShield   = shield != 'Off';
    var shieldAC    = hasShield ? 2 : 0;

    if (hasArmor) {
        defaultAC = ArmorAC + ArmorDexMod;
    }

    return shieldAC + defaultAC + ArmorACMod;
}
