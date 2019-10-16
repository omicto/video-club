const express = require('express');

function list(req, res, next) {
    let users = [];
    res.json(users);
}

function one(req, res, next){
    let user = new Object();
    res.json(user);
}

function create(req, res, next){

}

function update(req, res, next){

}

function remove(req, res, next){

}

module.exports = {
    list,
    one,
    create,
    update,
    remove
}