


// new p 




// var input = document.querySelector(".input").value;






    // new p end 

  



 function myFunction(){
     
   var input = document.querySelector(".input").value;
//    var input="akash";

    var string = input.toUpperCase();
    // var stoArray=[...string]
    var stoArray = string.split("");
    console.log((stoArray));

  var count = document.querySelector(".count");

//   let p = document.createElement("p");
// document.body.appendChild(p);

    // var countshow=input.length;

    // count.innerHTML= countshow;


const output=stoArray.reduce(function(acc, curr){
    if(acc[curr]){
    acc[curr] =++acc[curr]
    // count.innerHTML=(curr+ " : "+acc[curr])
    }else{
        acc[curr]=1
        // (curr+ " : "+acc[curr])
    
    }
    return acc;
    } ,{})

    count.innerHTML=(JSON.stringify(output))
// p.innerHTML=output

 };


