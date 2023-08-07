export const sliderSettings = {
    initialSlide: 0,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1060,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: true,
            }
        },
        {
            breakpoint: 760,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
}