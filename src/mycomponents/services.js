import React, { Component } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Container} from "react-bootstrap";

export default class Services extends Component {
  render() {
    const styles={
        main:{
            marginLeft:'40%',color:'black',fontFamily:'bold',fontSize:20
            
        },
        progress:{
            width:'80%',backgroundColor:'lightblue',borderRadius:50,height:60
        },
        division:{
            width:'100%',backgroundColor:'grey',height:60,borderRadius:50,margin:5,
        },
        progress2:{
            width:'90%',backgroundColor:'lightblue',borderRadius:50,height:60
        },
        progress3:{
            width:'70%',backgroundColor:'lightblue',borderRadius:50,height:60
        },
    }
    return (
        <>
        <div class="first">
        <div class="row">
           <div class="col-6 col-s-6">
               <div class="red">
        
        
         <h2 style={{textAlign:"center"}}>Servicios</h2>
         <dl>
             <dt><li style={{fontSize:30,color:"blue"}}>DESARROLLO WEB</li></dt>
         <dd style={{fontSize:20}}>DISEÑEMOS PAGINAS WEB EN DIFERENTES TECNOLOGÍAS POR DEMANDA DEl CLIENTE Y PONGAMOS EN SERVIDOR (Domain ,hosting todo)
         </dd>
             <dt><li style={{fontSize:30,color:"blue"}}>APLICACIONES DE MOVILES</li></dt>
<dd style={{fontSize:20}}>
    DESOROLLAMOS APLICACIONES MOVILES SEGUN EXIGENCIA DEL CLIENTE EN ANDROID Y IOS Y PONGAMOS EN GOOGLE PLAY STORE  Y APP STORE
</dd>
            <dt><li style={{fontSize:30,color:"blue"}}>CIBERSEGURIDAD</li></dt>
         <dd style={{fontSize:20}}>
             AYUDAMOS MEJORAR SU PRECENCIA EN LA RED BRINDANDO CIBERSEGURIDAD DE TU PAGINA WEB , APLICACIONS MOVILES O TU EMPRESA.
         </dd>
             <dt><li style={{fontSize:30,color:"blue"}}>ANALISIS DE DATOS</li></dt>
<dd style={{fontSize:20}}>
REALIZAMOS ANÁLISIS DE DATOS PARA MEJORAR NEGOCIOS, REALIZAMOS DASHBOARD EN DISTINTAS TECNOLOGÍAS SEGÚN EL CLIENTE (tableau, BI, en la web con Python, o según demanda del cliente)
</dd>
             <dt><li style={{fontSize:30,color:"blue"}}>MACHINE LEARNING Y INTELIGENCIA ARTIFICIAL</li></dt>
<dd style={{fontSize:20}}>
   HACEMOS SOFTWARE O PROGRAMAS DE MACHINE LEARNING Y INTELIGENCIA ARTIFICIAL SEGUN DEMANDA CLIENTE. 
</dd>
             
             
             
         </dl>
    </div>
               </div>
                  <div class="col-6 col-s-6">
          
        <br/>
    <div class="orange">
        
        <h2>Algunas tecnalogias de nuestro equipo.</h2>
       
        <div style={styles.division}>
        <div style={styles.progress} >
        <div style={styles.main}>PHP</div>
        </div>
        </div>
        <div style={styles.division}>
        <div style={styles.progress2} >
        <div style={styles.main}>PYTHON</div>
        </div>
        </div>
        <div style={styles.division}>
        <div style={styles.progress} >
        <div style={styles.main}>REACT NATIVE</div>
        </div>
        </div>
        <div style={styles.division}>
        <div style={styles.progress} >
        <div style={styles.main}>ANGULAR</div>
        </div>
        </div>
        <div style={styles.division}>
        <div style={styles.progress3} >
        <div style={styles.main}>JAVA</div>
        </div>
        </div>
        <div style={styles.division}>
        <div style={styles.progress2} >
        <div style={styles.main}>JAVASCRIPT</div>
        </div>
        </div>
        <div style={styles.division}>
        <div style={styles.progress} >
        <div style={styles.main}>R</div>
        </div>
        </div>
        <div style={styles.division}>
        <div style={styles.progress3} >
        <div style={styles.main}>RUST</div>
        </div>
        </div>
        <div style={styles.division}>
        <div style={styles.progress3} >
        <div style={styles.main}>C#</div>
        </div>
        </div>
        <div style={styles.division}>
        <div style={styles.progress3} >
        <div style={styles.main}>C</div>
        </div>
        </div>
        <div style={styles.division}>
        <div style={styles.progress} >
        <div style={styles.main}>AZURE</div>
        </div>
        </div>
        <div style={styles.division}>
        <div style={styles.progress} >
        <div style={styles.main}>GOOGLE CLOUD </div>
        </div>
        </div>
        <div style={styles.division}>
        <div style={styles.progress} >
        <div style={styles.main}>AWS</div>
        </div>
        </div>
     
    </div>
       </div>
           
       </div>
    </div>
   
  
    <div class="row">
        <div class="col-6 col-s-12">
            <div class="red">
                <img src={require ("./pictures/2.png")} style = {{height:"100%" , width:"100%"}}/>
            </div>
        </div>
             <div class="col-6 col-s-12">
                 <div class="red">
                     <img src={require("./pictures/3.png") } style = {{height:"100%" , width:"100%"}}/>
                 </div>
             </div>
        <div class="col-6 col-s-12">
            <div class="red">
                <img src={require("./pictures/1.png")} style = {{height:"100%" , width:"100%"}}/>
            </div>
        </div>
        <div class="col-6 col-s-12">
            <div class="red">
                <img src={require("./pictures/4.png")} style = {{height:"100%" , width:"100%"}}/>
            </div>
        </div>
    </div>
    </> 


    )
  }
}
