let optionsHeader = {
    threshold: 1
  }
  

let callback = function(entries, observerHeader) {
    entries.forEach(entry => {
        console.log(entry.isIntersecting)

        if(entry.isIntersecting == false){
            document.querySelector("#obsh").classList.add("none")
            document.querySelector(".navbar").classList.add("bgnav")
        }
        else{
            document.querySelector("#obsh").classList.remove("none")
            document.querySelector(".navbar").classList.remove("bgnav")
        }
    });
  };

  
let observerHeader = new IntersectionObserver(callback, optionsHeader);

let target = document.querySelector('#obsh');
observerHeader.observe(target);