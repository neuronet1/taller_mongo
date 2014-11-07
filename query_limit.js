/**
 *
 * Created by samuelzv on 7/11/14.
 */
//NOTAS
// Si envias un cero en el limite te va a lanzar un error
// el limite debe ser un entero positivo

var command = null;
var cursor = null;

load('util.js');


// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
// Obtiene los primeros tres elementos
// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
command = {
    $limit: 3
};

cursor = db.conductores.aggregate([command]);

printcursor('Muestra los primeros 3 conductores', cursor);


