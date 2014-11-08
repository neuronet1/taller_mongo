/*
 * El valor de unwind debe ser un array, en caso contrario
 * se lanzará una excepción
 *
 * Si el campo no existe no hay problema solo se regresa
 * un arreglo vacio, pero si existe este debe ser un arreglo
 */

var command = null;
var cursor = null;

load('util.js');


// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
// Desagrega el nombre con cada color
// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••

command = {
    $unwind:"$colores"
};

cursor = db.elementos.aggregate([command]);
printcursor('El nombre con el color desagregados', cursor);

