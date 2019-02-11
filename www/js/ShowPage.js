class ShowPage extends Component {

  constructor(props){
    super(props);
    this.addRoute(/\/show\/(.*)/, 'Live shows');
  }

  async mount(){
    console.log('this.routeParts', this.routeParts);
    this.show = await Show.find(`.find({_id:'${this.routeParts[0]}'}).populate('act').exec()`);
    console.log('this.show', this.show);
    this.render();
  }

}