function determineSpeed()
{
    var race  = this.getField('RaceDD').value;
    var speed = 30;

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
    else if (race == 'Goliath') {
        speed = 40;
    }

    return speed;
}