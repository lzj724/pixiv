const id = require('./authorid')
var authorName = require('../api/getauthorname')

async function img(){
    var name = ''
    var author =  await authorName()
        var img = '/' + id + ' ' + author
        return img
    }
    
    module.exports = img()