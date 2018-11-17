/*global __*/
import React, {Component} from "react"
import CarouselLogin from "./login/Carousel"
import FooterLogin from "./login/FooterLogin"
import HeaderLogin from "./login/HeaderLogin"
import RegisterForm from "./login/SignUpForm"
import SignInForm from "./login/signInForm"
import SocialLogin from "./login/SocialLogin"

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 'SignIn',
      footer: {year: '2018'},
      header: {
        iosLink: '#',
        androidLink: '#',
        address: 'انقلاب روبروی دانشگاه تهران مجتمع پارسا',
        phoneNumber: '02166972207',
        logoCaption: 'اکوسیستم دانش بنیان'
      }
    }
  }

  _showSignIn = () => {
    this.setState({...this.state, page: 'SignIn'})
  }

  _showSignUp = () => {
    this.setState({...this.state, page: 'SignUp'})
  }

  render() {
    const {page, footer, header} = this.state
    const {year} = footer
    const {iosLink, androidLink, address, phoneNumber, logoCaption} = header
    const SignIn = (page === 'SignIn')
    const SignUp = (page === 'SignUp')
    const animateFormClass = (SignIn) ? ("sign-in-form-animate") : ("sign-up-form-animate")

    return (
      <div className="login-page  full-page-wrapper">
        <div className="login-container">
          <HeaderLogin iosLink={iosLink} androidLink={androidLink} address={address} phoneNumber={phoneNumber}
                       logoCaption={logoCaption}/>
          <div className="row content mr-0">
            <CarouselLogin/>
            <div className={`col-12 col-md-6 col-lg-5 login-wrapper ${animateFormClass}`}>
              <div className="card">
                <div className="login-tab">
                  {(!SignIn) && (
                    <div className="signup-tab">
                      <button className="btn btn-secondary" onClick={this._showSignIn}>
                        {__('Login')}
                      </button>
                      <span>{__('Register')}</span>
                    </div>
                  )}
                  {(SignIn) && (
                    <div className="signin-tab">
                      <span>{__('Login')}</span>
                      <button className="btn btn-secondary" onClick={this._showSignUp}>
                        {__('Register')}
                      </button>
                    </div>
                  )}
                </div>
                <div className="card-block login-form p-3">
                  {SignIn &&
                  <SignInForm initialValues={
                    {rememberMe: true}
                  }
                  />}
                  {SignUp && <RegisterForm/>}
                </div>
                <div className="card-footer social-login">
                  <span>{__('Register with other accounts')}</span>
                  <SocialLogin/>
                </div>
              </div>
            </div>
          </div>
          <FooterLogin year={year}/>
        </div>
      </div>
    )
  }
}

export default Login