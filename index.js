var form= document.getElementsByClassName('form')[0];
console.log(form);

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    var n= document.getElementById('name').value;
    var e= document.getElementById('email').value;
    var s= document.getElementById('subject').value;
    var m= document.getElementById('message').value;


    var body= "Name: "+n+ "<br>"+ "Email: "+e+ "<br>"+ "Subject: "+s+ "<br>"+ "Message: "+m;
    //document.write(body)
    Email.send({
        SecureToken : "2201b07b-157a-4d05-b75f-51c9d4fcb8c5",
        To : 'labibrahman555@gmail.com',
        From : "hackmachine.omega@gmail.com",
        Name: n,
        Email: e,
        Subject : s,
        Message : m,
        Body : body
    }).then(
      message => alert(message)
    );
})