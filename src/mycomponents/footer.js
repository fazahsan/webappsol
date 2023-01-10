import React, { Component } from 'react'
import { MDBFooter } from 'mdb-react-ui-kit';

export default class footer extends Component {
  render() {
    return(
    <MDBFooter bgColor='light' >
    <div style={{ display:'flex',backgroundColor: 'rgba(0, 0, 0, 0.2)' ,justifyContent:'center'}}>
      &copy; {new Date().getFullYear()} Copyright:{' '}
      <a>
        Webappsol
      </a>
    </div>
  </MDBFooter>
    )
  }
}
