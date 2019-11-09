const express = require('express');
const { Director } = require('../../sequelize');

function list(req, res, next){
  Director.findAll({}).then(objects => res.json(objects));
}

function index(req, res, next){
  let id = req.params.id;
  Director.findByPk(id, {}).then(object => res.json(object));
}

function create(req, res, next){
  let director = new Object;
  director.name = req.body.name;
  director.last_name = req.body.last_name;
  Director.create(director).then(director => res.json(director));
}

function update(req, res, next){
  let id = req.params.id;
  Director.findByPk(id, {}).then((object) =>{
    object.name = req.body.name ? req.body.name : object.name;
    object.last_name = req.body.last_name ? req.body.last_name : object.last_name;
    object.update({'name':object.name, 'last_name':object.last_name})
    .then( object => res.json(object));
  });
}

function destroy(req, res, next){
  let id = req.params.id;
  Director.destroy({ where: {id: id}}).then( object => res.json(object));
}

module.exports = {
  index, list, create, update, destroy
}
