class ShowsPage extends Component {

  constructor(props){
    super(props);
    this.addRoute('/shows', 'Live shows');
    this.shows = []; // prevents "undefined" in template
  }

  async mount(){
    console.log('this.routeParts', this.routeParts);
    this.shows = await Show.find(`.find().populate('act').exec()`);
    console.log('this.shows', this.shows);
    this.render();
  }

}