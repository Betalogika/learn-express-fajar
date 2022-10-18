'use strict'

module.exports = function(app){
    var jsonku = require('./pengontrol.js')

    app.route('/')
        .get(jsonku.index)
}