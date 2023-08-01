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
    const hid = document.getElementById("hidden");
    const hidImg = document.getElementById("hid-img");
    function showHide(id) {
    this.id = id;
    const source = id.src;
    if ( hid.style.visibility === "visible") {
        hid.style.visibility = "hidden";
    }
    else {
        hid.style.visibility = "visible";  
        hidImg.src = source;
                  
    }

    }