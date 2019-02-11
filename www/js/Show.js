class Show extends Component {

  constructor(props){
    super(props);
    this.addEvents({
      'click .book-show': 'bookShow'
    });
  }

  get localDate(){
    return new Date(this.date).toLocaleString('sv-SE');
  }

  get capacity(){
    let  total = 0, booked = 0, remaining = 0;
    for(let section of this.sections){
      total += section.totalCapacity;
      booked += section.bookedCapacity;
      section.remainingCapacity = section.totalCapacity - section.bookedCapacity;
    }
    remaining = total - booked;
    console.log({
      total: total,
      booked: booked,
      remaining: remaining
    });
    return {
      total: total,
      booked: booked,
      remaining: remaining
    }
  }

  async bookShow(){
    let loggedInUser = await Login.find();
    let user = await User.find(`.find({email:'${loggedInUser.email}'}).exec()`);
    console.log('user', user);
    if(user){
      let booking = await new Booking({
        show: this._id,
        user: user._id
      });
      await booking.save();
      console.log('booking', booking);
      Component.routerInstance.goto(`/booking-confirmation/${booking._id}`);
      location.reload();
    }
  }

}