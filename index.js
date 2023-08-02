// swiper
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// game section

// game info
let gameInfo = {
  child1: {
    name: "Ghost of Tsushima",
    price: "34$",
    details:
      "Ghost of Tsushima is a 2020 action-adventure game developed by Sucker Punch Productions and published by Sony Interactive Entertainment.",
  },
  child2: {
    name: "God of War Ragnarök",
    price: "59$",
    details:
      "God of War Ragnarök is an action-adventure game developed by Santa Monica Studio and published by Sony Interactive Entertainment.",
  },
  child3: {
    name: "Red Dead Redemption 2",
    price: "26$",
    details:
      "Red Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games.",
  },
  child4: {
    name: "Minecraft",
    price: "48$",
    details: "Minecraft is a 2011 sandbox game developed by Mojang Studios.",
  },
  child5: {
    name: "CS:GO",
    price: "Free",
    details:
      "Counter-Strike: Global Offensive (CS:GO) is a 2012 multiplayer tactical first-person shooter developed by Valve and Hidden Path Entertainment.",
  },
  child6: {
    name: "Dota 2",
    price: "Free",
    details:
      "Dota 2 is a 2013 multiplayer online battle arena (MOBA) video game by Valve.",
  },
  child7: {
    name: "League of Legends",
    price: "Free",
    details:
      "League of Legends (LoL), is a 2009 multiplayer online battle arena video game developed and published by Riot Games.",
  },
  child8: {
    name: "Apex Legends",
    price: "Free",
    details:
      "Apex Legends is a free-to-play battle royale-hero shooter game developed by Respawn Entertainment and published by Electronic Arts.",
  },
  child9: {
    name: "GTA 5",
    price: "14$",
    details:
      "Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games.",
  },
  child10: {
    name: "COD: Warzone ",
    price: "Free",
    details:
      "COD: Warzone is a free-to-play battle royale video game developed by Raven Software and Infinity Ward, and published by Activision.",
  },
  child11: {
    name: "COD: Modern Warfare",
    price: "16$",
    details:
      "COD: Modern Warfare is a 2019 first-person shooter video game developed by Infinity Ward and published by Activision.",
  },
  child12: {
    name: "Tekken 7",
    price: "12$",
    details:
      "Tekken 7 is a fighting game developed and published by Bandai Namco Entertainment.",
  },
};

// Select needed elements
const hid = document.getElementById("hidden");
const hidImg = document.getElementById("hid-img");
const gameName = document.getElementById("gameName");
const price = document.getElementById("price");
const details = document.getElementById("details");

 // make a constructor function to dynamically change the images on click 
function showHide(id) {
  this.id = id;
  const source = id.src;

  // change the visibility of hidden section on click
  if (hid.style.visibility === "visible") {
    hid.style.visibility = "hidden";
  } else {
    hid.style.visibility = "visible";
    hidImg.src = source;

    // switch cases to manipulate the data inside info div of hidden
    switch (id) {
      case child1:
        gameName.innerHTML = gameInfo.child1.name;
        price.innerHTML = gameInfo.child1.price;
        details.innerHTML = gameInfo.child1.details;
        break;
      case child2:
        gameName.innerHTML = gameInfo.child2.name;
        price.innerHTML = gameInfo.child2.price;
        details.innerHTML = gameInfo.child2.details;
        break;
      case child3:
        gameName.innerHTML = gameInfo.child3.name;
        price.innerHTML = gameInfo.child3.price;
        details.innerHTML = gameInfo.child3.details;
        break;
      case child4:
        gameName.innerHTML = gameInfo.child4.name;
        price.innerHTML = gameInfo.child4.price;
        details.innerHTML = gameInfo.child4.details;
        break;
      case child5:
        gameName.innerHTML = gameInfo.child5.name;
        price.innerHTML = gameInfo.child5.price;
        details.innerHTML = gameInfo.child5.details;
        break;
      case child6:
        gameName.innerHTML = gameInfo.child6.name;
        price.innerHTML = gameInfo.child6.price;
        details.innerHTML = gameInfo.child6.details;
        break;
      case child7:
        gameName.innerHTML = gameInfo.child7.name;
        price.innerHTML = gameInfo.child7.price;
        details.innerHTML = gameInfo.child7.details;
        break;
      case child8:
        gameName.innerHTML = gameInfo.child8.name;
        price.innerHTML = gameInfo.child8.price;
        details.innerHTML = gameInfo.child8.details;
        break;
      case child9:
        gameName.innerHTML = gameInfo.child9.name;
        price.innerHTML = gameInfo.child9.price;
        details.innerHTML = gameInfo.child9.details;
        break;
      case child10:
        gameName.innerHTML = gameInfo.child10.name;
        price.innerHTML = gameInfo.child10.price;
        details.innerHTML = gameInfo.child10.details;
        break;
      case child11:
        gameName.innerHTML = gameInfo.child11.name;
        price.innerHTML = gameInfo.child11.price;
        details.innerHTML = gameInfo.child11.details;
        break;
      case child12:
        gameName.innerHTML = gameInfo.child12.name;
        price.innerHTML = gameInfo.child12.price;
        details.innerHTML = gameInfo.child12.details;
        break;
    }
  }
}
