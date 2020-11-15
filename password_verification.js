document.querySelector('.button').onclick = function(){
  var password=document.querySelector('.password').value,
      re_password=document.querySelector('.re-password').value;
  if(password=="")
  {
    alert("Password cann't be blank");
  }
  else if((password.length<8)||(password.length>16))
  {
    alert("The lenght of the password is less than 8 or greater than 16");
  }
  else if(password != re_password)
  {
    alert("The password you entered and the confirm password doesn't match");
    return false;
  }
  else if(password==re_password)
  {
    alert("Login success");
  }
  return true;
}