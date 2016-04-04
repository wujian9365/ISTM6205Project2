function validate(){
  if(document.mainForm.Name.value==""){
    alert( "Please provide  item name!" );
     document.mainForm.Name.focus();
     return false;
  }
  if(document.mainForm.Des.value==""){
    alert("Please input a description");
    return false;
  }
  if(document.mainForm.Des.value.length<10){
    alert("description need at least ten words");
    document.mainForm.Des.focus();
    return false;
  }
  if(document.mainForm.Phone.value == "" ||
           document.mainForm.Phone.value.length != 10){
    var y = document.mainForm.Phone.value;
     var x = document.mainForm.Phone.value.length;
     alert( "Please provide a phone Number in the format 0000000000." );
     document.mainForm.Phone.focus() ;
     return false;
  }
if (document.mainForm.Price.value==0) {
  alert("You don't want to give this item for free.");
  document.mainForm.Price.focus();
  return false;
};

  var x = isValidEmail();
  if (!x){
    alert("Please enter valid email address");
    return false;

  }
  var pic = isValidPic();
  
}


function isValidEmail(){
  var email = document.mainForm.Email.value;
  var dotPos = email.lastIndexOf(".");
  var atPos = email.lastIndexOf("@");
  if(dotPos + 2 >=email.length){
    return false;
  }
  if (atPos + 2 > dotPos) {
    return false;
  } 
  if(atPos < 1){
    return false;
  }
  return true;
}

function isValidPic(){
  var file = document.mainForm.Pic.value;
  var pos = file.lastIndexOf(".");
  var lastname = file.substring(pos,file.length) 
    if (lastname.toLowerCase()!=".jpg" ) {
     alert("You uploaded file type is"+lastname+"，should be .jpg");
     document.mainsform.pic.focus();
     return false;
 
    } else {
        return true;
 
    }
}
