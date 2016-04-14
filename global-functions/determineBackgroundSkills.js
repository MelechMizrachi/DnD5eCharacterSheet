function determineBackgroundSkills()
{
    var Background  = event.value;
    var firstSkill  = false;
    var secondSkill = false;

    switch (Background) {
        case 'Acolyte' :
            firstSkill  = 'Insight';
            secondSkill = 'Religion';
            break;
        case 'Charlatan' :
            firstSkill  = 'Deception';
            secondSkill = 'Sleight';
            break;
        case 'Criminal' :
            firstSkill  = 'Deception';
            secondSkill = 'Stealth';
            break;
        case 'Entertainer' :
            firstSkill  = 'Acrobatics';
            secondSkill = 'Performance';
            break;
        case 'Folk Hero' :
            firstSkill  = 'Animal';
            secondSkill = 'Survival';
            break;
        case 'Guild Artisan' :
            firstSkill  = 'Insight';
            secondSkill = 'Persuasion';
            break;
        case 'Hermit' :
            firstSkill  = 'Medicine';
            secondSkill = 'Religion';
            break;
        case 'Noble' :
            firstSkill  = 'History';
            secondSkill = 'Persuasion';
            break;
        case 'Outlander' :
            firstSkill  = 'Athletics';
            secondSkill = 'Survival';
            break;
        case 'Sage' :
            firstSkill  = 'Arcana';
            secondSkill = 'History';
            break;
        case 'Sailor' :
            firstSkill  = 'Athletics';
            secondSkill = 'Perception';
            break;
        case 'Soldier' :
            firstSkill  = 'Athletics';
            secondSkill = 'Intimidation';
            break;
        case 'Urchin' :
            firstSkill  = 'Sleight';
            secondSkill = 'Stealth';
            break;
    }

    //this.getField('SK CB Acrobatics').value    = 'Off';
    //this.getField('SK CB Animal').value        = 'Off';
    //this.getField('SK CB Arcana').value        = 'Off';
    //this.getField('SK CB Athletics').value     = 'Off';
    //this.getField('SK CB Deception').value     = 'Off';
    //this.getField('SK CB History').value       = 'Off';
    //this.getField('SK CB Insight').value       = 'Off';
    //this.getField('SK CB Intimidation').value  = 'Off';
    //this.getField('SK CB Investigation').value = 'Off';
    //this.getField('SK CB Medicine').value      = 'Off';
    //this.getField('SK CB Nature').value        = 'Off';
    //this.getField('SK CB Perception').value    = 'Off';
    //this.getField('SK CB Performance').value   = 'Off';
    //this.getField('SK CB Persuasion').value    = 'Off';
    //this.getField('SK CB Religion').value      = 'Off';
    //this.getField('SK CB Sleight').value       = 'Off';
    //this.getField('SK CB Stealth').value       = 'Off';
    //this.getField('SK CB Survival').value      = 'Off';

    if (firstSkill) {
        this.getField('SK CB ' + firstSkill).value = 'Yes';
    }

    if (secondSkill) {
        this.getField('SK CB ' + secondSkill).value = 'Yes';
    }
}
