var xhr = new XMLHttpRequest();
xhr.open('get', 'www.baidu.com', true);
xhr.onload = function() {
  if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
    console.log(xhr.response || xhr.responseXML);
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
