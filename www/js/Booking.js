class Booking extends Component{

  constructor(props){
    super(props);
    this.addRoute(/\/booking-confirmation\/(.*)/, 'Booking Confirmation');
  }

  mount(){
    this.render();
  }

}