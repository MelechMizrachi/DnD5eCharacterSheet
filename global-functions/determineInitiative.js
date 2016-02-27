function determineInitiative()
{
    var DEXmod        = this.getField('DEXmod').value;
    var InitiativeMod = this.getField('InitiativeMod').value;

    return DEXmod + InitiativeMod;
}