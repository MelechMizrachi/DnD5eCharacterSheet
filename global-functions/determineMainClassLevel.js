function determineMainClassLevel()
{
    var TotalLevels = this.getField('TotalLevels').value;
    var MultiClassLevel = this.getField('MultiClassLevel').value;

    MultiClassLevel = MultiClassLevel ? MultiClassLevel : 0;

    return parseInt(TotalLevels) - MultiClassLevel;
}
