var iFileName = "all_WotC_pub+UA.min.js";
RequiredSheetVersion(13),
  (SourceList["UA:CFV"] = {
    name: "Unearthed Arcana: Class Feature Variants",
    abbreviation: "UA:CFV",
    group: "Unearthed Arcana",
    url: "https://media.wizards.com/2019/dnd/downloads/UA_ClassFeatures.pdf",
    date: "2019/11/04",
  }),
  CreateClassFeatureVariant("barbarian", "danger sense", "Survival Instincts", {
    name: "Survival Instincts",
    source: ["UA:CFV", 1],
    description: desc([
      "I gain proficiency and expertise with two skills of my choice",
      "I can choose from Animal Handling, Medicine, Nature, Perception, and Survival",
    ]),
    skillstxt:
      "Proficiency and expertise with two from Animal Handling, Medicine, Nature, Perception, and Survival",
  }),
  CreateClassFeatureVariant(
    "barbarian",
    "fast movement",
    "Instinctive Pounce",
    {
      name: "Instinctive Pounce",
      source: ["UA:CFV", 1],
      description: desc([
        "As a reaction when a creature ends it move within 15 ft of me, I can move towards it",
        "I move up to half my speed closer to it; This move doesn't provoke opportunity attacks",
      ]),
      action: [["reaction", ""]],
    }
  ),
  AddFeatureChoice(
    ClassList.bard.features.spellcasting,
    !0,
    "Expanded Spell List",
    {
      name: "Expanded Bard Spell List",
      source: ["UA:CFV", 3],
      description: "",
      calcChanges: {
        spellList: [
          function (e, a, t) {
            "bard" === a &&
              -1 === t.indexOf("bonus") &&
              (e.extraspells = e.extraspells.concat([
                "cause fear-xgte",
                "color spray",
                "command",
                "aid",
                "enlarge/reduce",
                "mind spike",
                "mirror image",
                "phantasmal force",
                "mass healing word",
                "slow",
                "tiny servant",
                "phantasmal killer",
                "contact other plane",
                "rary's telepathic bond",
                "heroes' feast",
                "mental prison",
                "scatter",
                "tenser's transformation",
                "power word pain",
                "prismatic spray",
                "antipathy/sympathy",
                "maze",
                "prismatic wall",
              ]));
          },
          "This alternative class feature enhancement expands the spells list of the bard class.",
        ],
      },
    },
    "Bard Spellcasting Enhancement"
  ),
  AddFeatureChoice(
    ClassList.bard.features["bardic inspiration"],
    !0,
    "Magical Inspiration",
    {
      name: "Magical Inspiration",
      source: ["UA:CFV", 3],
      description: desc([
        "A bardic inspiration die recipient can also use it when casting a damaging or healing spell",
        "They can expend the die and add its result to one damage or healing roll of the spell",
      ]),
    },
    "Bardic Inspiration Enhancement"
  ),
  AddFeatureChoice(
    ClassList.bard.features.spellcasting,
    !0,
    "Spell Versatility",
    {
      name: "Spell Versatility",
      source: ["UA:CFV", 3],
      description:
        "\n   After a long rest, I can swap a bard cantrip or spell I know for another of the same level",
    },
    "Bard Spellcasting Enhancement"
  ),
  AddFeatureChoice(
    ClassList.cleric.features.spellcasting,
    !0,
    "Cantrip Versatility",
    {
      name: "Cantrip Versatility",
      source: ["UA:CFV", 3],
      description:
        "\n   Whenever I gain a cleric level, I can replace a cleric cantrip I know with another",
    },
    "Cleric Spellcasting Enhancement"
  ),
  AddFeatureChoice(
    ClassList.cleric.features.spellcasting,
    !0,
    "Expanded Spell List",
    {
      name: "Expanded Cleric Spell List",
      source: ["UA:CFV", 3],
      description: "",
      calcChanges: {
        spellList: [
          function (e, a, t) {
            "cleric" === a &&
              -1 === t.indexOf("bonus") &&
              (e.extraspells = e.extraspells.concat([
                "cause fear-xgte",
                "wrathful smite",
                "branding smite",
                "aura of vitality",
                "aura of life",
                "aura of purity",
                "skill empowerment",
                "wall of light",
                "power word heal",
              ]));
          },
          "This alternative class feature enhancement expands the spells list of the cleric class.",
        ],
      },
    },
    "Cleric Spellcasting Enhancement"
  ),
  AddFeatureChoice(
    ClassList.cleric.features["channel divinity"],
    !0,
    "Harness Divine Power",
    {
      name: "Channel Divinity: Harness Divine Power",
      source: ["UA:CFV", 4],
      description:
        "\n   As a bonus action, I can use my holy symbol and a prayer to regain 1 used level 1 spell slot",
      action: [["bonus action", ""]],
    },
    "Channel Divinity Enhancement"
  ),
  RunFunctionAtEnd(function () {
    for (var e = 0; e < ClassList.cleric.subclasses[1].length; e++) {
      var a = ClassSubList[ClassList.cleric.subclasses[1][e]];
      a &&
        a.features.subclassfeature8 &&
        /divine strike|potent spellcasting/i.test(
          a.features.subclassfeature8.name
        ) &&
        CreateClassFeatureVariant(
          ClassList.cleric.subclasses[1][e],
          "subclassfeature8",
          "Blessed Strikes",
          {
            name: "Blessed Strikes",
            source: ["UA:CFV", 4],
            description: desc([
              "When a creature is damaged by my spell/weapon attack, I can do +1d8 radiant damage",
              "Once I deal this extra damage, I can't do so again until the start of my next turn",
            ]),
            calcChanges: {
              atkAdd: [
                function (e, a) {
                  classes.known.cleric &&
                    7 < classes.known.cleric.level &&
                    !a.isDC &&
                    (e.Description +=
                      (e.Description ? "; " : "") +
                      "Once per round +1d8 radiant damage");
                },
                "Once per turn when a creature takes damage from one of my spell or weapon attacks, I can also deal 1d8 radiant damage to the target.",
              ],
            },
          }
        );
    }
  }),
  AddFeatureChoice(
    ClassList.druid.features.spellcasting,
    !0,
    "Cantrip Versatility",
    {
      name: "Cantrip Versatility",
      source: ["UA:CFV", 4],
      description:
        "\n   Whenever I gain a druid level, I can replace a druid cantrip I know with another",
    },
    "Druid Spellcasting Enhancement"
  ),
  AddFeatureChoice(
    ClassList.druid.features.spellcasting,
    !0,
    "Expanded Spell List",
    {
      name: "Expanded Druid Spell List",
      source: ["UA:CFV", 4],
      description: "",
      calcChanges: {
        spellList: [
          function (e, a, t) {
            "druid" === a &&
              -1 === t.indexOf("bonus") &&
              (e.extraspells = e.extraspells.concat([
                "ceremony-xgte",
                "protection from evil and good",
                "augury",
                "continual flame",
                "enlarge/reduce",
                "aura of vitality",
                "elemental weapon",
                "revivify",
                "thunder step",
                "wall of sand",
                "divination",
                "fire shield",
                "cone of cold",
                "dawn",
                "immolation",
                "flesh to stone",
                "symbol",
                "incendiary cloud",
                "mass polymorph",
              ]));
          },
          "This alternative class feature enhancement expands the spells list of the druid class.",
        ],
      },
    },
    "Druid Spellcasting Enhancement"
  );
