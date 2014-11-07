var command = null;
var cursor = null;

load('util.js');


// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
// Obtiene el número de solicitudes utilizando sum
// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
command =  {
   $group : {
      "_id": "todos",
      "sum": {
         "$sum":1
      }
   }
};

cursor = db.solicitudes.aggregate([command]);
printcursor('El número de solicitudes es:', cursor);


// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
// Obtiene el promedio del campo itot
// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
command = {
   $group: {
      "_id": "todos",
      "avg" : {
         $avg: "$itot"
      }
   }
};

cursor = db.solicitudes.aggregate([command]);
printcursor('El promedio es:', cursor);

// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
// Obtiene el mínimo del campo itot
// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••

command = {
   $group: {
      "_id": "todos",
      "minimo": {
         $min: "$itot"
      }
   }
};

cursor = db.solicitudes.aggregate([command]);
printcursor('El mínimo es:', cursor);


// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
// Obtiene el máximo del campo itot
// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
command = {
   $group: {
      "_id": "todos",
      "maximo": {
         $max: "$itot"
      }
   }
};

cursor = db.solicitudes.aggregate([command]);
printcursor('El máximo es', cursor);


// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
// Obtiene el contador, máximo, mínimo y promedio del campo itot
// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••

command = {
   $group: {
      "_id": "todos",
      "cuantos": {
         "$sum":1
      },
      "promedio": {
         "$avg":"$itot"
      },
      "maximo": {
         "$max":"$itot"
      },
      "minimo": {
         "$min":"$itot"
      }
   }
};

cursor = db.solicitudes.aggregate(command);
printcursor('Los valores de los agregados son:', cursor);



// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
// Obtiene el contador, máximo, mínimo y promedio del campo itot
// agrupado por el nombre del cliente
// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••

command = {
   $group: {
      "_id": "$nomClien",
      "cuantos": {
         "$sum":1
      },
      "promedio": {
         "$avg":"$itot"
      },
      "maximo": {
         "$max":"$itot"
      },
      "minimo": {
         "$min":"$itot"
      }
   }
};

cursor = db.solicitudes.aggregate(command);
printcursor('Los valores de los agregados son:', cursor);

// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
// Sumariza un elemento anidado
// agrupado por el sku
// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••

var command = {
   $group : {
      "_id": "$sku",
      "promedio": {
         "$avg": "$item.qty"
      }
   }
};

cursor = db.sample2.aggregate(command);
printcursor('El promedio de el campo qty es', cursor);
