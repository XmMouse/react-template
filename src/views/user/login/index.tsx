import React from 'react'
import { Box, styled } from '@material-ui/core'
import LoginForm from './form/LoginForm'
import bg from './images/bg.jpg'

const BgBox = styled(Box)({
  background: `url(${bg}) no-repeat`,
  overflow: 'hidden',
  height: '101%'
})

const Login = function () {
  return <BgBox display="flex">
    <Box flex={1} display="flex" justifyContent="center" alignItems="center">
      <Box width="300px" height="200px" bgcolor="text.secondary" display="flex" justifyContent="center" alignItems="center" color="primary.contrastText">征集内部摄影作品并展示</Box>
    </Box>
    <Box width="40%" minHeight="600px" display="flex" alignItems="center">
      <LoginForm></LoginForm>
    </Box>
  </BgBox>
}

export default Login;