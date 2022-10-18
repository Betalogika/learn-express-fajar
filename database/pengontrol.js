'use strict'

var response = require('./res')
var connection = require('./konektor')

exports.index = function(req, res){
    response.ok('rest api jalan2', res)
}