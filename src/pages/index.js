import React from 'react';
import './style.css';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

import Header from '../components/Header';
import Banner from '../components/Banner';
import MainTitle from '../components/MainTitle';

import banner from '../assets/banner-1.jpg';
import vase from '../assets/vase.gif';

function Index() {
    return (
        <section>
            <Header />

            <div className="relative">
                <Banner
                    image={banner}
                    text="Com a coleção <strong>Rainbow</strong> seu ambiente fica repleto de vida e suas plantinhas ficam muito mais bonitas."
                    altText="Imagem qualquer"
                />
            </div>

            <div className="flex bg-orange-100">
                <div className="flex w-1/2 py-48 items-center justify-center bg-fixed bg-no-repeat bg-cover relative" style={{ backgroundImage: `url(${require('../assets/video-background.jpg')})` }}>
                    <div className="absolute inset-0 z-5 flex items-center justify-center bg-gray-900 opacity-50">
                        <button className="flex items-center text-white uppercase text-sm">Veja como <FontAwesomeIcon className="mx-4" size="4x" icon={faPlayCircle} /> funciona</button>
                    </div>
                </div>

                <div className="flex w-1/2 items-center p-24 justify-center flex-col">
                    <MainTitle text="Pra nós, a <strong>natureza</strong> vem em primeiro lugar. Aliás, <strong>segundo</strong> e <strong>terceiro</strong> também." />
                    <span className="uppercase text-gray-700 text-sm mb-2 w-full">Funciona assim: </span>
                    <p className="text-gray-700 font-light">Você planta uma muda, irriga a terra, abastece o reservatório e sua plantinha fica com a umidade ideal por até 10 dias. É a inovação e o respeito ao meio ambiente deixando a sua casa ainda mais colorida e cheia de vida.</p>
                </div>
            </div>

            <div className="flex container mx-auto py-8">
                <div className="flex-1 py-8">
                    <MainTitle text="Como <strong>funciona</strong> o processo da sua plantinha?" />

                    <Link className="inline-flex bg-teal-400 rounded-full px-6 py-2 uppercase text-sm hover:opacity-75 transition-opacity duration-500 ease-in-out text-orange-100 mt-6" to="/">Saiba mais</Link>
                </div>
                <div>
                    <img src={vase} alt="Como funciona" />
                </div>
                <div className="flex-1"></div>
            </div>
        </section>
    );
}

export default Index;