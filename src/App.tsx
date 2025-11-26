import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import TeamGenerator from './pages/TeamGenerator'
import './styles/App.css'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<TeamGenerator />} />
        <Route path="/team" element={<TeamGenerator />} />
      </Routes>
    </Layout>
  )
}

export default App