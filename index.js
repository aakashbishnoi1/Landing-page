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
    details: "Ghost of Tsushima is a 2020 action-adventure game developed by Sucker Punch Productions and published by Sony Interactive Entertainment."
  },
  child2: {
    name: "God of War Ragnarök",
    price: "59$",
    details: "God of War Ragnarök is an action-adventure game developed by Santa Monica Studio and published by Sony Interactive Entertainment."
  },
  child3: {
    name: "Red Dead Redemption 2",
    price: "26$",
    details: "Red Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games."
  },
  child4: {
    name: "Minecraft",
    price: "48$",
    details: "Minecraft is a 2011 sandbox game developed by Mojang Studios."
  },
  child5: {
    name: "CS:GO",
    price: "Free",
    details: "Counter-Strike: Global Offensive (CS:GO) is a 2012 multiplayer tactical first-person shooter developed by Valve and Hidden Path Entertainment."
  },
  child6: {
    name: "Dota 2",
    price: "Free",
    details: "Dota 2 is a 2013 multiplayer online battle arena (MOBA) video game by Valve."
  },
  child7: {
    name: "League of Legends",
    price: "Free",
    details: "League of Legends (LoL), is a 2009 multiplayer online battle arena video game developed and published by Riot Games."
  },
  child8: {
    name: "Apex Legends",
    price: "Free",
    details: "Apex Legends is a free-to-play battle royale-hero shooter game developed by Respawn Entertainment and published by Electronic Arts."
  },
  child9: {
    name: "GTA 5",
    price: "14$",
    details: "Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games."
  },
  child10: {
    name: "COD: Warzone ",
    price: "Free",
    details: "COD: Warzone is a free-to-play battle royale video game developed by Raven Software and Infinity Ward, and published by Activision."
  },
  child11: {
    name: "COD: Modern Warfare",
    price: "16$",
    details: "COD: Modern Warfare is a 2019 first-person shooter video game developed by Infinity Ward and published by Activision."
  },
  child12: {
    name: "Tekken 7",
    price: "12$",
    details: "Tekken 7 is a fighting game developed and published by Bandai Namco Entertainment."
  }
};
const hid = document.getElementById("hidden");
const hidImg = document.getElementById("hid-img");
function showHide(id) {
  this.id = id;
  const source = id.src;
  if (hid.style.visibility === "visible") {
    hid.style.visibility = "hidden";
  } else {
    hid.style.visibility = "visible";
    hidImg.src = source;
  }
}
