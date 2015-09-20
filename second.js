requirejs.config({
  "baseUrl": "./",
  "paths": {
    "jquery": "bower_components/jquery/dist/jquery"
  }
});

define(['./content', 'jquery'], function(content, $) {
  content.test();
});
