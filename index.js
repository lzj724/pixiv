const fs = require('fs')
const request = require('superagent')
const cheerio = require('cheerio')
const dir = require('./config/savedir')
const authorId = require('./config/authorid')
const authorUrl = require('./config/url')
const cookie = require('./config/cookie')
const repeat = require('./api/repeat')
const getPageNum = require('./api/getpagenum')
const savedir = require('./config/saveauthorimg')
const imgList = require('./childdata/imgListdown')
const imgId = require('./childdata/imgid')


async function start(){
    await imgList
    
}

start()
