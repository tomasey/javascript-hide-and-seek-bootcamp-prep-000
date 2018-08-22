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
  let current = document.getElementById('grand-node');
  var next = current.children[0];
  while (next) {
    current = next;
    next = current.children[0]
  }
}