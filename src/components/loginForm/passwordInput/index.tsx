import { useState } from 'react'
import { IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { FormValues } from '../utils'

import * as S from './styled'

type values = {
  formValues: FormValues
}

const PasswordInput = (values: { formValues: FormValues }) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  return (
    <S.PasswordForm
      variant='outlined'
      margin='normal'
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        values.formValues.password = event.target.value
      }}
    >
      <InputLabel htmlFor='outlined-adornment-password'>Password</InputLabel>
      <OutlinedInput
        id='outlined-adornment-password'
        type={showPassword ? 'text' : 'password'}
        name='password'
        endAdornment={
          <InputAdornment position='end'>
            <IconButton
              aria-label='toggle password visibility'
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge='end'
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label='Password'
      />
    </S.PasswordForm>
  )
}

export default PasswordInput
