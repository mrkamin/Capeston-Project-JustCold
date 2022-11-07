window.onscroll = function () {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.getElementById("navbar").classList.add("scrolled");
  } else {
    document.getElementById("navbar").classList.remove("scrolled");
  }
};

const presenters = [
  {
    name: "Mohammad Rafi Amin",
    jobTitle: "CEO of JustCold Rfrgretion.",
    discription:
      "MRK Amin is the Co-founder and COO of The Metalunr decentralized Metaverse, a virtual world where players can create, play, own, govern and monetize their experiences.",
    image: "./assets/img/presenter-1.jpeg",
  },
  {
    name: "Shafiq Ramin",
    jobTitle: "founder of JustCold Refregration",
    discription:
      "In July 2022, world leading Crypto Exchange FTX recieved full approval to operate a cryptocurrency exchange and clearing house in Dubai, for which Balsam Danhach is leading its intricate operation.",
    image: "./assets/img/presenter-2.jpg",
  },
  {
    name: "Abullah Alam",
    jobTitle: "CEO, Think:EXP",
    discription:
      "Mr. Siu has been an early advocate for the use of blockchain and non-fungible tokens (NFTs) in the gaming industry, to allow gamers to enjoy true ownership of their game assets, data, and equity.",
    image: "./assets/img/presenter-3.jpg",
  },
  {
    name: "Eshaq Amin",
    jobTitle: "Founder, iNov8 Next Open Labs",
    discription:
      "Producer, DJ, technologist, Pro Gamer, Animator and Futurist, Founding member of the Rock and Roll Hall of Fame group N.W.A., producer of Grammy nominated #1 hit song Supersonic.",
    image: "./assets/img/presenter-4.jpg",
  },
  {
    name: "Mohammad Zabih Amin",
    jobTitle: "Director, OKX",
    discription:
      "Lennix leads the business strategy and operations for OKX internationally. With 15 years of experience in the world of crypto and financial services",
    image: "./assets/img/presenter-5.jpg",
  },
  {
    name: "Sadaf Amin",
    jobTitle: "Co-Founder and Executive Chairman, Animoca Brands",
    discription:
      "He is  a good man currently  he is working to empower artists and technologists to collectively elevate culture with THINK:NFT, an NFT ecosystem of top NFT talent and community events",
    image: "./assets/img/presenter-6.png",
  },
];

//==============================================================================
const humberger = document.querySelector(".container > .navbar-toggler");
const menue = document.querySelector(".navbar-nav");
const allParteners = document.querySelector("#sectionthree__container__items");
// ============================================================================

humberger.addEventListener("click", (e) => {
  e.preventDefault();
  if (humberger.classList.contains("active")) {
    humberger.classList.remove("active");
    menue.classList.remove("active");
  } else {
    humberger.classList.add("active");
    menue.classList.add("active");
  }
});
//===============================================================================

AOS.init({
  duration: 800,
});
// ===============================================================================

presenters.forEach((presenter) => {
  allParteners.innerHTML += `
        
  <div id="sectionthree__container__items__item" class="sectionthree__container__items__item" data-aos="fade-up" data-aos-delay="100">
  <div id="sectionthree__container__items__item__left" class="sectionthree__container__items__item__left">
  <div id="sectionthree__container__items__item__left__bgpic" class="sectionthree__container__items__item__left__bgpic">   
             <img src="${presenter.image}" alt="${
    presenter - 1
  }" id="sectionthree__container__items__item__left__img" class="sectionthree__container__items__item__left__img">
            </div>
          </div>
          <div id="sectionthree__container__items__item__right" class="sectionthree__container__items__item__right">
              <h2 id="sectionthree__container__items__item__right__h2" class="sectionthree__container____items__item__righth2">${
                presenter.name
              }</h2>
              <h3 id="sectionthree__container__items__item__right__h3" class="sectionthree__container__items__item__right__h3">${
                presenter.jobTitle
              }</h3>
              <p id="sectionthree__container__items__item__right__p" class="sectionthree__container__items__item__right__p">${
                presenter.discription
              }</p>
          
        </div>
        </div>`;
});
// =====================================================================================
