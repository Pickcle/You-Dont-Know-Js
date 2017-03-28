function jsonp(url, callback) {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;
  script.async = true;
  script.addEventListener('load', function() {
    callback();
  })
  document.body.appendChild(script);

}
