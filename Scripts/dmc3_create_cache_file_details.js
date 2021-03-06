var fs = require("fs");

eval(fs.readFileSync("dmc3_core.js", "utf8"));

var items =
[
	// Dante
	[ "pl000"              , "obj"    ],
	[ "pl011"              , "obj"    ],
	[ "pl013"              , "obj"    ],
	[ "pl015"              , "obj"    ],
	[ "pl016"              , "obj"    ],
	[ "pl018"              , "obj"    ],
	[ "pl005"              , "obj"    ],
	[ "pl006"              , "obj"    ],
	[ "pl007"              , "obj"    ],
	[ "pl008"              , "obj"    ],
	[ "pl009"              , "obj"    ],
	[ "pl017"              , "obj"    ],
	[ "pl000_00_0"         , "motion" ],
	[ "pl000_00_1"         , "motion" ],
	[ "pl000_00_2"         , "motion" ],
	[ "pl000_00_3"         , "motion" ],
	[ "pl000_00_4"         , "motion" ],
	[ "pl000_00_5"         , "motion" ],
	[ "pl000_00_6"         , "motion" ],
	[ "pl000_00_7"         , "motion" ],
	[ "pl000_00_8"         , "motion" ],
	[ "pl000_00_9"         , "motion" ],
	[ "pl000_00_10"        , "motion" ],
	[ "pl000_00_11"        , "motion" ],
	[ "pl000_00_12"        , "motion" ],
	[ "pl000_00_13"        , "motion" ],
	[ "pl000_00_14"        , "motion" ],
	[ "pl000_00_15"        , "motion" ],
	[ "pl000_00_16"        , "motion" ],
	[ "pl000_00_17"        , "motion" ],
	[ "pl000_00_18"        , "motion" ],
	[ "pl000_00_19"        , "motion" ],
	[ "pl000_00_20"        , "motion" ],
	[ "pl000_00_21"        , "motion" ],
	[ "pl000_00_22"        , "motion" ],
	[ "pl000_00_23"        , "motion" ],
	[ "pl000_00_24"        , "motion" ],
	[ "pl000_00_25"        , "motion" ],
	[ "pl000_00_26"        , "motion" ],
	[ "plwp_sword"         , "obj"    ],
	[ "plwp_sword2"        , "obj"    ],
	[ "plwp_sword3"        , "obj"    ],
	[ "plwp_nunchaku"      , "obj"    ],
	[ "plwp_2sword"        , "obj"    ],
	[ "plwp_guitar"        , "obj"    ],
	[ "plwp_fight"         , "obj"    ],
	[ "plwp_gun"           , "obj"    ],
	[ "plwp_shotgun"       , "obj"    ],
	[ "plwp_laser"         , "obj"    ],
	[ "plwp_rifle"         , "obj"    ],
	[ "plwp_ladygun"       , "obj"    ],
	[ "snd_com0"           , "se"     ],
	[ "snd_com0a"          , "se"     ],
	[ "snd_sty02"          , "se"     ],
	[ "snd_sty03"          , "se"     ],
	[ "snd_sty04"          , "se"     ],
	[ "snd_sty05"          , "se"     ],
	[ "snd_sty06"          , "se"     ],
	[ "snd_wp00b"          , "se"     ],
	[ "snd_wp01b"          , "se"     ],
	[ "snd_wp02b"          , "se"     ],
	[ "snd_wp03b"          , "se"     ],
	[ "snd_wp04b"          , "se"     ],
	[ "snd_wp05b"          , "se"     ],
	[ "snd_wp06b"          , "se"     ],
	[ "snd_wp07b"          , "se"     ],
	[ "snd_wp08b"          , "se"     ],
	[ "snd_wp09b"          , "se"     ],
	// Bob
	[ "pl001"              , "obj"    ],
	[ "pl001_00_0"         , "motion" ],
	[ "pl001_00_1"         , "motion" ],
	[ "pl001_00_2"         , "motion" ],
	[ "pl001_00_31"        , "motion" ],
	[ "plwp_vergilsword"   , "obj"    ],
	// Lady
	[ "pl002"              , "obj"    ],
	[ "pl002_00_0"         , "motion" ],
	[ "pl002_00_1"         , "motion" ],
	[ "pl002_00_2"         , "motion" ],
	// Vergil
	[ "pl021"              , "obj"    ],
	[ "pl023"              , "obj"    ],
	[ "pl026"              , "obj"    ],
	[ "pl010"              , "obj"    ],
	[ "pl014"              , "obj"    ],
	[ "pl025"              , "obj"    ],
	[ "pl021_00_0"         , "motion" ],
	[ "pl021_00_1"         , "motion" ],
	[ "pl021_00_2"         , "motion" ],
	[ "pl021_00_3"         , "motion" ],
	[ "pl021_00_4"         , "motion" ],
	[ "pl021_00_5"         , "motion" ],
	[ "pl021_00_6"         , "motion" ],
	[ "pl021_00_7"         , "motion" ],
	[ "pl021_00_8"         , "motion" ],
	[ "pl021_00_9"         , "motion" ],
	[ "plwp_newvergilsword", "obj"    ],
	[ "plwp_newvergilfight", "obj"    ],
	[ "plwp_forceedge"     , "obj"    ],
	[ "plwp_nerosword"     , "obj"    ],
	[ "snd_com3"           , "se"     ],
	[ "snd_com3a"          , "se"     ],
	[ "snd_sty07"          , "se"     ],
	[ "snd_sty08"          , "se"     ],
	[ "snd_wp11a"          , "se"     ],
	[ "snd_wp11b"          , "se"     ],
	[ "snd_wp12a"          , "se"     ],
	[ "snd_wp12b"          , "se"     ],
	[ "snd_wp13a"          , "se"     ],
	[ "snd_wp13b"          , "se"     ],
	// Enemy
	[ "em000"              , "obj"    ],
	[ "em006"              , "obj"    ],
	[ "em007"              , "obj"    ],
	[ "em008"              , "obj"    ],
	[ "em010"              , "obj"    ],
	[ "em011"              , "obj"    ],
	[ "em012"              , "obj"    ],
	[ "em013"              , "obj"    ],
	[ "em014"              , "obj"    ],
	[ "em016"              , "obj"    ],
	[ "em017"              , "obj"    ],
	[ "em021"              , "obj"    ],
	[ "em023"              , "obj"    ],
	[ "em025"              , "obj"    ],
	[ "em026"              , "obj"    ],
	[ "em027"              , "obj"    ],
	[ "em028"              , "obj"    ],
	[ "em029"              , "obj"    ],
	[ "em030"              , "obj"    ],
	[ "em031"              , "obj"    ],
	[ "em032"              , "obj"    ],
	[ "em034"              , "obj"    ],
	[ "em035"              , "obj"    ],
	[ "em037"              , "obj"    ],
	[ "snd_em00a"          , "se"     ],
	[ "snd_em00b"          , "se"     ],
	[ "snd_em06"           , "se"     ],
	[ "snd_em07"           , "se"     ],
	[ "snd_em08"           , "se"     ],
	[ "snd_em10"           , "se"     ],
	[ "snd_em11"           , "se"     ],
	[ "snd_em12"           , "se"     ],
	[ "snd_em13"           , "se"     ],
	[ "snd_em14"           , "se"     ],
	[ "snd_em16"           , "se"     ],
	[ "snd_em17"           , "se"     ],
	[ "snd_em21"           , "se"     ],
	[ "snd_em23"           , "se"     ],
	[ "snd_em25"           , "se"     ],
	[ "snd_em26"           , "se"     ],
	[ "snd_em27"           , "se"     ],
	[ "snd_em28"           , "se"     ],
	[ "snd_em29"           , "se"     ],
	[ "snd_em30"           , "se"     ],
	[ "snd_em31"           , "se"     ],
	[ "snd_em32"           , "se"     ],
	[ "snd_em34"           , "se"     ],
	[ "snd_em35"           , "se"     ],
	[ "snd_em37"           , "se"     ],
	[ "snd_emsr"           , "se"     ],
	// Other
	[ "id100"              , "id"     ],
	[ "id100V"             , "id"     ],
];