var wildCompanionObject = {
  name: "Wild Companion",
  source: ["UA:CFV", 4],
  description: desc([
    "I can expend a use of wild shape to cast Find Familiar without material components",
    "The familiar always has the Fey type and disappears after half my druid level in hours",
  ]),
  additional: levels.map(function (e) {
    return e < 2 ? "" : Math.floor(e / 2) + " hours";
  }),
  spellcastingBonus: {
    name: "Wild Companion",
    spells: ["find familiar"],
    selection: ["find familiar"],
    firstCol: "Sp",
  },
  spellChanges: {
    "find familiar": {
      components: "V,S",
      compMaterial: "",
      description:
        "Gain the services of a fey familiar; can see through its eyes; it can deliver touch spells; see B;",
      duration: "½ druid lvl h",
      changes:
        "By using my Wild Companion class feature, I can expend a use of wild shape to cast Find Familiar without material components. The familiar created this way always has the Fey type and disappears after a number of hours equal to half my druid level.",
    },
  },
};
AddFeatureChoice(
  ClassList.druid.features["subclassfeature2.wild shape"],
  !0,
  "Wild Companion",
  wildCompanionObject,
  "Wild Shape Enhancement"
),
  ClassSubList["druid-circle of the moon"] &&
    AddFeatureChoice(
      ClassSubList["druid-circle of the moon"].features[
        "subclassfeature2.wild shape"
      ],
      !0,
      "Wild Companion",
      wildCompanionObject,
      "Wild Shape Enhancement"
    ),
  AddFeatureChoice(
    ClassList.fighter.features["fighting style"],
    !0,
    "Martial Versatility",
    {
      name: "Martial Versatility",
      source: ["UA:CFV", 12],
      description:
        "\n   Whenever I gain a fighter level, I can swap a fighting style I know for another I'm allowed",
    },
    "Fighting Style Enhancement"
  ),
  AddFightingStyle(["fighter", "ranger", "paladin"], "Blind Fighting", {
    name: "Blind Fighting Style",
    source: ["UA:CFV", 12],
    description: desc([
      "Being unable to see a creature doesn't impose disadvantage on my attack rolls against it",
      "However, this doesn't help me if the creature is hidden from me",
    ]),
  }),
  AddFightingStyle(["fighter", "ranger", "paladin"], "Interception", {
    name: "Interception Fighting Style",
    source: ["UA:CFV", 12],
    description: desc([
      "As a reaction when a creature I can see hits a target within 5 ft of me, I can intercept",
      "I reduce the damage the target takes by 1d10 + my Proficiency Bonus (min 0 damage)",
      "I can only do this while wielding a shield, or a simple or martial weapon",
    ]),
    action: [["reaction", ""]],
  }),
  AddFightingStyle(["fighter", "ranger", "paladin"], "Thrown Weapon Fighting", {
    name: "Thrown Weapon Fighting Style",
    source: ["UA:CFV", 13],
    description: desc([
      "I can draw a weapon with the thrown property as part of the attack I make with it",
      "In addition, my ranged attacks made with thrown weapons deal +1 damage",
    ]),
    calcChanges: {
      atkAdd: [
        function (e, a) {
          a.isMeleeWeapon &&
            /thrown/i.test(e.Description) &&
            a.isMeleeWeapon &&
            (e.Description +=
              (e.Description ? "; " : "") + "+1 damage when thrown");
        },
        "I deal +1 damage when I hit a ranged attack made with a thrown weapon.",
      ],
    },
  }),
  AddFightingStyle(["fighter", "ranger", "paladin"], "Unarmed Fighting", {
    name: "Unarmed Fighting Style",
    source: ["UA:CFV", 13],
    description: desc([
      "My unarmed strikes deal 1d6 damage, or 1d8 damage when I have both hands free",
      "When I successfully start a grapple, I can deal 1d4 bludgeoning damage to the target",
      "Until the grapple ends, I can also deal this damage whenever I hit it with a melee attack",
    ]),
    calcChanges: {
      atkAdd: [
        function (e, a) {
          "unarmed strike" == a.baseWeaponName &&
            ((1 != e.Damage_Die && "1d4" != e.Damage_Die) ||
              (e.Damage_Die = "1d6"),
            (e.Description += (e.Description ? "; " : "") + "Versatile (d8)"));
        },
        "My unarmed strikes deal 1d6 damage instead of 1, which increases to 1d8 if I have both hands free to make an unarmed strike with.",
      ],
    },
  }),
  ClassSubList["fighter-battle master"] &&
    (AddFightingStyle(["fighter"], "Superior Technique", {
      name: "Superior Technique",
      source: ["UA:CFV", 5],
      description:
        " [1 maneuver; d6, 1× per short rest]" +
        desc([
          "I gain one superiority die (d6) that I can expend to fuel a special Maneuver",
          "I can only use one Maneuver per attack; DCs are 8 + Prof B. + Str/Dex mod, my choice",
          'Use the "Choose Feature" button above to add a Maneuver to the third page',
        ]),
      eval: function () {
        AddFeature(
          "Combat Superiority ",
          1,
          "(d6)",
          "short rest",
          "Fighter: Superior Technique Fighting Style",
          "bonus"
        ),
          DontPrint("Class Features Menu");
      },
      removeeval: function () {
        RemoveFeature("Combat Superiority ", 1),
          MakeClassMenu() || Hide("Class Features Menu");
      },
    }),
    AddFeatureChoice(
      ClassSubList["fighter-battle master"].features.subclassfeature3,
      !0,
      "Maneuver Versatility",
      {
        name: "Maneuver Versatility",
        source: ["UA:CFV", 5],
        description:
          "\n   Whenever I finish a long rest, I can replace a Maneuver I know with another",
      },
      "Maneuvers Enhancement"
    ),
    AddFeatureChoice(
      ClassSubList["fighter-battle master"].features[
        "subclassfeature3.maneuvers"
      ],
      !0,
      "Ambush",
      {
        name: "Ambush",
        source: ["UA:CFV", 5],
        description:
          "\n   When I make an initiative roll or a Dex (Stealth) check, I can add a superiority die to it",
      }
    ),
    AddFeatureChoice(
      ClassSubList["fighter-battle master"].features[
        "subclassfeature3.maneuvers"
      ],
      !0,
      "Bait and Switch",
      {
        name: "Bait and Switch",
        source: ["UA:CFV", 5],
        description: desc([
          "On my turn, I can expend a superiority die to swap places with an ally within 5 ft",
          "Doing this costs me 5 ft of movement, but this doesn't provoke opportunity attacks",
          "The ally then adds the superiority die to its AC until the start of my next turn",
        ]),
      }
    ),
    AddFeatureChoice(
      ClassSubList["fighter-battle master"].features[
        "subclassfeature3.maneuvers"
      ],
      !0,
      "Brace",
      {
        name: "Brace",
        source: ["UA:CFV", 5],
        description: desc([
          "As a reaction when a creature I can see moves within 5 of me, I can attack it",
          "I expend a superiority die and make one weapon attack, adding the die to the damage",
        ]),
        action: [["reaction", ""]],
      }
    ),
    AddFeatureChoice(
      ClassSubList["fighter-battle master"].features[
        "subclassfeature3.maneuvers"
      ],
      !0,
      "Restraining Strike",
      {
        name: "Restraining Strike",
        source: ["UA:CFV", 5],
        description: desc([
          "Immediately after hitting with a melee weapon attack, I can use a bonus action to grapple",
          "I add the superiority die to the Str (Athletics) check; I can only do this on my own turn",
          "The target is also restrained while grappled in this way",
        ]),
        action: [["bonus action", " (after melee weapon hit)"]],
      }
    ),
    AddFeatureChoice(
      ClassSubList["fighter-battle master"].features[
        "subclassfeature3.maneuvers"
      ],
      !0,
      "Silver Tongue",
      {
        name: "Silver Tongue",
        source: ["UA:CFV", 5],
        description:
          "\n   When I make a Cha (Deception) or Cha (Persuasion) check, I can add a superiority die to it",
      }
    ),
    AddFeatureChoice(
      ClassSubList["fighter-battle master"].features[
        "subclassfeature3.maneuvers"
      ],
      !0,
      "Snipe",
      {
        name: "Snipe",
        source: ["UA:CFV", 5],
        description: desc([
          "As a bonus action, I can expend a superiority die and make a ranged weapon attack",
          "I can draw a thrown weapon as part of making this attack; I add the die to the damage",
        ]),
        action: [["bonus action", ""]],
      }
    ),
    AddFeatureChoice(
      ClassSubList["fighter-battle master"].features[
        "subclassfeature3.maneuvers"
      ],
      !0,
      "Studious Eye",
      {
        name: "Studious Eye",
        source: ["UA:CFV", 5],
        description:
          "\n   When I make a Wis (Insight) or Int (Investigation) check, I can add a superiority die to it",
      }
    )),
  CreateClassFeatureVariant("monk", "martial arts", "Choose Monk Weapons", {
    name: "Martial Arts Weapons",
    source: ["UA:CFV", 6],
    description: desc([
      "Unarmed strike & 5 + Wis mod simple/martial weapons (not two-handed/heavy/special)",
      "With these monk weapons, I can use Dex instead of Str and the Martial Arts damage die",
      "When taking an Attack action with these, I get one unarmed strike as a bonus action",
    ]),
    eval: function () {
      ClassList.monk.features["martial arts"].extrachoicesNotInMenu = !1;
    },
    removeeval: function () {
      ClassList.monk.features["martial arts"].extrachoicesNotInMenu = !0;
      for (
        var e = GetFeatureChoice("classes", "monk", "martial arts", !0), a = 0;
        a < e.length;
        a++
      )
        ClassFeatureOptions(["monk", "martial arts", e[a], "extra"], "remove");
    },
    calcChanges: {
      atkAdd: [
        function (e, a) {
          var t,
            n = ["unarmed strike"].concat(
              GetFeatureChoice("classes", "monk", "martial arts", !0)
            );
          if (
            classes.known.monk &&
            classes.known.monk.level &&
            (-1 != n.indexOf(a.baseWeaponName) ||
              /monk weapon/i.test(a.WeaponText))
          ) {
            var i =
              (t = classes.known.monk.level) < 5
                ? 4
                : t < 11
                ? 6
                : t < 17
                ? 8
                : 10;
            try {
              var o = eval_ish(e.Damage_Die.replace("d", "*"));
            } catch (e) {
              o = "x";
            }
            (isNaN(o) || o < i) && (e.Damage_Die = "1d" + i),
              (1 == e.Mod ||
                2 == e.Mod ||
                What(AbilityScores.abbreviations[e.Mod - 1] + " Mod") <
                  What(AbilityScores.abbreviations[a.StrDex - 1] + " Mod")) &&
                (e.Mod = a.StrDex);
          }
        },
        "I can use either Strength or Dexterity and my Martial Arts damage die in place of the normal damage die for any 'Monk Weapons', which include unarmed strike and 5 + my Wisdom modifier of simple or martial weapons of my choice that I'm proficient with and that don't have the two-handed, heavy, or special property.\n   I can select these weapon using the \"Choose Feature\" button on the 2nd page, or have them count as such by including the words \"Monk Weapon\" in the name of the weapon.",
      ],
    },
  });
