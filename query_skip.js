//NOTAS
// Si envias un negativo en el skip te va a lanzar un error
// el skip debe cero o un entero positivo

var command = null;
var cursor = null;

load('util.js');


// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
// Ignora el primer registro
// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
command = {
    $skip: 10
};

cursor = db.conductores.aggregate([command]);
printcursor('Ignora el primer registro', cursor);


// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
// Ignora los primeros dos y obten 5
// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
command = [
    {
        $skip:2
    },
    {
        $limit:3
    }
];

cursor = db.conductores.aggregate(command);
printcursor('Ignora los primeros dos y obtiene tres', cursor);
