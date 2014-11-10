var command = null;
var cursor = null;
load('util.js');


// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
// Determina el trimestre al que pertenece la fecha
// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
command = [
    {
        $project: {
            "_id":0,
            "fecha":"$fsol",
            "mes": {
                "$month": "$fsol"
            }
       }
    },
    {
        $project: {
            "fecha": 1,
            "trimestre": {
                $cond: {
                    if: {
                        $gte: ["$mes",10]
                    },
                    then: 4,
                    else: {
                        $cond: {
                            if: {
                                $gte: ["$mes",6]
                            },
                            then: 3,
                            else: {
                                $cond: {
                                    if: {
                                        $gte: ["$mes", 4]
                                    },
                                    then:2,
                                    else:1
                                }
                            }
                        }
                    }
                }
            }
        }
    }
];

cursor = db.solicitudes.aggregate(command);
printcursor('Las fechas por trimestre son:', cursor);
