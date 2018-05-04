const express = require ("express"),
        consolidate = require("consolidate"),
        handlebars = require("handlebars");
var app = express();
var queVaria = "holi";
app.engine('hbs', consolidate.handlebars);

app.set ('views', './views');
app.set('view engine', 'hbs');

app.use(express.static('public'));

app.get("/",(req, res) => {
    res.render("index", {
        variable : queVaria
    });
});

app.listen(3000);

/*
para instalar mongod
archivos de programa mongod server 3.4 bin. Run gitbash here: ./mongod. Crear carpeta mongo/db en C: . Volver a correr

Para buscar:
db.getCollection('countries').find({}, {area:0})
0 para ignorar 1 para buscar ese dato en especifico

'name.common' rama y division por puntos entre comillas. Esto hace que aparezca ese valor de esa rama especifica,

Para buscar un numero exacto se coloca despues de los ":"

Para buscar  por criterio exacto en el primer valor se coloca la cosa: $(palabra reservada)lt

lt: less than
gt: greatter than
gte: greater than or equal
lte: less than or equal.

.sort({area:1})

languages: {"spa": "Spanish"}
Especificar una palabra especifica, unica y sola.

'languages.spa': "Spanish"
Especificar que exista spa y que sea Spanish
            'languages.spa': {$exists: 1}
Especificar que exista languages.spa y ya. Solo que exista.

*/
