import React from 'react';
import Menu from '../../components/Menu'
import dadosIniciais from '../../data/dados_iniciais.json'
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'
import Footer from '../../components/Footer'

function Home() {
  return (
    <div style={{backgroundColor:"#141414"}}>
      <Menu />
      
      <BannerMain 
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"A história de um modo que se tornou o predileto de muitos"}
      />
      {dadosIniciais.categorias.map(tema=>
      <Carousel 
        category={tema}
        ignoreFirstVideo = {tema.videos.length>5}
      />)}
      <Footer />
    </div>
  );
}

export default Home;