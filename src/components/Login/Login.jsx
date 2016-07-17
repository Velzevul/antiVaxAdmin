import React from 'react'
import {connect} from 'react-redux'

import {Flex, List, ListItem} from '../Layouts'
import {ModalWindow, ModalWindowBody, ModalWindowHeader, ModalWindowFooter, Input, Button} from '../UI'
import {loginWithCredentials} from '../../store/authActions'

class Login extends React.Component {
  constructor (props) {
    super(props)

    this.submitForm = this.submitForm.bind(this)
    this.changeEmail = this.changeEmail.bind(this)
    this.changePassword = this.changePassword.bind(this)

    this.state = {
      emailError: '',
      passwordError: '',
      email: '',
      password: ''
    }
  }

  submitForm (e) {
    e.preventDefault()
    let emailError = ''
    let passwordError = ''

    const {dispatch} = this.props

    if (this.state.email === '') {
      emailError = 'email cannot be empty'
    }

    if (this.state.password === '') {
      passwordError = 'password cannot be blank'
    }

    if (!emailError && !passwordError) {
      dispatch(loginWithCredentials(this.state.email, this.state.password))
    } else {
      this.setState({
        emailError,
        passwordError
      })
    }
  }

  changeEmail (value) {
    this.setState({
      email: value,
      emailError: ''
    })
  }

  changePassword (value) {
    this.setState({
      password: value,
      passwordError: ''
    })
  }

  render () {
    const {isFetching} = this.props

    return (
      <ModalWindow>
        <form onSubmit={this.submitForm}>
          <ModalWindowHeader>
            <Flex justifyContent="center">Login</Flex>
          </ModalWindowHeader>

          <ModalWindowBody>
            <List n={1.5}>
              <ListItem n={1.5}>
                <Input
                  value={this.state.email}
                  label="Email:"
                  placeholder="e.g. casey@gmail.com"
                  error={this.state.emailError}
                  onChange={this.changeEmail} />
              </ListItem>

              <ListItem n={1.5}>
                <Input
                  value={this.state.password}
                  label="Password:"
                  placeholder="e.g. BigSecret"
                  error={this.state.passwordError}
                  onChange={this.changePassword}
                  type="password" />
              </ListItem>
            </List>
          </ModalWindowBody>

          <ModalWindowFooter>
            <Button
              disabled={isFetching}
              label="Login">Login</Button>
          </ModalWindowFooter>
        </form>
      </ModalWindow>
    )
  }
}

export default connect(
  state => {
    return {
      isFetching: state.auth.isFetching
    }
  }
)(Login)
