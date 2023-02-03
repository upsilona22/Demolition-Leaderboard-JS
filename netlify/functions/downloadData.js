const fetch = require('isomorphic-fetch');
const Dropbox = require('dropbox').Dropbox;
let dbx = new Dropbox({accessToken: process.env.dropToken, fetch: fetch});

exports.handler = async function(event, context) {
    try {
        const response = await dbx.filesDownload({path: "/leaderboard.json"});

        if (response.status !== 200) {
            return {
                statusCode: response.status,
                message: "Dropbox error"
            }
        }

        const data = JSON.parse(response.result.fileBinary);

        return {
            statusCode: 200,
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        }
    } catch(err) {
        console.log(err)
        return {
            statusCode: 502,
            message: "Error connecting to dropbox"
        }
    }
}
{
    "1": {
        "Name": "A_Sarchasm",
        "Demolitions": 12685,
        "Exterminations": 516,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 12685,
                "Exterminations": 516,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "2": {
        "Name": "ASS_HAMMER",
        "Demolitions": 14415,
        "Exterminations": 458,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 14415,
                "Exterminations": 458,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "3": {
        "Name": "Basher",
        "Demolitions": 1085,
        "Exterminations": 1,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 1085,
                "Exterminations": 1,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "4": {
        "Name": "bo0ted",
        "Demolitions": 14010,
        "Exterminations": 63,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 14010,
                "Exterminations": 63,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "5": {
        "Name": "Caecilius",
        "Demolitions": 1413,
        "Exterminations": 12,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 1413,
                "Exterminations": 12,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "6": {
        "Name": "Carbon",
        "Demolitions": 7631,
        "Exterminations": 22,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 7631,
                "Exterminations": 22,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "7": {
        "Name": "CJ",
        "Demolitions": 1447,
        "Exterminations": 10,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 1447,
                "Exterminations": 10,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "8": {
        "Name": "Crashman",
        "Demolitions": 937,
        "Exterminations": 9,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 937,
                "Exterminations": 9,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "9": {
        "Name": "Crashtimer",
        "Demolitions": 1022,
        "Exterminations": 9,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 1022,
                "Exterminations": 9,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "10": {
        "Name": "Danger Close",
        "Demolitions": 22441,
        "Exterminations": 993,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 22441,
                "Exterminations": 993,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "11": {
        "Name": "Duck with a Chainsaw",
        "Demolitions": 2443,
        "Exterminations": 11,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 2443,
                "Exterminations": 11,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "12": {
        "Name": "Francuska Bagieto",
        "Demolitions": 16903,
        "Exterminations": 1308,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 16903,
                "Exterminations": 1308,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "13": {
        "Name": "HoraryHellfire",
        "Demolitions": 4941,
        "Exterminations": 8,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 4941,
                "Exterminations": 8,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "14": {
        "Name": "I donâ€™t keep it hentai",
        "Demolitions": 1625,
        "Exterminations": 12,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 1625,
                "Exterminations": 12,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "15": {
        "Name": "Jeannie",
        "Demolitions": 917,
        "Exterminations": 22,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 917,
                "Exterminations": 22,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "16": {
        "Name": "Kiimmmiiii89",
        "Demolitions": 7522,
        "Exterminations": 65,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 7522,
                "Exterminations": 65,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "17": {
        "Name": "LORDMACCUS",
        "Demolitions": 2047,
        "Exterminations": 40,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 2047,
                "Exterminations": 40,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "18": {
        "Name": "Low Gravitas",
        "Demolitions": 2404,
        "Exterminations": 27,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 2404,
                "Exterminations": 27,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "19": {
        "Name": "Luca",
        "Demolitions": 1299,
        "Exterminations": 23,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 1299,
                "Exterminations": 23,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "20": {
        "Name": "nukewaste13",
        "Demolitions": 1187,
        "Exterminations": 0,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 1187,
                "Exterminations": 0,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "21": {
        "Name": "ProProfessional",
        "Demolitions": 6521,
        "Exterminations": 38,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 6521,
                "Exterminations": 38,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "22": {
        "Name": "Psittacus",
        "Demolitions": 19312,
        "Exterminations": 1079,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 19312,
                "Exterminations": 1079,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "23": {
        "Name": "Pulch",
        "Demolitions": 6404,
        "Exterminations": 17,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 6404,
                "Exterminations": 17,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "24": {
        "Name": "Qdub",
        "Demolitions": 11178,
        "Exterminations": 23,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 11178,
                "Exterminations": 23,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "25": {
        "Name": "Qwertycube",
        "Demolitions": 2344,
        "Exterminations": 15,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 2344,
                "Exterminations": 15,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "26": {
        "Name": "RedWater",
        "Demolitions": 10865,
        "Exterminations": 101,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 10865,
                "Exterminations": 101,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "27": {
        "Name": "Reecey1297",
        "Demolitions": 1024,
        "Exterminations": 7,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 1024,
                "Exterminations": 7,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "28": {
        "Name": "shire",
        "Demolitions": 6200,
        "Exterminations": 150,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 6200,
                "Exterminations": 150,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "29": {
        "Name": "skoorbs",
        "Demolitions": 2053,
        "Exterminations": 6,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 2053,
                "Exterminations": 6,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "30": {
        "Name": "SpacePope",
        "Demolitions": 7381,
        "Exterminations": 16,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 7381,
                "Exterminations": 16,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "31": {
        "Name": "Toke_Tokerson",
        "Demolitions": 6137,
        "Exterminations": 133,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 6137,
                "Exterminations": 133,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "181981061763301377": {
        "Name": "BeeLover123",
        "Demolitions": 22559,
        "Exterminations": 1111,
        "LastUpdate": "2022-08-27T00:37:31.303Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 7075,
                "Exterminations": 294,
                "Time": "2019-05-05T00:00:00.000Z"
            },
            {
                "Demolitions": 10000,
                "Exterminations": 469,
                "Time": "2019-07-08T00:00:00.000Z"
            },
            {
                "Demolitions": 12457,
                "Exterminations": 631,
                "Time": "2019-09-20T00:00:00.000Z"
            },
            {
                "Demolitions": 13457,
                "Exterminations": 674,
                "Time": "2019-12-31T00:00:00.000Z"
            },
            {
                "Demolitions": 15181,
                "Exterminations": 771,
                "Time": "2020-03-31T00:00:00.000Z"
            },
            {
                "Demolitions": 16899,
                "Exterminations": 861,
                "Time": "2020-06-27T00:00:00.000Z"
            },
            {
                "Demolitions": 18528,
                "Exterminations": 1000,
                "Time": "2020-08-13T00:00:00.000Z"
            },
            {
                "Demolitions": 20001,
                "Exterminations": 1072,
                "Time": "2020-11-22T00:00:00.000Z"
            },
            {
                "Demolitions": 20966,
                "Exterminations": 1090,
                "Time": "2021-03-15T00:00:00.000Z"
            },
            {
                "Demolitions": 21270,
                "Exterminations": 1094,
                "Time": "2021-06-22T00:00:00.000Z"
            },
            {
                "Demolitions": 21789,
                "Exterminations": 1102,
                "Time": "2021-09-09T00:00:00.000Z"
            },
            {
                "Demolitions": 22144,
                "Exterminations": 1105,
                "Time": "2021-12-30T00:00:00.000Z"
            },
            {
                "Demolitions": 22203,
                "Exterminations": 1106,
                "Time": "2022-04-02T20:42:07.990Z"
            },
            {
                "Demolitions": 16000,
                "Exterminations": 0,
                "Time": "2022-04-06T19:03:23.383Z"
            },
            {
                "Demolitions": 22144,
                "Exterminations": 1105,
                "Time": "2022-04-06T19:03:56.332Z"
            },
            {
                "Demolitions": 22203,
                "Exterminations": 1106,
                "Time": "2022-04-08T03:01:41.619Z"
            },
            {
                "Demolitions": 22321,
                "Exterminations": 1110,
                "Time": "2022-06-29T21:08:00.712Z"
            },
            {
                "Demolitions": 22322,
                "Exterminations": 1110,
                "Time": "2022-06-29T21:12:01.673Z"
            },
            {
                "Demolitions": 0,
                "Exterminations": 0,
                "Time": "2022-07-02T15:31:00.191Z"
            },
            {
                "Demolitions": 0,
                "Exterminations": 0,
                "Time": "2022-07-02T15:31:50.755Z"
            },
            {
                "Demolitions": 22394,
                "Exterminations": 1111,
                "Time": "2022-07-08T05:29:10.939Z"
            },
            {
                "Demolitions": 22559,
                "Exterminations": 1111,
                "Time": "2022-08-27T00:37:31.303Z"
            }
        ],
        "Country": "USA"
    },
    "270695743344345098": {
        "Name": "catman",
        "Demolitions": 82829,
        "Exterminations": 4774,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 82829,
                "Exterminations": 4774,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "128902019711893504": {
        "Name": "Claven",
        "Demolitions": 68109,
        "Exterminations": 976,
        "LastUpdate": "2023-01-25T18:54:06.619Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 61376,
                "Exterminations": 876,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 63105,
                "Exterminations": 912,
                "Time": "2022-04-10T15:42:27.487Z"
            },
            {
                "Demolitions": 65450,
                "Exterminations": 948,
                "Time": "2022-08-06T18:47:32.879Z"
            },
            {
                "Demolitions": 68109,
                "Exterminations": 976,
                "Time": "2023-01-25T18:54:06.619Z"
            }
        ]
    },
    "239158315521671169": {
        "Name": "CPT. Tendies",
        "Demolitions": 10122,
        "Exterminations": 689,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 10122,
                "Exterminations": 689,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "231963249350934528": {
        "Name": "DK",
        "Demolitions": 31483,
        "Exterminations": 342,
        "LastUpdate": "2023-01-05T19:12:35.718Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 26577,
                "Exterminations": 262,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 27085,
                "Exterminations": 270,
                "Time": "2022-05-12T17:49:43.124Z"
            },
            {
                "Demolitions": 28600,
                "Exterminations": 304,
                "Time": "2022-08-20T18:43:04.123Z"
            },
            {
                "Demolitions": 29085,
                "Exterminations": 317,
                "Time": "2022-08-30T17:42:36.891Z"
            },
            {
                "Demolitions": 29493,
                "Exterminations": 318,
                "Time": "2022-09-16T23:02:05.804Z"
            },
            {
                "Demolitions": 30052,
                "Exterminations": 326,
                "Time": "2022-10-18T01:35:26.961Z"
            },
            {
                "Demolitions": 30633,
                "Exterminations": 331,
                "Time": "2022-11-22T15:58:09.220Z"
            },
            {
                "Demolitions": 31008,
                "Exterminations": 336,
                "Time": "2022-12-09T19:15:34.251Z"
            },
            {
                "Demolitions": 31191,
                "Exterminations": 339,
                "Time": "2022-12-23T20:52:49.101Z"
            },
            {
                "Demolitions": 31483,
                "Exterminations": 342,
                "Time": "2023-01-05T19:12:35.718Z"
            }
        ]
    },
    "437714753989771275": {
        "Name": "ForestMoon",
        "Demolitions": 10191,
        "Exterminations": 292,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 10191,
                "Exterminations": 292,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "287306900972896256": {
        "Name": "G pea eS",
        "Demolitions": 67932,
        "Exterminations": 1830,
        "LastUpdate": "2022-10-09T19:47:11.872Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 56829,
                "Exterminations": 1643,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 67932,
                "Exterminations": 1830,
                "Time": "2022-10-09T19:47:11.872Z"
            }
        ]
    },
    "408026484360347658": {
        "Name": "GOALIE_ERASER",
        "Demolitions": 27605,
        "Exterminations": 2013,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 27605,
                "Exterminations": 2013,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "127951730624167936": {
        "Name": "John",
        "Demolitions": 23167,
        "Exterminations": 1196,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 23167,
                "Exterminations": 1196,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "490863944840380447": {
        "Name": "kiomen",
        "Demolitions": 51644,
        "Exterminations": 3652,
        "LastUpdate": "2023-01-26T03:45:11.791Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 46862,
                "Exterminations": 3385,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 50003,
                "Exterminations": 3548,
                "Time": "2022-10-30T02:35:40.785Z"
            },
            {
                "Demolitions": 50240,
                "Exterminations": 3558,
                "Time": "2022-11-21T01:36:21.978Z"
            },
            {
                "Demolitions": 51448,
                "Exterminations": 3631,
                "Time": "2023-01-24T03:13:32.781Z"
            },
            {
                "Demolitions": 51644,
                "Exterminations": 3652,
                "Time": "2023-01-26T03:45:11.791Z"
            }
        ],
        "Country": "usa"
    },
    "250825822175363076": {
        "Name": "Legal California",
        "Demolitions": 47857,
        "Exterminations": 3484,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 47857,
                "Exterminations": 3484,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "480072869326618628": {
        "Name": "MS WHIDDLEBERRY",
        "Demolitions": 44581,
        "Exterminations": 4173,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 44581,
                "Exterminations": 4173,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "150561446990708736": {
        "Name": "neropatti",
        "Demolitions": 32541,
        "Exterminations": 623,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 32541,
                "Exterminations": 623,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "111199343574343680": {
        "Name": "ParaYEET",
        "Demolitions": 12952,
        "Exterminations": 383,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 12952,
                "Exterminations": 383,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "335305236975583233": {
        "Name": "Punka",
        "Demolitions": 26008,
        "Exterminations": 271,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 26008,
                "Exterminations": 271,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "187295224714756097": {
        "Name": "Ripper",
        "Demolitions": 53086,
        "Exterminations": 3764,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 53086,
                "Exterminations": 3764,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "226543536302981120": {
        "Name": "Rocket Sledge",
        "Demolitions": 42236,
        "Exterminations": 842,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 42236,
                "Exterminations": 842,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "150712122601373696": {
        "Name": "Sapphyre",
        "Demolitions": 13113,
        "Exterminations": 143,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 13113,
                "Exterminations": 143,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "259919376684154880": {
        "Name": "ScoobyDoobyDubus",
        "Demolitions": 20689,
        "Exterminations": 545,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 20689,
                "Exterminations": 545,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "241969148417015819": {
        "Name": "SGT-Z",
        "Demolitions": 40298,
        "Exterminations": 1610,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 40298,
                "Exterminations": 1610,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "248793078641459200": {
        "Name": "shadow6ram",
        "Demolitions": 34006,
        "Exterminations": 1403,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 34006,
                "Exterminations": 1403,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "169553766620594176": {
        "Name": "SplitParadox",
        "Demolitions": 15840,
        "Exterminations": 204,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 15840,
                "Exterminations": 204,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "395151596113231872": {
        "Name": "Street_Stallion",
        "Demolitions": 9313,
        "Exterminations": 316,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 9313,
                "Exterminations": 316,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "119477965493895169": {
        "Name": "TimbreWolves",
        "Demolitions": 11307,
        "Exterminations": 172,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 11307,
                "Exterminations": 172,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "343165654649667584": {
        "Name": "toothboto",
        "Demolitions": 133612,
        "Exterminations": 11309,
        "LastUpdate": "2022-11-30T22:36:11.428Z",
        "Authorized": 2,
        "History": [
            {
                "Demolitions": 125463,
                "Exterminations": 10882,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 126925,
                "Exterminations": 10978,
                "Time": "2022-03-31T16:28:04.477Z"
            },
            {
                "Demolitions": 128023,
                "Exterminations": 11037,
                "Time": "2022-05-01T03:01:37.946Z"
            },
            {
                "Demolitions": 130116,
                "Exterminations": 11167,
                "Time": "2022-08-15T05:13:09.791Z"
            },
            {
                "Demolitions": 700,
                "Exterminations": 100,
                "Time": "2022-09-01T02:13:07.829Z"
            },
            {
                "Demolitions": 130116,
                "Exterminations": 11167,
                "Time": "2022-09-01T02:13:46.546Z"
            },
            {
                "Demolitions": 130116,
                "Exterminations": 11167,
                "Time": "2022-09-01T02:14:22.532Z"
            },
            {
                "Demolitions": 131835,
                "Exterminations": 11227,
                "Time": "2022-10-22T20:09:04.402Z"
            },
            {
                "Demolitions": 132299,
                "Exterminations": 11260,
                "Time": "2022-10-25T07:07:47.028Z"
            },
            {
                "Demolitions": 133046,
                "Exterminations": 11291,
                "Time": "2022-11-11T08:31:40.679Z"
            },
            {
                "Demolitions": 133447,
                "Exterminations": 11302,
                "Time": "2022-11-23T05:45:47.359Z"
            },
            {
                "Demolitions": 133612,
                "Exterminations": 11309,
                "Time": "2022-11-30T22:36:11.428Z"
            }
        ],
        "Country": "USA"
    },
    "297052621544357888": {
        "Name": "YourEvilTwin",
        "Demolitions": 70970,
        "Exterminations": 1433,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 70970,
                "Exterminations": 1433,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "126130958981136384": {
        "Name": "Big Island",
        "Demolitions": 4198,
        "Exterminations": 4,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 4198,
                "Exterminations": 4,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "588087176751874048": {
        "Name": "DonnyWonder85",
        "Demolitions": 33333,
        "Exterminations": 1500,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 33333,
                "Exterminations": 1500,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "235159927168040960": {
        "Name": "Shire",
        "Demolitions": 11555,
        "Exterminations": 200,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 11555,
                "Exterminations": 200,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "290608706830336021": {
        "Name": "LiveWire73",
        "Demolitions": 17975,
        "Exterminations": 159,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 17975,
                "Exterminations": 159,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "159757560554061824": {
        "Name": "TmanRL",
        "Demolitions": 2524,
        "Exterminations": 15,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 2524,
                "Exterminations": 15,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "153313370496303104": {
        "Name": "shifty",
        "Demolitions": 27705,
        "Exterminations": 272,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 27705,
                "Exterminations": 272,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "219615351166599168": {
        "Name": "Kinley",
        "Demolitions": 2718,
        "Exterminations": 1,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 2718,
                "Exterminations": 1,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "457284443585904641": {
        "Name": "RonnieSMASH",
        "Demolitions": 25980,
        "Exterminations": 393,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 25980,
                "Exterminations": 393,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "604367461143281685": {
        "Name": "Mr. Demo Man",
        "Demolitions": 42635,
        "Exterminations": 2840,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 42635,
                "Exterminations": 2840,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "275500513913602048": {
        "Name": "Plane",
        "Demolitions": 30279,
        "Exterminations": 478,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 30279,
                "Exterminations": 478,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "234998282072358912": {
        "Name": "Jump",
        "Demolitions": 18217,
        "Exterminations": 360,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 18217,
                "Exterminations": 360,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "132947625941925888": {
        "Name": "VampireSquid",
        "Demolitions": 54973,
        "Exterminations": 2208,
        "LastUpdate": "2022-08-31T18:50:02.067Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 44059,
                "Exterminations": 1429,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 48906,
                "Exterminations": 1884,
                "Time": "2022-04-01T15:24:11.854Z"
            },
            {
                "Demolitions": 50000,
                "Exterminations": 1972,
                "Time": "2022-04-15T21:45:50.116Z"
            },
            {
                "Demolitions": 51895,
                "Exterminations": 2068,
                "Time": "2022-06-16T00:05:10.648Z"
            },
            {
                "Demolitions": 53275,
                "Exterminations": 2127,
                "Time": "2022-07-16T23:38:14.980Z"
            },
            {
                "Demolitions": 53961,
                "Exterminations": 2163,
                "Time": "2022-07-30T22:04:49.823Z"
            },
            {
                "Demolitions": 54973,
                "Exterminations": 2208,
                "Time": "2022-08-31T18:50:02.067Z"
            }
        ],
        "Country": "England"
    },
    "303652935047315459": {
        "Name": "heylookafork",
        "Demolitions": 7750,
        "Exterminations": 41,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 7750,
                "Exterminations": 41,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "317630268850831360": {
        "Name": "B1nary Drag0n",
        "Demolitions": 5021,
        "Exterminations": 39,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 5021,
                "Exterminations": 39,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "211556696739282944": {
        "Name": "bo0td",
        "Demolitions": 49612,
        "Exterminations": 280,
        "LastUpdate": "2022-04-25T03:26:33.220Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 47728,
                "Exterminations": 263,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 49612,
                "Exterminations": 280,
                "Time": "2022-04-25T03:26:33.220Z"
            }
        ]
    },
    "548603262488543237": {
        "Name": "clemsonpablo",
        "Demolitions": 10011,
        "Exterminations": 76,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 10011,
                "Exterminations": 76,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "292423321553862666": {
        "Name": "Jbomb",
        "Demolitions": 21832,
        "Exterminations": 119,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 21832,
                "Exterminations": 119,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "151882545414275072": {
        "Name": "Kaeso Clarus",
        "Demolitions": 12509,
        "Exterminations": 111,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 12509,
                "Exterminations": 111,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "209575621976784897": {
        "Name": "Loneshadow",
        "Demolitions": 10956,
        "Exterminations": 52,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 10956,
                "Exterminations": 52,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "220225858005237760": {
        "Name": "Hoodyhooo",
        "Demolitions": 33774,
        "Exterminations": 271,
        "LastUpdate": "2022-11-26T18:12:19.741Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 24251,
                "Exterminations": 196,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 33774,
                "Exterminations": 271,
                "Time": "2022-11-26T18:12:19.741Z"
            }
        ]
    },
    "609467147302993921": {
        "Name": "Hiccup",
        "Demolitions": 15285,
        "Exterminations": 223,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 15285,
                "Exterminations": 223,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "418509613735084032": {
        "Name": "Absolute Zero",
        "Demolitions": 2630,
        "Exterminations": 15,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 2630,
                "Exterminations": 15,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "300619943626407940": {
        "Name": "DarkRooster",
        "Demolitions": 15389,
        "Exterminations": 254,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 15389,
                "Exterminations": 254,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "563118783242436611": {
        "Name": "CaptainPOISON",
        "Demolitions": 23710,
        "Exterminations": 1821,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 23710,
                "Exterminations": 1821,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "180633179894448128": {
        "Name": "JG",
        "Demolitions": 40458,
        "Exterminations": 1933,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 40458,
                "Exterminations": 1933,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "223586717066592266": {
        "Name": "Billy",
        "Demolitions": 16071,
        "Exterminations": 141,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 16071,
                "Exterminations": 141,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "154980258544615425": {
        "Name": "Tejism",
        "Demolitions": 20384,
        "Exterminations": 669,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 20384,
                "Exterminations": 669,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "103099475064553472": {
        "Name": "Excuse Me",
        "Demolitions": 6549,
        "Exterminations": 19,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 6549,
                "Exterminations": 19,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "565629521571741722": {
        "Name": "bdong",
        "Demolitions": 6716,
        "Exterminations": 101,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 6716,
                "Exterminations": 101,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "259834571409850369": {
        "Name": "YumSoup",
        "Demolitions": 1787,
        "Exterminations": 41,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 1787,
                "Exterminations": 41,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "401540405440675850": {
        "Name": "Zuko186",
        "Demolitions": 16163,
        "Exterminations": 142,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 16163,
                "Exterminations": 142,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "247175034634764289": {
        "Name": "Tragik",
        "Demolitions": 5489,
        "Exterminations": 13,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 5489,
                "Exterminations": 13,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "244917509684199424": {
        "Name": "IvanJagginoff",
        "Demolitions": 6355,
        "Exterminations": 157,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 6355,
                "Exterminations": 157,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "202095042372829184": {
        "Name": "svr333",
        "Demolitions": 4475,
        "Exterminations": 18,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 4475,
                "Exterminations": 18,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "484719865307987982": {
        "Name": "Deathmerchant68",
        "Demolitions": 60586,
        "Exterminations": 621,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 60586,
                "Exterminations": 621,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "241054790006603776": {
        "Name": "P_C_Palpatine",
        "Demolitions": 18057,
        "Exterminations": 171,
        "LastUpdate": "2022-07-20T18:56:05.404Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 12221,
                "Exterminations": 112,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 17755,
                "Exterminations": 168,
                "Time": "2022-06-29T21:45:34.575Z"
            },
            {
                "Demolitions": 17854,
                "Exterminations": 168,
                "Time": "2022-07-01T21:22:12.217Z"
            },
            {
                "Demolitions": 17854,
                "Exterminations": 168,
                "Time": "2022-07-01T21:23:57.921Z"
            },
            {
                "Demolitions": 18057,
                "Exterminations": 171,
                "Time": "2022-07-20T18:56:05.404Z"
            }
        ]
    },
    "402178068757741579": {
        "Name": "Serhan",
        "Demolitions": 215,
        "Exterminations": 11,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 215,
                "Exterminations": 11,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "212903196845277184": {
        "Name": "Bentz",
        "Demolitions": 3802,
        "Exterminations": 2,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 3802,
                "Exterminations": 2,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "482976241058709509": {
        "Name": "Lmited",
        "Demolitions": 632,
        "Exterminations": 19,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 632,
                "Exterminations": 19,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "252073715007881217": {
        "Name": "Catiper06",
        "Demolitions": 176,
        "Exterminations": 0,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 176,
                "Exterminations": 0,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "215625749783248896": {
        "Name": "Dot",
        "Demolitions": 6516,
        "Exterminations": 30,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 6516,
                "Exterminations": 30,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "647507628523651084": {
        "Name": "xPorter__101",
        "Demolitions": 5559,
        "Exterminations": 79,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 5559,
                "Exterminations": 79,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "444320642284781570": {
        "Name": "Brodo Swaggins",
        "Demolitions": 29985,
        "Exterminations": 1125,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 29985,
                "Exterminations": 1125,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "321825860854349825": {
        "Name": "vraeden",
        "Demolitions": 14924,
        "Exterminations": 104,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 14924,
                "Exterminations": 104,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "481598975053529089": {
        "Name": "Serpent",
        "Demolitions": 2836,
        "Exterminations": 5,
        "LastUpdate": "2023-01-25T03:12:35.241Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 2075,
                "Exterminations": 5,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 2836,
                "Exterminations": 5,
                "Time": "2023-01-25T03:12:35.241Z"
            }
        ]
    },
    "441343934346821642": {
        "Name": "TACTICAL-_-TAC0-",
        "Demolitions": 2257,
        "Exterminations": 25,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 2257,
                "Exterminations": 25,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "466805212351430658": {
        "Name": "40 Piece McNugget",
        "Demolitions": 46450,
        "Exterminations": 1632,
        "LastUpdate": "2022-12-08T04:48:06.499Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 40003,
                "Exterminations": 1483,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 42238,
                "Exterminations": 1240,
                "Time": "2022-05-10T00:33:14.554Z"
            },
            {
                "Demolitions": 46450,
                "Exterminations": 1632,
                "Time": "2022-12-08T04:48:06.499Z"
            }
        ]
    },
    "529762846305681418": {
        "Name": "Woody",
        "Demolitions": 125984,
        "Exterminations": 8705,
        "LastUpdate": "2022-12-31T06:12:51.392Z",
        "Authorized": 2,
        "History": [
            {
                "Demolitions": 116852,
                "Exterminations": 8314,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 122442,
                "Exterminations": 8609,
                "Time": "2022-08-03T22:59:03.999Z"
            },
            {
                "Demolitions": 125984,
                "Exterminations": 8705,
                "Time": "2022-12-31T06:12:51.392Z"
            }
        ]
    },
    "132957299571425291": {
        "Name": "Demintele",
        "Demolitions": 10868,
        "Exterminations": 164,
        "LastUpdate": "2022-09-08T22:08:35.485Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 8754,
                "Exterminations": 105,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 10868,
                "Exterminations": 164,
                "Time": "2022-09-08T22:08:35.485Z"
            }
        ]
    },
    "338087057517838346": {
        "Name": "UstrokitIslewach",
        "Demolitions": 1448,
        "Exterminations": 30,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 1448,
                "Exterminations": 30,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "399092004115447811": {
        "Name": "BigWungus",
        "Demolitions": 4385,
        "Exterminations": 5,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 4385,
                "Exterminations": 5,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "535549182824677406": {
        "Name": "Papa Lane 88",
        "Demolitions": 31996,
        "Exterminations": 216,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 31996,
                "Exterminations": 216,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "97485255153287168": {
        "Name": "Retselom",
        "Demolitions": 36097,
        "Exterminations": 1873,
        "LastUpdate": "2022-09-13T01:07:25.039Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 32185,
                "Exterminations": 1704,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 32814,
                "Exterminations": 1745,
                "Time": "2022-04-02T13:06:02.902Z"
            },
            {
                "Demolitions": 33755,
                "Exterminations": 1801,
                "Time": "2022-05-16T02:22:00.874Z"
            },
            {
                "Demolitions": 34162,
                "Exterminations": 1816,
                "Time": "2022-06-02T14:58:01.019Z"
            },
            {
                "Demolitions": 36097,
                "Exterminations": 1873,
                "Time": "2022-09-13T01:07:25.039Z"
            }
        ]
    },
    "676580310791487489": {
        "Name": "OPositiv",
        "Demolitions": 15119,
        "Exterminations": 350,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 15119,
                "Exterminations": 350,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "387429093941051403": {
        "Name": "bebisher",
        "Demolitions": 11358,
        "Exterminations": 51,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 11358,
                "Exterminations": 51,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "480715095366959104": {
        "Name": "derkergen40",
        "Demolitions": 69304,
        "Exterminations": 1053,
        "LastUpdate": "2022-04-24T13:19:13.598Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 59007,
                "Exterminations": 959,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 68059,
                "Exterminations": 1035,
                "Time": "2022-04-24T09:30:37.062Z"
            },
            {
                "Demolitions": 68059,
                "Exterminations": 1035,
                "Time": "2022-04-24T09:32:58.192Z"
            },
            {
                "Demolitions": 68059,
                "Exterminations": 1035,
                "Time": "2022-04-24T09:49:12.488Z"
            },
            {
                "Demolitions": 68059,
                "Exterminations": 1035,
                "Time": "2022-04-24T09:54:07.382Z"
            },
            {
                "Demolitions": 69304,
                "Exterminations": 1053,
                "Time": "2022-04-24T13:19:13.598Z"
            }
        ]
    },
    "266420032240746499": {
        "Name": "Steve Stifler",
        "Demolitions": 11998,
        "Exterminations": 917,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 11998,
                "Exterminations": 917,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "376457949217947651": {
        "Name": "arrogantmeat",
        "Demolitions": 6794,
        "Exterminations": 23,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 6794,
                "Exterminations": 23,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "432663477874851850": {
        "Name": "Craiger32",
        "Demolitions": 5316,
        "Exterminations": 15,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 5316,
                "Exterminations": 15,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "176797550278475776": {
        "Name": "RedWater333",
        "Demolitions": 24661,
        "Exterminations": 221,
        "LastUpdate": "2022-05-29T17:50:31.627Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 19553,
                "Exterminations": 199,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 24661,
                "Exterminations": 221,
                "Time": "2022-05-29T17:50:31.627Z"
            }
        ]
    },
    "510980602284212236": {
        "Name": "WillWillCool",
        "Demolitions": 3990,
        "Exterminations": 151,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 3990,
                "Exterminations": 151,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "499427946000285696": {
        "Name": "rage10b",
        "Demolitions": 82672,
        "Exterminations": 7701,
        "LastUpdate": "2023-01-31T22:00:40.065Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 62552,
                "Exterminations": 5565,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 66390,
                "Exterminations": 6000,
                "Time": "2022-05-18T04:03:46.633Z"
            },
            {
                "Demolitions": 70363,
                "Exterminations": 6426,
                "Time": "2022-07-30T03:58:47.550Z"
            },
            {
                "Demolitions": 71182,
                "Exterminations": 6507,
                "Time": "2022-08-07T03:04:18.265Z"
            },
            {
                "Demolitions": 76639,
                "Exterminations": 7075,
                "Time": "2022-10-30T18:05:55.392Z"
            },
            {
                "Demolitions": 78669,
                "Exterminations": 7272,
                "Time": "2022-11-25T04:59:02.558Z"
            },
            {
                "Demolitions": 78695,
                "Exterminations": 7275,
                "Time": "2022-11-25T05:16:13.984Z"
            },
            {
                "Demolitions": 80269,
                "Exterminations": 7446,
                "Time": "2022-12-18T06:16:24.696Z"
            },
            {
                "Demolitions": 82372,
                "Exterminations": 3671,
                "Time": "2023-01-26T03:44:20.970Z"
            },
            {
                "Demolitions": 82372,
                "Exterminations": 8671,
                "Time": "2023-01-26T03:46:59.682Z"
            },
            {
                "Demolitions": 82672,
                "Exterminations": 7701,
                "Time": "2023-01-31T22:00:40.065Z"
            }
        ]
    },
    "187546582428811264": {
        "Name": "Laroche",
        "Demolitions": 14088,
        "Exterminations": 666,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 14088,
                "Exterminations": 666,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "148471836324265985": {
        "Name": "SunnyPlayz",
        "Demolitions": 3390,
        "Exterminations": 16,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 3390,
                "Exterminations": 16,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "376614162912116736": {
        "Name": "Underwater Otter",
        "Demolitions": 20383,
        "Exterminations": 166,
        "LastUpdate": "2023-02-01T05:53:07.999Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 15425,
                "Exterminations": 137,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 20383,
                "Exterminations": 166,
                "Time": "2023-02-01T05:53:07.999Z"
            }
        ]
    },
    "222492953929711618": {
        "Name": "Old Man Joe",
        "Demolitions": 31015,
        "Exterminations": 462,
        "LastUpdate": "2022-10-09T22:22:15.958Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 24021,
                "Exterminations": 320,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 27870,
                "Exterminations": 405,
                "Time": "2022-04-20T05:18:59.632Z"
            },
            {
                "Demolitions": 30015,
                "Exterminations": 439,
                "Time": "2022-08-21T18:58:10.564Z"
            },
            {
                "Demolitions": 31015,
                "Exterminations": 462,
                "Time": "2022-10-09T22:22:15.958Z"
            }
        ],
        "Country": "USA"
    },
    "259152640640811009": {
        "Name": "GenesisAU",
        "Demolitions": 15707,
        "Exterminations": 185,
        "LastUpdate": "2023-01-15T02:22:43.817Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 4909,
                "Exterminations": 32,
                "Time": "2020-04-03T00:00:00.000Z"
            },
            {
                "Demolitions": 5427,
                "Exterminations": 36,
                "Time": "2020-05-24T00:00:00.000Z"
            },
            {
                "Demolitions": 5740,
                "Exterminations": 40,
                "Time": "2020-07-23T00:00:00.000Z"
            },
            {
                "Demolitions": 6260,
                "Exterminations": 57,
                "Time": "2020-08-22T00:00:00.000Z"
            },
            {
                "Demolitions": 6828,
                "Exterminations": 63,
                "Time": "2020-10-04T00:00:00.000Z"
            },
            {
                "Demolitions": 7181,
                "Exterminations": 71,
                "Time": "2020-10-21T00:00:00.000Z"
            },
            {
                "Demolitions": 7500,
                "Exterminations": 74,
                "Time": "2020-11-16T00:00:00.000Z"
            },
            {
                "Demolitions": 8012,
                "Exterminations": 75,
                "Time": "2020-12-31T00:00:00.000Z"
            },
            {
                "Demolitions": 10071,
                "Exterminations": 87,
                "Time": "2022-01-13T00:00:00.000Z"
            },
            {
                "Demolitions": 10616,
                "Exterminations": 95,
                "Time": "2022-02-03T00:00:00.000Z"
            },
            {
                "Demolitions": 11020,
                "Exterminations": 108,
                "Time": "2022-03-03T00:00:00.000Z"
            },
            {
                "Demolitions": 11714,
                "Exterminations": 120,
                "Time": "2022-04-03T00:00:00.000Z"
            },
            {
                "Demolitions": 11994,
                "Exterminations": 127,
                "Time": "2022-04-17T06:48:57.716Z"
            },
            {
                "Demolitions": 12404,
                "Exterminations": 132,
                "Time": "2022-05-25T11:58:17.700Z"
            },
            {
                "Demolitions": 12628,
                "Exterminations": 133,
                "Time": "2022-06-21T09:45:51.402Z"
            },
            {
                "Demolitions": 13148,
                "Exterminations": 139,
                "Time": "2022-08-18T00:36:28.289Z"
            },
            {
                "Demolitions": 14050,
                "Exterminations": 145,
                "Time": "2022-10-14T05:43:24.832Z"
            },
            {
                "Demolitions": 14338,
                "Exterminations": 145,
                "Time": "2022-11-10T00:45:36.596Z"
            },
            {
                "Demolitions": 14564,
                "Exterminations": 151,
                "Time": "2022-11-19T23:38:03.993Z"
            },
            {
                "Demolitions": 14897,
                "Exterminations": 166,
                "Time": "2022-11-28T21:34:43.445Z"
            },
            {
                "Demolitions": 15707,
                "Exterminations": 185,
                "Time": "2023-01-15T02:22:43.817Z"
            }
        ],
        "Country": "AUS"
    },
    "183269591495999500": {
        "Name": "Xingor",
        "Demolitions": 5945,
        "Exterminations": 36,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 5945,
                "Exterminations": 36,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "649468843768414218": {
        "Name": "JGB",
        "Demolitions": 116008,
        "Exterminations": 6779,
        "LastUpdate": "2023-02-02T15:43:40.613Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 23889,
                "Exterminations": 112,
                "Time": "2020-04-08T00:00:00.000Z"
            },
            {
                "Demolitions": 30095,
                "Exterminations": 321,
                "Time": "2020-08-06T00:00:00.000Z"
            },
            {
                "Demolitions": 40006,
                "Exterminations": 962,
                "Time": "2020-12-02T00:00:00.000Z"
            },
            {
                "Demolitions": 40655,
                "Exterminations": 1000,
                "Time": "2020-12-11T00:00:00.000Z"
            },
            {
                "Demolitions": 50002,
                "Exterminations": 1685,
                "Time": "2021-03-31T00:00:00.000Z"
            },
            {
                "Demolitions": 60002,
                "Exterminations": 2506,
                "Time": "2021-07-09T00:00:00.000Z"
            },
            {
                "Demolitions": 70001,
                "Exterminations": 3331,
                "Time": "2021-11-09T00:00:00.000Z"
            },
            {
                "Demolitions": 80011,
                "Exterminations": 4185,
                "Time": "2022-02-17T00:00:00.000Z"
            },
            {
                "Demolitions": 90617,
                "Exterminations": 4991,
                "Time": "2022-05-03T17:05:14.951Z"
            },
            {
                "Demolitions": 90699,
                "Exterminations": 5000,
                "Time": "2022-05-04T00:24:45.835Z"
            },
            {
                "Demolitions": 90978,
                "Exterminations": 5023,
                "Time": "2022-05-04T17:12:42.033Z"
            },
            {
                "Demolitions": 91333,
                "Exterminations": 505,
                "Time": "2022-05-09T17:10:28.323Z"
            },
            {
                "Demolitions": 91333,
                "Exterminations": 5050,
                "Time": "2022-05-09T17:11:33.485Z"
            },
            {
                "Demolitions": 91636,
                "Exterminations": 5074,
                "Time": "2022-05-11T13:33:33.004Z"
            },
            {
                "Demolitions": 92129,
                "Exterminations": 5116,
                "Time": "2022-05-15T11:59:37.407Z"
            },
            {
                "Demolitions": 92458,
                "Exterminations": 5151,
                "Time": "2022-05-16T16:22:30.443Z"
            },
            {
                "Demolitions": 92628,
                "Exterminations": 5165,
                "Time": "2022-05-17T16:09:10.296Z"
            },
            {
                "Demolitions": 93001,
                "Exterminations": 5197,
                "Time": "2022-05-21T17:24:23.344Z"
            },
            {
                "Demolitions": 93502,
                "Exterminations": 5245,
                "Time": "2022-05-23T16:43:39.080Z"
            },
            {
                "Demolitions": 93741,
                "Exterminations": 5262,
                "Time": "2022-05-24T17:06:15.875Z"
            },
            {
                "Demolitions": 94049,
                "Exterminations": 5280,
                "Time": "2022-05-26T17:01:11.056Z"
            },
            {
                "Demolitions": 94444,
                "Exterminations": 5307,
                "Time": "2022-06-02T14:08:52.766Z"
            },
            {
                "Demolitions": 94922,
                "Exterminations": 5350,
                "Time": "2022-06-04T17:03:30.722Z"
            },
            {
                "Demolitions": 95004,
                "Exterminations": 5360,
                "Time": "2022-06-05T11:34:37.718Z"
            },
            {
                "Demolitions": 95313,
                "Exterminations": 5388,
                "Time": "2022-06-06T16:27:52.624Z"
            },
            {
                "Demolitions": 95768,
                "Exterminations": 5417,
                "Time": "2022-06-08T17:09:18.490Z"
            },
            {
                "Demolitions": 96005,
                "Exterminations": 5438,
                "Time": "2022-06-09T17:38:02.433Z"
            },
            {
                "Demolitions": 97305,
                "Exterminations": 5560,
                "Time": "2022-06-19T06:35:03.903Z"
            },
            {
                "Demolitions": 97305,
                "Exterminations": 5560,
                "Time": "2022-07-02T15:42:56.604Z"
            },
            {
                "Demolitions": 99002,
                "Exterminations": 5688,
                "Time": "2022-07-05T15:04:02.296Z"
            },
            {
                "Demolitions": 99270,
                "Exterminations": 5796,
                "Time": "2022-07-11T02:32:59.589Z"
            },
            {
                "Demolitions": 99359,
                "Exterminations": 5712,
                "Time": "2022-07-11T07:12:04.652Z"
            },
            {
                "Demolitions": 99778,
                "Exterminations": 5749,
                "Time": "2022-07-16T07:00:40.782Z"
            },
            {
                "Demolitions": 100006,
                "Exterminations": 5767,
                "Time": "2022-07-17T01:22:05.443Z"
            },
            {
                "Demolitions": 100218,
                "Exterminations": 5780,
                "Time": "2022-07-19T09:10:18.132Z"
            },
            {
                "Demolitions": 100440,
                "Exterminations": 5794,
                "Time": "2022-07-21T14:55:40.022Z"
            },
            {
                "Demolitions": 100644,
                "Exterminations": 5803,
                "Time": "2022-07-27T16:44:04.502Z"
            },
            {
                "Demolitions": 100762,
                "Exterminations": 5811,
                "Time": "2022-08-03T01:44:52.719Z"
            },
            {
                "Demolitions": 100907,
                "Exterminations": 5820,
                "Time": "2022-08-03T17:09:30.944Z"
            },
            {
                "Demolitions": 101026,
                "Exterminations": 5828,
                "Time": "2022-08-05T01:30:53.381Z"
            },
            {
                "Demolitions": 101178,
                "Exterminations": 5827,
                "Time": "2022-08-08T15:37:29.469Z"
            },
            {
                "Demolitions": 101178,
                "Exterminations": 5837,
                "Time": "2022-08-08T15:37:48.254Z"
            },
            {
                "Demolitions": 101302,
                "Exterminations": 5840,
                "Time": "2022-08-11T02:12:14.628Z"
            },
            {
                "Demolitions": 101711,
                "Exterminations": 5860,
                "Time": "2022-08-16T17:11:50.158Z"
            },
            {
                "Demolitions": 102002,
                "Exterminations": 5876,
                "Time": "2022-08-19T01:28:11.584Z"
            },
            {
                "Demolitions": 102275,
                "Exterminations": 5893,
                "Time": "2022-08-24T08:23:54.666Z"
            },
            {
                "Demolitions": 102248,
                "Exterminations": 5902,
                "Time": "2022-08-27T12:39:56.762Z"
            },
            {
                "Demolitions": 102706,
                "Exterminations": 5915,
                "Time": "2022-09-01T13:10:38.222Z"
            },
            {
                "Demolitions": 102866,
                "Exterminations": 5927,
                "Time": "2022-09-02T01:58:38.305Z"
            },
            {
                "Demolitions": 102896,
                "Exterminations": 5928,
                "Time": "2022-09-03T11:12:53.394Z"
            },
            {
                "Demolitions": 103825,
                "Exterminations": 5935,
                "Time": "2022-09-05T16:28:10.485Z"
            },
            {
                "Demolitions": 103197,
                "Exterminations": 5946,
                "Time": "2022-09-08T02:00:52.424Z"
            },
            {
                "Demolitions": 103361,
                "Exterminations": 5953,
                "Time": "2022-09-10T13:35:54.931Z"
            },
            {
                "Demolitions": 103603,
                "Exterminations": 5965,
                "Time": "2022-09-12T17:14:28.500Z"
            },
            {
                "Demolitions": 103893,
                "Exterminations": 5985,
                "Time": "2022-09-14T16:21:54.570Z"
            },
            {
                "Demolitions": 104018,
                "Exterminations": 5996,
                "Time": "2022-09-15T02:03:20.524Z"
            },
            {
                "Demolitions": 104430,
                "Exterminations": 6011,
                "Time": "2022-09-20T14:59:33.681Z"
            },
            {
                "Demolitions": 104713,
                "Exterminations": 6029,
                "Time": "2022-09-25T12:32:00.216Z"
            },
            {
                "Demolitions": 104873,
                "Exterminations": 6039,
                "Time": "2022-09-28T15:19:39.323Z"
            },
            {
                "Demolitions": 105012,
                "Exterminations": 6049,
                "Time": "2022-09-29T15:15:19.143Z"
            },
            {
                "Demolitions": 105273,
                "Exterminations": 6073,
                "Time": "2022-10-03T02:47:03.417Z"
            },
            {
                "Demolitions": 105503,
                "Exterminations": 6082,
                "Time": "2022-10-08T02:50:55.121Z"
            },
            {
                "Demolitions": 105697,
                "Exterminations": 6096,
                "Time": "2022-10-10T16:07:37.823Z"
            },
            {
                "Demolitions": 106017,
                "Exterminations": 6119,
                "Time": "2022-10-12T07:44:11.866Z"
            },
            {
                "Demolitions": 106405,
                "Exterminations": 6141,
                "Time": "2022-10-18T14:51:46.626Z"
            },
            {
                "Demolitions": 106532,
                "Exterminations": 6147,
                "Time": "2022-10-19T15:37:19.425Z"
            },
            {
                "Demolitions": 106731,
                "Exterminations": 6170,
                "Time": "2022-10-20T01:51:29.022Z"
            },
            {
                "Demolitions": 107017,
                "Exterminations": 6194,
                "Time": "2022-10-22T16:34:27.584Z"
            },
            {
                "Demolitions": 107314,
                "Exterminations": 6226,
                "Time": "2022-10-24T15:43:51.215Z"
            },
            {
                "Demolitions": 107568,
                "Exterminations": 6246,
                "Time": "2022-10-26T16:11:44.306Z"
            },
            {
                "Demolitions": 108001,
                "Exterminations": 6281,
                "Time": "2022-10-31T15:44:18.384Z"
            },
            {
                "Demolitions": 108564,
                "Exterminations": 6324,
                "Time": "2022-11-05T17:10:48.342Z"
            },
            {
                "Demolitions": 108836,
                "Exterminations": 6358,
                "Time": "2022-11-08T06:30:08.593Z"
            },
            {
                "Demolitions": 109014,
                "Exterminations": 6362,
                "Time": "2022-11-09T15:34:44.167Z"
            },
            {
                "Demolitions": 109209,
                "Exterminations": 6373,
                "Time": "2022-11-11T02:13:47.762Z"
            },
            {
                "Demolitions": 109535,
                "Exterminations": 6392,
                "Time": "2022-11-14T16:26:14.886Z"
            },
            {
                "Demolitions": 109689,
                "Exterminations": 6400,
                "Time": "2022-11-16T14:47:05.372Z"
            },
            {
                "Demolitions": 109689,
                "Exterminations": 6400,
                "Time": "2022-11-16T14:59:29.459Z"
            },
            {
                "Demolitions": 109767,
                "Exterminations": 6405,
                "Time": "2022-11-19T02:50:49.849Z"
            },
            {
                "Demolitions": 110002,
                "Exterminations": 6421,
                "Time": "2022-11-20T04:00:47.284Z"
            },
            {
                "Demolitions": 110276,
                "Exterminations": 6436,
                "Time": "2022-11-23T02:25:58.552Z"
            },
            {
                "Demolitions": 110606,
                "Exterminations": 6454,
                "Time": "2022-11-26T13:26:08.897Z"
            },
            {
                "Demolitions": 111111,
                "Exterminations": 6486,
                "Time": "2022-11-30T16:06:10.761Z"
            },
            {
                "Demolitions": 111444,
                "Exterminations": 6503,
                "Time": "2022-12-06T16:16:46.018Z"
            },
            {
                "Demolitions": 111666,
                "Exterminations": 6513,
                "Time": "2022-12-08T15:06:37.945Z"
            },
            {
                "Demolitions": 112039,
                "Exterminations": 6542,
                "Time": "2022-12-14T14:20:24.916Z"
            },
            {
                "Demolitions": 112601,
                "Exterminations": 6571,
                "Time": "2022-12-21T13:41:04.544Z"
            },
            {
                "Demolitions": 112750,
                "Exterminations": 6585,
                "Time": "2022-12-22T01:52:59.676Z"
            },
            {
                "Demolitions": 112861,
                "Exterminations": 6596,
                "Time": "2022-12-22T15:56:35.122Z"
            },
            {
                "Demolitions": 113010,
                "Exterminations": 6608,
                "Time": "2022-12-24T13:34:17.840Z"
            },
            {
                "Demolitions": 113400,
                "Exterminations": 6627,
                "Time": "2022-12-29T14:00:35.428Z"
            },
            {
                "Demolitions": 113614,
                "Exterminations": 6634,
                "Time": "2023-01-02T05:24:48.400Z"
            },
            {
                "Demolitions": 113750,
                "Exterminations": 6645,
                "Time": "2023-01-04T15:19:20.916Z"
            },
            {
                "Demolitions": 114003,
                "Exterminations": 6669,
                "Time": "2023-01-09T14:12:02.990Z"
            },
            {
                "Demolitions": 114502,
                "Exterminations": 6685,
                "Time": "2023-01-17T02:06:04.281Z"
            },
            {
                "Demolitions": 114738,
                "Exterminations": 6699,
                "Time": "2023-01-20T13:07:05.597Z"
            },
            {
                "Demolitions": 114881,
                "Exterminations": 6710,
                "Time": "2023-01-23T15:27:41.344Z"
            },
            {
                "Demolitions": 115017,
                "Exterminations": 6715,
                "Time": "2023-01-24T11:43:32.179Z"
            },
            {
                "Demolitions": 115246,
                "Exterminations": 6725,
                "Time": "2023-01-25T17:02:50.554Z"
            },
            {
                "Demolitions": 115465,
                "Exterminations": 6740,
                "Time": "2023-01-29T07:13:44.948Z"
            },
            {
                "Demolitions": 115804,
                "Exterminations": 6766,
                "Time": "2023-02-01T15:53:47.251Z"
            },
            {
                "Demolitions": 116008,
                "Exterminations": 6779,
                "Time": "2023-02-02T15:43:40.613Z"
            }
        ],
        "Country": "AUS"
    },
    "212136370062360576": {
        "Name": "b-lev",
        "Demolitions": 10923,
        "Exterminations": 92,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 10923,
                "Exterminations": 92,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "393149261866336267": {
        "Name": "Nation",
        "Demolitions": 2961,
        "Exterminations": 7,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 2961,
                "Exterminations": 7,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "172952419918020608": {
        "Name": "CaeruCat",
        "Demolitions": 11634,
        "Exterminations": 39,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 11634,
                "Exterminations": 39,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "562481281753939979": {
        "Name": "King Bonkk",
        "Demolitions": 12598,
        "Exterminations": 173,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 12598,
                "Exterminations": 173,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "603301981431398447": {
        "Name": "Shadeslayer",
        "Demolitions": 13830,
        "Exterminations": 194,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 13830,
                "Exterminations": 194,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "491241770391175178": {
        "Name": "August",
        "Demolitions": 7889,
        "Exterminations": 238,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 7889,
                "Exterminations": 238,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "420766216203010048": {
        "Name": "JustJacob",
        "Demolitions": 4127,
        "Exterminations": 113,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 4127,
                "Exterminations": 113,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "289753613440516096": {
        "Name": "MrSmile",
        "Demolitions": 9121,
        "Exterminations": 54,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 9121,
                "Exterminations": 54,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "401956367545401345": {
        "Name": "DukeBryzzo",
        "Demolitions": 14120,
        "Exterminations": 423,
        "LastUpdate": "2022-12-06T19:02:48.453Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 11958,
                "Exterminations": 400,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 12742,
                "Exterminations": 409,
                "Time": "2022-08-15T23:22:54.309Z"
            },
            {
                "Demolitions": 13362,
                "Exterminations": 411,
                "Time": "2022-10-04T03:24:26.083Z"
            },
            {
                "Demolitions": 13424,
                "Exterminations": 411,
                "Time": "2022-10-13T02:15:19.033Z"
            },
            {
                "Demolitions": 13555,
                "Exterminations": 411,
                "Time": "2022-10-30T04:22:51.112Z"
            },
            {
                "Demolitions": 13736,
                "Exterminations": 413,
                "Time": "2022-11-09T04:00:39.373Z"
            },
            {
                "Demolitions": 13898,
                "Exterminations": 419,
                "Time": "2022-11-16T02:40:15.273Z"
            },
            {
                "Demolitions": 13973,
                "Exterminations": 422,
                "Time": "2022-11-26T20:29:56.860Z"
            },
            {
                "Demolitions": 14120,
                "Exterminations": 423,
                "Time": "2022-12-06T19:02:48.453Z"
            }
        ]
    },
    "293001596261105664": {
        "Name": "Hamster",
        "Demolitions": 2020,
        "Exterminations": 9,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 2020,
                "Exterminations": 9,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "507207174359875584": {
        "Name": "DernRL",
        "Demolitions": 3088,
        "Exterminations": 12,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 3088,
                "Exterminations": 12,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "221634709745172480": {
        "Name": "andu",
        "Demolitions": 69420,
        "Exterminations": 4601,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 19000,
                "Exterminations": 198,
                "Time": "2020-04-03T00:00:00.000Z"
            },
            {
                "Demolitions": 20757,
                "Exterminations": 256,
                "Time": "2020-06-01T00:00:00.000Z"
            },
            {
                "Demolitions": 21563,
                "Exterminations": 277,
                "Time": "2020-07-07T00:00:00.000Z"
            },
            {
                "Demolitions": 22461,
                "Exterminations": 321,
                "Time": "2020-08-01T00:00:00.000Z"
            },
            {
                "Demolitions": 23746,
                "Exterminations": 382,
                "Time": "2020-09-09T00:00:00.000Z"
            },
            {
                "Demolitions": 24753,
                "Exterminations": 454,
                "Time": "2020-10-19T00:00:00.000Z"
            },
            {
                "Demolitions": 26283,
                "Exterminations": 594,
                "Time": "2020-11-01T00:00:00.000Z"
            },
            {
                "Demolitions": 28148,
                "Exterminations": 746,
                "Time": "2020-12-01T00:00:00.000Z"
            },
            {
                "Demolitions": 30000,
                "Exterminations": 886,
                "Time": "2020-12-22T00:00:00.000Z"
            },
            {
                "Demolitions": 30742,
                "Exterminations": 944,
                "Time": "2021-01-01T00:00:00.000Z"
            },
            {
                "Demolitions": 31453,
                "Exterminations": 1000,
                "Time": "2021-01-07T00:00:00.000Z"
            },
            {
                "Demolitions": 32356,
                "Exterminations": 1055,
                "Time": "2021-02-08T00:00:00.000Z"
            },
            {
                "Demolitions": 34290,
                "Exterminations": 1230,
                "Time": "2021-03-01T00:00:00.000Z"
            },
            {
                "Demolitions": 38434,
                "Exterminations": 1594,
                "Time": "2021-04-03T00:00:00.000Z"
            },
            {
                "Demolitions": 40002,
                "Exterminations": 1752,
                "Time": "2021-04-15T00:00:00.000Z"
            },
            {
                "Demolitions": 42069,
                "Exterminations": 1924,
                "Time": "2021-05-12T00:00:00.000Z"
            },
            {
                "Demolitions": 50005,
                "Exterminations": 2656,
                "Time": "2021-08-27T00:00:00.000Z"
            },
            {
                "Demolitions": 60027,
                "Exterminations": 3635,
                "Time": "2021-12-25T00:00:00.000Z"
            },
            {
                "Demolitions": 60982,
                "Exterminations": 3737,
                "Time": "2022-01-01T00:00:00.000Z"
            },
            {
                "Demolitions": 67038,
                "Exterminations": 4371,
                "Time": "2022-01-31T00:00:00.000Z"
            },
            {
                "Demolitions": 69420,
                "Exterminations": 4601,
                "Time": "2022-02-24T00:00:00.000Z"
            }
        ],
        "Country": "USA"
    },
    "332917240821448706": {
        "Name": "Dwies",
        "Demolitions": 6969,
        "Exterminations": 224,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 6969,
                "Exterminations": 224,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "115986393129418755": {
        "Name": "El_Unico_Nacho",
        "Demolitions": 15605,
        "Exterminations": 129,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 15605,
                "Exterminations": 129,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "107307158609137664": {
        "Name": "Dukenator76",
        "Demolitions": 8465,
        "Exterminations": 24,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 8465,
                "Exterminations": 24,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "140683250052890624": {
        "Name": "DemoNinja",
        "Demolitions": 84000,
        "Exterminations": 3321,
        "LastUpdate": "2022-07-28T17:06:03.055Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 71645,
                "Exterminations": 2788,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 84000,
                "Exterminations": 3321,
                "Time": "2022-07-28T17:06:03.055Z"
            }
        ]
    },
    "250783259783462923": {
        "Name": "Phorenzic",
        "Demolitions": 14981,
        "Exterminations": 38,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 14981,
                "Exterminations": 38,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "277655279770796042": {
        "Name": "GodraciR",
        "Demolitions": 16255,
        "Exterminations": 55,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 16255,
                "Exterminations": 55,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "469687024815964172": {
        "Name": "Punch-of-shame",
        "Demolitions": 4858,
        "Exterminations": 39,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 4858,
                "Exterminations": 39,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "280855111096598529": {
        "Name": "Worthy",
        "Demolitions": 7484,
        "Exterminations": 140,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 7484,
                "Exterminations": 140,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "252566091237163008": {
        "Name": "Chewie",
        "Demolitions": 6241,
        "Exterminations": 126,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 6241,
                "Exterminations": 126,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "318564071269990401": {
        "Name": "Frowzy",
        "Demolitions": 12105,
        "Exterminations": 42,
        "LastUpdate": "2022-04-03T00:10:32.859Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 11771,
                "Exterminations": 41,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 12105,
                "Exterminations": 42,
                "Time": "2022-04-03T00:10:32.859Z"
            }
        ],
        "Country": "URY"
    },
    "141890320047538176": {
        "Name": "Mayhem",
        "Demolitions": 14486,
        "Exterminations": 147,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 14486,
                "Exterminations": 147,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "443527170392850434": {
        "Name": "Helix",
        "Demolitions": 1595,
        "Exterminations": 24,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 1595,
                "Exterminations": 24,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "128393360066084864": {
        "Name": "Nether Mason",
        "Demolitions": 48306,
        "Exterminations": 469,
        "LastUpdate": "2022-04-02T00:20:53.421Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 47710,
                "Exterminations": 461,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 48306,
                "Exterminations": 469,
                "Time": "2022-04-02T00:20:53.421Z"
            }
        ]
    },
    "293414204679913474": {
        "Name": "SAMSONIKS",
        "Demolitions": 23791,
        "Exterminations": 263,
        "LastUpdate": "2022-07-22T21:36:16.955Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 20420,
                "Exterminations": 212,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 21342,
                "Exterminations": 230,
                "Time": "2022-04-24T16:58:23.500Z"
            },
            {
                "Demolitions": 22976,
                "Exterminations": 254,
                "Time": "2022-06-16T00:34:45.206Z"
            },
            {
                "Demolitions": 23791,
                "Exterminations": 263,
                "Time": "2022-07-22T21:36:16.955Z"
            }
        ]
    },
    "261675045728813056": {
        "Name": "HurtNathan900",
        "Demolitions": 1053,
        "Exterminations": 13,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 1053,
                "Exterminations": 13,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "242476475553415169": {
        "Name": "Only Demos",
        "Demolitions": 63896,
        "Exterminations": 6346,
        "LastUpdate": "2022-09-15T00:43:38.123Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 46045,
                "Exterminations": 4376,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 55805,
                "Exterminations": 5452,
                "Time": "2022-06-28T16:55:24.365Z"
            },
            {
                "Demolitions": 57896,
                "Exterminations": 5687,
                "Time": "2022-07-09T17:31:42.301Z"
            },
            {
                "Demolitions": 59360,
                "Exterminations": 5846,
                "Time": "2022-07-26T00:51:22.613Z"
            },
            {
                "Demolitions": 60559,
                "Exterminations": 5981,
                "Time": "2022-08-01T02:27:37.344Z"
            },
            {
                "Demolitions": 60902,
                "Exterminations": 6018,
                "Time": "2022-08-06T05:16:50.857Z"
            },
            {
                "Demolitions": 63280,
                "Exterminations": 6278,
                "Time": "2022-08-24T23:27:00.168Z"
            },
            {
                "Demolitions": 63896,
                "Exterminations": 6346,
                "Time": "2022-09-15T00:43:38.123Z"
            }
        ]
    },
    "378027119307128832": {
        "Name": "Codylox",
        "Demolitions": 51685,
        "Exterminations": 4339,
        "LastUpdate": "2023-01-18T03:38:14.385Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 45108,
                "Exterminations": 3732,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 47497,
                "Exterminations": 3953,
                "Time": "2022-04-17T03:43:50.689Z"
            },
            {
                "Demolitions": 49035,
                "Exterminations": 4093,
                "Time": "2022-09-10T02:15:08.303Z"
            },
            {
                "Demolitions": 51685,
                "Exterminations": 4339,
                "Time": "2023-01-18T03:38:14.385Z"
            }
        ]
    },
    "145950460078063616": {
        "Name": "MockHD",
        "Demolitions": 2667,
        "Exterminations": 56,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 2667,
                "Exterminations": 56,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "535681473114669071": {
        "Name": "Kevlar",
        "Demolitions": 1,
        "Exterminations": 1,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 1,
                "Exterminations": 1,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "592476297490595841": {
        "Name": "1Man2Controllers",
        "Demolitions": 9564,
        "Exterminations": 119,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 9564,
                "Exterminations": 119,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "365759142142541824": {
        "Name": "Batsenpai",
        "Demolitions": 10001,
        "Exterminations": 592,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 10001,
                "Exterminations": 592,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "195712628855799810": {
        "Name": "Syndryll",
        "Demolitions": 50656,
        "Exterminations": 4689,
        "LastUpdate": "2022-04-15T03:18:28.839Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 3534,
                "Exterminations": 197,
                "Time": "2020-08-22T00:00:00.000Z"
            },
            {
                "Demolitions": 6001,
                "Exterminations": 365,
                "Time": "2020-10-03T00:00:00.000Z"
            },
            {
                "Demolitions": 10021,
                "Exterminations": 667,
                "Time": "2020-12-15T00:00:00.000Z"
            },
            {
                "Demolitions": 12002,
                "Exterminations": 819,
                "Time": "2021-01-16T00:00:00.000Z"
            },
            {
                "Demolitions": 14169,
                "Exterminations": 1000,
                "Time": "2021-02-06T00:00:00.000Z"
            },
            {
                "Demolitions": 20001,
                "Exterminations": 1491,
                "Time": "2021-04-02T00:00:00.000Z"
            },
            {
                "Demolitions": 30009,
                "Exterminations": 2470,
                "Time": "2021-06-01T00:00:00.000Z"
            },
            {
                "Demolitions": 34806,
                "Exterminations": 3007,
                "Time": "2021-09-02T00:00:00.000Z"
            },
            {
                "Demolitions": 40010,
                "Exterminations": 3599,
                "Time": "2021-09-22T00:00:00.000Z"
            },
            {
                "Demolitions": 42069,
                "Exterminations": 3814,
                "Time": "2021-11-03T00:00:00.000Z"
            },
            {
                "Demolitions": 44046,
                "Exterminations": 4023,
                "Time": "2021-11-08T00:00:00.000Z"
            },
            {
                "Demolitions": 46000,
                "Exterminations": 4244,
                "Time": "2021-11-19T00:00:00.000Z"
            },
            {
                "Demolitions": 47623,
                "Exterminations": 4416,
                "Time": "2022-02-25T00:00:00.000Z"
            },
            {
                "Demolitions": 49278,
                "Exterminations": 4558,
                "Time": "2022-04-01T00:00:00.000Z"
            },
            {
                "Demolitions": 50016,
                "Exterminations": 4618,
                "Time": "2022-04-08T16:49:49.279Z"
            },
            {
                "Demolitions": 50656,
                "Exterminations": 4689,
                "Time": "2022-04-15T03:18:28.839Z"
            }
        ],
        "Country": "USA"
    },
    "318810814817501184": {
        "Name": "Sid",
        "Demolitions": 2502,
        "Exterminations": 50,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 2502,
                "Exterminations": 50,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "454419301399789569": {
        "Name": "BoogerBear5067",
        "Demolitions": 36261,
        "Exterminations": 1354,
        "LastUpdate": "2022-11-08T04:56:47.687Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 26725,
                "Exterminations": 1042,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 26969,
                "Exterminations": 1056,
                "Time": "2022-04-01T15:21:22.233Z"
            },
            {
                "Demolitions": 27104,
                "Exterminations": 1060,
                "Time": "2022-04-06T05:14:14.466Z"
            },
            {
                "Demolitions": 27797,
                "Exterminations": 1085,
                "Time": "2022-04-22T21:11:50.730Z"
            },
            {
                "Demolitions": 27944,
                "Exterminations": 1091,
                "Time": "2022-04-26T03:24:31.006Z"
            },
            {
                "Demolitions": 27993,
                "Exterminations": 1092,
                "Time": "2022-04-29T02:02:24.181Z"
            },
            {
                "Demolitions": 28172,
                "Exterminations": 1100,
                "Time": "2022-05-03T01:05:12.189Z"
            },
            {
                "Demolitions": 28247,
                "Exterminations": 1102,
                "Time": "2022-05-05T04:39:53.082Z"
            },
            {
                "Demolitions": 30024,
                "Exterminations": 1183,
                "Time": "2022-06-02T00:32:49.828Z"
            },
            {
                "Demolitions": 30473,
                "Exterminations": 1199,
                "Time": "2022-06-12T18:56:17.373Z"
            },
            {
                "Demolitions": 31147,
                "Exterminations": 1205,
                "Time": "2022-06-22T20:55:17.725Z"
            },
            {
                "Demolitions": 31750,
                "Exterminations": 1224,
                "Time": "2022-07-07T20:33:48.366Z"
            },
            {
                "Demolitions": 33083,
                "Exterminations": 1253,
                "Time": "2022-08-18T00:23:34.579Z"
            },
            {
                "Demolitions": 33296,
                "Exterminations": 1260,
                "Time": "2022-08-24T01:43:20.205Z"
            },
            {
                "Demolitions": 33624,
                "Exterminations": 1275,
                "Time": "2022-08-28T04:01:53.610Z"
            },
            {
                "Demolitions": 34165,
                "Exterminations": 1281,
                "Time": "2022-09-10T02:20:44.298Z"
            },
            {
                "Demolitions": 34604,
                "Exterminations": 1289,
                "Time": "2022-09-23T01:12:40.236Z"
            },
            {
                "Demolitions": 31578,
                "Exterminations": 1308,
                "Time": "2022-10-09T17:36:14.557Z"
            },
            {
                "Demolitions": 35178,
                "Exterminations": 1308,
                "Time": "2022-10-09T17:37:03.479Z"
            },
            {
                "Demolitions": 35794,
                "Exterminations": 1333,
                "Time": "2022-10-28T01:50:51.254Z"
            },
            {
                "Demolitions": 36261,
                "Exterminations": 1354,
                "Time": "2022-11-08T04:56:47.687Z"
            }
        ],
        "Country": "USA"
    },
    "334677595255734272": {
        "Name": "TushkaOklhilli",
        "Demolitions": 8354,
        "Exterminations": 9,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 8354,
                "Exterminations": 9,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "268807215635365889": {
        "Name": "ICBM-Tactical Nuke",
        "Demolitions": 23166,
        "Exterminations": 940,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 23166,
                "Exterminations": 940,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "530929570472525865": {
        "Name": "Caterpickel",
        "Demolitions": 44583,
        "Exterminations": 1812,
        "LastUpdate": "2022-12-20T07:23:39.027Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 6835,
                "Exterminations": 82,
                "Time": "2020-08-31T00:00:00.000Z"
            },
            {
                "Demolitions": 8699,
                "Exterminations": 140,
                "Time": "2020-11-01T00:00:00.000Z"
            },
            {
                "Demolitions": 14106,
                "Exterminations": 220,
                "Time": "2020-12-04T00:00:00.000Z"
            },
            {
                "Demolitions": 16000,
                "Exterminations": 350,
                "Time": "2021-01-02T00:00:00.000Z"
            },
            {
                "Demolitions": 20000,
                "Exterminations": 623,
                "Time": "2021-03-04T00:00:00.000Z"
            },
            {
                "Demolitions": 24587,
                "Exterminations": 1001,
                "Time": "2021-04-18T00:00:00.000Z"
            },
            {
                "Demolitions": 27365,
                "Exterminations": 1188,
                "Time": "2021-06-06T00:00:00.000Z"
            },
            {
                "Demolitions": 30000,
                "Exterminations": 1381,
                "Time": "2021-07-19T00:00:00.000Z"
            },
            {
                "Demolitions": 31508,
                "Exterminations": 1433,
                "Time": "2021-09-06T00:00:00.000Z"
            },
            {
                "Demolitions": 33581,
                "Exterminations": 1531,
                "Time": "2022-02-06T00:00:00.000Z"
            },
            {
                "Demolitions": 37232,
                "Exterminations": 1559,
                "Time": "2022-04-02T19:29:50.321Z"
            },
            {
                "Demolitions": 38598,
                "Exterminations": 1603,
                "Time": "2022-05-11T02:23:35.390Z"
            },
            {
                "Demolitions": 40000,
                "Exterminations": 1636,
                "Time": "2022-07-05T21:53:47.106Z"
            },
            {
                "Demolitions": 42188,
                "Exterminations": 1703,
                "Time": "2022-09-22T16:32:25.463Z"
            },
            {
                "Demolitions": 43062,
                "Exterminations": 1730,
                "Time": "2022-10-30T22:08:08.816Z"
            },
            {
                "Demolitions": 44583,
                "Exterminations": 1812,
                "Time": "2022-12-20T07:23:39.027Z"
            }
        ],
        "Country": "USA"
    },
    "257452249645711361": {
        "Name": "Default",
        "Demolitions": 4421,
        "Exterminations": 101,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 4421,
                "Exterminations": 101,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "456775021738852353": {
        "Name": "panâ€™oâ€™war",
        "Demolitions": 1009,
        "Exterminations": 46,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 1009,
                "Exterminations": 46,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "393890629001674762": {
        "Name": "P as in Papi",
        "Demolitions": 104060,
        "Exterminations": 11150,
        "LastUpdate": "2023-01-22T11:05:28.677Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 53372,
                "Exterminations": 5802,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 56903,
                "Exterminations": 6177,
                "Time": "2022-05-27T22:25:02.393Z"
            },
            {
                "Demolitions": 59609,
                "Exterminations": 6471,
                "Time": "2022-06-10T02:43:05.454Z"
            },
            {
                "Demolitions": 60363,
                "Exterminations": 6552,
                "Time": "2022-06-15T23:01:41.463Z"
            },
            {
                "Demolitions": 61799,
                "Exterminations": 6720,
                "Time": "2022-06-24T03:35:55.556Z"
            },
            {
                "Demolitions": 63253,
                "Exterminations": 6866,
                "Time": "2022-06-29T18:27:48.894Z"
            },
            {
                "Demolitions": 64937,
                "Exterminations": 7047,
                "Time": "2022-07-04T07:38:09.530Z"
            },
            {
                "Demolitions": 66013,
                "Exterminations": 7140,
                "Time": "2022-07-12T00:48:15.579Z"
            },
            {
                "Demolitions": 70076,
                "Exterminations": 7581,
                "Time": "2022-07-26T01:06:30.913Z"
            },
            {
                "Demolitions": 71154,
                "Exterminations": 7696,
                "Time": "2022-07-31T07:20:18.451Z"
            },
            {
                "Demolitions": 72246,
                "Exterminations": 7811,
                "Time": "2022-08-07T03:16:25.734Z"
            },
            {
                "Demolitions": 74079,
                "Exterminations": 8013,
                "Time": "2022-08-16T02:48:10.689Z"
            },
            {
                "Demolitions": 76822,
                "Exterminations": 8313,
                "Time": "2022-09-01T21:21:11.943Z"
            },
            {
                "Demolitions": 79159,
                "Exterminations": 8571,
                "Time": "2022-09-11T20:04:44.513Z"
            },
            {
                "Demolitions": 79635,
                "Exterminations": 8623,
                "Time": "2022-09-14T03:38:08.654Z"
            },
            {
                "Demolitions": 80175,
                "Exterminations": 8681,
                "Time": "2022-09-17T19:11:40.390Z"
            },
            {
                "Demolitions": 81382,
                "Exterminations": 8805,
                "Time": "2022-09-28T05:47:55.867Z"
            },
            {
                "Demolitions": 82067,
                "Exterminations": 8871,
                "Time": "2022-10-02T06:57:46.131Z"
            },
            {
                "Demolitions": 83314,
                "Exterminations": 9001,
                "Time": "2022-10-11T22:33:59.984Z"
            },
            {
                "Demolitions": 84337,
                "Exterminations": 9101,
                "Time": "2022-10-17T07:31:14.104Z"
            },
            {
                "Demolitions": 85266,
                "Exterminations": 9200,
                "Time": "2022-10-21T09:46:42.808Z"
            },
            {
                "Demolitions": 87144,
                "Exterminations": 9395,
                "Time": "2022-10-31T09:41:15.474Z"
            },
            {
                "Demolitions": 88088,
                "Exterminations": 9493,
                "Time": "2022-11-03T19:51:27.440Z"
            },
            {
                "Demolitions": 89141,
                "Exterminations": 9603,
                "Time": "2022-11-13T11:28:12.823Z"
            },
            {
                "Demolitions": 89925,
                "Exterminations": 9688,
                "Time": "2022-11-17T13:03:13.479Z"
            },
            {
                "Demolitions": 90067,
                "Exterminations": 9702,
                "Time": "2022-11-19T19:38:47.845Z"
            },
            {
                "Demolitions": 92937,
                "Exterminations": 10000,
                "Time": "2022-12-02T06:30:54.332Z"
            },
            {
                "Demolitions": 95033,
                "Exterminations": 10229,
                "Time": "2022-12-08T04:52:59.218Z"
            },
            {
                "Demolitions": 97154,
                "Exterminations": 10437,
                "Time": "2022-12-18T21:00:44.881Z"
            },
            {
                "Demolitions": 99023,
                "Exterminations": 10638,
                "Time": "2022-12-23T09:50:49.028Z"
            },
            {
                "Demolitions": 100000,
                "Exterminations": 10740,
                "Time": "2023-01-02T06:12:54.536Z"
            },
            {
                "Demolitions": 103480,
                "Exterminations": 11090,
                "Time": "2023-01-18T02:17:39.446Z"
            },
            {
                "Demolitions": 60,
                "Exterminations": 0,
                "Time": "2023-01-22T11:01:33.920Z"
            },
            {
                "Demolitions": 104060,
                "Exterminations": 11150,
                "Time": "2023-01-22T11:02:11.526Z"
            },
            {
                "Demolitions": 104060,
                "Exterminations": 11150,
                "Time": "2023-01-22T11:03:48.190Z"
            },
            {
                "Demolitions": 104060,
                "Exterminations": 11150,
                "Time": "2023-01-22T11:04:32.210Z"
            },
            {
                "Demolitions": 104060,
                "Exterminations": 11150,
                "Time": "2023-01-22T11:05:28.677Z"
            }
        ],
        "Country": "USA"
    },
    "416332871746322452": {
        "Name": "wabuu",
        "Demolitions": 5005,
        "Exterminations": 128,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 5005,
                "Exterminations": 128,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "541676638081908757": {
        "Name": "Balalaika",
        "Demolitions": 12579,
        "Exterminations": 24,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 12579,
                "Exterminations": 24,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "642476148919369728": {
        "Name": "TheManimalz",
        "Demolitions": 46575,
        "Exterminations": 4463,
        "LastUpdate": "2022-09-23T01:36:55.437Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 37740,
                "Exterminations": 3516,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 39794,
                "Exterminations": 3741,
                "Time": "2022-04-14T19:25:15.117Z"
            },
            {
                "Demolitions": 40002,
                "Exterminations": 3766,
                "Time": "2022-05-06T23:39:13.462Z"
            },
            {
                "Demolitions": 41754,
                "Exterminations": 3947,
                "Time": "2022-07-19T04:12:09.522Z"
            },
            {
                "Demolitions": 42350,
                "Exterminations": 4000,
                "Time": "2022-08-12T03:51:56.966Z"
            },
            {
                "Demolitions": 43247,
                "Exterminations": 4100,
                "Time": "2022-08-19T04:45:52.819Z"
            },
            {
                "Demolitions": 45060,
                "Exterminations": 4301,
                "Time": "2022-09-01T05:04:48.308Z"
            },
            {
                "Demolitions": 46010,
                "Exterminations": 4403,
                "Time": "2022-09-12T17:51:18.521Z"
            },
            {
                "Demolitions": 46575,
                "Exterminations": 4463,
                "Time": "2022-09-23T01:36:55.437Z"
            }
        ],
        "Country": "USA"
    },
    "528075826751733813": {
        "Name": "Juice Vineyards",
        "Demolitions": 4909,
        "Exterminations": 71,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 4909,
                "Exterminations": 71,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "160006203156594688": {
        "Name": "h0td0Gxxx",
        "Demolitions": 7479,
        "Exterminations": 271,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 7479,
                "Exterminations": 271,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "227858339902652417": {
        "Name": "Cold Demon",
        "Demolitions": 25579,
        "Exterminations": 1179,
        "LastUpdate": "2022-09-22T15:38:00.591Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 21931,
                "Exterminations": 1001,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 22866,
                "Exterminations": 1043,
                "Time": "2022-04-05T01:54:42.788Z"
            },
            {
                "Demolitions": 23261,
                "Exterminations": 1064,
                "Time": "2022-05-19T10:44:43.967Z"
            },
            {
                "Demolitions": 23352,
                "Exterminations": 1064,
                "Time": "2022-05-26T01:00:42.041Z"
            },
            {
                "Demolitions": 23391,
                "Exterminations": 1067,
                "Time": "2022-06-01T09:51:13.920Z"
            },
            {
                "Demolitions": 23451,
                "Exterminations": 1073,
                "Time": "2022-06-06T21:54:13.681Z"
            },
            {
                "Demolitions": 23745,
                "Exterminations": 1092,
                "Time": "2022-06-17T14:58:27.606Z"
            },
            {
                "Demolitions": 24215,
                "Exterminations": 1108,
                "Time": "2022-06-26T09:47:06.265Z"
            },
            {
                "Demolitions": 24959,
                "Exterminations": 1148,
                "Time": "2022-08-12T15:55:07.881Z"
            },
            {
                "Demolitions": 25579,
                "Exterminations": 1179,
                "Time": "2022-09-22T15:38:00.591Z"
            }
        ]
    },
    "423263684589125643": {
        "Name": "Destroyer",
        "Demolitions": 7004,
        "Exterminations": 151,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 7004,
                "Exterminations": 151,
                "Time": "2015-07-07T00:00:00.000"
            }
        ],
        "Country": "USA"
    },
    "249065139347783680": {
        "Name": "TimThree",
        "Demolitions": 12857,
        "Exterminations": 443,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 12857,
                "Exterminations": 443,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "527609743574040607": {
        "Name": "kittinikki",
        "Demolitions": 11712,
        "Exterminations": 291,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 11712,
                "Exterminations": 291,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "235770319116173312": {
        "Name": "Xutos",
        "Demolitions": 2147,
        "Exterminations": 2,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 2147,
                "Exterminations": 2,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "499251843084582922": {
        "Name": "bowfar",
        "Demolitions": 420,
        "Exterminations": 69,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 420,
                "Exterminations": 69,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "298203193790300160": {
        "Name": "Dorkmanship",
        "Demolitions": 34492,
        "Exterminations": 239,
        "LastUpdate": "2022-05-09T14:34:08.972Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 30556,
                "Exterminations": 195,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 34492,
                "Exterminations": 239,
                "Time": "2022-05-09T14:34:08.972Z"
            }
        ]
    },
    "198284674131296257": {
        "Name": "TannerBoBanner",
        "Demolitions": 4478,
        "Exterminations": 45,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 4478,
                "Exterminations": 45,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "188997710311981057": {
        "Name": "craziness924",
        "Demolitions": 17911,
        "Exterminations": 776,
        "LastUpdate": "2022-09-22T20:35:34.429Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 13628,
                "Exterminations": 575,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 15901,
                "Exterminations": 689,
                "Time": "2022-04-28T22:33:53.278Z"
            },
            {
                "Demolitions": 17911,
                "Exterminations": 776,
                "Time": "2022-09-22T20:35:34.429Z"
            }
        ]
    },
    "285132644583473153": {
        "Name": "VikingElder",
        "Demolitions": 41572,
        "Exterminations": 2019,
        "LastUpdate": "2023-01-01T15:14:44.013Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 39403,
                "Exterminations": 1956,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 41572,
                "Exterminations": 2019,
                "Time": "2023-01-01T15:14:44.013Z"
            }
        ]
    },
    "399334255563505666": {
        "Name": "SNAK3Y",
        "Demolitions": 24101,
        "Exterminations": 1844,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 24101,
                "Exterminations": 1844,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "274623141844615171": {
        "Name": "VikingBoner",
        "Demolitions": 9067,
        "Exterminations": 95,
        "LastUpdate": "2023-01-15T23:42:56.416Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 6156,
                "Exterminations": 61,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 9067,
                "Exterminations": 95,
                "Time": "2023-01-15T23:42:56.416Z"
            }
        ]
    },
    "513803357224173590": {
        "Name": "Ayy Stanley",
        "Demolitions": 9884,
        "Exterminations": 23,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 9884,
                "Exterminations": 23,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "292402746185744394": {
        "Name": "Goldfish",
        "Demolitions": 25397,
        "Exterminations": 353,
        "LastUpdate": "2022-11-21T00:23:58.432Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 22303,
                "Exterminations": 337,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 23814,
                "Exterminations": 346,
                "Time": "2022-06-11T16:37:10.805Z"
            },
            {
                "Demolitions": 24677,
                "Exterminations": 349,
                "Time": "2022-09-26T19:24:28.371Z"
            },
            {
                "Demolitions": 25019,
                "Exterminations": 351,
                "Time": "2022-10-24T21:25:11.891Z"
            },
            {
                "Demolitions": 25397,
                "Exterminations": 353,
                "Time": "2022-11-21T00:23:58.432Z"
            }
        ]
    },
    "320223013192728588": {
        "Name": "Hersir",
        "Demolitions": 7778,
        "Exterminations": 15,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 7778,
                "Exterminations": 15,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "408826509709672451": {
        "Name": "AlpacaFlightSim",
        "Demolitions": 15020,
        "Exterminations": 36,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 15020,
                "Exterminations": 36,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "210323417096781824": {
        "Name": "Pinwheel",
        "Demolitions": 7688,
        "Exterminations": 79,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 7688,
                "Exterminations": 79,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "249060890396065794": {
        "Name": "Sticky224",
        "Demolitions": 27439,
        "Exterminations": 2393,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 27439,
                "Exterminations": 2393,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "400585090213609472": {
        "Name": "Jayknight",
        "Demolitions": 30867,
        "Exterminations": 1737,
        "LastUpdate": "2023-01-16T16:23:36.686Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 26225,
                "Exterminations": 1419,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 26520,
                "Exterminations": 1443,
                "Time": "2022-04-01T09:02:57.949Z"
            },
            {
                "Demolitions": 26691,
                "Exterminations": 1460,
                "Time": "2022-04-08T09:50:50.040Z"
            },
            {
                "Demolitions": 26926,
                "Exterminations": 1485,
                "Time": "2022-04-13T15:19:04.526Z"
            },
            {
                "Demolitions": 27453,
                "Exterminations": 1525,
                "Time": "2022-05-06T09:52:52.925Z"
            },
            {
                "Demolitions": 27984,
                "Exterminations": 1559,
                "Time": "2022-05-24T09:09:24.998Z"
            },
            {
                "Demolitions": 28391,
                "Exterminations": 1585,
                "Time": "2022-06-20T09:43:20.333Z"
            },
            {
                "Demolitions": 29182,
                "Exterminations": 1625,
                "Time": "2022-09-13T21:14:23.098Z"
            },
            {
                "Demolitions": 29241,
                "Exterminations": 1630,
                "Time": "2022-09-15T15:31:42.182Z"
            },
            {
                "Demolitions": 29561,
                "Exterminations": 1656,
                "Time": "2022-09-22T09:33:09.146Z"
            },
            {
                "Demolitions": 30108,
                "Exterminations": 1690,
                "Time": "2022-10-18T15:34:19.481Z"
            },
            {
                "Demolitions": 30867,
                "Exterminations": 1737,
                "Time": "2023-01-16T16:23:36.686Z"
            }
        ],
        "Country": "FR"
    },
    "532611034842923019": {
        "Name": "Ian",
        "Demolitions": 2285,
        "Exterminations": 38,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 2285,
                "Exterminations": 38,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "305376633370443776": {
        "Name": "Aiglenoir",
        "Demolitions": 33674,
        "Exterminations": 1590,
        "LastUpdate": "2023-01-27T19:21:51.256Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 23071,
                "Exterminations": 963,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 23417,
                "Exterminations": 984,
                "Time": "2022-03-31T19:53:54.694Z"
            },
            {
                "Demolitions": 23996,
                "Exterminations": 1031,
                "Time": "2022-04-13T15:19:24.337Z"
            },
            {
                "Demolitions": 24459,
                "Exterminations": 1049,
                "Time": "2022-04-24T19:27:59.740Z"
            },
            {
                "Demolitions": 25366,
                "Exterminations": 1104,
                "Time": "2022-05-21T09:13:54.726Z"
            },
            {
                "Demolitions": 25658,
                "Exterminations": 1131,
                "Time": "2022-05-25T19:24:36.753Z"
            },
            {
                "Demolitions": 26708,
                "Exterminations": 1174,
                "Time": "2022-07-15T19:59:04.286Z"
            },
            {
                "Demolitions": 27796,
                "Exterminations": 1191,
                "Time": "2022-09-14T09:42:56.759Z"
            },
            {
                "Demolitions": 28071,
                "Exterminations": 1217,
                "Time": "2022-09-15T15:31:08.890Z"
            },
            {
                "Demolitions": 28211,
                "Exterminations": 1234,
                "Time": "2022-09-16T11:52:31.569Z"
            },
            {
                "Demolitions": 28416,
                "Exterminations": 1253,
                "Time": "2022-09-19T19:17:31.138Z"
            },
            {
                "Demolitions": 28593,
                "Exterminations": 1271,
                "Time": "2022-09-21T19:49:46.070Z"
            },
            {
                "Demolitions": 28925,
                "Exterminations": 1307,
                "Time": "2022-09-25T15:30:56.892Z"
            },
            {
                "Demolitions": 29247,
                "Exterminations": 1340,
                "Time": "2022-09-29T16:19:55.416Z"
            },
            {
                "Demolitions": 29585,
                "Exterminations": 1369,
                "Time": "2022-10-02T20:31:31.866Z"
            },
            {
                "Demolitions": 30079,
                "Exterminations": 1417,
                "Time": "2022-10-09T15:49:02.631Z"
            },
            {
                "Demolitions": 30647,
                "Exterminations": 1456,
                "Time": "2022-10-19T19:57:36.579Z"
            },
            {
                "Demolitions": 31116,
                "Exterminations": 1515,
                "Time": "2022-10-23T09:37:21.828Z"
            },
            {
                "Demolitions": 31644,
                "Exterminations": 1567,
                "Time": "2022-10-30T09:14:49.956Z"
            },
            {
                "Demolitions": 33674,
                "Exterminations": 1590,
                "Time": "2023-01-27T19:21:51.256Z"
            }
        ],
        "Country": "FR"
    },
    "413165444929945602": {
        "Name": "DatPancake23",
        "Demolitions": 2277,
        "Exterminations": 73,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 2277,
                "Exterminations": 73,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "305473221891850241": {
        "Name": "ChonkyPoliwhirl",
        "Demolitions": 64104,
        "Exterminations": 7128,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 64104,
                "Exterminations": 7128,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "585570463028346898": {
        "Name": "doyouevenrocket",
        "Demolitions": 14,
        "Exterminations": 1,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 14,
                "Exterminations": 1,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "608062485311913987": {
        "Name": "myt",
        "Demolitions": 1149,
        "Exterminations": 56,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 1149,
                "Exterminations": 56,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "457987712029556776": {
        "Name": "Kracken",
        "Demolitions": 23479,
        "Exterminations": 1549,
        "LastUpdate": "2023-01-26T23:13:27.095Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 18605,
                "Exterminations": 1363,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 23479,
                "Exterminations": 1549,
                "Time": "2023-01-26T23:10:51.044Z"
            },
            {
                "Demolitions": 23479,
                "Exterminations": 1549,
                "Time": "2023-01-26T23:13:27.095Z"
            }
        ]
    },
    "355697167266217985": {
        "Name": "LankyWaves",
        "Demolitions": 12572,
        "Exterminations": 95,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 12572,
                "Exterminations": 95,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "181655275185504257": {
        "Name": "Asparagus",
        "Demolitions": 20057,
        "Exterminations": 502,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 20057,
                "Exterminations": 502,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "299131044714774528": {
        "Name": "Predving",
        "Demolitions": 1656,
        "Exterminations": 5,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 1656,
                "Exterminations": 5,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "412071500309331978": {
        "Name": "Parallax",
        "Demolitions": 6744,
        "Exterminations": 118,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 6744,
                "Exterminations": 118,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "198006183368458240": {
        "Name": "TheKevinRL",
        "Demolitions": 13847,
        "Exterminations": 92,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 13847,
                "Exterminations": 92,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "347397580210044938": {
        "Name": "widepeepohappy",
        "Demolitions": 11834,
        "Exterminations": 472,
        "LastUpdate": "2022-04-01T23:38:07.338Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 11834,
                "Exterminations": 472,
                "Time": "2022-04-01T00:00:00.000Z"
            },
            {
                "Demolitions": 11316,
                "Exterminations": 464,
                "Time": "2022-03-01T00:00:00.000Z"
            },
            {
                "Demolitions": 11263,
                "Exterminations": 460,
                "Time": "2022-02-28T00:00:00.000Z"
            },
            {
                "Demolitions": 10007,
                "Exterminations": 424,
                "Time": "2021-11-17T00:00:00.000Z"
            },
            {
                "Demolitions": 6955,
                "Exterminations": 264,
                "Time": "2021-06-30T00:00:00.000Z"
            },
            {
                "Demolitions": 4477,
                "Exterminations": 105,
                "Time": "2021-05-31T00:00:00.000Z"
            },
            {
                "Demolitions": 3684,
                "Exterminations": 60,
                "Time": "2021-04-19T00:00:00.000Z"
            },
            {
                "Demolitions": 3491,
                "Exterminations": 58,
                "Time": "2021-03-28T00:00:00.000Z"
            },
            {
                "Demolitions": 2484,
                "Exterminations": 38,
                "Time": "2020-12-06T00:00:00.000Z"
            },
            {
                "Demolitions": 2371,
                "Exterminations": 32,
                "Time": "2020-11-24T00:00:00.000Z"
            }
        ],
        "Country": "USA"
    },
    "247503251753140234": {
        "Name": "Cognizants",
        "Demolitions": 7249,
        "Exterminations": 100,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 7249,
                "Exterminations": 100,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "742195657674063964": {
        "Name": "meat lazer",
        "Demolitions": 19437,
        "Exterminations": 1222,
        "LastUpdate": "2022-12-02T05:01:58.482Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 16936,
                "Exterminations": 1114,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 17281,
                "Exterminations": 1130,
                "Time": "2022-04-14T04:56:40.960Z"
            },
            {
                "Demolitions": 17868,
                "Exterminations": 1157,
                "Time": "2022-05-27T04:25:15.371Z"
            },
            {
                "Demolitions": 19089,
                "Exterminations": 1206,
                "Time": "2022-10-24T21:32:18.352Z"
            },
            {
                "Demolitions": 19437,
                "Exterminations": 1222,
                "Time": "2022-12-02T05:01:58.482Z"
            }
        ]
    },
    "122454714972504066": {
        "Name": "Mayo",
        "Demolitions": 5866,
        "Exterminations": 85,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 5866,
                "Exterminations": 85,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "725009744657645659": {
        "Name": "Koya",
        "Demolitions": 5966,
        "Exterminations": 272,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 5966,
                "Exterminations": 272,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "385474550709878785": {
        "Name": "Choice",
        "Demolitions": 150000,
        "Exterminations": 15451,
        "LastUpdate": "2022-06-05T19:50:33.779Z",
        "Authorized": 2,
        "History": [
            {
                "Demolitions": 128000,
                "Exterminations": 13561,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 143119,
                "Exterminations": 15042,
                "Time": "2022-03-31T20:06:09.586Z"
            },
            {
                "Demolitions": 150000,
                "Exterminations": 15451,
                "Time": "2022-06-05T19:50:33.779Z"
            }
        ],
        "Country": "ENG"
    },
    "198631965933568002": {
        "Name": "The_Albino_Dino",
        "Demolitions": 20113,
        "Exterminations": 341,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 20113,
                "Exterminations": 341,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "196269691763687424": {
        "Name": "Lacase",
        "Demolitions": 5754,
        "Exterminations": 186,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 5754,
                "Exterminations": 186,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "94593339214528512": {
        "Name": "THE THIN6",
        "Demolitions": 4555,
        "Exterminations": 205,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 4555,
                "Exterminations": 205,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "314935438999552000": {
        "Name": "Mr Horse",
        "Demolitions": 508,
        "Exterminations": 9,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 508,
                "Exterminations": 9,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "424791146485514240": {
        "Name": "elprincipe759",
        "Demolitions": 511,
        "Exterminations": 22,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 511,
                "Exterminations": 22,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "306191757597474817": {
        "Name": "Daboodeedabodah",
        "Demolitions": 114779,
        "Exterminations": 12086,
        "LastUpdate": "2023-01-24T10:50:24.039Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 73129,
                "Exterminations": 7338,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 79158,
                "Exterminations": 8030,
                "Time": "2022-03-31T19:45:27.957Z"
            },
            {
                "Demolitions": 80000,
                "Exterminations": 8130,
                "Time": "2022-04-13T10:48:29.157Z"
            },
            {
                "Demolitions": 83222,
                "Exterminations": 8520,
                "Time": "2022-05-03T11:29:08.345Z"
            },
            {
                "Demolitions": 94177,
                "Exterminations": 9753,
                "Time": "2022-07-31T13:12:23.926Z"
            },
            {
                "Demolitions": 98031,
                "Exterminations": 10179,
                "Time": "2022-09-05T13:11:04.338Z"
            },
            {
                "Demolitions": 99000,
                "Exterminations": 10290,
                "Time": "2022-09-12T14:58:56.621Z"
            },
            {
                "Demolitions": 100012,
                "Exterminations": 10402,
                "Time": "2022-09-21T17:50:15.368Z"
            },
            {
                "Demolitions": 107000,
                "Exterminations": 11584,
                "Time": "2022-11-20T12:14:07.072Z"
            },
            {
                "Demolitions": 107000,
                "Exterminations": 11204,
                "Time": "2022-11-20T12:14:59.479Z"
            },
            {
                "Demolitions": 109112,
                "Exterminations": 11440,
                "Time": "2022-12-03T20:12:17.898Z"
            },
            {
                "Demolitions": 114779,
                "Exterminations": 12086,
                "Time": "2023-01-24T10:50:24.039Z"
            }
        ]
    },
    "301063901045325825": {
        "Name": "AAAAAAAAAA",
        "Demolitions": 1052,
        "Exterminations": 34,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 1052,
                "Exterminations": 34,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "240218717768777729": {
        "Name": "Goncover",
        "Demolitions": 14245,
        "Exterminations": 107,
        "LastUpdate": "2023-01-06T03:14:00.434Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 7745,
                "Exterminations": 28,
                "Time": "2020-12-29T15:35:12.000Z"
            },
            {
                "Demolitions": 7787,
                "Exterminations": 29,
                "Time": "2020-12-30T18:24:23.000Z"
            },
            {
                "Demolitions": 7955,
                "Exterminations": 30,
                "Time": "2021-01-14T13:03:49.000Z"
            },
            {
                "Demolitions": 8138,
                "Exterminations": 35,
                "Time": "2021-01-18T19:33:29.000Z"
            },
            {
                "Demolitions": 8187,
                "Exterminations": 35,
                "Time": "2021-01-21T20:45:23.000Z"
            },
            {
                "Demolitions": 8267,
                "Exterminations": 33,
                "Time": "2021-02-04T20:27:34.000Z"
            },
            {
                "Demolitions": 8476,
                "Exterminations": 33,
                "Time": "2021-02-11T00:34:43.000Z"
            },
            {
                "Demolitions": 8767,
                "Exterminations": 69,
                "Time": "2021-02-12T23:40:04.000Z"
            },
            {
                "Demolitions": 8877,
                "Exterminations": 80,
                "Time": "2021-02-14T23:34:32.000Z"
            },
            {
                "Demolitions": 8999,
                "Exterminations": 93,
                "Time": "2021-02-15T22:10:54.000Z"
            },
            {
                "Demolitions": 9069,
                "Exterminations": 100,
                "Time": "2021-02-16T23:38:59.000Z"
            },
            {
                "Demolitions": 9503,
                "Exterminations": 103,
                "Time": "2021-03-18T22:23:34.000Z"
            },
            {
                "Demolitions": 9689,
                "Exterminations": 105,
                "Time": "2021-03-26T00:13:51.000Z"
            },
            {
                "Demolitions": 9830,
                "Exterminations": 107,
                "Time": "2021-03-30T01:50:39.000Z"
            },
            {
                "Demolitions": 9873,
                "Exterminations": 109,
                "Time": "2021-04-02T22:55:09.000Z"
            },
            {
                "Demolitions": 11741,
                "Exterminations": 104,
                "Time": "2022-04-11T22:21:09.000Z"
            },
            {
                "Demolitions": 11890,
                "Exterminations": 104,
                "Time": "2022-04-27T20:32:45.000Z"
            },
            {
                "Demolitions": 12060,
                "Exterminations": 105,
                "Time": "2022-05-16T00:33:31.000Z"
            },
            {
                "Demolitions": 12132,
                "Exterminations": 105,
                "Time": "2022-05-21T21:16:22.000Z"
            },
            {
                "Demolitions": 12222,
                "Exterminations": 105,
                "Time": "2022-05-28T16:10:19.000Z"
            },
            {
                "Demolitions": 12284,
                "Exterminations": 105,
                "Time": "2022-06-04T23:01:41.000Z"
            },
            {
                "Demolitions": 12384,
                "Exterminations": 105,
                "Time": "2022-06-11T21:05:10.633Z"
            },
            {
                "Demolitions": 12543,
                "Exterminations": 105,
                "Time": "2022-07-01T01:58:06.855Z"
            },
            {
                "Demolitions": 12596,
                "Exterminations": 105,
                "Time": "2022-07-04T04:08:21.617Z"
            },
            {
                "Demolitions": 12744,
                "Exterminations": 105,
                "Time": "2022-07-13T01:38:10.073Z"
            },
            {
                "Demolitions": 13039,
                "Exterminations": 105,
                "Time": "2022-08-09T23:29:02.328Z"
            },
            {
                "Demolitions": 13246,
                "Exterminations": 105,
                "Time": "2022-09-09T15:31:05.921Z"
            },
            {
                "Demolitions": 13431,
                "Exterminations": 105,
                "Time": "2022-10-02T01:53:11.164Z"
            },
            {
                "Demolitions": 13774,
                "Exterminations": 106,
                "Time": "2022-11-23T03:14:40.280Z"
            },
            {
                "Demolitions": 14245,
                "Exterminations": 107,
                "Time": "2023-01-06T03:14:00.434Z"
            }
        ],
        "Country": "UY"
    },
    "229669797351129099": {
        "Name": "Maize Windu",
        "Demolitions": 15583,
        "Exterminations": 1002,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 15583,
                "Exterminations": 1002,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "669109403978432522": {
        "Name": "Flo",
        "Demolitions": 363,
        "Exterminations": 11,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 363,
                "Exterminations": 11,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "436829355596054561": {
        "Name": "Ramonky_NL",
        "Demolitions": 34377,
        "Exterminations": 717,
        "LastUpdate": "2022-09-20T06:18:18.063Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 30228,
                "Exterminations": 688,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 31158,
                "Exterminations": 698,
                "Time": "2022-04-09T11:42:00.932Z"
            },
            {
                "Demolitions": 33194,
                "Exterminations": 707,
                "Time": "2022-07-25T02:17:52.125Z"
            },
            {
                "Demolitions": 33360,
                "Exterminations": 709,
                "Time": "2022-08-01T18:53:11.696Z"
            },
            {
                "Demolitions": 34377,
                "Exterminations": 717,
                "Time": "2022-09-20T06:18:18.063Z"
            }
        ]
    },
    "475011603016712192": {
        "Name": "Aephino",
        "Demolitions": 5278,
        "Exterminations": 200,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 5278,
                "Exterminations": 200,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "759365174602760223": {
        "Name": "baylisticjr",
        "Demolitions": 3771,
        "Exterminations": 199,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 3771,
                "Exterminations": 199,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "446088220392816641": {
        "Name": "Luxury",
        "Demolitions": 1961,
        "Exterminations": 91,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 1961,
                "Exterminations": 91,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "726173716853162025": {
        "Name": "Just Dave:)",
        "Demolitions": 19444,
        "Exterminations": 1789,
        "LastUpdate": "2022-07-16T22:38:09.623Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 17822,
                "Exterminations": 1635,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 19444,
                "Exterminations": 1789,
                "Time": "2022-07-16T22:38:09.623Z"
            }
        ]
    },
    "442911394246033418": {
        "Name": "Enru Chem",
        "Demolitions": 32170,
        "Exterminations": 262,
        "LastUpdate": "2023-01-31T05:14:26.917Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 30704,
                "Exterminations": 245,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 30942,
                "Exterminations": 248,
                "Time": "2022-04-06T05:08:17.365Z"
            },
            {
                "Demolitions": 31146,
                "Exterminations": 254,
                "Time": "2022-06-01T06:49:07.425Z"
            },
            {
                "Demolitions": 31215,
                "Exterminations": 256,
                "Time": "2022-06-20T09:58:53.308Z"
            },
            {
                "Demolitions": 31325,
                "Exterminations": 257,
                "Time": "2022-07-26T04:29:29.057Z"
            },
            {
                "Demolitions": 32170,
                "Exterminations": 262,
                "Time": "2023-01-31T05:14:26.917Z"
            }
        ],
        "Country": "USA"
    },
    "732418551570366554": {
        "Name": "Dudenacho",
        "Demolitions": 14462,
        "Exterminations": 1183,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 14462,
                "Exterminations": 1183,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "200526284730662912": {
        "Name": "NoobieTaco",
        "Demolitions": 8128,
        "Exterminations": 56,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 8128,
                "Exterminations": 56,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "346079964266889216": {
        "Name": "EBicDonut",
        "Demolitions": 1021,
        "Exterminations": 92,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 1021,
                "Exterminations": 92,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "184919195614445570": {
        "Name": "Nornocci",
        "Demolitions": 4146,
        "Exterminations": 101,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 4146,
                "Exterminations": 101,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "423224706146238475": {
        "Name": "Demo Turtle",
        "Demolitions": 31152,
        "Exterminations": 1439,
        "LastUpdate": "2022-09-16T04:53:12.356Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 27149,
                "Exterminations": 1102,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 29670,
                "Exterminations": 1356,
                "Time": "2022-04-01T13:33:01.343Z"
            },
            {
                "Demolitions": 30012,
                "Exterminations": 1376,
                "Time": "2022-07-01T21:11:06.935Z"
            },
            {
                "Demolitions": 31152,
                "Exterminations": 1439,
                "Time": "2022-09-16T04:53:12.356Z"
            }
        ]
    },
    "278976659321782272": {
        "Name": "Willral",
        "Demolitions": 2208,
        "Exterminations": 138,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 2208,
                "Exterminations": 138,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "279391114153426944": {
        "Name": "kray0la",
        "Demolitions": 3196,
        "Exterminations": 13,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 3196,
                "Exterminations": 13,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "156173047424876544": {
        "Name": "Penguins227",
        "Demolitions": 19917,
        "Exterminations": 145,
        "LastUpdate": "2023-01-02T03:18:28.064Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 14201,
                "Exterminations": 49,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 16382,
                "Exterminations": 118,
                "Time": "2022-04-07T16:12:18.107Z"
            },
            {
                "Demolitions": 19917,
                "Exterminations": 145,
                "Time": "2023-01-02T03:18:28.064Z"
            }
        ]
    },
    "623999393502068755": {
        "Name": "MisterSashimi",
        "Demolitions": 10001,
        "Exterminations": 1048,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 10001,
                "Exterminations": 1048,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "246391499858640897": {
        "Name": "Prodigy",
        "Demolitions": 15107,
        "Exterminations": 695,
        "LastUpdate": "2022-07-29T02:10:46.951Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 10855,
                "Exterminations": 654,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 15107,
                "Exterminations": 695,
                "Time": "2022-07-29T02:10:46.951Z"
            }
        ]
    },
    "704457354279780353": {
        "Name": "Rocket Garbage",
        "Demolitions": 1422,
        "Exterminations": 17,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 1422,
                "Exterminations": 17,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "341609843574177795": {
        "Name": "sh0tbEaN",
        "Demolitions": 36000,
        "Exterminations": 1256,
        "LastUpdate": "2022-08-14T12:35:23.828Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 27295,
                "Exterminations": 1004,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 33564,
                "Exterminations": 1171,
                "Time": "2022-06-04T21:06:38.808Z"
            },
            {
                "Demolitions": 35000,
                "Exterminations": 1221,
                "Time": "2022-07-25T21:41:11.694Z"
            },
            {
                "Demolitions": 36000,
                "Exterminations": 1256,
                "Time": "2022-08-14T12:35:23.828Z"
            }
        ]
    },
    "574415714836938763": {
        "Name": "bern",
        "Demolitions": 8227,
        "Exterminations": 200,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 8227,
                "Exterminations": 200,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "259482804524417025": {
        "Name": "BeatriX",
        "Demolitions": 7275,
        "Exterminations": 30,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 7275,
                "Exterminations": 30,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "155108886142124032": {
        "Name": "Tubbybatman",
        "Demolitions": 15554,
        "Exterminations": 686,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 15554,
                "Exterminations": 686,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "380163940354752513": {
        "Name": "PasserineSzn",
        "Demolitions": 4262,
        "Exterminations": 286,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 4262,
                "Exterminations": 286,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "690406527583911978": {
        "Name": "Smolhaabe",
        "Demolitions": 296,
        "Exterminations": 1,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 296,
                "Exterminations": 1,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "618962810726121478": {
        "Name": "DenierB",
        "Demolitions": 7979,
        "Exterminations": 167,
        "LastUpdate": "2022-05-30T19:32:35.456Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 6382,
                "Exterminations": 150,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 7979,
                "Exterminations": 167,
                "Time": "2022-05-30T19:32:35.456Z"
            }
        ]
    },
    "714275258370228306": {
        "Name": "GL1TCH",
        "Demolitions": 42384,
        "Exterminations": 1407,
        "LastUpdate": "2022-09-27T23:22:11.898Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 22810,
                "Exterminations": 1039,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 35993,
                "Exterminations": 1291,
                "Time": "2022-04-03T21:14:23.946Z"
            },
            {
                "Demolitions": 37661,
                "Exterminations": 1314,
                "Time": "2022-05-14T21:36:20.951Z"
            },
            {
                "Demolitions": 40037,
                "Exterminations": 1350,
                "Time": "2022-05-30T11:39:54.060Z"
            },
            {
                "Demolitions": 42384,
                "Exterminations": 1407,
                "Time": "2022-09-27T23:22:11.898Z"
            }
        ],
        "Country": "USA"
    },
    "301544571983101952": {
        "Name": "Chenzo",
        "Demolitions": 10028,
        "Exterminations": 262,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 10028,
                "Exterminations": 262,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "224203800515182594": {
        "Name": "s1lverFoX",
        "Demolitions": 55000,
        "Exterminations": 616,
        "LastUpdate": "2022-12-28T18:50:37.481Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 42273,
                "Exterminations": 393,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 42842,
                "Exterminations": 399,
                "Time": "2022-04-01T15:15:44.406Z"
            },
            {
                "Demolitions": 43306,
                "Exterminations": 402,
                "Time": "2022-04-18T21:04:51.447Z"
            },
            {
                "Demolitions": 43539,
                "Exterminations": 403,
                "Time": "2022-04-24T01:44:28.213Z"
            },
            {
                "Demolitions": 44086,
                "Exterminations": 404,
                "Time": "2022-05-05T13:50:54.572Z"
            },
            {
                "Demolitions": 44435,
                "Exterminations": 407,
                "Time": "2022-05-12T14:56:17.464Z"
            },
            {
                "Demolitions": 45002,
                "Exterminations": 413,
                "Time": "2022-05-25T14:15:38.100Z"
            },
            {
                "Demolitions": 35734,
                "Exterminations": 421,
                "Time": "2022-06-30T00:11:47.587Z"
            },
            {
                "Demolitions": 46779,
                "Exterminations": 436,
                "Time": "2022-08-02T15:39:06.469Z"
            },
            {
                "Demolitions": 47589,
                "Exterminations": 440,
                "Time": "2022-08-23T15:11:47.224Z"
            },
            {
                "Demolitions": 48096,
                "Exterminations": 441,
                "Time": "2022-08-30T01:09:31.065Z"
            },
            {
                "Demolitions": 49109,
                "Exterminations": 468,
                "Time": "2022-09-15T21:55:22.017Z"
            },
            {
                "Demolitions": 50000,
                "Exterminations": 509,
                "Time": "2022-09-28T23:35:56.001Z"
            },
            {
                "Demolitions": 55000,
                "Exterminations": 616,
                "Time": "2022-12-28T18:50:37.481Z"
            }
        ],
        "Country": "USA"
    },
    "292085114144292866": {
        "Name": "Some1YouLike",
        "Demolitions": 72756,
        "Exterminations": 690,
        "LastUpdate": "2022-12-12T08:58:46.793Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 65504,
                "Exterminations": 616,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 66110,
                "Exterminations": 620,
                "Time": "2022-04-01T00:27:35.806Z"
            },
            {
                "Demolitions": 67973,
                "Exterminations": 637,
                "Time": "2022-05-07T02:32:09.248Z"
            },
            {
                "Demolitions": 72756,
                "Exterminations": 690,
                "Time": "2022-12-12T08:58:46.793Z"
            }
        ]
    },
    "350109890083160066": {
        "Name": "JHan",
        "Demolitions": 31465,
        "Exterminations": 387,
        "LastUpdate": "2022-12-07T23:04:55.769Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 23812,
                "Exterminations": 287,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 25151,
                "Exterminations": 322,
                "Time": "2022-04-01T03:56:34.105Z"
            },
            {
                "Demolitions": 25949,
                "Exterminations": 332,
                "Time": "2022-04-22T00:42:18.412Z"
            },
            {
                "Demolitions": 27333,
                "Exterminations": 346,
                "Time": "2022-06-19T22:52:36.205Z"
            },
            {
                "Demolitions": 28688,
                "Exterminations": 362,
                "Time": "2022-07-23T02:09:25.408Z"
            },
            {
                "Demolitions": 29423,
                "Exterminations": 363,
                "Time": "2022-08-26T19:45:15.391Z"
            },
            {
                "Demolitions": 30000,
                "Exterminations": 365,
                "Time": "2022-09-24T22:30:09.686Z"
            },
            {
                "Demolitions": 31465,
                "Exterminations": 387,
                "Time": "2022-12-07T23:04:55.769Z"
            }
        ],
        "Country": "USA"
    },
    "442749785972408320": {
        "Name": "Miss Ginge",
        "Demolitions": 9171,
        "Exterminations": 75,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 9171,
                "Exterminations": 75,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "307862084723539968": {
        "Name": "SirHoldSpace",
        "Demolitions": 11658,
        "Exterminations": 396,
        "LastUpdate": "2022-04-01T11:09:29.891Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 11336,
                "Exterminations": 394,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 11658,
                "Exterminations": 396,
                "Time": "2022-04-01T11:09:29.891Z"
            }
        ]
    },
    "479668494770634762": {
        "Name": "Mase",
        "Demolitions": 8657,
        "Exterminations": 264,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 8657,
                "Exterminations": 264,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "588434764399247375": {
        "Name": "TheBallSackBandit",
        "Demolitions": 2225,
        "Exterminations": 35,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 2225,
                "Exterminations": 35,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "257088993349337088": {
        "Name": "Pow Pow",
        "Demolitions": 40141,
        "Exterminations": 4336,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 40141,
                "Exterminations": 4336,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "232487370077896716": {
        "Name": "DJ8y",
        "Demolitions": 16952,
        "Exterminations": 133,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 16952,
                "Exterminations": 133,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "290998449988698113": {
        "Name": "Pangayoi",
        "Demolitions": 2189,
        "Exterminations": 5,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 2189,
                "Exterminations": 5,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "194341496009261056": {
        "Name": "Povto",
        "Demolitions": 2637,
        "Exterminations": 9,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 2637,
                "Exterminations": 9,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "280139618828025856": {
        "Name": "Terbulance6",
        "Demolitions": 3502,
        "Exterminations": 4,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 3502,
                "Exterminations": 4,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "600059962244202497": {
        "Name": "EggStinky",
        "Demolitions": 7827,
        "Exterminations": 303,
        "LastUpdate": "2022-04-02T14:56:24.968Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 7758,
                "Exterminations": 298,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 7827,
                "Exterminations": 303,
                "Time": "2022-04-02T14:56:24.968Z"
            }
        ]
    },
    "605171078398214173": {
        "Name": "Dingus 7Seas",
        "Demolitions": 10000,
        "Exterminations": 237,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 10000,
                "Exterminations": 237,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "278928544812498954": {
        "Name": "Gavinr22",
        "Demolitions": 3646,
        "Exterminations": 155,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 3646,
                "Exterminations": 155,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "349018580156678146": {
        "Name": "Lulay16",
        "Demolitions": 1525,
        "Exterminations": 30,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 1525,
                "Exterminations": 30,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "486690027934449673": {
        "Name": "shNOWZER",
        "Demolitions": 16147,
        "Exterminations": 666,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 16147,
                "Exterminations": 666,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "676188763961032710": {
        "Name": "Jumbo",
        "Demolitions": 10008,
        "Exterminations": 199,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 10008,
                "Exterminations": 199,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "427184078136016901": {
        "Name": "CaptainRomeo",
        "Demolitions": 10330,
        "Exterminations": 256,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 10330,
                "Exterminations": 256,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "767105280851968010": {
        "Name": "ParkerPlaces",
        "Demolitions": 15331,
        "Exterminations": 1205,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 15331,
                "Exterminations": 1205,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "689307003574681632": {
        "Name": "Katakuri_oyabun",
        "Demolitions": 15729,
        "Exterminations": 948,
        "LastUpdate": "2022-03-31T21:49:52.824Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 14794,
                "Exterminations": 852,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 15729,
                "Exterminations": 948,
                "Time": "2022-03-31T21:49:52.824Z"
            }
        ]
    },
    "409459604339032064": {
        "Name": "HNTR",
        "Demolitions": 5419,
        "Exterminations": 27,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 5419,
                "Exterminations": 27,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "559911954341429253": {
        "Name": "L3g1t L3ge3nd",
        "Demolitions": 10018,
        "Exterminations": 13,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 10018,
                "Exterminations": 13,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "740216393529557051": {
        "Name": "C4ES COOLMIK",
        "Demolitions": 6491,
        "Exterminations": 223,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 6491,
                "Exterminations": 223,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "103287614609580032": {
        "Name": "Fooney",
        "Demolitions": 14346,
        "Exterminations": 220,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 14346,
                "Exterminations": 220,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "651200211657687052": {
        "Name": "msnellike",
        "Demolitions": 3605,
        "Exterminations": 88,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 3605,
                "Exterminations": 88,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "487049979546828810": {
        "Name": "adonis",
        "Demolitions": 1407,
        "Exterminations": 20,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 1407,
                "Exterminations": 20,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "208566626646228994": {
        "Name": "Demalay",
        "Demolitions": 28450,
        "Exterminations": 366,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 28450,
                "Exterminations": 366,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "280466003366903820": {
        "Name": "yeast003",
        "Demolitions": 13599,
        "Exterminations": 154,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 13599,
                "Exterminations": 154,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "584046484593311744": {
        "Name": "Timmmyyyyy",
        "Demolitions": 45000,
        "Exterminations": 3079,
        "LastUpdate": "2022-12-31T03:47:12.069Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 34587,
                "Exterminations": 2117,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 35783,
                "Exterminations": 2202,
                "Time": "2022-06-10T01:13:07.076Z"
            },
            {
                "Demolitions": 36932,
                "Exterminations": 2296,
                "Time": "2022-07-22T03:57:04.781Z"
            },
            {
                "Demolitions": 37583,
                "Exterminations": 2357,
                "Time": "2022-08-08T01:24:20.062Z"
            },
            {
                "Demolitions": 38097,
                "Exterminations": 2401,
                "Time": "2022-08-16T01:31:49.658Z"
            },
            {
                "Demolitions": 38873,
                "Exterminations": 2475,
                "Time": "2022-09-08T02:22:27.455Z"
            },
            {
                "Demolitions": 39323,
                "Exterminations": 2512,
                "Time": "2022-09-18T04:44:24.353Z"
            },
            {
                "Demolitions": 40113,
                "Exterminations": 2586,
                "Time": "2022-10-08T02:50:08.089Z"
            },
            {
                "Demolitions": 40259,
                "Exterminations": 2599,
                "Time": "2022-10-10T01:06:26.498Z"
            },
            {
                "Demolitions": 40340,
                "Exterminations": 2607,
                "Time": "2022-10-12T03:56:10.293Z"
            },
            {
                "Demolitions": 41245,
                "Exterminations": 2702,
                "Time": "2022-10-24T00:55:38.716Z"
            },
            {
                "Demolitions": 41533,
                "Exterminations": 2735,
                "Time": "2022-10-28T01:15:50.544Z"
            },
            {
                "Demolitions": 42003,
                "Exterminations": 2774,
                "Time": "2022-11-07T01:28:07.705Z"
            },
            {
                "Demolitions": 42209,
                "Exterminations": 2794,
                "Time": "2022-11-19T03:26:01.126Z"
            },
            {
                "Demolitions": 42425,
                "Exterminations": 2816,
                "Time": "2022-11-22T02:06:04.793Z"
            },
            {
                "Demolitions": 43187,
                "Exterminations": 2900,
                "Time": "2022-12-05T02:08:34.619Z"
            },
            {
                "Demolitions": 45000,
                "Exterminations": 3079,
                "Time": "2022-12-31T03:47:12.069Z"
            }
        ]
    },
    "775270830997110804": {
        "Name": "bean",
        "Demolitions": 971,
        "Exterminations": 31,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 971,
                "Exterminations": 31,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "288025730762145793": {
        "Name": "Patches822",
        "Demolitions": 22341,
        "Exterminations": 807,
        "LastUpdate": "2023-01-11T13:43:48.772Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 6438,
                "Exterminations": 173,
                "Time": "2021-03-27T00:00:00.000Z"
            },
            {
                "Demolitions": 7728,
                "Exterminations": 257,
                "Time": "2021-04-25T00:00:00.000Z"
            },
            {
                "Demolitions": 8128,
                "Exterminations": 271,
                "Time": "2021-05-06T00:00:00.000Z"
            },
            {
                "Demolitions": 8491,
                "Exterminations": 282,
                "Time": "2021-06-13T00:00:00.000Z"
            },
            {
                "Demolitions": 9761,
                "Exterminations": 317,
                "Time": "2021-07-31T00:00:00.000Z"
            },
            {
                "Demolitions": 11104,
                "Exterminations": 373,
                "Time": "2021-08-28T00:00:00.000Z"
            },
            {
                "Demolitions": 11755,
                "Exterminations": 403,
                "Time": "2021-09-16T00:00:00.000Z"
            },
            {
                "Demolitions": 13215,
                "Exterminations": 458,
                "Time": "2021-11-22T00:00:00.000Z"
            },
            {
                "Demolitions": 14830,
                "Exterminations": 537,
                "Time": "2022-02-08T00:00:00.000Z"
            },
            {
                "Demolitions": 16739,
                "Exterminations": 611,
                "Time": "2022-03-16T00:00:00.000Z"
            },
            {
                "Demolitions": 17127,
                "Exterminations": 625,
                "Time": "2022-04-01T00:00:00.000Z"
            },
            {
                "Demolitions": 17921,
                "Exterminations": 666,
                "Time": "2022-04-26T14:23:24.780Z"
            },
            {
                "Demolitions": 18767,
                "Exterminations": 701,
                "Time": "2022-05-12T19:30:34.829Z"
            },
            {
                "Demolitions": 19000,
                "Exterminations": 705,
                "Time": "2022-05-24T18:47:52.659Z"
            },
            {
                "Demolitions": 20043,
                "Exterminations": 743,
                "Time": "2022-07-21T15:52:06.135Z"
            },
            {
                "Demolitions": 20064,
                "Exterminations": 737,
                "Time": "2022-07-21T16:32:20.987Z"
            },
            {
                "Demolitions": 21275,
                "Exterminations": 775,
                "Time": "2022-09-24T00:52:11.690Z"
            },
            {
                "Demolitions": 22341,
                "Exterminations": 807,
                "Time": "2023-01-11T13:43:48.772Z"
            }
        ]
    },
    "519235778513993740": {
        "Name": "tr1ppn",
        "Demolitions": 6023,
        "Exterminations": 96,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 6023,
                "Exterminations": 96,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "298910672731766784": {
        "Name": "ThatGuyDed",
        "Demolitions": 6319,
        "Exterminations": 80,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 6319,
                "Exterminations": 80,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "804088759234461717": {
        "Name": "Cowfriend382",
        "Demolitions": 2039,
        "Exterminations": 55,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 2039,
                "Exterminations": 55,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "323915506291703830": {
        "Name": "sachowx",
        "Demolitions": 4170,
        "Exterminations": 79,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 4170,
                "Exterminations": 79,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "539189756517679114": {
        "Name": "Gayplatipus1",
        "Demolitions": 1047,
        "Exterminations": 63,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 1047,
                "Exterminations": 63,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "775837138918441011": {
        "Name": "Kiryu",
        "Demolitions": 10539,
        "Exterminations": 743,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 10539,
                "Exterminations": 743,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "283941853521248256": {
        "Name": "JenjiPie",
        "Demolitions": 4431,
        "Exterminations": 289,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 4431,
                "Exterminations": 289,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "236347758364196864": {
        "Name": "Chrisx888",
        "Demolitions": 24557,
        "Exterminations": 103,
        "LastUpdate": "2022-08-29T08:22:20.171Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 22086,
                "Exterminations": 83,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 22699,
                "Exterminations": 85,
                "Time": "2022-04-14T11:32:15.350Z"
            },
            {
                "Demolitions": 23576,
                "Exterminations": 89,
                "Time": "2022-06-23T13:25:40.810Z"
            },
            {
                "Demolitions": 24557,
                "Exterminations": 103,
                "Time": "2022-08-29T08:22:20.171Z"
            }
        ],
        "Country": "Australia"
    },
    "215285737422192640": {
        "Name": "Th3Ant",
        "Demolitions": 11564,
        "Exterminations": 420,
        "LastUpdate": "2022-04-09T15:04:29.386Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 6540,
                "Exterminations": 150,
                "Time": "2021-04-14T00:00:00.000Z"
            },
            {
                "Demolitions": 6969,
                "Exterminations": 182,
                "Time": "2021-04-19T00:00:00.000Z"
            },
            {
                "Demolitions": 7245,
                "Exterminations": 200,
                "Time": "2021-05-02T00:00:00.000Z"
            },
            {
                "Demolitions": 8080,
                "Exterminations": 237,
                "Time": "2021-06-29T00:00:00.000Z"
            },
            {
                "Demolitions": 11512,
                "Exterminations": 419,
                "Time": "2022-04-02T19:23:21.695Z"
            },
            {
                "Demolitions": 11564,
                "Exterminations": 420,
                "Time": "2022-04-09T15:04:29.386Z"
            }
        ],
        "Country": "PL"
    },
    "311214585212305410": {
        "Name": "borchvor22",
        "Demolitions": 7404,
        "Exterminations": 81,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 7404,
                "Exterminations": 81,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "291731749702991872": {
        "Name": "Prdgy.",
        "Demolitions": 12926,
        "Exterminations": 187,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 12926,
                "Exterminations": 187,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "716747125169324072": {
        "Name": "TomvLith",
        "Demolitions": 14736,
        "Exterminations": 1129,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 14736,
                "Exterminations": 1129,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "404703537168384010": {
        "Name": "Horsepower",
        "Demolitions": 71125,
        "Exterminations": 4750,
        "LastUpdate": "2022-06-14T20:44:39.227Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 50529,
                "Exterminations": 2642,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 71125,
                "Exterminations": 4750,
                "Time": "2022-06-14T20:44:39.227Z"
            }
        ]
    },
    "710836385204142101": {
        "Name": "Roi",
        "Demolitions": 40182,
        "Exterminations": 636,
        "LastUpdate": "2022-10-06T02:05:34.802Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 28591,
                "Exterminations": 484,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 40182,
                "Exterminations": 636,
                "Time": "2022-10-06T02:05:34.802Z"
            }
        ]
    },
    "684280096990691342": {
        "Name": "GraveyardSh1fter",
        "Demolitions": 13160,
        "Exterminations": 472,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 13160,
                "Exterminations": 472,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "141351664043950080": {
        "Name": "WoodyLive",
        "Demolitions": 11617,
        "Exterminations": 263,
        "LastUpdate": "2022-05-29T17:13:46.615Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 10032,
                "Exterminations": 216,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 11617,
                "Exterminations": 263,
                "Time": "2022-05-29T15:23:50.582Z"
            },
            {
                "Demolitions": 11617,
                "Exterminations": 263,
                "Time": "2022-05-29T17:13:46.615Z"
            }
        ]
    },
    "690667174213320784": {
        "Name": "Sinan Enginist",
        "Demolitions": 45851,
        "Exterminations": 5002,
        "LastUpdate": "2022-09-17T18:36:25.641Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 37269,
                "Exterminations": 4000,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 37898,
                "Exterminations": 4074,
                "Time": "2022-05-10T16:33:02.458Z"
            },
            {
                "Demolitions": 40224,
                "Exterminations": 4352,
                "Time": "2022-06-03T18:46:11.235Z"
            },
            {
                "Demolitions": 41685,
                "Exterminations": 4526,
                "Time": "2022-06-23T12:31:09.593Z"
            },
            {
                "Demolitions": 45851,
                "Exterminations": 5002,
                "Time": "2022-09-17T18:36:25.641Z"
            }
        ],
        "Country": "TR"
    },
    "115815002170064901": {
        "Name": "Coryn",
        "Demolitions": 20003,
        "Exterminations": 1903,
        "LastUpdate": "2022-05-08T19:23:19.130Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 9100,
                "Exterminations": 948,
                "Time": "2021-05-10T00:00:00.000Z"
            },
            {
                "Demolitions": 13673,
                "Exterminations": 1382,
                "Time": "2021-06-12T00:00:00.000Z"
            },
            {
                "Demolitions": 15564,
                "Exterminations": 1539,
                "Time": "2021-07-18T00:00:00.000Z"
            },
            {
                "Demolitions": 18212,
                "Exterminations": 1763,
                "Time": "2021-08-26T00:00:00.000Z"
            },
            {
                "Demolitions": 19110,
                "Exterminations": 1830,
                "Time": "2022-04-28T00:00:00.000Z"
            },
            {
                "Demolitions": 20003,
                "Exterminations": 1903,
                "Time": "2022-05-08T19:23:19.130Z"
            }
        ],
        "Country": "Brazil"
    },
    "622953875111936001": {
        "Name": "WhatCanIBreak",
        "Demolitions": 6032,
        "Exterminations": 66,
        "LastUpdate": "2022-04-02T17:21:48.614Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 5754,
                "Exterminations": 66,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 6032,
                "Exterminations": 66,
                "Time": "2022-04-02T17:21:48.614Z"
            }
        ]
    },
    "774229391394996254": {
        "Name": "LeaderOfTheAbyss",
        "Demolitions": 11396,
        "Exterminations": 472,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 11396,
                "Exterminations": 472,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "396715744123158538": {
        "Name": "Smellybeard",
        "Demolitions": 30059,
        "Exterminations": 1857,
        "LastUpdate": "2022-07-11T17:20:44.054Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 25290,
                "Exterminations": 1518,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 27132,
                "Exterminations": 1619,
                "Time": "2022-04-05T15:16:32.956Z"
            },
            {
                "Demolitions": 28366,
                "Exterminations": 1731,
                "Time": "2022-05-02T17:38:30.155Z"
            },
            {
                "Demolitions": 29211,
                "Exterminations": 1795,
                "Time": "2022-05-30T17:49:44.168Z"
            },
            {
                "Demolitions": 29452,
                "Exterminations": 1813,
                "Time": "2022-06-07T19:30:19.171Z"
            },
            {
                "Demolitions": 30059,
                "Exterminations": 1857,
                "Time": "2022-07-11T17:20:44.054Z"
            }
        ]
    },
    "277503267939024896": {
        "Name": "Ã¹Ã§augi",
        "Demolitions": 2241,
        "Exterminations": 35,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 2241,
                "Exterminations": 35,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "714832453272862792": {
        "Name": "Dathsy",
        "Demolitions": 4152,
        "Exterminations": 85,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 4152,
                "Exterminations": 85,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "488071217341923348": {
        "Name": "talbiGame23",
        "Demolitions": 43416,
        "Exterminations": 3086,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 43416,
                "Exterminations": 3086,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "522559454651219978": {
        "Name": "Acacia",
        "Demolitions": 5007,
        "Exterminations": 133,
        "LastUpdate": "2022-07-08T01:38:06.721Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 4000,
                "Exterminations": 114,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 5007,
                "Exterminations": 133,
                "Time": "2022-07-08T01:38:06.721Z"
            }
        ]
    },
    "256225484075958272": {
        "Name": "Kruncho",
        "Demolitions": 13202,
        "Exterminations": 41,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 13202,
                "Exterminations": 41,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "481464161965178900": {
        "Name": "Torpify_YT",
        "Demolitions": 2832,
        "Exterminations": 100,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 2832,
                "Exterminations": 100,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "226033391663972352": {
        "Name": "Turtle",
        "Demolitions": 71179,
        "Exterminations": 6696,
        "LastUpdate": "2022-11-20T23:01:13.822Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 54829,
                "Exterminations": 5152,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 59092,
                "Exterminations": 5469,
                "Time": "2022-03-31T08:23:36.354Z"
            },
            {
                "Demolitions": 58092,
                "Exterminations": 5496,
                "Time": "2022-03-31T08:23:51.647Z"
            },
            {
                "Demolitions": 60502,
                "Exterminations": 5694,
                "Time": "2022-04-26T18:30:07.285Z"
            },
            {
                "Demolitions": 64114,
                "Exterminations": 6021,
                "Time": "2022-05-25T22:07:07.871Z"
            },
            {
                "Demolitions": 65581,
                "Exterminations": 6156,
                "Time": "2022-06-13T00:55:33.703Z"
            },
            {
                "Demolitions": 67711,
                "Exterminations": 6353,
                "Time": "2022-09-29T01:25:25.247Z"
            },
            {
                "Demolitions": 69577,
                "Exterminations": 6542,
                "Time": "2022-10-25T18:33:25.386Z"
            },
            {
                "Demolitions": 70391,
                "Exterminations": 6621,
                "Time": "2022-11-14T16:43:08.970Z"
            },
            {
                "Demolitions": 71179,
                "Exterminations": 6696,
                "Time": "2022-11-20T23:01:13.822Z"
            }
        ],
        "Country": "Norway"
    },
    "364932652987318274": {
        "Name": "TTV Thiagobfm",
        "Demolitions": 16519,
        "Exterminations": 503,
        "LastUpdate": "2022-09-03T00:46:27.497Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 3317,
                "Exterminations": 23,
                "Time": "2021-06-02T00:00:00.000Z"
            },
            {
                "Demolitions": 3737,
                "Exterminations": 30,
                "Time": "2021-06-27T00:00:00.000Z"
            },
            {
                "Demolitions": 5175,
                "Exterminations": 104,
                "Time": "2021-08-04T00:00:00.000Z"
            },
            {
                "Demolitions": 6411,
                "Exterminations": 155,
                "Time": "2021-08-24T00:00:00.000Z"
            },
            {
                "Demolitions": 8182,
                "Exterminations": 206,
                "Time": "2021-10-19T00:00:00.000Z"
            },
            {
                "Demolitions": 9026,
                "Exterminations": 228,
                "Time": "2021-11-22T00:00:00.000Z"
            },
            {
                "Demolitions": 9459,
                "Exterminations": 246,
                "Time": "2021-11-30T00:00:00.000Z"
            },
            {
                "Demolitions": 10131,
                "Exterminations": 270,
                "Time": "2021-12-22T00:00:00.000Z"
            },
            {
                "Demolitions": 10954,
                "Exterminations": 315,
                "Time": "2022-01-24T00:00:00.000Z"
            },
            {
                "Demolitions": 13220,
                "Exterminations": 401,
                "Time": "2022-04-18T02:54:40.668Z"
            },
            {
                "Demolitions": 14726,
                "Exterminations": 460,
                "Time": "2022-06-01T06:24:23.467Z"
            },
            {
                "Demolitions": 16519,
                "Exterminations": 503,
                "Time": "2022-09-03T00:46:27.497Z"
            }
        ],
        "Country": "Brazil"
    },
    "841664421146394664": {
        "Name": "BearJew420",
        "Demolitions": 26900,
        "Exterminations": 896,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 26900,
                "Exterminations": 896,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "546847737153454132": {
        "Name": "Code_Geek",
        "Demolitions": 4580,
        "Exterminations": 97,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 4580,
                "Exterminations": 97,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "176762742479388672": {
        "Name": "sakerocket",
        "Demolitions": 73240,
        "Exterminations": 6254,
        "LastUpdate": "2023-02-03T13:32:23.356Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 30003,
                "Exterminations": 2237,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 31971,
                "Exterminations": 2415,
                "Time": "2022-04-01T00:27:22.108Z"
            },
            {
                "Demolitions": 33187,
                "Exterminations": 2530,
                "Time": "2022-04-09T15:57:53.320Z"
            },
            {
                "Demolitions": 33741,
                "Exterminations": 2583,
                "Time": "2022-04-14T01:15:51.887Z"
            },
            {
                "Demolitions": 34483,
                "Exterminations": 2657,
                "Time": "2022-04-19T11:41:20.939Z"
            },
            {
                "Demolitions": 34604,
                "Exterminations": 2666,
                "Time": "2022-04-21T01:04:42.601Z"
            },
            {
                "Demolitions": 35005,
                "Exterminations": 2706,
                "Time": "2022-04-25T12:01:13.813Z"
            },
            {
                "Demolitions": 36776,
                "Exterminations": 2856,
                "Time": "2022-05-12T11:36:38.866Z"
            },
            {
                "Demolitions": 37340,
                "Exterminations": 2910,
                "Time": "2022-05-17T15:24:44.628Z"
            },
            {
                "Demolitions": 38196,
                "Exterminations": 2981,
                "Time": "2022-05-24T11:38:01.531Z"
            },
            {
                "Demolitions": 39260,
                "Exterminations": 3073,
                "Time": "2022-05-28T15:45:03.364Z"
            },
            {
                "Demolitions": 39390,
                "Exterminations": 3085,
                "Time": "2022-05-31T11:47:12.270Z"
            },
            {
                "Demolitions": 40010,
                "Exterminations": 3143,
                "Time": "2022-06-02T14:11:50.249Z"
            },
            {
                "Demolitions": 40605,
                "Exterminations": 3198,
                "Time": "2022-06-08T02:25:30.764Z"
            },
            {
                "Demolitions": 42006,
                "Exterminations": 3322,
                "Time": "2022-06-17T12:42:26.685Z"
            },
            {
                "Demolitions": 43175,
                "Exterminations": 3435,
                "Time": "2022-06-24T11:26:00.737Z"
            },
            {
                "Demolitions": 44021,
                "Exterminations": 3514,
                "Time": "2022-07-01T12:11:50.733Z"
            },
            {
                "Demolitions": 45003,
                "Exterminations": 3609,
                "Time": "2022-07-08T12:20:05.614Z"
            },
            {
                "Demolitions": 46178,
                "Exterminations": 3723,
                "Time": "2022-07-15T12:43:28.128Z"
            },
            {
                "Demolitions": 48177,
                "Exterminations": 3908,
                "Time": "2022-08-04T00:33:42.399Z"
            },
            {
                "Demolitions": 49033,
                "Exterminations": 3980,
                "Time": "2022-08-11T11:47:43.274Z"
            },
            {
                "Demolitions": 50006,
                "Exterminations": 4067,
                "Time": "2022-08-17T23:11:00.139Z"
            },
            {
                "Demolitions": 50293,
                "Exterminations": 4094,
                "Time": "2022-08-19T12:28:44.879Z"
            },
            {
                "Demolitions": 52012,
                "Exterminations": 4249,
                "Time": "2022-09-01T09:18:36.279Z"
            },
            {
                "Demolitions": 53200,
                "Exterminations": 4365,
                "Time": "2022-09-09T00:50:58.587Z"
            },
            {
                "Demolitions": 54631,
                "Exterminations": 4508,
                "Time": "2022-09-16T12:23:21.106Z"
            },
            {
                "Demolitions": 55376,
                "Exterminations": 4575,
                "Time": "2022-09-22T02:40:22.700Z"
            },
            {
                "Demolitions": 56324,
                "Exterminations": 4667,
                "Time": "2022-09-27T20:35:25.970Z"
            },
            {
                "Demolitions": 58708,
                "Exterminations": 4878,
                "Time": "2022-10-14T00:57:41.570Z"
            },
            {
                "Demolitions": 59017,
                "Exterminations": 4909,
                "Time": "2022-10-18T11:45:43.618Z"
            },
            {
                "Demolitions": 59889,
                "Exterminations": 5000,
                "Time": "2022-10-21T12:06:08.192Z"
            },
            {
                "Demolitions": 60073,
                "Exterminations": 5019,
                "Time": "2022-10-22T13:36:09.302Z"
            },
            {
                "Demolitions": 61007,
                "Exterminations": 5112,
                "Time": "2022-10-27T01:11:23.730Z"
            },
            {
                "Demolitions": 62334,
                "Exterminations": 5244,
                "Time": "2022-11-03T11:31:47.040Z"
            },
            {
                "Demolitions": 63114,
                "Exterminations": 5312,
                "Time": "2022-11-11T13:29:13.720Z"
            },
            {
                "Demolitions": 64659,
                "Exterminations": 5454,
                "Time": "2022-11-23T12:36:48.125Z"
            },
            {
                "Demolitions": 65420,
                "Exterminations": 5532,
                "Time": "2022-12-01T02:34:46.042Z"
            },
            {
                "Demolitions": 66000,
                "Exterminations": 5588,
                "Time": "2022-12-06T12:34:10.422Z"
            },
            {
                "Demolitions": 66885,
                "Exterminations": 5666,
                "Time": "2022-12-13T22:36:43.919Z"
            },
            {
                "Demolitions": 68246,
                "Exterminations": 5791,
                "Time": "2022-12-23T01:50:43.160Z"
            },
            {
                "Demolitions": 69317,
                "Exterminations": 5893,
                "Time": "2022-12-30T13:25:15.422Z"
            },
            {
                "Demolitions": 70029,
                "Exterminations": 5962,
                "Time": "2023-01-06T13:06:18.873Z"
            },
            {
                "Demolitions": 72000,
                "Exterminations": 6143,
                "Time": "2023-01-26T00:21:44.891Z"
            },
            {
                "Demolitions": 73240,
                "Exterminations": 6254,
                "Time": "2023-02-03T13:32:23.356Z"
            }
        ]
    },
    "696124747679006730": {
        "Name": "SkyB1u",
        "Demolitions": 2248,
        "Exterminations": 87,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 2248,
                "Exterminations": 87,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "449287039909625896": {
        "Name": "rawhotdog1174",
        "Demolitions": 6661,
        "Exterminations": 203,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 6661,
                "Exterminations": 203,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "381884616379990016": {
        "Name": "Nebula",
        "Demolitions": 26052,
        "Exterminations": 1003,
        "LastUpdate": "2022-09-04T00:50:15.423Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 20009,
                "Exterminations": 774,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 26052,
                "Exterminations": 1003,
                "Time": "2022-09-04T00:50:15.423Z"
            }
        ]
    },
    "586158893357465600": {
        "Name": "Dunky",
        "Demolitions": 46048,
        "Exterminations": 1843,
        "LastUpdate": "2023-01-09T11:45:22.862Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 28281,
                "Exterminations": 1082,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 31314,
                "Exterminations": 1233,
                "Time": "2022-04-01T10:21:15.675Z"
            },
            {
                "Demolitions": 31599,
                "Exterminations": 1243,
                "Time": "2022-04-06T16:26:03.840Z"
            },
            {
                "Demolitions": 32328,
                "Exterminations": 1291,
                "Time": "2022-04-14T14:38:07.591Z"
            },
            {
                "Demolitions": 33205,
                "Exterminations": 1329,
                "Time": "2022-04-27T17:04:59.060Z"
            },
            {
                "Demolitions": 33327,
                "Exterminations": 1335,
                "Time": "2022-05-03T08:02:18.647Z"
            },
            {
                "Demolitions": 33669,
                "Exterminations": 1351,
                "Time": "2022-05-08T10:06:36.679Z"
            },
            {
                "Demolitions": 34595,
                "Exterminations": 1401,
                "Time": "2022-06-03T14:07:28.926Z"
            },
            {
                "Demolitions": 34794,
                "Exterminations": 1406,
                "Time": "2022-06-09T15:11:14.273Z"
            },
            {
                "Demolitions": 34961,
                "Exterminations": 1411,
                "Time": "2022-06-12T15:56:38.384Z"
            },
            {
                "Demolitions": 35908,
                "Exterminations": 1454,
                "Time": "2022-07-01T14:55:57.502Z"
            },
            {
                "Demolitions": 36119,
                "Exterminations": 1463,
                "Time": "2022-07-05T14:43:20.666Z"
            },
            {
                "Demolitions": 36247,
                "Exterminations": 1468,
                "Time": "2022-07-07T14:45:26.044Z"
            },
            {
                "Demolitions": 36956,
                "Exterminations": 1507,
                "Time": "2022-07-20T17:08:38.988Z"
            },
            {
                "Demolitions": 37231,
                "Exterminations": 1517,
                "Time": "2022-07-27T16:45:07.045Z"
            },
            {
                "Demolitions": 37409,
                "Exterminations": 1523,
                "Time": "2022-07-29T15:00:22.035Z"
            },
            {
                "Demolitions": 38082,
                "Exterminations": 1560,
                "Time": "2022-08-07T14:02:41.999Z"
            },
            {
                "Demolitions": 38355,
                "Exterminations": 1570,
                "Time": "2022-08-12T17:54:39.375Z"
            },
            {
                "Demolitions": 38681,
                "Exterminations": 1586,
                "Time": "2022-08-16T16:08:00.245Z"
            },
            {
                "Demolitions": 39175,
                "Exterminations": 1600,
                "Time": "2022-08-28T13:50:31.488Z"
            },
            {
                "Demolitions": 39812,
                "Exterminations": 1632,
                "Time": "2022-09-07T04:42:23.679Z"
            },
            {
                "Demolitions": 40072,
                "Exterminations": 1650,
                "Time": "2022-09-10T11:07:40.202Z"
            },
            {
                "Demolitions": 40374,
                "Exterminations": 1662,
                "Time": "2022-09-16T15:35:07.932Z"
            },
            {
                "Demolitions": 40596,
                "Exterminations": 1674,
                "Time": "2022-09-19T15:30:49.286Z"
            },
            {
                "Demolitions": 41253,
                "Exterminations": 1708,
                "Time": "2022-09-27T14:34:51.899Z"
            },
            {
                "Demolitions": 42029,
                "Exterminations": 1734,
                "Time": "2022-10-12T15:05:00.290Z"
            },
            {
                "Demolitions": 43057,
                "Exterminations": 1758,
                "Time": "2022-11-04T14:00:05.225Z"
            },
            {
                "Demolitions": 43293,
                "Exterminations": 1765,
                "Time": "2022-11-08T14:00:37.749Z"
            },
            {
                "Demolitions": 43607,
                "Exterminations": 1773,
                "Time": "2022-11-18T15:34:50.837Z"
            },
            {
                "Demolitions": 43925,
                "Exterminations": 1779,
                "Time": "2022-11-24T17:12:20.848Z"
            },
            {
                "Demolitions": 44022,
                "Exterminations": 1782,
                "Time": "2022-11-25T16:50:47.836Z"
            },
            {
                "Demolitions": 44855,
                "Exterminations": 1808,
                "Time": "2022-12-13T12:45:44.399Z"
            },
            {
                "Demolitions": 45236,
                "Exterminations": 1815,
                "Time": "2022-12-22T14:00:17.868Z"
            },
            {
                "Demolitions": 46048,
                "Exterminations": 1843,
                "Time": "2023-01-09T11:45:22.862Z"
            }
        ],
        "Country": "AUS"
    },
    "437445234108923906": {
        "Name": "MonsTurkey",
        "Demolitions": 16233,
        "Exterminations": 108,
        "LastUpdate": "2022-10-06T05:05:42.505Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 11134,
                "Exterminations": 83,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 16233,
                "Exterminations": 108,
                "Time": "2022-10-06T05:05:42.505Z"
            }
        ]
    },
    "629442107349794827": {
        "Name": "CrushIsToxic",
        "Demolitions": 12770,
        "Exterminations": 633,
        "LastUpdate": "2022-06-05T12:19:39.219Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 11077,
                "Exterminations": 579,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 11559,
                "Exterminations": 589,
                "Time": "2022-04-01T10:11:13.922Z"
            },
            {
                "Demolitions": 12770,
                "Exterminations": 633,
                "Time": "2022-06-05T12:19:39.219Z"
            }
        ]
    },
    "261278191954427905": {
        "Name": "MsDirtyBird",
        "Demolitions": 4198,
        "Exterminations": 148,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 4198,
                "Exterminations": 148,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "308703546017185792": {
        "Name": "Sox2K7",
        "Demolitions": 32008,
        "Exterminations": 1600,
        "LastUpdate": "2022-10-18T01:59:41.092Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 21780,
                "Exterminations": 1222,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 23770,
                "Exterminations": 1302,
                "Time": "2022-04-24T06:32:11.316Z"
            },
            {
                "Demolitions": 25542,
                "Exterminations": 1369,
                "Time": "2022-05-27T23:00:04.418Z"
            },
            {
                "Demolitions": 26316,
                "Exterminations": 1399,
                "Time": "2022-06-16T20:51:38.157Z"
            },
            {
                "Demolitions": 29425,
                "Exterminations": 1331,
                "Time": "2022-08-08T06:20:37.479Z"
            },
            {
                "Demolitions": 32008,
                "Exterminations": 1600,
                "Time": "2022-10-18T01:59:41.092Z"
            }
        ]
    },
    "208937234425053185": {
        "Name": "FancyScrub",
        "Demolitions": 21158,
        "Exterminations": 112,
        "LastUpdate": "2022-04-04T03:09:27.990Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 18104,
                "Exterminations": 90,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 21158,
                "Exterminations": 112,
                "Time": "2022-04-04T03:09:27.990Z"
            }
        ],
        "Country": "Australia"
    },
    "268368451116990466": {
        "Name": "Gobi Todic",
        "Demolitions": 26735,
        "Exterminations": 726,
        "LastUpdate": "2023-01-24T01:00:05.943Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 11520,
                "Exterminations": 53,
                "Time": "2021-07-08T00:00:00.000Z"
            },
            {
                "Demolitions": 12422,
                "Exterminations": 79,
                "Time": "2021-08-06T00:00:00.000Z"
            },
            {
                "Demolitions": 12655,
                "Exterminations": 83,
                "Time": "2021-09-02T00:00:00.000Z"
            },
            {
                "Demolitions": 13658,
                "Exterminations": 140,
                "Time": "2021-10-01T00:00:00.000Z"
            },
            {
                "Demolitions": 14735,
                "Exterminations": 178,
                "Time": "2021-11-02T00:00:00.000Z"
            },
            {
                "Demolitions": 16214,
                "Exterminations": 252,
                "Time": "2021-12-06T00:00:00.000Z"
            },
            {
                "Demolitions": 17151,
                "Exterminations": 289,
                "Time": "2022-01-03T00:00:00.000Z"
            },
            {
                "Demolitions": 18527,
                "Exterminations": 372,
                "Time": "2022-02-01T00:00:00.000Z"
            },
            {
                "Demolitions": 20001,
                "Exterminations": 465,
                "Time": "2022-03-06T00:00:00.000Z"
            },
            {
                "Demolitions": 21382,
                "Exterminations": 545,
                "Time": "2022-04-20T17:27:47.209Z"
            },
            {
                "Demolitions": 22046,
                "Exterminations": 580,
                "Time": "2022-05-12T21:14:31.811Z"
            },
            {
                "Demolitions": 22569,
                "Exterminations": 607,
                "Time": "2022-06-05T15:13:55.880Z"
            },
            {
                "Demolitions": 23789,
                "Exterminations": 645,
                "Time": "2022-07-04T21:20:35.394Z"
            },
            {
                "Demolitions": 24058,
                "Exterminations": 652,
                "Time": "2022-08-10T11:13:14.187Z"
            },
            {
                "Demolitions": 24604,
                "Exterminations": 665,
                "Time": "2022-09-14T16:00:10.544Z"
            },
            {
                "Demolitions": 25019,
                "Exterminations": 675,
                "Time": "2022-10-15T00:09:38.443Z"
            },
            {
                "Demolitions": 25540,
                "Exterminations": 683,
                "Time": "2022-11-16T01:48:22.421Z"
            },
            {
                "Demolitions": 26030,
                "Exterminations": 702,
                "Time": "2022-12-06T15:00:43.094Z"
            },
            {
                "Demolitions": 26735,
                "Exterminations": 726,
                "Time": "2023-01-24T01:00:05.943Z"
            }
        ],
        "Country": "GER"
    },
    "263085971266994176": {
        "Name": "Mactep",
        "Demolitions": 6899,
        "Exterminations": 29,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 6899,
                "Exterminations": 29,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "122818392448172032": {
        "Name": "Skourch",
        "Demolitions": 5311,
        "Exterminations": 123,
        "LastUpdate": "2022-04-04T17:58:55.363Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 4351,
                "Exterminations": 100,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 5311,
                "Exterminations": 123,
                "Time": "2022-04-04T17:58:55.363Z"
            }
        ],
        "Country": "USA"
    },
    "249287185063346178": {
        "Name": "Wambo John",
        "Demolitions": 50002,
        "Exterminations": 554,
        "LastUpdate": "2022-08-03T23:30:43.046Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 42069,
                "Exterminations": 329,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 50002,
                "Exterminations": 540,
                "Time": "2022-08-03T23:21:50.615Z"
            },
            {
                "Demolitions": 50002,
                "Exterminations": 554,
                "Time": "2022-08-03T23:30:43.046Z"
            }
        ]
    },
    "622939230938726421": {
        "Name": "arturopakastur",
        "Demolitions": 1833,
        "Exterminations": 56,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 1833,
                "Exterminations": 56,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "371409760274350080": {
        "Name": "I-Did-1t-Again",
        "Demolitions": 12773,
        "Exterminations": 837,
        "LastUpdate": "2022-11-30T01:56:29.488Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 8390,
                "Exterminations": 589,
                "Time": "2021-07-07T00:00:00.000Z"
            },
            {
                "Demolitions": 8871,
                "Exterminations": 629,
                "Time": "2021-07-17T00:00:00.000Z"
            },
            {
                "Demolitions": 9492,
                "Exterminations": 672,
                "Time": "2021-08-08T00:00:00.000Z"
            },
            {
                "Demolitions": 9887,
                "Exterminations": 706,
                "Time": "2021-10-13T00:00:00.000Z"
            },
            {
                "Demolitions": 10007,
                "Exterminations": 712,
                "Time": "2021-11-06T00:00:00.000Z"
            },
            {
                "Demolitions": 10045,
                "Exterminations": 734,
                "Time": "2021-12-03T00:00:00.000Z"
            },
            {
                "Demolitions": 10738,
                "Exterminations": 764,
                "Time": "2021-12-06T00:00:00.000Z"
            },
            {
                "Demolitions": 11523,
                "Exterminations": 793,
                "Time": "2022-04-11T00:00:00.000Z"
            },
            {
                "Demolitions": 5655,
                "Exterminations": 359,
                "Time": "2021-06-13T00:00:00.000Z"
            },
            {
                "Demolitions": 7780,
                "Exterminations": 543,
                "Time": "2021-06-29T00:00:00.000Z"
            },
            {
                "Demolitions": 8794,
                "Exterminations": 625,
                "Time": "2021-07-15T00:00:00.000Z"
            },
            {
                "Demolitions": 11767,
                "Exterminations": 807,
                "Time": "2022-04-23T21:57:25.274Z"
            },
            {
                "Demolitions": 12773,
                "Exterminations": 837,
                "Time": "2022-11-30T01:56:29.488Z"
            }
        ],
        "Country": "United States"
    },
    "330742324545978368": {
        "Name": "TheVandalsReal",
        "Demolitions": 3172,
        "Exterminations": 48,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 3172,
                "Exterminations": 48,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "325920058146816000": {
        "Name": "FuriousPanda",
        "Demolitions": 130082,
        "Exterminations": 9857,
        "LastUpdate": "2023-02-02T15:42:13.282Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 50996,
                "Exterminations": 1599,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 51298,
                "Exterminations": 1620,
                "Time": "2022-03-31T19:47:46.721Z"
            },
            {
                "Demolitions": 51381,
                "Exterminations": 1630,
                "Time": "2022-04-02T23:34:49.991Z"
            },
            {
                "Demolitions": 51476,
                "Exterminations": 1631,
                "Time": "2022-04-04T00:00:32.949Z"
            },
            {
                "Demolitions": 51688,
                "Exterminations": 1641,
                "Time": "2022-04-05T01:47:08.576Z"
            },
            {
                "Demolitions": 51987,
                "Exterminations": 1677,
                "Time": "2022-04-06T00:55:05.428Z"
            },
            {
                "Demolitions": 52465,
                "Exterminations": 1722,
                "Time": "2022-04-10T00:26:04.361Z"
            },
            {
                "Demolitions": 52720,
                "Exterminations": 1745,
                "Time": "2022-04-11T07:24:48.900Z"
            },
            {
                "Demolitions": 52921,
                "Exterminations": 1763,
                "Time": "2022-04-13T15:58:24.581Z"
            },
            {
                "Demolitions": 53115,
                "Exterminations": 1786,
                "Time": "2022-04-15T07:03:25.669Z"
            },
            {
                "Demolitions": 53451,
                "Exterminations": 1815,
                "Time": "2022-04-19T22:34:17.967Z"
            },
            {
                "Demolitions": 53752,
                "Exterminations": 1843,
                "Time": "2022-04-21T07:24:09.334Z"
            },
            {
                "Demolitions": 54006,
                "Exterminations": 1865,
                "Time": "2022-04-23T21:32:52.681Z"
            },
            {
                "Demolitions": 54211,
                "Exterminations": 1874,
                "Time": "2022-04-26T21:57:39.782Z"
            },
            {
                "Demolitions": 54368,
                "Exterminations": 1884,
                "Time": "2022-04-28T02:16:09.198Z"
            },
            {
                "Demolitions": 54500,
                "Exterminations": 1893,
                "Time": "2022-04-30T01:12:46.445Z"
            },
            {
                "Demolitions": 54674,
                "Exterminations": 1902,
                "Time": "2022-05-02T14:50:09.907Z"
            },
            {
                "Demolitions": 54800,
                "Exterminations": 1907,
                "Time": "2022-05-03T15:27:54.844Z"
            },
            {
                "Demolitions": 55024,
                "Exterminations": 1929,
                "Time": "2022-05-05T01:37:18.643Z"
            },
            {
                "Demolitions": 55299,
                "Exterminations": 1954,
                "Time": "2022-05-08T21:31:03.903Z"
            },
            {
                "Demolitions": 55634,
                "Exterminations": 1975,
                "Time": "2022-05-11T01:39:21.014Z"
            },
            {
                "Demolitions": 55824,
                "Exterminations": 1983,
                "Time": "2022-05-12T22:36:33.501Z"
            },
            {
                "Demolitions": 56127,
                "Exterminations": 2022,
                "Time": "2022-05-13T06:09:34.241Z"
            },
            {
                "Demolitions": 56363,
                "Exterminations": 2046,
                "Time": "2022-05-14T05:29:33.538Z"
            },
            {
                "Demolitions": 56643,
                "Exterminations": 2066,
                "Time": "2022-05-17T20:57:44.612Z"
            },
            {
                "Demolitions": 57060,
                "Exterminations": 2118,
                "Time": "2022-05-20T03:17:51.728Z"
            },
            {
                "Demolitions": 57481,
                "Exterminations": 2165,
                "Time": "2022-05-21T07:48:46.496Z"
            },
            {
                "Demolitions": 57660,
                "Exterminations": 2180,
                "Time": "2022-05-23T07:12:58.055Z"
            },
            {
                "Demolitions": 58016,
                "Exterminations": 2217,
                "Time": "2022-05-24T04:43:30.014Z"
            },
            {
                "Demolitions": 58541,
                "Exterminations": 2283,
                "Time": "2022-05-25T13:58:27.095Z"
            },
            {
                "Demolitions": 58999,
                "Exterminations": 2343,
                "Time": "2022-05-26T00:57:45.316Z"
            },
            {
                "Demolitions": 59265,
                "Exterminations": 2380,
                "Time": "2022-05-28T06:36:57.516Z"
            },
            {
                "Demolitions": 59518,
                "Exterminations": 2410,
                "Time": "2022-05-30T07:34:37.947Z"
            },
            {
                "Demolitions": 60002,
                "Exterminations": 2467,
                "Time": "2022-06-01T08:00:15.892Z"
            },
            {
                "Demolitions": 60610,
                "Exterminations": 2541,
                "Time": "2022-06-04T12:04:44.708Z"
            },
            {
                "Demolitions": 60897,
                "Exterminations": 2577,
                "Time": "2022-06-06T09:17:58.016Z"
            },
            {
                "Demolitions": 61372,
                "Exterminations": 2642,
                "Time": "2022-06-07T17:47:26.161Z"
            },
            {
                "Demolitions": 61683,
                "Exterminations": 2683,
                "Time": "2022-06-09T16:58:17.150Z"
            },
            {
                "Demolitions": 61871,
                "Exterminations": 2696,
                "Time": "2022-06-16T02:16:09.887Z"
            },
            {
                "Demolitions": 62084,
                "Exterminations": 2720,
                "Time": "2022-06-16T19:19:46.910Z"
            },
            {
                "Demolitions": 62304,
                "Exterminations": 2736,
                "Time": "2022-06-21T14:43:06.909Z"
            },
            {
                "Demolitions": 62696,
                "Exterminations": 2774,
                "Time": "2022-06-22T19:27:36.380Z"
            },
            {
                "Demolitions": 62823,
                "Exterminations": 2784,
                "Time": "2022-06-23T01:55:37.783Z"
            },
            {
                "Demolitions": 63108,
                "Exterminations": 2815,
                "Time": "2022-06-24T12:48:14.898Z"
            },
            {
                "Demolitions": 63326,
                "Exterminations": 2828,
                "Time": "2022-06-25T01:37:34.495Z"
            },
            {
                "Demolitions": 63506,
                "Exterminations": 2844,
                "Time": "2022-06-25T23:08:32.336Z"
            },
            {
                "Demolitions": 63718,
                "Exterminations": 2854,
                "Time": "2022-06-29T08:25:22.396Z"
            },
            {
                "Demolitions": 64123,
                "Exterminations": 2894,
                "Time": "2022-06-30T12:07:23.986Z"
            },
            {
                "Demolitions": 64342,
                "Exterminations": 2914,
                "Time": "2022-07-01T09:42:28.230Z"
            },
            {
                "Demolitions": 64609,
                "Exterminations": 2947,
                "Time": "2022-07-02T16:59:42.428Z"
            },
            {
                "Demolitions": 64881,
                "Exterminations": 2964,
                "Time": "2022-07-04T01:36:26.969Z"
            },
            {
                "Demolitions": 65165,
                "Exterminations": 2995,
                "Time": "2022-07-06T04:22:02.712Z"
            },
            {
                "Demolitions": 65447,
                "Exterminations": 3017,
                "Time": "2022-07-07T12:27:30.578Z"
            },
            {
                "Demolitions": 65589,
                "Exterminations": 3033,
                "Time": "2022-07-07T22:10:45.242Z"
            },
            {
                "Demolitions": 66073,
                "Exterminations": 3088,
                "Time": "2022-07-10T22:59:16.942Z"
            },
            {
                "Demolitions": 66336,
                "Exterminations": 3112,
                "Time": "2022-07-11T23:47:13.983Z"
            },
            {
                "Demolitions": 66484,
                "Exterminations": 3117,
                "Time": "2022-07-12T12:55:00.155Z"
            },
            {
                "Demolitions": 66668,
                "Exterminations": 3130,
                "Time": "2022-07-13T12:44:49.811Z"
            },
            {
                "Demolitions": 66795,
                "Exterminations": 3136,
                "Time": "2022-07-13T22:18:29.894Z"
            },
            {
                "Demolitions": 67054,
                "Exterminations": 3163,
                "Time": "2022-07-15T20:37:59.313Z"
            },
            {
                "Demolitions": 67568,
                "Exterminations": 3205,
                "Time": "2022-07-18T16:05:19.000Z"
            },
            {
                "Demolitions": 67806,
                "Exterminations": 3224,
                "Time": "2022-07-20T00:50:59.668Z"
            },
            {
                "Demolitions": 68012,
                "Exterminations": 3250,
                "Time": "2022-07-20T13:17:56.938Z"
            },
            {
                "Demolitions": 68347,
                "Exterminations": 3256,
                "Time": "2022-08-08T15:30:35.801Z"
            },
            {
                "Demolitions": 68850,
                "Exterminations": 3312,
                "Time": "2022-08-09T20:35:41.342Z"
            },
            {
                "Demolitions": 69312,
                "Exterminations": 3354,
                "Time": "2022-08-10T05:36:36.897Z"
            },
            {
                "Demolitions": 70002,
                "Exterminations": 3403,
                "Time": "2022-08-11T05:58:07.311Z"
            },
            {
                "Demolitions": 70002,
                "Exterminations": 3455,
                "Time": "2022-08-11T06:01:41.109Z"
            },
            {
                "Demolitions": 70474,
                "Exterminations": 3510,
                "Time": "2022-08-13T03:42:43.277Z"
            },
            {
                "Demolitions": 70797,
                "Exterminations": 3553,
                "Time": "2022-08-14T09:29:52.938Z"
            },
            {
                "Demolitions": 70975,
                "Exterminations": 3575,
                "Time": "2022-08-14T20:41:13.650Z"
            },
            {
                "Demolitions": 71127,
                "Exterminations": 3588,
                "Time": "2022-08-15T12:37:10.143Z"
            },
            {
                "Demolitions": 71558,
                "Exterminations": 3640,
                "Time": "2022-08-16T18:51:21.170Z"
            },
            {
                "Demolitions": 71835,
                "Exterminations": 3649,
                "Time": "2022-08-21T21:48:20.199Z"
            },
            {
                "Demolitions": 72386,
                "Exterminations": 3716,
                "Time": "2022-08-23T06:38:34.885Z"
            },
            {
                "Demolitions": 73140,
                "Exterminations": 3806,
                "Time": "2022-08-25T10:37:59.262Z"
            },
            {
                "Demolitions": 73669,
                "Exterminations": 3838,
                "Time": "2022-08-28T15:49:41.052Z"
            },
            {
                "Demolitions": 74362,
                "Exterminations": 3928,
                "Time": "2022-08-31T14:14:33.792Z"
            },
            {
                "Demolitions": 74946,
                "Exterminations": 3997,
                "Time": "2022-09-02T16:32:32.773Z"
            },
            {
                "Demolitions": 75514,
                "Exterminations": 4027,
                "Time": "2022-09-05T15:57:56.462Z"
            },
            {
                "Demolitions": 76560,
                "Exterminations": 4140,
                "Time": "2022-09-09T13:01:21.795Z"
            },
            {
                "Demolitions": 78052,
                "Exterminations": 4309,
                "Time": "2022-09-12T18:04:51.291Z"
            },
            {
                "Demolitions": 79011,
                "Exterminations": 4422,
                "Time": "2022-09-15T08:53:57.477Z"
            },
            {
                "Demolitions": 80166,
                "Exterminations": 4540,
                "Time": "2022-09-18T23:06:38.458Z"
            },
            {
                "Demolitions": 82033,
                "Exterminations": 4712,
                "Time": "2022-09-23T22:28:44.769Z"
            },
            {
                "Demolitions": 82035,
                "Exterminations": 4712,
                "Time": "2022-09-25T06:33:14.379Z"
            },
            {
                "Demolitions": 83135,
                "Exterminations": 4810,
                "Time": "2022-09-28T01:32:13.375Z"
            },
            {
                "Demolitions": 84414,
                "Exterminations": 4966,
                "Time": "2022-09-30T11:28:24.282Z"
            },
            {
                "Demolitions": 84720,
                "Exterminations": 5000,
                "Time": "2022-09-30T18:19:31.330Z"
            },
            {
                "Demolitions": 86375,
                "Exterminations": 5185,
                "Time": "2022-10-07T21:39:15.202Z"
            },
            {
                "Demolitions": 87828,
                "Exterminations": 5330,
                "Time": "2022-10-10T15:40:01.491Z"
            },
            {
                "Demolitions": 90034,
                "Exterminations": 5585,
                "Time": "2022-10-15T01:03:45.018Z"
            },
            {
                "Demolitions": 92806,
                "Exterminations": 5874,
                "Time": "2022-10-20T22:10:18.151Z"
            },
            {
                "Demolitions": 94172,
                "Exterminations": 6020,
                "Time": "2022-10-24T01:56:32.128Z"
            },
            {
                "Demolitions": 97058,
                "Exterminations": 6363,
                "Time": "2022-10-27T20:37:55.222Z"
            },
            {
                "Demolitions": 99373,
                "Exterminations": 6634,
                "Time": "2022-10-29T23:50:36.410Z"
            },
            {
                "Demolitions": 100000,
                "Exterminations": 6696,
                "Time": "2022-10-30T19:35:04.508Z"
            },
            {
                "Demolitions": 101102,
                "Exterminations": 6792,
                "Time": "2022-11-04T15:04:48.042Z"
            },
            {
                "Demolitions": 102416,
                "Exterminations": 6920,
                "Time": "2022-11-14T03:17:02.154Z"
            },
            {
                "Demolitions": 103769,
                "Exterminations": 7025,
                "Time": "2022-11-18T23:03:18.374Z"
            },
            {
                "Demolitions": 105632,
                "Exterminations": 7208,
                "Time": "2022-11-23T00:49:38.272Z"
            },
            {
                "Demolitions": 107223,
                "Exterminations": 7385,
                "Time": "2022-11-26T00:16:16.709Z"
            },
            {
                "Demolitions": 110000,
                "Exterminations": 7670,
                "Time": "2022-12-05T16:43:52.979Z"
            },
            {
                "Demolitions": 111667,
                "Exterminations": 7841,
                "Time": "2022-12-09T21:42:46.058Z"
            },
            {
                "Demolitions": 112821,
                "Exterminations": 7961,
                "Time": "2022-12-15T00:54:49.639Z"
            },
            {
                "Demolitions": 114119,
                "Exterminations": 8084,
                "Time": "2022-12-18T20:07:31.519Z"
            },
            {
                "Demolitions": 116120,
                "Exterminations": 8312,
                "Time": "2022-12-24T20:54:59.071Z"
            },
            {
                "Demolitions": 117009,
                "Exterminations": 8397,
                "Time": "2022-12-29T23:11:18.444Z"
            },
            {
                "Demolitions": 118411,
                "Exterminations": 8538,
                "Time": "2023-01-05T11:22:02.447Z"
            },
            {
                "Demolitions": 120000,
                "Exterminations": 8721,
                "Time": "2023-01-06T18:34:19.773Z"
            },
            {
                "Demolitions": 121693,
                "Exterminations": 8901,
                "Time": "2023-01-11T18:14:30.110Z"
            },
            {
                "Demolitions": 123570,
                "Exterminations": 9093,
                "Time": "2023-01-16T20:06:32.968Z"
            },
            {
                "Demolitions": 126001,
                "Exterminations": 9386,
                "Time": "2023-01-23T16:25:04.502Z"
            },
            {
                "Demolitions": 127564,
                "Exterminations": 9566,
                "Time": "2023-01-30T02:43:44.051Z"
            },
            {
                "Demolitions": 130082,
                "Exterminations": 9857,
                "Time": "2023-02-02T15:42:13.282Z"
            }
        ],
        "Country": "FRA"
    },
    "596802940476456991": {
        "Name": "Gamingdad",
        "Demolitions": 6200,
        "Exterminations": 17,
        "LastUpdate": "2022-09-14T06:56:27.410Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 4700,
                "Exterminations": 10,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 4963,
                "Exterminations": 10,
                "Time": "2022-04-01T20:21:58.563Z"
            },
            {
                "Demolitions": 5001,
                "Exterminations": 10,
                "Time": "2022-04-04T21:02:17.399Z"
            },
            {
                "Demolitions": 5080,
                "Exterminations": 12,
                "Time": "2022-04-14T23:07:47.909Z"
            },
            {
                "Demolitions": 5103,
                "Exterminations": 12,
                "Time": "2022-04-19T22:44:46.387Z"
            },
            {
                "Demolitions": 5140,
                "Exterminations": 12,
                "Time": "2022-04-21T23:06:03.361Z"
            },
            {
                "Demolitions": 5200,
                "Exterminations": 12,
                "Time": "2022-05-01T21:30:45.057Z"
            },
            {
                "Demolitions": 5429,
                "Exterminations": 15,
                "Time": "2022-06-02T07:47:58.030Z"
            },
            {
                "Demolitions": 5501,
                "Exterminations": 15,
                "Time": "2022-06-07T22:39:33.131Z"
            },
            {
                "Demolitions": 5550,
                "Exterminations": 15,
                "Time": "2022-06-11T00:24:13.522Z"
            },
            {
                "Demolitions": 5636,
                "Exterminations": 15,
                "Time": "2022-06-17T08:34:32.045Z"
            },
            {
                "Demolitions": 5806,
                "Exterminations": 15,
                "Time": "2022-07-11T23:50:40.878Z"
            },
            {
                "Demolitions": 6010,
                "Exterminations": 16,
                "Time": "2022-08-17T20:56:16.627Z"
            },
            {
                "Demolitions": 6101,
                "Exterminations": 16,
                "Time": "2022-08-27T23:35:30.251Z"
            },
            {
                "Demolitions": 6111,
                "Exterminations": 16,
                "Time": "2022-08-30T19:52:54.074Z"
            },
            {
                "Demolitions": 6200,
                "Exterminations": 17,
                "Time": "2022-09-14T06:56:27.410Z"
            }
        ]
    },
    "689536656524836981": {
        "Name": "Ravni",
        "Demolitions": 28056,
        "Exterminations": 553,
        "LastUpdate": "2022-04-22T14:17:10.041Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 24356,
                "Exterminations": 483,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 28056,
                "Exterminations": 553,
                "Time": "2022-04-22T14:17:10.041Z"
            }
        ]
    },
    "201232716480380928": {
        "Name": "Akkimbo Slice",
        "Demolitions": 7098,
        "Exterminations": 26,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 7098,
                "Exterminations": 26,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "326569854469406741": {
        "Name": "Skika",
        "Demolitions": 7236,
        "Exterminations": 67,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 7236,
                "Exterminations": 67,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "594320745165881366": {
        "Name": "mclark2332",
        "Demolitions": 32020,
        "Exterminations": 614,
        "LastUpdate": "2022-11-29T02:07:36.942Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 26096,
                "Exterminations": 445,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 26702,
                "Exterminations": 454,
                "Time": "2022-04-01T01:29:09.937Z"
            },
            {
                "Demolitions": 27079,
                "Exterminations": 462,
                "Time": "2022-04-20T00:51:46.625Z"
            },
            {
                "Demolitions": 27420,
                "Exterminations": 475,
                "Time": "2022-04-29T03:09:26.108Z"
            },
            {
                "Demolitions": 28398,
                "Exterminations": 496,
                "Time": "2022-06-07T02:44:25.930Z"
            },
            {
                "Demolitions": 29653,
                "Exterminations": 550,
                "Time": "2022-07-22T03:56:37.861Z"
            },
            {
                "Demolitions": 30319,
                "Exterminations": 571,
                "Time": "2022-08-16T01:33:18.573Z"
            },
            {
                "Demolitions": 30780,
                "Exterminations": 575,
                "Time": "2022-09-18T04:56:30.467Z"
            },
            {
                "Demolitions": 31458,
                "Exterminations": 612,
                "Time": "2022-10-10T01:06:28.691Z"
            },
            {
                "Demolitions": 32020,
                "Exterminations": 614,
                "Time": "2022-11-29T02:07:36.942Z"
            }
        ]
    },
    "426407510467936269": {
        "Name": "kevuwk",
        "Demolitions": 1955,
        "Exterminations": 1,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 1955,
                "Exterminations": 1,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "292620072688680960": {
        "Name": "CelebrateLife",
        "Demolitions": 4381,
        "Exterminations": 11,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 4381,
                "Exterminations": 11,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "685899814432800789": {
        "Name": "Poopadier",
        "Demolitions": 10130,
        "Exterminations": 264,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 10130,
                "Exterminations": 264,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "613901861560385536": {
        "Name": "DisgrntledVet",
        "Demolitions": 10004,
        "Exterminations": 106,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 10004,
                "Exterminations": 106,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "803881574587957258": {
        "Name": "TTV_TomvLith",
        "Demolitions": 19270,
        "Exterminations": 1446,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 19270,
                "Exterminations": 1446,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "698215512097947719": {
        "Name": "_Ko|Kura_",
        "Demolitions": 12552,
        "Exterminations": 49,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 12552,
                "Exterminations": 49,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "781589830558810152": {
        "Name": "Turlello",
        "Demolitions": 10769,
        "Exterminations": 272,
        "LastUpdate": "2022-04-02T15:37:00.033Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 10533,
                "Exterminations": 267,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 10769,
                "Exterminations": 272,
                "Time": "2022-04-02T15:37:00.033Z"
            }
        ]
    },
    "473533440872939520": {
        "Name": "sug4rw01f",
        "Demolitions": 4841,
        "Exterminations": 375,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 4841,
                "Exterminations": 375,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "347185167481307147": {
        "Name": "BLong",
        "Demolitions": 8511,
        "Exterminations": 166,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 8511,
                "Exterminations": 166,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "234782253677412354": {
        "Name": "Rocket Pollo",
        "Demolitions": 36078,
        "Exterminations": 1082,
        "LastUpdate": "2022-09-25T04:56:23.847Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 31028,
                "Exterminations": 845,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 36078,
                "Exterminations": 1082,
                "Time": "2022-09-25T04:56:23.847Z"
            }
        ]
    },
    "573331929340837898": {
        "Name": "IlianaKitaro",
        "Demolitions": 3390,
        "Exterminations": 209,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 3390,
                "Exterminations": 209,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "735690415105245256": {
        "Name": "Bart Bandy",
        "Demolitions": 34358,
        "Exterminations": 920,
        "LastUpdate": "2023-01-30T01:28:03.985Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 8126,
                "Exterminations": 107,
                "Time": "2021-08-24T00:00:00.000Z"
            },
            {
                "Demolitions": 10818,
                "Exterminations": 215,
                "Time": "2021-09-27T00:00:00.000Z"
            },
            {
                "Demolitions": 12337,
                "Exterminations": 266,
                "Time": "2021-10-24T00:00:00.000Z"
            },
            {
                "Demolitions": 14252,
                "Exterminations": 340,
                "Time": "2021-11-28T00:00:00.000Z"
            },
            {
                "Demolitions": 16000,
                "Exterminations": 373,
                "Time": "2021-12-31T00:00:00.000Z"
            },
            {
                "Demolitions": 17353,
                "Exterminations": 415,
                "Time": "2022-01-31T00:00:00.000Z"
            },
            {
                "Demolitions": 18609,
                "Exterminations": 442,
                "Time": "2022-02-28T00:00:00.000Z"
            },
            {
                "Demolitions": 19534,
                "Exterminations": 460,
                "Time": "2022-03-31T00:00:00.000Z"
            },
            {
                "Demolitions": 19810,
                "Exterminations": 467,
                "Time": "2022-04-05T04:36:09.175Z"
            },
            {
                "Demolitions": 20002,
                "Exterminations": 471,
                "Time": "2022-04-09T17:26:12.251Z"
            },
            {
                "Demolitions": 20103,
                "Exterminations": 476,
                "Time": "2022-04-10T19:24:25.191Z"
            },
            {
                "Demolitions": 20139,
                "Exterminations": 476,
                "Time": "2022-04-11T04:33:13.641Z"
            },
            {
                "Demolitions": 20153,
                "Exterminations": 476,
                "Time": "2022-04-12T01:37:45.908Z"
            },
            {
                "Demolitions": 20218,
                "Exterminations": 479,
                "Time": "2022-04-13T03:28:24.971Z"
            },
            {
                "Demolitions": 20252,
                "Exterminations": 479,
                "Time": "2022-04-15T03:16:07.985Z"
            },
            {
                "Demolitions": 20360,
                "Exterminations": 482,
                "Time": "2022-04-17T21:15:44.133Z"
            },
            {
                "Demolitions": 20406,
                "Exterminations": 483,
                "Time": "2022-04-18T03:55:53.951Z"
            },
            {
                "Demolitions": 20657,
                "Exterminations": 490,
                "Time": "2022-04-25T02:47:38.821Z"
            },
            {
                "Demolitions": 21053,
                "Exterminations": 502,
                "Time": "2022-05-04T04:01:12.759Z"
            },
            {
                "Demolitions": 21202,
                "Exterminations": 503,
                "Time": "2022-05-12T04:41:35.258Z"
            },
            {
                "Demolitions": 21508,
                "Exterminations": 514,
                "Time": "2022-05-16T04:18:13.896Z"
            },
            {
                "Demolitions": 21603,
                "Exterminations": 518,
                "Time": "2022-05-18T03:49:13.621Z"
            },
            {
                "Demolitions": 21698,
                "Exterminations": 524,
                "Time": "2022-05-19T04:26:03.692Z"
            },
            {
                "Demolitions": 21800,
                "Exterminations": 528,
                "Time": "2022-05-19T22:41:43.695Z"
            },
            {
                "Demolitions": 22002,
                "Exterminations": 540,
                "Time": "2022-05-21T23:32:43.736Z"
            },
            {
                "Demolitions": 22091,
                "Exterminations": 542,
                "Time": "2022-05-23T04:45:06.946Z"
            },
            {
                "Demolitions": 22202,
                "Exterminations": 543,
                "Time": "2022-05-25T03:49:07.041Z"
            },
            {
                "Demolitions": 22397,
                "Exterminations": 545,
                "Time": "2022-05-30T03:52:36.474Z"
            },
            {
                "Demolitions": 22630,
                "Exterminations": 549,
                "Time": "2022-06-05T23:12:34.382Z"
            },
            {
                "Demolitions": 22768,
                "Exterminations": 552,
                "Time": "2022-06-09T01:39:02.375Z"
            },
            {
                "Demolitions": 22808,
                "Exterminations": 553,
                "Time": "2022-06-10T03:36:09.444Z"
            },
            {
                "Demolitions": 22940,
                "Exterminations": 555,
                "Time": "2022-06-12T01:29:20.370Z"
            },
            {
                "Demolitions": 23084,
                "Exterminations": 560,
                "Time": "2022-06-13T02:33:31.254Z"
            },
            {
                "Demolitions": 23205,
                "Exterminations": 567,
                "Time": "2022-06-15T03:25:33.471Z"
            },
            {
                "Demolitions": 23336,
                "Exterminations": 567,
                "Time": "2022-06-17T18:15:47.582Z"
            },
            {
                "Demolitions": 23533,
                "Exterminations": 573,
                "Time": "2022-06-18T21:06:31.564Z"
            },
            {
                "Demolitions": 23708,
                "Exterminations": 583,
                "Time": "2022-06-20T03:56:05.557Z"
            },
            {
                "Demolitions": 23739,
                "Exterminations": 583,
                "Time": "2022-06-21T03:22:50.023Z"
            },
            {
                "Demolitions": 23821,
                "Exterminations": 584,
                "Time": "2022-06-25T02:38:59.404Z"
            },
            {
                "Demolitions": 23904,
                "Exterminations": 589,
                "Time": "2022-06-25T21:22:19.488Z"
            },
            {
                "Demolitions": 24083,
                "Exterminations": 593,
                "Time": "2022-06-27T03:04:08.537Z"
            },
            {
                "Demolitions": 24324,
                "Exterminations": 594,
                "Time": "2022-07-04T02:06:17.690Z"
            },
            {
                "Demolitions": 24740,
                "Exterminations": 603,
                "Time": "2022-07-11T01:31:38.881Z"
            },
            {
                "Demolitions": 25190,
                "Exterminations": 614,
                "Time": "2022-07-18T03:52:35.983Z"
            },
            {
                "Demolitions": 25256,
                "Exterminations": 616,
                "Time": "2022-07-19T03:49:31.183Z"
            },
            {
                "Demolitions": 25501,
                "Exterminations": 620,
                "Time": "2022-07-23T05:05:55.675Z"
            },
            {
                "Demolitions": 25729,
                "Exterminations": 623,
                "Time": "2022-07-28T03:59:38.073Z"
            },
            {
                "Demolitions": 25926,
                "Exterminations": 626,
                "Time": "2022-08-01T02:35:09.717Z"
            },
            {
                "Demolitions": 26086,
                "Exterminations": 634,
                "Time": "2022-08-02T04:30:23.313Z"
            },
            {
                "Demolitions": 26642,
                "Exterminations": 650,
                "Time": "2022-08-14T02:00:43.976Z"
            },
            {
                "Demolitions": 26905,
                "Exterminations": 662,
                "Time": "2022-08-16T01:57:27.498Z"
            },
            {
                "Demolitions": 27000,
                "Exterminations": 666,
                "Time": "2022-08-17T03:13:23.219Z"
            },
            {
                "Demolitions": 27504,
                "Exterminations": 682,
                "Time": "2022-08-22T00:29:02.997Z"
            },
            {
                "Demolitions": 28002,
                "Exterminations": 697,
                "Time": "2022-09-07T03:27:19.176Z"
            },
            {
                "Demolitions": 28509,
                "Exterminations": 707,
                "Time": "2022-09-26T01:29:51.581Z"
            },
            {
                "Demolitions": 28589,
                "Exterminations": 707,
                "Time": "2022-10-17T01:55:54.179Z"
            },
            {
                "Demolitions": 28665,
                "Exterminations": 710,
                "Time": "2022-10-22T04:52:11.341Z"
            },
            {
                "Demolitions": 29151,
                "Exterminations": 718,
                "Time": "2022-11-05T03:27:24.037Z"
            },
            {
                "Demolitions": 29803,
                "Exterminations": 734,
                "Time": "2022-11-18T03:28:29.720Z"
            },
            {
                "Demolitions": 30001,
                "Exterminations": 741,
                "Time": "2022-11-21T01:12:09.924Z"
            },
            {
                "Demolitions": 30609,
                "Exterminations": 782,
                "Time": "2022-11-27T22:58:09.147Z"
            },
            {
                "Demolitions": 31022,
                "Exterminations": 809,
                "Time": "2022-12-05T02:52:56.268Z"
            },
            {
                "Demolitions": 31111,
                "Exterminations": 812,
                "Time": "2022-12-08T22:10:36.006Z"
            },
            {
                "Demolitions": 31402,
                "Exterminations": 821,
                "Time": "2022-12-12T00:33:12.555Z"
            },
            {
                "Demolitions": 32119,
                "Exterminations": 857,
                "Time": "2022-12-19T02:00:58.366Z"
            },
            {
                "Demolitions": 32751,
                "Exterminations": 871,
                "Time": "2023-01-01T01:54:48.379Z"
            },
            {
                "Demolitions": 33119,
                "Exterminations": 882,
                "Time": "2023-01-09T00:10:06.798Z"
            },
            {
                "Demolitions": 33333,
                "Exterminations": 888,
                "Time": "2023-01-14T02:17:17.234Z"
            },
            {
                "Demolitions": 33555,
                "Exterminations": 893,
                "Time": "2023-01-16T00:35:58.698Z"
            },
            {
                "Demolitions": 34015,
                "Exterminations": 909,
                "Time": "2023-01-26T03:17:00.226Z"
            },
            {
                "Demolitions": 34358,
                "Exterminations": 920,
                "Time": "2023-01-30T01:28:03.985Z"
            }
        ],
        "Country": "Canada"
    },
    "358818740273414146": {
        "Name": "Mo81us",
        "Demolitions": 4510,
        "Exterminations": 63,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 4510,
                "Exterminations": 63,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "330238658303098885": {
        "Name": "Melly",
        "Demolitions": 14300,
        "Exterminations": 23,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 14300,
                "Exterminations": 23,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "876875990272471141": {
        "Name": "gwillikkers",
        "Demolitions": 13248,
        "Exterminations": 99,
        "LastUpdate": "2022-04-24T16:10:27.523Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 13151,
                "Exterminations": 98,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 13248,
                "Exterminations": 99,
                "Time": "2022-04-24T16:10:27.523Z"
            }
        ]
    },
    "569909903968305213": {
        "Name": "Lazerstainpast",
        "Demolitions": 24605,
        "Exterminations": 240,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 24605,
                "Exterminations": 240,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "140508535074193408": {
        "Name": "AlexKF",
        "Demolitions": 6815,
        "Exterminations": 12,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 6815,
                "Exterminations": 12,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "772157841448370226": {
        "Name": "Laurencius",
        "Demolitions": 3040,
        "Exterminations": 39,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 3040,
                "Exterminations": 39,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "242407030663544832": {
        "Name": "RobotNinja4",
        "Demolitions": 25078,
        "Exterminations": 110,
        "LastUpdate": "2022-12-03T08:30:25.203Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 22255,
                "Exterminations": 107,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 22572,
                "Exterminations": 108,
                "Time": "2022-04-11T02:08:08.219Z"
            },
            {
                "Demolitions": 23078,
                "Exterminations": 109,
                "Time": "2022-05-11T08:02:31.612Z"
            },
            {
                "Demolitions": 23460,
                "Exterminations": 109,
                "Time": "2022-06-04T06:51:19.491Z"
            },
            {
                "Demolitions": 24738,
                "Exterminations": 109,
                "Time": "2022-10-24T04:22:56.007Z"
            },
            {
                "Demolitions": 25078,
                "Exterminations": 110,
                "Time": "2022-12-03T08:30:25.203Z"
            }
        ]
    },
    "305013384028618753": {
        "Name": "Homepup",
        "Demolitions": 28071,
        "Exterminations": 149,
        "LastUpdate": "2022-11-30T15:11:09.690Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 23585,
                "Exterminations": 126,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 23945,
                "Exterminations": 129,
                "Time": "2022-04-12T02:30:17.936Z"
            },
            {
                "Demolitions": 24348,
                "Exterminations": 131,
                "Time": "2022-05-06T22:04:22.024Z"
            },
            {
                "Demolitions": 24950,
                "Exterminations": 132,
                "Time": "2022-06-11T00:09:04.995Z"
            },
            {
                "Demolitions": 25104,
                "Exterminations": 133,
                "Time": "2022-06-18T03:29:11.637Z"
            },
            {
                "Demolitions": 25800,
                "Exterminations": 141,
                "Time": "2022-07-27T03:07:15.077Z"
            },
            {
                "Demolitions": 26012,
                "Exterminations": 143,
                "Time": "2022-08-07T03:54:12.319Z"
            },
            {
                "Demolitions": 26250,
                "Exterminations": 144,
                "Time": "2022-08-20T03:56:35.579Z"
            },
            {
                "Demolitions": 28071,
                "Exterminations": 149,
                "Time": "2022-11-30T15:11:09.690Z"
            }
        ]
    },
    "227206629861490698": {
        "Name": "Vexei",
        "Demolitions": 37327,
        "Exterminations": 3013,
        "LastUpdate": "2022-12-16T14:36:59.835Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 21092,
                "Exterminations": 1710,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 23438,
                "Exterminations": 1893,
                "Time": "2022-05-07T19:13:50.443Z"
            },
            {
                "Demolitions": 30609,
                "Exterminations": 2464,
                "Time": "2022-07-10T12:13:19.905Z"
            },
            {
                "Demolitions": 34940,
                "Exterminations": 2823,
                "Time": "2022-11-19T17:40:35.349Z"
            },
            {
                "Demolitions": 37327,
                "Exterminations": 3013,
                "Time": "2022-12-16T14:36:59.835Z"
            }
        ]
    },
    "706981324124192859": {
        "Name": "JustOneJame",
        "Demolitions": 20003,
        "Exterminations": 570,
        "LastUpdate": "2022-05-31T23:01:11.682Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 17292,
                "Exterminations": 500,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 18040,
                "Exterminations": 522,
                "Time": "2022-04-01T04:08:12.329Z"
            },
            {
                "Demolitions": 20003,
                "Exterminations": 570,
                "Time": "2022-05-31T23:01:11.682Z"
            }
        ]
    },
    "288324292100227073": {
        "Name": "EGBlackfang",
        "Demolitions": 31558,
        "Exterminations": 1679,
        "LastUpdate": "2023-01-28T18:29:52.138Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 12705,
                "Exterminations": 492,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 13888,
                "Exterminations": 575,
                "Time": "2022-04-05T01:14:23.514Z"
            },
            {
                "Demolitions": 14562,
                "Exterminations": 623,
                "Time": "2022-04-11T18:23:23.553Z"
            },
            {
                "Demolitions": 14960,
                "Exterminations": 650,
                "Time": "2022-04-13T22:47:33.148Z"
            },
            {
                "Demolitions": 15500,
                "Exterminations": 685,
                "Time": "2022-04-22T20:05:06.979Z"
            },
            {
                "Demolitions": 15749,
                "Exterminations": 705,
                "Time": "2022-04-24T21:38:12.693Z"
            },
            {
                "Demolitions": 16110,
                "Exterminations": 726,
                "Time": "2022-04-28T19:05:36.155Z"
            },
            {
                "Demolitions": 16372,
                "Exterminations": 745,
                "Time": "2022-05-01T20:04:56.325Z"
            },
            {
                "Demolitions": 17034,
                "Exterminations": 786,
                "Time": "2022-05-08T20:38:02.435Z"
            },
            {
                "Demolitions": 17454,
                "Exterminations": 812,
                "Time": "2022-05-13T17:34:34.843Z"
            },
            {
                "Demolitions": 17734,
                "Exterminations": 832,
                "Time": "2022-05-18T23:04:55.195Z"
            },
            {
                "Demolitions": 17861,
                "Exterminations": 838,
                "Time": "2022-05-22T23:50:57.459Z"
            },
            {
                "Demolitions": 18579,
                "Exterminations": 880,
                "Time": "2022-05-31T21:45:51.658Z"
            },
            {
                "Demolitions": 18920,
                "Exterminations": 901,
                "Time": "2022-06-05T19:40:29.011Z"
            },
            {
                "Demolitions": 19936,
                "Exterminations": 954,
                "Time": "2022-07-01T00:20:05.476Z"
            },
            {
                "Demolitions": 20011,
                "Exterminations": 955,
                "Time": "2022-07-05T21:28:25.777Z"
            },
            {
                "Demolitions": 20733,
                "Exterminations": 1000,
                "Time": "2022-07-13T21:36:32.552Z"
            },
            {
                "Demolitions": 21770,
                "Exterminations": 1041,
                "Time": "2022-07-30T21:21:19.261Z"
            },
            {
                "Demolitions": 22349,
                "Exterminations": 1080,
                "Time": "2022-08-07T23:38:55.166Z"
            },
            {
                "Demolitions": 22992,
                "Exterminations": 1117,
                "Time": "2022-08-15T23:23:19.476Z"
            },
            {
                "Demolitions": 24000,
                "Exterminations": 1167,
                "Time": "2022-09-11T21:52:30.893Z"
            },
            {
                "Demolitions": 24375,
                "Exterminations": 1188,
                "Time": "2022-09-26T19:25:10.890Z"
            },
            {
                "Demolitions": 24425,
                "Exterminations": 1191,
                "Time": "2022-09-26T21:48:30.069Z"
            },
            {
                "Demolitions": 24989,
                "Exterminations": 1213,
                "Time": "2022-10-16T22:19:35.432Z"
            },
            {
                "Demolitions": 25007,
                "Exterminations": 1214,
                "Time": "2022-10-16T22:41:33.524Z"
            },
            {
                "Demolitions": 25576,
                "Exterminations": 1251,
                "Time": "2022-10-24T20:56:09.513Z"
            },
            {
                "Demolitions": 25900,
                "Exterminations": 1272,
                "Time": "2022-10-26T23:33:25.591Z"
            },
            {
                "Demolitions": 26005,
                "Exterminations": 1278,
                "Time": "2022-10-28T20:50:16.940Z"
            },
            {
                "Demolitions": 26049,
                "Exterminations": 1282,
                "Time": "2022-10-28T23:06:50.686Z"
            },
            {
                "Demolitions": 29071,
                "Exterminations": 1487,
                "Time": "2022-12-27T18:18:01.722Z"
            },
            {
                "Demolitions": 30005,
                "Exterminations": 1563,
                "Time": "2023-01-04T14:35:39.480Z"
            },
            {
                "Demolitions": 30034,
                "Exterminations": 1566,
                "Time": "2023-01-04T14:36:28.686Z"
            },
            {
                "Demolitions": 31558,
                "Exterminations": 1679,
                "Time": "2023-01-28T18:29:52.138Z"
            }
        ],
        "Country": "Norway"
    },
    "581998775732535368": {
        "Name": "CommandoSND",
        "Demolitions": 12933,
        "Exterminations": 98,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 12933,
                "Exterminations": 98,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "173593184075513856": {
        "Name": "ChrisPTaco",
        "Demolitions": 3922,
        "Exterminations": 79,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 3922,
                "Exterminations": 79,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "614255464770961410": {
        "Name": "CORNPOP (Bad Dude)",
        "Demolitions": 25353,
        "Exterminations": 2510,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 25353,
                "Exterminations": 2510,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "508616687730556938": {
        "Name": "marcusferox",
        "Demolitions": 63563,
        "Exterminations": 2358,
        "LastUpdate": "2022-11-10T06:04:27.568Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 44131,
                "Exterminations": 1374,
                "Time": "2022-03-31T00:00:00.000Z"
            },
            {
                "Demolitions": 40322,
                "Exterminations": 1113,
                "Time": "2022-03-01T00:00:00.000Z"
            },
            {
                "Demolitions": 36394,
                "Exterminations": 878,
                "Time": "2022-01-31T00:00:00.000Z"
            },
            {
                "Demolitions": 32131,
                "Exterminations": 594,
                "Time": "2022-01-04T00:00:00.000Z"
            },
            {
                "Demolitions": 31417,
                "Exterminations": 569,
                "Time": "2021-12-27T00:00:00.000Z"
            },
            {
                "Demolitions": 29642,
                "Exterminations": 472,
                "Time": "2021-12-02T00:00:00.000Z"
            },
            {
                "Demolitions": 27100,
                "Exterminations": 340,
                "Time": "2021-11-03T00:00:00.000Z"
            },
            {
                "Demolitions": 24558,
                "Exterminations": 227,
                "Time": "2021-10-08T00:00:00.000Z"
            },
            {
                "Demolitions": 46882,
                "Exterminations": 1528,
                "Time": "2022-05-07T03:33:50.112Z"
            },
            {
                "Demolitions": 50021,
                "Exterminations": 1698,
                "Time": "2022-06-02T01:07:58.679Z"
            },
            {
                "Demolitions": 51223,
                "Exterminations": 1765,
                "Time": "2022-06-17T02:13:49.969Z"
            },
            {
                "Demolitions": 53739,
                "Exterminations": 1913,
                "Time": "2022-07-06T19:42:29.316Z"
            },
            {
                "Demolitions": 55071,
                "Exterminations": 1983,
                "Time": "2022-07-21T03:48:07.971Z"
            },
            {
                "Demolitions": 56313,
                "Exterminations": 2032,
                "Time": "2022-08-02T04:05:49.844Z"
            },
            {
                "Demolitions": 59794,
                "Exterminations": 2183,
                "Time": "2022-09-29T03:09:44.284Z"
            },
            {
                "Demolitions": 60806,
                "Exterminations": 2230,
                "Time": "2022-10-09T01:33:51.364Z"
            },
            {
                "Demolitions": 61709,
                "Exterminations": 2270,
                "Time": "2022-10-19T02:08:46.751Z"
            },
            {
                "Demolitions": 63563,
                "Exterminations": 2358,
                "Time": "2022-11-10T06:04:27.568Z"
            }
        ],
        "Country": "USA"
    },
    "481439340875087886": {
        "Name": "ChillCatDad",
        "Demolitions": 12704,
        "Exterminations": 41,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 12704,
                "Exterminations": 41,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "273504233213394945": {
        "Name": "Castino",
        "Demolitions": 20144,
        "Exterminations": 1105,
        "LastUpdate": "2022-07-11T16:17:00.318Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 17577,
                "Exterminations": 894,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 18715,
                "Exterminations": 985,
                "Time": "2022-04-14T21:12:57.503Z"
            },
            {
                "Demolitions": 20144,
                "Exterminations": 1105,
                "Time": "2022-07-11T16:17:00.318Z"
            }
        ]
    },
    "895063058148372550": {
        "Name": "Dingus",
        "Demolitions": 10254,
        "Exterminations": 242,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 10254,
                "Exterminations": 242,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "125019739041955840": {
        "Name": "contrice",
        "Demolitions": 32484,
        "Exterminations": 279,
        "LastUpdate": "2022-06-12T10:02:31.253Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 25703,
                "Exterminations": 239,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 32484,
                "Exterminations": 279,
                "Time": "2022-06-12T10:02:31.253Z"
            }
        ]
    },
    "368947795417104393": {
        "Name": "M1ke",
        "Demolitions": 13667,
        "Exterminations": 122,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 13667,
                "Exterminations": 122,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "291031707996651532": {
        "Name": "maecrox",
        "Demolitions": 16219,
        "Exterminations": 686,
        "LastUpdate": "2022-12-21T05:10:18.379Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 10856,
                "Exterminations": 348,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 11660,
                "Exterminations": 411,
                "Time": "2022-04-04T09:31:41.141Z"
            },
            {
                "Demolitions": 16219,
                "Exterminations": 686,
                "Time": "2022-12-21T05:10:18.379Z"
            }
        ],
        "Country": "AUS"
    },
    "117018349753335816": {
        "Name": "Nape",
        "Demolitions": 2280,
        "Exterminations": 10,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 2280,
                "Exterminations": 10,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "586679963051229228": {
        "Name": "BigDaddyBot",
        "Demolitions": 59025,
        "Exterminations": 3642,
        "LastUpdate": "2022-12-05T22:26:30.027Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 44060,
                "Exterminations": 2937,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 56866,
                "Exterminations": 3494,
                "Time": "2022-11-18T19:49:56.112Z"
            },
            {
                "Demolitions": 58011,
                "Exterminations": 3574,
                "Time": "2022-11-28T01:55:03.091Z"
            },
            {
                "Demolitions": 59025,
                "Exterminations": 3642,
                "Time": "2022-12-05T22:26:30.027Z"
            }
        ]
    },
    "262313192024178689": {
        "Name": "mrjodicow",
        "Demolitions": 15916,
        "Exterminations": 512,
        "LastUpdate": "2022-12-23T02:57:22.875Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 10372,
                "Exterminations": 397,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 11201,
                "Exterminations": 422,
                "Time": "2022-04-01T00:43:04.370Z"
            },
            {
                "Demolitions": 11439,
                "Exterminations": 427,
                "Time": "2022-07-04T23:26:35.911Z"
            },
            {
                "Demolitions": 11931,
                "Exterminations": 438,
                "Time": "2022-07-24T19:51:34.303Z"
            },
            {
                "Demolitions": 12285,
                "Exterminations": 485,
                "Time": "2022-08-06T02:50:58.334Z"
            },
            {
                "Demolitions": 12911,
                "Exterminations": 453,
                "Time": "2022-08-24T19:41:56.217Z"
            },
            {
                "Demolitions": 15916,
                "Exterminations": 512,
                "Time": "2022-12-23T02:57:22.875Z"
            }
        ],
        "Country": "USA"
    },
    "240261783112122370": {
        "Name": "Myrtle.mp4",
        "Demolitions": 4645,
        "Exterminations": 4,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 4645,
                "Exterminations": 4,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "192007340927614976": {
        "Name": "QS3V3N",
        "Demolitions": 11440,
        "Exterminations": 487,
        "LastUpdate": "2022-09-30T21:22:57.858Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 7090,
                "Exterminations": 203,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 9294,
                "Exterminations": 318,
                "Time": "2022-07-29T07:22:14.037Z"
            },
            {
                "Demolitions": 10000,
                "Exterminations": 366,
                "Time": "2022-09-08T21:36:39.191Z"
            },
            {
                "Demolitions": 10063,
                "Exterminations": 372,
                "Time": "2022-09-09T02:08:42.298Z"
            },
            {
                "Demolitions": 10214,
                "Exterminations": 381,
                "Time": "2022-09-13T04:22:52.088Z"
            },
            {
                "Demolitions": 10542,
                "Exterminations": 406,
                "Time": "2022-09-17T19:14:19.986Z"
            },
            {
                "Demolitions": 10639,
                "Exterminations": 408,
                "Time": "2022-09-22T13:16:24.879Z"
            },
            {
                "Demolitions": 11440,
                "Exterminations": 487,
                "Time": "2022-09-30T21:22:57.858Z"
            }
        ]
    },
    "252707028391297025": {
        "Name": "420BLAZEITMLG4U",
        "Demolitions": 35030,
        "Exterminations": 2884,
        "LastUpdate": "2023-01-27T21:14:04.354Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 29113,
                "Exterminations": 2333,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 30000,
                "Exterminations": 2414,
                "Time": "2022-05-21T15:23:28.446Z"
            },
            {
                "Demolitions": 30946,
                "Exterminations": 2503,
                "Time": "2022-10-12T10:10:04.977Z"
            },
            {
                "Demolitions": 32291,
                "Exterminations": 2634,
                "Time": "2022-11-15T13:13:46.807Z"
            },
            {
                "Demolitions": 33157,
                "Exterminations": 2720,
                "Time": "2022-11-26T10:12:18.848Z"
            },
            {
                "Demolitions": 34691,
                "Exterminations": 2855,
                "Time": "2023-01-14T07:17:37.215Z"
            },
            {
                "Demolitions": 35030,
                "Exterminations": 2884,
                "Time": "2023-01-27T21:14:04.354Z"
            }
        ],
        "Country": "AUS"
    },
    "352477435922481152": {
        "Name": "Lebag",
        "Demolitions": 4141,
        "Exterminations": 76,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 4141,
                "Exterminations": 76,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "812471283030818857": {
        "Name": "Redcardagain",
        "Demolitions": 10092,
        "Exterminations": 32,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 10092,
                "Exterminations": 32,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "120550617478463490": {
        "Name": "sodawars",
        "Demolitions": 35811,
        "Exterminations": 1443,
        "LastUpdate": "2022-11-10T03:04:35.448Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 30315,
                "Exterminations": 1131,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 31825,
                "Exterminations": 1215,
                "Time": "2022-07-28T22:50:13.208Z"
            },
            {
                "Demolitions": 32069,
                "Exterminations": 1232,
                "Time": "2022-08-02T01:38:30.431Z"
            },
            {
                "Demolitions": 33316,
                "Exterminations": 1311,
                "Time": "2022-08-31T01:19:04.217Z"
            },
            {
                "Demolitions": 35811,
                "Exterminations": 1443,
                "Time": "2022-11-10T03:04:35.448Z"
            }
        ]
    },
    "221979252235567114": {
        "Name": "Nappur_",
        "Demolitions": 3122,
        "Exterminations": 19,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 3122,
                "Exterminations": 19,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "345166571720802306": {
        "Name": "Gramatiks",
        "Demolitions": 6107,
        "Exterminations": 41,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 6107,
                "Exterminations": 41,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "658072853580873728": {
        "Name": "FreezerBurn_33_",
        "Demolitions": 32500,
        "Exterminations": 3000,
        "LastUpdate": "2023-01-13T21:08:05.422Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 15001,
                "Exterminations": 1294,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 17732,
                "Exterminations": 1566,
                "Time": "2022-04-01T19:56:15.919Z"
            },
            {
                "Demolitions": 18010,
                "Exterminations": 1600,
                "Time": "2022-04-03T16:13:28.667Z"
            },
            {
                "Demolitions": 20000,
                "Exterminations": 1809,
                "Time": "2022-05-01T18:38:21.278Z"
            },
            {
                "Demolitions": 22286,
                "Exterminations": 2000,
                "Time": "2022-07-27T01:59:30.099Z"
            },
            {
                "Demolitions": 23495,
                "Exterminations": 2111,
                "Time": "2022-08-17T15:36:18.612Z"
            },
            {
                "Demolitions": 24647,
                "Exterminations": 2250,
                "Time": "2022-08-20T19:49:00.270Z"
            },
            {
                "Demolitions": 30000,
                "Exterminations": 2767,
                "Time": "2022-11-07T15:38:59.563Z"
            },
            {
                "Demolitions": 32500,
                "Exterminations": 3000,
                "Time": "2023-01-13T21:08:05.422Z"
            }
        ],
        "Country": "USA"
    },
    "840286908369731640": {
        "Name": "Futturmann",
        "Demolitions": 89010,
        "Exterminations": 6450,
        "LastUpdate": "2023-01-29T15:42:24.121Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 40018,
                "Exterminations": 2838,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 47519,
                "Exterminations": 3439,
                "Time": "2022-03-31T16:27:10.879Z"
            },
            {
                "Demolitions": 50033,
                "Exterminations": 3629,
                "Time": "2022-04-16T22:32:58.108Z"
            },
            {
                "Demolitions": 51711,
                "Exterminations": 3760,
                "Time": "2022-05-01T16:34:15.705Z"
            },
            {
                "Demolitions": 53620,
                "Exterminations": 3892,
                "Time": "2022-05-15T22:05:03.700Z"
            },
            {
                "Demolitions": 56094,
                "Exterminations": 4094,
                "Time": "2022-05-29T22:53:00.091Z"
            },
            {
                "Demolitions": 58514,
                "Exterminations": 4281,
                "Time": "2022-06-17T22:24:12.477Z"
            },
            {
                "Demolitions": 60000,
                "Exterminations": 4381,
                "Time": "2022-06-28T23:05:15.741Z"
            },
            {
                "Demolitions": 62108,
                "Exterminations": 4508,
                "Time": "2022-07-16T23:29:34.403Z"
            },
            {
                "Demolitions": 64166,
                "Exterminations": 4653,
                "Time": "2022-07-31T21:49:42.801Z"
            },
            {
                "Demolitions": 65830,
                "Exterminations": 4767,
                "Time": "2022-08-16T21:20:46.822Z"
            },
            {
                "Demolitions": 66666,
                "Exterminations": 4826,
                "Time": "2022-08-24T19:40:40.671Z"
            },
            {
                "Demolitions": 69032,
                "Exterminations": 5003,
                "Time": "2022-09-06T18:55:24.559Z"
            },
            {
                "Demolitions": 71236,
                "Exterminations": 5154,
                "Time": "2022-09-19T23:02:00.282Z"
            },
            {
                "Demolitions": 74756,
                "Exterminations": 5406,
                "Time": "2022-10-14T23:11:37.007Z"
            },
            {
                "Demolitions": 77296,
                "Exterminations": 5590,
                "Time": "2022-10-30T00:57:20.955Z"
            },
            {
                "Demolitions": 80003,
                "Exterminations": 5810,
                "Time": "2022-11-19T01:53:28.667Z"
            },
            {
                "Demolitions": 84050,
                "Exterminations": 6100,
                "Time": "2022-12-21T23:28:26.514Z"
            },
            {
                "Demolitions": 85524,
                "Exterminations": 6209,
                "Time": "2023-01-03T00:28:15.395Z"
            },
            {
                "Demolitions": 87151,
                "Exterminations": 6327,
                "Time": "2023-01-14T22:54:26.084Z"
            },
            {
                "Demolitions": 89010,
                "Exterminations": 6450,
                "Time": "2023-01-29T15:42:24.121Z"
            }
        ],
        "Country": "ESP"
    },
    "705157369797017800": {
        "Name": "smartiepantzz",
        "Demolitions": 2296,
        "Exterminations": 133,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 2296,
                "Exterminations": 133,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "638828867410198558": {
        "Name": "RapidRecurve",
        "Demolitions": 10014,
        "Exterminations": 360,
        "LastUpdate": "2022-12-07T17:51:14.759Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 5175,
                "Exterminations": 131,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 5456,
                "Exterminations": 150,
                "Time": "2022-03-31T20:12:30.666Z"
            },
            {
                "Demolitions": 6000,
                "Exterminations": 177,
                "Time": "2022-04-13T19:07:24.577Z"
            },
            {
                "Demolitions": 6523,
                "Exterminations": 200,
                "Time": "2022-05-25T20:22:17.357Z"
            },
            {
                "Demolitions": 7013,
                "Exterminations": 213,
                "Time": "2022-07-07T16:14:08.797Z"
            },
            {
                "Demolitions": 8131,
                "Exterminations": 258,
                "Time": "2022-10-04T20:28:28.984Z"
            },
            {
                "Demolitions": 9000,
                "Exterminations": 290,
                "Time": "2022-11-12T18:00:32.326Z"
            },
            {
                "Demolitions": 10014,
                "Exterminations": 360,
                "Time": "2022-12-07T17:51:14.759Z"
            }
        ]
    },
    "365138118220840961": {
        "Name": "Hits.vle",
        "Demolitions": 9884,
        "Exterminations": 401,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 9884,
                "Exterminations": 401,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "253629878140796949": {
        "Name": "Sonar84",
        "Demolitions": 11311,
        "Exterminations": 9,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 11311,
                "Exterminations": 9,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "209024382692098048": {
        "Name": "BlueCosmos",
        "Demolitions": 4816,
        "Exterminations": 22,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 4816,
                "Exterminations": 22,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "743279342255079466": {
        "Name": "Jek",
        "Demolitions": 6040,
        "Exterminations": 77,
        "LastUpdate": "2022-12-02T03:14:15.432Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 2012,
                "Exterminations": 25,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 6040,
                "Exterminations": 77,
                "Time": "2022-12-02T03:14:15.432Z"
            }
        ]
    },
    "706332585210544139": {
        "Name": "Pengin",
        "Demolitions": 10000,
        "Exterminations": 353,
        "LastUpdate": "2022-05-11T22:26:17.235Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 7679,
                "Exterminations": 296,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 8711,
                "Exterminations": 329,
                "Time": "2022-03-31T19:56:34.767Z"
            },
            {
                "Demolitions": 9425,
                "Exterminations": 337,
                "Time": "2022-04-26T21:05:06.000Z"
            },
            {
                "Demolitions": 9746,
                "Exterminations": 341,
                "Time": "2022-05-07T18:59:30.771Z"
            },
            {
                "Demolitions": 10000,
                "Exterminations": 353,
                "Time": "2022-05-11T22:26:17.235Z"
            }
        ]
    },
    "606625749759426567": {
        "Name": "marble ._.",
        "Demolitions": 6546,
        "Exterminations": 143,
        "LastUpdate": "2022-05-26T16:35:24.822Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 4400,
                "Exterminations": 124,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 4563,
                "Exterminations": 128,
                "Time": "2022-04-01T02:16:27.658Z"
            },
            {
                "Demolitions": 4688,
                "Exterminations": 128,
                "Time": "2022-04-07T04:36:27.302Z"
            },
            {
                "Demolitions": 4763,
                "Exterminations": 130,
                "Time": "2022-04-17T03:50:57.163Z"
            },
            {
                "Demolitions": 4983,
                "Exterminations": 130,
                "Time": "2022-05-06T02:13:26.781Z"
            },
            {
                "Demolitions": 5087,
                "Exterminations": 130,
                "Time": "2022-05-17T05:16:39.410Z"
            },
            {
                "Demolitions": 6546,
                "Exterminations": 143,
                "Time": "2022-05-26T16:35:24.822Z"
            }
        ],
        "Country": "USA"
    },
    "716427926027108363": {
        "Name": "Hinata._Hy",
        "Demolitions": 3907,
        "Exterminations": 132,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 3907,
                "Exterminations": 132,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "756366010960838816": {
        "Name": "Unlivedmetal.ttv",
        "Demolitions": 3031,
        "Exterminations": 155,
        "LastUpdate": "2023-01-26T06:17:50.473Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 1977,
                "Exterminations": 101,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 2697,
                "Exterminations": 146,
                "Time": "2022-07-29T05:26:32.317Z"
            },
            {
                "Demolitions": 3031,
                "Exterminations": 155,
                "Time": "2023-01-26T06:17:50.473Z"
            }
        ]
    },
    "629754543214952458": {
        "Name": "Demo_4_life",
        "Demolitions": 34767,
        "Exterminations": 2817,
        "LastUpdate": "2023-02-02T18:17:50.248Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 25342,
                "Exterminations": 2069,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 25735,
                "Exterminations": 2097,
                "Time": "2022-03-31T22:42:42.085Z"
            },
            {
                "Demolitions": 25786,
                "Exterminations": 2101,
                "Time": "2022-04-01T19:42:19.539Z"
            },
            {
                "Demolitions": 25882,
                "Exterminations": 2114,
                "Time": "2022-04-01T22:57:03.111Z"
            },
            {
                "Demolitions": 25910,
                "Exterminations": 2115,
                "Time": "2022-04-02T20:18:24.393Z"
            },
            {
                "Demolitions": 26009,
                "Exterminations": 2122,
                "Time": "2022-04-04T22:15:44.694Z"
            },
            {
                "Demolitions": 26233,
                "Exterminations": 2143,
                "Time": "2022-04-09T00:01:19.370Z"
            },
            {
                "Demolitions": 26553,
                "Exterminations": 2162,
                "Time": "2022-04-13T19:24:40.472Z"
            },
            {
                "Demolitions": 26609,
                "Exterminations": 2165,
                "Time": "2022-04-14T01:15:50.079Z"
            },
            {
                "Demolitions": 26916,
                "Exterminations": 2183,
                "Time": "2022-04-16T18:18:51.054Z"
            },
            {
                "Demolitions": 26999,
                "Exterminations": 2187,
                "Time": "2022-04-18T18:51:16.359Z"
            },
            {
                "Demolitions": 27404,
                "Exterminations": 2226,
                "Time": "2022-04-24T11:10:22.174Z"
            },
            {
                "Demolitions": 27635,
                "Exterminations": 2240,
                "Time": "2022-05-01T01:35:08.196Z"
            },
            {
                "Demolitions": 28022,
                "Exterminations": 2263,
                "Time": "2022-05-12T13:54:04.820Z"
            },
            {
                "Demolitions": 28345,
                "Exterminations": 2282,
                "Time": "2022-05-23T18:27:47.567Z"
            },
            {
                "Demolitions": 28527,
                "Exterminations": 2301,
                "Time": "2022-06-05T10:44:03.053Z"
            },
            {
                "Demolitions": 28740,
                "Exterminations": 2314,
                "Time": "2022-06-07T19:58:52.712Z"
            },
            {
                "Demolitions": 28854,
                "Exterminations": 2321,
                "Time": "2022-06-09T12:03:24.835Z"
            },
            {
                "Demolitions": 29110,
                "Exterminations": 2343,
                "Time": "2022-06-11T11:22:12.377Z"
            },
            {
                "Demolitions": 29244,
                "Exterminations": 2357,
                "Time": "2022-06-13T22:41:16.147Z"
            },
            {
                "Demolitions": 29466,
                "Exterminations": 2372,
                "Time": "2022-07-01T11:47:22.388Z"
            },
            {
                "Demolitions": 29661,
                "Exterminations": 2392,
                "Time": "2022-07-05T08:10:08.331Z"
            },
            {
                "Demolitions": 29831,
                "Exterminations": 2410,
                "Time": "2022-07-06T20:54:28.498Z"
            },
            {
                "Demolitions": 30000,
                "Exterminations": 2427,
                "Time": "2022-07-07T14:14:44.644Z"
            },
            {
                "Demolitions": 30107,
                "Exterminations": 2437,
                "Time": "2022-07-10T12:24:52.512Z"
            },
            {
                "Demolitions": 30534,
                "Exterminations": 2464,
                "Time": "2022-07-15T18:24:03.783Z"
            },
            {
                "Demolitions": 30852,
                "Exterminations": 2487,
                "Time": "2022-08-06T04:31:56.088Z"
            },
            {
                "Demolitions": 30999,
                "Exterminations": 2502,
                "Time": "2022-08-15T11:11:57.964Z"
            },
            {
                "Demolitions": 31245,
                "Exterminations": 2519,
                "Time": "2022-09-06T14:55:13.480Z"
            },
            {
                "Demolitions": 31431,
                "Exterminations": 2532,
                "Time": "2022-09-22T12:16:47.428Z"
            },
            {
                "Demolitions": 31565,
                "Exterminations": 2543,
                "Time": "2022-09-29T19:55:38.067Z"
            },
            {
                "Demolitions": 31694,
                "Exterminations": 2555,
                "Time": "2022-10-09T17:18:08.693Z"
            },
            {
                "Demolitions": 31918,
                "Exterminations": 2578,
                "Time": "2022-10-15T16:18:47.025Z"
            },
            {
                "Demolitions": 32008,
                "Exterminations": 2586,
                "Time": "2022-10-17T19:51:06.612Z"
            },
            {
                "Demolitions": 32079,
                "Exterminations": 2592,
                "Time": "2022-10-19T13:50:04.721Z"
            },
            {
                "Demolitions": 32629,
                "Exterminations": 2649,
                "Time": "2022-10-25T19:19:23.742Z"
            },
            {
                "Demolitions": 32696,
                "Exterminations": 2655,
                "Time": "2022-10-26T18:38:49.994Z"
            },
            {
                "Demolitions": 33015,
                "Exterminations": 2683,
                "Time": "2022-10-29T19:43:56.583Z"
            },
            {
                "Demolitions": 33337,
                "Exterminations": 2709,
                "Time": "2022-11-27T21:35:10.931Z"
            },
            {
                "Demolitions": 33796,
                "Exterminations": 2746,
                "Time": "2022-12-24T13:36:46.748Z"
            },
            {
                "Demolitions": 34067,
                "Exterminations": 2768,
                "Time": "2023-01-11T13:25:47.879Z"
            },
            {
                "Demolitions": 34158,
                "Exterminations": 2775,
                "Time": "2023-01-18T19:38:49.518Z"
            },
            {
                "Demolitions": 34767,
                "Exterminations": 2817,
                "Time": "2023-02-02T18:17:50.248Z"
            }
        ],
        "Country": "Saudi Arabia"
    },
    "503033043607486464": {
        "Name": "pawn",
        "Demolitions": 20005,
        "Exterminations": 23,
        "LastUpdate": "2022-10-16T02:27:49.264Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 14864,
                "Exterminations": 19,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 17907,
                "Exterminations": 19,
                "Time": "2022-07-18T22:37:06.956Z"
            },
            {
                "Demolitions": 18358,
                "Exterminations": 19,
                "Time": "2022-08-12T06:30:30.098Z"
            },
            {
                "Demolitions": 20005,
                "Exterminations": 23,
                "Time": "2022-10-16T02:27:49.264Z"
            }
        ]
    },
    "900115016458596412": {
        "Name": "Output-HI",
        "Demolitions": 33105,
        "Exterminations": 738,
        "LastUpdate": "2022-11-22T02:37:17.298Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 24957,
                "Exterminations": 528,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 33105,
                "Exterminations": 738,
                "Time": "2022-11-22T02:37:17.298Z"
            }
        ]
    },
    "145612895609159680": {
        "Name": "goatdev",
        "Demolitions": 20648,
        "Exterminations": 508,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 20648,
                "Exterminations": 508,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "674729308224356377": {
        "Name": "Tohn Janner",
        "Demolitions": 35091,
        "Exterminations": 2133,
        "LastUpdate": "2022-12-30T09:58:02.656Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 12002,
                "Exterminations": 590,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 14129,
                "Exterminations": 758,
                "Time": "2022-04-02T05:26:17.467Z"
            },
            {
                "Demolitions": 27944,
                "Exterminations": 1091,
                "Time": "2022-04-26T10:38:35.301Z"
            },
            {
                "Demolitions": 15611,
                "Exterminations": 871,
                "Time": "2022-04-26T10:39:30.554Z"
            },
            {
                "Demolitions": 16161,
                "Exterminations": 909,
                "Time": "2022-05-03T13:22:35.032Z"
            },
            {
                "Demolitions": 16480,
                "Exterminations": 932,
                "Time": "2022-05-10T05:56:17.108Z"
            },
            {
                "Demolitions": 16622,
                "Exterminations": 947,
                "Time": "2022-05-10T11:45:22.441Z"
            },
            {
                "Demolitions": 16730,
                "Exterminations": 957,
                "Time": "2022-05-12T13:03:48.621Z"
            },
            {
                "Demolitions": 16887,
                "Exterminations": 975,
                "Time": "2022-05-13T09:42:36.428Z"
            },
            {
                "Demolitions": 17028,
                "Exterminations": 990,
                "Time": "2022-05-13T15:01:02.129Z"
            },
            {
                "Demolitions": 17098,
                "Exterminations": 999,
                "Time": "2022-05-14T01:33:22.063Z"
            },
            {
                "Demolitions": 17107,
                "Exterminations": 1000,
                "Time": "2022-05-14T01:43:10.554Z"
            },
            {
                "Demolitions": 17636,
                "Exterminations": 1039,
                "Time": "2022-05-20T03:52:16.911Z"
            },
            {
                "Demolitions": 17990,
                "Exterminations": 1066,
                "Time": "2022-05-22T21:06:27.258Z"
            },
            {
                "Demolitions": 18051,
                "Exterminations": 1069,
                "Time": "2022-05-23T09:46:00.321Z"
            },
            {
                "Demolitions": 18299,
                "Exterminations": 1086,
                "Time": "2022-05-25T23:45:37.508Z"
            },
            {
                "Demolitions": 18575,
                "Exterminations": 1102,
                "Time": "2022-05-31T06:35:55.303Z"
            },
            {
                "Demolitions": 18873,
                "Exterminations": 1119,
                "Time": "2022-06-02T03:48:26.853Z"
            },
            {
                "Demolitions": 19000,
                "Exterminations": 1129,
                "Time": "2022-06-02T11:35:06.956Z"
            },
            {
                "Demolitions": 19273,
                "Exterminations": 1146,
                "Time": "2022-06-06T00:01:57.048Z"
            },
            {
                "Demolitions": 19604,
                "Exterminations": 1177,
                "Time": "2022-06-11T07:25:53.294Z"
            },
            {
                "Demolitions": 19867,
                "Exterminations": 1195,
                "Time": "2022-06-15T00:10:38.379Z"
            },
            {
                "Demolitions": 20006,
                "Exterminations": 1209,
                "Time": "2022-06-15T02:26:54.679Z"
            },
            {
                "Demolitions": 20251,
                "Exterminations": 1223,
                "Time": "2022-06-24T06:19:50.627Z"
            },
            {
                "Demolitions": 20489,
                "Exterminations": 1241,
                "Time": "2022-06-27T10:14:12.815Z"
            },
            {
                "Demolitions": 21012,
                "Exterminations": 1279,
                "Time": "2022-07-06T10:12:45.402Z"
            },
            {
                "Demolitions": 21508,
                "Exterminations": 1323,
                "Time": "2022-07-09T01:17:33.886Z"
            },
            {
                "Demolitions": 21728,
                "Exterminations": 1342,
                "Time": "2022-07-10T01:30:19.495Z"
            },
            {
                "Demolitions": 22002,
                "Exterminations": 1363,
                "Time": "2022-07-14T11:13:00.350Z"
            },
            {
                "Demolitions": 22502,
                "Exterminations": 1401,
                "Time": "2022-07-22T06:46:05.194Z"
            },
            {
                "Demolitions": 23000,
                "Exterminations": 1436,
                "Time": "2022-07-29T07:52:56.859Z"
            },
            {
                "Demolitions": 23500,
                "Exterminations": 1475,
                "Time": "2022-08-05T11:19:46.030Z"
            },
            {
                "Demolitions": 23875,
                "Exterminations": 1504,
                "Time": "2022-08-09T09:43:20.529Z"
            },
            {
                "Demolitions": 24005,
                "Exterminations": 1512,
                "Time": "2022-08-12T10:46:27.307Z"
            },
            {
                "Demolitions": 24175,
                "Exterminations": 1523,
                "Time": "2022-08-15T08:45:15.215Z"
            },
            {
                "Demolitions": 24223,
                "Exterminations": 1525,
                "Time": "2022-08-15T12:38:07.577Z"
            },
            {
                "Demolitions": 24375,
                "Exterminations": 1541,
                "Time": "2022-08-16T10:44:18.530Z"
            },
            {
                "Demolitions": 24637,
                "Exterminations": 1559,
                "Time": "2022-08-17T13:45:37.041Z"
            },
            {
                "Demolitions": 24963,
                "Exterminations": 1577,
                "Time": "2022-08-21T01:34:19.801Z"
            },
            {
                "Demolitions": 25117,
                "Exterminations": 1587,
                "Time": "2022-08-23T04:53:15.010Z"
            },
            {
                "Demolitions": 25472,
                "Exterminations": 1607,
                "Time": "2022-08-27T01:52:40.255Z"
            },
            {
                "Demolitions": 25694,
                "Exterminations": 1617,
                "Time": "2022-08-31T05:37:26.706Z"
            },
            {
                "Demolitions": 26001,
                "Exterminations": 1634,
                "Time": "2022-09-05T06:13:47.336Z"
            },
            {
                "Demolitions": 26520,
                "Exterminations": 1664,
                "Time": "2022-09-09T22:48:07.681Z"
            },
            {
                "Demolitions": 27005,
                "Exterminations": 1694,
                "Time": "2022-09-12T11:24:31.885Z"
            },
            {
                "Demolitions": 28000,
                "Exterminations": 1775,
                "Time": "2022-09-18T02:49:48.916Z"
            },
            {
                "Demolitions": 28555,
                "Exterminations": 1803,
                "Time": "2022-09-23T01:47:03.358Z"
            },
            {
                "Demolitions": 29002,
                "Exterminations": 1833,
                "Time": "2022-09-26T02:35:03.004Z"
            },
            {
                "Demolitions": 29568,
                "Exterminations": 1872,
                "Time": "2022-09-29T08:20:51.465Z"
            },
            {
                "Demolitions": 29999,
                "Exterminations": 1901,
                "Time": "2022-10-07T09:45:03.171Z"
            },
            {
                "Demolitions": 30014,
                "Exterminations": 1902,
                "Time": "2022-10-07T11:29:09.462Z"
            },
            {
                "Demolitions": 31014,
                "Exterminations": 1960,
                "Time": "2022-10-17T10:44:53.435Z"
            },
            {
                "Demolitions": 31721,
                "Exterminations": 2000,
                "Time": "2022-10-30T05:00:24.170Z"
            },
            {
                "Demolitions": 32788,
                "Exterminations": 2048,
                "Time": "2022-11-12T23:40:54.828Z"
            },
            {
                "Demolitions": 33365,
                "Exterminations": 2067,
                "Time": "2022-11-18T23:31:32.009Z"
            },
            {
                "Demolitions": 34132,
                "Exterminations": 2097,
                "Time": "2022-12-07T09:23:42.286Z"
            },
            {
                "Demolitions": 35091,
                "Exterminations": 2133,
                "Time": "2022-12-30T09:58:02.656Z"
            }
        ],
        "Country": "AUS"
    },
    "336042738434834433": {
        "Name": "Untamed",
        "Demolitions": 10053,
        "Exterminations": 147,
        "LastUpdate": "2022-07-30T14:02:48.535Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 7806,
                "Exterminations": 109,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 8571,
                "Exterminations": 133,
                "Time": "2022-04-01T23:45:59.843Z"
            },
            {
                "Demolitions": 10053,
                "Exterminations": 147,
                "Time": "2022-07-30T14:02:48.535Z"
            }
        ],
        "Country": "USA"
    },
    "740984392301674597": {
        "Name": "owzusa",
        "Demolitions": 30002,
        "Exterminations": 751,
        "LastUpdate": "2022-12-22T02:15:39.268Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 17451,
                "Exterminations": 249,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 19535,
                "Exterminations": 299,
                "Time": "2022-05-27T23:38:21.789Z"
            },
            {
                "Demolitions": 20055,
                "Exterminations": 325,
                "Time": "2022-06-06T01:43:58.500Z"
            },
            {
                "Demolitions": 20055,
                "Exterminations": 325,
                "Time": "2022-06-06T01:45:55.170Z"
            },
            {
                "Demolitions": 20459,
                "Exterminations": 347,
                "Time": "2022-06-12T04:15:41.420Z"
            },
            {
                "Demolitions": 21141,
                "Exterminations": 388,
                "Time": "2022-06-17T02:46:56.984Z"
            },
            {
                "Demolitions": 22007,
                "Exterminations": 439,
                "Time": "2022-06-25T02:14:13.507Z"
            },
            {
                "Demolitions": 23601,
                "Exterminations": 501,
                "Time": "2022-07-22T05:47:44.055Z"
            },
            {
                "Demolitions": 24092,
                "Exterminations": 510,
                "Time": "2022-08-07T05:17:58.959Z"
            },
            {
                "Demolitions": 24363,
                "Exterminations": 518,
                "Time": "2022-08-12T00:16:09.027Z"
            },
            {
                "Demolitions": 24363,
                "Exterminations": 518,
                "Time": "2022-08-12T00:16:40.459Z"
            },
            {
                "Demolitions": 25010,
                "Exterminations": 545,
                "Time": "2022-08-23T04:09:32.996Z"
            },
            {
                "Demolitions": 25663,
                "Exterminations": 570,
                "Time": "2022-09-09T16:28:32.327Z"
            },
            {
                "Demolitions": 26315,
                "Exterminations": 580,
                "Time": "2022-09-28T04:44:56.781Z"
            },
            {
                "Demolitions": 26657,
                "Exterminations": 608,
                "Time": "2022-10-04T01:52:11.121Z"
            },
            {
                "Demolitions": 27067,
                "Exterminations": 626,
                "Time": "2022-10-11T03:57:33.404Z"
            },
            {
                "Demolitions": 28093,
                "Exterminations": 674,
                "Time": "2022-11-09T01:12:01.335Z"
            },
            {
                "Demolitions": 29280,
                "Exterminations": 718,
                "Time": "2022-12-02T06:42:19.474Z"
            },
            {
                "Demolitions": 29750,
                "Exterminations": 739,
                "Time": "2022-12-15T18:08:25.748Z"
            },
            {
                "Demolitions": 30002,
                "Exterminations": 751,
                "Time": "2022-12-22T02:15:39.268Z"
            }
        ]
    },
    "532003921124917270": {
        "Name": "noteven5minutes",
        "Demolitions": 8027,
        "Exterminations": 224,
        "LastUpdate": "2022-10-29T07:18:21.378Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 6056,
                "Exterminations": 164,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 6263,
                "Exterminations": 175,
                "Time": "2022-03-31T23:48:40.494Z"
            },
            {
                "Demolitions": 6264,
                "Exterminations": 175,
                "Time": "2022-04-01T18:30:23.696Z"
            },
            {
                "Demolitions": 6501,
                "Exterminations": 180,
                "Time": "2022-04-24T22:56:39.310Z"
            },
            {
                "Demolitions": 6856,
                "Exterminations": 185,
                "Time": "2022-06-16T15:52:02.071Z"
            },
            {
                "Demolitions": 8027,
                "Exterminations": 224,
                "Time": "2022-10-29T07:18:21.378Z"
            }
        ]
    },
    "81646446436159488": {
        "Name": "Bumpo The Clown",
        "Demolitions": 111111,
        "Exterminations": 8551,
        "LastUpdate": "2023-01-27T01:13:12.112Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 36412,
                "Exterminations": 1286,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 42592,
                "Exterminations": 1953,
                "Time": "2022-04-01T12:43:53.465Z"
            },
            {
                "Demolitions": 45020,
                "Exterminations": 2192,
                "Time": "2022-04-14T00:25:32.637Z"
            },
            {
                "Demolitions": 50000,
                "Exterminations": 2689,
                "Time": "2022-05-25T21:01:35.088Z"
            },
            {
                "Demolitions": 53118,
                "Exterminations": 3000,
                "Time": "2022-06-08T19:54:25.178Z"
            },
            {
                "Demolitions": 60009,
                "Exterminations": 3726,
                "Time": "2022-07-02T15:04:50.850Z"
            },
            {
                "Demolitions": 60009,
                "Exterminations": 3726,
                "Time": "2022-07-02T15:44:46.136Z"
            },
            {
                "Demolitions": 64000,
                "Exterminations": 4128,
                "Time": "2022-07-30T18:13:41.061Z"
            },
            {
                "Demolitions": 65027,
                "Exterminations": 4230,
                "Time": "2022-08-03T07:34:14.366Z"
            },
            {
                "Demolitions": 66666,
                "Exterminations": 4420,
                "Time": "2022-08-07T09:21:19.179Z"
            },
            {
                "Demolitions": 69420,
                "Exterminations": 4704,
                "Time": "2022-08-17T02:34:47.468Z"
            },
            {
                "Demolitions": 72475,
                "Exterminations": 5000,
                "Time": "2022-08-25T05:40:13.072Z"
            },
            {
                "Demolitions": 77777,
                "Exterminations": 5518,
                "Time": "2022-09-10T05:41:40.137Z"
            },
            {
                "Demolitions": 80065,
                "Exterminations": 5716,
                "Time": "2022-09-16T15:17:56.388Z"
            },
            {
                "Demolitions": 82034,
                "Exterminations": 5861,
                "Time": "2022-09-25T02:07:29.662Z"
            },
            {
                "Demolitions": 83190,
                "Exterminations": 5967,
                "Time": "2022-09-28T08:09:02.664Z"
            },
            {
                "Demolitions": 86090,
                "Exterminations": 6254,
                "Time": "2022-10-07T00:33:11.837Z"
            },
            {
                "Demolitions": 87308,
                "Exterminations": 6379,
                "Time": "2022-10-09T12:28:08.966Z"
            },
            {
                "Demolitions": 88888,
                "Exterminations": 6539,
                "Time": "2022-10-14T04:50:36.151Z"
            },
            {
                "Demolitions": 93455,
                "Exterminations": 6969,
                "Time": "2022-10-31T15:15:11.161Z"
            },
            {
                "Demolitions": 99000,
                "Exterminations": 7457,
                "Time": "2022-11-24T11:37:34.171Z"
            },
            {
                "Demolitions": 100000,
                "Exterminations": 7553,
                "Time": "2022-11-29T06:45:48.417Z"
            },
            {
                "Demolitions": 105132,
                "Exterminations": 8000,
                "Time": "2022-12-30T15:26:55.238Z"
            },
            {
                "Demolitions": 110011,
                "Exterminations": 8454,
                "Time": "2023-01-23T02:07:19.335Z"
            },
            {
                "Demolitions": 111111,
                "Exterminations": 8551,
                "Time": "2023-01-27T01:13:12.112Z"
            }
        ],
        "Country": "CAN"
    },
    "433720529887821824": {
        "Name": "Sennji",
        "Demolitions": 20000,
        "Exterminations": 1208,
        "LastUpdate": "2022-09-08T16:11:40.658Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 11623,
                "Exterminations": 471,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 14874,
                "Exterminations": 796,
                "Time": "2022-04-01T14:58:37.636Z"
            },
            {
                "Demolitions": 16300,
                "Exterminations": 913,
                "Time": "2022-04-14T16:30:09.492Z"
            },
            {
                "Demolitions": 17288,
                "Exterminations": 1000,
                "Time": "2022-05-24T14:08:11.842Z"
            },
            {
                "Demolitions": 17619,
                "Exterminations": 1024,
                "Time": "2022-06-15T23:58:16.024Z"
            },
            {
                "Demolitions": 18338,
                "Exterminations": 1079,
                "Time": "2022-07-04T23:38:32.785Z"
            },
            {
                "Demolitions": 18807,
                "Exterminations": 1112,
                "Time": "2022-07-30T12:30:04.304Z"
            },
            {
                "Demolitions": 19469,
                "Exterminations": 1163,
                "Time": "2022-08-28T21:17:52.044Z"
            },
            {
                "Demolitions": 19714,
                "Exterminations": 118,
                "Time": "2022-09-08T00:35:48.674Z"
            },
            {
                "Demolitions": 19714,
                "Exterminations": 1182,
                "Time": "2022-09-08T00:36:17.676Z"
            },
            {
                "Demolitions": 20000,
                "Exterminations": 1208,
                "Time": "2022-09-08T16:11:40.658Z"
            }
        ],
        "Country": "SUI"
    },
    "473802469059592212": {
        "Name": "GeeFreak",
        "Demolitions": 38353,
        "Exterminations": 707,
        "LastUpdate": "2022-07-31T01:55:51.294Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 35045,
                "Exterminations": 607,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 35920,
                "Exterminations": 638,
                "Time": "2022-04-03T02:49:51.601Z"
            },
            {
                "Demolitions": 37552,
                "Exterminations": 691,
                "Time": "2022-06-23T00:27:19.101Z"
            },
            {
                "Demolitions": 38353,
                "Exterminations": 707,
                "Time": "2022-07-31T01:55:51.294Z"
            }
        ],
        "Country": "New ðŸ‡³ðŸ‡¿ Zealand"
    },
    "383828024098947085": {
        "Name": "Robo",
        "Demolitions": 35000,
        "Exterminations": 256,
        "LastUpdate": "2022-11-27T06:46:26.688Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 26134,
                "Exterminations": 91,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 26623,
                "Exterminations": 91,
                "Time": "2022-04-05T06:28:24.060Z"
            },
            {
                "Demolitions": 27132,
                "Exterminations": 127,
                "Time": "2022-04-19T17:34:15.218Z"
            },
            {
                "Demolitions": 28137,
                "Exterminations": 131,
                "Time": "2022-05-09T23:26:03.527Z"
            },
            {
                "Demolitions": 28442,
                "Exterminations": 138,
                "Time": "2022-05-13T00:31:50.061Z"
            },
            {
                "Demolitions": 30001,
                "Exterminations": 153,
                "Time": "2022-05-27T22:31:31.075Z"
            },
            {
                "Demolitions": 30431,
                "Exterminations": 158,
                "Time": "2022-06-04T05:37:58.941Z"
            },
            {
                "Demolitions": 33500,
                "Exterminations": 133,
                "Time": "2022-07-30T18:15:10.757Z"
            },
            {
                "Demolitions": 35000,
                "Exterminations": 256,
                "Time": "2022-11-27T06:46:26.688Z"
            }
        ]
    },
    "514193644916441095": {
        "Name": "Lemonade",
        "Demolitions": 10375,
        "Exterminations": 53,
        "LastUpdate": "2022-04-02T00:06:55.248Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 9731,
                "Exterminations": 48,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 10375,
                "Exterminations": 53,
                "Time": "2022-04-02T00:06:55.248Z"
            }
        ],
        "Country": "USA"
    },
    "584856643661988007": {
        "Name": "EmuTheCat",
        "Demolitions": 1897,
        "Exterminations": 75,
        "LastUpdate": "2022-04-01T21:46:43.178Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 885,
                "Exterminations": 25,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 1897,
                "Exterminations": 75,
                "Time": "2022-04-01T21:46:43.178Z"
            }
        ]
    },
    "466967557103026187": {
        "Name": "Jackie Flash",
        "Demolitions": 5670,
        "Exterminations": 52,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 5670,
                "Exterminations": 52,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "291704259269885965": {
        "Name": "ImAscended",
        "Demolitions": 14922,
        "Exterminations": 31,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 14922,
                "Exterminations": 31,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "330038466668920842": {
        "Name": "Thrax",
        "Demolitions": 4863,
        "Exterminations": 39,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 4863,
                "Exterminations": 39,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "196699005139419136": {
        "Name": "plat tad",
        "Demolitions": 17500,
        "Exterminations": 466,
        "LastUpdate": "2022-12-25T20:50:55.992Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 10076,
                "Exterminations": 117,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 10236,
                "Exterminations": 117,
                "Time": "2022-04-01T18:08:53.926Z"
            },
            {
                "Demolitions": 10317,
                "Exterminations": 118,
                "Time": "2022-04-10T18:45:20.610Z"
            },
            {
                "Demolitions": 10668,
                "Exterminations": 119,
                "Time": "2022-05-01T16:21:19.662Z"
            },
            {
                "Demolitions": 11241,
                "Exterminations": 120,
                "Time": "2022-06-28T19:30:14.463Z"
            },
            {
                "Demolitions": 11577,
                "Exterminations": 121,
                "Time": "2022-07-24T20:14:55.178Z"
            },
            {
                "Demolitions": 12069,
                "Exterminations": 126,
                "Time": "2022-08-14T17:12:57.744Z"
            },
            {
                "Demolitions": 12228,
                "Exterminations": 126,
                "Time": "2022-08-29T11:05:04.038Z"
            },
            {
                "Demolitions": 12376,
                "Exterminations": 127,
                "Time": "2022-09-03T23:16:45.455Z"
            },
            {
                "Demolitions": 12905,
                "Exterminations": 131,
                "Time": "2022-10-11T19:26:21.142Z"
            },
            {
                "Demolitions": 13149,
                "Exterminations": 138,
                "Time": "2022-10-21T14:15:57.188Z"
            },
            {
                "Demolitions": 13234,
                "Exterminations": 141,
                "Time": "2022-10-21T18:06:09.028Z"
            },
            {
                "Demolitions": 13311,
                "Exterminations": 145,
                "Time": "2022-10-21T22:25:06.126Z"
            },
            {
                "Demolitions": 13600,
                "Exterminations": 163,
                "Time": "2022-10-22T19:02:13.736Z"
            },
            {
                "Demolitions": 13866,
                "Exterminations": 182,
                "Time": "2022-10-23T22:48:12.957Z"
            },
            {
                "Demolitions": 14175,
                "Exterminations": 203,
                "Time": "2022-10-27T19:28:01.835Z"
            },
            {
                "Demolitions": 14316,
                "Exterminations": 212,
                "Time": "2022-10-27T22:59:46.979Z"
            },
            {
                "Demolitions": 15852,
                "Exterminations": 321,
                "Time": "2022-12-11T21:19:57.532Z"
            },
            {
                "Demolitions": 16012,
                "Exterminations": 337,
                "Time": "2022-12-13T16:47:25.304Z"
            },
            {
                "Demolitions": 16314,
                "Exterminations": 366,
                "Time": "2022-12-13T20:37:35.742Z"
            },
            {
                "Demolitions": 16550,
                "Exterminations": 391,
                "Time": "2022-12-14T18:39:16.105Z"
            },
            {
                "Demolitions": 16602,
                "Exterminations": 398,
                "Time": "2022-12-18T12:24:36.892Z"
            },
            {
                "Demolitions": 16817,
                "Exterminations": 419,
                "Time": "2022-12-18T21:19:37.784Z"
            },
            {
                "Demolitions": 16903,
                "Exterminations": 427,
                "Time": "2022-12-18T22:27:48.660Z"
            },
            {
                "Demolitions": 17011,
                "Exterminations": 432,
                "Time": "2022-12-20T20:35:46.406Z"
            },
            {
                "Demolitions": 17293,
                "Exterminations": 452,
                "Time": "2022-12-25T12:16:18.783Z"
            },
            {
                "Demolitions": 17500,
                "Exterminations": 466,
                "Time": "2022-12-25T20:50:55.992Z"
            }
        ]
    },
    "264934459063664640": {
        "Name": "TheZodiak",
        "Demolitions": 20705,
        "Exterminations": 1772,
        "LastUpdate": "2022-11-09T21:46:38.905Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 12754,
                "Exterminations": 1103,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 14144,
                "Exterminations": 1235,
                "Time": "2022-04-07T02:44:37.786Z"
            },
            {
                "Demolitions": 20705,
                "Exterminations": 1772,
                "Time": "2022-11-09T21:46:38.905Z"
            }
        ]
    },
    "277140830551277569": {
        "Name": "Xeno199",
        "Demolitions": 699,
        "Exterminations": 2,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 699,
                "Exterminations": 2,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "598173646636318720": {
        "Name": "Kingsman Gas",
        "Demolitions": 9010,
        "Exterminations": 241,
        "LastUpdate": "2022-04-02T15:17:12.775Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 8927,
                "Exterminations": 239,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 9010,
                "Exterminations": 241,
                "Time": "2022-04-02T15:17:12.775Z"
            }
        ]
    },
    "516779473983504406": {
        "Name": "Boomy McBoomface",
        "Demolitions": 34380,
        "Exterminations": 3043,
        "LastUpdate": "2023-01-20T08:02:09.889Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 3828,
                "Exterminations": 388,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 12004,
                "Exterminations": 1211,
                "Time": "2022-04-08T00:44:39.966Z"
            },
            {
                "Demolitions": 15456,
                "Exterminations": 1550,
                "Time": "2022-04-19T07:10:30.044Z"
            },
            {
                "Demolitions": 17878,
                "Exterminations": 1722,
                "Time": "2022-05-02T01:30:32.998Z"
            },
            {
                "Demolitions": 20001,
                "Exterminations": 1913,
                "Time": "2022-05-12T23:51:13.345Z"
            },
            {
                "Demolitions": 21121,
                "Exterminations": 2002,
                "Time": "2022-05-19T18:39:53.376Z"
            },
            {
                "Demolitions": 23295,
                "Exterminations": 2179,
                "Time": "2022-06-01T23:53:04.183Z"
            },
            {
                "Demolitions": 23796,
                "Exterminations": 2208,
                "Time": "2022-06-05T09:31:20.511Z"
            },
            {
                "Demolitions": 24359,
                "Exterminations": 2243,
                "Time": "2022-06-11T08:00:43.147Z"
            },
            {
                "Demolitions": 26078,
                "Exterminations": 2356,
                "Time": "2022-09-08T05:57:00.219Z"
            },
            {
                "Demolitions": 26311,
                "Exterminations": 2639,
                "Time": "2022-09-29T22:26:40.394Z"
            },
            {
                "Demolitions": 26760,
                "Exterminations": 2407,
                "Time": "2022-10-03T03:43:38.720Z"
            },
            {
                "Demolitions": 26918,
                "Exterminations": 2417,
                "Time": "2022-10-05T05:14:11.664Z"
            },
            {
                "Demolitions": 27491,
                "Exterminations": 2456,
                "Time": "2022-10-14T00:11:02.306Z"
            },
            {
                "Demolitions": 27721,
                "Exterminations": 2475,
                "Time": "2022-10-16T22:49:48.596Z"
            },
            {
                "Demolitions": 27881,
                "Exterminations": 2483,
                "Time": "2022-10-18T14:48:38.352Z"
            },
            {
                "Demolitions": 28142,
                "Exterminations": 2500,
                "Time": "2022-10-25T05:30:02.451Z"
            },
            {
                "Demolitions": 28549,
                "Exterminations": 2530,
                "Time": "2022-10-27T16:55:46.270Z"
            },
            {
                "Demolitions": 28896,
                "Exterminations": 2559,
                "Time": "2022-10-28T23:41:13.289Z"
            },
            {
                "Demolitions": 29157,
                "Exterminations": 2587,
                "Time": "2022-10-29T05:14:05.327Z"
            },
            {
                "Demolitions": 29502,
                "Exterminations": 620,
                "Time": "2022-10-31T06:51:02.602Z"
            },
            {
                "Demolitions": 29502,
                "Exterminations": 2620,
                "Time": "2022-10-31T06:51:33.521Z"
            },
            {
                "Demolitions": 29905,
                "Exterminations": 2655,
                "Time": "2022-11-02T06:07:05.182Z"
            },
            {
                "Demolitions": 30011,
                "Exterminations": 2664,
                "Time": "2022-11-03T03:46:50.908Z"
            },
            {
                "Demolitions": 30150,
                "Exterminations": 2679,
                "Time": "2022-11-03T23:27:09.648Z"
            },
            {
                "Demolitions": 30417,
                "Exterminations": 2707,
                "Time": "2022-11-04T04:15:00.402Z"
            },
            {
                "Demolitions": 30652,
                "Exterminations": 2735,
                "Time": "2022-11-04T20:22:25.575Z"
            },
            {
                "Demolitions": 30797,
                "Exterminations": 2745,
                "Time": "2022-11-05T06:10:03.416Z"
            },
            {
                "Demolitions": 31023,
                "Exterminations": 2768,
                "Time": "2022-11-10T08:12:47.734Z"
            },
            {
                "Demolitions": 31162,
                "Exterminations": 2777,
                "Time": "2022-11-12T07:02:49.276Z"
            },
            {
                "Demolitions": 31448,
                "Exterminations": 2796,
                "Time": "2022-11-14T07:00:27.857Z"
            },
            {
                "Demolitions": 31895,
                "Exterminations": 2833,
                "Time": "2022-12-06T07:27:52.849Z"
            },
            {
                "Demolitions": 32184,
                "Exterminations": 2860,
                "Time": "2022-12-11T09:04:33.322Z"
            },
            {
                "Demolitions": 32315,
                "Exterminations": 2873,
                "Time": "2022-12-12T09:26:11.475Z"
            },
            {
                "Demolitions": 33027,
                "Exterminations": 2932,
                "Time": "2022-12-29T18:00:19.658Z"
            },
            {
                "Demolitions": 33980,
                "Exterminations": 3010,
                "Time": "2023-01-06T10:37:33.416Z"
            },
            {
                "Demolitions": 34380,
                "Exterminations": 3043,
                "Time": "2023-01-20T08:02:09.889Z"
            }
        ],
        "Country": "USA"
    },
    "724697278023204946": {
        "Name": "ryssa",
        "Demolitions": 1791,
        "Exterminations": 30,
        "LastUpdate": "2022-03-31T23:31:42.985Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 1661,
                "Exterminations": 26,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 1791,
                "Exterminations": 30,
                "Time": "2022-03-31T23:31:42.985Z"
            }
        ]
    },
    "187587257992085505": {
        "Name": "Henk de Benzinetank",
        "Demolitions": 1902,
        "Exterminations": 7,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 1902,
                "Exterminations": 7,
                "Time": "2015-07-07T00:00:00.000"
            }
        ]
    },
    "943546832561266770": {
        "Name": "SionnachRealta",
        "Demolitions": 46500,
        "Exterminations": 5186,
        "LastUpdate": "2022-10-07T23:05:54.597Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 3971,
                "Exterminations": 361,
                "Time": "2015-07-07T00:00:00.000"
            },
            {
                "Demolitions": 6172,
                "Exterminations": 615,
                "Time": "2022-04-01T16:24:47.493Z"
            },
            {
                "Demolitions": 10227,
                "Exterminations": 1100,
                "Time": "2022-04-12T13:38:16.850Z"
            },
            {
                "Demolitions": 15680,
                "Exterminations": 1723,
                "Time": "2022-05-10T20:19:36.241Z"
            },
            {
                "Demolitions": 18521,
                "Exterminations": 2040,
                "Time": "2022-05-17T14:45:24.651Z"
            },
            {
                "Demolitions": 20318,
                "Exterminations": 2242,
                "Time": "2022-05-29T15:57:56.129Z"
            },
            {
                "Demolitions": 23033,
                "Exterminations": 2504,
                "Time": "2022-06-11T20:46:27.796Z"
            },
            {
                "Demolitions": 24133,
                "Exterminations": 2607,
                "Time": "2022-06-26T15:54:34.051Z"
            },
            {
                "Demolitions": 24995,
                "Exterminations": 2705,
                "Time": "2022-07-08T23:35:58.923Z"
            },
            {
                "Demolitions": 28159,
                "Exterminations": 3080,
                "Time": "2022-07-17T03:13:01.553Z"
            },
            {
                "Demolitions": 29148,
                "Exterminations": 3191,
                "Time": "2022-07-21T13:19:10.571Z"
            },
            {
                "Demolitions": 30067,
                "Exterminations": 3300,
                "Time": "2022-07-23T15:42:13.357Z"
            },
            {
                "Demolitions": 33323,
                "Exterminations": 3684,
                "Time": "2022-08-07T19:35:21.075Z"
            },
            {
                "Demolitions": 34745,
                "Exterminations": 3833,
                "Time": "2022-08-13T17:43:08.046Z"
            },
            {
                "Demolitions": 35793,
                "Exterminations": 3924,
                "Time": "2022-08-20T11:17:48.042Z"
            },
            {
                "Demolitions": 40009,
                "Exterminations": 4426,
                "Time": "2022-09-06T16:54:10.930Z"
            },
            {
                "Demolitions": 41471,
                "Exterminations": 4603,
                "Time": "2022-09-15T02:41:38.233Z"
            },
            {
                "Demolitions": 42242,
                "Exterminations": 4698,
                "Time": "2022-09-18T23:49:28.196Z"
            },
            {
                "Demolitions": 45005,
                "Exterminations": 5019,
                "Time": "2022-09-27T07:02:59.061Z"
            },
            {
                "Demolitions": 46450,
                "Exterminations": 5180,
                "Time": "2022-10-07T22:38:03.121Z"
            },
            {
                "Demolitions": 46500,
                "Exterminations": 5186,
                "Time": "2022-10-07T23:05:54.597Z"
            }
        ],
        "Country": "Ã‰ire ðŸ‡®ðŸ‡ª"
    },
    "539491626586996746": {
        "Name": "Synxzy",
        "Demolitions": 10653,
        "Exterminations": 201,
        "LastUpdate": "2022-07-06T16:48:03.630Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 9850,
                "Exterminations": 190,
                "Time": "2022-04-02T14:27:02.085Z"
            },
            {
                "Demolitions": 10650,
                "Exterminations": 200,
                "Time": "2022-07-06T16:47:25.139Z"
            },
            {
                "Demolitions": 10653,
                "Exterminations": 201,
                "Time": "2022-07-06T16:48:03.630Z"
            }
        ],
        "Country": "Norway"
    },
    "140190896405610496": {
        "Name": "Bobsto",
        "Demolitions": 24108,
        "Exterminations": 484,
        "LastUpdate": "2022-05-29T04:02:04.664Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 24108,
                "Exterminations": 484,
                "Time": "2022-05-29T04:02:04.664Z"
            }
        ],
        "Country": "USA"
    },
    "255518212022599691": {
        "Name": "sturmo",
        "Demolitions": 15023,
        "Exterminations": 92,
        "LastUpdate": "2022-04-05T21:20:36.429Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 15023,
                "Exterminations": 92,
                "Time": "2022-04-05T21:20:36.429Z"
            }
        ]
    },
    "658851439115894804": {
        "Name": "HamDad52783",
        "Demolitions": 7002,
        "Exterminations": 228,
        "LastUpdate": "2022-04-06T17:19:41.905Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 6319,
                "Exterminations": 141,
                "Time": "2022-04-05T18:30:15.379Z"
            },
            {
                "Demolitions": 7002,
                "Exterminations": 228,
                "Time": "2022-04-06T17:19:41.905Z"
            }
        ]
    },
    "692041572866457654": {
        "Name": "bunneh",
        "Demolitions": 1582,
        "Exterminations": 29,
        "LastUpdate": "2022-04-08T15:27:52.112Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 1582,
                "Exterminations": 29,
                "Time": "2022-04-08T15:27:52.112Z"
            }
        ]
    },
    "140319650176040960": {
        "Name": "cyko07",
        "Demolitions": 13000,
        "Exterminations": 297,
        "LastUpdate": "2023-01-23T07:11:17.127Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 7946,
                "Exterminations": 85,
                "Time": "2022-04-09T08:49:48.902Z"
            },
            {
                "Demolitions": 8661,
                "Exterminations": 99,
                "Time": "2022-05-26T11:08:36.253Z"
            },
            {
                "Demolitions": 10004,
                "Exterminations": 126,
                "Time": "2022-08-19T10:41:39.408Z"
            },
            {
                "Demolitions": 13000,
                "Exterminations": 297,
                "Time": "2023-01-23T07:11:17.127Z"
            }
        ]
    },
    "249776134244270091": {
        "Name": "MajorGrandPlat",
        "Demolitions": 5183,
        "Exterminations": 142,
        "LastUpdate": "2023-01-15T03:51:58.155Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 2404,
                "Exterminations": 54,
                "Time": "2022-04-09T08:49:58.942Z"
            },
            {
                "Demolitions": 2600,
                "Exterminations": 64,
                "Time": "2022-04-11T07:05:28.020Z"
            },
            {
                "Demolitions": 3026,
                "Exterminations": 72,
                "Time": "2022-06-17T11:49:32.735Z"
            },
            {
                "Demolitions": 5183,
                "Exterminations": 142,
                "Time": "2023-01-15T03:51:58.155Z"
            }
        ],
        "Country": "USA"
    },
    "776531781704482846": {
        "Name": "bobquentok",
        "Demolitions": 20052,
        "Exterminations": 850,
        "LastUpdate": "2022-10-25T20:47:16.319Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 12379,
                "Exterminations": 634,
                "Time": "2022-05-06T09:51:22.455Z"
            },
            {
                "Demolitions": 15555,
                "Exterminations": 707,
                "Time": "2022-08-01T20:23:03.471Z"
            },
            {
                "Demolitions": 17000,
                "Exterminations": 730,
                "Time": "2022-08-28T07:03:50.934Z"
            },
            {
                "Demolitions": 20000,
                "Exterminations": 850,
                "Time": "2022-10-25T20:45:58.166Z"
            },
            {
                "Demolitions": 20052,
                "Exterminations": 850,
                "Time": "2022-10-25T20:47:16.319Z"
            }
        ]
    },
    "654067249031675913": {
        "Name": "Igorthewise",
        "Demolitions": 12158,
        "Exterminations": 116,
        "LastUpdate": "2023-01-22T00:49:19.159Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 5123,
                "Exterminations": 39,
                "Time": "2022-04-12T15:04:22.568Z"
            },
            {
                "Demolitions": 10037,
                "Exterminations": 97,
                "Time": "2022-10-28T19:51:40.657Z"
            },
            {
                "Demolitions": 11516,
                "Exterminations": 109,
                "Time": "2022-12-29T19:37:32.292Z"
            },
            {
                "Demolitions": 12158,
                "Exterminations": 116,
                "Time": "2023-01-22T00:49:19.159Z"
            }
        ]
    },
    "321320322051866654": {
        "Name": "Rocci",
        "Demolitions": 5620,
        "Exterminations": 8,
        "LastUpdate": "2022-04-13T20:55:25.184Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 5620,
                "Exterminations": 8,
                "Time": "2022-04-13T20:55:25.184Z"
            }
        ]
    },
    "210081675558912000": {
        "Name": "NITROZ",
        "Demolitions": 6119,
        "Exterminations": 175,
        "LastUpdate": "2022-04-16T20:27:01.028Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 6119,
                "Exterminations": 175,
                "Time": "2022-04-16T20:27:01.028Z"
            }
        ],
        "Country": "EGYPT"
    },
    "630522447262646286": {
        "Name": "FugalShooter69",
        "Demolitions": 9462,
        "Exterminations": 498,
        "LastUpdate": "2022-06-06T22:42:31.319Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 8501,
                "Exterminations": 402,
                "Time": "2022-04-30T13:21:53.188Z"
            },
            {
                "Demolitions": 9462,
                "Exterminations": 498,
                "Time": "2022-06-06T22:42:31.319Z"
            }
        ]
    },
    "340676390875693056": {
        "Name": "Anga",
        "Demolitions": 5017,
        "Exterminations": 57,
        "LastUpdate": "2022-09-29T15:37:25.403Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 3882,
                "Exterminations": 25,
                "Time": "2022-05-01T02:58:11.379Z"
            },
            {
                "Demolitions": 4106,
                "Exterminations": 39,
                "Time": "2022-05-06T14:55:59.937Z"
            },
            {
                "Demolitions": 4317,
                "Exterminations": 42,
                "Time": "2022-05-22T23:47:00.463Z"
            },
            {
                "Demolitions": 4474,
                "Exterminations": 51,
                "Time": "2022-07-13T06:20:12.173Z"
            },
            {
                "Demolitions": 4656,
                "Exterminations": 56,
                "Time": "2022-07-31T06:52:14.510Z"
            },
            {
                "Demolitions": 5017,
                "Exterminations": 57,
                "Time": "2022-09-29T15:37:25.403Z"
            }
        ],
        "Country": "AUS"
    },
    "311116009454960641": {
        "Name": "cookie",
        "Demolitions": 13272,
        "Exterminations": 17,
        "LastUpdate": "2022-05-03T04:28:30.197Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 13272,
                "Exterminations": 17,
                "Time": "2022-05-03T04:28:30.197Z"
            }
        ]
    },
    "436033964445270016": {
        "Name": "SpeedCubePro",
        "Demolitions": 9131,
        "Exterminations": 136,
        "LastUpdate": "2023-01-23T16:25:56.761Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 5415,
                "Exterminations": 78,
                "Time": "2022-05-06T02:14:20.376Z"
            },
            {
                "Demolitions": 5685,
                "Exterminations": 78,
                "Time": "2022-05-25T01:08:04.418Z"
            },
            {
                "Demolitions": 7223,
                "Exterminations": 107,
                "Time": "2022-08-29T19:30:32.136Z"
            },
            {
                "Demolitions": 8874,
                "Exterminations": 121,
                "Time": "2023-01-12T10:38:14.222Z"
            },
            {
                "Demolitions": 9032,
                "Exterminations": 128,
                "Time": "2023-01-22T18:16:49.484Z"
            },
            {
                "Demolitions": 9131,
                "Exterminations": 136,
                "Time": "2023-01-23T16:25:56.761Z"
            }
        ]
    },
    "734238505181511750": {
        "Name": "Elle oh Elle OMG",
        "Demolitions": 21079,
        "Exterminations": 1677,
        "LastUpdate": "2022-12-14T19:49:42.233Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 21079,
                "Exterminations": 1677,
                "Time": "2022-12-14T19:49:42.233Z"
            }
        ]
    },
    "414974054823624714": {
        "Name": "Piolo",
        "Demolitions": 0,
        "Exterminations": 0,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": []
    },
    "174259432841150464": {
        "Name": "TheBlue_NL",
        "Demolitions": 9185,
        "Exterminations": 30,
        "LastUpdate": "2022-06-02T11:47:21.135Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 9185,
                "Exterminations": 30,
                "Time": "2022-06-02T11:47:21.135Z"
            }
        ],
        "Country": "Netherlands"
    },
    "940689876209250345": {
        "Name": "big_chunkyy",
        "Demolitions": 21571,
        "Exterminations": 2051,
        "LastUpdate": "2023-01-29T23:03:13.654Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 10035,
                "Exterminations": 938,
                "Time": "2022-06-02T19:57:35.318Z"
            },
            {
                "Demolitions": 10173,
                "Exterminations": 948,
                "Time": "2022-06-02T21:08:36.037Z"
            },
            {
                "Demolitions": 10236,
                "Exterminations": 955,
                "Time": "2022-06-06T15:11:07.414Z"
            },
            {
                "Demolitions": 10405,
                "Exterminations": 968,
                "Time": "2022-06-07T22:27:29.834Z"
            },
            {
                "Demolitions": 10508,
                "Exterminations": 980,
                "Time": "2022-06-08T15:27:32.655Z"
            },
            {
                "Demolitions": 10649,
                "Exterminations": 995,
                "Time": "2022-06-12T16:34:09.312Z"
            },
            {
                "Demolitions": 10780,
                "Exterminations": 1004,
                "Time": "2022-06-13T23:08:35.901Z"
            },
            {
                "Demolitions": 10997,
                "Exterminations": 1024,
                "Time": "2022-06-17T12:54:33.146Z"
            },
            {
                "Demolitions": 11020,
                "Exterminations": 1027,
                "Time": "2022-06-17T13:17:23.152Z"
            },
            {
                "Demolitions": 11036,
                "Exterminations": 1028,
                "Time": "2022-06-17T23:46:58.774Z"
            },
            {
                "Demolitions": 11110,
                "Exterminations": 1034,
                "Time": "2022-06-18T20:56:21.882Z"
            },
            {
                "Demolitions": 11190,
                "Exterminations": 1039,
                "Time": "2022-06-21T21:31:44.235Z"
            },
            {
                "Demolitions": 11270,
                "Exterminations": 1047,
                "Time": "2022-06-26T01:14:16.842Z"
            },
            {
                "Demolitions": 11903,
                "Exterminations": 1115,
                "Time": "2022-06-29T17:05:23.029Z"
            },
            {
                "Demolitions": 12200,
                "Exterminations": 1143,
                "Time": "2022-07-02T20:03:06.329Z"
            },
            {
                "Demolitions": 12516,
                "Exterminations": 1175,
                "Time": "2022-07-05T20:41:18.862Z"
            },
            {
                "Demolitions": 13012,
                "Exterminations": 1218,
                "Time": "2022-07-15T16:31:23.140Z"
            },
            {
                "Demolitions": 13830,
                "Exterminations": 1297,
                "Time": "2022-07-30T14:32:31.259Z"
            },
            {
                "Demolitions": 14116,
                "Exterminations": 1329,
                "Time": "2022-08-01T15:57:47.965Z"
            },
            {
                "Demolitions": 15013,
                "Exterminations": 1411,
                "Time": "2022-08-17T16:27:58.336Z"
            },
            {
                "Demolitions": 15286,
                "Exterminations": 1432,
                "Time": "2022-08-22T21:09:38.423Z"
            },
            {
                "Demolitions": 16160,
                "Exterminations": 1520,
                "Time": "2022-09-01T20:30:22.091Z"
            },
            {
                "Demolitions": 17012,
                "Exterminations": 1606,
                "Time": "2022-09-10T20:03:06.120Z"
            },
            {
                "Demolitions": 18036,
                "Exterminations": 1710,
                "Time": "2022-10-03T20:12:35.799Z"
            },
            {
                "Demolitions": 19013,
                "Exterminations": 1802,
                "Time": "2022-11-23T16:05:14.334Z"
            },
            {
                "Demolitions": 19112,
                "Exterminations": 1814,
                "Time": "2022-11-26T18:47:09.024Z"
            },
            {
                "Demolitions": 19242,
                "Exterminations": 1825,
                "Time": "2022-12-04T16:50:00.323Z"
            },
            {
                "Demolitions": 19369,
                "Exterminations": 1838,
                "Time": "2022-12-15T18:21:51.274Z"
            },
            {
                "Demolitions": 19509,
                "Exterminations": 1853,
                "Time": "2022-12-17T20:50:45.436Z"
            },
            {
                "Demolitions": 20000,
                "Exterminations": 1903,
                "Time": "2022-12-20T23:03:48.452Z"
            },
            {
                "Demolitions": 20080,
                "Exterminations": 1908,
                "Time": "2022-12-22T13:40:23.842Z"
            },
            {
                "Demolitions": 20200,
                "Exterminations": 1919,
                "Time": "2022-12-22T18:20:39.984Z"
            },
            {
                "Demolitions": 20425,
                "Exterminations": 1942,
                "Time": "2022-12-24T17:28:59.335Z"
            },
            {
                "Demolitions": 20610,
                "Exterminations": 1960,
                "Time": "2022-12-28T15:52:21.776Z"
            },
            {
                "Demolitions": 20891,
                "Exterminations": 1984,
                "Time": "2023-01-21T15:28:26.882Z"
            },
            {
                "Demolitions": 21077,
                "Exterminations": 2002,
                "Time": "2023-01-22T15:37:31.637Z"
            },
            {
                "Demolitions": 21263,
                "Exterminations": 2018,
                "Time": "2023-01-28T16:33:35.167Z"
            },
            {
                "Demolitions": 21571,
                "Exterminations": 2051,
                "Time": "2023-01-29T23:03:13.654Z"
            }
        ]
    },
    "397441216763002886": {
        "Name": "Byexx2",
        "Demolitions": 3500,
        "Exterminations": 13,
        "LastUpdate": "2022-06-05T19:01:39.385Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 3500,
                "Exterminations": 13,
                "Time": "2022-06-05T19:01:39.385Z"
            }
        ],
        "Country": "URU"
    },
    "532973438319591424": {
        "Name": "SpeedyGonzales",
        "Demolitions": 3471,
        "Exterminations": 11,
        "LastUpdate": "2022-06-07T14:31:39.719Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 3471,
                "Exterminations": 11,
                "Time": "2022-06-07T14:31:39.719Z"
            }
        ],
        "Country": "Norway"
    },
    "365179645546463233": {
        "Name": "Sibness",
        "Demolitions": 21536,
        "Exterminations": 1650,
        "LastUpdate": "2023-01-27T14:40:23.284Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 17602,
                "Exterminations": 1342,
                "Time": "2022-07-05T14:34:59.012Z"
            },
            {
                "Demolitions": 19884,
                "Exterminations": 1515,
                "Time": "2022-11-24T08:27:27.307Z"
            },
            {
                "Demolitions": 21536,
                "Exterminations": 1650,
                "Time": "2023-01-27T14:40:23.284Z"
            }
        ]
    },
    "918937907878830120": {
        "Name": "RexemRaw",
        "Demolitions": 20919,
        "Exterminations": 203,
        "LastUpdate": "2022-11-11T14:37:29.014Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 20919,
                "Exterminations": 203,
                "Time": "2022-11-11T14:37:29.014Z"
            }
        ]
    },
    "358767304072364044": {
        "Name": "Ronin",
        "Demolitions": 13868,
        "Exterminations": 39,
        "LastUpdate": "2022-06-14T18:24:21.935Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 13868,
                "Exterminations": 39,
                "Time": "2022-06-14T18:24:21.935Z"
            }
        ]
    },
    "150440912277864448": {
        "Name": "Phantix",
        "Demolitions": 13418,
        "Exterminations": 280,
        "LastUpdate": "2023-01-12T21:31:42.121Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 9758,
                "Exterminations": 86,
                "Time": "2022-06-16T06:44:16.924Z"
            },
            {
                "Demolitions": 9823,
                "Exterminations": 88,
                "Time": "2022-06-16T19:03:52.002Z"
            },
            {
                "Demolitions": 9879,
                "Exterminations": 89,
                "Time": "2022-06-21T07:25:35.830Z"
            },
            {
                "Demolitions": 9900,
                "Exterminations": 90,
                "Time": "2022-06-21T07:59:43.704Z"
            },
            {
                "Demolitions": 10003,
                "Exterminations": 93,
                "Time": "2022-06-21T22:29:29.614Z"
            },
            {
                "Demolitions": 10039,
                "Exterminations": 96,
                "Time": "2022-06-23T05:30:40.365Z"
            },
            {
                "Demolitions": 10104,
                "Exterminations": 99,
                "Time": "2022-06-23T19:57:46.034Z"
            },
            {
                "Demolitions": 10184,
                "Exterminations": 101,
                "Time": "2022-06-29T20:05:11.877Z"
            },
            {
                "Demolitions": 10273,
                "Exterminations": 106,
                "Time": "2022-07-09T18:42:37.722Z"
            },
            {
                "Demolitions": 10450,
                "Exterminations": 107,
                "Time": "2022-08-06T05:08:39.572Z"
            },
            {
                "Demolitions": 10500,
                "Exterminations": 107,
                "Time": "2022-08-07T03:42:48.968Z"
            },
            {
                "Demolitions": 10668,
                "Exterminations": 110,
                "Time": "2022-08-15T05:53:19.938Z"
            },
            {
                "Demolitions": 10713,
                "Exterminations": 111,
                "Time": "2022-08-16T02:28:51.262Z"
            },
            {
                "Demolitions": 10765,
                "Exterminations": 111,
                "Time": "2022-08-19T02:05:47.379Z"
            },
            {
                "Demolitions": 10863,
                "Exterminations": 113,
                "Time": "2022-08-27T03:26:16.991Z"
            },
            {
                "Demolitions": 10926,
                "Exterminations": 115,
                "Time": "2022-08-31T04:48:29.486Z"
            },
            {
                "Demolitions": 11089,
                "Exterminations": 116,
                "Time": "2022-09-08T01:17:18.554Z"
            },
            {
                "Demolitions": 11347,
                "Exterminations": 124,
                "Time": "2022-09-28T20:19:21.844Z"
            },
            {
                "Demolitions": 11440,
                "Exterminations": 129,
                "Time": "2022-09-30T04:02:58.552Z"
            },
            {
                "Demolitions": 11638,
                "Exterminations": 140,
                "Time": "2022-10-07T19:04:42.069Z"
            },
            {
                "Demolitions": 11700,
                "Exterminations": 148,
                "Time": "2022-10-07T19:50:11.383Z"
            },
            {
                "Demolitions": 11842,
                "Exterminations": 156,
                "Time": "2022-10-13T05:48:09.624Z"
            },
            {
                "Demolitions": 12124,
                "Exterminations": 186,
                "Time": "2022-10-13T09:09:03.001Z"
            },
            {
                "Demolitions": 12280,
                "Exterminations": 200,
                "Time": "2022-10-13T22:08:09.523Z"
            },
            {
                "Demolitions": 12370,
                "Exterminations": 210,
                "Time": "2022-10-16T02:06:09.073Z"
            },
            {
                "Demolitions": 12578,
                "Exterminations": 231,
                "Time": "2022-10-20T00:30:38.707Z"
            },
            {
                "Demolitions": 12639,
                "Exterminations": 239,
                "Time": "2022-10-20T00:52:04.168Z"
            },
            {
                "Demolitions": 12868,
                "Exterminations": 266,
                "Time": "2022-10-20T03:20:02.695Z"
            },
            {
                "Demolitions": 13418,
                "Exterminations": 280,
                "Time": "2023-01-12T21:31:42.121Z"
            }
        ],
        "Country": "Canada"
    },
    "816032488669052979": {
        "Name": "Wh1te",
        "Demolitions": 376,
        "Exterminations": 0,
        "LastUpdate": "2022-09-22T12:56:10.194Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 220,
                "Exterminations": 0,
                "Time": "2022-07-06T01:11:52.814Z"
            },
            {
                "Demolitions": 231,
                "Exterminations": 0,
                "Time": "2022-07-08T20:28:02.506Z"
            },
            {
                "Demolitions": 376,
                "Exterminations": 0,
                "Time": "2022-09-22T12:56:10.194Z"
            }
        ]
    },
    "245523715855482882": {
        "Name": "Hellhaunter",
        "Demolitions": 8071,
        "Exterminations": 187,
        "LastUpdate": "2022-07-06T11:53:58.235Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 8071,
                "Exterminations": 187,
                "Time": "2022-07-06T11:53:58.235Z"
            }
        ]
    },
    "330870797939900418": {
        "Name": "Not_Steve_Harvey",
        "Demolitions": 12930,
        "Exterminations": 88,
        "LastUpdate": "2022-07-09T15:50:41.685Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 12930,
                "Exterminations": 88,
                "Time": "2022-07-09T15:50:41.685Z"
            }
        ]
    },
    "329951645507256320": {
        "Name": "dyzur",
        "Demolitions": 10416,
        "Exterminations": 13,
        "LastUpdate": "2022-07-10T05:17:47.334Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 10416,
                "Exterminations": 13,
                "Time": "2022-07-10T05:17:47.334Z"
            }
        ]
    },
    "486113023270977538": {
        "Name": "LayXiiK",
        "Demolitions": 10175,
        "Exterminations": 68,
        "LastUpdate": "2022-11-23T16:49:52.772Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 8343,
                "Exterminations": 37,
                "Time": "2022-07-12T13:05:00.689Z"
            },
            {
                "Demolitions": 8390,
                "Exterminations": 38,
                "Time": "2022-07-12T14:19:32.799Z"
            },
            {
                "Demolitions": 8454,
                "Exterminations": 42,
                "Time": "2022-07-13T12:44:38.913Z"
            },
            {
                "Demolitions": 8673,
                "Exterminations": 46,
                "Time": "2022-07-15T15:50:54.015Z"
            },
            {
                "Demolitions": 8779,
                "Exterminations": 49,
                "Time": "2022-07-18T21:59:27.810Z"
            },
            {
                "Demolitions": 9012,
                "Exterminations": 50,
                "Time": "2022-10-15T12:19:15.648Z"
            },
            {
                "Demolitions": 9440,
                "Exterminations": 52,
                "Time": "2022-10-31T12:15:44.729Z"
            },
            {
                "Demolitions": 10175,
                "Exterminations": 68,
                "Time": "2022-11-23T16:49:52.772Z"
            }
        ]
    },
    "422197819735015434": {
        "Name": "cojimaru",
        "Demolitions": 26866,
        "Exterminations": 1200,
        "LastUpdate": "2023-01-05T18:11:01.272Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 19403,
                "Exterminations": 509,
                "Time": "2022-07-13T02:30:18.595Z"
            },
            {
                "Demolitions": 20401,
                "Exterminations": 606,
                "Time": "2022-07-24T15:54:15.279Z"
            },
            {
                "Demolitions": 21453,
                "Exterminations": 714,
                "Time": "2022-08-02T16:05:08.204Z"
            },
            {
                "Demolitions": 22056,
                "Exterminations": 780,
                "Time": "2022-08-10T19:13:20.237Z"
            },
            {
                "Demolitions": 23482,
                "Exterminations": 904,
                "Time": "2022-10-01T00:46:26.961Z"
            },
            {
                "Demolitions": 24695,
                "Exterminations": 1012,
                "Time": "2022-10-24T03:34:26.454Z"
            },
            {
                "Demolitions": 26866,
                "Exterminations": 1200,
                "Time": "2023-01-05T18:11:01.272Z"
            }
        ]
    },
    "652935790774583297": {
        "Name": "Meeeefsk",
        "Demolitions": 8639,
        "Exterminations": 420,
        "LastUpdate": "2022-07-24T21:17:22.154Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 7886,
                "Exterminations": 337,
                "Time": "2022-07-17T21:21:26.992Z"
            },
            {
                "Demolitions": 8639,
                "Exterminations": 420,
                "Time": "2022-07-24T19:54:02.466Z"
            },
            {
                "Demolitions": 8639,
                "Exterminations": 420,
                "Time": "2022-07-24T21:17:22.154Z"
            }
        ]
    },
    "836252471487496292": {
        "Name": "bxee.",
        "Demolitions": 12862,
        "Exterminations": 242,
        "LastUpdate": "2023-01-24T11:15:05.437Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 6307,
                "Exterminations": 45,
                "Time": "2022-07-19T00:09:33.963Z"
            },
            {
                "Demolitions": 6399,
                "Exterminations": 51,
                "Time": "2022-07-21T11:50:44.820Z"
            },
            {
                "Demolitions": 6421,
                "Exterminations": 51,
                "Time": "2022-07-22T23:53:18.813Z"
            },
            {
                "Demolitions": 6676,
                "Exterminations": 57,
                "Time": "2022-07-29T01:38:56.236Z"
            },
            {
                "Demolitions": 6882,
                "Exterminations": 60,
                "Time": "2022-08-03T21:53:13.919Z"
            },
            {
                "Demolitions": 7116,
                "Exterminations": 65,
                "Time": "2022-08-08T18:10:12.079Z"
            },
            {
                "Demolitions": 7835,
                "Exterminations": 85,
                "Time": "2022-08-20T16:45:33.981Z"
            },
            {
                "Demolitions": 8462,
                "Exterminations": 107,
                "Time": "2022-08-31T14:34:51.139Z"
            },
            {
                "Demolitions": 9303,
                "Exterminations": 126,
                "Time": "2022-09-18T22:52:02.076Z"
            },
            {
                "Demolitions": 9303,
                "Exterminations": 126,
                "Time": "2022-09-18T23:14:53.732Z"
            },
            {
                "Demolitions": 10005,
                "Exterminations": 139,
                "Time": "2022-10-23T16:47:49.879Z"
            },
            {
                "Demolitions": 10613,
                "Exterminations": 189,
                "Time": "2022-11-01T22:26:51.233Z"
            },
            {
                "Demolitions": 11019,
                "Exterminations": 198,
                "Time": "2022-11-15T23:34:43.188Z"
            },
            {
                "Demolitions": 12223,
                "Exterminations": 224,
                "Time": "2022-12-23T02:59:12.735Z"
            },
            {
                "Demolitions": 12862,
                "Exterminations": 242,
                "Time": "2023-01-24T11:15:05.437Z"
            }
        ],
        "Country": "France"
    },
    "182085433293930496": {
        "Name": "MAX POWER",
        "Demolitions": 10074,
        "Exterminations": 90,
        "LastUpdate": "2022-07-26T16:07:09.606Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 10074,
                "Exterminations": 90,
                "Time": "2022-07-26T16:07:09.606Z"
            }
        ]
    },
    "144977585867194377": {
        "Name": "salvation-",
        "Demolitions": 40183,
        "Exterminations": 3323,
        "LastUpdate": "2022-12-08T19:49:17.904Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 37607,
                "Exterminations": 3048,
                "Time": "2022-08-09T00:42:53.412Z"
            },
            {
                "Demolitions": 40183,
                "Exterminations": 3323,
                "Time": "2022-12-08T19:49:17.904Z"
            }
        ]
    },
    "417761244762603520": {
        "Name": "James_Road2SSL",
        "Demolitions": 3267,
        "Exterminations": 2,
        "LastUpdate": "2022-07-30T22:05:32.973Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 3267,
                "Exterminations": 2,
                "Time": "2022-07-30T22:05:32.973Z"
            }
        ]
    },
    "550113497271500810": {
        "Name": "ken_joy_akiru",
        "Demolitions": 20003,
        "Exterminations": 339,
        "LastUpdate": "2022-12-31T07:08:54.290Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 17043,
                "Exterminations": 264,
                "Time": "2022-08-24T04:52:26.691Z"
            },
            {
                "Demolitions": 18605,
                "Exterminations": 298,
                "Time": "2022-11-07T20:44:13.391Z"
            },
            {
                "Demolitions": 20003,
                "Exterminations": 339,
                "Time": "2022-12-31T07:08:54.290Z"
            }
        ]
    },
    "724064432715595789": {
        "Name": "lazerking.",
        "Demolitions": 18963,
        "Exterminations": 143,
        "LastUpdate": "2022-08-08T15:57:30.404Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 18963,
                "Exterminations": 143,
                "Time": "2022-08-08T15:57:30.404Z"
            }
        ]
    },
    "584081890420457505": {
        "Name": "rrreefun",
        "Demolitions": 43385,
        "Exterminations": 2075,
        "LastUpdate": "2022-09-04T09:22:47.033Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 24005,
                "Exterminations": 1512,
                "Time": "2022-08-13T13:35:27.816Z"
            },
            {
                "Demolitions": 42513,
                "Exterminations": 2036,
                "Time": "2022-08-13T13:49:54.722Z"
            },
            {
                "Demolitions": 43385,
                "Exterminations": 2075,
                "Time": "2022-09-04T09:22:47.033Z"
            }
        ]
    },
    "133811932133195777": {
        "Name": "AJBinky",
        "Demolitions": 0,
        "Exterminations": 0,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": []
    },
    "701835082444439622": {
        "Name": "BankTheCash",
        "Demolitions": 6618,
        "Exterminations": 66,
        "LastUpdate": "2022-08-25T04:57:10.598Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 6618,
                "Exterminations": 66,
                "Time": "2022-08-25T04:57:10.598Z"
            }
        ],
        "Country": "USA"
    },
    "193622989130956800": {
        "Name": "FourEyesOptic",
        "Demolitions": 11105,
        "Exterminations": 697,
        "LastUpdate": "2022-10-08T16:22:46.539Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 5903,
                "Exterminations": 250,
                "Time": "2022-08-25T14:54:25.968Z"
            },
            {
                "Demolitions": 7096,
                "Exterminations": 357,
                "Time": "2022-09-02T00:49:13.383Z"
            },
            {
                "Demolitions": 8004,
                "Exterminations": 441,
                "Time": "2022-09-07T07:14:50.727Z"
            },
            {
                "Demolitions": 9539,
                "Exterminations": 561,
                "Time": "2022-09-22T06:24:02.094Z"
            },
            {
                "Demolitions": 10001,
                "Exterminations": 606,
                "Time": "2022-09-28T02:55:45.082Z"
            },
            {
                "Demolitions": 11105,
                "Exterminations": 697,
                "Time": "2022-10-08T16:22:46.539Z"
            }
        ]
    },
    "310548120612241409": {
        "Name": "Beefcayk",
        "Demolitions": 15019,
        "Exterminations": 549,
        "LastUpdate": "2022-09-10T01:25:28.721Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 11380,
                "Exterminations": 143,
                "Time": "2022-08-28T21:18:49.092Z"
            },
            {
                "Demolitions": 12132,
                "Exterminations": 224,
                "Time": "2022-09-01T16:05:21.109Z"
            },
            {
                "Demolitions": 12539,
                "Exterminations": 267,
                "Time": "2022-09-02T22:47:44.986Z"
            },
            {
                "Demolitions": 13003,
                "Exterminations": 318,
                "Time": "2022-09-04T04:53:20.196Z"
            },
            {
                "Demolitions": 13327,
                "Exterminations": 358,
                "Time": "2022-09-04T23:55:23.036Z"
            },
            {
                "Demolitions": 13673,
                "Exterminations": 396,
                "Time": "2022-09-07T20:28:12.100Z"
            },
            {
                "Demolitions": 13940,
                "Exterminations": 427,
                "Time": "2022-09-08T01:57:53.412Z"
            },
            {
                "Demolitions": 14115,
                "Exterminations": 442,
                "Time": "2022-09-08T17:01:38.367Z"
            },
            {
                "Demolitions": 14365,
                "Exterminations": 472,
                "Time": "2022-09-08T19:30:30.561Z"
            },
            {
                "Demolitions": 14976,
                "Exterminations": 542,
                "Time": "2022-09-09T11:51:52.470Z"
            },
            {
                "Demolitions": 14629,
                "Exterminations": 501,
                "Time": "2022-09-09T17:17:33.138Z"
            },
            {
                "Demolitions": 15019,
                "Exterminations": 549,
                "Time": "2022-09-10T01:25:28.721Z"
            }
        ]
    },
    "712209340425175041": {
        "Name": "LeMarcel.",
        "Demolitions": 7174,
        "Exterminations": 363,
        "LastUpdate": "2023-01-19T10:27:09.675Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 3228,
                "Exterminations": 41,
                "Time": "2022-08-31T13:13:19.663Z"
            },
            {
                "Demolitions": 3274,
                "Exterminations": 46,
                "Time": "2022-08-31T14:43:08.606Z"
            },
            {
                "Demolitions": 3372,
                "Exterminations": 50,
                "Time": "2022-08-31T20:15:34.638Z"
            },
            {
                "Demolitions": 3518,
                "Exterminations": 67,
                "Time": "2022-09-01T19:53:17.690Z"
            },
            {
                "Demolitions": 3664,
                "Exterminations": 81,
                "Time": "2022-09-02T20:05:56.850Z"
            },
            {
                "Demolitions": 3828,
                "Exterminations": 90,
                "Time": "2022-09-03T14:32:15.881Z"
            },
            {
                "Demolitions": 3959,
                "Exterminations": 108,
                "Time": "2022-09-03T16:58:22.385Z"
            },
            {
                "Demolitions": 4320,
                "Exterminations": 153,
                "Time": "2022-09-07T16:12:18.409Z"
            },
            {
                "Demolitions": 4423,
                "Exterminations": 161,
                "Time": "2022-09-11T10:23:53.835Z"
            },
            {
                "Demolitions": 4697,
                "Exterminations": 191,
                "Time": "2022-09-14T15:07:03.890Z"
            },
            {
                "Demolitions": 4849,
                "Exterminations": 201,
                "Time": "2022-09-15T16:24:15.131Z"
            },
            {
                "Demolitions": 5000,
                "Exterminations": 216,
                "Time": "2022-09-17T19:28:28.571Z"
            },
            {
                "Demolitions": 5060,
                "Exterminations": 218,
                "Time": "2022-09-18T14:02:06.525Z"
            },
            {
                "Demolitions": 5227,
                "Exterminations": 238,
                "Time": "2022-09-19T19:44:26.300Z"
            },
            {
                "Demolitions": 5300,
                "Exterminations": 250,
                "Time": "2022-09-21T17:40:59.879Z"
            },
            {
                "Demolitions": 5555,
                "Exterminations": 270,
                "Time": "2022-09-24T17:33:03.385Z"
            },
            {
                "Demolitions": 5700,
                "Exterminations": 290,
                "Time": "2022-09-24T20:01:03.727Z"
            },
            {
                "Demolitions": 5950,
                "Exterminations": 315,
                "Time": "2022-09-27T17:26:01.133Z"
            },
            {
                "Demolitions": 6115,
                "Exterminations": 338,
                "Time": "2022-09-28T17:42:12.253Z"
            },
            {
                "Demolitions": 6200,
                "Exterminations": 350,
                "Time": "2022-10-04T15:11:18.546Z"
            },
            {
                "Demolitions": 6638,
                "Exterminations": 361,
                "Time": "2022-11-23T15:52:15.422Z"
            },
            {
                "Demolitions": 6928,
                "Exterminations": 362,
                "Time": "2022-12-22T11:38:23.599Z"
            },
            {
                "Demolitions": 7174,
                "Exterminations": 363,
                "Time": "2023-01-19T10:27:09.675Z"
            }
        ],
        "Country": "FR"
    },
    "148623302598983680": {
        "Name": "Wulfezbane",
        "Demolitions": 15908,
        "Exterminations": 1048,
        "LastUpdate": "2022-08-31T23:03:36.295Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 15908,
                "Exterminations": 1048,
                "Time": "2022-08-31T23:03:36.295Z"
            }
        ]
    },
    "710497409507000370": {
        "Name": "2thboto",
        "Demolitions": 700,
        "Exterminations": 100,
        "LastUpdate": "2022-09-01T02:18:16.539Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 700,
                "Exterminations": 100,
                "Time": "2022-09-01T02:17:20.518Z"
            },
            {
                "Demolitions": 700,
                "Exterminations": 100,
                "Time": "2022-09-01T02:18:16.539Z"
            }
        ]
    },
    "251755749749817344": {
        "Name": "t.tv/thebear45",
        "Demolitions": 0,
        "Exterminations": 0,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": []
    },
    "515629000492711943": {
        "Name": "wmon",
        "Demolitions": 18877,
        "Exterminations": 137,
        "LastUpdate": "2022-12-19T15:17:35.663Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 18877,
                "Exterminations": 137,
                "Time": "2022-12-19T15:17:35.663Z"
            }
        ]
    },
    "830448045576683571": {
        "Name": "Fintan",
        "Demolitions": 2101,
        "Exterminations": 58,
        "LastUpdate": "2022-09-01T20:26:28.177Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 2101,
                "Exterminations": 58,
                "Time": "2022-09-01T20:26:28.177Z"
            }
        ]
    },
    "274326826233626634": {
        "Name": "CodeWhite",
        "Demolitions": 25593,
        "Exterminations": 243,
        "LastUpdate": "2022-09-02T15:04:51.481Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 25593,
                "Exterminations": 243,
                "Time": "2022-09-02T15:04:51.481Z"
            }
        ],
        "Country": "Canada"
    },
    "439916969362456578": {
        "Name": "DauntingZebra",
        "Demolitions": 10000,
        "Exterminations": 367,
        "LastUpdate": "2022-10-24T06:18:40.628Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 7974,
                "Exterminations": 173,
                "Time": "2022-09-02T01:07:49.620Z"
            },
            {
                "Demolitions": 8800,
                "Exterminations": 251,
                "Time": "2022-09-04T21:35:39.563Z"
            },
            {
                "Demolitions": 10000,
                "Exterminations": 367,
                "Time": "2022-10-24T06:18:40.628Z"
            }
        ],
        "Country": "USA"
    },
    "210363104217792513": {
        "Name": "THE MUFFIN MAN",
        "Demolitions": 50086,
        "Exterminations": 212,
        "LastUpdate": "2023-01-25T05:25:38.908Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 47489,
                "Exterminations": 193,
                "Time": "2022-09-02T02:27:08.860Z"
            },
            {
                "Demolitions": 47520,
                "Exterminations": 193,
                "Time": "2022-09-04T00:55:03.853Z"
            },
            {
                "Demolitions": 47520,
                "Exterminations": 193,
                "Time": "2022-09-04T00:55:22.821Z"
            },
            {
                "Demolitions": 47935,
                "Exterminations": 197,
                "Time": "2022-09-20T12:56:56.078Z"
            },
            {
                "Demolitions": 48400,
                "Exterminations": 200,
                "Time": "2022-10-10T18:37:47.414Z"
            },
            {
                "Demolitions": 50086,
                "Exterminations": 212,
                "Time": "2023-01-25T05:25:38.908Z"
            }
        ]
    },
    "107663470274555904": {
        "Name": "EggDip",
        "Demolitions": 8834,
        "Exterminations": 26,
        "LastUpdate": "2022-09-02T02:20:20.688Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 8834,
                "Exterminations": 26,
                "Time": "2022-09-02T02:20:20.688Z"
            }
        ],
        "Country": "USA"
    },
    "555088927900303405": {
        "Name": "IgnitionZiggy",
        "Demolitions": 17568,
        "Exterminations": 555,
        "LastUpdate": "2023-01-16T22:46:16.876Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 13736,
                "Exterminations": 312,
                "Time": "2022-09-02T02:39:28.116Z"
            },
            {
                "Demolitions": 14043,
                "Exterminations": 341,
                "Time": "2022-09-06T10:37:11.526Z"
            },
            {
                "Demolitions": 14306,
                "Exterminations": 363,
                "Time": "2022-09-18T18:09:56.040Z"
            },
            {
                "Demolitions": 14471,
                "Exterminations": 375,
                "Time": "2022-09-21T00:36:33.537Z"
            },
            {
                "Demolitions": 14530,
                "Exterminations": 380,
                "Time": "2022-09-21T23:58:46.938Z"
            },
            {
                "Demolitions": 14740,
                "Exterminations": 397,
                "Time": "2022-10-16T15:44:53.961Z"
            },
            {
                "Demolitions": 15001,
                "Exterminations": 414,
                "Time": "2022-10-23T18:13:43.908Z"
            },
            {
                "Demolitions": 15425,
                "Exterminations": 441,
                "Time": "2022-11-04T06:23:39.000Z"
            },
            {
                "Demolitions": 15509,
                "Exterminations": 449,
                "Time": "2022-11-05T06:13:48.183Z"
            },
            {
                "Demolitions": 16022,
                "Exterminations": 483,
                "Time": "2022-11-15T03:20:05.210Z"
            },
            {
                "Demolitions": 16427,
                "Exterminations": 503,
                "Time": "2022-12-10T16:42:48.521Z"
            },
            {
                "Demolitions": 16755,
                "Exterminations": 508,
                "Time": "2022-12-22T20:27:58.084Z"
            },
            {
                "Demolitions": 17568,
                "Exterminations": 555,
                "Time": "2023-01-16T22:46:16.876Z"
            }
        ],
        "Country": "USA"
    },
    "308063278616281088": {
        "Name": "Exo",
        "Demolitions": 17957,
        "Exterminations": 177,
        "LastUpdate": "2023-01-04T04:57:58.383Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 14690,
                "Exterminations": 137,
                "Time": "2022-09-02T04:37:29.898Z"
            },
            {
                "Demolitions": 15216,
                "Exterminations": 145,
                "Time": "2022-09-20T01:31:44.568Z"
            },
            {
                "Demolitions": 17957,
                "Exterminations": 177,
                "Time": "2023-01-04T04:57:58.383Z"
            }
        ],
        "Country": "Canada"
    },
    "388835119395373057": {
        "Name": "Maccus",
        "Demolitions": 52563,
        "Exterminations": 1901,
        "LastUpdate": "2022-09-23T17:49:00.265Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 51011,
                "Exterminations": 1822,
                "Time": "2022-09-07T02:58:23.030Z"
            },
            {
                "Demolitions": 52563,
                "Exterminations": 1901,
                "Time": "2022-09-23T17:49:00.265Z"
            }
        ]
    },
    "795346101799747615": {
        "Name": "BigWrim",
        "Demolitions": 30009,
        "Exterminations": 605,
        "LastUpdate": "2023-01-19T10:53:23.985Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 19711,
                "Exterminations": 258,
                "Time": "2022-09-06T08:54:23.829Z"
            },
            {
                "Demolitions": 20007,
                "Exterminations": 266,
                "Time": "2022-09-08T19:34:21.539Z"
            },
            {
                "Demolitions": 20500,
                "Exterminations": 283,
                "Time": "2022-09-15T15:16:36.860Z"
            },
            {
                "Demolitions": 21006,
                "Exterminations": 302,
                "Time": "2022-09-19T07:59:45.134Z"
            },
            {
                "Demolitions": 21511,
                "Exterminations": 323,
                "Time": "2022-09-22T13:50:47.021Z"
            },
            {
                "Demolitions": 22022,
                "Exterminations": 339,
                "Time": "2022-10-02T17:51:20.604Z"
            },
            {
                "Demolitions": 23007,
                "Exterminations": 373,
                "Time": "2022-10-17T16:37:42.045Z"
            },
            {
                "Demolitions": 23997,
                "Exterminations": 399,
                "Time": "2022-11-04T09:33:25.214Z"
            },
            {
                "Demolitions": 25386,
                "Exterminations": 445,
                "Time": "2022-11-28T10:56:40.784Z"
            },
            {
                "Demolitions": 26565,
                "Exterminations": 480,
                "Time": "2022-12-14T19:51:10.027Z"
            },
            {
                "Demolitions": 29138,
                "Exterminations": 570,
                "Time": "2023-01-11T20:47:59.707Z"
            },
            {
                "Demolitions": 30009,
                "Exterminations": 605,
                "Time": "2023-01-19T10:53:23.985Z"
            }
        ],
        "Country": "Sweden"
    },
    "738111431152500796": {
        "Name": "bruhbruhlol",
        "Demolitions": 3156,
        "Exterminations": 186,
        "LastUpdate": "2022-09-05T17:04:38.171Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 2385,
                "Exterminations": 104,
                "Time": "2022-09-02T09:52:53.936Z"
            },
            {
                "Demolitions": 2660,
                "Exterminations": 129,
                "Time": "2022-09-03T15:47:56.220Z"
            },
            {
                "Demolitions": 2938,
                "Exterminations": 160,
                "Time": "2022-09-04T22:28:16.688Z"
            },
            {
                "Demolitions": 3156,
                "Exterminations": 186,
                "Time": "2022-09-05T17:04:38.171Z"
            }
        ],
        "Country": "iraq"
    },
    "309741048056512513": {
        "Name": "sknighton",
        "Demolitions": 14627,
        "Exterminations": 38,
        "LastUpdate": "2022-09-02T13:59:24.480Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 14627,
                "Exterminations": 38,
                "Time": "2022-09-02T13:59:24.480Z"
            }
        ]
    },
    "732685420181192824": {
        "Name": "YoJorxyz",
        "Demolitions": 3015,
        "Exterminations": 5,
        "LastUpdate": "2022-09-03T03:53:21.215Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 3015,
                "Exterminations": 5,
                "Time": "2022-09-03T03:53:21.215Z"
            }
        ],
        "Country": "USA"
    },
    "428392024014716939": {
        "Name": "BubblyReaper",
        "Demolitions": 48930,
        "Exterminations": 396,
        "LastUpdate": "2023-01-17T20:40:33.056Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 48930,
                "Exterminations": 396,
                "Time": "2023-01-17T20:40:33.056Z"
            }
        ],
        "Country": "USA"
    },
    "235651437852491776": {
        "Name": "Zacc153",
        "Demolitions": 759,
        "Exterminations": 4,
        "LastUpdate": "2022-09-03T11:30:41.588Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 759,
                "Exterminations": 4,
                "Time": "2022-09-03T11:30:41.588Z"
            }
        ]
    },
    "1010153173966651522": {
        "Name": "Flamboyant",
        "Demolitions": 0,
        "Exterminations": 0,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": []
    },
    "210362320340123649": {
        "Name": "Melodia",
        "Demolitions": 62500,
        "Exterminations": 568,
        "LastUpdate": "2023-01-01T01:49:03.760Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 57533,
                "Exterminations": 459,
                "Time": "2022-09-06T21:20:21.506Z"
            },
            {
                "Demolitions": 60000,
                "Exterminations": 515,
                "Time": "2022-09-30T00:23:23.284Z"
            },
            {
                "Demolitions": 61000,
                "Exterminations": 531,
                "Time": "2022-10-23T21:41:09.825Z"
            },
            {
                "Demolitions": 62500,
                "Exterminations": 568,
                "Time": "2023-01-01T01:49:03.760Z"
            }
        ],
        "Country": "USA"
    },
    "733781664496353291": {
        "Name": "Bolzenkreig",
        "Demolitions": 4963,
        "Exterminations": 146,
        "LastUpdate": "2022-09-29T18:32:50.921Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 4752,
                "Exterminations": 136,
                "Time": "2022-09-05T18:06:57.363Z"
            },
            {
                "Demolitions": 4763,
                "Exterminations": 137,
                "Time": "2022-09-05T18:33:16.263Z"
            },
            {
                "Demolitions": 4779,
                "Exterminations": 138,
                "Time": "2022-09-05T21:39:25.575Z"
            },
            {
                "Demolitions": 4792,
                "Exterminations": 139,
                "Time": "2022-09-06T01:09:51.572Z"
            },
            {
                "Demolitions": 4864,
                "Exterminations": 142,
                "Time": "2022-09-08T17:25:11.114Z"
            },
            {
                "Demolitions": 4992,
                "Exterminations": 146,
                "Time": "2022-09-18T02:29:16.761Z"
            },
            {
                "Demolitions": 4963,
                "Exterminations": 146,
                "Time": "2022-09-29T18:32:50.921Z"
            }
        ],
        "Country": "USA"
    },
    "277895696995188746": {
        "Name": "Gardevoir PÃ¦c",
        "Demolitions": 12345,
        "Exterminations": 461,
        "LastUpdate": "2022-11-09T15:27:09.021Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 10870,
                "Exterminations": 375,
                "Time": "2022-09-06T14:28:04.930Z"
            },
            {
                "Demolitions": 11275,
                "Exterminations": 398,
                "Time": "2022-09-26T16:28:23.726Z"
            },
            {
                "Demolitions": 11665,
                "Exterminations": 423,
                "Time": "2022-10-17T16:58:06.998Z"
            },
            {
                "Demolitions": 12035,
                "Exterminations": 447,
                "Time": "2022-10-26T20:24:33.160Z"
            },
            {
                "Demolitions": 12340,
                "Exterminations": 461,
                "Time": "2022-11-09T15:19:39.325Z"
            },
            {
                "Demolitions": 12345,
                "Exterminations": 461,
                "Time": "2022-11-09T15:27:09.021Z"
            }
        ],
        "Country": "Norway"
    },
    "597879808734789662": {
        "Name": "gugagomes7",
        "Demolitions": 34769,
        "Exterminations": 1071,
        "LastUpdate": "2022-12-05T20:49:40.567Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 29563,
                "Exterminations": 805,
                "Time": "2022-09-06T20:57:51.016Z"
            },
            {
                "Demolitions": 31055,
                "Exterminations": 871,
                "Time": "2022-10-04T20:08:53.441Z"
            },
            {
                "Demolitions": 34769,
                "Exterminations": 1071,
                "Time": "2022-12-05T20:49:40.567Z"
            }
        ]
    },
    "382325410505162762": {
        "Name": "maazyboi",
        "Demolitions": 1958,
        "Exterminations": 7,
        "LastUpdate": "2022-09-07T06:35:41.975Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 1958,
                "Exterminations": 7,
                "Time": "2022-09-07T06:35:41.975Z"
            }
        ],
        "Country": "US"
    },
    "339546382190772236": {
        "Name": "Buddha",
        "Demolitions": 7243,
        "Exterminations": 204,
        "LastUpdate": "2022-09-16T15:09:35.916Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 5656,
                "Exterminations": 27,
                "Time": "2022-09-08T00:33:53.728Z"
            },
            {
                "Demolitions": 6000,
                "Exterminations": 65,
                "Time": "2022-09-08T05:08:39.092Z"
            },
            {
                "Demolitions": 6243,
                "Exterminations": 94,
                "Time": "2022-09-08T08:42:49.342Z"
            },
            {
                "Demolitions": 6519,
                "Exterminations": 126,
                "Time": "2022-09-09T02:04:29.235Z"
            },
            {
                "Demolitions": 6776,
                "Exterminations": 156,
                "Time": "2022-09-09T04:39:22.008Z"
            },
            {
                "Demolitions": 7006,
                "Exterminations": 183,
                "Time": "2022-09-11T04:37:52.074Z"
            },
            {
                "Demolitions": 7243,
                "Exterminations": 204,
                "Time": "2022-09-16T15:09:35.916Z"
            }
        ]
    },
    "272472994243280896": {
        "Name": "Form. (Buddha Sucks)",
        "Demolitions": 6836,
        "Exterminations": 20,
        "LastUpdate": "2022-09-09T04:46:58.065Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 6836,
                "Exterminations": 20,
                "Time": "2022-09-09T04:46:58.065Z"
            }
        ]
    },
    "416439146484334592": {
        "Name": "Kippy",
        "Demolitions": 10039,
        "Exterminations": 114,
        "LastUpdate": "2022-11-10T20:54:32.184Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 8452,
                "Exterminations": 28,
                "Time": "2022-09-09T18:15:29.310Z"
            },
            {
                "Demolitions": 8880,
                "Exterminations": 57,
                "Time": "2022-09-23T14:19:29.640Z"
            },
            {
                "Demolitions": 10039,
                "Exterminations": 114,
                "Time": "2022-11-10T20:54:32.184Z"
            }
        ]
    },
    "338521950798348298": {
        "Name": "MikeADei",
        "Demolitions": 5488,
        "Exterminations": 100,
        "LastUpdate": "2022-09-10T07:06:36.018Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 5488,
                "Exterminations": 100,
                "Time": "2022-09-10T07:06:36.018Z"
            }
        ]
    },
    "478662587857502232": {
        "Name": "GATadam",
        "Demolitions": 14008,
        "Exterminations": 221,
        "LastUpdate": "2023-01-05T22:07:54.944Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 11444,
                "Exterminations": 133,
                "Time": "2022-09-10T22:00:30.360Z"
            },
            {
                "Demolitions": 12002,
                "Exterminations": 143,
                "Time": "2022-10-03T11:54:52.228Z"
            },
            {
                "Demolitions": 13005,
                "Exterminations": 173,
                "Time": "2022-11-17T21:42:07.901Z"
            },
            {
                "Demolitions": 14008,
                "Exterminations": 221,
                "Time": "2023-01-05T22:07:54.944Z"
            }
        ]
    },
    "248908904182972423": {
        "Name": "Daryan5300",
        "Demolitions": 4866,
        "Exterminations": 36,
        "LastUpdate": "2022-09-12T13:32:58.489Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 4729,
                "Exterminations": 23,
                "Time": "2022-09-11T00:30:19.529Z"
            },
            {
                "Demolitions": 4852,
                "Exterminations": 36,
                "Time": "2022-09-11T01:32:00.374Z"
            },
            {
                "Demolitions": 4866,
                "Exterminations": 36,
                "Time": "2022-09-12T13:32:58.489Z"
            }
        ]
    },
    "523236986363052052": {
        "Name": "Bread.Pudding",
        "Demolitions": 14788,
        "Exterminations": 661,
        "LastUpdate": "2023-01-31T06:32:38.895Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 10003,
                "Exterminations": 409,
                "Time": "2022-09-11T11:34:23.675Z"
            },
            {
                "Demolitions": 10107,
                "Exterminations": 415,
                "Time": "2022-09-12T19:18:29.970Z"
            },
            {
                "Demolitions": 10342,
                "Exterminations": 430,
                "Time": "2022-09-15T10:21:27.281Z"
            },
            {
                "Demolitions": 10596,
                "Exterminations": 450,
                "Time": "2022-09-16T09:55:57.278Z"
            },
            {
                "Demolitions": 10868,
                "Exterminations": 466,
                "Time": "2022-09-18T11:22:20.912Z"
            },
            {
                "Demolitions": 11004,
                "Exterminations": 476,
                "Time": "2022-09-19T09:53:21.472Z"
            },
            {
                "Demolitions": 11229,
                "Exterminations": 489,
                "Time": "2022-09-23T08:15:32.973Z"
            },
            {
                "Demolitions": 11410,
                "Exterminations": 503,
                "Time": "2022-09-24T05:02:07.119Z"
            },
            {
                "Demolitions": 11688,
                "Exterminations": 522,
                "Time": "2022-09-26T10:05:43.052Z"
            },
            {
                "Demolitions": 12006,
                "Exterminations": 539,
                "Time": "2022-09-30T14:54:39.946Z"
            },
            {
                "Demolitions": 12256,
                "Exterminations": 547,
                "Time": "2022-10-08T07:44:53.822Z"
            },
            {
                "Demolitions": 12615,
                "Exterminations": 566,
                "Time": "2022-10-20T07:13:35.237Z"
            },
            {
                "Demolitions": 13081,
                "Exterminations": 587,
                "Time": "2022-11-21T12:35:08.227Z"
            },
            {
                "Demolitions": 13514,
                "Exterminations": 601,
                "Time": "2022-12-28T20:52:07.388Z"
            },
            {
                "Demolitions": 14065,
                "Exterminations": 631,
                "Time": "2023-01-14T05:54:40.038Z"
            },
            {
                "Demolitions": 14367,
                "Exterminations": 646,
                "Time": "2023-01-20T08:09:13.755Z"
            },
            {
                "Demolitions": 14436,
                "Exterminations": 650,
                "Time": "2023-01-21T05:18:11.027Z"
            },
            {
                "Demolitions": 14788,
                "Exterminations": 661,
                "Time": "2023-01-31T06:32:38.895Z"
            }
        ],
        "Country": "NZL"
    },
    "193013092320411648": {
        "Name": "wastedsoviet",
        "Demolitions": 5197,
        "Exterminations": 48,
        "LastUpdate": "2022-12-01T23:38:08.816Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 4500,
                "Exterminations": 41,
                "Time": "2022-09-11T12:17:49.289Z"
            },
            {
                "Demolitions": 4556,
                "Exterminations": 43,
                "Time": "2022-09-12T19:23:54.074Z"
            },
            {
                "Demolitions": 4689,
                "Exterminations": 43,
                "Time": "2022-09-25T21:57:35.824Z"
            },
            {
                "Demolitions": 5197,
                "Exterminations": 48,
                "Time": "2022-12-01T23:38:08.816Z"
            }
        ],
        "Country": "GER"
    },
    "763748990004887553": {
        "Name": "Contempt23",
        "Demolitions": 20280,
        "Exterminations": 950,
        "LastUpdate": "2023-02-01T19:02:10.890Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 16112,
                "Exterminations": 708,
                "Time": "2022-10-25T07:36:11.116Z"
            },
            {
                "Demolitions": 20280,
                "Exterminations": 950,
                "Time": "2023-02-01T19:02:10.890Z"
            }
        ]
    },
    "734634838119809124": {
        "Name": "Phlample17",
        "Demolitions": 0,
        "Exterminations": 0,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": []
    },
    "106475191336488960": {
        "Name": "the notorious i.c.h.i.",
        "Demolitions": 33972,
        "Exterminations": 1466,
        "LastUpdate": "2023-01-08T01:03:19.845Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 31392,
                "Exterminations": 1351,
                "Time": "2022-09-16T18:10:48.955Z"
            },
            {
                "Demolitions": 32060,
                "Exterminations": 1372,
                "Time": "2022-10-13T23:41:31.957Z"
            },
            {
                "Demolitions": 33398,
                "Exterminations": 1449,
                "Time": "2022-12-10T13:18:43.787Z"
            },
            {
                "Demolitions": 33972,
                "Exterminations": 1466,
                "Time": "2023-01-08T01:03:19.845Z"
            }
        ]
    },
    "385467955464503297": {
        "Name": "jcsys",
        "Demolitions": 10069,
        "Exterminations": 76,
        "LastUpdate": "2022-10-31T14:46:35.829Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 8417,
                "Exterminations": 43,
                "Time": "2022-09-16T12:43:04.469Z"
            },
            {
                "Demolitions": 10069,
                "Exterminations": 76,
                "Time": "2022-10-31T14:46:35.829Z"
            }
        ]
    },
    "564081426346278942": {
        "Name": "Risen_Imfrench",
        "Demolitions": 772,
        "Exterminations": 2,
        "LastUpdate": "2022-09-17T17:16:16.196Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 772,
                "Exterminations": 2,
                "Time": "2022-09-17T17:16:16.196Z"
            }
        ]
    },
    "759206063814737950": {
        "Name": "QuietNoise541",
        "Demolitions": 26977,
        "Exterminations": 2628,
        "LastUpdate": "2023-02-02T04:07:54.559Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 12754,
                "Exterminations": 1008,
                "Time": "2022-09-24T11:43:54.351Z"
            },
            {
                "Demolitions": 13166,
                "Exterminations": 1051,
                "Time": "2022-09-26T03:20:12.983Z"
            },
            {
                "Demolitions": 13689,
                "Exterminations": 1112,
                "Time": "2022-09-28T03:52:18.720Z"
            },
            {
                "Demolitions": 14032,
                "Exterminations": 1154,
                "Time": "2022-09-30T03:34:59.696Z"
            },
            {
                "Demolitions": 14227,
                "Exterminations": 1176,
                "Time": "2022-09-30T16:42:36.560Z"
            },
            {
                "Demolitions": 14360,
                "Exterminations": 1192,
                "Time": "2022-10-01T03:55:59.112Z"
            },
            {
                "Demolitions": 14804,
                "Exterminations": 1243,
                "Time": "2022-10-05T02:44:13.119Z"
            },
            {
                "Demolitions": 15011,
                "Exterminations": 1267,
                "Time": "2022-10-05T17:51:24.047Z"
            },
            {
                "Demolitions": 15859,
                "Exterminations": 1363,
                "Time": "2022-10-12T03:43:36.884Z"
            },
            {
                "Demolitions": 16575,
                "Exterminations": 1443,
                "Time": "2022-10-18T20:01:26.084Z"
            },
            {
                "Demolitions": 17061,
                "Exterminations": 1500,
                "Time": "2022-10-23T03:26:47.146Z"
            },
            {
                "Demolitions": 17324,
                "Exterminations": 1533,
                "Time": "2022-10-26T03:57:19.859Z"
            },
            {
                "Demolitions": 17777,
                "Exterminations": 1585,
                "Time": "2022-10-29T04:04:25.255Z"
            },
            {
                "Demolitions": 17955,
                "Exterminations": 1606,
                "Time": "2022-10-29T18:19:57.945Z"
            },
            {
                "Demolitions": 18012,
                "Exterminations": 1612,
                "Time": "2022-10-30T03:05:41.724Z"
            },
            {
                "Demolitions": 18201,
                "Exterminations": 1631,
                "Time": "2022-10-31T03:58:34.391Z"
            },
            {
                "Demolitions": 18439,
                "Exterminations": 1657,
                "Time": "2022-11-02T14:23:04.850Z"
            },
            {
                "Demolitions": 18941,
                "Exterminations": 1713,
                "Time": "2022-11-07T04:34:36.462Z"
            },
            {
                "Demolitions": 19050,
                "Exterminations": 1726,
                "Time": "2022-11-08T04:56:56.312Z"
            },
            {
                "Demolitions": 19294,
                "Exterminations": 1754,
                "Time": "2022-11-09T19:54:22.825Z"
            },
            {
                "Demolitions": 19431,
                "Exterminations": 1771,
                "Time": "2022-11-10T04:52:02.512Z"
            },
            {
                "Demolitions": 19487,
                "Exterminations": 1778,
                "Time": "2022-11-11T03:30:50.589Z"
            },
            {
                "Demolitions": 19993,
                "Exterminations": 1831,
                "Time": "2022-11-13T04:55:03.516Z"
            },
            {
                "Demolitions": 20141,
                "Exterminations": 1847,
                "Time": "2022-11-13T22:06:11.799Z"
            },
            {
                "Demolitions": 20373,
                "Exterminations": 1875,
                "Time": "2022-11-14T04:54:45.567Z"
            },
            {
                "Demolitions": 20529,
                "Exterminations": 1895,
                "Time": "2022-11-15T04:51:21.146Z"
            },
            {
                "Demolitions": 20623,
                "Exterminations": 1904,
                "Time": "2022-11-16T03:33:35.469Z"
            },
            {
                "Demolitions": 21001,
                "Exterminations": 1947,
                "Time": "2022-11-17T04:12:54.630Z"
            },
            {
                "Demolitions": 21072,
                "Exterminations": 1956,
                "Time": "2022-11-17T04:44:06.722Z"
            },
            {
                "Demolitions": 21322,
                "Exterminations": 1983,
                "Time": "2022-11-20T04:43:27.529Z"
            },
            {
                "Demolitions": 21500,
                "Exterminations": 2003,
                "Time": "2022-11-21T05:01:41.969Z"
            },
            {
                "Demolitions": 21657,
                "Exterminations": 2017,
                "Time": "2022-11-23T19:49:41.835Z"
            },
            {
                "Demolitions": 21855,
                "Exterminations": 2039,
                "Time": "2022-11-24T05:32:01.575Z"
            },
            {
                "Demolitions": 21974,
                "Exterminations": 2053,
                "Time": "2022-11-25T04:38:08.600Z"
            },
            {
                "Demolitions": 22126,
                "Exterminations": 2072,
                "Time": "2022-11-25T21:36:05.389Z"
            },
            {
                "Demolitions": 22314,
                "Exterminations": 2093,
                "Time": "2022-11-26T00:24:11.999Z"
            },
            {
                "Demolitions": 22474,
                "Exterminations": 2112,
                "Time": "2022-11-28T04:51:21.610Z"
            },
            {
                "Demolitions": 22577,
                "Exterminations": 2122,
                "Time": "2022-11-29T04:55:57.414Z"
            },
            {
                "Demolitions": 22662,
                "Exterminations": 2132,
                "Time": "2022-11-30T04:56:30.585Z"
            },
            {
                "Demolitions": 22882,
                "Exterminations": 2150,
                "Time": "2022-12-07T04:29:49.264Z"
            },
            {
                "Demolitions": 23424,
                "Exterminations": 2208,
                "Time": "2022-12-25T05:08:45.033Z"
            },
            {
                "Demolitions": 23516,
                "Exterminations": 2219,
                "Time": "2022-12-31T05:16:42.288Z"
            },
            {
                "Demolitions": 24034,
                "Exterminations": 2281,
                "Time": "2023-01-03T04:48:05.328Z"
            },
            {
                "Demolitions": 24121,
                "Exterminations": 2291,
                "Time": "2023-01-03T14:47:56.998Z"
            },
            {
                "Demolitions": 24212,
                "Exterminations": 2301,
                "Time": "2023-01-03T17:29:30.950Z"
            },
            {
                "Demolitions": 24363,
                "Exterminations": 2319,
                "Time": "2023-01-04T21:44:47.959Z"
            },
            {
                "Demolitions": 24633,
                "Exterminations": 2352,
                "Time": "2023-01-05T20:28:13.256Z"
            },
            {
                "Demolitions": 24813,
                "Exterminations": 2374,
                "Time": "2023-01-07T16:35:44.186Z"
            },
            {
                "Demolitions": 25100,
                "Exterminations": 2407,
                "Time": "2023-01-09T22:17:04.718Z"
            },
            {
                "Demolitions": 25245,
                "Exterminations": 2422,
                "Time": "2023-01-11T00:59:52.118Z"
            },
            {
                "Demolitions": 25321,
                "Exterminations": 2432,
                "Time": "2023-01-11T04:56:11.940Z"
            },
            {
                "Demolitions": 25469,
                "Exterminations": 2449,
                "Time": "2023-01-12T04:26:51.230Z"
            },
            {
                "Demolitions": 25715,
                "Exterminations": 2478,
                "Time": "2023-01-19T03:33:49.674Z"
            },
            {
                "Demolitions": 25918,
                "Exterminations": 2501,
                "Time": "2023-01-21T00:23:03.465Z"
            },
            {
                "Demolitions": 26056,
                "Exterminations": 2517,
                "Time": "2023-01-23T02:33:33.066Z"
            },
            {
                "Demolitions": 26372,
                "Exterminations": 2555,
                "Time": "2023-01-24T22:37:01.318Z"
            },
            {
                "Demolitions": 26451,
                "Exterminations": 2564,
                "Time": "2023-01-28T04:52:04.908Z"
            },
            {
                "Demolitions": 26591,
                "Exterminations": 2582,
                "Time": "2023-01-30T15:53:39.297Z"
            },
            {
                "Demolitions": 26977,
                "Exterminations": 2628,
                "Time": "2023-02-02T04:07:54.559Z"
            }
        ]
    },
    "445851156460339210": {
        "Name": "GettusRektus",
        "Demolitions": 13169,
        "Exterminations": 1003,
        "LastUpdate": "2022-11-11T04:04:28.468Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 3536,
                "Exterminations": 148,
                "Time": "2022-09-25T15:52:02.530Z"
            },
            {
                "Demolitions": 4152,
                "Exterminations": 207,
                "Time": "2022-09-27T01:43:13.166Z"
            },
            {
                "Demolitions": 5062,
                "Exterminations": 301,
                "Time": "2022-09-30T01:17:58.690Z"
            },
            {
                "Demolitions": 10229,
                "Exterminations": 767,
                "Time": "2022-10-25T22:21:09.730Z"
            },
            {
                "Demolitions": 13169,
                "Exterminations": 1003,
                "Time": "2022-11-11T04:04:28.468Z"
            }
        ],
        "Country": "Netherlands"
    },
    "535614584615206912": {
        "Name": "Buggy",
        "Demolitions": 1070,
        "Exterminations": 105,
        "LastUpdate": "2022-09-28T19:54:56.331Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 6455,
                "Exterminations": 35,
                "Time": "2022-09-28T19:43:57.526Z"
            },
            {
                "Demolitions": 1070,
                "Exterminations": 105,
                "Time": "2022-09-28T19:54:56.331Z"
            }
        ]
    },
    "157946903735173120": {
        "Name": "Nightore99",
        "Demolitions": 1100,
        "Exterminations": 0,
        "LastUpdate": "2022-10-04T16:10:34.387Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 1100,
                "Exterminations": 0,
                "Time": "2022-10-04T16:10:34.387Z"
            }
        ]
    },
    "524798247034683429": {
        "Name": "dAndrighetto",
        "Demolitions": 14117,
        "Exterminations": 855,
        "LastUpdate": "2022-12-13T08:51:02.023Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 12117,
                "Exterminations": 698,
                "Time": "2022-10-07T05:00:18.825Z"
            },
            {
                "Demolitions": 13005,
                "Exterminations": 771,
                "Time": "2022-10-29T22:55:40.069Z"
            },
            {
                "Demolitions": 14117,
                "Exterminations": 855,
                "Time": "2022-12-13T08:51:02.023Z"
            }
        ]
    },
    "265511146612719617": {
        "Name": "Dinger",
        "Demolitions": 10001,
        "Exterminations": 144,
        "LastUpdate": "2022-11-01T03:07:50.564Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 9386,
                "Exterminations": 129,
                "Time": "2022-10-08T06:57:07.798Z"
            },
            {
                "Demolitions": 10001,
                "Exterminations": 144,
                "Time": "2022-11-01T03:07:50.564Z"
            }
        ]
    },
    "569825247361105921": {
        "Name": "Siodzo.",
        "Demolitions": 0,
        "Exterminations": 0,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 0,
        "History": []
    },
    "346982944038191115": {
        "Name": "DL72",
        "Demolitions": 17764,
        "Exterminations": 406,
        "LastUpdate": "2022-11-18T16:11:34.321Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 16734,
                "Exterminations": 359,
                "Time": "2022-10-14T18:54:41.604Z"
            },
            {
                "Demolitions": 16914,
                "Exterminations": 373,
                "Time": "2022-10-15T02:13:52.534Z"
            },
            {
                "Demolitions": 17163,
                "Exterminations": 390,
                "Time": "2022-10-18T20:16:00.102Z"
            },
            {
                "Demolitions": 17331,
                "Exterminations": 395,
                "Time": "2022-10-26T16:44:20.161Z"
            },
            {
                "Demolitions": 17764,
                "Exterminations": 406,
                "Time": "2022-11-18T16:11:34.321Z"
            }
        ]
    },
    "532761254469828618": {
        "Name": "Piss (mcdaniels)",
        "Demolitions": 28602,
        "Exterminations": 330,
        "LastUpdate": "2022-12-06T03:05:43.281Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 27704,
                "Exterminations": 305,
                "Time": "2022-10-25T15:22:10.050Z"
            },
            {
                "Demolitions": 28015,
                "Exterminations": 319,
                "Time": "2022-11-11T06:54:05.115Z"
            },
            {
                "Demolitions": 28602,
                "Exterminations": 330,
                "Time": "2022-12-06T03:05:43.281Z"
            }
        ]
    },
    "471781848100372491": {
        "Name": "Grizzly",
        "Demolitions": 10000,
        "Exterminations": 662,
        "LastUpdate": "2023-01-24T05:43:53.442Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 4149,
                "Exterminations": 274,
                "Time": "2022-10-17T01:46:54.932Z"
            },
            {
                "Demolitions": 4606,
                "Exterminations": 315,
                "Time": "2022-10-19T08:05:52.573Z"
            },
            {
                "Demolitions": 5119,
                "Exterminations": 367,
                "Time": "2022-10-20T20:02:57.642Z"
            },
            {
                "Demolitions": 5704,
                "Exterminations": 400,
                "Time": "2022-11-02T02:43:16.840Z"
            },
            {
                "Demolitions": 7038,
                "Exterminations": 485,
                "Time": "2022-11-25T02:54:13.625Z"
            },
            {
                "Demolitions": 8794,
                "Exterminations": 601,
                "Time": "2022-12-30T03:27:40.248Z"
            },
            {
                "Demolitions": 9351,
                "Exterminations": 624,
                "Time": "2023-01-12T05:57:40.357Z"
            },
            {
                "Demolitions": 10000,
                "Exterminations": 662,
                "Time": "2023-01-24T05:43:53.442Z"
            }
        ]
    },
    "971051630034321408": {
        "Name": "Supernova-96",
        "Demolitions": 10000,
        "Exterminations": 190,
        "LastUpdate": "2022-10-19T22:02:56.074Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 10000,
                "Exterminations": 190,
                "Time": "2022-10-19T22:02:56.074Z"
            }
        ]
    },
    "543716637132455946": {
        "Name": "Reevesy_1",
        "Demolitions": 11771,
        "Exterminations": 12,
        "LastUpdate": "2022-10-20T14:19:25.612Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 11771,
                "Exterminations": 12,
                "Time": "2022-10-20T14:19:25.612Z"
            }
        ]
    },
    "343402541893287936": {
        "Name": "Haxzploid",
        "Demolitions": 134522,
        "Exterminations": 10263,
        "LastUpdate": "2022-11-29T22:28:06.193Z",
        "Authorized": 2,
        "History": [
            {
                "Demolitions": 131560,
                "Exterminations": 9993,
                "Time": "2022-10-23T18:49:15.953Z"
            },
            {
                "Demolitions": 134522,
                "Exterminations": 10263,
                "Time": "2022-11-29T22:28:06.193Z"
            }
        ]
    },
    "332714888940093443": {
        "Name": "Bilko367",
        "Demolitions": 5856,
        "Exterminations": 26,
        "LastUpdate": "2022-11-24T04:13:57.682Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 5627,
                "Exterminations": 25,
                "Time": "2022-10-23T01:24:51.875Z"
            },
            {
                "Demolitions": 5680,
                "Exterminations": 25,
                "Time": "2022-10-29T10:23:10.188Z"
            },
            {
                "Demolitions": 5856,
                "Exterminations": 26,
                "Time": "2022-11-24T04:13:57.682Z"
            }
        ],
        "Country": "AUS"
    },
    "413912835811442690": {
        "Name": "YE_ETxD",
        "Demolitions": 1014,
        "Exterminations": 42,
        "LastUpdate": "2022-10-23T17:28:32.180Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 1014,
                "Exterminations": 42,
                "Time": "2022-10-23T17:28:32.180Z"
            }
        ]
    },
    "119586382397046789": {
        "Name": "Petedz",
        "Demolitions": 0,
        "Exterminations": 0,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": []
    },
    "316813270835003395": {
        "Name": "Leumas",
        "Demolitions": 0,
        "Exterminations": 0,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": []
    },
    "643402202802552832": {
        "Name": "Nikoala3451",
        "Demolitions": 12006,
        "Exterminations": 893,
        "LastUpdate": "2022-10-31T13:55:50.821Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 8197,
                "Exterminations": 392,
                "Time": "2022-10-25T11:26:34.950Z"
            },
            {
                "Demolitions": 10000,
                "Exterminations": 627,
                "Time": "2022-10-29T16:28:16.850Z"
            },
            {
                "Demolitions": 10625,
                "Exterminations": 706,
                "Time": "2022-10-29T23:05:33.608Z"
            },
            {
                "Demolitions": 12006,
                "Exterminations": 893,
                "Time": "2022-10-31T13:55:50.821Z"
            }
        ],
        "Country": "FRA"
    },
    "279708675529244682": {
        "Name": "Kelvin",
        "Demolitions": 13060,
        "Exterminations": 60,
        "LastUpdate": "2022-10-26T08:23:47.331Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 13060,
                "Exterminations": 60,
                "Time": "2022-10-26T08:23:47.331Z"
            }
        ]
    },
    "1034806809078280213": {
        "Name": "Velvet-crowe33",
        "Demolitions": 16148,
        "Exterminations": 582,
        "LastUpdate": "2023-02-02T02:15:43.469Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 8571,
                "Exterminations": 41,
                "Time": "2022-10-29T17:13:06.146Z"
            },
            {
                "Demolitions": 10001,
                "Exterminations": 103,
                "Time": "2022-11-12T04:31:25.691Z"
            },
            {
                "Demolitions": 10172,
                "Exterminations": 117,
                "Time": "2022-11-13T05:29:40.436Z"
            },
            {
                "Demolitions": 10733,
                "Exterminations": 160,
                "Time": "2022-11-17T22:25:48.504Z"
            },
            {
                "Demolitions": 11320,
                "Exterminations": 211,
                "Time": "2022-11-20T18:05:49.059Z"
            },
            {
                "Demolitions": 13012,
                "Exterminations": 396,
                "Time": "2022-11-26T18:11:17.072Z"
            },
            {
                "Demolitions": 13505,
                "Exterminations": 419,
                "Time": "2022-12-11T22:36:24.988Z"
            },
            {
                "Demolitions": 14001,
                "Exterminations": 448,
                "Time": "2022-12-18T19:05:20.622Z"
            },
            {
                "Demolitions": 14332,
                "Exterminations": 466,
                "Time": "2022-12-28T17:20:04.221Z"
            },
            {
                "Demolitions": 14332,
                "Exterminations": 466,
                "Time": "2022-12-28T17:20:04.874Z"
            },
            {
                "Demolitions": 15363,
                "Exterminations": 545,
                "Time": "2023-01-12T03:41:03.854Z"
            },
            {
                "Demolitions": 15704,
                "Exterminations": 561,
                "Time": "2023-01-24T18:18:27.300Z"
            },
            {
                "Demolitions": 16001,
                "Exterminations": 581,
                "Time": "2023-01-26T01:43:46.884Z"
            },
            {
                "Demolitions": 16148,
                "Exterminations": 582,
                "Time": "2023-02-02T02:15:43.469Z"
            }
        ]
    },
    "580246262285205514": {
        "Name": "der0ktopus",
        "Demolitions": 2829,
        "Exterminations": 24,
        "LastUpdate": "2022-10-29T20:04:24.869Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 2829,
                "Exterminations": 24,
                "Time": "2022-10-29T20:04:24.869Z"
            }
        ]
    },
    "626310492058550273": {
        "Name": "Bonah",
        "Demolitions": 9340,
        "Exterminations": 343,
        "LastUpdate": "2022-10-29T21:05:11.133Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 9340,
                "Exterminations": 343,
                "Time": "2022-10-29T21:05:11.133Z"
            }
        ]
    },
    "705859393274511391": {
        "Name": "Guillaume_LP",
        "Demolitions": 11097,
        "Exterminations": 6,
        "LastUpdate": "2023-02-03T00:04:27.997Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 10150,
                "Exterminations": 4,
                "Time": "2022-11-01T13:29:17.866Z"
            },
            {
                "Demolitions": 11097,
                "Exterminations": 6,
                "Time": "2023-02-03T00:04:27.997Z"
            }
        ]
    },
    "207606395909046272": {
        "Name": "Hookey6",
        "Demolitions": 17895,
        "Exterminations": 42,
        "LastUpdate": "2022-11-04T14:57:30.299Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 17895,
                "Exterminations": 42,
                "Time": "2022-11-04T14:57:30.299Z"
            }
        ]
    },
    "316905232376266762": {
        "Name": "Sargon",
        "Demolitions": 6034,
        "Exterminations": 82,
        "LastUpdate": "2023-01-26T22:15:49.139Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 5026,
                "Exterminations": 67,
                "Time": "2022-11-07T22:53:28.903Z"
            },
            {
                "Demolitions": 5078,
                "Exterminations": 67,
                "Time": "2022-11-23T16:58:11.830Z"
            },
            {
                "Demolitions": 5878,
                "Exterminations": 79,
                "Time": "2023-01-17T15:04:38.908Z"
            },
            {
                "Demolitions": 6034,
                "Exterminations": 82,
                "Time": "2023-01-26T22:15:49.139Z"
            }
        ]
    },
    "312830347962351617": {
        "Name": "MRzoska",
        "Demolitions": 20516,
        "Exterminations": 1674,
        "LastUpdate": "2023-02-02T23:36:01.325Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 10000,
                "Exterminations": 693,
                "Time": "2022-11-09T12:38:26.362Z"
            },
            {
                "Demolitions": 10022,
                "Exterminations": 694,
                "Time": "2022-11-09T19:57:43.914Z"
            },
            {
                "Demolitions": 10128,
                "Exterminations": 700,
                "Time": "2022-11-09T22:52:39.871Z"
            },
            {
                "Demolitions": 10215,
                "Exterminations": 709,
                "Time": "2022-11-10T00:46:18.258Z"
            },
            {
                "Demolitions": 10449,
                "Exterminations": 734,
                "Time": "2022-11-10T22:08:33.342Z"
            },
            {
                "Demolitions": 10977,
                "Exterminations": 773,
                "Time": "2022-11-15T23:47:06.830Z"
            },
            {
                "Demolitions": 11103,
                "Exterminations": 775,
                "Time": "2022-11-16T00:43:10.996Z"
            },
            {
                "Demolitions": 11098,
                "Exterminations": 781,
                "Time": "2022-11-18T16:54:47.851Z"
            },
            {
                "Demolitions": 11287,
                "Exterminations": 803,
                "Time": "2022-11-19T01:08:15.840Z"
            },
            {
                "Demolitions": 11348,
                "Exterminations": 811,
                "Time": "2022-11-19T01:44:28.878Z"
            },
            {
                "Demolitions": 11739,
                "Exterminations": 838,
                "Time": "2022-11-25T02:15:57.827Z"
            },
            {
                "Demolitions": 12018,
                "Exterminations": 863,
                "Time": "2022-11-30T21:02:19.417Z"
            },
            {
                "Demolitions": 12204,
                "Exterminations": 882,
                "Time": "2022-12-02T02:38:04.354Z"
            },
            {
                "Demolitions": 12204,
                "Exterminations": 882,
                "Time": "2022-12-02T02:39:08.737Z"
            },
            {
                "Demolitions": 12352,
                "Exterminations": 899,
                "Time": "2022-12-11T03:00:03.883Z"
            },
            {
                "Demolitions": 12352,
                "Exterminations": 899,
                "Time": "2022-12-11T03:00:48.685Z"
            },
            {
                "Demolitions": 12352,
                "Exterminations": 899,
                "Time": "2022-12-11T03:01:16.461Z"
            },
            {
                "Demolitions": 12363,
                "Exterminations": 900,
                "Time": "2022-12-11T03:15:44.961Z"
            },
            {
                "Demolitions": 12539,
                "Exterminations": 920,
                "Time": "2022-12-12T04:50:32.833Z"
            },
            {
                "Demolitions": 12700,
                "Exterminations": 942,
                "Time": "2022-12-13T09:23:23.059Z"
            },
            {
                "Demolitions": 12756,
                "Exterminations": 949,
                "Time": "2022-12-13T09:42:35.412Z"
            },
            {
                "Demolitions": 12978,
                "Exterminations": 976,
                "Time": "2022-12-13T12:07:29.711Z"
            },
            {
                "Demolitions": 13183,
                "Exterminations": 1000,
                "Time": "2022-12-13T16:33:40.418Z"
            },
            {
                "Demolitions": 13220,
                "Exterminations": 1004,
                "Time": "2022-12-13T19:30:17.597Z"
            },
            {
                "Demolitions": 13390,
                "Exterminations": 1024,
                "Time": "2022-12-14T21:44:37.396Z"
            },
            {
                "Demolitions": 13403,
                "Exterminations": 1025,
                "Time": "2022-12-14T21:53:47.950Z"
            },
            {
                "Demolitions": 13773,
                "Exterminations": 1061,
                "Time": "2022-12-20T00:08:38.700Z"
            },
            {
                "Demolitions": 14131,
                "Exterminations": 1094,
                "Time": "2022-12-22T00:36:52.733Z"
            },
            {
                "Demolitions": 14192,
                "Exterminations": 1100,
                "Time": "2022-12-22T23:40:31.743Z"
            },
            {
                "Demolitions": 14331,
                "Exterminations": 1115,
                "Time": "2022-12-23T17:54:16.683Z"
            },
            {
                "Demolitions": 14416,
                "Exterminations": 1122,
                "Time": "2022-12-24T00:34:16.390Z"
            },
            {
                "Demolitions": 14535,
                "Exterminations": 1134,
                "Time": "2022-12-25T14:47:07.847Z"
            },
            {
                "Demolitions": 15000,
                "Exterminations": 1185,
                "Time": "2022-12-26T00:38:12.918Z"
            },
            {
                "Demolitions": 16009,
                "Exterminations": 1271,
                "Time": "2023-01-02T01:03:12.781Z"
            },
            {
                "Demolitions": 16009,
                "Exterminations": 1271,
                "Time": "2023-01-02T01:03:54.781Z"
            },
            {
                "Demolitions": 16474,
                "Exterminations": 1300,
                "Time": "2023-01-08T00:41:11.144Z"
            },
            {
                "Demolitions": 17000,
                "Exterminations": 1338,
                "Time": "2023-01-10T23:02:30.073Z"
            },
            {
                "Demolitions": 17627,
                "Exterminations": 1402,
                "Time": "2023-01-13T00:01:29.814Z"
            },
            {
                "Demolitions": 18015,
                "Exterminations": 1440,
                "Time": "2023-01-17T18:39:45.198Z"
            },
            {
                "Demolitions": 18843,
                "Exterminations": 1500,
                "Time": "2023-01-22T19:33:02.101Z"
            },
            {
                "Demolitions": 19022,
                "Exterminations": 1517,
                "Time": "2023-01-23T00:07:55.520Z"
            },
            {
                "Demolitions": 20011,
                "Exterminations": 1618,
                "Time": "2023-01-29T13:15:39.549Z"
            },
            {
                "Demolitions": 20516,
                "Exterminations": 1674,
                "Time": "2023-02-02T23:36:01.325Z"
            }
        ],
        "Country": "Finland"
    },
    "299212477575725056": {
        "Name": "Overpeek",
        "Demolitions": 5073,
        "Exterminations": 266,
        "LastUpdate": "2023-01-17T20:17:09.076Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 3422,
                "Exterminations": 195,
                "Time": "2022-11-09T01:14:45.446Z"
            },
            {
                "Demolitions": 3562,
                "Exterminations": 201,
                "Time": "2022-11-12T15:40:06.220Z"
            },
            {
                "Demolitions": 3684,
                "Exterminations": 203,
                "Time": "2022-11-18T16:53:54.222Z"
            },
            {
                "Demolitions": 3829,
                "Exterminations": 219,
                "Time": "2022-11-19T01:07:51.813Z"
            },
            {
                "Demolitions": 4009,
                "Exterminations": 228,
                "Time": "2022-11-30T21:02:16.805Z"
            },
            {
                "Demolitions": 4009,
                "Exterminations": 228,
                "Time": "2022-12-01T18:26:34.391Z"
            },
            {
                "Demolitions": 4376,
                "Exterminations": 247,
                "Time": "2022-12-11T02:59:54.201Z"
            },
            {
                "Demolitions": 5073,
                "Exterminations": 266,
                "Time": "2023-01-17T20:17:09.076Z"
            }
        ],
        "Country": "Finland"
    },
    "267350202799751169": {
        "Name": "Sardinooo",
        "Demolitions": 2059,
        "Exterminations": 119,
        "LastUpdate": "2022-12-20T22:38:33.512Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 754,
                "Exterminations": 40,
                "Time": "2022-11-09T01:36:18.616Z"
            },
            {
                "Demolitions": 941,
                "Exterminations": 51,
                "Time": "2022-11-19T01:42:14.396Z"
            },
            {
                "Demolitions": 1554,
                "Exterminations": 77,
                "Time": "2022-12-13T11:21:24.006Z"
            },
            {
                "Demolitions": 1880,
                "Exterminations": 104,
                "Time": "2022-12-18T22:50:14.743Z"
            },
            {
                "Demolitions": 2059,
                "Exterminations": 119,
                "Time": "2022-12-20T22:38:33.512Z"
            }
        ]
    },
    "722972348063547443": {
        "Name": "RlmJobBob",
        "Demolitions": 22430,
        "Exterminations": 1926,
        "LastUpdate": "2023-02-01T04:51:48.982Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 11515,
                "Exterminations": 891,
                "Time": "2022-11-14T20:21:01.012Z"
            },
            {
                "Demolitions": 11792,
                "Exterminations": 918,
                "Time": "2022-11-17T03:30:39.568Z"
            },
            {
                "Demolitions": 12182,
                "Exterminations": 959,
                "Time": "2022-11-19T04:34:52.723Z"
            },
            {
                "Demolitions": 12457,
                "Exterminations": 989,
                "Time": "2022-11-21T03:28:48.418Z"
            },
            {
                "Demolitions": 12764,
                "Exterminations": 1019,
                "Time": "2022-11-22T02:51:23.748Z"
            },
            {
                "Demolitions": 13088,
                "Exterminations": 1049,
                "Time": "2022-11-24T02:52:50.195Z"
            },
            {
                "Demolitions": 13224,
                "Exterminations": 1065,
                "Time": "2022-11-24T04:19:55.672Z"
            },
            {
                "Demolitions": 13541,
                "Exterminations": 1101,
                "Time": "2022-11-25T03:41:04.919Z"
            },
            {
                "Demolitions": 13785,
                "Exterminations": 1127,
                "Time": "2022-11-27T06:26:50.210Z"
            },
            {
                "Demolitions": 14031,
                "Exterminations": 1153,
                "Time": "2022-11-28T03:27:04.040Z"
            },
            {
                "Demolitions": 14314,
                "Exterminations": 1181,
                "Time": "2022-11-29T03:54:05.871Z"
            },
            {
                "Demolitions": 14655,
                "Exterminations": 1219,
                "Time": "2022-12-01T05:13:02.653Z"
            },
            {
                "Demolitions": 15175,
                "Exterminations": 1275,
                "Time": "2022-12-03T04:39:19.843Z"
            },
            {
                "Demolitions": 15477,
                "Exterminations": 1300,
                "Time": "2022-12-04T05:53:19.332Z"
            },
            {
                "Demolitions": 16000,
                "Exterminations": 1356,
                "Time": "2022-12-05T03:30:15.251Z"
            },
            {
                "Demolitions": 16437,
                "Exterminations": 1396,
                "Time": "2022-12-08T02:43:36.098Z"
            },
            {
                "Demolitions": 16810,
                "Exterminations": 1430,
                "Time": "2022-12-10T06:38:31.654Z"
            },
            {
                "Demolitions": 17552,
                "Exterminations": 1497,
                "Time": "2022-12-13T03:54:06.730Z"
            },
            {
                "Demolitions": 18381,
                "Exterminations": 1575,
                "Time": "2022-12-18T02:17:43.287Z"
            },
            {
                "Demolitions": 19814,
                "Exterminations": 1699,
                "Time": "2023-01-05T02:58:06.647Z"
            },
            {
                "Demolitions": 20510,
                "Exterminations": 1755,
                "Time": "2023-01-09T02:36:37.578Z"
            },
            {
                "Demolitions": 22430,
                "Exterminations": 1926,
                "Time": "2023-02-01T04:51:48.982Z"
            }
        ]
    },
    "233952362820009987": {
        "Name": "ObiBram",
        "Demolitions": 17849,
        "Exterminations": 141,
        "LastUpdate": "2022-11-14T16:38:41.048Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 17849,
                "Exterminations": 141,
                "Time": "2022-11-14T16:38:41.048Z"
            }
        ]
    },
    "820671088320053309": {
        "Name": "ERROR 4004",
        "Demolitions": 6742,
        "Exterminations": 21,
        "LastUpdate": "2022-11-14T17:39:18.752Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 6742,
                "Exterminations": 21,
                "Time": "2022-11-14T17:39:18.752Z"
            }
        ]
    },
    "576379631528050729": {
        "Name": "DodoRocket",
        "Demolitions": 32257,
        "Exterminations": 1078,
        "LastUpdate": "2022-11-27T10:01:20.013Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 29657,
                "Exterminations": 832,
                "Time": "2022-11-14T18:25:03.534Z"
            },
            {
                "Demolitions": 30496,
                "Exterminations": 874,
                "Time": "2022-11-26T14:24:50.326Z"
            },
            {
                "Demolitions": 31284,
                "Exterminations": 964,
                "Time": "2022-11-26T23:27:06.699Z"
            },
            {
                "Demolitions": 32257,
                "Exterminations": 1078,
                "Time": "2022-11-27T10:01:20.013Z"
            }
        ]
    },
    "120650861713162240": {
        "Name": "randomg",
        "Demolitions": 8442,
        "Exterminations": 191,
        "LastUpdate": "2022-11-18T02:44:52.192Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 8442,
                "Exterminations": 191,
                "Time": "2022-11-18T02:44:52.192Z"
            }
        ]
    },
    "1039120261968052244": {
        "Name": "SionnachRÃ©altra",
        "Demolitions": 7,
        "Exterminations": 1,
        "LastUpdate": "2023-01-10T13:56:06.311Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 7,
                "Exterminations": 1,
                "Time": "2023-01-10T13:56:06.311Z"
            }
        ]
    },
    "996413804596441220": {
        "Name": "vernsx7",
        "Demolitions": 1300,
        "Exterminations": 0,
        "LastUpdate": "2023-01-04T02:38:33.503Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 1008,
                "Exterminations": 3,
                "Time": "2022-11-20T02:09:52.227Z"
            },
            {
                "Demolitions": 1300,
                "Exterminations": 0,
                "Time": "2023-01-04T02:38:33.503Z"
            }
        ]
    },
    "260483919055421441": {
        "Name": "Tonio DND",
        "Demolitions": 8091,
        "Exterminations": 806,
        "LastUpdate": "2022-12-16T18:16:36.621Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 3184,
                "Exterminations": 242,
                "Time": "2022-11-20T03:12:39.076Z"
            },
            {
                "Demolitions": 4534,
                "Exterminations": 387,
                "Time": "2022-12-02T18:18:27.872Z"
            },
            {
                "Demolitions": 5000,
                "Exterminations": 439,
                "Time": "2022-12-08T22:58:36.679Z"
            },
            {
                "Demolitions": 5207,
                "Exterminations": 462,
                "Time": "2022-12-09T00:25:56.268Z"
            },
            {
                "Demolitions": 7611,
                "Exterminations": 749,
                "Time": "2022-12-14T17:29:15.591Z"
            },
            {
                "Demolitions": 8091,
                "Exterminations": 806,
                "Time": "2022-12-16T18:16:36.621Z"
            }
        ],
        "Country": "France"
    },
    "383666169942507521": {
        "Name": "Ashpaca",
        "Demolitions": 9653,
        "Exterminations": 410,
        "LastUpdate": "2023-01-21T01:00:40.414Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 4405,
                "Exterminations": 39,
                "Time": "2022-11-21T16:52:08.590Z"
            },
            {
                "Demolitions": 4480,
                "Exterminations": 41,
                "Time": "2022-11-22T21:16:29.264Z"
            },
            {
                "Demolitions": 4511,
                "Exterminations": 41,
                "Time": "2022-11-23T17:27:14.673Z"
            },
            {
                "Demolitions": 4553,
                "Exterminations": 43,
                "Time": "2022-11-24T17:28:37.462Z"
            },
            {
                "Demolitions": 4632,
                "Exterminations": 46,
                "Time": "2022-11-25T16:41:05.286Z"
            },
            {
                "Demolitions": 4694,
                "Exterminations": 49,
                "Time": "2022-11-25T21:33:10.601Z"
            },
            {
                "Demolitions": 4738,
                "Exterminations": 51,
                "Time": "2022-11-26T00:09:08.858Z"
            },
            {
                "Demolitions": 4809,
                "Exterminations": 55,
                "Time": "2022-11-27T00:11:20.721Z"
            },
            {
                "Demolitions": 4879,
                "Exterminations": 58,
                "Time": "2022-11-28T21:22:52.090Z"
            },
            {
                "Demolitions": 4910,
                "Exterminations": 60,
                "Time": "2022-11-29T15:42:24.959Z"
            },
            {
                "Demolitions": 5091,
                "Exterminations": 70,
                "Time": "2022-11-30T20:14:55.997Z"
            },
            {
                "Demolitions": 5108,
                "Exterminations": 73,
                "Time": "2022-11-30T23:46:52.005Z"
            },
            {
                "Demolitions": 5225,
                "Exterminations": 77,
                "Time": "2022-12-02T23:38:03.982Z"
            },
            {
                "Demolitions": 5299,
                "Exterminations": 83,
                "Time": "2022-12-04T01:07:13.927Z"
            },
            {
                "Demolitions": 5747,
                "Exterminations": 109,
                "Time": "2022-12-07T02:04:09.082Z"
            },
            {
                "Demolitions": 5815,
                "Exterminations": 115,
                "Time": "2022-12-08T16:57:03.171Z"
            },
            {
                "Demolitions": 5890,
                "Exterminations": 122,
                "Time": "2022-12-09T01:02:21.603Z"
            },
            {
                "Demolitions": 6003,
                "Exterminations": 129,
                "Time": "2022-12-10T16:09:57.582Z"
            },
            {
                "Demolitions": 6104,
                "Exterminations": 136,
                "Time": "2022-12-11T00:29:27.268Z"
            },
            {
                "Demolitions": 6187,
                "Exterminations": 143,
                "Time": "2022-12-12T00:22:48.239Z"
            },
            {
                "Demolitions": 6305,
                "Exterminations": 152,
                "Time": "2022-12-13T20:35:41.127Z"
            },
            {
                "Demolitions": 6412,
                "Exterminations": 157,
                "Time": "2022-12-14T01:02:20.162Z"
            },
            {
                "Demolitions": 6800,
                "Exterminations": 181,
                "Time": "2022-12-18T19:43:27.055Z"
            },
            {
                "Demolitions": 7019,
                "Exterminations": 198,
                "Time": "2022-12-27T23:00:31.193Z"
            },
            {
                "Demolitions": 7113,
                "Exterminations": 205,
                "Time": "2022-12-28T21:28:05.939Z"
            },
            {
                "Demolitions": 7310,
                "Exterminations": 218,
                "Time": "2022-12-31T23:46:52.765Z"
            },
            {
                "Demolitions": 7405,
                "Exterminations": 226,
                "Time": "2023-01-02T00:47:52.036Z"
            },
            {
                "Demolitions": 7510,
                "Exterminations": 234,
                "Time": "2023-01-02T22:27:21.631Z"
            },
            {
                "Demolitions": 7624,
                "Exterminations": 243,
                "Time": "2023-01-03T21:01:04.585Z"
            },
            {
                "Demolitions": 7768,
                "Exterminations": 251,
                "Time": "2023-01-04T22:57:06.694Z"
            },
            {
                "Demolitions": 7823,
                "Exterminations": 253,
                "Time": "2023-01-06T22:47:53.705Z"
            },
            {
                "Demolitions": 7925,
                "Exterminations": 258,
                "Time": "2023-01-08T01:11:45.710Z"
            },
            {
                "Demolitions": 8025,
                "Exterminations": 265,
                "Time": "2023-01-09T02:57:17.371Z"
            },
            {
                "Demolitions": 8176,
                "Exterminations": 272,
                "Time": "2023-01-10T01:51:40.342Z"
            },
            {
                "Demolitions": 8126,
                "Exterminations": 272,
                "Time": "2023-01-10T01:52:57.704Z"
            },
            {
                "Demolitions": 8231,
                "Exterminations": 276,
                "Time": "2023-01-11T02:07:04.194Z"
            },
            {
                "Demolitions": 8376,
                "Exterminations": 288,
                "Time": "2023-01-11T22:43:28.636Z"
            },
            {
                "Demolitions": 8530,
                "Exterminations": 303,
                "Time": "2023-01-13T00:58:00.884Z"
            },
            {
                "Demolitions": 8689,
                "Exterminations": 319,
                "Time": "2023-01-14T01:28:41.917Z"
            },
            {
                "Demolitions": 8845,
                "Exterminations": 337,
                "Time": "2023-01-15T01:11:45.811Z"
            },
            {
                "Demolitions": 9004,
                "Exterminations": 354,
                "Time": "2023-01-16T01:19:12.785Z"
            },
            {
                "Demolitions": 9224,
                "Exterminations": 378,
                "Time": "2023-01-17T00:31:36.644Z"
            },
            {
                "Demolitions": 9380,
                "Exterminations": 394,
                "Time": "2023-01-18T01:54:04.253Z"
            },
            {
                "Demolitions": 9502,
                "Exterminations": 402,
                "Time": "2023-01-19T00:18:13.798Z"
            },
            {
                "Demolitions": 9653,
                "Exterminations": 410,
                "Time": "2023-01-21T01:00:40.414Z"
            }
        ],
        "Country": "Wales"
    },
    "1044316331618615386": {
        "Name": "phenixbkx55",
        "Demolitions": 6682,
        "Exterminations": 86,
        "LastUpdate": "2022-12-28T17:24:41.304Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 5382,
                "Exterminations": 20,
                "Time": "2022-11-21T19:45:43.215Z"
            },
            {
                "Demolitions": 6682,
                "Exterminations": 86,
                "Time": "2022-12-28T17:24:41.304Z"
            }
        ]
    },
    "408966509013106709": {
        "Name": "DEM0 DADDY",
        "Demolitions": 15643,
        "Exterminations": 1000,
        "LastUpdate": "2023-01-31T00:37:55.274Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 12095,
                "Exterminations": 703,
                "Time": "2022-12-16T16:36:52.272Z"
            },
            {
                "Demolitions": 12572,
                "Exterminations": 750,
                "Time": "2022-12-19T21:18:57.037Z"
            },
            {
                "Demolitions": 13005,
                "Exterminations": 785,
                "Time": "2022-12-22T15:39:19.228Z"
            },
            {
                "Demolitions": 14104,
                "Exterminations": 883,
                "Time": "2023-01-10T17:39:32.954Z"
            },
            {
                "Demolitions": 15000,
                "Exterminations": 941,
                "Time": "2023-01-22T17:33:48.491Z"
            },
            {
                "Demolitions": 15643,
                "Exterminations": 1000,
                "Time": "2023-01-31T00:37:55.274Z"
            }
        ],
        "Country": "USA"
    },
    "1036783176208625684": {
        "Name": "Ollie749",
        "Demolitions": 1256,
        "Exterminations": 11,
        "LastUpdate": "2022-11-23T19:49:52.382Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 1256,
                "Exterminations": 11,
                "Time": "2022-11-23T19:49:52.382Z"
            }
        ]
    },
    "306524218974273538": {
        "Name": "DikkUchizu",
        "Demolitions": 10009,
        "Exterminations": 269,
        "LastUpdate": "2022-11-24T06:22:29.797Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 10004,
                "Exterminations": 269,
                "Time": "2022-11-24T06:21:10.788Z"
            },
            {
                "Demolitions": 10009,
                "Exterminations": 269,
                "Time": "2022-11-24T06:22:29.797Z"
            }
        ]
    },
    "383723765999075329": {
        "Name": "TheBigThiccness",
        "Demolitions": 6297,
        "Exterminations": 189,
        "LastUpdate": "2022-12-01T22:12:04.983Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 6297,
                "Exterminations": 189,
                "Time": "2022-12-01T22:12:04.983Z"
            }
        ]
    },
    "302829574537084928": {
        "Name": "Maethor Darksoul",
        "Demolitions": 14009,
        "Exterminations": 231,
        "LastUpdate": "2022-12-07T21:52:43.574Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 13549,
                "Exterminations": 183,
                "Time": "2022-12-04T15:20:28.341Z"
            },
            {
                "Demolitions": 14009,
                "Exterminations": 231,
                "Time": "2022-12-07T21:52:43.574Z"
            }
        ],
        "Country": "Germany"
    },
    "343202358551117844": {
        "Name": "FREE AOL",
        "Demolitions": 17504,
        "Exterminations": 1132,
        "LastUpdate": "2023-01-30T02:57:11.032Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 12231,
                "Exterminations": 712,
                "Time": "2022-12-23T04:15:39.850Z"
            },
            {
                "Demolitions": 13087,
                "Exterminations": 770,
                "Time": "2022-12-29T18:54:51.056Z"
            },
            {
                "Demolitions": 14241,
                "Exterminations": 872,
                "Time": "2023-01-03T21:43:11.922Z"
            },
            {
                "Demolitions": 16700,
                "Exterminations": 1062,
                "Time": "2023-01-24T05:35:32.114Z"
            },
            {
                "Demolitions": 17504,
                "Exterminations": 1132,
                "Time": "2023-01-30T02:57:11.032Z"
            }
        ]
    },
    "794171784617787442": {
        "Name": "DannyDorita",
        "Demolitions": 7033,
        "Exterminations": 269,
        "LastUpdate": "2022-12-11T07:58:27.149Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 7033,
                "Exterminations": 269,
                "Time": "2022-12-11T07:58:27.149Z"
            }
        ]
    },
    "523743506515230742": {
        "Name": "NICKCHEESE",
        "Demolitions": 15969,
        "Exterminations": 218,
        "LastUpdate": "2022-12-24T20:38:01.835Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 15969,
                "Exterminations": 218,
                "Time": "2022-12-24T20:38:01.835Z"
            }
        ]
    },
    "401264438595813377": {
        "Name": "BOOM I GOT YOU",
        "Demolitions": 0,
        "Exterminations": 0,
        "LastUpdate": "2015-07-07T00:00:00.000",
        "Authorized": 1,
        "History": []
    },
    "1042908474658525224": {
        "Name": "Ta mÃ¨re",
        "Demolitions": 170,
        "Exterminations": 0,
        "LastUpdate": "2022-12-19T16:51:17.272Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 17,
                "Exterminations": 0,
                "Time": "2022-12-19T16:39:21.303Z"
            },
            {
                "Demolitions": 170,
                "Exterminations": 0,
                "Time": "2022-12-19T16:51:17.272Z"
            }
        ]
    },
    "754760058159497427": {
        "Name": "Mr. Moo",
        "Demolitions": 4639,
        "Exterminations": 127,
        "LastUpdate": "2022-12-19T23:46:51.546Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 4639,
                "Exterminations": 127,
                "Time": "2022-12-19T23:46:51.546Z"
            }
        ]
    },
    "1014076762931613786": {
        "Name": "joakimbg69",
        "Demolitions": 4621,
        "Exterminations": 201,
        "LastUpdate": "2023-01-06T16:38:56.525Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 3818,
                "Exterminations": 126,
                "Time": "2022-12-22T13:54:34.165Z"
            },
            {
                "Demolitions": 4018,
                "Exterminations": 149,
                "Time": "2022-12-22T14:17:33.836Z"
            },
            {
                "Demolitions": 4247,
                "Exterminations": 175,
                "Time": "2022-12-22T16:47:30.180Z"
            },
            {
                "Demolitions": 4363,
                "Exterminations": 188,
                "Time": "2022-12-23T14:19:18.398Z"
            },
            {
                "Demolitions": 4621,
                "Exterminations": 201,
                "Time": "2023-01-06T16:38:56.525Z"
            }
        ]
    },
    "792428742055690241": {
        "Name": "Relax_Jabaoud",
        "Demolitions": 236,
        "Exterminations": 2,
        "LastUpdate": "2022-12-26T12:56:36.947Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 200,
                "Exterminations": 1,
                "Time": "2022-12-22T20:28:28.199Z"
            },
            {
                "Demolitions": 236,
                "Exterminations": 2,
                "Time": "2022-12-26T12:56:36.947Z"
            }
        ]
    },
    "728220327854997504": {
        "Name": "souizy",
        "Demolitions": 556,
        "Exterminations": 13,
        "LastUpdate": "2022-12-31T19:15:03.422Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 499,
                "Exterminations": 10,
                "Time": "2022-12-23T18:02:13.382Z"
            },
            {
                "Demolitions": 505,
                "Exterminations": 10,
                "Time": "2022-12-23T18:09:32.506Z"
            },
            {
                "Demolitions": 556,
                "Exterminations": 13,
                "Time": "2022-12-31T19:15:03.422Z"
            }
        ]
    },
    "320325718049554432": {
        "Name": "Agronis",
        "Demolitions": 5312,
        "Exterminations": 52,
        "LastUpdate": "2022-12-24T19:23:13.000Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 5312,
                "Exterminations": 52,
                "Time": "2022-12-24T19:23:13.000Z"
            }
        ]
    },
    "607957979580334090": {
        "Name": "GreenKarmaRay",
        "Demolitions": 23036,
        "Exterminations": 1453,
        "LastUpdate": "2023-01-22T16:51:00.303Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 23036,
                "Exterminations": 1453,
                "Time": "2023-01-22T16:51:00.303Z"
            }
        ]
    },
    "744903704372576276": {
        "Name": "Ð¶ King BoB Ð¶",
        "Demolitions": 2116,
        "Exterminations": 1,
        "LastUpdate": "2022-12-28T13:20:17.829Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 2116,
                "Exterminations": 1,
                "Time": "2022-12-28T13:20:17.829Z"
            }
        ]
    },
    "455055198830985216": {
        "Name": "Plopaplopa",
        "Demolitions": 19248,
        "Exterminations": 514,
        "LastUpdate": "2023-01-02T14:30:23.260Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 19248,
                "Exterminations": 514,
                "Time": "2023-01-02T14:30:23.260Z"
            }
        ]
    },
    "702156560977231952": {
        "Name": "Prime",
        "Demolitions": 16044,
        "Exterminations": 447,
        "LastUpdate": "2023-01-15T12:40:33.092Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 16044,
                "Exterminations": 447,
                "Time": "2023-01-15T12:40:33.092Z"
            }
        ]
    },
    "710005285032558592": {
        "Name": "IAmAlyssaBee",
        "Demolitions": 889,
        "Exterminations": 3,
        "LastUpdate": "2023-01-31T21:02:42.697Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 725,
                "Exterminations": 0,
                "Time": "2023-01-05T02:02:04.417Z"
            },
            {
                "Demolitions": 734,
                "Exterminations": 0,
                "Time": "2023-01-05T18:06:10.252Z"
            },
            {
                "Demolitions": 753,
                "Exterminations": 0,
                "Time": "2023-01-21T16:14:56.707Z"
            },
            {
                "Demolitions": 809,
                "Exterminations": 0,
                "Time": "2023-01-25T03:38:03.152Z"
            },
            {
                "Demolitions": 889,
                "Exterminations": 3,
                "Time": "2023-01-31T21:02:42.697Z"
            }
        ]
    },
    "942514581853569045": {
        "Name": "AzuuLoveDemo",
        "Demolitions": 1423,
        "Exterminations": 4,
        "LastUpdate": "2023-01-21T15:23:16.436Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 1293,
                "Exterminations": 2,
                "Time": "2023-01-06T16:33:19.906Z"
            },
            {
                "Demolitions": 1388,
                "Exterminations": 4,
                "Time": "2023-01-18T16:50:24.729Z"
            },
            {
                "Demolitions": 1423,
                "Exterminations": 4,
                "Time": "2023-01-21T15:23:16.436Z"
            }
        ]
    },
    "737620538574241804": {
        "Name": "RNGop",
        "Demolitions": 3330,
        "Exterminations": 103,
        "LastUpdate": "2023-01-07T12:14:34.644Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 3330,
                "Exterminations": 103,
                "Time": "2023-01-07T12:14:34.644Z"
            }
        ]
    },
    "431544850823905280": {
        "Name": "Cargo_180",
        "Demolitions": 5311,
        "Exterminations": 344,
        "LastUpdate": "2023-01-11T17:58:28.991Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 3504,
                "Exterminations": 89,
                "Time": "2023-01-11T10:15:57.015Z"
            },
            {
                "Demolitions": 3899,
                "Exterminations": 145,
                "Time": "2023-01-11T11:08:34.290Z"
            },
            {
                "Demolitions": 4523,
                "Exterminations": 233,
                "Time": "2023-01-11T13:35:56.319Z"
            },
            {
                "Demolitions": 4752,
                "Exterminations": 265,
                "Time": "2023-01-11T16:01:54.458Z"
            },
            {
                "Demolitions": 5052,
                "Exterminations": 307,
                "Time": "2023-01-11T16:46:23.607Z"
            },
            {
                "Demolitions": 5311,
                "Exterminations": 344,
                "Time": "2023-01-11T17:58:28.991Z"
            }
        ]
    },
    "326757399266590722": {
        "Name": "Skesh",
        "Demolitions": 9232,
        "Exterminations": 143,
        "LastUpdate": "2023-01-13T00:40:07.278Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 9232,
                "Exterminations": 143,
                "Time": "2023-01-13T00:40:07.278Z"
            }
        ]
    },
    "955917874399174737": {
        "Name": "matvtt1213",
        "Demolitions": 372,
        "Exterminations": 3,
        "LastUpdate": "2023-01-14T13:35:23.218Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 372,
                "Exterminations": 3,
                "Time": "2023-01-14T13:35:23.218Z"
            }
        ]
    },
    "239443192892620800": {
        "Name": "Pieman_RL",
        "Demolitions": 12480,
        "Exterminations": 126,
        "LastUpdate": "2023-02-02T20:07:42.399Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 12417,
                "Exterminations": 216,
                "Time": "2023-01-15T02:00:44.328Z"
            },
            {
                "Demolitions": 12417,
                "Exterminations": 126,
                "Time": "2023-01-15T02:14:25.634Z"
            },
            {
                "Demolitions": 12437,
                "Exterminations": 126,
                "Time": "2023-01-18T19:30:25.868Z"
            },
            {
                "Demolitions": 12456,
                "Exterminations": 126,
                "Time": "2023-01-25T06:27:12.367Z"
            },
            {
                "Demolitions": 12456,
                "Exterminations": 126,
                "Time": "2023-01-25T06:28:18.602Z"
            },
            {
                "Demolitions": 12480,
                "Exterminations": 126,
                "Time": "2023-02-02T20:07:42.399Z"
            }
        ]
    },
    "320669699262119936": {
        "Name": "DiceOfChance",
        "Demolitions": 4923,
        "Exterminations": 116,
        "LastUpdate": "2023-01-15T03:58:36.265Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 4923,
                "Exterminations": 116,
                "Time": "2023-01-15T03:58:36.265Z"
            }
        ]
    },
    "804853634251882501": {
        "Name": "Real_Madrid_13CL",
        "Demolitions": 7884,
        "Exterminations": 284,
        "LastUpdate": "2023-01-15T22:58:29.730Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 7884,
                "Exterminations": 284,
                "Time": "2023-01-15T22:58:29.730Z"
            }
        ]
    },
    "724928149208694845": {
        "Name": "Zarther7",
        "Demolitions": 54,
        "Exterminations": 6,
        "LastUpdate": "2023-01-16T19:16:51.654Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 30,
                "Exterminations": 3,
                "Time": "2023-01-16T18:47:31.109Z"
            },
            {
                "Demolitions": 54,
                "Exterminations": 6,
                "Time": "2023-01-16T19:16:51.654Z"
            }
        ]
    },
    "1064928262293303377": {
        "Name": "locofordemo",
        "Demolitions": 131620,
        "Exterminations": 9296,
        "LastUpdate": "2023-01-19T03:25:08.150Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 131620,
                "Exterminations": 9296,
                "Time": "2023-01-19T03:25:08.150Z"
            }
        ]
    },
    "993465684522700830": {
        "Name": "thecoolestlad",
        "Demolitions": 162764,
        "Exterminations": 13338,
        "LastUpdate": "2023-01-29T04:10:39.899Z",
        "Authorized": 2,
        "History": [
            {
                "Demolitions": 159961,
                "Exterminations": 13182,
                "Time": "2023-01-18T10:52:01.740Z"
            },
            {
                "Demolitions": 162764,
                "Exterminations": 13338,
                "Time": "2023-01-29T04:10:39.899Z"
            }
        ]
    },
    "571695579113979924": {
        "Name": "Largefurrywilly",
        "Demolitions": 38913,
        "Exterminations": 1064,
        "LastUpdate": "2023-02-02T04:59:59.331Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 38913,
                "Exterminations": 1064,
                "Time": "2023-02-02T04:59:59.331Z"
            }
        ]
    },
    "750348802313158706": {
        "Name": "Dracopoto",
        "Demolitions": 335,
        "Exterminations": 5,
        "LastUpdate": "2023-01-18T14:48:57.265Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 335,
                "Exterminations": 5,
                "Time": "2023-01-18T14:48:57.265Z"
            }
        ]
    },
    "378520920941133829": {
        "Name": "Dungeon Master",
        "Demolitions": 20564,
        "Exterminations": 1279,
        "LastUpdate": "2023-01-19T09:06:30.617Z",
        "Authorized": 1,
        "History": [
            {
                "Demolitions": 20564,
                "Exterminations": 1279,
                "Time": "2023-01-19T09:06:30.617Z"
            }
        ]
    },
    "697140245270888539": {
        "Name": "joahua394",
        "Demolitions": 2956,
        "Exterminations": 33,
        "LastUpdate": "2023-01-19T02:27:54.124Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 2956,
                "Exterminations": 33,
                "Time": "2023-01-19T02:27:54.124Z"
            }
        ]
    },
    "215569888914309120": {
        "Name": "TheSammwich",
        "Demolitions": 2588,
        "Exterminations": 9,
        "LastUpdate": "2023-01-24T01:35:41.152Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 2588,
                "Exterminations": 9,
                "Time": "2023-01-24T01:35:41.152Z"
            }
        ]
    },
    "1032800218602819624": {
        "Name": "ryrie",
        "Demolitions": 5010,
        "Exterminations": 309,
        "LastUpdate": "2023-02-01T23:00:06.380Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 3807,
                "Exterminations": 213,
                "Time": "2023-01-24T12:41:16.624Z"
            },
            {
                "Demolitions": 4005,
                "Exterminations": 231,
                "Time": "2023-01-24T23:05:48.466Z"
            },
            {
                "Demolitions": 4108,
                "Exterminations": 240,
                "Time": "2023-01-25T03:50:20.242Z"
            },
            {
                "Demolitions": 4185,
                "Exterminations": 244,
                "Time": "2023-01-25T21:22:01.787Z"
            },
            {
                "Demolitions": 4371,
                "Exterminations": 257,
                "Time": "2023-01-27T00:57:27.442Z"
            },
            {
                "Demolitions": 5010,
                "Exterminations": 309,
                "Time": "2023-02-01T23:00:06.380Z"
            }
        ]
    },
    "1062818245284986900": {
        "Name": "GillesDeR",
        "Demolitions": 1329,
        "Exterminations": 70,
        "LastUpdate": "2023-01-26T20:55:16.397Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 1329,
                "Exterminations": 70,
                "Time": "2023-01-26T20:55:16.397Z"
            }
        ]
    },
    "474869791384141846": {
        "Name": "Zunn.rl",
        "Demolitions": 12301,
        "Exterminations": 61,
        "LastUpdate": "2023-01-30T14:57:31.298Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 12071,
                "Exterminations": 57,
                "Time": "2023-01-27T09:51:40.603Z"
            },
            {
                "Demolitions": 12084,
                "Exterminations": 57,
                "Time": "2023-01-27T13:16:54.675Z"
            },
            {
                "Demolitions": 12122,
                "Exterminations": 60,
                "Time": "2023-01-27T14:17:12.634Z"
            },
            {
                "Demolitions": 12228,
                "Exterminations": 61,
                "Time": "2023-01-28T15:50:25.422Z"
            },
            {
                "Demolitions": 12301,
                "Exterminations": 61,
                "Time": "2023-01-30T14:57:31.298Z"
            }
        ]
    },
    "385878226867716108": {
        "Name": "izi_topsik",
        "Demolitions": 2614,
        "Exterminations": 24,
        "LastUpdate": "2023-01-27T13:14:46.947Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 2614,
                "Exterminations": 24,
                "Time": "2023-01-27T13:14:46.947Z"
            }
        ]
    },
    "900771925717028914": {
        "Name": "JerySmile",
        "Demolitions": 2791,
        "Exterminations": 0,
        "LastUpdate": "2023-01-27T17:29:41.565Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 2791,
                "Exterminations": 0,
                "Time": "2023-01-27T17:29:41.565Z"
            }
        ]
    },
    "479877321193684992": {
        "Name": "Electric",
        "Demolitions": 11119,
        "Exterminations": 247,
        "LastUpdate": "2023-02-02T06:43:08.709Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 11119,
                "Exterminations": 247,
                "Time": "2023-02-02T06:43:08.709Z"
            }
        ]
    },
    "309268107778588673": {
        "Name": "Kerridwen",
        "Demolitions": 6514,
        "Exterminations": 6,
        "LastUpdate": "2023-02-02T13:18:56.512Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 6514,
                "Exterminations": 6,
                "Time": "2023-02-02T13:18:56.512Z"
            }
        ]
    },
    "538742307273572362": {
        "Name": "HuCubes",
        "Demolitions": 423,
        "Exterminations": 1,
        "LastUpdate": "2023-02-02T15:41:44.201Z",
        "Authorized": 0,
        "History": [
            {
                "Demolitions": 423,
                "Exterminations": 1,
                "Time": "2023-02-02T15:41:44.201Z"
            }
        ]
    }
}
