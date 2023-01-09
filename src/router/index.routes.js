 
 import {pages} from '../controller/index'
 

 const router = async(route) =>{
   switch (route) {
    case  '':{
        pages.home()
    }    
        break;
    case  '#/posts':{
        await pages.post()
    }
        break;
     case  '#/products':{
        pages.products()
     }      
        break;      
    default:{
         pages.error()
    }
        break;
   }
}

export {router}