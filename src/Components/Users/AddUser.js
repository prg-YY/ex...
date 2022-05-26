import React, { useState } from "react"

import Card from "../UI/Card"
import Button from "../UI/Button"

import classes from "./AddUser.module.css"

const AddUsers = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("")
  const [enteredAge, setEnteredAge] = useState("")

  const addUserHandler = (e) => {
    e.preventDefault()
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return
    }
    if (+enteredAge < 0) {
      return
    }
    props.onAddUser(enteredUsername, enteredAge)
    setEnteredUsername("")
    setEnteredAge("")
  }
  const usernameCHangehandler = (e) => {
    setEnteredUsername(e.target.value)
  }

  const ageCHangehandler = (e) => {
    setEnteredAge(e.target.value)
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUsername}
          onChange={usernameCHangehandler}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={ageCHangehandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  )
}

export default AddUsers
