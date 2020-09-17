import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TodoCard from './TodoCard';

const Styles = {
    root: {
      flexGrow: 1
    },
    paper: {
      height: 140,
      width: 100
    },
    control: {
      padding: 2
    }
  }

  interface list{
    id:number,
    status:string,
    value:string
}

  interface gridProps{
        list:Array<list>
        btnName:string
        updateType:string
        btnClick:(id:number, updateType:string) => void
        btnDelClick:(id:number, updateDelType:string) => void
        btnDelName:string
        updateDelType:string
}

  class SpacingGrid extends React.Component<gridProps, {}>{
   
  
    render(){

      const classes:any=this.props;

      return (
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="flex-start" spacing={2}>
              {this.props.list.map((value:list, id:number) => (
                <Grid key={id} item>
                  <Paper className={classes.paper}>

                  <TodoCard id={value.id} 
                          value={value.value}
                          btnClick={this.props.btnClick}
                          btnName={this.props.btnName}
                          updateType={this.props.updateType}
                          btnDelClick={this.props.btnDelClick}
                          btnDelName={this.props.btnDelName}
                          updateDelType={this.props.updateDelType}
                />  
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      );
    }
  }

  export default withStyles(Styles)(SpacingGrid);
  
  