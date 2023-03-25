import React from 'react';

import Imageslider from '../components/ImageSlider';
import Header from '../components/Header';
import Title from '../components/Title';
import Footer from '../components/Footer'

export default function Home() {
    return (
        <>
            <Header />
            <Imageslider />
            <Title />
            <Footer />
        </>
    );
}
