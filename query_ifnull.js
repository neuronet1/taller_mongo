var command = null;
var cursor = null;

load('util.js');


// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
// Si el campo author no existe muestra un default value
// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
command = [
    {
        $project: {
            "_id": 1,
            "sku": 1,
            "aut": {
                $ifNull: [ "$author","Desconocido" ]
            }
        }
    }
];

cursor = db.sample2.aggregate(command);
printcursor('El resultado validando el author es:', cursor);
