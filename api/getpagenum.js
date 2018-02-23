const repeat = require('./repeat')

//获取分页数
function getPageNum($){
    var pageUrl = []
    $('.pager-container .page-list li a').each((i,v)=>{
        pageUrl.push(v.attribs.href)
    })
    pageUrl = repeat(pageUrl)
    pageNum = pageUrl.length + 1
    return pageNum
}

module.exports = getPageNum