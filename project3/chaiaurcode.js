const clock = document.getElementById('clock')
// const clocl = document.querySelector('#clock')



setInterval(function(){
    let date = new Date();
  // console.log(date.toLacalTimeString());
  clock.innerHTML = date.toLocaleTimeString();
   
}, 1000)


