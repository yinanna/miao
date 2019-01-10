var yinanna = function(){
  chunk:function chunk(ary, size = 1) {
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
  
compact:function(ary) {
    var result=[];
    for(n=0;n<ary.length;n=n+1){
      if(ary[n]){
        result.push(ary[n])

      }
      return ary;
    },
    /*
    var result = []
    for(var item of ary) {
      if (item) {
        result.push(item)
      }
    }
    return result
  }
  */
  

}
