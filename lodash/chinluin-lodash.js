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

  function difference(ary,val) {
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

  function initial() {
    for(let i=0; i<arguments.length; i++) {
      arguments[i].pop(ary[ary.length-1])
      return arguments[i]
    }
  }

  function intersection() {
    
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
        } else {
          let a =result.indexOf(arguments[j][i])
          result.splice(a,1)
        }
      }
    }  
    return result   
  }


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
  }










}()