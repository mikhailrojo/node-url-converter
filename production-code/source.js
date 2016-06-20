import * as m from 'url';



  m.Url.prototype.removeHash = function() {
      this.hash = '';
      return this;
  };
  m.Url.prototype.serialize = function(){
     return m.format(this);
  };

  m.Url.prototype.addHash = function(newHash){
    var resultHash = '#'.concat(newHash);
    if(this.hash){
      this.hash = this.hash.concat(resultHash);
    }else{
      this.hash = resultHash;
    }
    return this;
  }
  m.Url.prototype.removeQuery = function(){
    this.query = '';
    this.search = '';
    return this;
  }
  m.Url.prototype.addQuery = function(a){
    if (typeof a !== 'object' && a !== null){
      throw new Error("addQuery method only accepts objects");
    } else if(Object.keys(a).length == 0){
      throw new Error("addQuery method only accepts objects with keys");
    }
    console.log('this.query = '+this.query + '!');
    var key, value, loops = 0, resultQuery;

    (this.query == '' || null) ? resultQuery = '' : resultQuery = this.query + '&';
    for (var i in a){
      if(a.hasOwnProperty(i)){
        if(~a[i].toString().indexOf('#')){
          throw new Error("please don't use # signs in query string");
        }
        ++loops;
        key = i;
        value = a[i];
        resultQuery += key + "=" + value;
        if(loops > 0){
          resultQuery += '&';
        }
      }
    }
    this.search = "?"+resultQuery.slice(0, -1);
    return this;
  }

export default m;
