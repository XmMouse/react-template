import Schema, { Rules } from 'async-validator';
import { Component } from 'react';
interface PropType {
    data: Object;
    rules: Rules,
    render: Function,
    children: any
}
export default class ValidatorForm extends Component<PropType>{
    myRefs:Array<any>
    constructor(props: PropType) {
        super(props)
        this.myRefs = []
    }
    render() {
        return <>
            {this.props.render({
                addRef: this.addRef.bind(this)
            })}
        </>
    }
    addRef(ref:any) {
        this.myRefs.push(ref)
    }
    validate() {
        let validator = new Schema(this.props.rules || {})
        return new Promise((resolve, reject) => {
            validator.validate(this.props.data, {
                firstFields: true
            },(errors:any, fileds) => {
                if (errors) {
                    reject(errors)
                    this.myRefs.forEach((ref) => {
                        ref.validate()
                    })
                } else {
                    resolve(this.props.data)
                }
            });
        })
    }
}