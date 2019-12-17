
const filterName=(state='',action)=>{

    if(action.type==='FILTER_NAME')
    {return state=action.value}
    
    return state
    
    
    }
    export default filterName