import React, { Component } from 'react'
import "./Navbar.css"
import { ContactUs } from './email'
import Inform2 from './infor2'


export default class Try extends Component {
  render() {
    return (
        <>

        
      <div   className="try2" >	
      
        <div>

      
         

      
          <section>
              <div className="inner" >
                  <div className="logo"><span > <img src={require("./pictures/webapp solution.gif")} id="img" /> </span></div>
                  <h2>Hacemos paginas web,Aplicaciones de moviles y mucho mas ver
                      <a href="/service" style={{width:50,height:50,backgroundColor:'lightcoral'}}>
Servicios.</a> </h2>
                  <p>contacte con nosotros sin compromiso <a href="/contact" style={{backgroundColor:'blue'}}>
                      Contactar</a></p>
              </div>
          </section>

      
          <section id="wrapper">

              
                  <section id="one" class="wrapper spotlight style1">
                      <div class="inner">
                          <a href="#" class="image"><img src={require("./pictures/computer.png")} alt="" /></a>
                          <div class="content">
                              <h2 class="major">E-commerse y digital marketing</h2>
                              <p>En un mundo cada vez más conectado, es importante que las empresas estén presentes en línea y utilicen el comercio electrónico y el marketing digital para competir con otras empresas. Si no lo hacen, es posible que se queden rezagadas y pierdan clientes a otras empresas que sí estén utilizando estas herramientas.</p>
                              <a href="/service" class="special">Saber más</a>
                          </div>
                      </div>
                  </section>

              
                  <section id="two" class="wrapper alt spotlight style2">
                      <div class="inner">
                          <a href="#" class="image"><img src={require("./pictures/ads.png")} alt="" /></a>
                          <div class="content">
                              <h2 class="major">Inteligencia artificial</h2>
                              <p>La inteligencia artificial puede ser muy útil para las empresas de muchas maneras.</p>
                              <a href="/inform" class="special">Saber más</a>
                          </div>
                      </div>
                  </section>

              
                  <section id="three" class="wrapper spotlight style3">
                      <div class="inner">
                          <a href="#" class="image"><img src={require("./pictures/ui_ux.png")} alt="" /></a>
                          <div class="content">
                              <h2 class="major">DISEÑO UI/ UX</h2>
                              <p>UI (Interfaz de Usuario) y UX (Experiencia de Usuario) son dos campos relacionados en el diseño de productos digitales, como sitios web y aplicaciones móviles.</p>
                              <a href="/infor2" class="special">Saber más</a>
                          </div>
                      </div>
                  </section>

                  <section id="three" class="wrapper spotlight style4">
                      <div class="inner">
                          <a href="#" class="image"><img src={require("./pictures/settings.png" )} alt=""/></a>
                          <div class="content">
                              <h2 class="major">Analítica de datos</h2>
                              <p>La analítica de datos para empresas es el proceso de recopilación, análisis e interpretación de grandes conjuntos de datos para obtener información valiosa y útil para la toma de decisiones empresariales. Los datos pueden provenir de una variedad de fuentes, como bases de datos internas, encuestas y estudios de mercado, y datos externos como redes sociales, plataformas de publicidad en línea y dispositivos de Internet de las cosas. La analítica de datos se puede utilizar para mejorar la eficiencia y la productividad de una empresa, identificar nuevas oportunidades de negocio y tomar decisiones estratégicas informadas.</p>
                              <a href="/contact" class="special">Contactar</a>
                          </div>
                      </div>
                  </section>
                  

          </section>

          <ContactUs>
          </ContactUs>

          

  </div>
  </div>
  
  </>
    )
  }
}
