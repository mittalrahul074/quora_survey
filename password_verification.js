document.querySelector('.button').onclick = function(){
  var password=document.querySelector('.password').value,
      re_password=document.querySelector('.re-password').value;
  if(password=="")
  {
    alert("Password cann't be blank");
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