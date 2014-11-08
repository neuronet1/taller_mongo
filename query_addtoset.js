var command = null;
var cursor = null;

load('util.js');


// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
// Agrupa a los choferes por compania
// addToSet no agrega duplicados
// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
command = {
    $group: {
        "_id": "$nomClien",
        "choferes": {
            "$addToSet": "$nomCond"
        }
    }
};

cursor = db.solicitudes.aggregate([command]);
printcursor('Choferes que trabajaron por compania', cursor);


// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
// Agrupa a los permisionarios por servicio
// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
command = {
    $group: {
        "_id": "$nomServi",
        "permisionarios" : {
            "$addToSet": "$nomPer"
        }
    }
};

cursor = db.solicitudes.aggregate([command]);
printcursor('Permisionarios agrupados por servicio', cursor);
