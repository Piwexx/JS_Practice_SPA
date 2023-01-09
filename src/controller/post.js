import viewHome from  '../views/post.html'

//esto deberia estar en models
const getPost = async() =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    return data
}  

export default async() =>{
    const content = document.querySelector(".content")
    content.innerHTML = viewHome;
    
    const post = await getPost()
    
    const ul = content.querySelector("#posts")

    post.forEach(post => {
        const li = document.createElement("li")
        li.classList.add("list-group-item")
        li.innerText = post.title
        ul.appendChild(li)
    });
    content.appendChild(ul)


   return content
}