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

let movies_div = document.getElementById("movies");
 async function searchMOvies()
{
    try{
        const query=document.getElementById("search").value;
        const res=await fetch( `http://www.omdbapi.com/?i=tt3896198&apikey=8f76a238&s=${query}`)
        const  data = await res.json();
        var searchData = localStorage.setItem("SearchMovies",JSON.stringify(data))
        window.location.reload();
        const movies =data.Search
        return movies
        // append(movies)
    
    }catch(err){
        console.log(err)
    }
}
let movie_data= JSON.parse(localStorage.getItem("SearchMovies"))||[];
console.log(movie_data)

 let x = movie_data.Search;
x.map(function(el){
     //console.log(el);
 //     window.location.reload();
     let box1= document.createElement("div");
     let poster=document.createElement("img");
     poster.src=el.Poster;
     let name = document.createElement("p");
     name.innerText=el.Title; 
     let Price = document.createElement("h4")
     Price.innerText="₹ 100/"
     Price.setAttribute("class","price")
     let btn = document.createElement("button");
     btn.innerText="Book Now";
     btn.setAttribute("class","book_now");
     
     box1.append(poster,name,Price,btn)
     
     document.getElementById("movies").append(box1);
     btn.addEventListener("click",function(){
        addToCart(el);

  
  })
});
let cartData=[];
function   addToCart(el){
    cartData.push(el);
    localStorage.setItem("movie",JSON.stringify(cartData));
    window.location.href="/checkout.html"

}

async function main()
{
     let data = await searchMOvies();
     if(data == undefined)
     {
          return false;
     }
   ;
}

function debounce (func, delay){

    if(id){
        clearTimeout(id)
    }
    var id = setTimeout(function(){
        func()
    },delay)
}
