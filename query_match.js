var command = null;
var cursor = null;

load('util.js');


// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
// Filtra los servicios que han hido hacia el pozo FURBERO 3404
// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
var command = {
    $match: {
        "bdest": "FURBERO 3404"
    }
};

cursor = db.solicitudes.aggregate([command]);
printcursor('Los servicios hacia FURBERO 3404 son', cursor);



// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
// Obtiene solo los nombres de las personas que les gusta el color verde
// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
var command = {
    $match: {
        "colores":'verde'
    }
};

cursor = db.elementos.aggregate([command]);
printcursor('Las personas que les gusta el color verde son ', cursor);



// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
// busca en un arreglo
// Obtiene solo los nombres de las personas que les gusta el color morado
// y que se llaman vane
// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
command = {
    $match: {
        "colores":"morado",
        "nombre":"vane"
    }
};

cursor = db.elementos.aggregate([command]);
printcursor('Las personas que les gusta el color morado y se llaman vane son ', cursor);



// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
// Obtiene solo los registros cuyo itot >= 5000 y itot <= 5999
// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
command = {
    $match: {
        "itot": {
            $gte: 5000,
            $lte: 5999
        }
    }
};

cursor = db.solicitudes.aggregate([command]);
printcursor('Los registros con itot >= 5000 y itot <= 5999', cursor);


