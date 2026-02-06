import { useNavigate } from 'react-router-dom'
import './style.css'
import simboloPadrao from './assets/SimboloPadrao.png'

function Login() {
  const navigate = useNavigate()

  const entrar = (event) => {
    event.preventDefault()
    navigate('/home')
  }

  return (
    <>
      <div className="LoginPage">
        <div className="LoginLogo">
          <img src={simboloPadrao} alt="Simbolo Padrao" />
        </div>
        <div className="LoginContainer">
          <form className="LoginBox" onSubmit={entrar}>
            <h2 className="LoginTitulo">Seja Bem-Vindo!</h2>
            <label className="LoginField">
              Email
              <input type="email" placeholder="seuemail@colegioaugustoramos.com.br" required />
            </label>
            <label className="LoginField">
              Senha
              <input type="password" placeholder="********" required />
            </label>
          <button className="LoginButton" type="submit">Entrar</button>
          <button
            className="LoginLinkButton"
            type="button"
            onClick={() => navigate('/esqueci-senha')}
          >
            Esqueci minha senha
          </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login
