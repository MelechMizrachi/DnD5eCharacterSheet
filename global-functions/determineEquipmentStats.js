function determineEquipmentStats(slot)
{
    var item   = event.value;
    var cost   = '';
    var weight = '';

    switch (item) {
        case 'Abacus' :
            cost   = 2;
            weight = 2;
            break;
        case 'Acid (vial)' :
            cost   = 25;
            weight = 1;
            break;
        case 'Alchemist\'s fire (flask)' :
            cost   = 50;
            weight = 1;
            break;
        case 'Arrows (20)' :
            cost   = 1;
            weight = 1;
            break;
        case 'Blowgun needles (50)' :
            cost   = 1;
            weight = 1;
            break;
        case 'Crossbow bolts (20)' :
            cost   = 1;
            weight = 1.5;
            break;
        case 'Sling bullets (20)' :
            cost   = 0.04;
            weight = 1.5;
            break;
        case 'Antitoxin (vial)' :
            cost   = 50;
            weight = 0;
            break;
        case 'Arcane focus Crystal' :
            cost   = 10;
            weight = 1;
            break;
        case 'Arcane focus Orb' :
            cost   = 20;
            weight = 3;
            break;
        case 'Arcane focus Rod' :
            cost   = 10;
            weight = 2;
            break;
        case 'Arcane focus Staff' :
            cost   = 5;
            weight = 4;
            break;
        case 'Arcane focus Wand' :
            cost   = 10;
            weight = 1;
            break;
        case 'Backpack' :
            cost   = 2;
            weight = 5;
            break;
        case 'Ball bearings (1,000)' :
            cost   = 1;
            weight = 2;
            break;
        case 'Barrel' :
            cost   = 2;
            weight = 70;
            break;
        case 'Basket' :
            cost   = 0.4;
            weight = 2;
            break;
        case 'Bedroll' :
            cost   = 1;
            weight = 7;
            break;
        case 'Bell' :
            cost   = 1;
            weight = 0;
            break;
        case 'Blanket' :
            cost   = 0.5;
            weight = 3;
            break;
        case 'Block and tackle' :
            cost   = 1;
            weight = 5;
            break;
        case 'Book' :
            cost   = 25;
            weight = 5;
            break;
        case 'Bottle, glass' :
            cost   = 2;
            weight = 2;
            break;
        case 'Bucket' :
            cost   = 0.05;
            weight = 2;
            break;
        case 'Caltrops (bag of 20)' :
            cost   = 1;
            weight = 2;
            break;
        case 'Candle' :
            cost   = 0.01;
            weight = 0;
            break;
        case 'Case, crossbow bolt' :
            cost   = 1;
            weight = 1;
            break;
        case 'Case, map or scroll' :
            cost   = 1;
            weight = 1;
            break;
        case 'Chain (10 feet)' :
            cost   = 5;
            weight = 10;
            break;
        case 'Chalk (1 piece)' :
            cost   = 0.01;
            weight = 0;
            break;
        case 'Chest' :
            cost   = 5;
            weight = 25;
            break;
        case 'Climber\'s kit' :
            cost   = 25;
            weight = 12;
            break;
        case 'Clothes, common' :
            cost   = 0.5;
            weight = 3;
            break;
        case 'Clothes, costume' :
            cost   = 5;
            weight = 4;
            break;
        case 'Clothes, fine' :
            cost   = 15;
            weight = 6;
            break;
        case 'Clothes, traveler\'s' :
            cost   = 2;
            weight = 4;
            break;
        case 'Component pouch' :
            cost   = 25;
            weight = 2;
            break;
        case 'Crowbar' :
            cost   = 2;
            weight = 5;
            break;
        case 'Sprig of mistletoe' :
            cost   = 1;
            weight = 0;
            break;
        case 'Totem' :
            cost   = 1;
            weight = 0;
            break;
        case 'Wooden staff' :
            cost   = 5;
            weight = 4;
            break;
        case 'Yew wand' :
            cost   = 10;
            weight = 1;
            break;
        case 'Fishing tackle' :
            cost   = 1;
            weight = 4;
            break;
        case 'Flask or tankard' :
            cost   = 0.02;
            weight = 1;
            break;
        case 'Grappling hook' :
            cost   = 2;
            weight = 4;
            break;
        case 'Hammer' :
            cost   = 1;
            weight = 3;
            break;
        case 'Hammer, sledge' :
            cost   = 2;
            weight = 10;
            break;
        case 'Healer\'s kit' :
            cost   = 5;
            weight = 3;
            break;
        case 'Holy symbol Amulet' :
            cost   = 5;
            weight = 1;
            break;
        case 'Holy symbol Emblem' :
            cost   = 5;
            weight = 0;
            break;
        case 'Holy symbol Reliquary' :
            cost   = 5;
            weight = 2;
            break;
        case 'Holy water (flask)' :
            cost   = 25;
            weight = 1;
            break;
        case 'Hourglass' :
            cost   = 25;
            weight = 1;
            break;
        case 'Hunting trap' :
            cost   = 5;
            weight = 25;
            break;
        case 'Ink (1 ounce bottle)' :
            cost   = 10;
            weight = 0;
            break;
        case 'Ink pen' :
            cost   = 0.02;
            weight = 0;
            break;
        case 'Jug or pitcher' :
            cost   = 0.02;
            weight = 4;
            break;
        case 'Ladder (10-foot)' :
            cost   = 0.1;
            weight = 25;
            break;
        case 'Lamp' :
            cost   = 0.5;
            weight = 1;
            break;
        case 'Lantern, bullseye' :
            cost   = 10;
            weight = 2;
            break;
        case 'Lantern, hooded' :
            cost   = 5;
            weight = 2;
            break;
        case 'Lock' :
            cost   = 10;
            weight = 1;
            break;
        case 'Magnifying glass' :
            cost   = 100;
            weight = 0;
            break;
        case 'Manacles' :
            cost   = 2;
            weight = 6;
            break;
        case 'Mess kit' :
            cost   = 0.2;
            weight = 1;
            break;
        case 'Mirror, steel' :
            cost   = 5;
            weight = 0.5;
            break;
        case 'Oil (flask)' :
            cost   = 0.1;
            weight = 1;
            break;
        case 'Paper (one sheet)' :
            cost   = 0.2;
            weight = 0;
            break;
        case 'Parchment (one sheet)' :
            cost   = 0.1;
            weight = 0;
            break;
        case 'Perfume (vial)' :
            cost   = 5;
            weight = 0;
            break;
        case 'Pick, miner\'s' :
            cost   = 2;
            weight = 10;
            break;
        case 'Piton' :
            cost   = 0.05;
            weight = 0.25;
            break;
        case 'Poison, basic (vial)' :
            cost   = 100;
            weight = 0;
            break;
        case 'Pole (10-foot)' :
            cost   = 0.05;
            weight = 7;
            break;
        case 'Pot, iron' :
            cost   = 2;
            weight = 10;
            break;
        case 'Potion of healing' :
            cost   = 50;
            weight = 0.5;
            break;
        case 'Pouch' :
            cost   = 0.5;
            weight = 1;
            break;
        case 'Quiver' :
            cost   = 1;
            weight = 1;
            break;
        case 'Ram, portable' :
            cost   = 4;
            weight = 35;
            break;
        case 'Rations (1 day)' :
            cost   = 0.5;
            weight = 2;
            break;
        case 'Robes' :
            cost   = 1;
            weight = 4;
            break;
        case 'Rope, hempen (50 feet)' :
            cost   = 1;
            weight = 10;
            break;
        case 'Rope, silk (50 feet)' :
            cost   = 10;
            weight = 5;
            break;
        case 'Sack' :
            cost   = 0.01;
            weight = 0.5;
            break;
        case 'Scale, merchant\'s' :
            cost   = 5;
            weight = 3;
            break;
        case 'Sealing wax' :
            cost   = 0.5;
            weight = 0;
            break;
        case 'Shovel' :
            cost   = 2;
            weight = 5;
            break;
        case 'Signal whistle' :
            cost   = 0.05;
            weight = 0;
            break;
        case 'Signet ring' :
            cost   = 5;
            weight = 0;
            break;
        case 'Soap' :
            cost   = 0.02;
            weight = 0;
            break;
        case 'Spellbook' :
            cost   = 50;
            weight = 3;
            break;
        case 'Spikes, iron (10)' :
            cost   = 1;
            weight = 5;
            break;
        case 'Spyglass' :
            cost   = 1000;
            weight = 1;
            break;
        case 'Tent, two-person' :
            cost   = 2;
            weight = 20;
            break;
        case 'Tinderbox' :
            cost   = 0.5;
            weight = 1;
            break;
        case 'Torch' :
            cost   = 0.01;
            weight = 1;
            break;
        case 'Vial' :
            cost   = 1;
            weight = 0;
            break;
        case 'Waterskin' :
            cost   = 0.2;
            weight = 5;
            break;
        case 'Whetstone' :
            cost   = 0.01;
            weight = 1;
            break;
        case 'Alchemist\'s supplies' :
            cost   = 50;
            weight = 8;
            break;
        case 'Brewer\'s supplies' :
            cost   = 20;
            weight = 9;
            break;
        case 'Calligrapher\'s supplies' :
            cost   = 10;
            weight = 5;
            break;
        case 'Carpenter\'s tools' :
            cost   = 8;
            weight = 6;
            break;
        case 'Cartographer\'s tools' :
            cost   = 15;
            weight = 6;
            break;
        case 'Cobbler\'s tools' :
            cost   = 5;
            weight = 5;
            break;
        case 'Cook\'s utensils' :
            cost   = 1;
            weight = 8;
            break;
        case 'Glassblower\'s tools' :
            cost   = 30;
            weight = 5;
            break;
        case 'Jeweler\'s tools' :
            cost   = 25;
            weight = 2;
            break;
        case 'Leatherworker\'s tools' :
            cost   = 5;
            weight = 5;
            break;
        case 'Mason\'s tools' :
            cost   = 10;
            weight = 8;
            break;
        case 'Painter\'s supplies' :
            cost   = 10;
            weight = 5;
            break;
        case 'Potter\'s tools' :
            cost   = 10;
            weight = 3;
            break;
        case 'Smith\'s tools' :
            cost   = 20;
            weight = 8;
            break;
        case 'Tinker\'s tools' :
            cost   = 50;
            weight = 10;
            break;
        case 'Weaver\'s tools' :
            cost   = 1;
            weight = 5;
            break;
        case 'Woodcarver\'s tools' :
            cost   = 1;
            weight = 5;
            break;
        case 'Disguise kit' :
            cost   = 25;
            weight = 3;
            break;
        case 'Forgery kit' :
            cost   = 15;
            weight = 5;
            break;
        case 'Dice set' :
            cost   = 0.1;
            weight = 0;
            break;
        case 'Dragonchess set' :
            cost   = 1;
            weight = 0.5;
            break;
        case 'Playing card set' :
            cost   = 0.5;
            weight = 0;
            break;
        case 'Three-Dragon Ante set' :
            cost   = 1;
            weight = 0;
            break;
        case 'Herbalism kit' :
            cost   = 5;
            weight = 3;
            break;
        case 'Bagpipes' :
            cost   = 30;
            weight = 6;
            break;
        case 'Drum' :
            cost   = 6;
            weight = 3;
            break;
        case 'Dulcimer' :
            cost   = 25;
            weight = 10;
            break;
        case 'Flute' :
            cost   = 2;
            weight = 1;
            break;
        case 'Lute' :
            cost   = 35;
            weight = 2;
            break;
        case 'Lyre' :
            cost   = 30;
            weight = 2;
            break;
        case 'Horn' :
            cost   = 3;
            weight = 2;
            break;
        case 'Pan flute' :
            cost   = 12;
            weight = 2;
            break;
        case 'Shawm' :
            cost   = 2;
            weight = 1;
            break;
        case 'Viol' :
            cost   = 30;
            weight = 1;
            break;
        case 'Navigator\'s tools' :
            cost   = 25;
            weight = 2;
            break;
        case 'Poisoner\'s kit' :
            cost   = 50;
            weight = 2;
            break;
        case 'Thieves\' tools' :
            cost   = 25;
            weight = 1;
            break;
        case 'Bit and bridle' :
            cost   = 2;
            weight = 1;
            break;
        case 'Carriage' :
            cost   = 100;
            weight = 600;
            break;
        case 'Cart' :
            cost   = 15;
            weight = 200;
            break;
        case 'Chariot' :
            cost   = 250;
            weight = 100;
            break;
        case 'Feed (per day)' :
            cost   = 0.05;
            weight = 10;
            break;
        case 'Saddle Exotic' :
            cost   = 60;
            weight = 40;
            break;
        case 'Saddle Military' :
            cost   = 20;
            weight = 30;
            break;
        case 'Saddle Pack' :
            cost   = 5;
            weight = 15;
            break;
        case 'Saddle Riding' :
            cost   = 10;
            weight = 25;
            break;
        case 'Saddlebags' :
            cost   = 4;
            weight = 8;
            break;
        case 'Sled' :
            cost   = 20;
            weight = 300;
            break;
        case 'Wagon' :
            cost   = 35;
            weight = 400;
            break;
        case 'Padded Light Armor' :
            cost   = 5;
            weight = 8;
            break;
        case 'Leather Light Armor' :
            cost   = 10;
            weight = 10;
            break;
        case 'Studded Leather Light Armor' :
            cost   = 45;
            weight = 13;
            break;
        case 'Hide Medium Armor' :
            cost   = 10;
            weight = 12;
            break;
        case 'Chain Shirt Medium Armor' :
            cost   = 50;
            weight = 20;
            break;
        case 'Scale Mail Medium Armor' :
            cost   = 50;
            weight = 45;
            break;
        case 'Breastplate Medium Armor' :
            cost   = 400;
            weight = 20;
            break;
        case 'Half Plate Medium Armor' :
            cost   = 750;
            weight = 40;
            break;
        case 'Ring Mail Heavy Armor' :
            cost   = 30;
            weight = 40;
            break;
        case 'Chain Mail Heavy Armor' :
            cost   = 75;
            weight = 55;
            break;
        case 'Splint Heavy Armor' :
            cost   = 200;
            weight = 60;
            break;
        case 'Plate Heavy Armor' :
            cost   = 1500;
            weight = 65;
            break;
        case 'Shield' :
            cost   = 10;
            weight = 6;
            break;
        case 'Club' :
            cost   = 0.1;
            weight = 2;
            break;
        case 'Dagger' :
            cost   = 2;
            weight = 1;
            break;
        case 'Greatclub' :
            cost   = 0.2;
            weight = 10;
            break;
        case 'Handaxe' :
            cost   = 5;
            weight = 2;
            break;
        case 'Javelin' :
            cost   = .5;
            weight = 2;
            break;
        case 'Light Hammer' :
            cost   = 2;
            weight = 2;
            break;
        case 'Mace' :
            cost   = 5;
            weight = 4;
            break;
        case 'Quarterstaff' :
            cost   = 0.2;
            weight = 4;
            break;
        case 'Sickle' :
            cost   = 1;
            weight = 2;
            break;
        case 'Spear' :
            cost   = 1;
            weight = 3;
            break;
        case 'Unarmed Strike' :
            cost   = 0;
            weight = 0;
            break;
        case 'Crossbow, light' :
            cost   = 25;
            weight = 5;
            break;
        case 'Dart' :
            cost   = 0.05;
            weight = 0.25;
            break;
        case 'Shortbow' :
            cost   = 25;
            weight = 2;
            break;
        case 'Sling' :
            cost   = 0.1;
            weight = 0;
            break;
        case 'Battleaxe' :
            cost   = 10;
            weight = 4;
            break;
        case 'Flail' :
            cost   = 10;
            weight = 2;
            break;
        case 'Glaive' :
            cost   = 20;
            weight = 6;
            break;
        case 'Greataxe' :
            cost   = 30;
            weight = 7;
            break;
        case 'Greatsword' :
            cost   = 50;
            weight = 6;
            break;
        case 'Halberd' :
            cost   = 20;
            weight = 6;
            break;
        case 'Lance' :
            cost   = 10;
            weight = 6;
            break;
        case 'Longsword' :
            cost   = 15;
            weight = 4;
            break;
        case 'Maul' :
            cost   = 10;
            weight = 10;
            break;
        case 'Morningstar' :
            cost   = 15;
            weight = 4;
            break;
        case 'Pike' :
            cost   = 5;
            weight = 18;
            break;
        case 'Rapier' :
            cost   = 25;
            weight = 2;
            break;
        case 'Scimitar' :
            cost   = 25;
            weight = 3;
            break;
        case 'Shortsword' :
            cost   = 10;
            weight = 2;
            break;
        case 'Trident' :
            cost   = 5;
            weight = 4;
            break;
        case 'War Pick' :
            cost   = 5;
            weight = 2;
            break;
        case 'Warhammer' :
            cost   = 15;
            weight = 2;
            break;
        case 'Whip' :
            cost   = 2;
            weight = 3;
            break;
        case 'Blowgun' :
            cost   = 10;
            weight = 1;
            break;
        case 'Crossbow, hand' :
            cost   = 75;
            weight = 3;
            break;
        case 'Crossbow, heavy' :
            cost   = 50;
            weight = 18;
            break;
        case 'Longbow' :
            cost   = 50;
            weight = 2;
            break;
        case 'Net' :
            cost   = 1;
            weight = 3;
            break;
    }

    this.getField('EquipmentWeightVal.' + slot).value = weight;
    this.getField('EquipmentValueVal.' + slot).value  = cost;
    this.getField('EquipmentVal.' + slot).value       = cost > 0 ? 1 : '';
}