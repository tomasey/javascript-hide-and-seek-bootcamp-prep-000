function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(target) {
  return document.getElementsById('#nested .target');
}

function increaseRankBy(n) {
  var rank = document.querySelector('#app').querySelectorAll("ul.ranked-list li");
  for (i = 0; i < rank.length; i++) {
    rank[i].innerHTML = parseInt(rank[i].innerHTML) + n
  }  
}