/**
 * Application structure bootstraping.
 * @param {type} angular
 * @author Maria Villalba
 * @since Mon Nov 14 2016
 */
(function () {
  define([
    'angular',
    './core/main',
    // Application modules.
    './scanner/main',
    './identification/main',
    './message/main',
    './fingerprint/main',
    './fingerprintVerification/main',
    // Here application widgets
    './widgets/main'// Yeoman hook. Define section. Do not remove this comment.
  ],
    function (angular) {
      'use strict';

      var moduleName = 'app';

      angular
        .module(moduleName, [
          'ionic',
          'app.core',
          'app.scanner',
          'app.identification',
          'app.message',
          'app.fingerprint',
          'app.fingerprintVerification',
          'app.widgets'// Yeoman hook. Dependencies section. Do not remove this comment.
        ])
        .config(Config);

      /* @ ngInject */
      function Config($ionicConfigProvider, PermissionsProvider, SELEG_PERMISSIONS) {
        // Configure the max pages to save in cache
        $ionicConfigProvider.views.maxCache(1);

        // configuring the permissions to be handled
        PermissionsProvider.setConfigObject(SELEG_PERMISSIONS);
      }

      return moduleName;

    });
})();
