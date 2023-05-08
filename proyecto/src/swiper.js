const swiper = Swiper(".swiperCertificated" , {
    zoom: true,
    effect: "coverflow",
    grabCursor: true,
    slidesPerview: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
}) 