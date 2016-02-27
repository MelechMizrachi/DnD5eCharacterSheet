function determineProfBonus()
{
    var TotalLevels = this.getField('TotalLevels').value;
    var proficiency = 2;
    var profLevels  = {
        3: 5,
        4: 9,
        5: 13,
        6: 17
    };

    for (var i in profLevels) {
        if (profLevels.hasOwnProperty(i)) {
            if (TotalLevels >= profLevels[i]) {
                proficiency = i;
            }
        }
    }

    return '+' + proficiency;
}