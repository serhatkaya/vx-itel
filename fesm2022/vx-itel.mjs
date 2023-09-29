import * as lpn from 'google-libphonenumber';
import * as i0 from '@angular/core';
import { Injectable, Directive, EventEmitter, forwardRef, Component, Input, Output, ViewChild, NgModule } from '@angular/core';
import * as i3 from '@angular/forms';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { setTheme } from 'ngx-bootstrap/utils';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i4 from 'ngx-bootstrap/dropdown';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

var CountryISO;
(function (CountryISO) {
    CountryISO["Afghanistan"] = "af";
    CountryISO["Albania"] = "al";
    CountryISO["Algeria"] = "dz";
    CountryISO["AmericanSamoa"] = "as";
    CountryISO["Andorra"] = "ad";
    CountryISO["Angola"] = "ao";
    CountryISO["Anguilla"] = "ai";
    CountryISO["AntiguaAndBarbuda"] = "ag";
    CountryISO["Argentina"] = "ar";
    CountryISO["Armenia"] = "am";
    CountryISO["Aruba"] = "aw";
    CountryISO["Australia"] = "au";
    CountryISO["Austria"] = "at";
    CountryISO["Azerbaijan"] = "az";
    CountryISO["Bahamas"] = "bs";
    CountryISO["Bahrain"] = "bh";
    CountryISO["Bangladesh"] = "bd";
    CountryISO["Barbados"] = "bb";
    CountryISO["Belarus"] = "by";
    CountryISO["Belgium"] = "be";
    CountryISO["Belize"] = "bz";
    CountryISO["Benin"] = "bj";
    CountryISO["Bermuda"] = "bm";
    CountryISO["Bhutan"] = "bt";
    CountryISO["Bolivia"] = "bo";
    CountryISO["BosniaAndHerzegovina"] = "ba";
    CountryISO["Botswana"] = "bw";
    CountryISO["Brazil"] = "br";
    CountryISO["BritishIndianOceanTerritory"] = "io";
    CountryISO["BritishVirginIslands"] = "vg";
    CountryISO["Brunei"] = "bn";
    CountryISO["Bulgaria"] = "bg";
    CountryISO["BurkinaFaso"] = "bf";
    CountryISO["Burundi"] = "bi";
    CountryISO["Cambodia"] = "kh";
    CountryISO["Cameroon"] = "cm";
    CountryISO["Canada"] = "ca";
    CountryISO["CapeVerde"] = "cv";
    CountryISO["CaribbeanNetherlands"] = "bq";
    CountryISO["CaymanIslands"] = "ky";
    CountryISO["CentralAfricanRepublic"] = "cf";
    CountryISO["Chad"] = "td";
    CountryISO["Chile"] = "cl";
    CountryISO["China"] = "cn";
    CountryISO["ChristmasIsland"] = "cx";
    CountryISO["Cocos"] = "cc";
    CountryISO["Colombia"] = "co";
    CountryISO["Comoros"] = "km";
    CountryISO["CongoDRCJamhuriYaKidemokrasiaYaKongo"] = "cd";
    CountryISO["CongoRepublicCongoBrazzaville"] = "cg";
    CountryISO["CookIslands"] = "ck";
    CountryISO["CostaRica"] = "cr";
    CountryISO["C\u00F4teDIvoire"] = "ci";
    CountryISO["Croatia"] = "hr";
    CountryISO["Cuba"] = "cu";
    CountryISO["Cura\u00E7ao"] = "cw";
    CountryISO["Cyprus"] = "cy";
    CountryISO["CzechRepublic"] = "cz";
    CountryISO["Denmark"] = "dk";
    CountryISO["Djibouti"] = "dj";
    CountryISO["Dominica"] = "dm";
    CountryISO["DominicanRepublic"] = "do";
    CountryISO["Ecuador"] = "ec";
    CountryISO["Egypt"] = "eg";
    CountryISO["ElSalvador"] = "sv";
    CountryISO["EquatorialGuinea"] = "gq";
    CountryISO["Eritrea"] = "er";
    CountryISO["Estonia"] = "ee";
    CountryISO["Ethiopia"] = "et";
    CountryISO["FalklandIslands"] = "fk";
    CountryISO["FaroeIslands"] = "fo";
    CountryISO["Fiji"] = "fj";
    CountryISO["Finland"] = "fi";
    CountryISO["France"] = "fr";
    CountryISO["FrenchGuiana"] = "gf";
    CountryISO["FrenchPolynesia"] = "pf";
    CountryISO["Gabon"] = "ga";
    CountryISO["Gambia"] = "gm";
    CountryISO["Georgia"] = "ge";
    CountryISO["Germany"] = "de";
    CountryISO["Ghana"] = "gh";
    CountryISO["Gibraltar"] = "gi";
    CountryISO["Greece"] = "gr";
    CountryISO["Greenland"] = "gl";
    CountryISO["Grenada"] = "gd";
    CountryISO["Guadeloupe"] = "gp";
    CountryISO["Guam"] = "gu";
    CountryISO["Guatemala"] = "gt";
    CountryISO["Guernsey"] = "gg";
    CountryISO["Guinea"] = "gn";
    CountryISO["GuineaBissau"] = "gw";
    CountryISO["Guyana"] = "gy";
    CountryISO["Haiti"] = "ht";
    CountryISO["Honduras"] = "hn";
    CountryISO["HongKong"] = "hk";
    CountryISO["Hungary"] = "hu";
    CountryISO["Iceland"] = "is";
    CountryISO["India"] = "in";
    CountryISO["Indonesia"] = "id";
    CountryISO["Iran"] = "ir";
    CountryISO["Iraq"] = "iq";
    CountryISO["Ireland"] = "ie";
    CountryISO["IsleOfMan"] = "im";
    CountryISO["Israel"] = "il";
    CountryISO["Italy"] = "it";
    CountryISO["Jamaica"] = "jm";
    CountryISO["Japan"] = "jp";
    CountryISO["Jersey"] = "je";
    CountryISO["Jordan"] = "jo";
    CountryISO["Kazakhstan"] = "kz";
    CountryISO["Kenya"] = "ke";
    CountryISO["Kiribati"] = "ki";
    CountryISO["Kosovo"] = "xk";
    CountryISO["Kuwait"] = "kw";
    CountryISO["Kyrgyzstan"] = "kg";
    CountryISO["Laos"] = "la";
    CountryISO["Latvia"] = "lv";
    CountryISO["Lebanon"] = "lb";
    CountryISO["Lesotho"] = "ls";
    CountryISO["Liberia"] = "lr";
    CountryISO["Libya"] = "ly";
    CountryISO["Liechtenstein"] = "li";
    CountryISO["Lithuania"] = "lt";
    CountryISO["Luxembourg"] = "lu";
    CountryISO["Macau"] = "mo";
    CountryISO["Macedonia"] = "mk";
    CountryISO["Madagascar"] = "mg";
    CountryISO["Malawi"] = "mw";
    CountryISO["Malaysia"] = "my";
    CountryISO["Maldives"] = "mv";
    CountryISO["Mali"] = "ml";
    CountryISO["Malta"] = "mt";
    CountryISO["MarshallIslands"] = "mh";
    CountryISO["Martinique"] = "mq";
    CountryISO["Mauritania"] = "mr";
    CountryISO["Mauritius"] = "mu";
    CountryISO["Mayotte"] = "yt";
    CountryISO["Mexico"] = "mx";
    CountryISO["Micronesia"] = "fm";
    CountryISO["Moldova"] = "md";
    CountryISO["Monaco"] = "mc";
    CountryISO["Mongolia"] = "mn";
    CountryISO["Montenegro"] = "me";
    CountryISO["Montserrat"] = "ms";
    CountryISO["Morocco"] = "ma";
    CountryISO["Mozambique"] = "mz";
    CountryISO["Myanmar"] = "mm";
    CountryISO["Namibia"] = "na";
    CountryISO["Nauru"] = "nr";
    CountryISO["Nepal"] = "np";
    CountryISO["Netherlands"] = "nl";
    CountryISO["NewCaledonia"] = "nc";
    CountryISO["NewZealand"] = "nz";
    CountryISO["Nicaragua"] = "ni";
    CountryISO["Niger"] = "ne";
    CountryISO["Nigeria"] = "ng";
    CountryISO["Niue"] = "nu";
    CountryISO["NorfolkIsland"] = "nf";
    CountryISO["NorthKorea"] = "kp";
    CountryISO["NorthernMarianaIslands"] = "mp";
    CountryISO["Norway"] = "no";
    CountryISO["Oman"] = "om";
    CountryISO["Pakistan"] = "pk";
    CountryISO["Palau"] = "pw";
    CountryISO["Palestine"] = "ps";
    CountryISO["Panama"] = "pa";
    CountryISO["PapuaNewGuinea"] = "pg";
    CountryISO["Paraguay"] = "py";
    CountryISO["Peru"] = "pe";
    CountryISO["Philippines"] = "ph";
    CountryISO["Poland"] = "pl";
    CountryISO["Portugal"] = "pt";
    CountryISO["PuertoRico"] = "pr";
    CountryISO["Qatar"] = "qa";
    CountryISO["R\u00E9union"] = "re";
    CountryISO["Romania"] = "ro";
    CountryISO["Russia"] = "ru";
    CountryISO["Rwanda"] = "rw";
    CountryISO["SaintBarth\u00E9lemy"] = "bl";
    CountryISO["SaintHelena"] = "sh";
    CountryISO["SaintKittsAndNevis"] = "kn";
    CountryISO["SaintLucia"] = "lc";
    CountryISO["SaintMartin"] = "mf";
    CountryISO["SaintPierreAndMiquelon"] = "pm";
    CountryISO["SaintVincentAndTheGrenadines"] = "vc";
    CountryISO["Samoa"] = "ws";
    CountryISO["SanMarino"] = "sm";
    CountryISO["S\u00E3oTom\u00E9AndPr\u00EDncipe"] = "st";
    CountryISO["SaudiArabia"] = "sa";
    CountryISO["Senegal"] = "sn";
    CountryISO["Serbia"] = "rs";
    CountryISO["Seychelles"] = "sc";
    CountryISO["SierraLeone"] = "sl";
    CountryISO["Singapore"] = "sg";
    CountryISO["SintMaarten"] = "sx";
    CountryISO["Slovakia"] = "sk";
    CountryISO["Slovenia"] = "si";
    CountryISO["SolomonIslands"] = "sb";
    CountryISO["Somalia"] = "so";
    CountryISO["SouthAfrica"] = "za";
    CountryISO["SouthKorea"] = "kr";
    CountryISO["SouthSudan"] = "ss";
    CountryISO["Spain"] = "es";
    CountryISO["SriLanka"] = "lk";
    CountryISO["Sudan"] = "sd";
    CountryISO["Suriname"] = "sr";
    CountryISO["SvalbardAndJanMayen"] = "sj";
    CountryISO["Swaziland"] = "sz";
    CountryISO["Sweden"] = "se";
    CountryISO["Switzerland"] = "ch";
    CountryISO["Syria"] = "sy";
    CountryISO["Taiwan"] = "tw";
    CountryISO["Tajikistan"] = "tj";
    CountryISO["Tanzania"] = "tz";
    CountryISO["Thailand"] = "th";
    CountryISO["TimorLeste"] = "tl";
    CountryISO["Togo"] = "tg";
    CountryISO["Tokelau"] = "tk";
    CountryISO["Tonga"] = "to";
    CountryISO["TrinidadAndTobago"] = "tt";
    CountryISO["Tunisia"] = "tn";
    CountryISO["Turkey"] = "tr";
    CountryISO["Turkmenistan"] = "tm";
    CountryISO["TurksAndCaicosIslands"] = "tc";
    CountryISO["Tuvalu"] = "tv";
    CountryISO["USVirginIslands"] = "vi";
    CountryISO["Uganda"] = "ug";
    CountryISO["Ukraine"] = "ua";
    CountryISO["UnitedArabEmirates"] = "ae";
    CountryISO["UnitedKingdom"] = "gb";
    CountryISO["UnitedStates"] = "us";
    CountryISO["Uruguay"] = "uy";
    CountryISO["Uzbekistan"] = "uz";
    CountryISO["Vanuatu"] = "vu";
    CountryISO["VaticanCity"] = "va";
    CountryISO["Venezuela"] = "ve";
    CountryISO["Vietnam"] = "vn";
    CountryISO["WallisAndFutuna"] = "wf";
    CountryISO["WesternSahara"] = "eh";
    CountryISO["Yemen"] = "ye";
    CountryISO["Zambia"] = "zm";
    CountryISO["Zimbabwe"] = "zw";
    CountryISO["\u00C5landIslands"] = "ax";
})(CountryISO || (CountryISO = {}));

