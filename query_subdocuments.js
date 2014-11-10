var command = null;
var cursor = null;

load('util.js');


// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
// Quiero mostrar el folio
// y encapsulado en un campo bitacora
// la fecha de solicitude, origen, destino y chofer
// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
command = [
    {
        $project: {
            "_id":0,
            "folio": "$foli",
            "bitacora": {
                "fecha": "$fsol",
                "origen": "$borig",
                "destino": "$bdest",
                "chofer": "$nomCond"
            }
        }
    }
];

cursor = db.solicitudes.aggregate(command);
printcursor('El resultado  creando un subdocumento es:', cursor);
