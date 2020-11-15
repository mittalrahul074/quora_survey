function matchPassword() {  
  var pw1 = document.getElementById("pswd1");  
  var pw2 = document.getElementById("pswd2"); 
  console.log(pw1);
  console.log(pw2); 
  if(pw1 != pw2)  
  {   
    alert("Passwords did not match");  
    console.log('1');
  } else {  
    alert("Password created successfully"); 
    console.log('2'); 
  }  
}  