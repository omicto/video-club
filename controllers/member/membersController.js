const express = require('express');
const { Member } = require('../../sequelize');

function list(req, res, next) {
    Member.findAll({}).then(objects => res.json(objects));
}

function index(req, res, next) {
    let id = req.params.id;
    Member.findByPk(id, {}).then(object => res.json(object));
}

function create(req, res, next) {
    let member = new Object;
    member.name = req.body.name;
    member.last_name = req.body.last_name;
    member.address = req.body.address;
    member.phone = req.body.phone;
    member.status = req.body.status;
    Member.create(member).then(member => res.json(member));
}

function update(req, res, next) {
    let id = req.params.id;
    Member.findByPk(id, {}).then((object) => {
        object.name = req.body.name ? req.body.name : object.name;
        object.last_name = req.body.last_name ? req.body.last_name : object.last_name;
        object.address = req.body.address ? req.body.address : object.address;
        object.phone = req.body.phone ? req.body.phone : object.phone;
        object.statusreq.body.status = req.body.status ? req.body.status : object.status;
        object.update({ 'name': object.name, 'last_name': object.last_name, 'address': object.address, 
                        'phone': object.phone, 'status': object.status })
            .then(object => res.json(object));
    });
}

function destroy(req, res, next) {
    let id = req.params.id;
    Member.destroy({ where: { id: id } }).then(object => res.json(object));
}

module.exports = {
    index, list, create, update, destroy
};