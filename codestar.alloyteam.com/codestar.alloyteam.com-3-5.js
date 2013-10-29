
// http://codestar.alloyteam.com/

//第三关 不想做，拔下面的代码扔到 console 里，即可过
(function() {
  function f() {
    ajax("/pass", {
      method: "POST",
      data: '{"q":1,"s":3,"_t":' + g(b) + "}",
      contentType: "application/json",
      onSuccess: function() {
        hideBoard();
        document.getElementById("btnNext").className += " show";
        alert("\u8fc7\u5173\uff01\u4e0b\u4e00\u5173\u7684\u5165\u53e3\u5df2\u6253\u5f00")
      }
    })
  }

  function g(a) {
    for (var c = 5381, d = 0, b = a.length; d < b; ++d) c += (c << 5) + a.charAt(d).charCodeAt();
    return c & 2147483647
  }

  var b = document.querySelector('#log').innerHTML;

  document.domain = "alloyteam.com";

  var e = +new Date,
    h = "http://codetank.alloyteam.com/index.html?cmd=battle&param=welcome2tencent&t=" +
      e + "&_t=" + b,
    a;

  document.getElementById("btnTank").onclick = function() {
    a = window.open(h, "codetank")
  };
  window["pass" + e] = function() {
    f();
  };
  console.log("\n\u7b2c\u4e09\u7ae0\uff1a\u4ea4\u950b\n")
})();


// 第五关 把下面的代码扔到 console 里，会有两个数组，跟着任意一个数组的顺序点，即可过
~function(document,window){

  var arr = [],s = [],i = 1,cc = 0,result = [],temp;arr[cc] = [];

  while(document.querySelector('#box #folder_' + i)){s.push(document.querySelector('#box #folder_' + i).innerHTML);i++;}

  function recursion(j) {
    if(s[j]){
      var fix = j + 1;
      var level =  +document.querySelector('#box #folder_' + fix).parentNode.id.substr(4);

      arr[cc].push(s[j]);
      if(s[j + level]) {
        recursion(j + level);
      }
      if(s[j + level + 1]) {
        cc++;
        arr[cc] = arr[cc - 1].slice(0,level);
        recursion(j + level + 1);
      }
    }
  }

  recursion(0);

  arr.forEach(function(v,k){
    var temp = 0;
    v.forEach(function(vv,kk){
      temp += +vv;
    });
    arr[k].push(temp)
  })

  arr.forEach(function(v,k){
    temp = v[12];
    arr.forEach(function(vv,kk){
      if(vv[12] > temp) {
        temp = vv[12]
      }
    })
  })

  arr.forEach(function(v,k){
    if(v[12] === temp){
      result.push(v)
    }
  })

  if('console' in window && 'log' in window.console) {
    console.log(result)
  }

}(document,window)