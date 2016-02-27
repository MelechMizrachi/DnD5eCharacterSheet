function determineMaxHP()
{
    var HD           = this.getField('HD').value + '+0';
    var HasToughness = this.getField('HasToughness').value;
    var TotalLevels  = this.getField('TotalLevels').value;
    var CONmod       = this.getField('CONmod').value;
    var HPTotal      = 0;
    var minPerLevel  = 1;
    var levelHD      = minPerLevel;

    // Split all the hit dice
    HD = HD.split('+');

    // Iterate through the total levels
    for (var i = 0; i < TotalLevels; i++) {
        // Set level hit die to at least min per level value
        levelHD = minPerLevel;

        // If there's a hit die for this level
        if (HD[i] && HD[i] > 0) {
            // Parse it as an int
            levelHD = parseInt(HD[i]);

            // Ensure that adding con mod to this level
            // won't drop player below min per level value
            if ((levelHD + CONmod) > minPerLevel) {
                // Add con mod
                HPTotal += CONmod;
            }
        }

        // Add the level hit die to the total HP
        HPTotal += levelHD;
    }

    // If the toughness checkbox is on
    if (HasToughness != 'Off') {
        // Add two HP per level for toughness
        HPTotal += (TotalLevels * 2);
    }

    return HPTotal;
}