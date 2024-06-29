import { Formik, FormikHelpers } from 'formik'
import PasswordInput from './passwordInput'
import { FormValues } from './utils'

import * as S from './styled'

const LoginForm = () => {
  const onSubmit = async (values: FormValues, formikHelpers: FormikHelpers<FormValues>) => {
    formikHelpers.setSubmitting(true)
    console.log(JSON.stringify(values))
    await new Promise((res) => setTimeout(res, 5000))
    formikHelpers.setSubmitting(false)
  }

  return (
    <Formik<FormValues> onSubmit={onSubmit} initialValues={{ email: '', password: '' }}>
      {({ isSubmitting, values }) => (
        <S.LoginForm>
          <S.EmailInput
            id='email'
            name='email'
            label='Email'
            variant='outlined'
            margin='normal'
            type='email'
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              values.email = event.target.value
            }}
          />
          <PasswordInput formValues={values} />
          <S.LoginButton disabled={isSubmitting} type='submit' variant='contained'>
            Přihlásit se
          </S.LoginButton>
        </S.LoginForm>
      )}
    </Formik>
  )
}

export default LoginForm
