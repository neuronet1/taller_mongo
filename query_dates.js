var command = null;
var cursor = null;

load('util.js');


// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
// Descomponemos una fecha en sus elementos básicos
// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
command = [
    {
        $project: {
            dayOfYear: {"$dayOfYear":  "$fsol"},
            dayOfMont: {"$dayOfMonth": "$fsol"},
            dayOfWeek: {"$dayOfWeek":  "$fsol"},
            year:      {"$year":       "$fsol"},
            month:     {"$month":      "$fsol"},
            week:      {"$week":       "$fsol"},
            hour:      {"$hour":       "$fsol"},
            minute:    {"$minute":     "$fsol"},
            second:    {"$second":     "$fsol"},
            millisecond:    {"$millisecond":     "$fsol"}
        }
    }
];

cursor = db.solicitudes.aggregate(command);
printcursor('Los valores de la fecha son:', cursor);
