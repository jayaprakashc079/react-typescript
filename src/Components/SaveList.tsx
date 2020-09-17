import * as ls from 'local-storage'
import _ from 'lodash';

interface list{
    id:number,
    status:string,
    value:string
}

class SaveList{

    setList=(key:string, obj:object)=>{
        if(!_.isEmpty(obj))
          ls.set(key, JSON.stringify(obj));
    }

    getList=(key:string)=>{
         let obj:string = ls.get(key);
         if(obj)
            return JSON.parse(obj);
    }
}

export default SaveList;