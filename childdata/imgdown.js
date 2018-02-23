const request = require('superagent')
const savedir = require('../config/saveauthorimg')
const fs = require('fs')
const dir = require('../config/savedir')
const refre = require('../api/referer')
const tips = require('../api/showtips')

async function Savedir() {
    var imgdir = await savedir
    //创建保存文件夹
    fs.readdir(dir + imgdir, async (err, data) => {
        if (err) {
            fs.mkdirSync(dir + imgdir)
        }
    })
}

Savedir()
var count = 1
async function imagedownload(img, imgname, imgCount) {
    var imgdir = await savedir
    return new Promise(async (resolve, reject) => {
        var fw = fs.createWriteStream(dir + imgdir + '/' + imgname)
        request.get(img)
            .set({ 'referer': refre })
            .set({ 'user-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.119 Safari/537.36' })
            .end(async (err, res) => {
                fw.write(res.body)
                fw.end()
                console.log(tips.get('[',`已完成(${count}/${imgCount})`,']'))
                if(imgCount == count){
                    console.log(tips.get('[','所有图片已下载完成',']'))
                }
                count++
                resolve('success')
            })
    })
}

module.exports = imagedownload