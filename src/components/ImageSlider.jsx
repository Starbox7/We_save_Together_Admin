import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import SwiperCore, { Autoplay, Pagination } from 'swiper/core';
import styled from 'styled-components';

import ecoEarth from "../assets/resources/ecoEarth.png";
import recycleEarth from "../assets/resources/recycleEarth.png";

SwiperCore.use([Autoplay, Pagination]);

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 0;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const ImageContainer = styled.div`
  overflow: hidden;
  border-radius: 10px;
  border: 0px solid black;
  width: 500px;
  height: 500px;
  position: relative;
`;

const SwiperWrapper = styled(Swiper)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const SlideImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

export default function Imageslider() {
    const images = [recycleEarth, ecoEarth];

    return (
        <Wrapper>
            <ImageContainer>
                <SwiperWrapper
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <Slide>
                                <SlideImage src={image} alt="slider" />
                            </Slide>
                        </SwiperSlide>
                    ))}
                </SwiperWrapper>
            </ImageContainer>
        </Wrapper>
    );
}
