const MongoClient = require("mongodb").MongoClient
        express = require ("express"),
        ObjectID = require('mongodb').ObjectID,
        consolidate = require("consolidate"),
        handlebars = require("handlebars");
        
var app = express(),
db;

app.engine('hbs', consolidate.handlebars);

app.set ('views', './views');
app.set('view engine', 'hbs');

app.use(express.static('public'));

MongoClient.connect('mongodb://localhost:27017', function (err, client) {
    if (err) throw err;

    db = client.db('fidget');

    app.listen(3000);
});

app.get("/",(req, res) => {

    var productos = db.collection('productos').find();

    if (req.query.color) 
        productos.filter({color : req.query.color});
        
    if (req.query.precio){
        console.log(req.query.precio);

        productos.filter({precio : {
            $gte: parseFloat(req.query.precio[0]),
            $lte: parseFloat(req.query.precio[1])
        }
         });
    }

    if (req.query.lados) 
         productos.filter({
             lados: req.query.lados
         });

    productos.toArray((err, result) => {
       
        res.render("index", {
            productos : result
        })
    });

});

app.get("/productos/:direccion", (req, res) => {
    console.log("hola");
    db.collection('productos').find (
        {
            direccion: req.params.direccion
        }
    ).toArray((err, result) => {
        console.log(result[0]);
        res.render('producto', {
            fidget: result[0]
        });
    });
});

app.get('/producto/:id', (req, res) => {
    db.collection('productos').find({ direccion: req.params.id }).toArray((err, result) => res.send(result))
});

app.get('/checkout', (req, res) => {
    res.render('checkout');
});

app.get('/productosPorIds', (req, res) => {
    console.log(req.query.ids);
    var arreglo = req.query.ids.split(',');
    arreglo = arreglo.map(function(id) {
        return new ObjectID(id);
    });
    var prod = db.collection('productos')
        .find({ _id: { $in: arreglo } })
        .toArray((err, result) => {
            res.send(result);
        });
});


