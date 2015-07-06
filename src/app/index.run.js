(function() {
  'use strict';

  angular
    .module('protractorNaXunit')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
