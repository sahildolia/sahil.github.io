burger = document.querySelector(`.burger`)
navbar = document.querySelector(`.navbar`)
navList = document.querySelector(`.nav-list`)


burger.addEventListener(`click`, ()=>{
    navList.classList.toggle(`v-class-resp`);
    navbar.classList.toggle(`h-nav-resp`);
    
    })
    function scrollTop(){
      const scrollTop = document.getElementById('scroll-top');
      // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
      if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
  }
  window.addEventListener('scroll', scrollTop)



    function write(obj, sentence, i, cb) {
        if (i != sentence.length) {
          setTimeout(function () {
            i++
            obj.innerHTML = sentence.substr(0, i + 1) +' <em aria-hidden="true"></em>';
            write(obj, sentence, i, cb)
          }, 50)
        } else {
          cb()
        }
      }
      
      function erase(obj, cb, i) {
        var sentence = obj.innerText;
        if (sentence.length != 0) {
          setTimeout(function() {
            sentence = sentence.substr(0, sentence.length-1)
            obj.innerText = sentence;
            erase(obj, cb);
          }, 18 / (i * (i / 10000000)))
        } else {
          obj.innerText = " "
          cb()
        }
      }
      
      var typeline = document.querySelector("#typeline");
      
      function writeErase(obj, sentence, time, cb) {
        write(obj, sentence, 0, function() {
          setTimeout(function() {
            erase(obj, cb) }, time) })
      }
      var sentences = [
        "a Web Designer. ",
        "a Web Developer. ",
        
      ]
      var counter = 0;
      
      function loop() {
        var sentence = sentences[counter % sentences.length]
        writeErase(typeline, sentence, 1500, loop)
        counter++
      }
      
      loop()

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
