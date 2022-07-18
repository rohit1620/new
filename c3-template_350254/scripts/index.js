
let search=()=>{
     let query=document.querySelector("#query").value
    getData(query);
    console.log("rohit")
}



let getData=async(query)=>{
    let url=`https://masai-mock-api.herokuapp.com/hotels/search?city=${query}`;
       try {
          let res= await fetch(url)
          let data=await res.json();
          console.log(data.hotels);
          //  append(data.hotels)
           let h=document.querySelector("#sort_htl").value
          let l=document.querySelector("#filter_ac").value
          console.log(h);
          console.log(l);
          if(h=="h"){
           document.querySelector("#sort_htl").addEventListener("click",function(){
            document.querySelector("#hotels_list").innerHTML=null;
             myFun(data.hotels)
            // myFilter(data.hotels)
           })
            }
            // else{
               append(data.hotels)
            // }
            // else
           if(l=="l"){
           
            document.querySelector("#filter_ac").addEventListener("click",function(){
              document.querySelector("#hotels_list").innerHTML=null;
              myFilter(data.hotels)
             })
            
          }
          // if(!l && !h){
          //      append(data.hotels)
          // }
          // else{
          //   append(data.hotels)
          //   console.log("append")
          //  }
         
      
       } catch (error) {
          console.log("error",error);
       }
}



// function hSort(){
//   //   console.log(selected)
//   myFun(data)
//       // data.sort(function (a, b) {
//       //   return b.Price - a.Price;
//       // });
  
//       // append(data);
//       // console.log("aaadfdfdf")
//       // console.log(data)   
// }  
let myFun=(data)=>{
data.sort(function (a, b) {
        return b.Rating - a.Rating;
      });
// var filtered = data.filter(function (elem) {
//   return elem.Ac == true;
// });
console.log("rohit malav")
 console.log(data)
 append(data)
}


let myFilter=(data)=>{
  // data.sort(function (a, b) {
  //         return b.Rating - a.Rating;
  //       });
  var filtered = data.filter(function (elem) {
    return elem.Ac == true;
  });
  console.log("rohit malav")
   console.log(filtered)
   append(filtered)
  }


   let lSort=()=>  {
      data.sort(function (a, b) {
        return a.Price - b.Price;
      });
      append(data);
    }
  
    function afilter() {
        
        // filter will return array whenever it satifies the given condn
  
        var filtered = data.filter(function (elem) {
          return elem.Ac == true;
        });

        append(filtered)
    }


    function nfilter() {
        
        // filter will return array whenever it satifies the given condn
  
        var filtered = data.filter(function (elem) {
          return elem.Ac == false;
        });

        append(filtered)
    }
  




let books=localStorage.getItem("book");
let append=(data)=>{
    console.log(data)
     data.forEach(function(el){
        let img=document.createElement("img");
        let h3=document.createElement("h3");
        let p1=document.createElement("p");
        let p2=document.createElement("p");
        let p3=document.createElement("p");
        let btn=document.createElement("button");
        let div=document.createElement("div");


        img.src=el.Images.one;
        h3.innerText=el.Title;
        p1.innerText=el.Price;
        p2.innerText=el.Rating;
        p3.innerText=el.Ac
        btn.innerText="book";
        btn.addEventListener("click",function(){
            book(el)
        })

        div.append(img,h3,p1,p2,p3,btn)
        document.querySelector("#hotels_list").append(div)
        
     })
}
 
let book=(el)=>{
    localStorage.setItem("book",el)
}