import React,{useEffect} from 'react'
import {Icon,Menu} from 'semantic-ui-react'
import cn from 'classnames'
export default function Sidebar(props){
  
  const classes = cn(
    'ui','sidebar','overlay','left','inverted','menu','animating',{'visible':props.toggleMenu}
  );
  
  //{{padding:'0', borderRight:'20px solid black'}}

  return(
    <div className={classes} style={{maxWidth:'10em'}}> 
    <ul style={{padding:'0'}}>
    <Menu.Item as='a' style={{border:'0 none !important'}}>  
      <Icon name='home' />
      Inicio
    </Menu.Item>
    <Menu.Item as='a'>
      <Icon name='chart bar' />
      Reporte
    </Menu.Item>
    <Menu.Item as='a'>
      <Icon name='user' />
      peluqueros
    </Menu.Item>
    </ul>
    </div>
  )}