class CountryCode {
    allCountries = [
        [
            'Afghanistan (‫افغانستان‬‎)',
            CountryISO.Afghanistan,
            '93'
        ],
        [
            'Albania (Shqipëri)',
            CountryISO.Albania,
            '355'
        ],
        [
            'Algeria (‫الجزائر‬‎)',
            CountryISO.Algeria,
            '213'
        ],
        [
            'American Samoa',
            'as',
            '1',
            1,
            [
                '684',
            ]
        ],
        [
            'Andorra',
            CountryISO.Andorra,
            '376'
        ],
        [
            'Angola',
            CountryISO.Angola,
            '244'
        ],
        [
            'Anguilla',
            'ai',
            '1',
            1,
            [
                '264',
            ]
        ],
        [
            'Antigua and Barbuda',
            'ag',
            '1',
            1,
            [
                '268',
            ]
        ],
        [
            'Argentina',
            CountryISO.Argentina,
            '54'
        ],
        [
            'Armenia (Հայաստան)',
            CountryISO.Armenia,
            '374'
        ],
        [
            'Aruba',
            CountryISO.Aruba,
            '297'
        ],
        [
            'Australia',
            CountryISO.Australia,
            '61',
            0
        ],
        [
            'Austria (Österreich)',
            CountryISO.Austria,
            '43'
        ],
        [
            'Azerbaijan (Azərbaycan)',
            CountryISO.Azerbaijan,
            '994'
        ],
        [
            'Bahamas',
            'bs',
            '1',
            1,
            [
                '242',
            ]
        ],
        [
            'Bahrain (‫البحرين‬‎)',
            CountryISO.Bahrain,
            '973'
        ],
        [
            'Bangladesh (বাংলাদেশ)',
            CountryISO.Bangladesh,
            '880'
        ],
        [
            'Barbados',
            'bb',
            '1',
            1,
            [
                '246',
            ]
        ],
        [
            'Belarus (Беларусь)',
            CountryISO.Belarus,
            '375'
        ],
        [
            'Belgium (België)',
            CountryISO.Belgium,
            '32'
        ],
        [
            'Belize',
            CountryISO.Belize,
            '501'
        ],
        [
            'Benin (Bénin)',
            CountryISO.Benin,
            '229'
        ],
        [
            'Bermuda',
            'bm',
            '1',
            1,
            [
                '441',
            ]
        ],
        [
            'Bhutan (འབྲུག)',
            CountryISO.Bhutan,
            '975'
        ],
        [
            'Bolivia',
            CountryISO.Bolivia,
            '591'
        ],
        [
            'Bosnia and Herzegovina (Босна и Херцеговина)',
            CountryISO.BosniaAndHerzegovina,
            '387'
        ],
        [
            'Botswana',
            CountryISO.Botswana,
            '267'
        ],
        [
            'Brazil (Brasil)',
            CountryISO.Brazil,
            '55'
        ],
        [
            'British Indian Ocean Territory',
            CountryISO.BritishIndianOceanTerritory,
            '246'
        ],
        [
            'British Virgin Islands',
            'vg',
            '1',
            1,
            [
                '284',
            ]
        ],
        [
            'Brunei',
            CountryISO.Brunei,
            '673'
        ],
        [
            'Bulgaria (България)',
            CountryISO.Bulgaria,
            '359'
        ],
        [
            'Burkina Faso',
            CountryISO.BurkinaFaso,
            '226'
        ],
        [
            'Burundi (Uburundi)',
            CountryISO.Burundi,
            '257'
        ],
        [
            'Cambodia (កម្ពុជា)',
            CountryISO.Cambodia,
            '855'
        ],
        [
            'Cameroon (Cameroun)',
            CountryISO.Cameroon,
            '237'
        ],
        [
            'Canada',
            CountryISO.Canada,
            '1',
            1,
            [
                '204', '226', '236', '249', '250', '289', '306', '343', '365', '387', '403', '416',
                '418', '431', '437', '438', '450', '506', '514', '519', '548', '579', '581', '587',
                '604', '613', '639', '647', '672', '705', '709', '742', '778', '780', '782', '807',
                '819', '825', '867', '873', '902', '905'
            ]
        ],
        [
            'Cape Verde (Kabu Verdi)',
            CountryISO.CapeVerde,
            '238'
        ],
        [
            'Caribbean Netherlands',
            CountryISO.CaribbeanNetherlands,
            '599',
            1
        ],
        [
            'Cayman Islands',
            'ky',
            '1',
            1,
            [
                '345',
            ]
        ],
        [
            'Central African Republic (République centrafricaine)',
            CountryISO.CentralAfricanRepublic,
            '236'
        ],
        [
            'Chad (Tchad)',
            CountryISO.Chad,
            '235'
        ],
        [
            'Chile',
            CountryISO.Chile,
            '56'
        ],
        [
            'China (中国)',
            CountryISO.China,
            '86'
        ],
        [
            'Christmas Island',
            CountryISO.ChristmasIsland,
            '61',
            2
        ],
        [
            'Cocos (Keeling) Islands',
            CountryISO.Cocos,
            '61',
            1
        ],
        [
            'Colombia',
            CountryISO.Colombia,
            '57'
        ],
        [
            'Comoros (‫جزر القمر‬‎)',
            CountryISO.Comoros,
            '269'
        ],
        [
            'Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)',
            CountryISO.CongoDRCJamhuriYaKidemokrasiaYaKongo,
            '243'
        ],
        [
            'Congo (Republic) (Congo-Brazzaville)',
            CountryISO.CongoRepublicCongoBrazzaville,
            '242'
        ],
        [
            'Cook Islands',
            CountryISO.CookIslands,
            '682'
        ],
        [
            'Costa Rica',
            CountryISO.CostaRica,
            '506'
        ],
        [
            'Côte d’Ivoire',
            CountryISO.CôteDIvoire,
            '225'
        ],
        [
            'Croatia (Hrvatska)',
            CountryISO.Croatia,
            '385'
        ],
        [
            'Cuba',
            CountryISO.Cuba,
            '53'
        ],
        [
            'Curaçao',
            CountryISO.Curaçao,
            '599',
            0
        ],
        [
            'Cyprus (Κύπρος)',
            CountryISO.Cyprus,
            '357'
        ],
        [
            'Czech Republic (Česká republika)',
            CountryISO.CzechRepublic,
            '420'
        ],
        [
            'Denmark (Danmark)',
            CountryISO.Denmark,
            '45'
        ],
        [
            'Djibouti',
            CountryISO.Djibouti,
            '253'
        ],
        [
            'Dominica',
            CountryISO.Dominica,
            '1767'
        ],
        [
            'Dominican Republic (República Dominicana)',
            CountryISO.DominicanRepublic,
            '1',
            2,
            ['809', '829', '849']
        ],
        [
            'Ecuador',
            CountryISO.Ecuador,
            '593'
        ],
        [
            'Egypt (‫مصر‬‎)',
            CountryISO.Egypt,
            '20'
        ],
        [
            'El Salvador',
            CountryISO.ElSalvador,
            '503'
        ],
        [
            'Equatorial Guinea (Guinea Ecuatorial)',
            CountryISO.EquatorialGuinea,
            '240'
        ],
        [
            'Eritrea',
            CountryISO.Eritrea,
            '291'
        ],
        [
            'Estonia (Eesti)',
            CountryISO.Estonia,
            '372'
        ],
        [
            'Ethiopia',
            CountryISO.Ethiopia,
            '251'
        ],
        [
            'Falkland Islands (Islas Malvinas)',
            CountryISO.FalklandIslands,
            '500'
        ],
        [
            'Faroe Islands (Føroyar)',
            CountryISO.FaroeIslands,
            '298'
        ],
        [
            'Fiji',
            CountryISO.Fiji,
            '679'
        ],
        [
            'Finland (Suomi)',
            CountryISO.Finland,
            '358',
            0
        ],
        [
            'France',
            CountryISO.France,
            '33'
        ],
        [
            'French Guiana (Guyane française)',
            CountryISO.FrenchGuiana,
            '594'
        ],
        [
            'French Polynesia (Polynésie française)',
            CountryISO.FrenchPolynesia,
            '689'
        ],
        [
            'Gabon',
            CountryISO.Gabon,
            '241'
        ],
        [
            'Gambia',
            CountryISO.Gambia,
            '220'
        ],
        [
            'Georgia (საქართველო)',
            CountryISO.Georgia,
            '995'
        ],
        [
            'Germany (Deutschland)',
            CountryISO.Germany,
            '49'
        ],
        [
            'Ghana (Gaana)',
            CountryISO.Ghana,
            '233'
        ],
        [
            'Gibraltar',
            CountryISO.Gibraltar,
            '350'
        ],
        [
            'Greece (Ελλάδα)',
            CountryISO.Greece,
            '30'
        ],
        [
            'Greenland (Kalaallit Nunaat)',
            CountryISO.Greenland,
            '299'
        ],
        [
            'Grenada',
            CountryISO.Grenada,
            '1473'
        ],
        [
            'Guadeloupe',
            CountryISO.Guadeloupe,
            '590',
            0
        ],
        [
            'Guam',
            'gu',
            '1',
            1,
            [
                '671',
            ]
        ],
        [
            'Guatemala',
            CountryISO.Guatemala,
            '502'
        ],
        [
            'Guernsey',
            CountryISO.Guernsey,
            '44',
            1,
            [1481]
        ],
        [
            'Guinea (Guinée)',
            CountryISO.Guinea,
            '224'
        ],
        [
            'Guinea-Bissau (Guiné Bissau)',
            CountryISO.GuineaBissau,
            '245'
        ],
        [
            'Guyana',
            CountryISO.Guyana,
            '592'
        ],
        [
            'Haiti',
            CountryISO.Haiti,
            '509'
        ],
        [
            'Honduras',
            CountryISO.Honduras,
            '504'
        ],
        [
            'Hong Kong (香港)',
            CountryISO.HongKong,
            '852'
        ],
        [
            'Hungary (Magyarország)',
            CountryISO.Hungary,
            '36'
        ],
        [
            'Iceland (Ísland)',
            CountryISO.Iceland,
            '354'
        ],
        [
            'India (भारत)',
            CountryISO.India,
            '91'
        ],
        [
            'Indonesia',
            CountryISO.Indonesia,
            '62'
        ],
        [
            'Iran (‫ایران‬‎)',
            CountryISO.Iran,
            '98'
        ],
        [
            'Iraq (‫العراق‬‎)',
            CountryISO.Iraq,
            '964'
        ],
        [
            'Ireland',
            CountryISO.Ireland,
            '353'
        ],
        [
            'Isle of Man',
            CountryISO.IsleOfMan,
            '44',
            2,
            [1624]
        ],
        [
            'Israel (‫ישראל‬‎)',
            CountryISO.Israel,
            '972'
        ],
        [
            'Italy (Italia)',
            CountryISO.Italy,
            '39',
            0
        ],
        [
            'Jamaica',
            'jm',
            '1',
            1,
            [
                '876',
            ]
        ],
        [
            'Japan (日本)',
            CountryISO.Japan,
            '81'
        ],
        [
            'Jersey',
            CountryISO.Jersey,
            '44',
            3,
            [1534]
        ],
        [
            'Jordan (‫الأردن‬‎)',
            CountryISO.Jordan,
            '962'
        ],
        [
            'Kazakhstan (Казахстан)',
            CountryISO.Kazakhstan,
            '7',
            1
        ],
        [
            'Kenya',
            CountryISO.Kenya,
            '254'
        ],
        [
            'Kiribati',
            CountryISO.Kiribati,
            '686'
        ],
        [
            'Kosovo',
            CountryISO.Kosovo,
            '383'
        ],
        [
            'Kuwait (‫الكويت‬‎)',
            CountryISO.Kuwait,
            '965'
        ],
        [
            'Kyrgyzstan (Кыргызстан)',
            CountryISO.Kyrgyzstan,
            '996'
        ],
        [
            'Laos (ລາວ)',
            CountryISO.Laos,
            '856'
        ],
        [
            'Latvia (Latvija)',
            CountryISO.Latvia,
            '371'
        ],
        [
            'Lebanon (‫لبنان‬‎)',
            CountryISO.Lebanon,
            '961'
        ],
        [
            'Lesotho',
            CountryISO.Lesotho,
            '266'
        ],
        [
            'Liberia',
            CountryISO.Liberia,
            '231'
        ],
        [
            'Libya (‫ليبيا‬‎)',
            CountryISO.Libya,
            '218'
        ],
        [
            'Liechtenstein',
            CountryISO.Liechtenstein,
            '423'
        ],
        [
            'Lithuania (Lietuva)',
            CountryISO.Lithuania,
            '370'
        ],
        [
            'Luxembourg',
            CountryISO.Luxembourg,
            '352'
        ],
        [
            'Macau (澳門)',
            CountryISO.Macau,
            '853'
        ],
        [
            'Macedonia (FYROM) (Македонија)',
            CountryISO.Macedonia,
            '389'
        ],
        [
            'Madagascar (Madagasikara)',
            CountryISO.Madagascar,
            '261'
        ],
        [
            'Malawi',
            CountryISO.Malawi,
            '265'
        ],
        [
            'Malaysia',
            CountryISO.Malaysia,
            '60'
        ],
        [
            'Maldives',
            CountryISO.Maldives,
            '960'
        ],
        [
            'Mali',
            CountryISO.Mali,
            '223'
        ],
        [
            'Malta',
            CountryISO.Malta,
            '356'
        ],
        [
            'Marshall Islands',
            CountryISO.MarshallIslands,
            '692'
        ],
        [
            'Martinique',
            CountryISO.Martinique,
            '596'
        ],
        [
            'Mauritania (‫موريتانيا‬‎)',
            CountryISO.Mauritania,
            '222'
        ],
        [
            'Mauritius (Moris)',
            CountryISO.Mauritius,
            '230'
        ],
        [
            'Mayotte',
            CountryISO.Mayotte,
            '262',
            1
        ],
        [
            'Mexico (México)',
            CountryISO.Mexico,
            '52'
        ],
        [
            'Micronesia',
            CountryISO.Micronesia,
            '691'
        ],
        [
            'Moldova (Republica Moldova)',
            CountryISO.Moldova,
            '373'
        ],
        [
            'Monaco',
            CountryISO.Monaco,
            '377'
        ],
        [
            'Mongolia (Монгол)',
            CountryISO.Mongolia,
            '976'
        ],
        [
            'Montenegro (Crna Gora)',
            CountryISO.Montenegro,
            '382'
        ],
        [
            'Montserrat',
            'ms',
            '1',
            1,
            [
                '664',
            ]
        ],
        [
            'Morocco (‫المغرب‬‎)',
            CountryISO.Morocco,
            '212',
            0
        ],
        [
            'Mozambique (Moçambique)',
            CountryISO.Mozambique,
            '258'
        ],
        [
            'Myanmar (Burma) (မြန်မာ)',
            CountryISO.Myanmar,
            '95'
        ],
        [
            'Namibia (Namibië)',
            CountryISO.Namibia,
            '264'
        ],
        [
            'Nauru',
            CountryISO.Nauru,
            '674'
        ],
        [
            'Nepal (नेपाल)',
            CountryISO.Nepal,
            '977'
        ],
        [
            'Netherlands (Nederland)',
            CountryISO.Netherlands,
            '31'
        ],
        [
            'New Caledonia (Nouvelle-Calédonie)',
            CountryISO.NewCaledonia,
            '687'
        ],
        [
            'New Zealand',
            CountryISO.NewZealand,
            '64'
        ],
        [
            'Nicaragua',
            CountryISO.Nicaragua,
            '505'
        ],
        [
            'Niger (Nijar)',
            CountryISO.Niger,
            '227'
        ],
        [
            'Nigeria',
            CountryISO.Nigeria,
            '234'
        ],
        [
            'Niue',
            CountryISO.Niue,
            '683'
        ],
        [
            'Norfolk Island',
            CountryISO.NorfolkIsland,
            '672'
        ],
        [
            'North Korea (조선 민주주의 인민 공화국)',
            CountryISO.NorthKorea,
            '850'
        ],
        [
            'Northern Mariana Islands',
            CountryISO.NorthernMarianaIslands,
            '1670'
        ],
        [
            'Norway (Norge)',
            CountryISO.Norway,
            '47',
            0
        ],
        [
            'Oman (‫عُمان‬‎)',
            CountryISO.Oman,
            '968'
        ],
        [
            'Pakistan (‫پاکستان‬‎)',
            CountryISO.Pakistan,
            '92'
        ],
        [
            'Palau',
            CountryISO.Palau,
            '680'
        ],
        [
            'Palestine (‫فلسطين‬‎)',
            CountryISO.Palestine,
            '970'
        ],
        [
            'Panama (Panamá)',
            CountryISO.Panama,
            '507'
        ],
        [
            'Papua New Guinea',
            CountryISO.PapuaNewGuinea,
            '675'
        ],
        [
            'Paraguay',
            CountryISO.Paraguay,
            '595'
        ],
        [
            'Peru (Perú)',
            CountryISO.Peru,
            '51'
        ],
        [
            'Philippines',
            CountryISO.Philippines,
            '63'
        ],
        [
            'Poland (Polska)',
            CountryISO.Poland,
            '48'
        ],
        [
            'Portugal',
            CountryISO.Portugal,
            '351'
        ],
        [
            'Puerto Rico',
            CountryISO.PuertoRico,
            '1',
            3,
            ['787', '939']
        ],
        [
            'Qatar (‫قطر‬‎)',
            CountryISO.Qatar,
            '974'
        ],
        [
            'Réunion (La Réunion)',
            CountryISO.Réunion,
            '262',
            0
        ],
        [
            'Romania (România)',
            CountryISO.Romania,
            '40'
        ],
        [
            'Russia (Россия)',
            CountryISO.Russia,
            '7',
            0
        ],
        [
            'Rwanda',
            CountryISO.Rwanda,
            '250'
        ],
        [
            'Saint Barthélemy (Saint-Barthélemy)',
            CountryISO.SaintBarthélemy,
            '590',
            1
        ],
        [
            'Saint Helena',
            CountryISO.SaintHelena,
            '290'
        ],
        [
            'Saint Kitts and Nevis',
            CountryISO.SaintKittsAndNevis,
            '1869'
        ],
        [
            'Saint Lucia',
            'lc',
            '1',
            1,
            [
                '758',
            ]
        ],
        [
            'Saint Martin (Saint-Martin (partie française))',
            CountryISO.SaintMartin,
            '590',
            2
        ],
        [
            'Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)',
            CountryISO.SaintPierreAndMiquelon,
            '508'
        ],
        [
            'Saint Vincent and the Grenadines',
            'vc',
            '1',
            1,
            [
                '784',
            ]
        ],
        [
            'Samoa',
            CountryISO.Samoa,
            '685'
        ],
        [
            'San Marino',
            CountryISO.SanMarino,
            '378'
        ],
        [
            'São Tomé and Príncipe (São Tomé e Príncipe)',
            CountryISO.SãoToméAndPríncipe,
            '239'
        ],
        [
            'Saudi Arabia (‫المملكة العربية السعودية‬‎)',
            CountryISO.SaudiArabia,
            '966'
        ],
        [
            'Senegal (Sénégal)',
            CountryISO.Senegal,
            '221'
        ],
        [
            'Serbia (Србија)',
            CountryISO.Serbia,
            '381'
        ],
        [
            'Seychelles',
            CountryISO.Seychelles,
            '248'
        ],
        [
            'Sierra Leone',
            CountryISO.SierraLeone,
            '232'
        ],
        [
            'Singapore',
            CountryISO.Singapore,
            '65'
        ],
        [
            'Sint Maarten',
            'sx',
            '1',
            1,
            [
                '721',
            ]
        ],
        [
            'Slovakia (Slovensko)',
            CountryISO.Slovakia,
            '421'
        ],
        [
            'Slovenia (Slovenija)',
            CountryISO.Slovenia,
            '386'
        ],
        [
            'Solomon Islands',
            CountryISO.SolomonIslands,
            '677'
        ],
        [
            'Somalia (Soomaaliya)',
            CountryISO.Somalia,
            '252'
        ],
        [
            'South Africa',
            CountryISO.SouthAfrica,
            '27'
        ],
        [
            'South Korea (대한민국)',
            CountryISO.SouthKorea,
            '82'
        ],
        [
            'South Sudan (‫جنوب السودان‬‎)',
            CountryISO.SouthSudan,
            '211'
        ],
        [
            'Spain (España)',
            CountryISO.Spain,
            '34'
        ],
        [
            'Sri Lanka (ශ්‍රී ලංකාව)',
            CountryISO.SriLanka,
            '94'
        ],
        [
            'Sudan (‫السودان‬‎)',
            CountryISO.Sudan,
            '249'
        ],
        [
            'Suriname',
            CountryISO.Suriname,
            '597'
        ],
        [
            'Svalbard and Jan Mayen',
            CountryISO.SvalbardAndJanMayen,
            '47',
            1
        ],
        [
            'Swaziland',
            CountryISO.Swaziland,
            '268'
        ],
        [
            'Sweden (Sverige)',
            CountryISO.Sweden,
            '46'
        ],
        [
            'Switzerland (Schweiz)',
            CountryISO.Switzerland,
            '41'
        ],
        [
            'Syria (‫سوريا‬‎)',
            CountryISO.Syria,
            '963'
        ],
        [
            'Taiwan (台灣)',
            CountryISO.Taiwan,
            '886'
        ],
        [
            'Tajikistan',
            CountryISO.Tajikistan,
            '992'
        ],
        [
            'Tanzania',
            CountryISO.Tanzania,
            '255'
        ],
        [
            'Thailand (ไทย)',
            CountryISO.Thailand,
            '66'
        ],
        [
            'Timor-Leste',
            CountryISO.TimorLeste,
            '670'
        ],
        [
            'Togo',
            CountryISO.Togo,
            '228'
        ],
        [
            'Tokelau',
            CountryISO.Tokelau,
            '690'
        ],
        [
            'Tonga',
            CountryISO.Tonga,
            '676'
        ],
        [
            'Trinidad and Tobago',
            'tt',
            '1',
            1,
            [
                '868',
            ]
        ],
        [
            'Tunisia (‫تونس‬‎)',
            CountryISO.Tunisia,
            '216'
        ],
        [
            'Turkey (Türkiye)',
            CountryISO.Turkey,
            '90'
        ],
        [
            'Turkmenistan',
            CountryISO.Turkmenistan,
            '993'
        ],
        [
            'Turks and Caicos Islands',
            CountryISO.TurksAndCaicosIslands,
            '1649'
        ],
        [
            'Tuvalu',
            CountryISO.Tuvalu,
            '688'
        ],
        [
            'U.S. Virgin Islands',
            'vi',
            '1',
            1,
            [
                '340',
            ]
        ],
        [
            'Uganda',
            CountryISO.Uganda,
            '256'
        ],
        [
            'Ukraine (Україна)',
            CountryISO.Ukraine,
            '380'
        ],
        [
            'United Arab Emirates (‫الإمارات العربية المتحدة‬‎)',
            CountryISO.UnitedArabEmirates,
            '971'
        ],
        [
            'United Kingdom',
            CountryISO.UnitedKingdom,
            '44',
            0
        ],
        [
            'United States',
            CountryISO.UnitedStates,
            '1',
            0
        ],
        [
            'Uruguay',
            CountryISO.Uruguay,
            '598'
        ],
        [
            'Uzbekistan (Oʻzbekiston)',
            CountryISO.Uzbekistan,
            '998'
        ],
        [
            'Vanuatu',
            CountryISO.Vanuatu,
            '678'
        ],
        [
            'Vatican City (Città del Vaticano)',
            CountryISO.VaticanCity,
            '39',
            1
        ],
        [
            'Venezuela',
            CountryISO.Venezuela,
            '58'
        ],
        [
            'Vietnam (Việt Nam)',
            CountryISO.Vietnam,
            '84'
        ],
        [
            'Wallis and Futuna',
            CountryISO.WallisAndFutuna,
            '681'
        ],
        [
            'Western Sahara (‫الصحراء الغربية‬‎)',
            CountryISO.WesternSahara,
            '212',
            1
        ],
        [
            'Yemen (‫اليمن‬‎)',
            CountryISO.Yemen,
            '967'
        ],
        [
            'Zambia',
            CountryISO.Zambia,
            '260'
        ],
        [
            'Zimbabwe',
            CountryISO.Zimbabwe,
            '263'
        ],
        [
            'Åland Islands',
            CountryISO.ÅlandIslands,
            '358',
            1
        ]
    ];
    static ɵfac = function CountryCode_Factory(t) { return new (t || CountryCode)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CountryCode, factory: CountryCode.ɵfac });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CountryCode, [{
        type: Injectable
    }], null, null); })();

