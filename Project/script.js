function search() {
  let filter = document.getElementById('find').value.toUpperCase();
  let items = document.querySelectorAll('.product');
  
  for (let i = 0; i < items.length; i++) {
      let a = items[i].getElementsByTagName('h3')[0];
      let value = a.textContent || a.innerText;
      if (value.toUpperCase().indexOf(filter) > -1) {
          items[i].style.display = "";
      } else {
          items[i].style.display = "none";
      }
  }
}

function sendMail(){
  let parms ={
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    messsage: document.getElementById("message").value,
  }
  emailjs.send("service_wynk9cg", "template_v8fqqei", parms).then(alert("Email Sent!!"))
}