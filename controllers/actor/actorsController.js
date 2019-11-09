const express = require('express');
const { Actor } = require('../../sequelize');

function list(req, res, next){
  Actor.findAll({}).then(objects => res.json(objects));
}

function index(req, res, next){
  let id = req.params.id;
  Actor.findByPk(id, {}).then(object => res.json(object));
}

function create(req, res, next){
  let actor = new Object;
  actor.name = req.body.name;
  actor.last_name = req.body.last_name;
  Actor.create(actor).then(actor => res.json(actor));
}

function update(req, res, next){
  let id = req.params.id;
  Actor.findByPk(id, {}).then((object) =>{
    object.name = req.body.name ? req.body.name : object.name;
    object.last_name = req.body.last_name ? req.body.last_name : object.last_name;
    object.update({'name':object.name, 'last_name':object.last_name})
    .then( object => res.json(object));
  });
}

function destroy(req, res, next){
  let id = req.params.id;
  Actor.destroy({ where: {id: id}}).then( object => res.json(object));
}

module.exports = {
  index, list, create, update, destroy
}
