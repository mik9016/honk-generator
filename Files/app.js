const placeForMusic = document.getElementById('muza');

function playMusic (){
  placeForMusic.play();

}


fetch('https://honk-generator.herokuapp.com/')
.then(response => response.blob())
.then(function(myBlob) {
  const objectURL = URL.createObjectURL(myBlob);
  placeForMusic.src = objectURL;
})
.then(function(){
  const btn = document.getElementById('btn');
  btn.addEventListener('click', ()=>{
    console.log('clicked');
    playMusic();
  })
})





  






    



 