var SearchCountryField;
(function (SearchCountryField) {
    SearchCountryField["DialCode"] = "dialCode";
    SearchCountryField["Iso2"] = "iso2";
    SearchCountryField["Name"] = "name";
    SearchCountryField["All"] = "all";
})(SearchCountryField || (SearchCountryField = {}));

/*
We use "control: any" instead of "control: FormControl" to silence:
"Property 'nativeElement' does not exist on type 'FormControl'".
This happens because I've expanded control with nativeElement via
'NativeElementInjectorDirective' to get an access to the element.
More about this approach and reasons for this:
https://github.com/angular/angular/issues/18025
https://stackoverflow.com/a/54075119/1617590
*/
const phoneNumberValidator = (control) => {
    if (!control.value) {
        return;
    }
    // Find <input> inside injected nativeElement and get its "id".
    const el = control.nativeElement;
    const inputBox = el
        ? el.querySelector('input[type="tel"]')
        : undefined;
    if (inputBox) {
        const id = inputBox.id;
        const isCheckValidation = inputBox.getAttribute('validation');
        if (isCheckValidation === 'true') {
            const isRequired = control.errors && control.errors.required === true;
            const error = { validatePhoneNumber: { valid: false } };
            inputBox.setCustomValidity('Invalid field.');
            let number;
            try {
                number = lpn.PhoneNumberUtil.getInstance().parse(control.value.number, control.value.countryCode);
            }
            catch (e) {
                if (isRequired) {
                    return error;
                }
                else {
                    inputBox.setCustomValidity('');
                }
            }
            if (control.value) {
                // @ts-ignore
                if (!number) {
                    return error;
                }
                else {
                    if (!lpn.PhoneNumberUtil.getInstance().isValidNumberForRegion(number, control.value.countryCode)) {
                        return error;
                    }
                    else {
                        inputBox.setCustomValidity('');
                    }
                }
            }
        }
        else if (isCheckValidation === 'false') {
            inputBox.setCustomValidity('');
            control.clearValidators();
        }
    }
    return;
};

