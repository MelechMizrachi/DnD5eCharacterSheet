function determineCarryLimit()
{
    var STR      = this.getField('STR').value;
    var race     = this.getField('RaceDD').value;
    var modifier = 1;

    switch (race) {
        case 'Goliath' :
            modifier = 2;
            break;
        case 'Deep Gnome' :
            modifier = .5;
            break;
        case 'Halfling/Lightfoot Halfling' :
            modifier = .5;
            break;
        case 'Halfling/Stout Halfling' :
            modifier = .5;
            break;
        case 'Gnome/Forest Gnome' :
            modifier = .5;
            break;
        case 'Gnome/Rock Gnome' :
            modifier = .5;
            break;
    }

    return STR * 15 * modifier;
}