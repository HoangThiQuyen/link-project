function launch_toast() {
  var x = document.getElementById("toast__current")
  x.classList.add('toast')
  setTimeout(function(){
     x.className = x.className.replace("toast", "");
     
     }, 2000);
}

function launch_toast__error() {
  var x = document.getElementById("toast__current__error")
  x.classList.add('toast_error')
  setTimeout(function(){ x.className = x.className.replace("toast_error", ""); }, 2000);
}

function add_class_hidden() {
 document.getElementById("link__current").style.visibility='inherit'
}

document.getElementById('btnSubmit').addEventListener("click",(event)=>{
  let valueLink = document.getElementById('link').value.trim();
  event.preventDefault();
  if(valueLink){
    axios.post('https://link-server.vercel.app/api/v1/project', {link:valueLink})
    .then(function (response) {
      document.getElementById('link').value=''
      launch_toast()
      document.getElementById('value_link').innerHTML = valueLink;
      add_class_hidden()
    })
    .catch(function (error) {
      console.log(error);
    });
  }else{
    launch_toast__error()
  }
})




