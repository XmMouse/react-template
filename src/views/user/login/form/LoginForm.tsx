import React, { useState } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import { Box, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import ValidatorForm from 'components/validator/ValidatorForm'
import bg from './images/login.png'
const BgBox = withStyles({
    root: {
        background: `url(${bg}) 50% 50% / 100% 100% no-repeat`,
        'min-width': '600px',
        'min-height': '600px'
    }
})(Box)
const rules = {
    userName: [{
        required: true,
        message: 'alsjdflasjfd'
    }],
    password: [{
        required: true,
        message: 'asldfjalskjfd'
    }]
}
export default function LoginForm() {
    let [user, setUser] = useState({
        userName: '',
        password: ''
    })
    let form:ValidatorForm|null
    const submit = () => {
        console.log(form)
        form && form.validate()
    }
    return (
        <BgBox display="flex" justifyContent="center" alignItems="center" flexDirection="column">
            <Box width="50%" marginLeft="15%" marginTop="10%" height="250px" display="flex" justifyContent="space-between" flexDirection='column' alignItems="center">
                {/* <ValidatorForm ref={validate => {form = validate}} rules={rules} data={user}>
                    <TextField id="user-name" required label="用户名"
                        onChange={(e) => setUser({ ...user, userName: e.target.value })}
                        onBlur={(e) => setUser({ ...user, userName: e.target.value })}
                        fullWidth
                        placeholder="请输入用户名"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                        }} value={user.userName} />
                    <TextField id="user-password" required label="用户密码"
                        onChange={(e) => setUser({...user,password:e.target.value})}
                        type="password"
                        fullWidth
                        placeholder="请输入密码"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockIcon />
                                </InputAdornment>
                            ),
                        }} value={user.password} />
                </ValidatorForm> */}
                <Button color="primary" onClick={submit} fullWidth variant="contained">登陆</Button>
            </Box>
        </BgBox>
    );
}