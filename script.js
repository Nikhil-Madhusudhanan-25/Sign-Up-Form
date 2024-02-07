
document.getElementById("form").addEventListener("submit",(e)=>{
    if(document.getElementById("pwd1").value!=document.getElementById("pwd2").value)
        {
            document.getElementById("password-span").textContent="Passwords do not match";
            e.preventDefault();
            
    }
    else
        {document.getElementById("password-span").textContent="";
        console.log("Pwd match");
        return true;}
})