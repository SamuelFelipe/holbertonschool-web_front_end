function createElement(data = "") {
  p = document.createElement("p");
  p.innerHTML = data;
  document.body.appendChild(p);
}

function queryWikipedia(callback = () => {}) {
  let req = new XMLHttpRequest();
  req.open(
    "GET",
    "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*",
    false
  );
  req.send();
  callback(JSON.parse(req.response).query.pages[21721040].extract);
}

queryWikipedia(createElement);
