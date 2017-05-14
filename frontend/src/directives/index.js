import angular from 'angular';

import InfiniteScrollDirective from './infinite-scroll.directive';

export default angular
  .module('app.directives', [])
  .directive('appInfiniteScroll', InfiniteScrollDirective);
