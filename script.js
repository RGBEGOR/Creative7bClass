var Boxlayout = (function () {
    var wrapper = document.body,
    sgroups = Array.from(document.querySelectorAll(".sgroup")),
    closeButtons = Array.from(document.querySelectorAll(".close-sgroup")),
    expandedClass = "is-expanded",
    hasExpandedClass = "has-expanded-item";
    return { init: init };
    function init() {
        _initEvents();
    }
    function _initEvents() {
        sgroups.forEach(function (element) {
            element.onclick = function () {
                _opensgroup(this);
            };
        });
        closeButtons.forEach(function (element) {
            element.onclick = function (element) {
                element.stopPropagation();
                _closesgroup(this.parentElement);
            };
        });
    }
    function _opensgroup(element) {
        if (!element.classList.contains(expandedClass)) {
            element.classList.add(expandedClass);
            wrapper.classList.add(hasExpandedClass);
        }
    }
    function _closesgroup(element) {
        if (element.classList.contains(expandedClass)) {
            element.classList.remove(expandedClass);
            wrapper.classList.remove(hasExpandedClass);
        }
    }
})();
Boxlayout.init();    



class Parallax {
    constructor(obj) {
      this.clouds = document.querySelectorAll(obj.clouds);
      this.boat = document.querySelector(obj.boat);
      this.background = document.querySelector(obj.background);
  
      window.addEventListener("scroll", () => this.moveElements());
    }
    moveElements() {
      this.clouds.forEach(clouds => {
        let speed = clouds.getAttribute('data-speed')  
        clouds.style.transform = `translateX(${scrollY * speed}px) translateY(${scrollY * speed}px)`
      });
      this.boat.style.transform = `translateX(${scrollY * 1}px)`
      this.background.style.objectPosition = `0 ${scrollY / 7}%`
    }
  }
  
  const parallax = new Parallax({
    clouds: ".header__cloud",
    boat: ".header__boat",
    background: ".header__fantasy",
  });

  class Text{
    constructor(obj){
      this.text = document.querySelector(obj)
      this.fullText = this.text.innerHTML
      this.text.innerHTML = ''
  
      this.str()
    }
    str(x = 0){
      this.text.innerHTML += this.fullText[x]
      x++
      if (x < this.fullText.length) {
        setTimeout(() => {
          this.str(x)
        }, 100);
      }
    }
  }
  
  const text = new Text('.header__title')