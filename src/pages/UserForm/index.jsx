import Header from '../../components/TheHeader'
import './styles.scss'

const UserForm = () => (
  <div id="user-form">
    <Header searchControls />
    <div className="container-tiny pt-5">
      <h1 className="text-main">
        Hello, UserForm!
      </h1>
    </div>
  </div>
)

export default UserForm
