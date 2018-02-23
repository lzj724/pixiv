function repeat(arr){
    if(!arr)
        return 'err'
    return Array.from(new Set(arr))
}

module.exports = repeat