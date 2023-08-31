

(function(d,t) {
  var BASE_URL="https://chat.haag.com.br";
  var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
  g.src=BASE_URL+"/packs/js/sdk.js";
  g.defer = true;
  g.async = true;
  s.parentNode.insertBefore(g,s);
  g.onload=function(){
    window.chatwootSDK.run({
      websiteToken: 'rBaHJh6nvyuYLHrDAwHwZ8EJ',
      baseUrl: BASE_URL
    })
  }
})(document,"script");

