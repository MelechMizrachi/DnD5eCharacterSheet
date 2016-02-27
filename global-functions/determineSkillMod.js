function determineSkillMod(modField, CBField)
{
    var ProfBonus = this.getField('ProfBonus').value;
    var Mod       = this.getField(modField + 'mod').value;
    var CB        = this.getField(CBField).value;
    var isProf    = CB != 'Off';

    return Mod + (isProf ? ProfBonus : 0);
}