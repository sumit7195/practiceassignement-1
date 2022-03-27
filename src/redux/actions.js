import axios from "axios"


export const getData = (data)=>{
  
   return {
       type: "GET_DATA",
       payload:data
   }
}


export function  fetchData(){

   return function(dispatch){
         
        dispatch(fetchUserRequest())
   
       return axios.get("https://movie-fake-server.herokuapp.com/products")
       .then(({data})=>{
           dispatch(getData(data))
       })
       .catch((error)=>{
           const errorMsg = error.message;
           dispatch(fetchUserFailure(errorMsg))
       }) 
   }
}


export const fetchUserRequest = ()=>{
    return {
        type: "FETCH_USER_REQUEST"
    }
}

export const fetchUserFailure = (error)=>{
   
    return {
        type: "FETCH_USER_FAILURE",
        payload:error
    }
       
}







export const sortByAsc = ()=>{
      
    return {
        type:"SORT_BY_ASC"
    }


}

export const sortByDsc = ()=>{
      
    return {
        type:"SORT_BY_DSC"
    }


}