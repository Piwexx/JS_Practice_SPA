import './style.css'
import { router } from './router/index.routes'


window.addEventListener("DOMContentLoaded",()=>{
   router(window.location.hash)
})
window.addEventListener("hashchange",() =>{
   router(window.location.hash)
})

