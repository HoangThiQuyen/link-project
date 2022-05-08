
document.getElementById('btnSubmit').addEventListener("click",(event)=>{
  let valueLink = document.getElementById('link').value.trim();
  event.preventDefault();
  if(valueLink){
    axios.post('https://link-server.vercel.app/api/v1/project', {link:valueLink})
    .then(function (response) {
      document.getElementById('link').value=''
      console.log(response)
    })
    .catch(function (error) {
      console.log(error);
    });
  }else{
    alert('Please enter link')
  }
})




