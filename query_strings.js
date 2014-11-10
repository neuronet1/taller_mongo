var command = null;
var cursor = null;
load('util.js');


// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
// Concatenamos el origen + el destino
// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
command = [
    {
        $project: {
            "ruta": {
                $concat: ["Salida:","$borig","  -  ", "Destino:",  "$bdest"]
            }
        }
    }
];

cursor = db.solicitudes.aggregate(command);
printcursor('El resultado de las operaciones es:', cursor);
