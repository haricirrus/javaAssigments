document.getElementById("passs").style.display="none";
document.getElementById("conpasss").style.display="none";
function validation(){
    let pass = document.getElementById('pass').value;
    let conpass = document.getElementById('conpass').value;
        if(pass==""){
            document.getElementById("passs").style.display="block";
            document.getElementById('passs').innerHTML="Password should not empty";
            return false;
        }
        if(pass.length<6 || pass.length>12){
            document.getElementById("passs").style.display="block";
            document.getElementById('passs').innerHTML="password should greater than six and less than twelve";
            return false;
        }
        if(pass.search(/[0-9]/)==-1){
            document.getElementById("passs").style.display="block";
            document.getElementById('passs').innerHTML="Enter atleast one number";
            return false;
        }
        if(pass.search(/[a-z]/)==-1){
            document.getElementById("passs").style.display="block";
            document.getElementById('passs').innerHTML="Enter atleast one lower case";
            return false;
        }
        if(pass.search(/[A-Z]/)==-1){
            document.getElementById("passs").style.display="block";
            document.getElementById('passs').innerHTML="Enter atleast one upper case";
            return false;
        }
        if(pass.search(/[!\@\#\$\%\^\&\*\(\)\<\>]/)==-1){
            document.getElementById("passs").style.display="block";
            document.getElementById('passs').innerHTML="Enter atleast one special character";
            return false;
        }
        
        if (/\s/.test(pass)){
            document.getElementById("passs").style.display="block";
            document.getElementById('passs').innerHTML="There should not space";
            return false;
        }
        else{
            document.getElementById('passs').innerHTML="";
        }
        if(conpass != pass){
            document.getElementById("conpasss").style.display="block";
            document.getElementById('conpasss').innerHTML="Password Not Mathched";
            return false;
        }
        else{
            alert("password matched");
        }
}
