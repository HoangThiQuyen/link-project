

const getCurrentLink =  ()=>{
    axios.get('https://link-server.vercel.app/api/v1/project')
    .then(function (response) {
      document.getElementById('value_link').innerHTML = response.data.data.link;
    })
    .catch(function (error) {
      console.log(error);
    });
}
getCurrentLink()

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


document.getElementById('btnSubmit').addEventListener("click",(event)=>{
  let valueLink = document.getElementById('link').value.trim();
  event.preventDefault();
  if(valueLink){
    axios.post('https://link-server.vercel.app/api/v1/project', {link:valueLink})
    .then(function (response) {
      document.getElementById('link').value=''
      launch_toast()
      getCurrentLink()
    })
    .catch(function (error) {
      console.log(error);
    });
  }else{
    launch_toast__error()
  }
})