var origMartialArts = ClassList.monk.features["martial arts"];
(origMartialArts.extrachoices = []),
  (origMartialArts.extraname = "Monk Weapon"),
  (origMartialArts.extraTimes = ["5 + Wisdom Modifier"]),
  (origMartialArts.extrachoicesNotInMenu =
    "choose monk weapons" !=
    GetFeatureChoice("classes", "monk", "martial arts")),
  RunFunctionAtEnd(function () {
    for (var e in WeaponsList) {
      var a = WeaponsList[e];
      a.isMagicWeapon ||
        !/simple|martial/i.test(a.type) ||
        /heavy|special|((^|[^+-]\b)2|\btwo).?hand(ed)?s?/i.test(
          a.description
        ) ||
        /spell|cantrip/i.test(a.list) ||
        (origMartialArts.extrachoices.push(a.name),
        (origMartialArts[a.name.toLowerCase()] = {
          name: a.name,
          description: "",
          source: a.source,
          weaponsAdd: [a.name],
          prereqeval:
            'testSource("' +
            e +
            '", WeaponsList["' +
            e +
            '"], "weapExcl") ? "skip" : isProficientWithWeapon("' +
            e +
            '", WeaponsList["' +
            e +
            '"]);',
        }));
    }
  }),
  origMartialArts["[original] martial arts"] &&
    ["additional", "action", "eval", "removeeval"].forEach(function (e) {
      (origMartialArts[e] = origMartialArts["[original] martial arts"][e]),
        delete origMartialArts["[original] martial arts"][e];
    }),
  AddFeatureChoice(
    ClassList.monk.features.ki,
    !0,
    "Ki-Fueled Strike",
    {
      name: "Ki-Fueled Strike",
      source: ["UA:CFV", 6],
      description:
        "\n   If I spend a ki point during my action, I can make an unarmed strike as a bonus action",
      action: [["bonus action", ""]],
    },
    "Ki Enhancement"
  ),
  AddFeatureChoice(
    ClassList.monk.features.ki,
    !0,
    "Distant Eye (1 ki point)",
    {
      name: "Distant Eye",
      source: ["UA:CFV", 6],
      description:
        " [1 ki point]\n   My ranged weapon attacks during this turn ignore the disadvantage from long range",
    },
    "Ki Enhancement"
  ),
  AddFeatureChoice(
    ClassList.monk.features.ki,
    !0,
    "Quickened Healing (2 ki points)",
    {
      name: "Quickened Healing",
      source: ["UA:CFV", 6],
      description:
        " [2 ki points]\n   As an action, I can regain a number of hit points equal to the roll of my martial arts die",
      action: [["action", ""]],
    },
    "Ki Enhancement"
  ),
  AddFightingStyle(["paladin"], "Blessed Warrior", {
    name: "Blessed Warrior Fighting Style",
    source: ["UA:CFV", 6],
    description: desc([
      "I learn two cleric cantrips that count as paladin spells for me and use Cha for spellcasting",
      "Whenever I gain a paladin level, I can swap one of these for another cleric cantrip",
    ]),
    spellcastingBonus: {
      name: "Blessed Warrior",
      class: "cleric",
      level: [0, 0],
      times: 2,
    },
  }),
  AddFeatureChoice(
    ClassList.paladin.features["fighting style"],
    !0,
    "Martial Versatility",
    {
      name: "Martial Versatility",
      source: ["UA:CFV", 12],
      description:
        "\n   Whenever I gain a paladin level, I can swap a fighting style I know for another I'm allowed",
    },
    "Fighting Style Enhancement"
  ),
  AddFeatureChoice(
    ClassList.paladin.features.spellcasting,
    !0,
    "Expanded Spell List",
    {
      name: "Expanded Paladin Spell List",
      source: ["UA:CFV", 6],
      description: "",
      calcChanges: {
        spellList: [
          function (e, a, t) {
            "paladin" === a &&
              -1 === t.indexOf("bonus") &&
              (e.extraspells = e.extraspells.concat([
                "gentle repose",
                "prayer of healing",
                "warding bond",
                "life transference",
                "spirit guardians",
                "dawn",
                "flame strike",
              ]));
          },
          "This alternative class feature enhancement expands the spells list of the paladin class.",
        ],
      },
    },
    "Paladin Spellcasting Enhancement"
  ),
  AddFeatureChoice(
    ClassList.paladin.features["subclassfeature3.0-channel divinity"],
    !0,
    "Harness Divine Power",
    {
      name: "Channel Divinity: Harness Divine Power",
      source: ["UA:CFV", 6],
      description:
        "\n   As a bonus action, I can use my holy symbol and a prayer to regain 1 used level 1 spell slot",
      action: [["bonus action", ""]],
    },
    "Channel Divinity Enhancement"
  );
var origNatExplNm =
  "[original] " +
  (origNatExpl = ClassList.ranger.features["natural explorer"]).name;
(origNatExpl.choices = [origNatExplNm]),
  (origNatExpl.defaultChoice = origNatExplNm.toLowerCase()),
  (origNatExpl[origNatExplNm.toLowerCase()] = {
    name: origNatExpl.name,
    source: origNatExpl.source,
    description: origNatExpl.description,
    additional: origNatExpl.additional,
    extraname: origNatExpl.extraname,
    extrachoices: origNatExpl.extrachoices,
  }),
  delete origNatExpl.additional,
  (origNatExpl.description =
    "\n   Select " +
    origNatExpl.name +
    ' or a variant using the "Choose Feature" button above'),
  (origNatExpl.name = origNatExpl.name + " or a Variant"),
  (origNatExpl.resetNatExplExtrachoices = function () {
    for (
      var e = GetFeatureChoice("classes", "ranger", "natural explorer", !0),
        a = ClassList.ranger.features["natural explorer"].extraname,
        t = 0;
      t < e.length;
      t++
    )
      "travel benefits" == e[t] &&
        (ClassList.ranger.features["natural explorer"].extraname = "Ranger 1"),
        ClassFeatureOptions(
          ["ranger", "natural explorer", e[t], "extra"],
          "remove"
        ),
        "travel benefits" == e[t] &&
          (ClassList.ranger.features["natural explorer"].extraname = a);
  }),
  AddFeatureChoice(origNatExpl, !1, "Deft Explorer", {
    name: "Deft Explorer",
    source: ["UA:CFV", 7],
    description:
      '\n   Use the "Choose Feature" button above to add a deft explorer benefit to the third page',
    eval: function () {
      var e = ClassList.ranger.features["natural explorer"];
      e.resetNatExplExtrachoices(),
        (e.extraname = e["deft explorer"].extraname),
        (e.extrachoices = e["deft explorer"].extrachoices),
        (e.extraTimes = e["deft explorer"].extraTimes);
    },
    removeeval: function (e, a) {
      var t = ClassList.ranger.features["natural explorer"],
        n = a[1];
      t.resetNatExplExtrachoices(),
        -1 !== n.indexOf("[original]") &&
          ((t.extraname = "Ranger 1"),
          ClassFeatureOptions([
            "ranger",
            "natural explorer",
            "travel benefits",
            "extra",
          ])),
        n &&
          t[n] &&
          ((t.extraname = t[n].extraname ? t[n].extraname : ""),
          (t.extrachoices = t[n].extrachoices ? t[n].extrachoices : ""),
          (t.extraTimes = t[n].extraTimes ? t[n].extraTimes : ""));
    },
    additional: levels.map(function (e) {
      return e < 6 ? "1 benefit" : (e < 10 ? 2 : 3) + " benefits";
    }),
    extraTimes: levels.map(function (e) {
      return e < 6 ? 1 : e < 10 ? 2 : 3;
    }),
    extraname: "Deft Explorer Benefit",
    extrachoices: ["Canny", "Roving", "Tireless"],
  }),
  (origNatExpl.canny = {
    name: "Canny",
    source: ["UA:CFV", 7],
    description: desc([
      "I learn two language of my choice, and proficiency and expertise with one skill of my choice",
      "The skill I have to choose from: Animal Handling, Athletics, History, Insight, Investigation,",
      "Medicine, Nature, Perception, Stealth, or Survival",
    ]),
    languageProfs: [2],
    skillstxt:
      "Proficiency and expertise with one from Animal Handling, Athletics, History, Insight, Investigation, Medicine, Nature, Perception, Stealth, or Survival",
  }),
  (origNatExpl.roving = {
    name: "Roving",
    source: ["UA:CFV", 7],
    description:
      "\n   I gain +5 ft walking speed and climbing and swimming speed equal to my walking speed",
    speed: {
      walk: { spd: "+5", enc: "+5" },
      climb: { spd: "walk", enc: "walk" },
      swim: { spd: "walk", enc: "walk" },
    },
  }),
  (origNatExpl.tireless = {
    name: "Tireless",
    source: ["UA:CFV", 7],
    description: desc([
      "Whenever I finish a short or long rest, I reduce my exhaustion level, if any, by 1",
      "As an action a number of times per day, I can give myself temp HP of 1d10 + Wis mod",
    ]),
    action: [["action", ""]],
    usages: "Wisdom modifier per ",
    usagescalc: "event.value = Math.max(1, What('Wis Mod'));",
    recovery: "long rest",
  }),
  (origNatExplCurSel = GetFeatureChoice(
    "classes",
    "ranger",
    "natural explorer",
    !1
  )) &&
    ((origNatExpl.extraname = origNatExpl[origNatExplCurSel].extraname
      ? origNatExpl[origNatExplCurSel].extraname
      : ""),
    (origNatExpl.extrachoices = origNatExpl[origNatExplCurSel].extrachoices
      ? origNatExpl[origNatExplCurSel].extrachoices
      : ""),
    (origNatExpl.extraTimes = origNatExpl[origNatExplCurSel].extraTimes
      ? origNatExpl[origNatExplCurSel].extraTimes
      : ""));
