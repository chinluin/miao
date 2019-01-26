var chinluin = function() {
  function chunk(ary,size) {
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
  }

  function compact(ary) {
    let result = []
    for(let i=0; i<ary.length; i++) {
      if(ary[i]) {
        result.push(ary[i])
      }
    }
    return result
  }

  function difference(ary) {
    let map = {}
    for(let j=1; j<arguments.length; j++) {
      for(let i=0; i<arguments[j].length; i++) {
        if(!(arguments[j][i] in map))
          map[arguments[j][i]] = 1
      }
    }
    let result = []
    for(let i=0; i<ary.length; i++) {
      if(!(ary[i] in map))
        result.push(ary[i])
    }
    return result
  } 

  function drop(ary,n=1) {
    ary.splice(0,n)
    return ary
  }

  function dropRight(ary,n=1) {
    if(n >= ary.length)
      return []
    ary.splice(ary.length-n,n)
    return ary
  }

  function fill(ary, val, start=0, end=ary.length) {
    for(let i=start; i<end; i++) {
      ary[i] = val
    }
    return ary
  }

  function fromPairs(pairs) {
    let result = {}
    for(let i=0; i<pairs.length; i++) {
      if(!(pairs[i][0] in result))
        result[pairs[i][0]] = pairs[i][1]
        else
          continue
    }
    return result
  }

  function head(ary) {
    if(ary.length === 0)
      return undefined
    return ary[0]
  }

  function indexOf(ary, val, fromIndex=0) {
    for(let i=fromIndex; i<ary.length; i++) {
      if(ary[i] === val)
        return i
    }
    return -1
  }

  var initial = function(ary) {
      ary.pop()
      return ary
  }

  function intersection() {
    let noReapt = []
    for(let i=0; i<arguments.length; i++) {
      let noReaptMap = {}
      noReapt.push([])
      for(let j=0; j<arguments[i].length; j++) {
        if(!(arguments[i][j] in noReaptMap)) {
          noReaptMap[arguments[i][j]] = 1
          noReapt[i].push(arguments[i][j])
        }
      }
    }
    let map = {}
    for(let i of noReapt[0]) {
      map[noReapt[0][i-1]] = 1
    }
    for(let i=1; i<noReapt.length; i++) {
      for(let j=0; j<noReapt[i].length; j++) {
        if(noReapt[i][j] in map)
          map[noReapt[i][j]]++
      }
    }
    let result = []
    for(let key in map) {
      if(map[key] === noReapt.length)
        result.push(+key)
    }
    return result    
  }

  function join(ary,separator=',') {
    if(ary.length === 0)
      return []
    let result = ''
    for(let i=0; i<ary.length-1; i++) {
      result = result + ary[i] + separator
    }
    return result + ary[ary.length-1]
  }

  function last(ary) {
    return ary[ary.length-1]
  }

  function lastIndexOf(ary, val, fromIndex=ary.length-1) {
    for(let i=fromIndex; i>=0; i--) {
      if(ary[i] === val)
        return i
    }
    return -1
  }

  function reverse(ary) {
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
  }

  function pull(ary) {
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
  }

  function pullAll(ary,val) {
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
  }

  function pullAt(ary) {
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
  }

  function remove(ary,test) {
    let result = []
    for(let i=0; i<ary.length; i++) {
      if(test(ary[i])) {
        result.push(ary[i])
        ary.splice(i, 1)
        i--
      }
    }
    return result
  }

  function slice(ary, start=0, end=ary.length) {
    let result = []
    for(let i=start; i<ary.length; i++) {
      result.push(ary[i])
    }
    return result
  }

  function sortedIndex(ary, val) {
    for(var i=0; i<ary.length; i++) {
      if(ary[i] >= val)
        return i
    }
    return i
  }

  function sortedIndexOf(ary,val) {
    for(let i=0; i<ary.length; i++) {
      if(ary[i] === val)
        return i
    }
    return -1
  }

  function sortedLastIndex(ary,val) {
    for(let i=ary.length-1; i>=0; i--) {
      if(ary[i] === val)
        return i+1
    }
    return -1   
  }

  function sortedLastIndexOf(ary,val) {
    for(let i=ary.length-1; i>=0; i--) {
      if(ary[i] === val)
        return i
    }
    return -1   
  }

  function sortedUniq(ary) {
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
  }

  function sortedUniqBy(ary,test) {
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
  }

  function tail(ary) {
    let result = []
    for(let i=1; i<ary.length; i++) {
      result.push(ary[i])
    }
    return result
  }

  function take(ary, n=1) {
    let result = []
    if(n > ary.length)
      n = ary.length
    for(let i=0; i<n; i++) {
      result.push(ary[i])
    }
    return result
  }

  function takeRight(ary, n=1) {
    let result = []
    if(n > ary.length)
      n = ary.length
    for(let i=ary.length-1; i>=(ary.length-n); i--) {
      result.unshift(ary[i])
    }
    return result
  }

  function union() {
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
  }

  function uniq(ary) {
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
  }

  function xor() {
    let result = []
    let map = {}
    for(let j=0; j<arguments.length; j++) {
      for(let i=0; i<arguments[j].length; i++) {
        if(!(arguments[j][i] in map)) {
          result.push(arguments[j][i])
          map[arguments[j][i]] = 1
        } else if(result.indexOf(arguments[j][i]) != -1){
          let a = result.indexOf(arguments[j][i])
          result.splice(a,1)
        }
      }
    }  
    return result   
  }

  function flatten(ary) {
    let result = []
    for(let item of ary) {
      if(Array.isArray(item)) {
        for(let val of item) {
          result.push(val)
        }
      } else {
        result.push(item)
      }
    }
    return result
  }

  function flattenDeep(ary) {
    let result = []
    // let result
    // return ary.reduce((result,item) => {
    //   if(Array.isArray(item)){
    //     result.push(...flattenDeep(item))
    //   } else {
    //     result.push(item)
    //   }
    //   return result
    // }, [])
    for(let item of ary) {
      if(Array.isArray(item)) {
        result.push(...flattenDeep(item))
      } else {
        result.push(item)
      }
    }
    return result
  }

  function flattenDepth(ary, depth=1) {
    if(depth === 0)
      return ary.slice()
    return ary.reduce((result,item) => {
      if(Array.isArray(item)){
        result.push(...flattenDeep(item,depth -1))
      } else {
        result.push(item)
      }
      return result
    }, [])
  }

  function nth(ary, n=0) {
    return n >= 0 ? ary[n] : ary[ary.length + n]
  }

  function unzip(ary) {
    let res = []
    for(let i=0; i<ary.length; i++) {
      for(let j=0; j<ary[i].length; j++) {
        if(res.length < ary[i].length)
          res.push([])
        res[j].push(ary[i][j])
      }
    }
    return res
  }

  function without(ary) {
    let map = {}
    for(let i=1; i<arguments.length; i++) {
      map[arguments[i]] = 1
    }
    let res = []
    for(let i=0; i<ary.length; i++) {
      if(!(ary[i] in map))
        res.push(ary[i])
    }
    return res
  },

  function zip(...arys) {
    let res = []
    for (let i = 0; i < arys[0].length; i++) {
        res[i] = arys.map(it => it[i])
    }
    return res
  },

  function forEach(coll,action) {
    if (Array.isArray(coll)) {
      for (let i = 0; i < coll.length; i++) {
        action(coll[i], i, coll)
      }
    } else {
      for (let key in coll) {
        action(coll[key], key, coll)
      }
    }
    return coll
  },

  function includes(coll, val, fromIndex = 0) {
    if(Array.isArray(coll) || typeof coll === 'string') {
      let idx = coll.indexOf(val)
      if(idx !== -1 && idx >= fromIndex) {
        return true
      } else 
        return false
    }
    if (typeof coll === 'object') {
      for (let key in coll) {
        if (coll[key] === val) {
          return true
        }
      }
      return false
    }
  },

  function reduce(coll, f, accu) {
    for (var val in coll) {
        if (accu == undefined) {
            accu = coll[0]
            continue
        }
        accu = f(accu, coll[val], val, coll)
    }
    return accu    
  },

  function map(coll, f) {
    let res = []
      for(var idx in coll) {
        let curr = f(coll[idx], idx, coll)
        res.push(curr)
      }
      return res
  },

  function reduceRight(coll, f, accu) {
    for (var i=coll.length-1; i>=0; i--) {
        if (accu == undefined) {
            accu = coll[0]
            continue
        }
        accu = f(accu, coll[i], i, coll)
    }
    return accu    
  },

  function size(coll) {
    if (Array.isArray(coll) || typeof coll == 'string') {
        return coll.length
    }
    if (typeof coll == 'object') {
      let c = 0
      for(var key in coll)
        c++
      return c
    }
  },

  function eq(val, other) {
    if(Number.isNaN(val) && Number.isNaN(other)) {
      return true
    }
    if(val === other)
      return true
     else 
      return false
  },

  function gt(val, other) {
    if(val > other)
      return true
      else 
        return false
  },

  function gte(val, other) {
    if(val >= other)
      return true
      else 
        return false
  },

  function isArguments(val) {
    return Object.prototype.toString.call(val) === '[object Arguments]'
  },

  function isArray(val) {
    return Object.prototype.toString.call(val) === '[object Array]'
  },

  function isArrayBuffer(val) {
    return Object.prototype.toString.call(val) === '[object ArrayBuffer]'    
  },

  function isArrayLike(val) {
    return Object.prototype.toString.call(val) !== "[object Function]" && val.length >= 0 &&  val.length <= Number.MAX_SAFE_INTEGER
  },

  function isArrayLikeObject(val) {
    return Object.prototype.toString.call(val) !== "[object Function]" && typeof val === 'object' && val.length >= 0 &&  val.length <= Number.MAX_SAFE_INTEGER
  },

  function isBoolean(val) {
    return Object.prototype.toString.call(val) === '[object Boolean]'
  },

  function isDate(val) {
    return Object.prototype.toString.call(val) === '[object Date]'
  },

  function isElement(val) {
    return Object.prototype.toString.call(val) === '[object HTMLBodyElement]'
  },

  function isEmpty(val) {
    if(val === null || val.length === undefined)
      return true
      else 
        return size(val) === 0
  },

  function isError(val) {
    return Object.prototype.toString.call(val) === '[object Error]'
  },

  function isFinite(val) {
    return typeof val === "number" && val <= Number.MAX_VALUE && val >= Number.MIN_VALUE
  },

  function isFunction(val) {
    return Object.prototype.toString.call(val) === '[object Function]' 
  },

  function isInteger(val) {
    return typeof val === 'number' && isFinite(val)
  },

  function isLength(val) {
    return isArrayLike(val) && isInteger(val)
  },

  function isMap(val) {
    return Object.prototype.toString.call(val) === '[object Map]'
  },

  function isNaN(val) {
    return (val !== val && typeof val === 'number') || (typeof val === "object" && val.toString() === "NaN")
  },

  function isNull(val) {
    return Object.prototype.toString.call(val) === '[object Null]'
  },

  function isUndefined(val) {
    return Object.prototype.toString.call(val) === '[object Undefined]'
  },

  function isNumber(val) {
    return Object.prototype.toString.call(val) === '[object Number]'
  },

  function isObject(val) {
    return Object.prototype.toString.call(val) === '[object Object]'
  },

  function isString(val) {
    return Object.prototype.toString.call(val) === '[object String]'
  },

  function lt(val, other) {
    return val < other
  },

  function lte(val, other) {
    return val <= other
  },

  function toArray(val) {
    let res = []
    if(typeof val === 'object' || typeof val === 'string') {
      for(let key in val)
        res.push(val[key])
    }
    return res
  },

  function toFinite(val) {
    if(val === Infinity)
      return 1.7976931348623157e+308
      else if(val === -Infinity)
      return -1.7976931348623157e+308
        else
          return Number(val)
  },



  return {
    chunk: chunk,
    compact: compact,
    difference: difference,
    drop: drop,
    dropRight: dropRight,
    fill: fill,
    fromPairs: fromPairs,
    head: head,
    indexOf: indexOf,
    initial: initial,
    intersection: intersection,
    join: join,
    last: last,
    lastIndexOf: lastIndexOf,
    reverse: reverse,
    pull: pull,
    pullAll: pullAll,
    pullAt: pullAt,
    remove: remove,
    slice: slice,
    sortedIndex: sortedIndex,
    sortedIndexOf: sortedIndexOf,
    sortedLastIndex: sortedLastIndex,
    sortedLastIndexOf: sortedLastIndexOf,
    sortedUniq: sortedUniq,
    sortedUniqBy: sortedUniqBy,
    tail: tail,
    take: take,
    takeRight: takeRight,
    union: union,
    uniq: uniq,
    xor: xor,
    flatten,
    flattenDeep,
    flattenDepth,
    nth,
    unzip,
    zip,
    forEach,
    includes,
    reduce,
    map,
    reduceRight,
    size,
    eq,
    gt,
    gte,
    isArguments,
    isArray,
    isArrayBuffer,
    isArrayLike,
    isArrayLikeObject,
    isBoolean,
    isDate,
    isElement,
    isEmpty,
    isError,
    isFinite,
    isFunction,
    isInteger,
    isLength,
    isMap,
    isNaN,
    isNull,
    isUndefined,
    isNumber,
    isObject,
    isString,
    lt,
    lte,
    toArray,
    toFinite,
  }










}()