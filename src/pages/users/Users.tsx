import Datatable from "../../components/datatable/Datatable"
import "./users.scss"

function Users() {
  return (
    <div className='users'>
      
      <div className="header">
      <h1>User</h1>
      <button>Add New User</button>
      </div>

        <Datatable />
      
    </div>
  )
}

export default Users
