const cheerio = require('cheerio')
const repeat = require('../api/repeat')
const request = require('superagent')
const cookie = require('../config/cookie')

 function newPage(oldurl, target){
    return new Promise(async (resolve)=>{
        request.get(target)
                    .set({ 'cookie': cookie })
                    .set({ 'Referer': oldurl })
                    .set({ 'user-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.119 Safari/537.36' })
                    .end(async(err,res)=>{
                        var $ = cheerio.load(res.text)
                        var imgArr = []
                        $('.item-container img').each(async(i,v)=>{
                            if(v.attribs['data-src']){
                                imgArr.push(v.attribs['data-src'])
                            }
                        })
                        resolve(imgArr)
                    })
    })

}

module.exports = newPage