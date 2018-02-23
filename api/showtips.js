const String = require('./string')

function tips(start,data,end){
    return start+data.padCenter(80,'=')+end
}


module.exports = {
    get(start,data,end){
        return tips(start,data,end)
    }
}