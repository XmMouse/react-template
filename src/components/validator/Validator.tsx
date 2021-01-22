import Schema, { RuleItem } from 'async-validator';
import { Component } from "react";
import capitalize from 'lodash/capitalize'

interface PropsType {
    render: (object:{[name:string]:any}) => void,
    rule: Array<RuleItem>,
    value: any,
    prop: string
}

interface StateType {
    isError: boolean,
    message: string
}

export class Validator extends Component<PropsType, StateType>{
    constructor(props: PropsType) {
        super(props)
        this.state = {
            isError: false,
            message: ''
        }
    }
    resolveMethods() {
        let eventMap: { [index: string]: Function } = {};
        (this.props.rule || []).forEach((element: any) => {
            if (element.trigger) {
                eventMap[`on${capitalize(element.trigger)}`] = () => {
                    this.validate()
                }
            }
        });
        return eventMap
    }
    validate() {
        let validator = new Schema({[this.props.prop]:this.props.rule} || {})
        validator.validate({[this.props.prop]:this.props.value}, {
            firstFields: true
        },(errors:any, fileds) => {
            if (errors) {
                this.setState({
                    isError: true,
                    message: errors[0].message
                })
            } else {
                this.setState({
                    isError: false,
                    message: ''
                })
            }
        });
    }
    render() {
        const validateMethods = this.resolveMethods() || {}
        return (<>
            {this.props.render({
                error: this.state.isError,
                helperText: this.state.message,
                ...validateMethods,
            })
            }
        </>)
    }
}