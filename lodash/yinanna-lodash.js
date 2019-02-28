var yinanna = function () {

  function chunk(ary, size = 1) {
    var result=[];
    var n=Math.floor(ary.length/size)+1;
    var j=0;
    for(i=0;i<ary.length;i=i+size){
      var s=ary.slice(i,i+size)
      result[j]=s;
      j++;
    }
return result;
   
  }

  function compact(array) {
    var result=[];
    for(n=0;n<ary.length;n=n+1){
      if(ary[n]){
        result.push(ary[n])

      }
      return ary;
  }

  function concat(array,...values){
    result=array;
    for(n=0;n<values.length;n=n+1){
      result[length]=valuse[n]
    }
    return result
  }

  function difference(array,...valus){
    result=[]
    for(n=0;n<array.length;n=n+1){
      if(values.indexOf(array[n])==-1)
        result.push(array[n])
    }
    return result
  }

function drop(array,n=1){
  for(i=0;i<n;i=i+1){
    array.shift()
  }
  return array
}

function dropRight(array,n=1){
  for(i=0;i<n;i=i+1){
    array.pop()
  }
  return array
}

function fill(array, value, start=0, end=array.length){
  for(i=start;i<end;i=i+1){
    array[i]=value
  }
  return array
}

function fromPairs(pairs){
  map={}
  for(n=0;n<pairs.length;n=n+1){
    map[pairs[n][0]]=pairs[n][1]
  }
  return map
}

function head(array){
  return array[0]
}

function indexOf(array, value, fromIndex=0){
  for(n=fromIndex;n<array.length;n=n+1){
    if(array[n]==value)
      return n
  }
  return -1
}

function initial(array){
  array.length=array.length-1
  return array
}

function intersection(...array){
  result=[]
  l=arguments[0]
  for(h of l){
    count=0
    for(n=1;n<arguments.length;n=n+1){
      if(arguments[n].includes(h))
        count++
    }
    if(count==(arguments.length-1))
      result.push(h)
  }
  return result
}

function join(array, separator=','){
  result=''
  for(n=0;n<array.length-1;n=n+1){
result=result+array[n]+separator
  }
  result=result+array[array.length-1]
  return result
}

function last(array){
  return array[array.length-1]
}

function lastIndexOf(array, value, fromIndex=array.length-1){
  for(n=fromIndex;n>=0;n--){
    if(array[n]==value)
      return n
  } 
  return -1
}

function nth(array, n=0){
  res=Math.abs(n)
  ren=res%4
  return array[ren]
}

function pull(array,...values){
  /*values相当于包含剩余参数的数组对象*/
for(n=0;n<array.length;n=n+1){
  if(values.includes(array[n])){
    array.splice(n,1)
    n=n-1
  }
}
return array
}

function pullAll(array, values){
  for(n=0;n<array.length;n=n+1){
  if(values.includes(array[n])){
    array.splice(n,1)
    n=n-1
  }
}
return array
}

function reverse(array){
  re=Math.floor(arrray.length/2)

  for(n=0;n<re;n=n+1){
    t=array[n]
    array[n]=array[array.length-1-n]
    array[array.length-1-n]=t
  }
  return array
}

function slice(array, start=0, end=array.length){
  result=[]
  for(n=start;n<end;n=n+1){
    result.push(array[n])
  }
  return result
}

function sortedIndex(array, value){
  for(n=0;n<array.length;n=n+1){
    if(value<array[n])
      return n
  }
  return array.length
}

function sortedIndexOf(array, value){
  for(n=0;n<array.length;n=n+1){
    if(array[n]==value)
      return n
  }
  return -1
}

function sortedLastIndex(array, value){
  for(n=array.length-1;n>=0;n=n-1){
    if(value>=array[n])
      return n+1
  }
  return 0
}

function sortedLastIndexOf(array, value){
  for(n=array.length-1;n>=0;n=n+1){
    if(array[n]==value)
      return n
  }
  return -1
}

function sortedUniq(array){
  map={}
  result=[]
  for(n=0;n<array.length;n=n+1){
    if(!(array[n] in map)){
      map[array[n]]=1
    }else
    map[array[n]]=map[array[n]]+1
  }
  for(l in map){
    if(map[l]==1)
      result.push(l)
  }
  return result
}

function sortedUniqBy(array, text){
result=[]
map={}
for(n=0;n<array.length;n=n+1){
  if(!(text(array[n]) in map)){
    map[text(array[n])]=1
    result.push(array[n])
  }

}
return result
}

function tail(array){
  return array.slice(1)
}

function take(array, n=1){
  return array.slice(0,n)
}

function takeRight(array, n=1){
  return array.slice(array.length-n)
}

function union(...arrays){
  result=[]
  map={}
  for(n=0;n<arguments.length;n++){
    for(i=0;i<arguments[n].length;i++){
      if(!(arguments[n][i] in map))
    map[arguments[n][i]]=1
    }
  }
  for(l in map){
    result.push(l)
  }
  return result
}

function uniq(array){
  result=[]
  for(n=0;n<array.length;n++){
    if(!(result.includes(array[n])))
      result.push(array[n])
  }
  return result
}

function unzip(array){
  result=[]
  for(n=0;n<array[0].length;n++){
    res=[]
    for(l of array){
      res.push(l[n])
    }
    result.push(res)
  }
  return result
}

function without(array, ...values){
  result=[]
  for(n=0;n<values.length;n++){
if(array.indexOf(values[n])==-1)
  result.push(values[n])
  }
  return result
}

function xor(...arrays){
  map={}
  for(n=0;n<arguments.length;n++){
    for(i=0;i<arguments[n].length;i++){
      if(arguments[n][i] in map){
        map[arguments[n][i]]=map[arguments[n][i]]+1
      }else
      map[arguments[n][i]]=1
    }
  }
  res=[]
  for(l in map){
    if(map[l]==1)
      res.push(l)
  }
  return res
}

function zip(...arrays){
  res=[]
  for(n=0;n<arguments[0].length;n++){
    rel=[]
    for(l of arguments){
      rel.push(l[n])
    }
    res.push(rel)
  }
  return res
}

function zipObject(props=[], values=[]){
  map={}
  for(n=0;n<props.length;n++){
    map[props[n]]=values[n]
  }
  return map
}

function forEach(collection, iteratee=_.identity){
  for(l in collection){
    iteratee(l,collection[l],collection)
  }
}

function includes(collection, value, fromIndex=0){
if(Array.isArray(collection)||(typeof collection=='string')){
  return collection.includes(value,fromIndex)
}
if(typeof collection=='object'){
values=Object.value(collection)
return values.includes(value,fromIndex)
}

}

return {
  chunk: chunk,
  compact: compact,
  concat:concat,
  difference:difference,
  drop:drop,
  dropRight:dropRight,
  fill:fill,
  fromPairs:fromPairs,
  head:head,
  indexOf:indexOf,
initial:initial,
intersection:intersection,
join:join,
last:last,
lastIndexOf:lastIndexOf,
nth:nth,
pull:pull,
pullAll:pullAll,
reverse:reverse,
slice:slice,
sortedIndex:sortedIndex,
sortedLastIndex:sortedLastIndex,
sortedLastIndexOf:sortedLastIndexOf,
sortedUniq:sortedUniq,
sortedUniqBy:sortedUniqBy,
tail:tail,
take:take,
takeRight:takeRight,
union:union,
uniq:uniq,
unzip:unzip,
without:without,
xor:xor,
zip:zip,
zipObject:zipObject,
forEach:forEach,
includes:includes
}
}()


