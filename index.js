function sendMail(){
    var prams = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
        phone : document.getElementById("phone").value,
    };

    const serviceID = process.env.serviceID;
    const templateID = process.env.templateID;
    

    emailjs.send(serviceID,templateID,prams)
    .then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        document.getElementById("phone").value = "";
        console.log(res);
        alert("your message sent");
    })
    .catch((err)=> console.log(err));
}

