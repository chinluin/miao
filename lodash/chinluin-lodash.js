var chinluin = function() {
  chunk: function chunk(ary,size) {
    let n = Math.floor(ary.length / size)
    if(size === 0 || n === 0)
      return ary
    let result = []
    let count = -1
    for(let i=1; i<=n; i++) {
      count++
      result.push([])
      for(let j=i*size-size; j<i*size; j++) {
        result[count].push(ary[j])
      }
    }
    let last = ary.length % size
    for(let i=1; i<=last; i++) {
      count++
      result.push([])
      result[count].unshift(ary[ary.length-i])
    }
    return result
  },

  compact: function compact(ary) {
    let result = []
    for(let i=0; i<ary.length; i++) {
      if(ary[i]) {
        result.push(ary[i])
      }
    }
    return result
  },

  difference: function difference(ary,val) {
    let map = {}
    for(let i=0; i<val.length; i++) {
      if(!(val[i] in map))
        map[val[i]] = 1
    }
    let result = []
    for(let i=0; i<ary.length; i++) {
      if(!(ary[i] in map))
        result.push(ary[i])
    }
    return result
  },

  drop: function drop(ary,n=1) {
    ary.splice(0,n)
    return ary
  },

  dropRight: function dropRight(ary,n=1) {
    if(n >= ary.length)
      return []
    ary.splice(ary.length-n,n)
    return ary
  },

  fill: function fill(ary, val, start=0, end=ary.length) {
    for(let i=start; i<end; i++) {
      ary[i] = val
    }
    return ary
  },

  fromPairs: function fromPairs(pairs) {
    let result = {}
    for(let i=0; i<pairs.length; i++) {
      if(!(pairs[i][0] in result))
        result[pairs[i][0]] = pairs[i][1]
        else
          continue
    }
    return result
  },

  head: function head(ary) {
    if(ary.length === 0)
      return undefined
    return ary[0]
  },

  indexOf: function indexOf(ary, val, fromIndex=0) {
    for(let i=fromIndex; i<ary.length; i++) {
      if(ary[i] === val)
        return i
    }
    return -1
  },

  initial: function initial() {
    for(let i=0; i<arguments.length; i++) {
      arguments[i].pop(ary[ary.length-1])
      return arguments[i]
    }
  },

  intersection: function intersection() {
    
  },

  join: function join(ary,separator=',') {
    if(ary.length === 0)
      return []
    let result = ''
    for(let i=0; i<ary.length-1; i++) {
      result = result + ary[i] + separator
    }
    return result + ary[ary.length-1]
  },

  last: function last(ary) {
    return ary[ary.length-1]
  },

  lastIndexOf: function lastIndexOf(ary, val, fromIndex=ary.length-1) {
    for(let i=fromIndex; i>=0; i--) {
      if(ary[i] === val)
        return i
    }
    return -1
  },

  reverse: function reverse(ary) {
    let n = ary.length
    let mid = Math.floor(n / 2)
    for(let i=0; i<=mid; i++) {
      if(n % 2 === 0 && i === mid) {
        break
      }
      let temp = ary[i]
      ary[i] = ary[n - 1 - i]
      ary[n - 1 - i] = temp
    }
    return ary
  },

  pull: function pull(ary) {
    let result = []
    let map = {}
    for(let i=1; i<arguments.length; i++) {
      if(!(arguments[i] in map))
        map[arguments[i]] = 1
    }
    for(let i=0; i<ary.length; i++) {
      if(!(ary[i] in map))
        result.push(ary[i])
    }
    return result  
  },

  pullAll: function pullAll(ary,val) {
    let result = []
    let map = {}
    for(let i=0; i<val.length; i++) {
      if(!(val[i] in map))
        map[val[i]] = 1
    }
    for(let i=0; i<ary.length; i++) {
      if(!(ary[i] in map))
        result.push(ary[i])
    }
    return result    
  },

  pullAt: function pullAt(ary) {
    let result = []
    for(let i=0; i<ary.length; i++) {
      for(let j=1; j<arguments.length; j++) {
        if(i === arguments[j]) {
          result.push(ary[i])
          ary[i] = undefined
        }
      }
    }
    for(let i=0; i<ary.length; i++) {
      if(ary[i] === undefined) {
        ary.splice(i,1)
        i--
      }
    }
    return result
  },

  remove: function remove(ary,test) {
    let result = []
    for(let i=0; i<ary.length; i++) {
      if(test(ary[i])) {
        result.push(ary[i])
        ary.splice(i, 1)
        i--
      }
    }
    return result
  },

  slice: function slice(ary, start=0, end=ary.length) {
    let result = []
    for(let i=start; i<ary.length; i++) {
      result.push(ary[i])
    }
    return result
  },

  sortedIndex: function sortedIndex(ary, val) {
    for(var i=0; i<ary.length; i++) {
      if(ary[i] >= val)
        return i
    }
    return i
  },

  sortedIndexOf: function sortedIndexOf(ary,val) {
    for(let i=0; i<ary.length; i++) {
      if(ary[i] === val)
        return i
    }
    return -1
  },

  sortedLastIndex: function sortedLastIndexOf(ary,val) {
    for(let i=ary.length-1; i>=0; i--) {
      if(ary[i] === val)
        return i
    }
    return -1   
  },

  sortedUniq: function sortedUniq(ary) {
    let result = []
    let map = {}
    for(let i=0; i<ary.length; i++) {
      if(!(ary[i] in map)) {
        result.push(ary[i])
        map[ary[i]] = 1
      } else
        continue
    }  
    return result    
  },

  sortedUniqBy: function sortedUniqBy(ary,test) {
    let result = []
    for(let i=0; i<ary.length; i++) {
      result.push(test(ary[i]))
    }
    let map = {}
    let resultNoReapt = []
    for(let i=0; i<result.length; i++) {
      if(!(result[i] in map)) {
        map[result[i]] = 1
        resultNoReapt.push(ary[i])
      } else {
        continue
      }
    }
    return resultNoReapt
  },

  tail: function tail(ary) {
    let result = []
    for(let i=1; i<ary.length; i++) {
      result.push(ary[i])
    }
    return result
  },

  take: function take(ary, n=1) {
    let result = []
    if(n > ary.length)
      n = ary.length
    for(let i=0; i<n; i++) {
      result.push(ary[i])
    }
    return result
  },

  takeRight: function takeRight(ary, n=1) {
    let result = []
    if(n > ary.length)
      n = ary.length
    for(let i=ary.length-1; i>=(ary.length-n); i--) {
      result.unshift(ary[i])
    }
    return result
  },

  union: function union() {
    let len = arguments.length
    let map = {}
    let result = []
    for(let i=0; i<len; i++) {
      for(let j=0; j<arguments[i].length; j++) {
        if(!(arguments[i][j] in map)) {
          map[arguments[i][j]] = 1
          result.push(arguments[i][j])
        } else {
          continue
        }
      }
    }
    return result
  },

  uniq: function uniq(ary) {
    let result = []
    let map = {}
    for(let i=0; i<ary.length; i++) {
      if(!(ary[i] in map)) {
        result.push(ary[i])
        map[ary[i]] = 1
      } else
        continue
    }  
    return result    
  },

  xor: function xor() {
    let result = []
    let map = {}
    for(let j=0; j<arguments.length; j++) {
      for(let i=0; i<arguments[j].length; i++) {
        if(!(arguments[j][i] in map)) {
          result.push(arguments[j][i])
          map[arguments[j][i]] = 1
        } else {
          let a =result.indexOf(arguments[j][i])
          result.splice(a,1)
        }
      }
    }  
    return result   
  },


  // return {
  //   chunk,
  //   compact,
  //   difference,
  //   drop,
  //   dropRight,
  //   fill,
  //   fromPairs,
  //   head,
  //   indexOf,
  //   initial,
  //   intersection,
  //   join,
  //   last,
  //   lastIndexOf,
  //   reverse,
  //   pull,
  //   pullAll,
  //   pullAt,
  //   remove,
  //   slice,
  //   sortedIndex,
  //   sortedIndexOf,
  //   sortedLastIndex,
  //   sortedLastIndexOf,
  //   sortedUniq,
  //   sortedUniqBy,
  //   tail,
  //   take,
  //   takeRight,
  //   union,
  //   uniq,
  //   xor,
  // }










}