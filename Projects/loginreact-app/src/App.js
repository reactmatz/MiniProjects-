import iconjp from "./assets/jp.svg"
import './styles.css'

function App() {
  return (
   <div className="container">
    <div className="container-login">
      <div className="wrap-login">
        <form className="login-form">

          <span className="login-form-title">Bem Vindo</span>

          <span className="login-form-title">
            <img src={iconjp}></img>
          </span>

          <div className="wrap-input">
            <input type="email"/>
            <span class="focus-input" data-placeholder="Email"></span>
          </div>
          <div className="wrap-senha">
            <input type="password"/>
            <span class="focus-senha" data-placeholder="Password"></span>
          </div>

          <div className="container-login-form-btn">
            <button className="login-form-btn">Login</button>
          </div>
          <div className="text-center">
            <span className="text-1"></span>

            <a href="#" className="txt-2">Criar conta</a>
          </div>
          

        </form>
      </div>
    </div>
   </div>
  );
}

export default App;
