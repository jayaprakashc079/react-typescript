import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import {withFormsy, FormsyInjectedProps} from 'formsy-react'

interface Xstate{
    blur:boolean
}

interface Xprops{
    id?:string 
    label:string
    helperText:string
    value?:string
    required?:boolean
}

type InputProps = Xprops & FormsyInjectedProps<string>

class Input extends React.Component<InputProps, Xstate> {

    constructor(props: InputProps){
        super(props);
        this.state={
            blur:false
        }
    }

    componentDidUpdate(prevProps:InputProps) {
        if (prevProps.value !== this.props.value) {
            this.setState({
                blur: false
            });
        }
    }
    
    onBlur =()=>{
        this.setState({
            blur:true
        })
    }

    onFocus =()=>{
        this.setState({
            blur:false
        })
    }

    changeValue=(e:React.ChangeEvent<HTMLInputElement>)=>{
        this.props.setValue(e.target.value);
    }
    
    

    render(){
        return(
            <div>
                <TextField 
                    id="standard-basic" 
                    label={this.props.label}
                    type='text' 
                    onChange={this.changeValue}
                    placeholder="Enter text"
                    value={this.props.value || ''} 
                    onBlur={this.onBlur}
                    onFocus={this.onFocus}
                    error={this.state.blur}
                    helperText={this.state.blur && this.props.errorMessage}
                />

            </div>
            
        );
    }

}

export default withFormsy<Xprops, string>(Input);