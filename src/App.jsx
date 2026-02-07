import { Routes, Route, useLocation } from 'react-router-dom'
import './style.css'
import Home from './Home.jsx'
import Manutencao from './Manutencao.jsx'
import Limpeza from './Limpeza.jsx'
import ChecklistAluno from './ChecklistAluno.jsx'
import Login from './Login.jsx'
import EsqueciSenha from './EsqueciSenha.jsx'
import Header from './Header.jsx'

function App() {
  const location = useLocation()
  const semCabecalho = location.pathname === '/' || location.pathname === '/esqueci-senha'

  return (
    <>
      {!semCabecalho && <Header />}
      <main>
        <Routes>
          <Route path="/ControlARPreview/" element={<Login />} />
          <Route path="/esqueci-senha" element={<EsqueciSenha />} />
          <Route path="/home" element={<Home />} />
          <Route path="/manutencao" element={<Manutencao />} />
          <Route path="/limpeza" element={<Limpeza />} />
          <Route path="/checklist-aluno" element={<ChecklistAluno />} />
        </Routes>
      </main>
    </>
  )
}

export default App
