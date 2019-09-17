cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-firebase-analytics.FirebaseAnalytics",
      "file": "plugins/cordova-plugin-firebase-analytics/www/FirebaseAnalytics.js",
      "pluginId": "cordova-plugin-firebase-analytics",
      "merges": [
        "cordova.plugins.firebase.analytics"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-support-android-plugin": "1.0.1",
    "cordova-support-google-services": "1.3.1",
    "cordova-plugin-firebase-analytics": "3.0.0",
    "cordova-plugin-whitelist": "1.3.4"
  };
});