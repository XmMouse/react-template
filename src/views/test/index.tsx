import { Button, TextField } from '@material-ui/core'
import { Validator } from 'components/validator/Validator'
import ValidatorForm from 'components/validator/ValidatorForm'
import { useState } from 'react'
let rules = {
    username: [{
        trigger: 'blur',
        required: true,
        message: '该项不能为空'
    }],
    password: [{
        trigger: 'blur',
        message: '该字段在三到六个字符',
        validator: (rules: any, value: string) => {
            return /\d{3-5}/.test(value)
        }
    }]
}
export default function Test() {
    let [form, setForm] = useState({
        username: '',
        password: '',
    })
    let formRef: ValidatorForm | null
    const validate = () => {
        formRef && formRef.validate()
    }
    return (<ValidatorForm ref={ref => formRef = ref} render={( callItem:{addRef:Function} ) => {
        return (
            <>
                <Validator rule={rules['username']} prop='username' ref={ref => callItem.addRef(ref)} value={form.username} render={(item) => {
                    return <TextField value={form.username} {...item} onChange={event => {setForm({username: event.target.value, password: form.password})}}></TextField>
                }}></Validator>
                <Validator value={form.password} prop='username' rule={rules['password']} ref={ref => callItem.addRef(ref)} render={(item) => {
                    return <TextField value={form.password} {...item} onChange={event => {setForm({username: form.username, password: event.target.value})}}></TextField>
                }}></Validator>
            </>
        )
    }} data={form} rules={rules}>
        <Button onClick={validate}>校验</Button>
    </ValidatorForm>)
}