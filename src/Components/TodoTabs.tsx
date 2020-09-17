import React from 'react';
import './Styles.css';
import _ from 'lodash'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

interface todoTabsProps{
    config:Array<config>
    initTab:string
    onClick:(val:string)=>void
}
interface config{
    name:string
    content:object 
}



class TodoTabs extends React.Component<todoTabsProps, {}>{

    render(){
        const TabList = _.map(this.props.config, 'name');
        console.log(this.props.config)
        return(
            <>
                <div>
                    <AppBar position="static">
                    <Tabs 
                        aria-label="simple tabs example"
                    >
                        {_.map(TabList, (val, id) => 
                            <Tab 
                                className="tabChange"
                                label={val} 
                                key={id} 
                                onClick={()=>this.props.onClick(val)} 
                                
                            />
                            
                        )}
                    </Tabs>    
                    </AppBar>
                </div>
                {
                     _.map(this.props.config,(val)=>
                     this.props.initTab === val.name   &&  <div>{val.content}</div>
                    )
                }
            </>
            );
    }
}

export default TodoTabs;