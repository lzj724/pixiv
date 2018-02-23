const picList = require('./imgdata')
const down = require('./imgdown')
const tips = require('../api/showtips')

async function downallImg() {
    var list = await picList
    console.log(tips.get('[','共计' + list.length + '张图片',']'))    
    list.forEach(async (v, i) => {
        var base = v.split('/')
        var filename = base[base.length - 1]
        await down(v, filename, list.length)
    });
}

module.exports = downallImg()