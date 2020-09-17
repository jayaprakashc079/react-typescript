import React from 'react';
import Button from '@material-ui/core/Button'

interface buttonProps{
    disabled?:boolean
    value:string
    onClick?:()=> void
    size?:string
}
interface buttonState{

}

class ButtonField extends React.Component<buttonProps, buttonState>{

    render(){
        return(

            <Button 
                variant="contained" 
                color="secondary" 
                disableElevation
                disabled={this.props.disabled}
                type='submit'
                onClick={this.props.onClick}
            >
                {this.props.value}
            </Button>
        );
    }
}

export default ButtonField;