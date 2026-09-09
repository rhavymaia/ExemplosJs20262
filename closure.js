function pai() {
  var x = 1;
  function filho() {
    console.log(x);
    x++;
  }
  return filho;
}

var filho1 = pai();
filho1(); // 1
filho1(); // 2

var filho2 = pai();
filho2();
filho2();
filho2();
