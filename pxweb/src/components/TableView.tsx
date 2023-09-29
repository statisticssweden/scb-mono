import { useEffect, useState } from "react"
import { getData } from "../api/getData"

type MyDataType = {
    columns: Column[];
    comments: Comment[];
    data: Datum[];
}

type Column = {
    code: string;
    text: string;
    comment?: string;
    type: string;
}

type Comment = {
    variable: string;
    value: string;
    comment: string;
}

type Datum = {
    key: string[];
    values: string[];
}

const myData: MyDataType = {
    "columns": [
        {
            "code": "SECTOR",
            "text": "sector",
            "comment": "Footnote text\r\n",
            "type": "d"
        },
        {
            "code": "GREENHOUSEGAS",
            "text": "greenhouse gas",
            "type": "d"
        },
        {
            "code": "TIME",
            "text": "year",
            "type": "t"
        },
        {
            "code": "Emission",
            "text": "Substance",
            "type": "c"
        }
    ],
    "comments": [
        {
            "variable": "GREENHOUSEGAS",
            "value": "SF6_CO2-ekv.",
            "comment": "Footnote text\r\n"
        }
    ],
    "data": [
        {
            "key": [
                "0.1",
                "CH4",
                "2017"
            ],
            "values": [
                "180729"
            ]
        },
        {
            "key": [
                "0.1",
                "CH4_CO2-ekv.",
                "2017"
            ],
            "values": [
                "4518"
            ]
        },
        {
            "key": [
                "0.1",
                "CO2",
                "2017"
            ],
            "values": [
                "42050"
            ]
        },
        {
            "key": [
                "0.1",
                "CO2-BIO",
                "2017"
            ],
            "values": [
                "33084"
            ]
        },
        {
            "key": [
                "0.1",
                "CO2-ekv.",
                "2017"
            ],
            "values": [
                "52660"
            ]
        },
        {
            "key": [
                "0.1",
                "HFC",
                "2017"
            ],
            "values": [
                "1138"
            ]
        },
        {
            "key": [
                "0.1",
                "N2O",
                "2017"
            ],
            "values": [
                "16343"
            ]
        },
        {
            "key": [
                "0.1",
                "N2O_CO2-ekv.",
                "2017"
            ],
            "values": [
                "4870"
            ]
        },
        {
            "key": [
                "0.1",
                "PFC",
                "2017"
            ],
            "values": [
                "37"
            ]
        },
        {
            "key": [
                "0.1",
                "SF6",
                "2017"
            ],
            "values": [
                "2065"
            ]
        },
        {
            "key": [
                "0.1",
                "SF6_CO2-ekv.",
                "2017"
            ],
            "values": [
                "47"
            ]
        },
        {
            "key": [
                "0.2",
                "CH4",
                "2017"
            ],
            "values": [
                "180798"
            ]
        },
        {
            "key": [
                "0.2",
                "CH4_CO2-ekv.",
                "2017"
            ],
            "values": [
                "4520"
            ]
        },
        {
            "key": [
                "0.2",
                "CO2",
                "2017"
            ],
            "values": [
                "52518"
            ]
        },
        {
            "key": [
                "0.2",
                "CO2-BIO",
                "2017"
            ],
            "values": [
                "33084"
            ]
        },
        {
            "key": [
                "0.2",
                "CO2-ekv.",
                "2017"
            ],
            "values": [
                "63292"
            ]
        },
        {
            "key": [
                "0.2",
                "HFC",
                "2017"
            ],
            "values": [
                "1138"
            ]
        },
        {
            "key": [
                "0.2",
                "N2O",
                "2017"
            ],
            "values": [
                "16889"
            ]
        },
        {
            "key": [
                "0.2",
                "N2O_CO2-ekv.",
                "2017"
            ],
            "values": [
                "5033"
            ]
        },
        {
            "key": [
                "0.2",
                "PFC",
                "2017"
            ],
            "values": [
                "37"
            ]
        },
        {
            "key": [
                "0.2",
                "SF6",
                "2017"
            ],
            "values": [
                "2065"
            ]
        },
        {
            "key": [
                "0.2",
                "SF6_CO2-ekv.",
                "2017"
            ],
            "values": [
                "47"
            ]
        },
        {
            "key": [
                "0.3",
                "CH4",
                "2017"
            ],
            "values": [
                "198104"
            ]
        },
        {
            "key": [
                "0.3",
                "CH4_CO2-ekv.",
                "2017"
            ],
            "values": [
                "4953"
            ]
        },
        {
            "key": [
                "0.3",
                "CO2",
                "2017"
            ],
            "values": [
                "-3332"
            ]
        },
        {
            "key": [
                "0.3",
                "CO2-BIO",
                "2017"
            ],
            "values": [
                "33084"
            ]
        },
        {
            "key": [
                "0.3",
                "CO2-ekv.",
                "2017"
            ],
            "values": [
                "8933"
            ]
        },
        {
            "key": [
                "0.3",
                "HFC",
                "2017"
            ],
            "values": [
                "1138"
            ]
        },
        {
            "key": [
                "0.3",
                "N2O",
                "2017"
            ],
            "values": [
                "20437"
            ]
        },
        {
            "key": [
                "0.3",
                "N2O_CO2-ekv.",
                "2017"
            ],
            "values": [
                "6090"
            ]
        },
        {
            "key": [
                "0.3",
                "PFC",
                "2017"
            ],
            "values": [
                "37"
            ]
        },
        {
            "key": [
                "0.3",
                "SF6",
                "2017"
            ],
            "values": [
                "2065"
            ]
        },
        {
            "key": [
                "0.3",
                "SF6_CO2-ekv.",
                "2017"
            ],
            "values": [
                "47"
            ]
        },
        {
            "key": [
                "0.4",
                "CH4",
                "2017"
            ],
            "values": [
                "198173"
            ]
        },
        {
            "key": [
                "0.4",
                "CH4_CO2-ekv.",
                "2017"
            ],
            "values": [
                "4954"
            ]
        },
        {
            "key": [
                "0.4",
                "CO2",
                "2017"
            ],
            "values": [
                "7136"
            ]
        },
        {
            "key": [
                "0.4",
                "CO2-BIO",
                "2017"
            ],
            "values": [
                "33084"
            ]
        },
        {
            "key": [
                "0.4",
                "CO2-ekv.",
                "2017"
            ],
            "values": [
                "19565"
            ]
        },
        {
            "key": [
                "0.4",
                "HFC",
                "2017"
            ],
            "values": [
                "1138"
            ]
        },
        {
            "key": [
                "0.4",
                "N2O",
                "2017"
            ],
            "values": [
                "20983"
            ]
        },
        {
            "key": [
                "0.4",
                "N2O_CO2-ekv.",
                "2017"
            ],
            "values": [
                "6253"
            ]
        },
        {
            "key": [
                "0.4",
                "PFC",
                "2017"
            ],
            "values": [
                "37"
            ]
        },
        {
            "key": [
                "0.4",
                "SF6",
                "2017"
            ],
            "values": [
                "2065"
            ]
        },
        {
            "key": [
                "0.4",
                "SF6_CO2-ekv.",
                "2017"
            ],
            "values": [
                "47"
            ]
        },
        {
            "key": [
                "1.0",
                "CH4",
                "2017"
            ],
            "values": [
                "466"
            ]
        },
        {
            "key": [
                "1.0",
                "CH4_CO2-ekv.",
                "2017"
            ],
            "values": [
                "12"
            ]
        },
        {
            "key": [
                "1.0",
                "CO2",
                "2017"
            ],
            "values": [
                "3298"
            ]
        },
        {
            "key": [
                "1.0",
                "CO2-BIO",
                "2017"
            ],
            "values": [
                "924"
            ]
        },
        {
            "key": [
                "1.0",
                "CO2-ekv.",
                "2017"
            ],
            "values": [
                "3351"
            ]
        },
        {
            "key": [
                "1.0",
                "HFC",
                "2017"
            ],
            "values": [
                ".."
            ]
        },
        {
            "key": [
                "1.0",
                "N2O",
                "2017"
            ],
            "values": [
                "140"
            ]
        },
        {
            "key": [
                "1.0",
                "N2O_CO2-ekv.",
                "2017"
            ],
            "values": [
                "42"
            ]
        },
        {
            "key": [
                "1.0",
                "PFC",
                "2017"
            ],
            "values": [
                ".."
            ]
        },
        {
            "key": [
                "1.0",
                "SF6",
                "2017"
            ],
            "values": [
                ".."
            ]
        },
        {
            "key": [
                "1.0",
                "SF6_CO2-ekv.",
                "2017"
            ],
            "values": [
                ".."
            ]
        },
        {
            "key": [
                "10.0",
                "CH4",
                "2017"
            ],
            "values": [
                "17376"
            ]
        },
        {
            "key": [
                "10.0",
                "CH4_CO2-ekv.",
                "2017"
            ],
            "values": [
                "434"
            ]
        },
        {
            "key": [
                "10.0",
                "CO2",
                "2017"
            ],
            "values": [
                "-45382"
            ]
        },
        {
            "key": [
                "10.0",
                "CO2-BIO",
                "2017"
            ],
            "values": [
                ".."
            ]
        },
        {
            "key": [
                "10.0",
                "CO2-ekv.",
                "2017"
            ],
            "values": [
                "-43727"
            ]
        },
        {
            "key": [
                "10.0",
                "HFC",
                "2017"
            ],
            "values": [
                ".."
            ]
        },
        {
            "key": [
                "10.0",
                "N2O",
                "2017"
            ],
            "values": [
                "4094"
            ]
        },
        {
            "key": [
                "10.0",
                "N2O_CO2-ekv.",
                "2017"
            ],
            "values": [
                "1220"
            ]
        },
        {
            "key": [
                "10.0",
                "PFC",
                "2017"
            ],
            "values": [
                ".."
            ]
        },
        {
            "key": [
                "10.0",
                "SF6",
                "2017"
            ],
            "values": [
                ".."
            ]
        },
        {
            "key": [
                "10.0",
                "SF6_CO2-ekv.",
                "2017"
            ],
            "values": [
                ".."
            ]
        },
        {
            "key": [
                "2.0",
                "CH4",
                "2017"
            ],
            "values": [
                "38323"
            ]
        },
        {
            "key": [
                "2.0",
                "CH4_CO2-ekv.",
                "2017"
            ],
            "values": [
                "958"
            ]
        },
        {
            "key": [
                "2.0",
                "CO2",
                "2017"
            ],
            "values": [
                "58"
            ]
        },
        {
            "key": [
                "2.0",
                "CO2-BIO",
                "2017"
            ],
            "values": [
                "99"
            ]
        },
        {
            "key": [
                "2.0",
                "CO2-ekv.",
                "2017"
            ],
            "values": [
                "1253"
            ]
        },
        {
            "key": [
                "2.0",
                "HFC",
                "2017"
            ],
            "values": [
                ".."
            ]
        },
        {
            "key": [
                "2.0",
                "N2O",
                "2017"
            ],
            "values": [
                "796"
            ]
        },
        {
            "key": [
                "2.0",
                "N2O_CO2-ekv.",
                "2017"
            ],
            "values": [
                "237"
            ]
        },
        {
            "key": [
                "2.0",
                "PFC",
                "2017"
            ],
            "values": [
                ".."
            ]
        },
        {
            "key": [
                "2.0",
                "SF6",
                "2017"
            ],
            "values": [
                ".."
            ]
        },
        {
            "key": [
                "2.0",
                "SF6_CO2-ekv.",
                "2017"
            ],
            "values": [
                ".."
            ]
        },
        {
            "key": [
                "3.0",
                "CH4",
                "2017"
            ],
            "values": [
                "1816"
            ]
        },
        {
            "key": [
                "3.0",
                "CH4_CO2-ekv.",
                "2017"
            ],
            "values": [
                "45"
            ]
        },
        {
            "key": [
                "3.0",
                "CO2",
                "2017"
            ],
            "values": [
                "4123"
            ]
        },
        {
            "key": [
                "3.0",
                "CO2-BIO",
                "2017"
            ],
            "values": [
                "15850"
            ]
        },
        {
            "key": [
                "3.0",
                "CO2-ekv.",
                "2017"
            ],
            "values": [
                "4413"
            ]
        },
        {
            "key": [
                "3.0",
                "HFC",
                "2017"
            ],
            "values": [
                ".."
            ]
        },
        {
            "key": [
                "3.0",
                "N2O",
                "2017"
            ],
            "values": [
                "822"
            ]
        },
        {
            "key": [
                "3.0",
                "N2O_CO2-ekv.",
                "2017"
            ],
            "values": [
                "245"
            ]
        },
        {
            "key": [
                "3.0",
                "PFC",
                "2017"
            ],
            "values": [
                ".."
            ]
        },
        {
            "key": [
                "3.0",
                "SF6",
                "2017"
            ],
            "values": [
                ".."
            ]
        },
        {
            "key": [
                "3.0",
                "SF6_CO2-ekv.",
                "2017"
            ],
            "values": [
                ".."
            ]
        },
        {
            "key": [
                "4.0",
                "CH4",
                "2017"
            ],
            "values": [
                "3708"
            ]
        },
        {
            "key": [
                "4.0",
                "CH4_CO2-ekv.",
                "2017"
            ],
            "values": [
                "93"
            ]
        },
        {
            "key": [
                "4.0",
                "CO2",
                "2017"
            ],
            "values": [
                "16799"
            ]
        },
        {
            "key": [
                "4.0",
                "CO2-BIO",
                "2017"
            ],
            "values": [
                "7119"
            ]
        },
        {
            "key": [
                "4.0",
                "CO2-ekv.",
                "2017"
            ],
            "values": [
                "17202"
            ]
        },
        {
            "key": [
                "4.0",
                "HFC",
                "2017"
            ],
            "values": [
                ".."
            ]
        },
        {
            "key": [
                "4.0",
                "N2O",
                "2017"
            ],
            "values": [
                "880"
            ]
        },
        {
            "key": [
                "4.0",
                "N2O_CO2-ekv.",
                "2017"
            ],
            "values": [
                "262"
            ]
        },
        {
            "key": [
                "4.0",
                "PFC",
                "2017"
            ],
            "values": [
                "36"
            ]
        },
        {
            "key": [
                "4.0",
                "SF6",
                "2017"
            ],
            "values": [
                "563"
            ]
        },
        {
            "key": [
                "4.0",
                "SF6_CO2-ekv.",
                "2017"
            ],
            "values": [
                "13"
            ]
        },
        {
            "key": [
                "5.0",
                "CH4",
                "2017"
            ],
            "values": [
                "69"
            ]
        },
        {
            "key": [
                "5.0",
                "CH4_CO2-ekv.",
                "2017"
            ],
            "values": [
                "2"
            ]
        },
        {
            "key": [
                "5.0",
                "CO2",
                "2017"
            ],
            "values": [
                "10468"
            ]
        },
        {
            "key": [
                "5.0",
                "CO2-BIO",
                "2017"
            ],
            "values": [
                ".."
            ]
        },
        {
            "key": [
                "5.0",
                "CO2-ekv.",
                "2017"
            ],
            "values": [
                "10632"
            ]
        },
        {
            "key": [
                "5.0",
                "HFC",
                "2017"
            ],
            "values": [
                ".."
            ]
        },
        {
            "key": [
                "5.0",
                "N2O",
                "2017"
            ],
            "values": [
                "546"
            ]
        },
        {
            "key": [
                "5.0",
                "N2O_CO2-ekv.",
                "2017"
            ],
            "values": [
                "163"
            ]
        },
        {
            "key": [
                "5.0",
                "PFC",
                "2017"
            ],
            "values": [
                ".."
            ]
        },
        {
            "key": [
                "5.0",
                "SF6",
                "2017"
            ],
            "values": [
                ".."
            ]
        },
        {
            "key": [
                "5.0",
                "SF6_CO2-ekv.",
                "2017"
            ],
            "values": [
                ".."
            ]
        },
        {
            "key": [
                "6.0",
                "CH4",
                "2017"
            ],
            "values": [
                "131346"
            ]
        },
        {
            "key": [
                "6.0",
                "CH4_CO2-ekv.",
                "2017"
            ],
            "values": [
                "3284"
            ]
        },
        {
            "key": [
                "6.0",
                "CO2",
                "2017"
            ],
            "values": [
                "128"
            ]
        },
        {
            "key": [
                "6.0",
                "CO2-BIO",
                "2017"
            ],
            "values": [
                ".."
            ]
        },
        {
            "key": [
                "6.0",
                "CO2-ekv.",
                "2017"
            ],
            "values": [
                "7187"
            ]
        },
        {
            "key": [
                "6.0",
                "HFC",
                "2017"
            ],
            "values": [
                ".."
            ]
        },
        {
            "key": [
                "6.0",
                "N2O",
                "2017"
            ],
            "values": [
                "12670"
            ]
        },
        {
            "key": [
                "6.0",
                "N2O_CO2-ekv.",
                "2017"
            ],
            "values": [
                "3776"
            ]
        },
        {
            "key": [
                "6.0",
                "PFC",
                "2017"
            ],
            "values": [
                ".."
            ]
        },
        {
            "key": [
                "6.0",
                "SF6",
                "2017"
            ],
            "values": [
                ".."
            ]
        },
        {
            "key": [
                "6.0",
                "SF6_CO2-ekv.",
                "2017"
            ],
            "values": [
                ".."
            ]
        },
        {
            "key": [
                "7.0",
                "CH4",
                "2017"
            ],
            "values": [
                ".."
            ]
        },
        {
            "key": [
                "7.0",
                "CH4_CO2-ekv.",
                "2017"
            ],
            "values": [
                ".."
            ]
        },
        {
            "key": [
                "7.0",
                "CO2",
                "2017"
            ],
            "values": [
                "445"
            ]
        },
        {
            "key": [
                "7.0",
                "CO2-BIO",
                "2017"
            ],
            "values": [
                ".."
            ]
        },
        {
            "key": [
                "7.0",
                "CO2-ekv.",
                "2017"
            ],
            "values": [
                "1694"
            ]
        },
        {
            "key": [
                "7.0",
                "HFC",
                "2017"
            ],
            "values": [
                "1138"
            ]
        },
        {
            "key": [
                "7.0",
                "N2O",
                "2017"
            ],
            "values": [
                "256"
            ]
        },
        {
            "key": [
                "7.0",
                "N2O_CO2-ekv.",
                "2017"
            ],
            "values": [
                "76"
            ]
        },
        {
            "key": [
                "7.0",
                "PFC",
                "2017"
            ],
            "values": [
                "0"
            ]
        },
        {
            "key": [
                "7.0",
                "SF6",
                "2017"
            ],
            "values": [
                "1502"
            ]
        },
        {
            "key": [
                "7.0",
                "SF6_CO2-ekv.",
                "2017"
            ],
            "values": [
                "34"
            ]
        },
        {
            "key": [
                "8.0",
                "CH4",
                "2017"
            ],
            "values": [
                "758"
            ]
        },
        {
            "key": [
                "8.0",
                "CH4_CO2-ekv.",
                "2017"
            ],
            "values": [
                "19"
            ]
        },
        {
            "key": [
                "8.0",
                "CO2",
                "2017"
            ],
            "values": [
                "16420"
            ]
        },
        {
            "key": [
                "8.0",
                "CO2-BIO",
                "2017"
            ],
            "values": [
                "4071"
            ]
        },
        {
            "key": [
                "8.0",
                "CO2-ekv.",
                "2017"
            ],
            "values": [
                "16590"
            ]
        },
        {
            "key": [
                "8.0",
                "HFC",
                "2017"
            ],
            "values": [
                ".."
            ]
        },
        {
            "key": [
                "8.0",
                "N2O",
                "2017"
            ],
            "values": [
                "509"
            ]
        },
        {
            "key": [
                "8.0",
                "N2O_CO2-ekv.",
                "2017"
            ],
            "values": [
                "152"
            ]
        },
        {
            "key": [
                "8.0",
                "PFC",
                "2017"
            ],
            "values": [
                ".."
            ]
        },
        {
            "key": [
                "8.0",
                "SF6",
                "2017"
            ],
            "values": [
                ".."
            ]
        },
        {
            "key": [
                "8.0",
                "SF6_CO2-ekv.",
                "2017"
            ],
            "values": [
                ".."
            ]
        },
        {
            "key": [
                "9.0",
                "CH4",
                "2017"
            ],
            "values": [
                "4311"
            ]
        },
        {
            "key": [
                "9.0",
                "CH4_CO2-ekv.",
                "2017"
            ],
            "values": [
                "108"
            ]
        },
        {
            "key": [
                "9.0",
                "CO2",
                "2017"
            ],
            "values": [
                "781"
            ]
        },
        {
            "key": [
                "9.0",
                "CO2-BIO",
                "2017"
            ],
            "values": [
                "5020"
            ]
        },
        {
            "key": [
                "9.0",
                "CO2-ekv.",
                "2017"
            ],
            "values": [
                "969"
            ]
        },
        {
            "key": [
                "9.0",
                "HFC",
                "2017"
            ],
            "values": [
                ".."
            ]
        },
        {
            "key": [
                "9.0",
                "N2O",
                "2017"
            ],
            "values": [
                "272"
            ]
        },
        {
            "key": [
                "9.0",
                "N2O_CO2-ekv.",
                "2017"
            ],
            "values": [
                "81"
            ]
        },
        {
            "key": [
                "9.0",
                "PFC",
                "2017"
            ],
            "values": [
                ".."
            ]
        },
        {
            "key": [
                "9.0",
                "SF6",
                "2017"
            ],
            "values": [
                ".."
            ]
        },
        {
            "key": [
                "9.0",
                "SF6_CO2-ekv.",
                "2017"
            ],
            "values": [
                ".."
            ]
        }
    ],
    "metadata": [
        {
            "infofile": "ENVIRONMENT",
            "updated": "2023-05-25T13:42:00Z",
            "label": "Total air emissions by sector, greenhouse gas, year and contents",
            "source": "Statistics Sweden"
        }
    ]
}

type TableViewProps = {
    id?: string
}

export const TableView = ({ id }: TableViewProps) => {

    const [data, setData] = useState<any>()

    useEffect(() => {

        const loadData = async () => {
            if (id) {
                const data = await getData(id, {
                    lang: "en",
                    outputFormat: "json"
                })
                setData(data);
            }
        }
        loadData();
    }, [id])

    console.log(data);


    return <div>TableView</div>
}