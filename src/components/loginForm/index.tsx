import { Formik, FormikHelpers } from 'formik'
import PasswordInput from './passwordInput'

import * as S from './styled'

interface FormValues {
  email: string
  password: string
}
const LoginForm = () => {
  const onSubmit = async (values: FormValues, formikHelpers: FormikHelpers<FormValues>) => {
    formikHelpers.setSubmitting(true)
    console.log(JSON.stringify(values))
    await new Promise((res) => setTimeout(res, 5000))
    formikHelpers.setSubmitting(false)
  }

  return (
    <Formik<FormValues> onSubmit={onSubmit} initialValues={{ email: '', password: '' }}>
      {({ isSubmitting }) => (
        <S.LoginForm>
          <S.EmailInput id='email' name='email' label='Email' variant='outlined' margin='normal' type='email' />
          <PasswordInput />
          <S.LoginButton disabled={isSubmitting} type='submit' variant='contained'>
            Přihlásit se
          </S.LoginButton>
        </S.LoginForm>
      )}
    </Formik>
  )
}

export default LoginForm
