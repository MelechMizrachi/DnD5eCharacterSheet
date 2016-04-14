function determineCurrency()
{
    var gold  = event.target.name == 'GP' ? event.value : this.getField('GP').value;

    this.getField('PP').value = gold * 0.1;
    this.getField('EP').value = gold * 2;
    this.getField('SP').value = gold * 10;
    this.getField('CP').value = gold * 100;
}
