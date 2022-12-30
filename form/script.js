let button = document.getElementById("btn");
button.disabled = true;
function myfun() {
  button.disabled = true;
  let name = document.getElementById('name1').value;
  let Email = document.getElementById('Email1').value;
  let pattern = /^[A-Za-z._]{3,}@[A_Za-z]{3,}[.]{1}[A-Za-z]{2,6}$/;
  let phone = document.getElementById("phone").value;
  let url = document.getElementById("url1").value;
  const urlval = /^(https?):\/\/[^\s$.?#].[^\s]*$/;

  if (name == "" && Email == "" && phone == "" && url == "") {
    button.disabled = true;
  }
  else if (phone.length<10 ||phone.length > 10) {
    button.disabled = true;
  }
  else if (!urlval.test(url)) {
    button.disabled = true;
  } else
    if (!Email.match(pattern)) {
      button.disabled = true;
  }
    else {
      button.disabled = false;
  }
}



