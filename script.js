function validate() {
    let fname = document.getElementById("fname").value
    let error1 = document.getElementById("error1")
     let lname = document.getElementById("lname").value
    let error2 = document.getElementById("error2")
    let pword = document.getElementById("pword").value
    let error3 = document.getElementById("error3")
    let email = document.getElementById("email").value
    let error4 = document.getElementById("error4")
    
    document.getElementById("fname").style.backgroundImage = "url(https://res.cloudinary.com/dwomgx0nz/image/upload/v1655225239/icon-error_r0k1t8.svg)"
    document.getElementById("fname").style.backgroundRepeat = "no-repeat"
    document.getElementById("fname").style.backgroundPosition = "right center"
    document.getElementById("fname").style.backgroundOrigin = "content-box"
    

    document.getElementById("lname").style.backgroundImage = "url(https://res.cloudinary.com/dwomgx0nz/image/upload/v1655225239/icon-error_r0k1t8.svg)"
    document.getElementById("lname").style.backgroundRepeat = "no-repeat"
    document.getElementById("lname").style.backgroundPosition = "right center"
    document.getElementById("lname").style.backgroundOrigin = "content-box"

    document.getElementById("email").style.backgroundImage = "url(https://res.cloudinary.com/dwomgx0nz/image/upload/v1655225239/icon-error_r0k1t8.svg)"
    document.getElementById("email").style.backgroundRepeat = "no-repeat"
    document.getElementById("email").style.backgroundPosition = "right center"
    document.getElementById("email").style.backgroundOrigin = "content-box"
    

    document.getElementById("pword").style.backgroundImage = "url(https://res.cloudinary.com/dwomgx0nz/image/upload/v1655225239/icon-error_r0k1t8.svg)"
    document.getElementById("pword").style.backgroundRepeat = "no-repeat"
    document.getElementById("pword").style.backgroundPosition = "right center"
    document.getElementById("pword").style.backgroundOrigin = "content-box"
    

  
    
    if(fname.length == "") {
    error1.textContent = "first name cannot be empty"
    //return false
    
    
    }
     
    else {
        error1.textContent = ""
        
    }
    
    if(lname.length == "") {
    error2.textContent = "last name cannot be empty"
    //return false
  }
  
  else {
    error2.textContent = ""
    //return false
  }
 
  if(email.length == "") {
    error3.textContent = "looks like this is not an email"
    //return false
  }
  
  else {
    error3.textContent = ""
    //return false
  }
  
  if(pword.length == "") {
    error4.textContent = "password cannot be empty"
    return false
  }
  
  else {
    error4.textContent 
   return false
  }
 

  
    
  
}

