'use strict';

var should = require('should');
var app = require('../../app');
var User = require('./user.model');

var user = new User({
  provider: 'local',
  name: 'Fake User',
  email: 'test@test.com',
  password: 'password'
});

describe('User Model', function() {
  before(function(done) {
    // Clear users before testing
    User.remove().exec().then(function() {
      done();
    });
  });

  afterEach(function(done) {
    User.remove().exec().then(function() {
      done();
    });
  });

  it('Debería empezar sin usuarios', function(done) {
    User.find({}, function(err, users) {
      users.should.have.length(0);
      done();
    });
  });

  it('Debería fallar al guardar usuario duplicado', function(done) {
    user.save(function() {
      var userDup = new User(user);
      userDup.save(function(err) {
        should.exist(err);
        done();
      });
    });
  });

  it('Debería fallar al guardar usuario sin email', function(done) {
    user.email = '';
    user.save(function(err) {
      should.exist(err);
      done();
    });
  });

  it("Debería permitir acceso al usuario cuando la clave es válida", function() {
    return user.authenticate('password').should.be.true;
  });

  it("Debería no permitir acceso al usuario cuando la clave es inválida", function() {
    return user.authenticate('blah').should.not.be.true;
  });
});
