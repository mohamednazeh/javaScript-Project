
// array of images tags for stars rating  By fake API
let apiRateTars = [...document.querySelectorAll('.starsImg')];  

// array of images tags for stars rating  By USER
let ratingStarInput = [...document.querySelectorAll('.rating-star')];  



ratingStarInput.map((star, index) => {         // Multiply every element in the array with addEventListener :
    star.addEventListener('click', () => {
        for (let i = 0; i < 5; i++) {
            if (i <= index) {
                ratingStarInput[i].src = "image/fill star.png";
            } else {
                ratingStarInput[i].src = "image/no fill star.png";
            }
        }
    })

})

////////////////////////////////////Displaying the default product /////////////////////////////////////

pImage=document.getElementById("productImg");
pName=document.getElementById("productName");
pDesc=document.getElementById("productdescription");
pPrice=document.getElementById("productPrice");
pTitle=document.getElementById("productTitle");
pRate=document.getElementById("rating");

 // 1 - created object of request
 var xhr3=new XMLHttpRequest();
 // 2 - open the request
 xhr3.open("GET" , "https://fakestoreapi.com/products");
// 3 - send the request 
xhr3.send();
console.log(xhr3);

// 4 - recieve request 
xhr3.addEventListener("readystatechange", function ()
 {
  if (xhr3.readyState == 4 && xhr3.status == 200) 
  {
    var data3 = xhr3.response;
    console.log(data3);   //very very important to show data
    var array = JSON.parse(data3);
    console.log(array);
      pImage.src=array[1].image;
      pName.innerHTML=array[1].category;
      pTitle.innerHTML=array[1].title;
      pPrice.innerHTML=array[1].price +" $";
      pDesc.innerHTML=array[1].description;
      pRate.innerHTML=array[1].rating.rate;      
      for (var j = 0; j < 5; j++) {
        if (j <= array[1].rating.rate) {
          apiRateTars[j].src = "image/fill star.png";
        } else {
          apiRateTars[j].src = "image/no fill star.png";
        }
    } 
  }
}
);
////////////////////////////////Display the DropDown of Products Categories/////////////////////

var dropDown= document.getElementById("selectId");
  // dropDown.length=0;
  var defaultOption=document.createElement('option');
  defaultOption. innerText="choose you category";
  dropDown.add(defaultOption);   
  // 1 - created object of request
   var xhr4=new XMLHttpRequest();
   // 2 - open the request
   xhr4.open("GET" , "https://fakestoreapi.com/products"); 
  // 3 - send the request 
  xhr4.send();
  console.log(xhr4);
  var newOption;
  xhr4.addEventListener("readystatechange", function ()
   {
    if (xhr4.readyState == 4 && xhr4.status == 200) 
    {
      var data4 = xhr4.response;
      console.log(data4);
      var username = JSON.parse(data4);
      console.log(username);
      for(var i=0 ; i<username.length ; i++)
      {
        newOption=document.createElement('option');
        newOption.innerText=username[i].category;
        newOption.value=username[i].id;        
        dropDown.add(newOption);              
      }    
    }
  });

  /////////////////////////////////////////Displaying the selsected Product//////////////////////////////////////////
  function showUser()
  {
    var selectedOptionID= document.getElementById("selectId").value;
     // 1 - created object of request
     var xhr5=new XMLHttpRequest();
      // 2 - open the request  
      xhr5.open("GET" , "https://fakestoreapi.com/products/"+selectedOptionID);
      // 3 - send the request 
      xhr5.send();
     console.log(xhr5);

     xhr5.addEventListener("readystatechange", function ()
   {
    if (xhr5.readyState == 4 && xhr5.status == 200) 
    {
            var view = xhr5.response;
            var userView = JSON.parse(view);         
            console.log(userView);
            pImage.src=userView.image;
            pName.innerHTML=userView.category;
            pTitle.innerHTML=userView.title;
            pPrice.innerHTML=userView.price +" $";
            pDesc.innerHTML=userView.description;
            pRate.innerHTML=userView.rating.rate;
            for (var i = 0; i < 5; i++) {
              if (i <= userView.rating.rate) {
                apiRateTars[i].src = "image/fill star.png";
              } else {
                apiRateTars[i].src = "image/no fill star.png";
              }
          }

    }
  });
  }

  ////////////////////////////////////Buying & Addding to CArt Events////////////////////////////////////////////////////////

  var productCounter =0;
  document.getElementById("addToCart").addEventListener("click" , function(){
    productCounter++;
    alert("Added to your cart , Now you have "+ productCounter +" product items");
    localStorage.setItem("cartItems" , productCounter);
  });

  document.getElementById("buy").addEventListener("click", function(){
    alert("Thank You For using Us");
  });

  ////////////////////////////////////////////////////////////////////////////////  

  document.getElementById("reviewBtn").addEventListener("click" , function(){
    alert("THANK YOU FOR YOUR REVIEW ...");
    document.getElementById("txtArea").value="";
    document.getElementById("reviewTitle").value="";
    // fill out stars
    for (var x=0; x<5 ; x++) {
    ratingStarInput[x].src = "image/no fill star.png";
    }

  } );
  