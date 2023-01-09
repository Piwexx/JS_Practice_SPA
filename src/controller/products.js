import viewHome from  '../views/products.html'

export default () =>{
    const content = document.querySelector(".content")
    content.innerHTML = viewHome;

   return content
}