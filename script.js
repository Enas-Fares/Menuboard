var slideshowContainers = document.getElementsByClassName("slideshow-container");
for(let s = 0; s < slideshowContainers.length; s++) {
    var cycle = slideshowContainers[s].dataset.cycle;
    var slides = slideshowContainers[s].querySelectorAll('.mySlides');
    var slideIndex = 0;
    showSlides(slides, slideIndex, cycle);
};


function showSlides(slides, slideIndex, cycle) {
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    };
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    };
    slides[slideIndex - 1].style.display = "block";
    setTimeout(function() {
        showSlides(slides, slideIndex, cycle)
    }, cycle);
};



var slides = document.querySelectorAll('.slide');
    var btns = document.querySelectorAll('.btn');
    let currentSlide = 1;
    var manualNav = function(manual) {
        slides.forEach((slide) => {
            slide.classList.remove('active');

            btns.forEach((btn) => {
                btn.classList.remove('active');
            });
        });

        slides[manual].classList.add('active');
        btns[manual].classList.add('active');
    }

    btns.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            manualNav(i);
            currentSlide = i;
        });
    });
    
    var repeat = function(activeClass) {
        let active = document.getElementsByClassName('active');
        let i = 1;

        var repeater = () => {
            setTimeout(function(){
                [...active].forEach((activeSlide) => {
                    activeSlide.classList.remove('active');
                });

                slides[i].classList.add('active');
                btns[i].classList.add('active');
                i++;

                if(slides.length == i) {
                    i = 0;
                }
                if(i >= slides.length) {
                    return;
                }
                repeater();
            }, 3000);
        }
        repeater();
    }
    repeat();




    let fs = require('');

fs.readFile('file.json', 'utf8', function (err, data) {
   if (err) {
       console.log(err)
   } else {
       const file = JSON.parse(data);
       file.events.push({"info": Cheeseburger ,Chickenburger, Specialburger, Meatburger});
       file.events.push({"info": Cheeseburger ,Chickenburger, Specialburger, Meatburger});
       file.events.salads({"info": Cheeseburger ,Chickenburger, Specialburger, Meatburger});

       const json = JSON.stringify(file);

       fs.writeFile('file.json', json, 'utf8', function(err){
            if(err){ 
                  console.log(err); 
            } else {
                 
            }});
   }

});