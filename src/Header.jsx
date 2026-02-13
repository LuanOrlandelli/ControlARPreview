import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './style.css'
import simboloMenor from './assets/SimboloMenor.png'
import simboloPadrao from './assets/SimboloPadrao.png'
import simboloSigla from './assets/SimboloSigla.png'

function Header() {
  const [menuAberto, setMenuAberto] = useState(false)
  const [perfilAberto, setPerfilAberto] = useState(false)
  const nomeUsuario = 'Usuario'
  const navigate = useNavigate()

  const alternarMenu = () => {
    setPerfilAberto(false)
    setMenuAberto((aberto) => !aberto)
  }

  const fecharMenu = () => {
    setMenuAberto(false)
  }

  const alternarPerfil = () => {
    setPerfilAberto((aberto) => !aberto)
  }

  const fecharPerfil = () => {
    setPerfilAberto(false)
  }

  const sair = () => {
    fecharMenu()
    fecharPerfil()
    navigate('/')
  }

  return (
    <>
      <div className='PrincipalCabecalho'>
        <Link to="/home" onClick={() => { fecharMenu(); fecharPerfil() }} className="LogoLink">
          <picture className="LogoImagem">
            <source media="(max-width: 845px)" srcSet={simboloMenor} />
            <source media="(max-width: 1021px)" srcSet={simboloSigla} />
            <img src={simboloPadrao} alt="ControlAR" />
          </picture>
        </Link>
        <button
          className='MenuHamburguer'
          type="button"
          aria-label="Abrir menu"
          aria-expanded={menuAberto}
          aria-controls="menu-cabecalho"
          onClick={alternarMenu}
        >
          <span />
          <span />
          <span />
        </button>
        <div
          id="menu-cabecalho"
          className={`OpcoesCabecalho ${menuAberto ? 'MenuAberto' : ''}`}
        >
          <div className='PerfilMobile'>
            <span className='PerfilAvatar' />
            <button
              className='PerfilNome'
              type="button"
              aria-label="Abrir menu do perfil"
              aria-expanded={perfilAberto}
              aria-controls="menu-perfil-mobile"
              onClick={alternarPerfil}
            >
              {nomeUsuario}
            </button>
            <div
              id="menu-perfil-mobile"
              className={`PerfilMenuMobile ${perfilAberto ? 'PerfilAberto' : ''}`}
            >
              <button className='PerfilItem' type="button" onClick={fecharMenu}>Meu perfil</button>
              <button className='PerfilItem' type="button" onClick={fecharMenu}>Configurações</button>
              <button className='PerfilItem' type="button" onClick={sair}>Sair</button>
            </div>
          </div>
          <Link to="/manutencao" onClick={() => { fecharMenu(); fecharPerfil() }}>
            <h2>Manutenção</h2>
          </Link>
          <Link to="/limpeza" onClick={() => { fecharMenu(); fecharPerfil() }}>
            <h2>Limpeza</h2>
          </Link>
          <Link to="/checklist-aluno" onClick={() => { fecharMenu(); fecharPerfil() }}>
            <h2>Checklist Aluno</h2>
          </Link>
          <div className='PerfilContainer'>
            <button
              className='PerfilBotao'
              type="button"
              aria-label="Abrir menu do perfil"
              aria-expanded={perfilAberto}
              aria-controls="menu-perfil"
              onClick={alternarPerfil}
            >
              <span className='PerfilAvatar' />
            </button>
            <div
              id="menu-perfil"
              className={`PerfilMenu ${perfilAberto ? 'PerfilAberto' : ''}`}
            >
              <button className='PerfilItem' type="button">Meu perfil</button>
              <button className='PerfilItem' type="button">Configuracoes</button>
              <button className='PerfilItem' type="button" onClick={sair}>Sair</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
