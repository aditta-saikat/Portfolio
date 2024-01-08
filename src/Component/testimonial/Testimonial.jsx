import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import { Data } from './Data';
import './testimonial.css';

const Testimonial = () => {
  return (
    <section className='testimonial container section'>
        <div className='testimonial__titles'>
        <h2 className='section__title'>My clients say</h2>
        <span className='section__subtitle'>Testimonial</span>

        </div>

        <Swiper className='testimonial__container'
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
            clickable: true,
        }}
        breakpoints={{
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 48,
            },
        }}
        modules={[Pagination]}
        
        >
            {Data.map(({id, image, title, description}) =>{
                return (
                    <SwiperSlide className='testimonial__card' key={id}>
                        <img src={image} alt='' className='testimonial__img'/>
                        <h3 className='testimonial__name'>{title}</h3>
                        <p className='testimonial__description'>{description}</p>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </section>
  )
}

export default Testimonial