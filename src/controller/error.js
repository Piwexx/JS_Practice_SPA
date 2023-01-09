import viewHome from  '../views/404.html'

export default () =>{
    const content = document.querySelector(".content")
    content.innerHTML = viewHome;


   return content
}