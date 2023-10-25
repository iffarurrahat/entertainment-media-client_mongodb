// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './Slider.css';

const Slider = ({ slideData }) => {
    return (
        <div className='bg_image_overlay'>
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    slideData.map(slide => (
                        <SwiperSlide key={slide.id}>
                            <img className='w-full h-96 md:h-full relative bg_overlay' src={slide.image} alt="" />
                            <div className='absolute left-16 md:left-20 top-[25%] w-[70%] md:w-[60%] text-white'>
                                <h2 className='text-2xl md:text-3xl font-bold md:mb-2'>{slide.title}</h2>
                                <p>{slide.subTitle}</p>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default Slider;