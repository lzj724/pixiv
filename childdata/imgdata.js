const fs = require('fs')
const request = require('superagent')
const cheerio = require('cheerio')
const dir = require('../config/savedir')
const authorId = require('../config/authorid')
const childurl = require('../config/childurl')
const cookie = require('../config/cookie')
const repeat = require('../api/repeat')
const getPageNum = require('../api/getpagenum')
const child = require('../childdata')
const savedir = require('../config/saveauthorimg')
const refre = require('../api/referer')
const imgId = require('./imgid')
const down = require('./imgdown')
const newPage = require('./imgpage')
const host = require('../config/host')
const tips = require('../api/showtips')
var arr = []
async function imgList() {
    var imgid = await imgId
    var count = 0
    return new Promise(async resolve => {
        console.log(tips.get('[','获取图片地址',']'))
        imgid.forEach((v, i) => {
            request.get(childurl)
                .query({ 'mode': 'medium', 'illust_id': v })
                .set({ 'cookie': cookie })
                .set({ 'referer': refre })
                .set({ 'user-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.119 Safari/537.36' })
                .end(async (err, data) => {
                    var path = host + data.req.path
                    var $ = cheerio.load(data.text)
                    var imgUrl;
                    if ($('.wrapper .original-image')['0']) {
                        imgUrl = $('.wrapper .original-image')['0'].attribs['data-src']
                    } else {
                        var target = host + '/' + $('.layout-a .works_display a')['0'].attribs.href
                        imgUrl = await newPage(path, target)
                    }
                    count++
                    if (typeof imgUrl == 'string') {
                        arr.push(imgUrl)
                    } else {
                        arr.push(...imgUrl)
                    }
                    if (count == imgid.length) {
                       console.log(tips.get('[','所有图片地址获取完成',']'))                        
                        resolve(arr)
                    }
                })
        })

    })
}

module.exports = imgList()

