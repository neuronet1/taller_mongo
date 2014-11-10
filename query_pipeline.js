var command = null;
var cursor = null;
load('util.js');


// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
// Muestra: quarter, year, saleTotal
// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
command = [
    {
        $project: {
            "_id":0,
            "date":"$fsol",
            "saleTotal": {$multiply:["$itot",100]},
            "mes": {
                "$month": "$fsol"
            }
        }
    },
    {
        $project: {
            "year": { "$year": "$date" },
            "saleTotal":1,
            "quarter": {
                $cond: {
                    if: {
                        $gte: ["$mes",10]
                    },
                    then: 'Q4',
                    else: {
                        $cond: {
                            if: {
                                $gte: ["$mes",6]
                            },
                            then: 'Q3',
                            else: {
                                $cond: {
                                    if: {
                                        $gte: ["$mes", 4]
                                    },
                                    then:'Q2',
                                    else:'Q1'
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    {
        $group: {
            "_id": {
                "q": "$quarter",
                "y": "$year"
            },
            "total": {
                "$sum": "$saleTotal"
            },
            "average": {
                "$avg": "$saleTotal"
            }
        }
    },
    {
        "$sort": {
            "_id.y": 1,
            "_id.q": 1
        }
    },
    {
        "$group": {
            "_id": "$_id.q",
            "years": {
                "$push": {
                    "year": "$_id.y",
                    "QTotal": "$total",
                    "QAverage": "$average"
                }
            },
            "totalY": {
                "$sum":"$total"
            }
        }
    }
];

cursor = db.solicitudes.aggregate(command);
printcursor('Las fechas por trimestre son:', cursor);
