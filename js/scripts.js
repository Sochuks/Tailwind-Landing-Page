const btn = document.getElementById('menu-icon')
const nav = document.getElementById('menu')

btn.addEventListener("click", () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
});

const header = document.querySelector("header");

window.addEventListener("scroll", function() {
  header.classList.toggle("sticky", window.scrollY > 0);
});

/*function sendEmail() {
      Email.send({
        SecureToken:'6f9a469a-a8e5-40ea-8d77-81cd744dcd1e',
        To: 'moseschukwumakajang@gmail.com',
        From: 'adamconetwork@gmail.com',
        Subject: "New Contact Submission",
        Body: "stew"
      })
        .then(function (message) {
          alert("mail sent successfully")
        });
    }*/

    const contact = document.getElementById('contact-btn');
    if(contact){
      contact.addEventListener("click", () => {
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var phone = document.getElementById('phone').value;
      var message = document.getElementById('message').value;
      var res_mssg = document.getElementById('res_mssg');

      res_mssg.style.padding = "10px";


      var text;
      if(name.length < 2){
        text = "Please Enter valid Name";
        res_mssg.innerHTML = text;
        return false;
  }
      if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email";
      res_mssg.innerHTML = text;
      return false;
  }
      if(isNaN(phone) || phone.length != 11){
      text = "Please Enter valid Phone Number";
      res_mssg.innerHTML = text;
      return false;
  }
      if(message.length <= 1){
      text = "Please enter valid message";
      res_mssg.innerHTML = text;
      return false;
  }
      
      alert("Form Submitted Successfully!");
      res_mssg.style.display ="none";
      return true;

    });
    }
