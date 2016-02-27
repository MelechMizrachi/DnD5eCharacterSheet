function determineRaceSkills()
{
    var race = event.value;

    if (
        race == 'Elf/Dark Elf (Drow)'
        || race == 'Elf/High Elf'
        || race == 'Elf/Wood Elf'
    ) {
        this.getField('SK CB Perception').value = 'Yes';
    }
    else if (race == 'Half-Orc') {
        this.getField('SK CB Intimidation').value = 'Yes';
    }
    else if (race == 'Goliath') {
        this.getField('SK CB Athletics').value = 'Yes';
    }
}