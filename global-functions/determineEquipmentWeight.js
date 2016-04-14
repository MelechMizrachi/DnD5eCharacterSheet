function determineEquipmentWeight()
{
    var EquipmentWeightVal = this.getField('EquipmentWeightVal');
    var EquipmentVal       = this.getField('EquipmentVal');
    var fields             = EquipmentWeightVal.getArray();
    var EquipmentValFields = EquipmentVal.getArray();
    var total              = 0;
    var field;
    var EquipmentValField;

    for (var i = 0; i < fields.length; i++) {
        field             = fields[i].value;
        EquipmentValField = EquipmentValFields[i].value;

        total += ((field > 0 ? field : 0) * (EquipmentValField > 0 ? EquipmentValField : 1));
    }

    return total;
}
