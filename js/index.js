var carousel = function (){
  var albumAfbeelding = document.getElementsByClassName("carousel");
  var teller = 0;
  var teller1 = 0;
  var arrayAfbeelding = [];
  
        while (teller < albumAfbeelding.length){
          arrayAfbeelding.push(albumAfbeelding[teller].getAttribute("src"));
          teller++;
        }

        arrayAfbeelding.push(arrayAfbeelding.shift());

        while (teller1 < albumAfbeelding.length){
          albumAfbeelding[teller1].setAttribute("src",arrayAfbeelding[teller1]);
          teller1++;
        }

        console.log(arrayAfbeelding.join());
      
}

setInterval(carousel,2000);