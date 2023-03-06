function submitdetails(event){
    event.preventDefault();
    let fname = document.getElementById("fname").value
    let lname = document.getElementById("lname").value
    let email = document.getElementById("email").value
    let mobile = document.getElementById("mobile").value
    let date = document.getElementById("date").value


    //stoing each element

    localStorage.setItem("userdetailname",fname)
    localStorage.setItem("userdetaillname",lname)
    localStorage.setItem("userdetailemail",email)
    localStorage.setItem("userdetailmobile",mobile)
    localStorage.setItem("userdetaildate",date)



    //storin in string



    const userDetails = {
        fname,
        lname,
        email,
        mobile,
        date
    }


    localStorage.setItem("userDetails", JSON.stringify(userDetails))




}
