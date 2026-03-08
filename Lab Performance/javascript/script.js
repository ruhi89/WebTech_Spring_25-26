console.log("Connect HTML Page");


function submit_form()
{
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    if(fname=="" || lname=="" || email=="" || phone=="" || message=="")
    {
        document.getElementById("errorMsg").innerHTML="Field Value need to be filled up";
        console.log("Field Value need to be filled up");
        return false;
    }

    console.log("First Name:", fname);
    console.log("Last Name:", lname);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Message:", message);

    return false;
}