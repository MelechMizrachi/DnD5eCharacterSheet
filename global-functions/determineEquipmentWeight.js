function determineEquipmentWeight()
{
    var EquipmentWeightVal = this.getField('EquipmentWeightVal');
    var EquipmentVal       = this.getField('EquipmentVal');
    var fields             = EquipmentWeightVal.getArray();
    var EquipmentValFields = EquipmentVal.getArray();
    var total              = 0;
    var field;
    var EquipmentValField;

    for (var i in fields) {
        if (fields.hasOwnProperty(i)) {
            field             = fields[i].value;
            EquipmentValField = EquipmentValFields[i].value;

            if (!field) {
                break;
            }

            total += (field * (EquipmentValField > 0 ? EquipmentValField : 1));
        }
    }

    return total;
}