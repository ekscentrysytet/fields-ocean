class HeaderController {
  /** @ngInject */
  constructor(AppConstants) {
    this.appName = AppConstants.appName;
  }
}

const Header = {
  controller: HeaderController,
  templateUrl: 'layout/header.html'
};

export default Header;
