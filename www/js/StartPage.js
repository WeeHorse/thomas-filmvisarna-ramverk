class StartPage extends Component {

  constructor(){
    super();
    this.addRoute('/', 'Start');
    this.mountCount = 0;
  }

  async mount(){
    this.mountCount++;
    this.render();
    let loggedIn = await Login.find();
    console.log('loggedIn', loggedIn);
    if(!loggedIn.email){
      Router.goto('/login');
    }
  }

}