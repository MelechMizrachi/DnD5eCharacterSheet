function determineSpeed()
{
    var race           = this.getField('RaceDD').value;
    var MainClass      = event.value;
    var MainClassLevel = this.getField('MainClassLevel').value;
    var ArmorType      = this.getField('ArmorTypeDD').value;
    var speed          = 30;

    if (
        race == 'Aarakocra'
        || race == 'Deep Gnome'
        || race == 'Dwarf/Hill Dwarf'
        || race == 'Dwarf/Mountain Dwarf'
        || race == 'Halfling/Lightfoot Halfling'
        || race == 'Halfling/Stout Halfling'
        || race == 'Gnome/Forest Gnome'
        || race == 'Gnome/Rock Gnome'
    ) {
        speed = 25;
    }
    else if (race == 'Elf/Wood Elf') {
        speed = 35;
    }

    if (MainClass == 'Monk' && ArmorType == 'No Armor') {
        if (MainClassLevel >= 18) {
            speed += 30;
        }
        else if (MainClassLevel >= 14) {
            speed += 25;
        }
        else if (MainClassLevel >= 10) {
            speed += 20;
        }
        else if (MainClassLevel >= 6) {
            speed += 15;
        }
        else if (MainClassLevel >= 2) {
            speed += 10;
        }
    }

    this.getField('Speed').value = speed;
}
