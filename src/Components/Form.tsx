import React from 'react';
import Formsy from 'formsy-react'
import Button from './ButtonField';

interface formProps{
    btnText:string
    submit:(model: input) => void
}
interface input{
    value:string
}

interface formState{
    canEnable:boolean
}
interface input{
    value:string
}

class Form extends React.Component<formProps, formState>{

    constructor(props:formProps){
        super(props);
        this.state={
            canEnable:false
        }
    }

    enableButton=()=>{
        this.setState({
            canEnable:true
        });
    }

    disableButton=()=>{
        this.setState({
            canEnable:false
        });
    }

    submit=(model:input)=>{
        this.props.submit(model);
        if(this.refs.form !== undefined)
            // @ts-ignore-next-line
            this.refs.form.reset();
    }


    render(){
        return(
            <div>
                <Formsy
                     ref= 'form'
                     onValidSubmit={this.submit} 
                     onValid={this.enableButton}
                     onInvalid={this.disableButton}
                     className="form"
                >
                    {this.props.children}
                    <Button
                        value={this.props.btnText}
                        disabled={!this.state.canEnable}
                    />
                </Formsy>
            </div>
        );
    }
}

export default Form;