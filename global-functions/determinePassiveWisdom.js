function determinePassiveWisdom()
{
    var PassiveMod      = this.getField('PassiveMod').value;
    var PerceptionSkill = this.getField('Perception').value;

    PassiveMod = PassiveMod ? PassiveMod : 0;

    return 10 + PassiveMod + PerceptionSkill;
}