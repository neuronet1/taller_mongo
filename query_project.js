var command = null;
var cursor = null;

load('util.js');


// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
// Solo obten el nombre del cliente
// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••

command = {
    $project : {
        "nomClien":1
    }
};
// Tambien le indicamos que el id no lo muestre
command.$project._id = 0;

cursor = db.solicitudes.aggregate([command]);
printcursor('Solo el nombre del cliente', cursor);


// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
// En lugar de monstrar nomCond muestra Nombre del conductor
// solo que primero ordena por el nombre del conductor
// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
command = [
    {
        $sort: {
            "nomCond": 1
        }
    },
    {
        $project: {
            "_id": 0,
            "Nombre del conductor": "$nomCond"
        }
    }
];

cursor = db.solicitudes.aggregate(command);
printcursor('Mostrando el nombre del conductor', cursor);
