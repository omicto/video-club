const express = require('express');

function index(req, res, next) {
    res.render('index', { title: 'Express' });
}

module.exports = {
    index
}