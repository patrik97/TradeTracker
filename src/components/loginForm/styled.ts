import styled from 'styled-components'
import { TextField, Button } from '@mui/material'
import { Form } from 'formik'

export const LoginForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`

export const EmailInput = styled(TextField)`
  width: 350px;
`

export const LoginButton = styled(Button)`
  width: 350px;
`
