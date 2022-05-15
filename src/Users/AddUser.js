import { React, useState } from "react"

import Card from "../UI/Card"
import Button from "../UI/Button"

import classes from "./AddUser.module.css"
import ErrorModule from "../UI/ErrorModule"

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("")
  const [enteredAge, setEnteredAge] = useState("")
  const [error, setError] = useState()

  const adduserHandler = (e) => {
    e.preventDefault()
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      })
      return
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid  age (> 0).",
      })
      return
    }
    props.onAddUser(enteredUsername, enteredAge)
    setEnteredUsername("")
    setEnteredAge("")
  }

  const usernameChangedHandler = (e) => {
    setEnteredUsername(e.target.value)
  }
  const ageChangedHandler = (e) => {
    setEnteredAge(e.target.value)
  }

  const errorHandler = () => {
    setError(null)
  }

  return (
    <div>
      {error && (
        <ErrorModule
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={adduserHandler}>
          <label htmlFor="username">userName</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangedHandler}
          />
          <label htmlFor="age">Age (years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangedHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  )
}

export default AddUser
