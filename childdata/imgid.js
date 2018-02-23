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
const tips = require('../api/showtips')

//页面所有图片链接地址
async function linkList() {
    return new Promise(async (resolve) => {
        var link = await child
        var imgId = []
        console.log(tips.get('[','获取图片id',']'))    
        //获取图片id
        link.forEach((v, i) => {
            imgId.push(v.split('id=')[1])
        })
        console.log(tips.get('[','所有图片id获取完成',']'))            
        resolve(imgId)
    })
}

module.exports = linkList()
