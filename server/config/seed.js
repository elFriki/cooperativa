/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Herramientas de desarrollo',
    info : 'Integración con las herramientas más populares como Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, y Less.'
  }, {
    name : 'Integración cliente servidor',
    info : 'Construida con una base poderosa y divertida: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Sistema de construcción inteligente',
    info : 'El sistema ignora ficheros especificados en la construcción, permitiendo la independencia de los test del código de la app. Inyecta automáticamente scripts y estilos en el index.html'
  },  {
    name : 'Estructura modular',
    info : 'Máxima reutilización y escalado gracias a la estructura cliente servidor siguiendo normativa Buenas Prácticas'
  },  {
    name : 'Construcción optimizada',
    info : 'El proceso de construcción empaqueta las plantillas como carga útil de JavaScript únicos, minimificando todos los scripts/css/imágenes, y vuelve a escribir los nombres de los activos para almacenar en caché.'
  },{
    name : 'Desarrollo en caliente http://www.danielclemente.com/',
    info : 'Despliega fácilmente la app en Heroku u Openshift con los subgeneradores de heroku y openshift'
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'fores',
    email: 'ferdycom@gmail.com',
    password: '0492'
  }, function() {
      console.log('Usuarios rellenados');
    }
  );
});