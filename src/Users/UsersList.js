import Cart from "../UI/Card"
import classes from "./UsersList.module.css"

const UsersList = (props) => {
  return (
    <Cart className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Cart>
  )
}

export default UsersList
