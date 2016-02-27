function determineMod(modName)
{
    var val = this.getField(modName).value;

    return (val > 10 ? '+' : '') + Math.floor((val - 10) / 2);
}