var filename = "../Mary/Vars.h"

var file = fs.readFileSync(filename, "utf8");

var lines = file.match(/[\S\s]*?\r\n/g);

if
(
	!Tag_Init
	(
		lines,
		/\/\/ \$CacheFileStart$/,
		/\/\/ \$CacheFileEnd$/
	)
)
{
	console.log("Tag_Init failed.");

	return;
}

Tag_CopyUntil(lines);



c += "enum" + NEW_LINE;
c += "{" + NEW_LINE;

for (var itemIndex = 0; itemIndex < items.length; itemIndex++)
{
	var item = items[itemIndex];

	var name = item[0];
	var type = item[1];

	c += "\t" + name + "," + NEW_LINE;
}

c += "\tCACHE_FILE_COUNT," + NEW_LINE;
c += "};" + NEW_LINE;

c += NEW_LINE;



c += "struct CacheFileHelper" + NEW_LINE;
c += "{" + NEW_LINE;
c += "\tconst char * filename;" + NEW_LINE;
c += "\tconst char * typeName;" + NEW_LINE;
c += "};" + NEW_LINE;

c += NEW_LINE;

c += "constexpr CacheFileHelper cacheFileHelpers[CACHE_FILE_COUNT] =" + NEW_LINE;
c += "{" + NEW_LINE;

for (var itemIndex = 0; itemIndex < items.length; itemIndex++)
{
	var item = items[itemIndex];

	var name = item[0];
	var type = item[1];

	c += "\t{ \"" + name + ".pac\", \"";

	if (type == "obj")
	{
		c += "obj\\\\" + name + ".pac";
	}
	else if (type == "motion")
	{
		var parent = name.match(/([\S\s]+?)_/);
		if (parent)
		{
			c += "motion\\\\" + parent[1] + "\\\\" + name + ".pac";
		}
	}
	else if (type == "id")
	{
		var id = name.match(/id([0-9]+?)[A-Z]*?$/);
		if (id)
		{
			var str = id[1];
			if (str.length >= 3)
			{
				str = str.substring(0, (str.length - 2)) + "00";
			}
			c += "id\\\\id" + str + "\\\\" + name + ".pac";
		}
	}
	else if (type == "se")
	{
		c += "se\\\\" + name + ".pac";
	}
	c += "\" }," + NEW_LINE;
}

c += "};" + NEW_LINE;

c += NEW_LINE;

c += "static_assert(countof(cacheFileHelpers) == CACHE_FILE_COUNT);" + NEW_LINE;

c += NEW_LINE;



Tag_CopyAfter(lines);

fs.writeFileSync(filename, c);
