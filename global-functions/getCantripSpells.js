function getCantripSpells()
{
    return [
        {
            "name"        : "Acid Splash",
            "type"        : "Conjuration",
            "castingTime" : "1 action",
            "range"       : "60 feet",
            "components"  : "V, S",
            "duration"    : "Instantaneous",
            "description" : "You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage. This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
        },
        {
            "name"        : "Blade Ward",
            "type"        : "Abjuration",
            "castingTime" : "1 action",
            "range"       : "Self",
            "components"  : "V, S",
            "duration"    : "1 Round",
            "description" : "You extend your hand and trace a sigil of warding in the air. Until the end of your next turn, you have resistance against bludgeoning, piercing, and slashing damage dealt by weapon attacks."
        },
        {
            "name"        : "Booming Blade",
            "type"        : "Evocation",
            "castingTime" : "1 action",
            "range"       : "5 feet",
            "components"  : "V, M (a weapon)",
            "duration"    : "1 round",
            "description" : "As part of the action used to cast this spell, you must make a melee attack with a weapon against one creature within the spell's range, otherwise the spell fails. On a hit, the target suffers the attack's normal effects, and it becomes sheathed in booming energy until the start of your next turn. If the target willingly moves before then, it immediately takes 1d8 thunder damage, and the spell ends. This spell's damage increases when you reach higher levels. At 5th level, the melee attack deals an extra 1d8 thunder damage to the target, and the damage the target takes for moving increases to 2d8. Both damage rolls increase by 1d8 at 11th level and 17th level."
        },
        {
            "name"        : "Chill Touch",
            "type"        : "Necromancy",
            "castingTime" : "1 action",
            "range"       : "120 feet",
            "components"  : "V, S",
            "duration"    : "1 round",
            "description" : "You create a ghostly, skeletal hand in the space of a creature within range. Make a ranged spell attack against the creature to assail it with the chill of the grave. On a hit, the target takes 1d8 necrotic damage, and it can't regain hit points until the start of your next turn. Until then, the hand clings to the target. If you hit an undead target, it also has disadvantage on attack rolls against you until the end of your next turn. This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
        },
        {
            "name"        : "Control Flames",
            "type"        : "Transmutation",
            "castingTime" : "1 action",
            "range"       : "60 feet",
            "components"  : "S",
            "duration"    : "Instantaneous or 1 hour (see below)",
            "description" : "You choose nonmagical flame that you can see within range and that fits within a 5-foot cube. You affect it in one of the following ways: - You instantaneously expand the flame 5 feet in one direction, provided that wood or other fuel is present in the new location. - You instantaneously extinguish the flames within the cube. - You double or halve the area of bright light and dim light cast by the flame, change its color, or both. The change lasts for 1 hour. - You cause simple shapes—such as the vague form of a creature, an inanimate object, or a location—to appear within the flames and animate as you like. The shapes last for 1 hour. If you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action."
        },
        {
            "name"        : "Create Bonfire",
            "type"        : "Conjuration",
            "castingTime" : "1 action",
            "range"       : "60 feet",
            "components"  : "V, S",
            "duration"    : "Concentration, up to 1 minute",
            "description" : "You create a bonfire on ground that you can see within range. Until the spell ends, the bonfire fills a 5-foot cube. Any creature in the bonfire's space when you cast the spell must succeed on a Dexterity saving throw or take 1d8 fire damage. A creature must also make the saving throw when it enters the bonfire's space for the first time on a turn or ends its turn there. The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
        },
        {
            "name"        : "Dancing Lights",
            "type"        : "Evocation",
            "castingTime" : "1 action",
            "range"       : "120 feet",
            "components"  : "V, S, M (a bit of phosphorus or wychwood, or a glowworm)",
            "duration"    : "Concentration, up to 1 minute",
            "description" : "You create up to four torch-sized lights within range, making them appear as torches, lanterns, or glowing orbs that hover in the air for the duration. You can also combine the four lights into one glowing vaguely humanoid form of Medium size. Whichever form you choose, each light sheds dim light in a 10-foot radius. As a bonus action on your turn, you can move the lights up to 60 feet to a new spot within range. A light must be within 20 feet of another light created by this spell, and a light winks out if it exceeds the spell's range."
        },
        {
            "name"        : "Druidcraft",
            "type"        : "Transmutation",
            "castingTime" : "1 action",
            "range"       : "30 feet",
            "components"  : "V, S",
            "duration"    : "Instantaneous",
            "description" : "Whispering to the spirits of nature, you create one of the following effects within range: - You create a tiny, harmless sensory effect that predicts what the weather will be at your location for the next 24 hours. The effect might manifest as a golden orb for clear skies, a cloud for rain, falling snowflakes for snow, and so on. This effect persists for 1 round. - You instantly make a flower bloom, a seed pod open, or a leaf bud bloom. - You create an instantaneous, harmless sensory effect, such as falling leaves, a puff of wind, the sound of a small animal, or the faint order of skunk. The effect must fit in a 5-foot cube. - You instantly light or snuff out a candle, a torch, or a small campfire."
        },
        {
            "name"        : "Eldritch Blast",
            "type"        : "Evocation",
            "castingTime" : "1 action",
            "range"       : "120 feet",
            "components"  : "V, S",
            "duration"    : "Instantaneous",
            "description" : "A beam of crackling energy streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 force damage. The spell creates more than one beam when you reach higher levels: two beams at 5th level, three beams at 11th level, and four beams at 17th level. You can direct the beams at the same target or at different ones. Make a separate attack roll for each beam."
        },
        {
            "name"        : "Fire Bolt",
            "type"        : "Evocation",
            "castingTime" : "1 action",
            "range"       : "120 feet",
            "components"  : "V, S",
            "duration"    : "Instantaneous",
            "description" : "You hurl a mote of fire at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 fire damage. A flammable object hit by this spell ignites if it isn't being worn or carried. This spell's damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10)."
        },
        {
            "name"        : "Friends",
            "type"        : "Enchantment",
            "castingTime" : "1 action",
            "range"       : "Self",
            "components"  : "S, M (a small amount of makeup applied to the face as this spell is cast)",
            "duration"    : "Concentration, up to 1 minute",
            "description" : "For the duration, you have advantage on all Charisma checks directed at one creature of your choice that isn't hostile toward you. When the spell ends, the creature realizes that you have used magic to influence its mood and becomes hostile toward you. A creature prone to violence might attack you. Another creature might seek retribution in other ways (at the DM's discretion), depending on the nature of your interaction with it."
        },
        {
            "name"        : "Frostbite",
            "type"        : "Evocation",
            "castingTime" : "1 action",
            "range"       : "60 feet",
            "components"  : "V, S",
            "duration"    : "Instantaneous",
            "description" : "You cause numbing frost to form on one creature that you can see within range. The target must make a Constitution saving throw. On a failed save, the target takes 1d6 cold damage, and it has disadvantage on the next weapon attack roll it makes before the end of its next turn. The spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
        },
        {
            "name"        : "Green-Flame Blade",
            "type"        : "Evocation",
            "castingTime" : "1 action",
            "range"       : "5 feet",
            "components"  : "V, M (a weapon)",
            "duration"    : "Instantaneous",
            "description" : "As part of the action used to cast this spell, you must make a melee attack with a weapon against one creature within the spell's range, otherwise the spell fails. On a hit, the target suffers the attack's normal effects, and green fire leaps from the target to a different creature of your choice that you can see within 5 feet of it. The second creature takes fire damage equal to your spellcasting modifier. This spell's damage increases when you reach higher levels. At 5th level, the melee attack deals an extra 1d8 fire damage to the target, and the fire damage to the second creature increases to 1d8 + your spellcasting ability modifier. Both damage rolls increase by 1d8 at 11th level and 17th level."
        },
        {
            "name"        : "Guidance",
            "type"        : "Divination",
            "castingTime" : "1 action",
            "range"       : "Touch",
            "components"  : "V, S",
            "duration"    : "Concentration, up to 1 minute",
            "description" : "You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one ability check of its choice. It can roll the die before or after making the ability check. The spell then ends."
        },
        {
            "name"        : "Gust",
            "type"        : "Transmutation",
            "castingTime" : "1 action",
            "range"       : "30 feet",
            "components"  : "V, S",
            "duration"    : "Instantaneous",
            "description" : "You seize the air and compel it to create one of the following effects at a point you can see within range: - One Medium or smaller creature that you choose must succeed on a Strength saving throw or be pushed up to 5 feet away from you. - You create a small blast of air capable of moving one object that is neither held nor carried and that weighs no more than 5 pounds. The object is pushed up to 10 feet away from you. It isn't pushed with enough force to cause damage. - You create a harmless sensory affect using air, such as causing leaves to rustle, wind to slam shutters shut, or your clothing to ripple in a breeze."
        },
        {
            "name"        : "Light",
            "type"        : "Evocation",
            "castingTime" : "1 action",
            "range"       : "Touch",
            "components"  : "V, M (a firefly or phosphorescent moss)",
            "duration"    : "1 hour",
            "description" : "You touch one object that is no larger than 10 feet in any dimension. Until the spell ends, the object sheds bright light in a 20-foot radius and dim light for an additional 20 feet. The light can be colored as you like. Completely covering the object with something opaque blocks the light. The spell ends if you cast it again or dismiss it as an action. If you target an object held or worn by a hostile creature, that creature must succeed on a Dexterity saving throw to avoid the spell."
        },
        {
            "name"        : "Lightning Lure",
            "type"        : "Evocation",
            "castingTime" : "1 action",
            "range"       : "15 feet",
            "components"  : "V",
            "duration"    : "Instantaneous",
            "description" : "You create a lash of lightning energy that strikes at one creature of your choice that you can see within range. The target must succeed on a Strength saving throw or be pulled up to 10 feet in a straight line toward you and then take 1d8 lightning damage if it is within 5 feet of you. This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
        },
        {
            "name"        : "Mage Hand",
            "type"        : "Conjuration",
            "castingTime" : "1 action",
            "range"       : "30 feet",
            "components"  : "V, S",
            "duration"    : "1 minute",
            "description" : "A spectral, floating hand appears at a point you choose within range. The hand lasts for the duration or until you dismiss it as an action. The hand vanishes if it is ever more than 30 feet away from you or if you cast this spell again. You can use your action to control the hand. You can use the hand to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial. You can move the hand up to 30 feet each time you use it. The hand can't attack, activate magic items, or carry more than 10 pounds."
        },
        {
            "name"        : "Magic Stone",
            "type"        : "Transmutation",
            "castingTime" : "1 bonus action",
            "range"       : "Touch",
            "components"  : "V, S",
            "duration"    : "1 minute",
            "description" : "You touch one to three pebbles and imbue them with magic. You or someone else can make a ranged spell attack with one of the pebbles by throwing it or hurling it with a sling. If thrown, it has a range of 60 feet. If someone else attacks with the pebble, that attacker adds your spellcasting ability modifier, not the attacker's, to the attack roll. On a hit, the target takes bludgeoning damage equal to 1d6 + your spellcasting ability modifier. Hit or miss, the spell then ends on the stone. If you cast this spell again, the spell ends early on any pebbles still affected by it."
        },
        {
            "name"        : "Mending",
            "type"        : "Transmutation",
            "castingTime" : "1 minute",
            "range"       : "Touch",
            "components"  : "V, S, M (two lodestones)",
            "duration"    : "Instantaneous",
            "description" : "This spell repairs a single break or tear in an object you touch, such as a broken key, a torn cloak, or a leaking wineskin. As long as the break or tear is no longer than 1 foot in any dimension, you mend it, leaving no trace of the former damage. This spell can physically repair a magic item or construct, but the spell can't restore magic to such an object."
        },
        {
            "name"        : "Message",
            "type"        : "Transmutation",
            "castingTime" : "1 action",
            "range"       : "120 feet",
            "components"  : "V, S, M (a short piece of copper wire)",
            "duration"    : "1 round",
            "description" : "You point your finger toward a creature within range and whisper a message. The target (and only the target) hears the message and can reply in a whisper that only you can hear. You can cast this spell through solid objects if you are familiar with the target and know it is beyond the barrier. Magical silence, 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood blocks the spell. The spell doesn't have to follow a straight line and can travel freely around corners or through openings."
        },
        {
            "name"        : "Minor Illusion",
            "type"        : "Illusion",
            "castingTime" : "1 action",
            "range"       : "30 feet",
            "components"  : "S, M (a bit of fleece)",
            "duration"    : "1 minute",
            "description" : "You create a sound or an image of an object within range that lasts for the duration. The illusion also ends if you dismiss it as an action or cast this spell again. If you create a sound, its volume can range from a whisper to a scream. It can be your voice, someone else's voice, a lion's roar, a beating of drums, or any other sound you choose. The sound continues unabated throughout the duration, or you can make discrete sounds at different times before the spell ends. If you create an image of an object—such as a chair, muddy footprints, or a small chest—it must be no larger than a 5-foot cube. The image can't create sound, light, smell, or any other sensory effect. Physical interaction with the image reveals it to be an illusion, because things can pass through it. If a creature uses its action to examine the sound or image, the creature can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the illusion becomes faint to the creature."
        },
        {
            "name"        : "Mold Earth",
            "type"        : "Transmutation",
            "castingTime" : "1 action",
            "range"       : "30 feet",
            "components"  : "S",
            "duration"    : "Instantaneous or 1 hour (see below)",
            "description" : "You choose a portion of dirt or stone that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways: - If you target an area of loose earth, you can instantaneously excavate it, move it along the ground, and deposit it up to 5 feet away. This movement doesn't have enough force to cause damage. - You cause shapes, colors, or both to appear on the dirt or stone, spelling out words, creating images, or shaping patterns. The changes last for 1 hour. - If the dirt or stone you target is on the ground, you cause it to become difficult terrain. Alternatively, you can cause the ground to become normal terrain if it is already difficult terrain. This change lasts for 1 hour. If you cast this spell multiple times, you can have no more than two of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action."
        },
        {
            "name"        : "Poison Spray",
            "type"        : "Conjuration",
            "castingTime" : "1 action",
            "range"       : "10 feet",
            "components"  : "V, S",
            "duration"    : "Instantaneous",
            "description" : "You extend your hand toward a creature you can see within range and project a puff of noxious gas from your palm. The creature must succeed on a Constitution saving throw or take 1d12 poison damage. This spell's damage increases by 1d12 when you reach 5th level (2d12), 11th level (3d12), and 17th level (4d12)."
        },
        {
            "name"        : "Prestidigitation",
            "type"        : "Transmutation",
            "castingTime" : "1 action",
            "range"       : "10 feet",
            "components"  : "V, S",
            "duration"    : "Up to 1 hour",
            "description" : "This spell is a minor magical trick that novice spellcasters use for practice. You create one of the following magical effects within range: - You create an instantaneous, harmless sensory effect, such as a shower of sparks, a puff of wind, faint musical notes, or an odd odor. - You instantaneously light or snuff out a candle, a torch, or a small campfire. - You instantaneously clean or soil an object no larger than 1 cubic foot. - You chill, warm, or flavor up to 1 cubic foot of nonliving material for 1 hour. - You make a color, a small mark, or a symbol appear on an object or a surface for 1 hour. - You create a nonmagical trinket or an illusory image that can fit in your hand and that lasts until the end of your next turn. If you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action."
        },
        {
            "name"        : "Produce Flame",
            "type"        : "Conjuration",
            "castingTime" : "1 action",
            "range"       : "Self",
            "components"  : "V, S",
            "duration"    : "10 minutes",
            "description" : "A flickering flame appears in your hand. The flame remains there for the duration and harms neither you nor your equipment. The flame sheds bright light in a 10-foot radius and dim light for an additional 10 feet. The spell ends if you dismiss it as an action or if you cast it again. You can also attack with the flame, although doing so ends the spell. When you cast this spell, or as an action on a later turn, you can hurl the flame at a creature within 30 feet of you. Make a ranged spell attack. On a hit, the target takes 1d8 fire damage. This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
        },
        {
            "name"        : "Ray of Frost",
            "type"        : "Evocation",
            "castingTime" : "1 action",
            "range"       : "60 feet",
            "components"  : "V, S",
            "duration"    : "Instantaneous",
            "description" : "A frigid beam of blue-white light streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, it takes 1d8 cold damage, and its speed is reduced by 10 feet until the start of your next turn. The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
        },
        {
            "name"        : "Resistance",
            "type"        : "Abjuration",
            "castingTime" : "1 action",
            "range"       : "Touch",
            "components"  : "V, S, M (a miniature cloak)",
            "duration"    : "Concentration, up to 1 minute",
            "description" : "You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one saving throw of its choice. It can roll the die before or after making the saving throw. The spell then ends."
        },
        {
            "name"        : "Sacred Flame",
            "type"        : "Evocation",
            "castingTime" : "1 action",
            "range"       : "60 feet",
            "components"  : "V, S",
            "duration"    : "Instantaneous",
            "description" : "Flame-like radiance descends on a creature that you can see within range. The target must succeed on a Dexterity saving throw or take 1d8 radiant damage. The target gains no benefit from cover for this saving throw. The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
        },
        {
            "name"        : "Shape Water",
            "type"        : "Transmutation",
            "castingTime" : "1 action",
            "range"       : "30 feet",
            "components"  : "S",
            "duration"    : "Instantaneous or 1 hour (see below)",
            "description" : "You choose an area of water that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways: - You instantaneously move or otherwise change the flow of the water as you direct, up to 5 feet in any direction. This movement doesn't have enough force to cause damage. - You cause the water to form into simple shapes and animate at your direction. This change lasts for 1 hour. - You change the water's color or opacity. The water must be changed in the same way throughout. This change lasts for 1 hour. - You freeze the water, provided that there are no creatures in it. The water unfreezes in 1 hour. If you cast this spell multiple times, you can have no more than two of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action."
        },
        {
            "name"        : "Shillelagh",
            "type"        : "Transmutation",
            "castingTime" : "1 bonus action",
            "range"       : "Touch",
            "components"  : "V, S, M (mistletoe, a shamrock leaf, and a club or quarterstaff)",
            "duration"    : "1 minute",
            "description" : "The wood of a club or a quarterstaff you are holding is imbued with nature's power. For the duration, you can use your spellcasting ability instead of Strength for the attack and damage rolls of melee attacks using that weapon, and the weapon's damage die becomes a d8. The weapon also becomes magical, if it isn't already. The spell ends if you cast it again or if you let go of the weapon."
        },
        {
            "name"        : "Shocking Grasp",
            "type"        : "Evocation",
            "castingTime" : "1 action",
            "range"       : "Touch",
            "components"  : "V, S",
            "duration"    : "Instantaneous",
            "description" : "Lightning springs from your hand to deliver a shock to a creature you try to touch. Make a melee spell attack against the target. You have advantage on the attack roll if the target is wearing armor made of metal. On a hit, the target takes 1d8 lightning damage, and it can't take reactions until the start of its next turn. The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
        },
        {
            "name"        : "Spare the Dying",
            "type"        : "Necromancy",
            "castingTime" : "1 action",
            "range"       : "Touch",
            "components"  : "V, S",
            "duration"    : "Instantaneous",
            "description" : "You touch a living creature that has 0 hit points. The creature becomes stable. This spell has no effect on undead or constructs."
        },
        {
            "name"        : "Sword Burst",
            "type"        : "Conjuration",
            "castingTime" : "1 action",
            "range"       : "5 feet",
            "components"  : "V",
            "duration"    : "Instantaneous",
            "description" : "You create a momentary circle of spectral blades that sweep around you. Each creature within range, other than you, must succeed on a Dexterity saving throw or take 1d6 force damage. This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
        },
        {
            "name"        : "Thaumaturgy",
            "type"        : "Transmutation",
            "castingTime" : "1 action",
            "range"       : "30 feet",
            "components"  : "V",
            "duration"    : "Up to 1 minute",
            "description" : "You manifest a minor wonder, a sign of supernatural power, within range. You create one of the following magical effects within range: - Your voice booms up to three times as loud as normal for 1 minute. - You cause flames to flicker, brighten, dim, or change color for 1 minute. - You cause harmless tremors in the ground for 1 minute. - You create an instantaneous sound that originates from a point of your choice within range, such as a rumble of thunder, the cry of a raven, or ominous whispers. - You instantaneously cause an unlocked door or window to fly open or slam shut. - You alter the appearance of your eyes for 1 minute. If you cast this spell multiple times, you can have up to three of its 1-minute effects active at a time, and you can dismiss such an effect as an action."
        },
        {
            "name"        : "Thorn Whip",
            "type"        : "Transmutation",
            "castingTime" : "1 action",
            "range"       : "30 feet",
            "components"  : "V, S, M (the stem of a plant with thorns)",
            "duration"    : "Instantaneous",
            "description" : "You create a long, vine-like whip covered in thorns that lashes out at your command toward a creature in range. Make a melee spell attack against the target. If the attack hits, the creature takes 1d6 piercing damage, and if the creature is Large or smaller, you pull the creature up to 10 feet closer to you. This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
        },
        {
            "name"        : "Thunderclap",
            "type"        : "Evocation",
            "castingTime" : "1 action",
            "range"       : "Self (5-foot radius)",
            "components"  : "S",
            "duration"    : "Instantaneous",
            "description" : "You create a burst of thunderous sound, which can be heard 100 feet away. Each creature other than you within 5 feet of you must make a Constitution saving throw. On a failed save, the creature takes 1d6 thunder damage. The spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
        },
        {
            "name"        : "True Strike",
            "type"        : "Divination",
            "castingTime" : "1 action",
            "range"       : "30 feet",
            "components"  : "S",
            "duration"    : "Concentration, up to 1 round",
            "description" : "You extend your hand and point a finger at a target in range. Your magic grants you a brief insight into the target's defenses. On your next turn, you gain advantage on your first attack roll against the target, provided that this spell hasn't ended."
        },
        {
            "name"        : "Vicious Mockery",
            "type"        : "Enchantment",
            "castingTime" : "1 action",
            "range"       : "60 feet",
            "components"  : "V",
            "duration"    : "Instantaneous",
            "description" : "You unleash a string of insults laced with subtle enchantments at a creature you can see within range. If the target can hear you (though it need not understand you), it must succeed on a Wisdom saving throw or take 1d4 psychic damage and have disadvantage on the next attack roll it makes before the end of its next turn. This spell's damage increases by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4)."
        }
    ];
}