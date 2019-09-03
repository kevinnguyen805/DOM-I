const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navbar = document.getElementsByTagName('nav');
let navAnchors = document.querySelectorAll('a');
navAnchors[0].textContent = 'Services';
navAnchors[1].textContent = 'Product';
navAnchors[2].textContent = 'Vision';
navAnchors[3].textContent = 'Features';
navAnchors[4].textContent = 'About';
navAnchors[5].textContent = 'Contact';

let title = document.querySelector('.cta-text h1');
let headerTitle = ['Dom', 'Is', 'Awesome'];
function headerTitles(){
  for (let i=0; i<headerTitle.length;i++){
    title.appendChild(document.createTextNode(headerTitle[i]));
    title.appendChild(document.createElement("br"));
  }
}
headerTitles(headerTitle);


let titleBtn = document.querySelector('button');
titleBtn.textContent = 'Get Started';

let headerImg = document.getElementById('cta-img');
headerImg.src = "img/header-img.png";

let textInfo = document.querySelectorAll('.text-content p');
textInfo.forEach(item => item.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.');

let middleImg = document.getElementById('middle-img');
middleImg.src = "img/mid-page-accent.jpg";

let subTitles = document.querySelectorAll('.text-content h4');
subTitles[0].textContent = 'Features';
subTitles[1].textContent = 'About';
subTitles[2].textContent = 'Services';
subTitles[3].textContent = 'Product';
subTitles[4].textContent = 'Vision';

let contact = document.querySelector('.contact');
let contactTitle = contact.querySelector('h4').textContent = "Contact";
let contacts = contact.querySelectorAll('p');
contacts[0].textContent = "123 Way 456 Street \n Somewhere, USA";
contacts[1].textContent = "1 (888) 888-8888";
contacts[2].textContent = "sales@greatidea.io";
contact.style.width = "150px";

let footer = document.querySelector('footer');
let footerInfo = footer.querySelector('p').textContent = "Copyright Great Idea! 2018";

