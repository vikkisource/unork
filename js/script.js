function validate(){
    var name=document.forms["myform"]["first-name"].value;
    var name2=document.forms["myform"]["last-name"].value;
    var email=document.forms["myform"]["email"].value;
    var phone=document.forms["myform"]["phone"].value;
   
    var error =0;
        
        if( name == 'null'){
            document.getElementById('first-name-error').innerHTML = "Name should not null";
         document.getElementById('first-name').classList.add("uo-error-style");
         error++;
        }
        else if( name == ''){
            document.getElementById('first-name-error').innerHTML = "Name should not null";
            document.getElementById('first-name').classList.add("uo-error-style");
        
         error++;
        }
        else if( !isNaN(name)){
            document.getElementById('first-name-error').innerHTML = "Name should not number";
            document.getElementById('first-name').classList.add("uo-error-style");
         error++;
        }
        else{
            document.getElementById('first-name-error').innerHTML = "";
         document.getElementById('first-name').classList.remove("uo-error-style");
        
        }


        if( name2 == 'null'){
            document.getElementById('last-name-error').innerHTML = "Name should not null";
         document.getElementById('last-name').classList.add("uo-error-style");
         error++;
        }
        else if( name2 == ''){
            document.getElementById('last-name-error').innerHTML = "Name should not null";
            document.getElementById('last-name').classList.add("uo-error-style");
        
         error++;
        }
        else if( !isNaN(name2)){
            document.getElementById('last-name-error').innerHTML = "Name should not number";
            document.getElementById('last-name').classList.add("uo-error-style");
         error++;
        }
        else{
            document.getElementById('last-name-error').innerHTML = "";
         document.getElementById('last-name').classList.remove("uo-error-style");
        
        }

       if( email == ''){
            document.getElementById('email-error').innerHTML = "Email should not null";
            document.getElementById('email').classList.add("uo-error-style");
        
         error++;
        }
        else{
            document.getElementById('email-error').innerHTML = "";
         document.getElementById('email').classList.remove("uo-error-style");
        
        }
        if( phone == ''){
            document.getElementById('phone-error').innerHTML = "Phone number should not null";
            document.getElementById('phone').classList.add("uo-error-style");
        
         error++;
        }
        else if(phone.length != 10){
            document.getElementById('phone-error').innerHTML = "Phone Number should be 10 Digit";
            document.getElementById('phone').classList.add("uo-error-style");
        
         error++; 
        }
        else{
            document.getElementById('phone-error').innerHTML = "";
         document.getElementById('phone').classList.remove("uo-error-style");
        
        }


        if(error == 0 ){
            return true;
        }
        else{
            return false;
        }
        
}