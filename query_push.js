var command = null;
var cursor = null;

load('util.js');


// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
// Agrupa a los choferes por compania
// push acumula duplicados
// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••

var command = {
    $group: {
        "_id": "$nomClien",
        "choferes": {
            "$push": "$nomCond"
        }
    }
};

cursor = db.solicitudes.aggregate([command]);
printcursor('Los choferes (duplicados) por compania son:', cursor);
