conn = new Mongo('127.0.0.1:27017');
db = conn.getDB('romaga');

// Imprime un mensaje y el contenido del cursor
var printcursor = function(message,cursor) {
    print('\n');
    print(message);

    while( cursor.hasNext() ) {
        printjson( cursor.next() );
    }
};