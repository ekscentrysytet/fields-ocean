/** @ngInject */
export default function InfiniteScrollDirective($window, $document) {
  return {
    restrict: 'A',
    scope: {
      onScroll: '&'
    },
    link
  };

  function link(scope) {
    $window.onscroll = () => {
      if ($window.pageYOffset + $document[0].documentElement.clientHeight >= $document[0].body.scrollHeight * 0.9) {
        scope.onScroll();
      }
    };
  }
}
