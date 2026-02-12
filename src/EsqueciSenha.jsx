import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'
import simboloPadrao from './assets/SimboloPadrao.png'

function EsqueciSenha() {
  const navigate = useNavigate()
  const [etapa, setEtapa] = useState(1)
  const [codigoGerado, setCodigoGerado] = useState('')
  const [codigoDigitado, setCodigoDigitado] = useState('')

  const voltarLogin = (event) => {
    if (event) {
      event.preventDefault()
    }
    navigate('/')
  }

  const enviarCodigo = (event) => {
    event.preventDefault()
    const codigo = Math.floor(100000 + Math.random() * 900000).toString()
    setCodigoGerado(codigo)
    setCodigoDigitado('')
    setEtapa(2)
    console.log('[RECUPERACAO] Codigo gerado:', codigo)
  }

  const validarCodigo = (event) => {
    event.preventDefault()
    if (codigoDigitado.trim() === codigoGerado) {
      setEtapa(3)
      return
    }
    alert('Codigo incorreto. Tente novamente.')
  }

  const trocarSenha = (event) => {
    event.preventDefault()
    setEtapa(4)
  }

  return (
    <>
      <div className="LoginPage">
        <div className="LoginLogo">
          <img src={simboloPadrao} alt="Simbolo Padrao" />
        </div>
        <div className="LoginContainer">
          {etapa === 1 && (
            <form className="LoginBox" onSubmit={enviarCodigo}>
              <h2 className="LoginTitulo">Esqueceu sua senha?</h2>
              <h3 className="LoginSubTitulo">Digite seu email e receba o codigo de recuperacao!</h3>
              <label className="LoginField">
                Email
                <input type="email" placeholder="seuemail@colegioaugustoramos.com.br" required />
              </label>
              <button className="LoginButton" type="submit">Enviar codigo</button>
              <button className="LoginLinkButton" type="button" onClick={voltarLogin}>Voltar</button>
            </form>
          )}
          {etapa === 2 && (
            <form className="LoginBox" onSubmit={validarCodigo}>
              <h2 className="LoginTitulo">Digite o codigo</h2>
              <h3 className="LoginSubTitulo">Enviamos um codigo para seu email.</h3>
              <label className="LoginField">
                Codigo
                <input
                  type="text"
                  placeholder="000000"
                  value={codigoDigitado}
                  onChange={(event) => setCodigoDigitado(event.target.value)}
                  required
                />
              </label>
              <button className="LoginButton" type="submit">Validar</button>
              <button className="LoginLinkButton" type="button" onClick={() => setEtapa(1)}>Voltar</button>
            </form>
          )}
          {etapa === 3 && (
            <form className="LoginBox" onSubmit={trocarSenha}>
              <h2 className="LoginTitulo">Nova senha</h2>
              <h3 className="LoginSubTitulo">Crie sua nova senha.</h3>
              <label className="LoginField">
                Nova senha
                <input type="password" placeholder="********" required />
              </label>
              <label className="LoginField">
                Confirmar senha
                <input type="password" placeholder="********" required />
              </label>
              <button className="LoginButton" type="submit">Salvar senha</button>
            </form>
          )}
          {etapa === 4 && (
            <div className="LoginBox">
              <h2 className="LoginTitulo">Senha atualizada!</h2>
              <h3 className="LoginSubTitulo">Sua senha foi alterada com sucesso.</h3>
              <button className="LoginButton" type="button" onClick={voltarLogin}>
                Voltar para o login
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default EsqueciSenha
