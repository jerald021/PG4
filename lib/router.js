Router.configure({
    loadingTemplate: 'loading',
    layoutTemplate: 'mainLayout',
    notFoundTemplate: 'notFound',
    waitOn: function() {
        return Meteor.subscribe('articulos');
    }
});

Router.route('/', function () {
    this.render('listaArticulos');
});

Router.route('/articulo/:_id', function () {
    this.render('articulo');
});

Router.route('/insertar', function () {
    this.render('insertarArticulo');
});

Router.route('/login', function () {
    this.render('login');
});

Router.route('/registro', function () {
    this.render('registro');
});

Router.route('/buscar', function () {
    this.render('search');
});
