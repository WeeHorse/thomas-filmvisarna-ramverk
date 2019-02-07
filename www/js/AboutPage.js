class AboutPage extends Component {

  constructor(){
    super();
    this.addRoute('/about', 'About');
    this.addEvents({
      'click .btn-details': 'toggleDetails',
      'click .btn-error': 'triggerError'
    });
    this.showDetails = false;
  }

  unmount(){
    this.showDetails = false;
    this.showExampleOfError = false;
  }

  triggerError(){
    this.showExampleOfError = true;
    this.render();
  }

  toggleDetails(){
    this.showDetails = !this.showDetails;
    this.render();
  }

}