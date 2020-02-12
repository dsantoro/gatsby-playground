import React from "react";
import "./style.css";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

import Header from "../components/Header";
import Banner from "../components/Banner";
import MainTitle from "../components/MainTitle";
import Cards from "../components/Cards";

import banner from "../assets/banner-1.jpg";
import vase from "../assets/vase.gif";

import { PRODUCTS } from "../data/home/index";

function Index() {
  return (
    <>
      <Header />

      <div className="relative">
        <Banner
          image={banner}
          text="Com a coleção <strong>Rainbow</strong> seu ambiente fica repleto de vida e suas plantinhas ficam muito mais bonitas."
          altText="Imagem qualquer"
        />
      </div>

      <section className="flex bg-orange-100">
        <div
          className="flex hidden lg:block lg:w-1/2 py-48 items-center justify-center bg-fixed bg-no-repeat bg-cover relative"
          style={{
            backgroundImage: `url(${require("../assets/video-background.jpg")})`
          }}
        >
          <div className="absolute inset-0 z-5 flex items-center justify-center bg-gray-900 opacity-50">
            <button className="flex items-center text-white uppercase text-sm">
              Veja como{" "}
              <FontAwesomeIcon className="mx-4" size="4x" icon={faPlayCircle} />{" "}
              funciona
            </button>
          </div>
        </div>

        <div className="flex lg:w-1/2 items-center p-24 justify-center flex-col">
          <MainTitle text="Pra nós, a <strong>natureza</strong> vem em primeiro lugar. Aliás, <strong>segundo</strong> e <strong>terceiro</strong> também." />
          <span className="uppercase text-gray-700 text-sm mb-2 w-full">
            Funciona assim:{" "}
          </span>
          <p className="text-gray-700 font-light">
            Você planta uma muda, irriga a terra, abastece o reservatório e sua
            plantinha fica com a umidade ideal por até 10 dias. É a inovação e o
            respeito ao meio ambiente deixando a sua casa ainda mais colorida e
            cheia de vida.
          </p>
        </div>
      </section>

      <section className="flex-col px-4 lg:items-center lg:flex-row flex container mx-auto py-8">
        <div className="py-8 flex-1">
          <MainTitle text="Como <strong>funciona</strong> o processo da sua plantinha?" />

          <Link
            className="inline-flex bg-teal-400 rounded-full px-6 py-2 uppercase text-sm hover:opacity-75 transition-opacity duration-500 ease-in-out text-orange-100 mt-6"
            to="/"
          >
            Saiba mais
          </Link>
        </div>

        <div>
          <img src={vase} alt="Como funciona" />
        </div>

        <div className="lg:hidden xl:flex flex-1"></div>
      </section>

      <section className="bg-teal-400 py-20">
        <div className="flex-col container mx-auto px-4 flex lg:flex-row lg:items-center">
          <div className="w-full md:w-1/4">
            <h4 className="text-2xl text-white italic font-light mb-4 leading-tight">
              Confira as nossas <strong>coleções</strong> de vasos e acessórios
            </h4>

            <Link
              to="/"
              className="flex mb-4 bg-white text-teal-400 px-4 py-2 rounded-full uppercase justify-center text-xs transition-opacity duration-500 ease-in-out hover:opacity-75"
            >
              Acesse nossa loja virtual
            </Link>

            <Link
              to="/"
              className="flex bg-green-300 text-teal-400 px-4 py-2 rounded-full uppercase justify-center text-xs transition-opacity duration-500 ease-in-out hover:opacity-75"
            >
              Veja onde encontrar
            </Link>
          </div>

          <div className="w-full flex">
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
              {PRODUCTS.map(item => (
                <Cards {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Index;
