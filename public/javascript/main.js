'use strict';

var xmlHttp = new XMLHttpRequest();
xmlHttp.onreadystatechange = function() {
  if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
    var response = JSON.parse(xmlHttp.responseText);
    document.getElementsByTagName('img')[0].src = response.picture;
    document.getElementsByTagName('p')[0].innerHTML = response.caption;
  }
};
xmlHttp.open('GET', '/content');
xmlHttp.send();