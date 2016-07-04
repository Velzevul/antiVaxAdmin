import React from 'react'
import {connect} from 'react-redux'

import {Flex, List, ListItem} from '../Layouts'
import {ModalWindow, ModalWindowBody, ModalWindowHeader, ModalWindowFooter, TextInput, Button} from '../UI'
import {authenticate} from '../../store/authActions'

class LoginPage extends React.Component {
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
      dispatch(authenticate(this.state.email, this.state.password))
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

    const inputStyle = {
      width: '20rem'
    }

    return (
      <ModalWindow>
        <form onSubmit={this.submitForm}>
          <ModalWindowHeader>
            <Flex justifyContent="center">Login</Flex>
          </ModalWindowHeader>

          <ModalWindowBody>
            <List n={0.5}>
              <ListItem n={0.5}>
                <TextInput style={inputStyle}
                  value={this.state.email}
                  label="email"
                  placeholder="e.g. casey@gmail.com"
                  error={this.state.emailError}
                  onChange={this.changeEmail} />
              </ListItem>

              <ListItem n={0.5}>
                <TextInput style={inputStyle}
                  value={this.state.password}
                  label="password"
                  placeholder="e.g. BigSecret"
                  error={this.state.passwordError}
                  onChange={this.changePassword}
                  type="password" />
              </ListItem>
            </List>
          </ModalWindowBody>

          <ModalWindowFooter>
            <Button disabled={isFetching} theme="primary" label="Login">Login</Button>
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
)(LoginPage)
