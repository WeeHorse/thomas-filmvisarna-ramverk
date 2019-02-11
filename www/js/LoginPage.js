class LoginPage extends Component{

  constructor(props){
    super(props);
    this.addRoute('/login', 'Login');
    this.addEvents({
      'submit .form-signin': 'login'
    });
    this.result = {};
  }

  async login(e){
    e.preventDefault();
    // credentials we want to login with
    let login = new Login({
      email: this.baseEl.find('#inputEmail').val(),
      password: this.baseEl.find('#inputPassword').val()
    });

    // try to login
    this.result = await login.save();
    if(this.result.error){
      this.render();
    }else{
      Component.routerInstance.goto('/');
    }
  }

  async logout(){
    let loginObj = new Login();
    loginObj.delete();
  }

}