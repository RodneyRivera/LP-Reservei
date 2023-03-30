class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();


  var counter = 1;
  setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 20000);


function img1 (){
  document.getElementById("img-maior").src="./img/Grupo de máscara 15/Grupo de máscara 15.png"
}

function img2 (){
  document.getElementById("img-maior").src="./img/Grupo de máscara 15/Grupo de máscara 15.png"
}

function img3 (){
  document.getElementById("img-maior").src="./img/Grupo de máscara 15/Grupo de máscara 15.png"
}




const faqs = document.querySelectorAll(".faq");
const pergunta = document.querySelectorAll(".pergunta");
const contato = document.querySelectorAll("periodocontato");

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });   
    
});

pergunta.forEach(pergunta => {
  pergunta.addEventListener("click", event => {
    pergunta.classList.toggle("active");
  });
});


function categoryum(c){
  var itemm = document.getElementById('itemm-'+c).innerHTML;
  document.getElementsByClassName('inputassunto')[0].value = itemm;
}

function dropdownum(p) {
  var c = document.getElementsByClassName('dropDown1')[0];
  var d = ['block','none'];

  c.style.display = d[p];
}


function category(c){
  var item = document.getElementById('item-'+c).innerHTML;
  document.getElementsByClassName('inputcontato')[0].value = item;
}

function dropdown(p) {
  var a = document.getElementsByClassName('dropDown')[0];
  var b = ['block','none'];

  a.style.display = b[p];
}