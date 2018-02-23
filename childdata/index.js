const fs = require('fs')
const request = require('superagent')
const cheerio = require('cheerio')
const dir = require('../config/savedir')
const authorId = require('../config/authorid')
const authorUrl = require('../config/url')
const cookie = require('../config/cookie')
const repeat = require('../api/repeat')
const getPageNum = require('../api/getpagenum')
const host = require('../config/host')
const tips = require('../api/showtips')

//创建保存文件夹
fs.readdir(dir, async (err, data) => {
    console.log(tips.get('[', '创建保存文件夹', ']'))
    if (err) {
        fs.mkdirSync(dir)
    }
})
var page = 0
var temp;
console.log(tips.get('[', '获取分页数', ']'))
//获取所有图片链接
function getPageLink(a = 1) {
    return new Promise(resolve => {
        request.get(authorUrl)
            .query({ "id": authorId })
            .query({ "type": 'all' })
            .query({ "p": a })
            .set({ 'cookie': cookie })
            .set({ 'referer': host })
            .set({ 'user-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.119 Safari/537.36' })
            .end(async (err, data) => {
                var urlLink = []
                var $ = cheerio.load(data.text)
                page = getPageNum($)

                if (!temp) {
                    console.log(tips.get('[', '获取完毕，共  ' + page + '  页', ']'))
                    temp = 1
                }
                $('._image-items .image-item a').each((i, v) => {
                    if (v.attribs.href) {
                        urlLink.push(v.attribs.href)
                    }
                })
                urlLink = repeat(urlLink)
                resolve(urlLink)
            })
    })
}

async function pageLink() {
    var link = []
    console.log(tips.get('[', '获取分页链接', ']'))
    var linkList = await getPageLink()
    console.log(tips.get('[', '获取第1页链接', ']'))
    link.push(...linkList)
    for (var i = 2; i <= page; i++) {
        linkList = await getPageLink(i)
        console.log(tips.get('[', '获取第' + i + '页链接', ']'))
        link.push(...linkList)
        if (i == page) {
            console.log(tips.get('[', '分页链接获取完成', ']'))
            return link
        }
    }
}

module.exports = pageLink()