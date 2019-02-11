class NavBar extends Component {

  constructor(){
    super();
    this.navItems = [
      new NavItem('Start', '/'),
      new NavItem('Shows', '/shows'),
      new NavItem('About', '/about'),
      new NavItem('Login', '/login')
    ];
  }

}