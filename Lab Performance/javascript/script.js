console.log("Connect HTML Page");

var a = ["Form", "Validation"];

console.log("Index:", 0, "Item:", a[0]);
console.log("Index:", 1, "Item:", a[1]);

function submit_form()
{
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    if(fname=="" || lname=="" || email=="" || phone=="" || message=="")
    {
        alert("Field Value need to be filled up");
        return false;
    }

    console.log("First Name:", fname);
    console.log("Last Name:", lname);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Message:", message);

    return false;
}