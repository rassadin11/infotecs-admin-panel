import React from 'react'
import styled from 'styled-components'
import { ModalTitle } from '@shared/ui/Title/styles'
import { Flex } from 'antd'
import { AuthForm } from '@features/auth/login'
import { useNavigate } from 'react-router-dom'

const FormWrapper = styled.div`
  width: 100%;
  max-width: 360px;
`

export const AuthPage = () => {
  const navigate = useNavigate();

  const handleSuccessLogin = () => {
    navigate('/');
  }

  return (
    <Flex align='center' justify='center' style={{ minHeight: '100vh' }}>
      <FormWrapper>
        <ModalTitle $bold={true} $fontSize='16px'>Авторизация</ModalTitle>
        <AuthForm onSuccess={handleSuccessLogin} />
      </FormWrapper>
    </Flex>
  )
}
