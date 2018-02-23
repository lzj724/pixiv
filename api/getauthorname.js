const request = require('superagent')
const cheerio = require('cheerio')
const dir = require('../config/savedir')
const authorId = require('../config/authorid')
const authorUrl = require('../config/url')
const cookie = require('../config/cookie')
const repeat = require('../api/repeat')


var getAuthor = async function () {
    return new Promise((resolve, reject) => {
        request.get(authorUrl)
            .query({ "id": authorId })
            .set({ 'cookie': cookie })
            .end((err, data) => {
                var $ = cheerio.load(data.text)
                var username = $('.user-name')['0'].attribs.title
                        resolve(username)
            })
    })
}


module.exports = getAuthor