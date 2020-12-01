import { useState } from 'react'
import { useAuth } from '../../hooks'

const LogInForm = () => {
  const { login } = useAuth()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    login(username, password)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Código de Matrícula"
          value={username}
          onChange={(e) => setUsername(e.target.value.toUpperCase())}
        />
        <div className="input-group-append">
          <span className="input-group-text">
            <i className="fas fa-user-alt"></i>
          </span>
        </div>
      </div>
      <div className="input-group">
        <input
          type="password"
          className="form-control"
          placeholder="Senha de Acesso"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="input-group-append">
          <span className="input-group-text">
            <i className="fas fa-unlock-alt"></i>
          </span>
        </div>
      </div>
      <button type="submit" className="btn btn-secondary">
        Entrar
      </button>
    </form>
  )
}

export default LogInForm