var origFavoredEnemyNm =
  "[original] " +
  (origFavoredEnemy = ClassList.ranger.features["favored enemy"]).name;
(origFavoredEnemy.choices = [origFavoredEnemyNm]),
  (origFavoredEnemy.defaultChoice = origFavoredEnemyNm.toLowerCase()),
  (origFavoredEnemy[origFavoredEnemyNm.toLowerCase()] = {
    name: origFavoredEnemy.name,
    source: origFavoredEnemy.source,
    description: origFavoredEnemy.description,
    additional: origFavoredEnemy.additional,
  }),
  delete origFavoredEnemy.additional,
  (origFavoredEnemy.description =
    "\n   Select " +
    origFavoredEnemy.name +
    ' or a variant using the "Choose Feature" button above'),
  (origFavoredEnemy.name = origFavoredEnemy.name + " or a Variant");
var curFavEnemyChoice = GetFeatureChoice("classes", "ranger", "favored enemy");
if (
  ((origFavoredEnemy.extrachoicesNotInMenu =
    !!curFavEnemyChoice &&
    curFavEnemyChoice !=
      ClassList.ranger.features["favored enemy"].choices[0].toLowerCase()),
  AddFeatureChoice(origFavoredEnemy, !1, "Favored Foe", {
    name: "Favored Foe",
    source: ["UA:CFV", 7],
    description: desc([
      "I know Hunter's Mark and it doesn't count against the number of spells I can know",
      "I can cast it a number of times without using a spell slot or requiring concentration",
      "I can also use a spell slot to cast it as normal, but then it does require concentration",
    ]),
    eval: function () {
      ClassList.ranger.features["favored enemy"].extrachoicesNotInMenu = !0;
      for (
        var e = GetFeatureChoice("classes", "ranger', 'favored enemy", !0),
          a = 0;
        a < e.length;
        a++
      )
        ClassFeatureOptions(
          ["ranger", "favored enemy", e[a], "extra"],
          "remove"
        );
    },
    removeeval: function () {
      ClassList.ranger.features["favored enemy"].extrachoicesNotInMenu = !1;
    },
    spellcastingBonus: {
      name: "Favored Foe",
      spells: ["hunter's mark"],
      selection: ["hunter's mark"],
      firstCol: "Sp",
    },
    usages: "Wisdom modifier per ",
    usagescalc: "event.value = Math.max(1, What('Wis Mod'));",
    recovery: "long rest",
    calcChanges: {
      spellList: [
        function (e, a, t) {
          "ranger" == a &&
            -1 == t.indexOf("bonus") &&
            (e.notspells || (e.notspells = []),
            (e.notspells = e.notspells.concat(["hunter's mark"])));
        },
      ],
    },
  }),
  AddFightingStyle(["ranger"], "Druidic Warrior", {
    name: "Druidic Warrior Fighting Style",
    source: ["UA:CFV", 7],
    description: desc([
      "I learn two druid cantrips that count as ranger spells for me and use Wis for spellcasting",
      "Whenever I gain a ranger level, I can swap one of these for another druid cantrip",
    ]),
    spellcastingBonus: {
      name: "Druidic Warrior",
      class: "druid",
      level: [0, 0],
      times: 2,
    },
  }),
  AddFeatureChoice(
    ClassList.ranger.features["fighting style"],
    !0,
    "Martial Versatility",
    {
      name: "Martial Versatility",
      source: ["UA:CFV", 12],
      description:
        "\n   Whenever I gain a ranger level, I can swap a fighting style I know for another I'm allowed",
    },
    "Fighting Style Enhancement"
  ),
  AddFeatureChoice(
    ClassList.ranger.features.spellcasting,
    !0,
    "Expanded Spell List",
    {
      name: "Expanded Ranger Spell List",
      source: ["UA:CFV", 7],
      description: "",
      calcChanges: {
        spellList: [
          function (e, a, t) {
            "ranger" === a &&
              -1 === t.indexOf("bonus") &&
              (e.extraspells = e.extraspells.concat([
                "aid",
                "entangle",
                "searing smite",
                "gust of wind",
                "magic weapon",
                "enhance ability",
                "warding bond",
                "blinding smite",
                "meld into stone",
                "revivify",
                "tongues",
                "death ward",
                "dominate beast",
                "awaken",
                "greater restoration",
              ]));
          },
          "This alternative class feature enhancement expands the spells list of the ranger class.",
        ],
      },
    },
    "Ranger Spellcasting Enhancement"
  ),
  AddFeatureChoice(
    ClassList.ranger.features.spellcasting,
    !0,
    "Spell Versatility",
    {
      name: "Spell Versatility",
      source: ["UA:CFV", 8],
      description:
        "\n   When I finish a long rest, I can replace a ranger spell I know with another of the same level",
    },
    "Ranger Spellcasting Enhancement"
  ),
  AddFeatureChoice(
    ClassList.ranger.features.spellcasting,
    !0,
    "Spellcasting Focus",
    {
      name: "Spellcasting Focus",
      source: ["UA:CFV", 8],
      description:
        "\n   I can use a druidic focus as a spellcasting focus for my ranger spells",
    },
    "Ranger Spellcasting Enhancement"
  ),
  CreateClassFeatureVariant(
    "ranger",
    "primeval awareness",
    "Primal Awareness (bonus spells)",
    {
      name: "Primal Awareness",
      source: ["UA:CFV", 8],
      description: desc([
        "I get bonus spells known, which do not count against the number of spells I can know",
        "In addition, I can cast each once per long rest without expending a spell slot",
      ]),
      calcChanges: {
        spellAdd: [
          function (e, a, t) {
            if (
              "ranger" == t &&
              -1 !=
                [
                  "detect magic",
                  "speak with animals",
                  "beast sense",
                  "locate animals or plants",
                  "speak with plants",
                  "locate creature",
                  "commune with nature",
                ].indexOf(e)
            )
              return (a.firstCol = "oncelr"), !0;
          },
          "I can cast these spells each once per long rest without expending a spell slot, but also as normal by expending a spell slot.",
        ],
        spellList: [
          function (e, a, t) {
            "ranger" == a &&
              (e.notspells || (e.notspells = []),
              (e.notspells = e.notspells.concat([
                "detect magic",
                "speak with animals",
                "beast sense",
                "locate animals or plants",
                "speak with plants",
                "locate creature",
                "commune with nature",
              ])));
          },
          "I know the following spells, without them counting towards the maximum number of spells I can know: Detect Magic, Speak with Animals, Beast Sense, Locate Animals or Plants, Speak with Plants, Locate Creature, and Commune with Nature.",
        ],
      },
      changeeval: function () {
        if (CurrentSpells.ranger) {
          var e = [
            "detect magic",
            "speak with animals",
            "beast sense",
            "locate animals or plants",
            "speak with plants",
            "locate creature",
            "commune with nature",
          ];
          if (
            (CurrentSpells.ranger.extra || (CurrentSpells.ranger.extra = []),
            -1 == CurrentSpells.ranger.extra.toString().indexOf(e.toString()))
          ) {
            for (
              var a = [], t = 0;
              t < CurrentSpells.ranger.extra.length;
              t++
            ) {
              var n = CurrentSpells.ranger.extra[t];
              n && "AddToKnown" !== n && -1 == e.indexOf(n) && a.push(n);
            }
            (CurrentSpells.ranger.extra = a.concat(e)),
              (CurrentSpells.ranger.extra[100] = "AddToKnown");
          }
        }
      },
      removeeval: function () {
        if (CurrentSpells.ranger && CurrentSpells.ranger.extra) {
          var e = [
            "detect magic",
            "speak with animals",
            "beast sense",
            "locate animals or plants",
            "speak with plants",
            "locate creature",
            "commune with nature",
          ];
          if (
            -1 !== CurrentSpells.ranger.extra.toString().indexOf(e.toString())
          ) {
            var a = CurrentSpells.ranger.extra
              .join("##")
              .replace(e.join("##"), "")
              .replace("AddToKnown", "")
              .replace(/#+$/, "");
            (CurrentSpells.ranger.extra = a.split("##")),
              (CurrentSpells.ranger.extra[100] = "AddToKnown");
          }
        }
      },
    }
  ),
  CreateClassFeatureVariant("ranger", "hide in plain sight", "Fade Away", {
    name: "Fade Away",
    source: ["UA:CFV", 8],
    description: desc([
      "As a bonus action, I can become invisible along with any equipment I'm wearing/carrying",
      "This invisibility lasts until the start of my next turn",
    ]),
    action: [["bonus action", ""]],
    usages: 1,
    recovery: "short rest",
  }),
  ClassSubList["ranger-beast master"] &&
    AddFeatureChoice(
      ClassSubList["ranger-beast master"].features.subclassfeature3,
      !0,
      "Beast of the Air/Earth",
      {
        name: "Beast of the Air/Earth",
        source: ["UA:CFV", 8],
        description: desc([
          "My ranger's companion can be a primal beast whose lineage stretches back to the beginning",
          "This beast of the air or earth takes the form of a regular animal, but has different abilities",
          "Its hit points total is equal to its Con mod + my Wis mod + 5 times my ranger level",
          "As a bonus action, I can command it to make one attack or take the Hide action",
          "If it dies, I can revive it within 1 hour as an action where I expend a spell slot and touch it",
          "It then returns to life with all its hit points after 1 minute",
        ]),
        action: [
          ["bonus action", "Command Beast of the Air/Earth"],
          ["action", "Revive Beast of the Air/Earth"],
        ],
      },
      "Ranger Companion Enhancement"
    ),
  (CreatureList["beast of the air"] = {
    name: "Beast of the Air",
    source: ["UA:CFV", 8],
    size: 4,
    type: "Beast",
    subtype: "",
    alignment: "Neutral",
    ac: 13,
    hp: 6,
    hd: [1, 6],
    speed: "10 ft, fly 60 ft",
    scores: [6, 16, 13, 8, 14, 11],
    saves: ["", 5, 3, "", 4, ""],
    skills: { perception: 4, stealth: 5 },
    senses: "Darkvision 60 ft",
    passivePerception: 14,
    languages: "understands the languages of its master (me)",
    challengeRating: "1/4",
    proficiencyBonus: 2,
    attacksAction: 1,
    attacks: [
      {
        name: "Shred",
        ability: 2,
        damage: [1, 6, "slashing"],
        range: "Melee (5 ft)",
      },
    ],
    features: [
      {
        name: "Ready Companion",
        description:
          "As a bonus action, I can command the beast to make its shred attack or to Hide.",
      },
      {
        name: "Primal Rebirth",
        description:
          "If the beast has died within the last hour, I can use my action to touch it and expend a spell slot of 1st level or higher. The beast returns to life after 1 minute with all its hit points restored.",
      },
    ],
    traits: [
      {
        name: "Flyby",
        description:
          "The beast doesn't provoke opportunity attacks when it flies out of an enemy's reach.",
      },
    ],
    eval: function (e) {
      tDoc
        .getField(e + "Comp.Use.HP.Max")
        .setAction(
          "Calculate",
          "event.value = (classes.known.ranger ? classes.known.ranger.level : classes.known.rangerua ? classes.known.rangerua.level : 1) * 5 + What('Wis Mod') + What(event.target.name.replace('HP.Max', 'Ability.Con.Mod'));"
        ),
        tDoc
          .getField(e + "Comp.Use.HD.Level")
          .setAction(
            "Calculate",
            "event.value = classes.known.ranger ? classes.known.ranger.level : classes.known.rangerua ? classes.known.rangerua.level : 1;"
          );
    },
    removeeval: function (e) {
      e &&
        (tDoc.getField(e + "Comp.Use.HP.Max").setAction("Calculate", ""),
        tDoc.getField(e + "Comp.Use.HD.Level").setAction("Calculate", ""));
    },
  }),
  (CreatureList["beast of the earth"] = {
    name: "Beast of the Earth",
    source: ["UA:CFV", 9],
    size: 3,
    type: "Beast",
    subtype: "",
    alignment: "Neutral",
    ac: 12,
    hp: 7,
    hd: [1, 8],
    speed: "40 ft, climb or swim 40 ft",
    scores: [14, 14, 15, 8, 14, 11],
    saves: ["", 4, 4, "", 4, ""],
    skills: { perception: 4, stealth: 4 },
    senses: "Darkvision 60 ft",
    passivePerception: 14,
    languages: "understands the languages of its master (me)",
    challengeRating: "1/4",
    proficiencyBonus: 2,
    attacksAction: 1,
    attacks: [
      {
        name: "Maul",
        ability: 1,
        damage: [1, 6, "slashing"],
        range: "Melee (5 ft)",
        description:
          "If used after moving 20 ft straight in the same round, see Charge trait",
      },
    ],
    features: [
      {
        name: "Movement Mode",
        description:
          "When I bond with the beast, I choose wether it has a climb speed or a swim speed.",
      },
      {
        name: "Ready Companion",
        description:
          "As a bonus action, I can command the beast to make its shred attack or to Hide.",
      },
      {
        name: "Primal Rebirth",
        description:
          "If the beast has died within the last hour, I can use my action to touch it and expend a spell slot of 1st level or higher. The beast returns to life after 1 minute with all its hit points restored.",
      },
    ],
    traits: [
      {
        name: "Charge",
        description:
          "If the beast moves at least 20 ft straight toward a target and then hits it with a maul attack on the same turn, the target takes an extra 1d6 slashing damage. If the target is a creature, it must succeed on a Strength saving throw against my spell save DC or be knocked prone.",
      },
    ],
    eval: function (e) {
      tDoc
        .getField(e + "Comp.Use.HP.Max")
        .setAction(
          "Calculate",
          "event.value = (classes.known.ranger ? classes.known.ranger.level : classes.known.rangerua ? classes.known.rangerua.level : 1) * 5 + What('Wis Mod') + What(event.target.name.replace('HP.Max', 'Ability.Con.Mod'));"
        ),
        tDoc
          .getField(e + "Comp.Use.HD.Level")
          .setAction(
            "Calculate",
            "event.value = classes.known.ranger ? classes.known.ranger.level : classes.known.rangerua ? classes.known.rangerua.level : 1;"
          );
    },
    removeeval: function (e) {
      e &&
        (tDoc.getField(e + "Comp.Use.HP.Max").setAction("Calculate", ""),
        tDoc.getField(e + "Comp.Use.HD.Level").setAction("Calculate", ""));
    },
  }),
  ClassList.rangerua)
) {
  var origNatExpl, origNatExplCurSel;
  origNatExplNm =
    "[original] " +
    (origNatExpl = ClassList.rangerua.features["natural explorer"]).name;
  (origNatExpl.choices = [origNatExplNm]),
    (origNatExpl.defaultChoice = origNatExplNm.toLowerCase()),
    (origNatExpl[origNatExplNm.toLowerCase()] = {
      name: origNatExpl.name,
      source: origNatExpl.source,
      description: origNatExpl.description,
      extraname: origNatExpl.extraname,
    }),
    (origNatExpl.description =
      "\n   Select " +
      origNatExpl.name +
      ' or a variant using the "Choose Feature" button above'),
    (origNatExpl.name = origNatExpl.name + " or a Variant"),
    (origNatExpl.resetNatExplExtrachoices = function () {
      for (
        var e = GetFeatureChoice("classes", "rangerua", "natural explorer", !0),
          a = 0;
        a < e.length;
        a++
      )
        ClassFeatureOptions(
          ["rangerua", "natural explorer", e[a], "extra"],
          "remove"
        );
    }),
    AddFeatureChoice(origNatExpl, !1, "Deft Explorer", {
      name: "Deft Explorer",
      source: ["UA:CFV", 7],
      description:
        '\n   Use the "Choose Feature" button above to add a deft explorer benefit to the third page',
      eval: function () {
        var e = ClassList.rangerua.features["natural explorer"];
        e.resetNatExplExtrachoices(),
          (e.extraname = e["deft explorer"].extraname),
          (e.extrachoices = e["deft explorer"].extrachoices),
          (e.extraTimes = e["deft explorer"].extraTimes);
      },
      removeeval: function (e, a) {
        var t = ClassList.rangerua.features["natural explorer"],
          n = a[1];
        t.resetNatExplExtrachoices(),
          n &&
            t[n] &&
            ((t.extraname = t[n].extraname ? t[n].extraname : ""),
            (t.extrachoices = t[n].extrachoices ? t[n].extrachoices : ""),
            (t.extraTimes = t[n].extraTimes ? t[n].extraTimes : ""),
            -1 !== n.indexOf("[original]") &&
              ClassFeatureOptions([
                "rangerua",
                "natural explorer",
                "travel benefits",
                "extra",
              ]));
      },
      additional: levels.map(function (e) {
        return e < 6 ? "1 benefit" : (e < 10 ? 2 : 3) + " benefits";
      }),
      extraTimes: levels.map(function (e) {
        return e < 6 ? 1 : e < 10 ? 2 : 3;
      }),
      extraname: "Deft Explorer Benefit",
      extrachoices: ["Canny", "Roving", "Tireless"],
    }),
    (origNatExpl.canny = {
      name: "Canny",
      source: ["UA:CFV", 7],
      description: desc([
        "I learn two language of my choice, and proficiency and expertise with one skill of my choice",
        "The skill I have to choose from: Animal Handling, Athletics, History, Insight, Investigation,",
        "Medicine, Nature, Perception, Stealth, or Survival",
      ]),
      languageProfs: [2],
      skillstxt:
        "Proficiency and expertise with one from Animal Handling, Athletics, History, Insight, Investigation, Medicine, Nature, Perception, Stealth, or Survival",
    }),
    (origNatExpl.roving = {
      name: "Roving",
      source: ["UA:CFV", 7],
      description:
        "\n   I gain +5 ft walking speed and climbing and swimming speed equal to my walking speed",
      speed: {
        walk: { spd: "+5", enc: "+5" },
        climb: { spd: "walk", enc: "walk" },
        swim: { spd: "walk", enc: "walk" },
      },
    }),
    (origNatExpl.tireless = {
      name: "Tireless",
      source: ["UA:CFV", 7],
      description: desc([
        "Whenever I finish a short or long rest, I reduce my exhaustion level, if any, by 1",
        "As an action a number of times per day, I can give myself temp HP of 1d10 + Wis mod",
      ]),
      action: [["action", ""]],
      usages: "Wisdom modifier per ",
      usagescalc: "event.value = Math.max(1, What('Wis Mod'));",
      recovery: "long rest",
    }),
    (origNatExplCurSel = GetFeatureChoice(
      "classes",
      "rangerua",
      "natural explorer",
      !1
    )) &&
      ((origNatExpl.extraname = origNatExpl[origNatExplCurSel].extraname
        ? origNatExpl[origNatExplCurSel].extraname
        : ""),
      (origNatExpl.extrachoices = origNatExpl[origNatExplCurSel].extrachoices
        ? origNatExpl[origNatExplCurSel].extrachoices
        : ""),
      (origNatExpl.extraTimes = origNatExpl[origNatExplCurSel].extraTimes
        ? origNatExpl[origNatExplCurSel].extraTimes
        : ""));
  var origFavoredEnemy = ClassList.rangerua.features["favored enemy"],
    moveOrigFavoredEnemyAttributes = (function () {
      for (
        var e = ["additional", "languageProfs", "calcChanges"], a = 0;
        a < e.length;
        a++
      ) {
        for (var t = 0; t < origFavoredEnemy.choices.length; t++) {
          origFavoredEnemy[origFavoredEnemy.choices[t].toLowerCase()][e[a]] =
            origFavoredEnemy[e[a]];
        }
        delete origFavoredEnemy[e[a]];
      }
    })();
  AddFeatureChoice(origFavoredEnemy, !1, "[alternative feature] Favored Foe", {
    name: "Favored Foe",
    source: ["UA:CFV", 7],
    description: desc([
      "I know Hunter's Mark and it doesn't count against the number of spells I can know",
      "I can cast it a number of times without using a spell slot or requiring concentration",
      "I can also use a spell slot to cast it as normal, but then it does require concentration",
    ]),
    spellcastingBonus: {
      name: "Favored Foe",
      spells: ["hunter's mark"],
      selection: ["hunter's mark"],
      firstCol: "Sp",
    },
    usages: "Wisdom modifier per ",
    usagescalc: "event.value = Math.max(1, What('Wis Mod'));",
    recovery: "long rest",
    calcChanges: {
      spellList: [
        function (e, a, t) {
          "uaranger" == a &&
            -1 == t.indexOf("bonus") &&
            (e.notspells || (e.notspells = []),
            (e.notspells = e.notspells.concat(["hunter's mark"])));
        },
      ],
    },
  }),
    AddFeatureChoice(
      ClassList.rangerua.features["fighting style"],
      !0,
      "Martial Versatility",
      {
        name: "Martial Versatility",
        source: ["UA:CFV", 12],
        description:
          "\n   Whenever I gain a ranger level, I can swap a fighting style I know for another I'm allowed",
      },
      "Fighting Style Enhancement"
    ),
    AddFeatureChoice(
      ClassList.rangerua.features.spellcasting,
      !0,
      "Expanded Spell List",
      {
        name: "Expanded Ranger Spell List",
        source: ["UA:CFV", 7],
        description: "",
        calcChanges: {
          spellList: [
            function (e, a, t) {
              "rangerua" === a &&
                -1 === t.indexOf("bonus") &&
                (e.extraspells = e.extraspells.concat([
                  "aid",
                  "entangle",
                  "searing smite",
                  "gust of wind",
                  "magic weapon",
                  "enhance ability",
                  "warding bond",
                  "blinding smite",
                  "meld into stone",
                  "revivify",
                  "tongues",
                  "death ward",
                  "dominate beast",
                  "awaken",
                  "greater restoration",
                ]));
            },
            "This alternative class feature enhancement expands the spells list of the ranger class.",
          ],
        },
      },
      "Ranger Spellcasting Enhancement"
    ),
    AddFeatureChoice(
      ClassList.rangerua.features.spellcasting,
      !0,
      "Spell Versatility",
      {
        name: "Spell Versatility",
        source: ["UA:CFV", 8],
        description:
          "\n   When I finish a long rest, I can replace a ranger spell I know with another of the same level",
      },
      "Ranger Spellcasting Enhancement"
    ),
    AddFeatureChoice(
      ClassList.rangerua.features.spellcasting,
      !0,
      "Spellcasting Focus",
      {
        name: "Spellcasting Focus",
        source: ["UA:CFV", 8],
        description:
          "\n   I can use a druidic focus as a spellcasting focus for my ranger spells",
      },
      "Ranger Spellcasting Enhancement"
    ),
    CreateClassFeatureVariant(
      "rangerua",
      "primeval awareness",
      "Primal Awareness (bonus spells)",
      {
        name: "Primal Awareness",
        source: ["UA:CFV", 8],
        description: desc([
          "I get bonus spells known, which do not count against the number of spells I can know",
          "In addition, I can cast each once per long rest without expending a spell slot",
        ]),
        calcChanges: {
          spellAdd: [
            function (e, a, t) {
              if (
                "rangerua" == t &&
                -1 !=
                  [
                    "detect magic",
                    "speak with animals",
                    "beast sense",
                    "locate animals or plants",
                    "speak with plants",
                    "locate creature",
                    "commune with nature",
                  ].indexOf(e)
              )
                return (a.firstCol = "oncelr"), !0;
            },
            "I can cast these spells each once per long rest without expending a spell slot, but also as normal by expending a spell slot.",
          ],
          spellList: [
            function (e, a, t) {
              "rangerua" == a &&
                (e.notspells || (e.notspells = []),
                (e.notspells = e.notspells.concat([
                  "detect magic",
                  "speak with animals",
                  "beast sense",
                  "locate animals or plants",
                  "speak with plants",
                  "locate creature",
                  "commune with nature",
                ])));
            },
            "I know the following spells, without them counting towards the maximum number of spells I can know: Detect Magic, Speak with Animals, Beast Sense, Locate Animals or Plants, Speak with Plants, Locate Creature, and Commune with Nature.",
          ],
        },
        changeeval: function () {
          if (CurrentSpells.rangerua) {
            var e = [
              "detect magic",
              "speak with animals",
              "beast sense",
              "locate animals or plants",
              "speak with plants",
              "locate creature",
              "commune with nature",
            ];
            if (
              (CurrentSpells.rangerua.extra ||
                (CurrentSpells.rangerua.extra = []),
              -1 ==
                CurrentSpells.rangerua.extra.toString().indexOf(e.toString()))
            ) {
              for (
                var a = [], t = 0;
                t < CurrentSpells.rangerua.extra.length;
                t++
              ) {
                var n = CurrentSpells.rangerua.extra[t];
                n && "AddToKnown" !== n && -1 == e.indexOf(n) && a.push(n);
              }
              (CurrentSpells.rangerua.extra = a.concat(e)),
                (CurrentSpells.rangerua.extra[100] = "AddToKnown");
            }
          }
        },
        removeeval: function () {
          if (CurrentSpells.rangerua && CurrentSpells.rangerua.extra) {
            var e = [
              "detect magic",
              "speak with animals",
              "beast sense",
              "locate animals or plants",
              "speak with plants",
              "locate creature",
              "commune with nature",
            ];
            if (
              -1 !==
              CurrentSpells.rangerua.extra.toString().indexOf(e.toString())
            ) {
              var a = CurrentSpells.rangerua.extra
                .join("##")
                .replace(e.join("##"), "")
                .replace("AddToKnown", "")
                .replace(/#+$/, "");
              (CurrentSpells.rangerua.extra = a.split("##")),
                (CurrentSpells.rangerua.extra[100] = "AddToKnown");
            }
          }
        },
      }
    ),
    CreateClassFeatureVariant("rangerua", "hide in plain sight", "Fade Away", {
      name: "Fade Away",
      source: ["UA:CFV", 8],
      description: desc([
        "As a bonus action, I can become invisible along with any equipment I'm wearing/carrying",
        "This invisibility lasts until the start of my next turn",
      ]),
      action: [["bonus action", ""]],
      usages: 1,
      recovery: "short rest",
    });
}
AddFeatureChoice(
  ClassList.rogue.features["cunning action"],
  !0,
  "Aim",
  {
    name: "Cunning Action: Aim",
    source: ["UA:CFV", 9],
    description: desc([
      "I can also use my cunning action bonus action to carefully aim my next attack",
      "If I don't move in my turn, I give myself adv. on my next attack in the current turn",
      "After I use cunning action to aim, my speed is 0 until the end of the current turn",
    ]),
  },
  "Cunning Action Enhancement"
),
  AddFeatureChoice(
    ClassList.sorcerer.features.spellcasting,
    !0,
    "Expanded Spell List",
    {
      name: "Expanded Sorcerer Spell List",
      source: ["UA:CFV", 9],
      description: "",
      calcChanges: {
        spellList: [
          function (e, a, t) {
            "sorcerer" === a &&
              -1 === t.indexOf("bonus") &&
              (e.extraspells = e.extraspells.concat([
                "primal savagery-xgte",
                "grease",
                "protection from evil and good",
                "flame blade",
                "flaming sphere",
                "vampiric touch",
                "fire shield",
                "flesh to stone",
                "demiplane",
                "foresight",
              ]));
          },
          "This alternative class feature enhancement expands the spells list of the sorcerer class.",
        ],
      },
    },
    "Sorcerer Spellcasting Enhancement"
  ),
  AddFeatureChoice(
    ClassList.sorcerer.features.spellcasting,
    !0,
    "Spell Versatility",
    {
      name: "Spell Versatility",
      source: ["UA:CFV", 10],
      description:
        "\n   After a long rest, I can swap a sorcerer cantrip/spell I know for another of the same level",
    },
    "Sorcerer Spellcasting Enhancement"
  ),
  AddFeatureChoice(
    ClassList.sorcerer.features["font of magic"],
    !0,
    "Empowering Reserves",
    {
      name: "Empowering Reserves",
      source: ["UA:CFV", 10],
      description:
        " [2 sorcery points]\n   When I make an ability check on my turn, I can gain advantage on the check",
    },
    "Font of Magic Enhancement"
  ),
  AddFeatureChoice(
    ClassList.sorcerer.features["font of magic"],
    !0,
    "Imbuing Touch",
    {
      name: "Imbuing Touch",
      source: ["UA:CFV", 10],
      description:
        " [2 sorcery points]\n   As an action, I can touch a nonmagical weapon and make it count as magical for 1 minute",
      action: [["action", " (2 sorcery points)"]],
    },
    "Font of Magic Enhancement"
  ),
  AddFeatureChoice(
    ClassList.sorcerer.features["font of magic"],
    !0,
    "Sorcerous Fortitude",
    {
      name: "Sorcerous Fortitude",
      source: ["UA:CFV", 10],
      description:
        " [1+ sorcery points]\n   As an action, I can gain 1d4 temporary hit points per sorcery point I spend",
      action: [["action", " (1+ sorcery points)"]],
    },
    "Font of Magic Enhancement"
  ),
  AddFeatureChoice(
    ClassList.sorcerer.features.metamagic,
    !0,
    "Elemental Spell",
    {
      name: "Elemental Spell",
      source: ["UA:CFV", 10],
      description:
        " [1 sorcery point]" +
        desc([
          "I can change the damage type of a spell to acid, cold, fire, lightning, or thunder instead",
          "I can only do this if the spell originally deals one of these damage types",
        ]),
    }
  ),
  AddFeatureChoice(ClassList.sorcerer.features.metamagic, !0, "Seeking Spell", {
    name: "Seeking Spell",
    source: ["UA:CFV", 10],
    description:
      " [1 sorcery point]" +
      desc([
        "I can ignore half- and three-quarters cover for the one spell I'm casting",
        "This applies both to my spell attack rolls as to the Dexterity saving throws of the targets",
      ]),
  }),
  AddFeatureChoice(
    ClassList.sorcerer.features.metamagic,
    !0,
    "Unerring Spell",
    {
      name: "Unerring Spell",
      source: ["UA:CFV", 10],
      description:
        " [2 sorcery points]" +
        desc([
          "If I make an attack roll for a spell and miss, I can use this to reroll the attack once",
          "I can use unerring spell even if I already used another metamagic option for the spell",
        ]),
    }
  ),
  AddFeatureChoice(
    ClassList.warlock.features["pact magic"],
    !0,
    "Spell Versatility",
    {
      name: "Spell Versatility",
      source: ["UA:CFV", 10],
      description:
        "\n   After a long rest, I can swap a warlock cantrip or spell I know for another of the same level",
    },
    "Pact Magic Enhancement"
  ),
  AddFeatureChoice(
    ClassList.warlock.features["pact magic"],
    !0,
    "Expanded Spell List",
    {
      name: "Expanded Warlock Spell List",
      source: ["UA:CFV", 10],
      description: "",
      calcChanges: {
        spellList: [
          function (e, a, t) {
            "warlock" === a &&
              (-1 === t.indexOf("bonus") ||
                (e.class && "warlock" === e.class)) &&
              (e.extraspells = e.extraspells.concat([
                "thunderwave",
                "knock",
                "animate dead",
                "life transference",
                "greater invisibility",
                "phantasmal killer",
                "mislead",
                "modify memory",
                "planar binding",
                "teleportation circle",
                "create homunculus",
                "magic jar",
                "project image",
                "abi-dalzim's horrid wilting",
                "gate",
                "shapechange",
                "weird",
              ]));
          },
          "This alternative class feature enhancement expands the spells list of the warlock class.",
        ],
      },
    },
    "Pact Magic Enhancement"
  ),
  AddFeatureChoice(
    ClassList.warlock.features["eldritch invocations"],
    !0,
    "Bond of the Talisman (prereq: level 12 warlock, Pact of the Talisman)",
    {
      name: "Bond of the Talisman",
      source: ["UA:CFV", 11],
      description: desc([
        "As an action, I can teleport to the unoccupied space closest to the wearer of my talisman",
        "The talisman's wearer can do the same to teleport to me; Only works if both on same plane",
      ]),
      prereqeval: function (e) {
        return (
          12 <= classes.known.warlock.level &&
          "pact of the talisman" ==
            GetFeatureChoice("class", "warlock", "pact boon")
        );
      },
      action: [["action", ""]],
    }
  ),
  AddFeatureChoice(
    ClassList.warlock.features["eldritch invocations"],
    !0,
    "Chain Master's Fury (prereq: level 9 warlock, Pact of the Chain)",
    {
      name: "Chain Master's Fury",
      source: ["UA:CFV", 11],
      description:
        "\n   As a bonus action, I can command my familiar to make one attack",
      prereqeval: function (e) {
        return (
          9 <= classes.known.warlock.level &&
          "pact of the chain" ==
            GetFeatureChoice("class", "warlock", "pact boon")
        );
      },
      action: [["bonus action", ""]],
    }
  ),
  AddFeatureChoice(
    ClassList.warlock.features["eldritch invocations"],
    !0,
    "Eldritch Armor (prereq: Pact of the Blade)",
    {
      name: "Eldritch Armor",
      source: ["UA:CFV", 11],
      description: desc([
        "As an action, I can touch an unattended suit of armor and instantly don it",
        "I am proficient with this suit of armor until it is removed",
      ]),
      prereqeval: function (e) {
        return (
          "pact of the blade" ==
          GetFeatureChoice("class", "warlock", "pact boon")
        );
      },
      action: [["action", ""]],
    }
  ),
  AddFeatureChoice(
    ClassList.warlock.features["eldritch invocations"],
    !0,
    "Eldritch Mind (prereq: Pact of the Tome)",
    {
      name: "Eldritch Mind",
      source: ["UA:CFV", 11],
      description:
        "\n   I have advantage on my Constitution saving throws to maintain concentration on a spell",
      prereqeval: function (e) {
        return (
          "pact of the tome" ==
          GetFeatureChoice("class", "warlock", "pact boon")
        );
      },
      savetxt: { text: "Adv. on Con (Concentration) saves" },
    }
  ),
  AddFeatureChoice(
    ClassList.warlock.features["eldritch invocations"],
    !0,
    "Far Scribe (prereq: level 5 warlock, Pact of the Tome)",
    {
      name: "Far Scribe",
      source: ["UA:CFV", 11],
      description: desc([
        "My book of shadows has a new page; As an action, a creature can write its name on it",
        "This page can hold my Cha mod (min 1) in creature names; I can remove one as an action",
        "I can cast Sending without a spell slot or material components, targeting one on the page",
        "Instead of saying the message, I write it on the page and any reply appears there as well",
        "This writing disappears after 1 minute; The target still hears the message in their mind",
      ]),
      prereqeval: function (e) {
        return (
          5 <= classes.known.warlock.level &&
          "pact of the tome" ==
            GetFeatureChoice("class", "warlock", "pact boon")
        );
      },
      action: [["action", " (erase name)"]],
      spellcastingBonus: {
        name: "Far Scribe",
        spells: ["sending"],
        selection: ["sending"],
        firstCol: "atwill",
      },
      spellChanges: {
        sending: {
          components: "V,S",
          compMaterial: "",
          description:
            "Send 25 word message to crea named in book of shadows; it recognizes me and can respond 25 words",
          changes:
            "By using Far Scribe, I can cast Sending without using a spell slot or material components, but only to target one of the creatures that wrote their name in my book of shadows. Instead of speaking the message, I write it in my book and any response appears there as well, lasting for 1 minute. The target still hears the message in their mind.",
        },
      },
    }
  ),
  AddFeatureChoice(
    ClassList.warlock.features["eldritch invocations"],
    !0,
    "Gift of the Protectors (prereq: level 9 warlock, Pact of the Tome)",
    {
      name: "Gift of the Protectors",
      source: ["UA:CFV", 11],
      description: desc([
        "My book of shadows has a new page; As an action, a creature can write its name on it",
        "This page can hold my Cha mod (min 1) in creature names; I can remove one as an action",
        "If a creature whose name is on the page drops to 0 HP, it magically drops to 1 HP instead",
        "This doesn't work if the creature would be killed outright",
      ]),
      prereqeval: function (e) {
        return (
          9 <= classes.known.warlock.level &&
          "pact of the tome" ==
            GetFeatureChoice("class", "warlock", "pact boon")
        );
      },
      action: [["action", " (erase name)"]],
      usages: 1,
      recovery: "long rest",
    }
  ),
  AddFeatureChoice(
    ClassList.warlock.features["eldritch invocations"],
    !0,
    "Investment of the Chain Master (prereq: Pact of the Chain)",
    {
      name: "Investment of the Chain Master",
      source: ["UA:CFV", 11],
      description: desc([
        "When I cast Find Familiar, the summoned create has additional benefits:",
        "• It gains a flying or swimming speed of 40 ft (my choice at casting)",
        "• It no longer needs to breathe",
        "• Its weapon attacks are considered magical for overcoming immunities and resistances",
        "• If it forces a creature to make a saving throw, it uses my spell save DC",
        "Note that the automation will only add this to current familiars and on a level change",
      ]),
      prereqeval: function (e) {
        return (
          "pact of the chain" ==
          GetFeatureChoice("class", "warlock", "pact boon")
        );
      },
      changeeval: function (e) {
        var a =
          !!isTemplVis("AScomp") && What("Template.extras.AScomp").split(",");
        if (a)
          for (
            var t = e[1] ? AddString : RemoveString, n = 1;
            n < a.length;
            n++
          )
            "Familiar" == What(a[n] + "Comp.Type") &&
              t(
                a[n] + "Cnote.Left",
                "My Investment of the Chain Master eldritch invocation grants my familiar the following:\n• The familiar gains a flying or swimming speed of 40 ft (my choice at casting)\n• The familiar no longer needs to breathe\n• Its weapon attacks are considered magical for overcoming immunities and resistances\n• If the familiar forces a creature to make a saving throw, it uses my spell save DC",
                !0
              );
      },
    }
  ),
  AddFeatureChoice(
    ClassList.warlock.features["eldritch invocations"],
    !0,
    "Protection of the Talisman (prereq: level 9 warlock, Pact of the Talisman)",
    {
      name: "Protection of the Talisman",
      source: ["UA:CFV", 12],
      description:
        "\n   The wearer of my talisman adds 1d4 to saving throw rolls in which they lack proficiency",
      prereqeval: function (e) {
        return (
          9 <= classes.known.warlock.level &&
          "pact of the talisman" ==
            GetFeatureChoice("class", "warlock", "pact boon")
        );
      },
      savetxt: { text: ["+1d4 to nonproficient saves"] },
    }
  ),
  AddFeatureChoice(
    ClassList.warlock.features["eldritch invocations"],
    !0,
    "Rebuke of the Talisman (prereq: Pact of the Talisman)",
    {
      name: "Rebuke of the Talisman",
      source: ["UA:CFV", 12],
      description: desc([
        "As a reaction when the wearer of my talisman is hit, I deal damage and push the attacker",
        "To be able to do this, I have to see the attacker and it has to be within 30 ft of me",
        "I deal my Cha mod in psychic damage (min 1) and push it 10 ft away from the talisman",
      ]),
      prereqeval: function (e) {
        return (
          "pact of the talisman" ==
          GetFeatureChoice("class", "warlock", "pact boon")
        );
      },
      action: [["reaction", ""]],
    }
  ),
  AddFeatureChoice(
    ClassList.warlock.features["pact boon"],
    !1,
    "Pact of the Talisman",
    {
      name: "Pact of the Talisman",
      source: ["UA:CFV", 12],
      description: desc([
        "The wearer of this amulet adds 1d4 to checks with skills in which they lack proficiency",
        "I can give the talisman to others to use; The talisman turns to ash when I die",
        "If I lose my talisman, I can preform an 1-hour ceremony to gain a replacement",
        "This ceremony destroys the previous amulet and can be done during a short or long rest",
      ]),
    }
  ),
  AddFeatureChoice(
    ClassList.wizard.features.spellcasting,
    !0,
    "Cantrip Versatility",
    {
      name: "Cantrip Versatility",
      source: ["UA:CFV", 12],
      description:
        "\n   Whenever I gain a wizard level, I can replace a wizard cantrip I know with another",
    },
    "Wizard Spellcasting Enhancement"
  ),
  AddFeatureChoice(
    ClassList.wizard.features.spellcasting,
    !0,
    "Expanded Spell List",
    {
      name: "Expanded Wizard Spell List",
      source: ["UA:CFV", 12],
      description: "",
      calcChanges: {
        spellList: [
          function (e, a, t) {
            "wizard" === a &&
              -1 === t.indexOf("bonus") &&
              (e.extraspells = e.extraspells.concat([
                "augury",
                "enhance ability",
                "speak with dead",
                "divination",
              ]));
          },
          "This alternative class feature enhancement expands the spells list of the wizard class.",
        ],
      },
    },
    "Wizard Spellcasting Enhancement"
  )