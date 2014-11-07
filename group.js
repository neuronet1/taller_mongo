var command = null;
var cursor = null;

conn = new Mongo('127.0.0.1:27017');
db = conn.getDB('romaga');


var printcursor = function(message,cursor) {
   print('\n');
   print(message);

   while( cursor.hasNext() ) {
      printjson( cursor.next() );
   }
};

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

