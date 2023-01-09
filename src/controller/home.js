import viewHome from  '../views/home.html'

  

export default  () =>{
    const content = document.querySelector(".content")
    content.innerHTML = viewHome;

    const btn = content.querySelector("#btnClick")
    btn.addEventListener("click",() =>{
        alert("Hola")
    })

   return content
}