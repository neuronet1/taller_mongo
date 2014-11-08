var command = null;
var cursor = null;

load('util.js');


// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
// Ordena los conductores por nombre
// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
command = {
    $sort: {
        "nomb":1
    }
};

cursor = db.conductores.aggregate([command]);
printcursor('Conductores ordenados por nombre', cursor);


