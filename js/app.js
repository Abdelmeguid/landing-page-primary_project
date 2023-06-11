//create the botton that add new sections in landpage and add new section in navbar
const test = () => {
  //below line i made it only to check my botton
  // alert("Button is clicked");
  makeSection();
  createNavParts();
};
function button_create() {
  const botton = document.createElement("botton");
  const textnode = document.createTextNode("Add_new_Section");
  botton.appendChild(textnode);
  document.querySelector(".main__hero").appendChild(botton);
  botton.className = "button";
  botton.addEventListener("click", test);
  //second way to run the function when we make click the botton
  //botton.onclick = test;
}
button_create();

//create the sections
let i = 0;
const makeSection = function () {
  i++;
  const wordsINsections = `<section id="section${i}" data-nav = "section ${i}">
  <div class = "landing__container">
  <h2> section ${i}</h2>
  <p> this is <strong>Udacity </strong>Project ...this is <strong>Udacity </strong>Project ....this is <strong>Udacity </strong>Project </p>
  <p>the first project in frontend nano dgree Udacity .....the first project in frontend nano dgree Udacity ....the first project in frontend nano dgree Udacity ....the first project in frontend nano dgree Udacity .....the first project in frontend nano dgree Udacity .....Thank you very much</p>
  </div>
  </section>`;
  /*
  why this code not work i need ask the tutors 
  document
  .querySelector("header")
  .insertAdjacentHTML("afterend", wordsINsections);
  */ ///////
  document
    .querySelector("main")
    .insertAdjacentHTML("beforeend", wordsINsections);
};

//////////////create navbar
const navMenue = document.getElementById("navbar__list");
const createNavParts = function () {
  //we must make navMenue empty to prevent create all navbar sections again and agian from start
  navMenue.innerHTML = " ";
  const t = document.querySelectorAll("section");
  //now we use foreach function to loop on all section to create parts in navbar menu in the top of page related to each section in our project
  t.forEach(function (section) {
    const navItem = `<li><a href = "#${section.id}" data-nav = "#${section.id}"class = "menu__link" >${section.dataset.nav} </a></li>`;
    navMenue.insertAdjacentHTML("beforeend", navItem);
  });
};

/*
//active class on (sections and navbar  )when we scroll to the section
window.onscroll = function () {
  document.querySelector("section").forEach(function (active) {
    let activeLink = navMenue.querySelector(`[data-nav=${active.id}]`);
    if (
      active.getBoundingCleintRect().top >= -400 &&
      active.getBoundingCleintRect().top <= 150
    ) {
      active.classlist.add("your-active-class");
      activeLink.classList.add("menuNavBar_Acivelink");
    } else {
      active.classlist.remove("your-active-class");
      activeLink.classList.remove("menuNavBar_Acivelink");
    }
  });
};
*/
///////// second try to achieve active the class when section is in view:

window.onscroll = function () {
  scrollFunction();
  document.querySelectorAll("section").forEach(function (active) {
    let activeLink = navMenue.querySelector(`[data-nav='#${active.id}']`);
    //let activeLink = navMenue.querySelector(`li[data-nav="${active.id}"]`);
    //let activeLink = document.querySelector(`a[href="#${active.id}"]`);
    if (
      active.getBoundingClientRect().top >= -390 &&
      active.getBoundingClientRect().top <= 147
    ) {
      active.classList.add("your-active-class");
      activeLink.classList.add("active-link");
    } else {
      active.classList.remove("your-active-class");
      activeLink.classList.remove("active-link");
    }
  });
};

//here i create a function to make scroll smooth...i can write it in CSS file but i want to show what is i lrarned:
const scrollSmoothly = function () {
  const myHTML = document.querySelector("html");
  myHTML.style.scrollBehavior = "smooth";
};

//create the to Top Button
//
scrollSmoothly();
const toTopButton = document.createElement("botton");
function toTopButton_create() {
  const textnodeTOP = document.createTextNode("TO_Top");
  toTopButton.appendChild(textnodeTOP);
  //document.querySelector("footer").appendChild(toTopButton);
  const rr = document.querySelector("footer");
  rr.insertAdjacentElement("beforebegin", toTopButton);

  toTopButton.setAttribute("id", "ourBtn");
  toTopButton.addEventListener("click", test2);
  return toTopButton;
}

toTopButton_create();

//below function to go to the top of sheet
function test2() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// below function to hide the (to top button) in the top and appear again when we scroll down

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTopButton.style.display = "block";
  } else {
    toTopButton.style.display = "none";
  }
}

//create by default 4 section and with their navbar

let yy = 0;

while (yy < 4) {
  yy += 1;
  makeSection();
  createNavParts();
}

//now the code is finish but please read the below new method that i invented it ..i do not use it because it not direct
//but it very smart and i tested it ...please check it and send your Opnion

/*
////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
// second Method to hide or show to top buttom
//note : this is a very good method i invented it and i tested it and it work very good ..Briefly : i made a div 
//and make a function of getBoundingClientRect() 
//this function work on the "main" and indicate the position of "main" in the view of screen  and write the result in div
// i read the corrdinates  
//according that i indicate the corrdinates in it i can hide or show the (Totop) button
// by using (if function) and (else function) depend on the corrdinates during the scroll
// ...and after i achieve my target i can adjust this div to dispaly: none from CSS file then the div is hidden becuase i do not need it again 
// ...note : this method can used in any site and under any condition or purpose .please check below code for this method


function scrollShow_create() {
  const scrolldiv = document.createElement("div");
  const rr = document.querySelector("footer");
  rr.insertAdjacentElement("beforebegin", scrolldiv);

  scrolldiv.setAttribute("id", "scrollID");
}
scrollShow_create();

function update() {
  const mainScroll = document.getElementsByTagName("main")[0];
  const rect = mainScroll.getBoundingClientRect();
  const scrollNewDiv = document.getElementById("scrollID");
  scrollNewDiv.innerHTML = "";
  for (let key in rect) {
    if (typeof rect[key] !== "function") {
      let para = document.createElement("p");
      para.textContent = `${key} : ${rect[key]}`;
      scrollNewDiv.appendChild(para);
    }
  }
  const toTop = document.getElementById("ourBtn");
  if (rect.top.toFixed() < -876) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
}

document.addEventListener("scroll", update);
update();
*/
