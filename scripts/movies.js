// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

// http://www.omdbapi.com/?apikey=[yourkey]&
// }OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=4429f140s
// let id;

// moviesdiv=document.getElementById("search");
//  function debounce(func,delay){

//     if(id){
//         clearTimeout
//     }
//     id=setTimeout (function(){
//         func()
//     },delay)
//  }

let moviesbox=document.getElementById("movies");
 async function main()
{
    try{
        const value=document.getElementById("search").value;
        const res=await fetch( `http://www.omdbapi.com/?i=tt3896198&apikey=8f76a238&s=${value}`)
        const  data = await res.json();
        console.log(data);
        const movies =data.Search
        append(movies)
    
    }catch(err){
        console.log(err)
    }
}

function append(movies){
    console.log(movies)
   for(var i=0;i<movies.length;i++){

    let box= document.createElement("div")
    let ima=document.getElementById("img")
    ima.src=el.Poster
    let name=document.createElement("p")
    name.innerText=el.Title

    let button=document.createElement("button")
    button.ClassName="book_now"
    button.innerText="Book Now"
    button.onclick=()=>{
        mov(el)
    }
    box.append(ima,name,button);

    moviesbox.append(box)

   }
       
   

}
function mov(el){
    window.location.href="/checkout.html"

}

function debounce (func, delay){

    if(id){
        clearTimeout(id)
    }
    var id = setTimeout(function(){
        func()
    },delay)
}
