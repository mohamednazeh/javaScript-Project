

document.forms[0].addEventListener('submit',function(e){


    var regexEmail =/(^[a-zA-Z0-9_.]+[@]{1}[a-z0-9]+[\.][a-z]+$)/
    var email=document.getElementById('email').value;

    if(regexEmail.test(email) ){
        
        var inpt=document.getElementById("email")
        localStorage.setItem("email",inpt.value)
        
    }else{
        e.preventDefault()
      document.getElementById('emailErr').innerHTML="*Please enter your email correct* ex: (Ahmed@gmail.com)"
    }

})



  document.forms[0].addEventListener('submit',function(e){

    //Checks that a password has a minimum of 6 characters, at least 1 uppercase letter, 1 lowercase letter, and 1 number with no spaces.
    var regexPassword =/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/  
    var password =document.getElementById('password').value;


    if( regexPassword.test(password)){
        
        var inpt=document.getElementById("password")
        localStorage.setItem("password",inpt.value)

    }else{
        e.preventDefault()
        

        document.getElementById('passErr').innerHTML="*Please enter strong password* at least 1 uppercase letter, 1 lowercase letter, and 1 number"
    }

})



document.forms[0].addEventListener('submit',function(e){


    var regexName = /^[a-z]{3,}(\s[a-z]{3,})+$/i;
    var name = document.getElementById('name').value;

    if(regexName.test(name)){
        
        var inpt=document.getElementById("name")
        localStorage.setItem("name",inpt.value)

    }else{
        
        e.preventDefault()
        

        document.getElementById('nameErr').innerHTML="*Please enter your full name correct* ex: (Ahmed mohamed)"


        
    }

})
