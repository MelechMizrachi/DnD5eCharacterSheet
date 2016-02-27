function determineSpeed()
{
    var race  = this.getField('RaceDD').value;
    var speed = 30;

    switch (race) {
        case 'Dwarf/Hill Dwarf' :
            speed = 25;
            break;
        case 'Dwarf/Mountain Dwarf' :
            speed = 25;
            break;
        case 'Elf/Wood Elf' :
            speed = 35;
            break;
        case 'Halfling/Lightfoot Halfling' :
            speed = 25;
            break;
        case 'Halfling/Stout Halfling' :
            speed = 25;
            break;
        case 'Gnome/Forest Gnome' :
            speed = 25;
            break;
        case 'Gnome/Rock Gnome' :
            speed = 25;
            break;
        case 'Goliath' :
            speed = 40;
            break;
    }

    return speed;
}