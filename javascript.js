/*eslint-env browser*/  
document.getElementById("submit").onclick = function(){
    if (validateform() == false){
        
        validateform()
    }
    else{
            
    document.getElementById("name").innerHTML = 
        document.getElementById("fname").value;
    
    document.getElementById("name").innerHTML += 
        " " + document.getElementById("lname").value;
    
    document.getElementById("sig-title").innerHTML = 
        document.getElementById("title").value;
    
    document.getElementById("personal-phone").innerHTML = 
        "Mobile: " + document.getElementById("mobile").value;
    
    document.getElementById("signature").style.display = "block";
    document.getElementById("add").style.display = "block";
    document.getElementById("mobileerror").style.display = "none";
        }
    }

function validateform(){  
var fname=document.myform.fname.value;  
var lname=document.myform.lname.value;  
var title=document.myform.title.value;
var mobile=document.myform.mobile.value;
if (fname==null || fname==""){
  document.getElementById("fname").placeholder = "First Name is required";
  return false;
}else if (lname==null || lname==""){  
  document.getElementById("lname").placeholder = "Last Name is required"; 
  return false;
}else if (title==null || title==""){  
  document.getElementById("title").placeholder = "Title is required"; 
  return false;
}else if(mobile.length<11){  
  document.getElementById("mobileerror").style.display = "block"; 
  return false;
  }
}