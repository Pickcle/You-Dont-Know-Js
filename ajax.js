var xhr = new XMLHttpRequest();
xhr.open('get', 'www.baidu.com', true);
xhr.onload = function(response) {
  if (response.status >= 200 && response < 300 || response == 304) {
    console.log(response);
  } else {
    console.log('error');
  }
}
xhr.timeout = 1000;
xhr.ontimeout = function() {
  console.log('---xhj---timeout');
}
xhr.overrideMimeType('text/javascript');
xhr.send(null);

xhr.open('post', 'www.baidu.com', true);
var form = document.getElementById('form');
xhr.send(form);