var PhoneNumberFormat;
(function (PhoneNumberFormat) {
    PhoneNumberFormat["International"] = "INTERNATIONAL";
    PhoneNumberFormat["National"] = "NATIONAL";
})(PhoneNumberFormat || (PhoneNumberFormat = {}));

/*
"Property 'nativeElement' does not exist on type 'FormControl'".
'NativeElementInjectorDirective' injects nativeElement to each control,
so we can access it from inside validator for example.
More about this approach and reasons for this:
https://github.com/angular/angular/issues/18025
https://stackoverflow.com/a/54075119/1617590
*/
class NativeElementInjectorDirective {
    controlDir;
    host;
    constructor(controlDir, host) {
        this.controlDir = controlDir;
        this.host = host;
    }
    ngOnInit() {
        if (this.controlDir.control) {
            // @ts-ignore
            this.controlDir.control['nativeElement'] = this.host.nativeElement;
        }
    }
    static ɵfac = function NativeElementInjectorDirective_Factory(t) { return new (t || NativeElementInjectorDirective)(i0.ɵɵdirectiveInject(i3.NgControl), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: NativeElementInjectorDirective, selectors: [["", "ngModel", ""], ["", "formControl", ""], ["", "formControlName", ""]] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NativeElementInjectorDirective, [{
        type: Directive,
        args: [{
                // tslint:disable-next-line: directive-selector
                selector: '[ngModel], [formControl], [formControlName]',
            }]
    }], function () { return [{ type: i3.NgControl }, { type: i0.ElementRef }]; }, null); })();

