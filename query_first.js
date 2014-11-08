var command = null;
var cursor = null;

load('util.js');


// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
// Agrupa por compania y obtiene el nombre del primer chofer
// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
command = {
    $group: {
        "_id": "$nomClien",
        "primero": {
            "$first": "$nomCond"
        }
    }
};

cursor = db.solicitudes.aggregate([command]);
printcursor('El primer chofer encontrado para compania es', cursor);
