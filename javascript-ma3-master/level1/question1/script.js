function validate(){
  var phoneNumber = document.getElementById('phone-number').value;
  var emailAdress = document.getElementById('email-adress').value;
  var phoneRGEX = /^\d{10}$/;
  var emailRGEX = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
  var phoneResult = phoneRGEX.test(phoneNumber);
  var emailResult = emailRGEX.test(emailAdress);
if(phoneResult == false)
{
alert('Please enter a valid phone number');
return false;
}

if(emailResult == false)
{
alert('Please enter an valid email adress');
return false;
}

  return true;
}
