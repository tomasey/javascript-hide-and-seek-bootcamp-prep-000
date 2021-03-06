function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(target) {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var rank = document.querySelector('#app').querySelectorAll("ul.ranked-list li");
  for (var i = 0; i < rank.length; i++) {
    rank[i].innerHTML = parseInt(rank[i].innerHTML) + n
  }  
}

function deepestChild() {
  var child = document.getElementById('grand-node').querySelectorAll('div');
  return child[child.length - 1]
}