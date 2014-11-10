var command = null;
var cursor = null;

load('util.js');


// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
// itot, lo multiplicamos, sumamos y dividimos
// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
command = [
    {
        $project: {
            "_id": 0,
            "original": "$itot",
            "multiplicacion" : {
                $multiply: ["$itot",100]
            },
            "suma" : {
                $add: ["$itot", 100]
            },
            "division": {
                $divide: ["$itot",2]
            }
        }
    }
];

cursor = db.solicitudes.aggregate(command);
printcursor('El resultado de las operaciones es:', cursor);
