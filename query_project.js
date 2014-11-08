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

