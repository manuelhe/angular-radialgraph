(function (angular) {

  // Config
  angular.module('angularRadialgraph.config', [])
      .value('angularRadialgraph.config', {
          debug: true
      });

  // Modules
  angular.module('angularRadialgraph.directives', [
    'angularRadialgraph.directives.radialGraph'
  ]);
  angular.module('angularRadialgraph', [
    'angularRadialgraph.config',
    'angularRadialgraph.directives'
  ]);

})(angular);