const _c0 = ["countryList"];
function VxITelComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("+", ctx_r0.selectedCountry.dialCode, "");
} }
function VxITelComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17)(1, "input", 18);
    i0.ɵɵlistener("ngModelChange", function VxITelComponent_div_6_div_1_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r8.countrySearchText = $event); })("keyup", function VxITelComponent_div_6_div_1_Template_input_keyup_1_listener() { i0.ɵɵrestoreView(_r9); const ctx_r10 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r10.searchCountry()); })("click", function VxITelComponent_div_6_div_1_Template_input_click_1_listener($event) { return $event.stopPropagation(); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r3.countrySearchText)("placeholder", ctx_r3.searchCountryPlaceholder);
} }
function VxITelComponent_div_6_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 19);
    i0.ɵɵlistener("click", function VxITelComponent_div_6_li_4_Template_li_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r14); const country_r12 = restoredCtx.$implicit; const ctx_r13 = i0.ɵɵnextContext(2); const _r2 = i0.ɵɵreference(8); return i0.ɵɵresetView(ctx_r13.onCountrySelect(country_r12, _r2)); });
    i0.ɵɵelementStart(1, "div", 20);
    i0.ɵɵelement(2, "div", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 21);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 22);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const country_r12 = ctx.$implicit;
    i0.ɵɵproperty("id", country_r12.htmlId + "-preferred");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", country_r12.flagClass);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(country_r12.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("+", country_r12.dialCode, "");
} }
function VxITelComponent_div_6_li_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "li", 23);
} }
function VxITelComponent_div_6_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 24);
    i0.ɵɵlistener("click", function VxITelComponent_div_6_li_6_Template_li_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r17); const country_r15 = restoredCtx.$implicit; const ctx_r16 = i0.ɵɵnextContext(2); const _r2 = i0.ɵɵreference(8); return i0.ɵɵresetView(ctx_r16.onCountrySelect(country_r15, _r2)); });
    i0.ɵɵelementStart(1, "div", 20);
    i0.ɵɵelement(2, "div", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 21);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 22);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const country_r15 = ctx.$implicit;
    i0.ɵɵproperty("id", country_r15.htmlId);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", country_r15.flagClass);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(country_r15.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("+", country_r15.dialCode, "");
} }
function VxITelComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtemplate(1, VxITelComponent_div_6_div_1_Template, 2, 2, "div", 11);
    i0.ɵɵelementStart(2, "ul", 12, 13);
    i0.ɵɵtemplate(4, VxITelComponent_div_6_li_4_Template, 7, 4, "li", 14);
    i0.ɵɵtemplate(5, VxITelComponent_div_6_li_5_Template, 1, 0, "li", 15);
    i0.ɵɵtemplate(6, VxITelComponent_div_6_li_6_Template, 7, 4, "li", 16);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.searchCountryFlag && ctx_r1.searchCountryField);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r1.preferredCountriesInDropDown);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.preferredCountriesInDropDown == null ? null : ctx_r1.preferredCountriesInDropDown.length);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.allCountries);
} }
const _c1 = function (a0) { return { "disabled": a0 }; };
class VxITelComponent {
    countryCodeData;
    value = '';
    preferredCountries = [];
    enablePlaceholder = true;
    customPlaceholder;
    numberFormat = PhoneNumberFormat.International;
    cssClass = 'form-control';
    onlyCountries = [];
    enableAutoCountrySelect = true;
    searchCountryFlag = false;
    searchCountryField = [SearchCountryField.All];
    searchCountryPlaceholder = 'Search Country';
    maxLength;
    selectFirstCountry = true;
    selectedCountryISO;
    phoneValidation = true;
    inputId = 'phone';
    separateDialCode = false;
    separateDialCodeClass;
    countryChange = new EventEmitter();
    selectedCountry = {
        areaCodes: undefined,
        dialCode: '',
        htmlId: '',
        flagClass: '',
        iso2: '',
        name: '',
        placeHolder: '',
        priority: 0,
    };
    phoneNumber = '';
    allCountries = [];
    preferredCountriesInDropDown = [];
    // Has to be 'any' to prevent a need to install @types/google-libphonenumber by the package user...
    phoneUtil = lpn.PhoneNumberUtil.getInstance();
    disabled = false;
    errors = ['Phone number is required.'];
    countrySearchText = '';
    countryList;
    onTouched = () => { };
    propagateChange = (_) => { };
    constructor(countryCodeData) {
        this.countryCodeData = countryCodeData;
        // If this is not set, ngx-bootstrap will try to use the bs3 CSS (which is not what we've embedded) and will
        // Add the wrong classes and such
        setTheme('bs4');
    }
    ngOnInit() {
        this.init();
    }
    ngOnChanges(changes) {
        const selectedISO = changes['selectedCountryISO'];
        if (this.allCountries &&
            selectedISO &&
            selectedISO.currentValue !== selectedISO.previousValue) {
            this.updateSelectedCountry();
        }
        if (changes['preferredCountries']) {
            this.updatePreferredCountries();
        }
        this.checkSeparateDialCodeStyle();
    }
    /*
          This is a wrapper method to avoid calling this.ngOnInit() in writeValue().
          Ref: http://codelyzer.com/rules/no-life-cycle-call/
      */
    init() {
        this.fetchCountryData();
        if (this.preferredCountries.length) {
            this.updatePreferredCountries();
        }
        if (this.onlyCountries.length) {
            this.allCountries = this.allCountries.filter((c) => this.onlyCountries.includes(c.iso2));
        }
        if (this.selectFirstCountry) {
            if (this.preferredCountriesInDropDown.length) {
                this.setSelectedCountry(this.preferredCountriesInDropDown[0]);
            }
            else {
                this.setSelectedCountry(this.allCountries[0]);
            }
        }
        this.updateSelectedCountry();
        this.checkSeparateDialCodeStyle();
    }
    setSelectedCountry(country) {
        this.selectedCountry = country;
        this.countryChange.emit(country);
    }
    /**
     * Search country based on country name, iso2, dialCode or all of them.
     */
    searchCountry() {
        if (!this.countrySearchText) {
            this.countryList.nativeElement
                .querySelector('.iti__country-list li')
                .scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'nearest',
            });
            return;
        }
        const countrySearchTextLower = this.countrySearchText.toLowerCase();
        // @ts-ignore
        const country = this.allCountries.filter((c) => {
            if (this.searchCountryField.indexOf(SearchCountryField.All) > -1) {
                // Search in all fields
                if (c.iso2.toLowerCase().startsWith(countrySearchTextLower)) {
                    return c;
                }
                if (c.name.toLowerCase().startsWith(countrySearchTextLower)) {
                    return c;
                }
                if (c.dialCode.startsWith(this.countrySearchText)) {
                    return c;
                }
            }
            else {
                // Or search by specific SearchCountryField(s)
                if (this.searchCountryField.indexOf(SearchCountryField.Iso2) > -1) {
                    if (c.iso2.toLowerCase().startsWith(countrySearchTextLower)) {
                        return c;
                    }
                }
                if (this.searchCountryField.indexOf(SearchCountryField.Name) > -1) {
                    if (c.name.toLowerCase().startsWith(countrySearchTextLower)) {
                        return c;
                    }
                }
                if (this.searchCountryField.indexOf(SearchCountryField.DialCode) > -1) {
                    if (c.dialCode.startsWith(this.countrySearchText)) {
                        return c;
                    }
                }
            }
        });
        if (country.length > 0) {
            const el = this.countryList.nativeElement.querySelector('#' + country[0].htmlId);
            if (el) {
                el.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'nearest',
                });
            }
        }
        this.checkSeparateDialCodeStyle();
    }
    onPhoneNumberChange() {
        let countryCode;
        // Handle the case where the user sets the value programatically based on a persisted ChangeData obj.
        if (this.phoneNumber && typeof this.phoneNumber === 'object') {
            const numberObj = this.phoneNumber;
            this.phoneNumber = numberObj.number;
            countryCode = numberObj.countryCode;
        }
        this.value = this.phoneNumber;
        countryCode = countryCode || this.selectedCountry.iso2;
        // @ts-ignore
        const number = this.getParsedNumber(this.phoneNumber, countryCode);
        // auto select country based on the extension (and areaCode if needed) (e.g select Canada if number starts with +1 416)
        if (this.enableAutoCountrySelect) {
            countryCode =
                number && number.getCountryCode()
                    ? // @ts-ignore
                        this.getCountryIsoCode(number.getCountryCode(), number)
                    : this.selectedCountry.iso2;
            if (countryCode && countryCode !== this.selectedCountry.iso2) {
                const newCountry = this.allCountries
                    .sort((a, b) => {
                    return a.priority - b.priority;
                })
                    .find((c) => c.iso2 === countryCode);
                if (newCountry) {
                    this.selectedCountry = newCountry;
                }
            }
        }
        countryCode = countryCode ? countryCode : this.selectedCountry.iso2;
        this.checkSeparateDialCodeStyle();
        if (!this.value) {
            // Reason: avoid https://stackoverflow.com/a/54358133/1617590
            // tslint:disable-next-line: no-null-keyword
            // @ts-ignore
            this.propagateChange(null);
        }
        else {
            const intlNo = number
                ? this.phoneUtil.format(number, lpn.PhoneNumberFormat.INTERNATIONAL)
                : '';
            // parse phoneNumber if separate dial code is needed
            if (this.separateDialCode && intlNo) {
                this.value = this.removeDialCode(intlNo);
            }
            this.propagateChange({
                number: this.value,
                internationalNumber: intlNo,
                nationalNumber: number
                    ? this.phoneUtil.format(number, lpn.PhoneNumberFormat.NATIONAL)
                    : '',
                e164Number: number
                    ? this.phoneUtil.format(number, lpn.PhoneNumberFormat.E164)
                    : '',
                countryCode: countryCode.toUpperCase(),
                dialCode: '+' + this.selectedCountry.dialCode,
            });
        }
    }
    onCountrySelect(country, el) {
        this.setSelectedCountry(country);
        this.checkSeparateDialCodeStyle();
        if (this.phoneNumber && this.phoneNumber.length > 0) {
            this.value = this.phoneNumber;
            const number = this.getParsedNumber(this.phoneNumber, this.selectedCountry.iso2);
            const intlNo = number
                ? this.phoneUtil.format(number, lpn.PhoneNumberFormat.INTERNATIONAL)
                : '';
            // parse phoneNumber if separate dial code is needed
            if (this.separateDialCode && intlNo) {
                this.value = this.removeDialCode(intlNo);
            }
            this.propagateChange({
                number: this.value,
                internationalNumber: intlNo,
                nationalNumber: number
                    ? this.phoneUtil.format(number, lpn.PhoneNumberFormat.NATIONAL)
                    : '',
                e164Number: number
                    ? this.phoneUtil.format(number, lpn.PhoneNumberFormat.E164)
                    : '',
                countryCode: this.selectedCountry.iso2.toUpperCase(),
                dialCode: '+' + this.selectedCountry.dialCode,
            });
        }
        else {
            // Reason: avoid https://stackoverflow.com/a/54358133/1617590
            // tslint:disable-next-line: no-null-keyword
            // @ts-ignore
            this.propagateChange(null);
        }
        el.focus();
    }
    onInputKeyPress(event) {
        const allowedChars = /[0-9\+\-\(\)\ ]/;
        const allowedCtrlChars = /[axcv]/; // Allows copy-pasting
        const allowedOtherKeys = [
            'ArrowLeft',
            'ArrowUp',
            'ArrowRight',
            'ArrowDown',
            'Home',
            'End',
            'Insert',
            'Delete',
            'Backspace',
        ];
        if (!allowedChars.test(event.key) &&
            !(event.ctrlKey && allowedCtrlChars.test(event.key)) &&
            !allowedOtherKeys.includes(event.key)) {
            event.preventDefault();
        }
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    writeValue(obj) {
        if (obj === undefined) {
            this.init();
        }
        this.phoneNumber = obj;
        setTimeout(() => {
            this.onPhoneNumberChange();
        }, 1);
    }
    resolvePlaceholder() {
        let placeholder = '';
        if (this.customPlaceholder) {
            placeholder = this.customPlaceholder;
        }
        else if (this.selectedCountry.placeHolder) {
            placeholder = this.selectedCountry.placeHolder;
            if (this.separateDialCode) {
                placeholder = this.removeDialCode(placeholder);
            }
        }
        return placeholder;
    }
    /* --------------------------------- Helpers -------------------------------- */
    /**
     * Returns parse PhoneNumber object.
     * @param phoneNumber string
     * @param countryCode string
     */
    getParsedNumber(phoneNumber, countryCode) {
        let number;
        try {
            number = this.phoneUtil.parse(phoneNumber, countryCode.toUpperCase());
        }
        catch (e) { }
        // @ts-ignore
        return number;
    }
    /**
     * Adjusts input alignment based on the dial code presentation style.
     */
    checkSeparateDialCodeStyle() {
        if (this.separateDialCode && this.selectedCountry) {
            const cntryCd = this.selectedCountry.dialCode;
            this.separateDialCodeClass =
                'separate-dial-code iti-sdc-' + (cntryCd.length + 1);
        }
        else {
            this.separateDialCodeClass = '';
        }
    }
    /**
     * Cleans dialcode from phone number string.
     * @param phoneNumber string
     */
    removeDialCode(phoneNumber) {
        const number = this.getParsedNumber(phoneNumber, this.selectedCountry.iso2);
        phoneNumber = this.phoneUtil.format(number, lpn.PhoneNumberFormat[this.numberFormat]);
        if (phoneNumber.startsWith('+') && this.separateDialCode) {
            phoneNumber = phoneNumber.substr(phoneNumber.indexOf(' ') + 1);
        }
        return phoneNumber;
    }
    /**
     * Sifts through all countries and returns iso code of the primary country
     * based on the number provided.
     * @param countryCode country code in number format
     * @param number PhoneNumber object
     */
    getCountryIsoCode(countryCode, number) {
        // Will use this to match area code from the first numbers
        // @ts-ignore
        const rawNumber = number['values_']['2'].toString();
        // List of all countries with countryCode (can be more than one. e.x. US, CA, DO, PR all have +1 countryCode)
        const countries = this.allCountries.filter((c) => c.dialCode === countryCode.toString());
        // Main country is the country, which has no areaCodes specified in country-code.ts file.
        const mainCountry = countries.find((c) => c.areaCodes === undefined);
        // Secondary countries are all countries, which have areaCodes specified in country-code.ts file.
        const secondaryCountries = countries.filter((c) => c.areaCodes !== undefined);
        let matchedCountry = mainCountry ? mainCountry.iso2 : undefined;
        /*
                Iterate over each secondary country and check if nationalNumber starts with any of areaCodes available.
                If no matches found, fallback to the main country.
            */
        secondaryCountries.forEach((country) => {
            // @ts-ignore
            country.areaCodes.forEach((areaCode) => {
                if (rawNumber.startsWith(areaCode)) {
                    matchedCountry = country.iso2;
                }
            });
        });
        return matchedCountry;
    }
    /**
     * Gets formatted example phone number from phoneUtil.
     * @param countryCode string
     */
    getPhoneNumberPlaceHolder(countryCode) {
        try {
            return this.phoneUtil.format(this.phoneUtil.getExampleNumber(countryCode), lpn.PhoneNumberFormat[this.numberFormat]);
        }
        catch (e) {
            // @ts-ignore
            return e;
        }
    }
    /**
     * Clearing the list to avoid duplicates (https://github.com/guillermodelagala/vx-itel/issues/248)
     */
    fetchCountryData() {
        this.allCountries = [];
        this.countryCodeData.allCountries.forEach((c) => {
            const country = {
                name: c[0].toString(),
                iso2: c[1].toString(),
                dialCode: c[2].toString(),
                priority: +c[3] || 0,
                areaCodes: c[4] || undefined,
                htmlId: `iti-0__item-${c[1].toString()}`,
                flagClass: `iti__${c[1].toString().toLocaleLowerCase()}`,
                placeHolder: '',
            };
            if (this.enablePlaceholder) {
                country.placeHolder = this.getPhoneNumberPlaceHolder(country.iso2.toUpperCase());
            }
            this.allCountries.push(country);
        });
    }
    /**
     * Populates preferredCountriesInDropDown with prefferred countries.
     */
    updatePreferredCountries() {
        if (this.preferredCountries.length) {
            this.preferredCountriesInDropDown = [];
            this.preferredCountries.forEach((iso2) => {
                const preferredCountry = this.allCountries.filter((c) => {
                    return c.iso2 === iso2;
                });
                this.preferredCountriesInDropDown.push(preferredCountry[0]);
            });
        }
    }
    /**
     * Updates selectedCountry.
     */
    updateSelectedCountry() {
        if (this.selectedCountryISO) {
            // @ts-ignore
            this.selectedCountry = this.allCountries.find((c) => {
                return c.iso2.toLowerCase() === this.selectedCountryISO.toLowerCase();
            });
            if (this.selectedCountry) {
                if (this.phoneNumber) {
                    this.onPhoneNumberChange();
                }
                else {
                    // Reason: avoid https://stackoverflow.com/a/54358133/1617590
                    // tslint:disable-next-line: no-null-keyword
                    // @ts-ignore
                    this.propagateChange(null);
                }
            }
        }
    }
    static ɵfac = function VxITelComponent_Factory(t) { return new (t || VxITelComponent)(i0.ɵɵdirectiveInject(CountryCode)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: VxITelComponent, selectors: [["vx-itel"]], viewQuery: function VxITelComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.countryList = _t.first);
        } }, inputs: { value: "value", preferredCountries: "preferredCountries", enablePlaceholder: "enablePlaceholder", customPlaceholder: "customPlaceholder", numberFormat: "numberFormat", cssClass: "cssClass", onlyCountries: "onlyCountries", enableAutoCountrySelect: "enableAutoCountrySelect", searchCountryFlag: "searchCountryFlag", searchCountryField: "searchCountryField", searchCountryPlaceholder: "searchCountryPlaceholder", maxLength: "maxLength", selectFirstCountry: "selectFirstCountry", selectedCountryISO: "selectedCountryISO", phoneValidation: "phoneValidation", inputId: "inputId", separateDialCode: "separateDialCode" }, outputs: { countryChange: "countryChange" }, features: [i0.ɵɵProvidersFeature([
                CountryCode,
                {
                    provide: NG_VALUE_ACCESSOR,
                    // tslint:disable-next-line:no-forward-ref
                    useExisting: forwardRef(() => VxITelComponent),
                    multi: true,
                },
                {
                    provide: NG_VALIDATORS,
                    useValue: phoneNumberValidator,
                    multi: true,
                },
            ]), i0.ɵɵNgOnChangesFeature], decls: 9, vars: 14, consts: [[1, "iti", "iti--allow-dropdown", 3, "ngClass"], ["dropdown", "", 1, "iti__flag-container", 3, "ngClass", "isDisabled"], ["dropdownToggle", "", 1, "iti__selected-flag", "dropdown-toggle"], [1, "iti__flag", 3, "ngClass"], ["class", "selected-dial-code", 4, "ngIf"], [1, "iti__arrow"], ["class", "dropdown-menu country-dropdown", 4, "dropdownMenu"], ["type", "tel", "autocomplete", "off", 3, "id", "ngClass", "ngModel", "disabled", "placeholder", "blur", "keypress", "ngModelChange"], ["focusable", ""], [1, "selected-dial-code"], [1, "dropdown-menu", "country-dropdown"], ["class", "search-container", 4, "ngIf"], [1, "iti__country-list"], ["countryList", ""], ["class", "iti__country iti__preferred", 3, "id", "click", 4, "ngFor", "ngForOf"], ["class", "iti__divider", 4, "ngIf"], ["class", "iti__country iti__standard", 3, "id", "click", 4, "ngFor", "ngForOf"], [1, "search-container"], ["id", "country-search-box", "autofocus", "", 3, "ngModel", "placeholder", "ngModelChange", "keyup", "click"], [1, "iti__country", "iti__preferred", 3, "id", "click"], [1, "iti__flag-box"], [1, "iti__country-name"], [1, "iti__dial-code"], [1, "iti__divider"], [1, "iti__country", "iti__standard", 3, "id", "click"]], template: function VxITelComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
            i0.ɵɵelement(3, "div", 3);
            i0.ɵɵtemplate(4, VxITelComponent_div_4_Template, 2, 1, "div", 4);
            i0.ɵɵelement(5, "div", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(6, VxITelComponent_div_6_Template, 7, 4, "div", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "input", 7, 8);
            i0.ɵɵlistener("blur", function VxITelComponent_Template_input_blur_7_listener() { return ctx.onTouched(); })("keypress", function VxITelComponent_Template_input_keypress_7_listener($event) { return ctx.onInputKeyPress($event); })("ngModelChange", function VxITelComponent_Template_input_ngModelChange_7_listener($event) { return ctx.phoneNumber = $event; })("ngModelChange", function VxITelComponent_Template_input_ngModelChange_7_listener() { return ctx.onPhoneNumberChange(); });
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", ctx.separateDialCodeClass);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(12, _c1, ctx.disabled))("isDisabled", ctx.disabled);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", (ctx.selectedCountry == null ? null : ctx.selectedCountry.flagClass) || "");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.separateDialCode);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("id", ctx.inputId)("ngClass", ctx.cssClass)("ngModel", ctx.phoneNumber)("disabled", ctx.disabled)("placeholder", ctx.resolvePlaceholder());
            i0.ɵɵattribute("maxLength", ctx.maxLength)("validation", ctx.phoneValidation);
        } }, dependencies: [i2.NgClass, i2.NgForOf, i2.NgIf, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel, i4.BsDropdownMenuDirective, i4.BsDropdownToggleDirective, i4.BsDropdownDirective, NativeElementInjectorDirective], styles: [".dropup[_ngcontent-%COMP%], .dropright[_ngcontent-%COMP%], .dropdown[_ngcontent-%COMP%], .dropleft[_ngcontent-%COMP%]{position:relative}.dropdown-toggle[_ngcontent-%COMP%]{white-space:nowrap}.dropdown-toggle[_ngcontent-%COMP%]:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.dropdown-toggle[_ngcontent-%COMP%]:empty:after{margin-left:0}.dropdown-menu[_ngcontent-%COMP%]{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:10rem;padding:.5rem 0;margin:.125rem 0 0;font-size:1rem;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.dropdown-menu-left[_ngcontent-%COMP%]{right:auto;left:0}.dropdown-menu-right[_ngcontent-%COMP%]{right:0;left:auto}@media (min-width: 576px){.dropdown-menu-sm-left[_ngcontent-%COMP%]{right:auto;left:0}.dropdown-menu-sm-right[_ngcontent-%COMP%]{right:0;left:auto}}@media (min-width: 768px){.dropdown-menu-md-left[_ngcontent-%COMP%]{right:auto;left:0}.dropdown-menu-md-right[_ngcontent-%COMP%]{right:0;left:auto}}@media (min-width: 992px){.dropdown-menu-lg-left[_ngcontent-%COMP%]{right:auto;left:0}.dropdown-menu-lg-right[_ngcontent-%COMP%]{right:0;left:auto}}@media (min-width: 1200px){.dropdown-menu-xl-left[_ngcontent-%COMP%]{right:auto;left:0}.dropdown-menu-xl-right[_ngcontent-%COMP%]{right:0;left:auto}}.dropup[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{top:auto;bottom:100%;margin-top:0;margin-bottom:.125rem}.dropup[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:0;border-right:.3em solid transparent;border-bottom:.3em solid;border-left:.3em solid transparent}.dropup[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:empty:after{margin-left:0}.dropright[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{top:0;right:auto;left:100%;margin-top:0;margin-left:.125rem}.dropright[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:0;border-bottom:.3em solid transparent;border-left:.3em solid}.dropright[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:empty:after{margin-left:0}.dropright[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:after{vertical-align:0}.dropleft[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{top:0;right:100%;left:auto;margin-top:0;margin-right:.125rem}.dropleft[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\"}.dropleft[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:after{display:none}.dropleft[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:before{display:inline-block;margin-right:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:.3em solid;border-bottom:.3em solid transparent}.dropleft[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:empty:after{margin-left:0}.dropleft[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:before{vertical-align:0}.dropdown-menu[x-placement^=top][_ngcontent-%COMP%], .dropdown-menu[x-placement^=right][_ngcontent-%COMP%], .dropdown-menu[x-placement^=bottom][_ngcontent-%COMP%], .dropdown-menu[x-placement^=left][_ngcontent-%COMP%]{right:auto;bottom:auto}.dropdown-divider[_ngcontent-%COMP%]{height:0;margin:.5rem 0;overflow:hidden;border-top:1px solid #e9ecef}.dropdown-item[_ngcontent-%COMP%]{display:block;width:100%;padding:.25rem 1.5rem;clear:both;font-weight:400;color:#212529;text-align:inherit;white-space:nowrap;background-color:transparent;border:0}.dropdown-item[_ngcontent-%COMP%]:hover, .dropdown-item[_ngcontent-%COMP%]:focus{color:#16181b;text-decoration:none;background-color:#f8f9fa}.dropdown-item.active[_ngcontent-%COMP%], .dropdown-item[_ngcontent-%COMP%]:active{color:#fff;text-decoration:none;background-color:#007bff}.dropdown-item.disabled[_ngcontent-%COMP%], .dropdown-item[_ngcontent-%COMP%]:disabled{color:#6c757d;pointer-events:none;background-color:transparent}.dropdown-menu.show[_ngcontent-%COMP%]{display:block}.dropdown-header[_ngcontent-%COMP%]{display:block;padding:.5rem 1.5rem;margin-bottom:0;font-size:.875rem;color:#6c757d;white-space:nowrap}.dropdown-item-text[_ngcontent-%COMP%]{display:block;padding:.25rem 1.5rem;color:#212529}", "li.iti__country[_ngcontent-%COMP%]:hover{background-color:#0000000d}.iti__selected-flag.dropdown-toggle[_ngcontent-%COMP%]:after{content:none}.iti__flag-container.disabled[_ngcontent-%COMP%]{cursor:default!important}.iti.iti--allow-dropdown[_ngcontent-%COMP%]   .flag-container.disabled[_ngcontent-%COMP%]:hover   .iti__selected-flag[_ngcontent-%COMP%]{background:none}.country-dropdown[_ngcontent-%COMP%]{border:1px solid #ccc;width:-moz-fit-content;width:fit-content;padding:1px;border-collapse:collapse}.search-container[_ngcontent-%COMP%]{position:relative}.search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;border:none;border-bottom:1px solid #ccc;padding-left:10px}.search-icon[_ngcontent-%COMP%]{position:absolute;z-index:2;width:25px;margin:1px 10px}.iti__country-list[_ngcontent-%COMP%]{position:relative;border:none}.iti[_ngcontent-%COMP%]   input#country-search-box[_ngcontent-%COMP%]{padding-left:6px}.iti[_ngcontent-%COMP%]   .selected-dial-code[_ngcontent-%COMP%]{margin-left:6px}.iti.separate-dial-code[_ngcontent-%COMP%]   .iti__selected-flag[_ngcontent-%COMP%], .iti.separate-dial-code.iti--allow-dropdown.iti-sdc-2[_ngcontent-%COMP%]   .iti__selected-flag[_ngcontent-%COMP%], .iti.separate-dial-code.iti--allow-dropdown.iti-sdc-3[_ngcontent-%COMP%]   .iti__selected-flag[_ngcontent-%COMP%], .iti.separate-dial-code.iti--allow-dropdown.iti-sdc-4[_ngcontent-%COMP%]   .iti__selected-flag[_ngcontent-%COMP%]{width:93px}.iti.separate-dial-code[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .iti.separate-dial-code.iti--allow-dropdown.iti-sdc-2[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .iti.separate-dial-code.iti--allow-dropdown.iti-sdc-3[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .iti.separate-dial-code.iti--allow-dropdown.iti-sdc-4[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding-left:98px}"] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(VxITelComponent, [{
        type: Component,
        args: [{ selector: 'vx-itel', providers: [
                    CountryCode,
                    {
                        provide: NG_VALUE_ACCESSOR,
                        // tslint:disable-next-line:no-forward-ref
                        useExisting: forwardRef(() => VxITelComponent),
                        multi: true,
                    },
                    {
                        provide: NG_VALIDATORS,
                        useValue: phoneNumberValidator,
                        multi: true,
                    },
                ], template: "<div class=\"iti iti--allow-dropdown\"\r\n\t[ngClass]=\"separateDialCodeClass\">\r\n\t<div class=\"iti__flag-container\"\r\n\t\tdropdown\r\n\t\t[ngClass]=\"{'disabled': disabled}\"\r\n\t\t[isDisabled]=\"disabled\">\r\n\t\t<div class=\"iti__selected-flag dropdown-toggle\"\r\n\t\t\tdropdownToggle>\r\n\t\t\t<div class=\"iti__flag\"\r\n\t\t\t\t[ngClass]=\"selectedCountry?.flagClass || ''\"></div>\r\n\t\t\t<div *ngIf=\"separateDialCode\"\r\n\t\t\t\tclass=\"selected-dial-code\">+{{selectedCountry.dialCode}}</div>\r\n\t\t\t<div class=\"iti__arrow\"></div>\r\n\t\t</div>\r\n\t\t<div *dropdownMenu\r\n\t\t\tclass=\"dropdown-menu country-dropdown\">\r\n\t\t\t<div class=\"search-container\"\r\n\t\t\t\t*ngIf=\"searchCountryFlag && searchCountryField\">\r\n\t\t\t\t<input id=\"country-search-box\"\r\n\t\t\t\t\t[(ngModel)]=\"countrySearchText\"\r\n\t\t\t\t\t(keyup)=\"searchCountry()\"\r\n\t\t\t\t\t(click)=\"$event.stopPropagation()\"\r\n\t\t\t\t\t[placeholder]=\"searchCountryPlaceholder\"\r\n\t\t\t\t\tautofocus>\r\n\t\t\t</div>\r\n\t\t\t<ul class=\"iti__country-list\"\r\n\t\t\t\t#countryList>\r\n\t\t\t\t<li class=\"iti__country iti__preferred\"\r\n\t\t\t\t\t*ngFor=\"let country of preferredCountriesInDropDown\"\r\n\t\t\t\t\t(click)=\"onCountrySelect(country, focusable)\"\r\n\t\t\t\t\t[id]=\"country.htmlId+'-preferred'\">\r\n\t\t\t\t\t<div class=\"iti__flag-box\">\r\n\t\t\t\t\t\t<div class=\"iti__flag\"\r\n\t\t\t\t\t\t\t[ngClass]=\"country.flagClass\"></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<span class=\"iti__country-name\">{{country.name}}</span>\r\n\t\t\t\t\t<span class=\"iti__dial-code\">+{{country.dialCode}}</span>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"iti__divider\"\r\n\t\t\t\t\t*ngIf=\"preferredCountriesInDropDown?.length\"></li>\r\n\t\t\t\t<li class=\"iti__country iti__standard\"\r\n\t\t\t\t\t*ngFor=\"let country of allCountries\"\r\n\t\t\t\t\t(click)=\"onCountrySelect(country, focusable)\"\r\n\t\t\t\t\t[id]=\"country.htmlId\">\r\n\t\t\t\t\t<div class=\"iti__flag-box\">\r\n\t\t\t\t\t\t<div class=\"iti__flag\"\r\n\t\t\t\t\t\t\t[ngClass]=\"country.flagClass\"></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<span class=\"iti__country-name\">{{country.name}}</span>\r\n\t\t\t\t\t<span class=\"iti__dial-code\">+{{country.dialCode}}</span>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div>\r\n\t<input type=\"tel\"\r\n\t\t[id]=\"inputId\"\r\n\t\tautocomplete=\"off\"\r\n\t\t[ngClass]=\"cssClass\"\r\n\t\t(blur)=\"onTouched()\"\r\n\t\t(keypress)=\"onInputKeyPress($event)\"\r\n\t\t[(ngModel)]=\"phoneNumber\"\r\n\t\t(ngModelChange)=\"onPhoneNumberChange()\"\r\n\t\t[disabled]=\"disabled\"\r\n\t\t[placeholder]=\"resolvePlaceholder()\"\r\n\t\t[attr.maxLength]=\"maxLength\"\r\n\t\t[attr.validation]=\"phoneValidation\"\r\n\t\t#focusable>\r\n</div>\r\n", styles: [".dropup,.dropright,.dropdown,.dropleft{position:relative}.dropdown-toggle{white-space:nowrap}.dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.dropdown-toggle:empty:after{margin-left:0}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:10rem;padding:.5rem 0;margin:.125rem 0 0;font-size:1rem;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.dropdown-menu-left{right:auto;left:0}.dropdown-menu-right{right:0;left:auto}@media (min-width: 576px){.dropdown-menu-sm-left{right:auto;left:0}.dropdown-menu-sm-right{right:0;left:auto}}@media (min-width: 768px){.dropdown-menu-md-left{right:auto;left:0}.dropdown-menu-md-right{right:0;left:auto}}@media (min-width: 992px){.dropdown-menu-lg-left{right:auto;left:0}.dropdown-menu-lg-right{right:0;left:auto}}@media (min-width: 1200px){.dropdown-menu-xl-left{right:auto;left:0}.dropdown-menu-xl-right{right:0;left:auto}}.dropup .dropdown-menu{top:auto;bottom:100%;margin-top:0;margin-bottom:.125rem}.dropup .dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:0;border-right:.3em solid transparent;border-bottom:.3em solid;border-left:.3em solid transparent}.dropup .dropdown-toggle:empty:after{margin-left:0}.dropright .dropdown-menu{top:0;right:auto;left:100%;margin-top:0;margin-left:.125rem}.dropright .dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:0;border-bottom:.3em solid transparent;border-left:.3em solid}.dropright .dropdown-toggle:empty:after{margin-left:0}.dropright .dropdown-toggle:after{vertical-align:0}.dropleft .dropdown-menu{top:0;right:100%;left:auto;margin-top:0;margin-right:.125rem}.dropleft .dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\"}.dropleft .dropdown-toggle:after{display:none}.dropleft .dropdown-toggle:before{display:inline-block;margin-right:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:.3em solid;border-bottom:.3em solid transparent}.dropleft .dropdown-toggle:empty:after{margin-left:0}.dropleft .dropdown-toggle:before{vertical-align:0}.dropdown-menu[x-placement^=top],.dropdown-menu[x-placement^=right],.dropdown-menu[x-placement^=bottom],.dropdown-menu[x-placement^=left]{right:auto;bottom:auto}.dropdown-divider{height:0;margin:.5rem 0;overflow:hidden;border-top:1px solid #e9ecef}.dropdown-item{display:block;width:100%;padding:.25rem 1.5rem;clear:both;font-weight:400;color:#212529;text-align:inherit;white-space:nowrap;background-color:transparent;border:0}.dropdown-item:hover,.dropdown-item:focus{color:#16181b;text-decoration:none;background-color:#f8f9fa}.dropdown-item.active,.dropdown-item:active{color:#fff;text-decoration:none;background-color:#007bff}.dropdown-item.disabled,.dropdown-item:disabled{color:#6c757d;pointer-events:none;background-color:transparent}.dropdown-menu.show{display:block}.dropdown-header{display:block;padding:.5rem 1.5rem;margin-bottom:0;font-size:.875rem;color:#6c757d;white-space:nowrap}.dropdown-item-text{display:block;padding:.25rem 1.5rem;color:#212529}\n", "li.iti__country:hover{background-color:#0000000d}.iti__selected-flag.dropdown-toggle:after{content:none}.iti__flag-container.disabled{cursor:default!important}.iti.iti--allow-dropdown .flag-container.disabled:hover .iti__selected-flag{background:none}.country-dropdown{border:1px solid #ccc;width:-moz-fit-content;width:fit-content;padding:1px;border-collapse:collapse}.search-container{position:relative}.search-container input{width:100%;border:none;border-bottom:1px solid #ccc;padding-left:10px}.search-icon{position:absolute;z-index:2;width:25px;margin:1px 10px}.iti__country-list{position:relative;border:none}.iti input#country-search-box{padding-left:6px}.iti .selected-dial-code{margin-left:6px}.iti.separate-dial-code .iti__selected-flag,.iti.separate-dial-code.iti--allow-dropdown.iti-sdc-2 .iti__selected-flag,.iti.separate-dial-code.iti--allow-dropdown.iti-sdc-3 .iti__selected-flag,.iti.separate-dial-code.iti--allow-dropdown.iti-sdc-4 .iti__selected-flag{width:93px}.iti.separate-dial-code input,.iti.separate-dial-code.iti--allow-dropdown.iti-sdc-2 input,.iti.separate-dial-code.iti--allow-dropdown.iti-sdc-3 input,.iti.separate-dial-code.iti--allow-dropdown.iti-sdc-4 input{padding-left:98px}\n"] }]
    }], function () { return [{ type: CountryCode }]; }, { value: [{
            type: Input
        }], preferredCountries: [{
            type: Input
        }], enablePlaceholder: [{
            type: Input
        }], customPlaceholder: [{
            type: Input
        }], numberFormat: [{
            type: Input
        }], cssClass: [{
            type: Input
        }], onlyCountries: [{
            type: Input
        }], enableAutoCountrySelect: [{
            type: Input
        }], searchCountryFlag: [{
            type: Input
        }], searchCountryField: [{
            type: Input
        }], searchCountryPlaceholder: [{
            type: Input
        }], maxLength: [{
            type: Input
        }], selectFirstCountry: [{
            type: Input
        }], selectedCountryISO: [{
            type: Input
        }], phoneValidation: [{
            type: Input
        }], inputId: [{
            type: Input
        }], separateDialCode: [{
            type: Input
        }], countryChange: [{
            type: Output
        }], countryList: [{
            type: ViewChild,
            args: ['countryList']
        }] }); })();

const dropdownModuleForRoot = BsDropdownModule.forRoot();
class VxITelModule {
    static ɵfac = function VxITelModule_Factory(t) { return new (t || VxITelModule)(); };
    static ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: VxITelModule });
    static ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            FormsModule,
            ReactiveFormsModule,
            dropdownModuleForRoot] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(VxITelModule, [{
        type: NgModule,
        args: [{
                declarations: [VxITelComponent, NativeElementInjectorDirective],
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    dropdownModuleForRoot,
                ],
                exports: [VxITelComponent, NativeElementInjectorDirective],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(VxITelModule, { declarations: [VxITelComponent, NativeElementInjectorDirective], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule, i4.BsDropdownModule], exports: [VxITelComponent, NativeElementInjectorDirective] }); })();

/*
 * Public API Surface of vx-itel
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CountryISO, NativeElementInjectorDirective, PhoneNumberFormat, SearchCountryField, VxITelComponent, VxITelModule, dropdownModuleForRoot };
//# sourceMappingURL=vx-itel.mjs.map
