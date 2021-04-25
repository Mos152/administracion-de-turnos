import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Button, 
         Card,  
         Popup,
         } from 'semantic-ui-react'
import Evento from './evento';
import ModalTurno from './modal';


function Inicio(){

  const info = () => {
    console.log("hola")
  }
  const [value, onChange] = useState(new Date());
  const [open, setOpen] = useState(false);


  return( <div style={{display:'flex',padding:'10px'}}>
    <div style={{backgroud:'green'}}>
      <Calendar
        onChange={onChange}
        value={value}
      />
      <div style={{textAlign:'center', padding:'10px'}}>
      
      <ModalTurno/>




      </div>
    </div>
  <div style={{  
      padding:'10px',
      margin:'0 auto',
      display:'flex',
      }}> 

        <Card.Group>
    <Popup content='Haga click para ver los detalles del turno!!' trigger={
      <Card onClick={info}>
      <Card.Content>
        
        <Card.Header>Analia</Card.Header>
        <Card.Meta>fecha 12/03/21</Card.Meta>
        <Card.Meta>hora 14:30 PM</Card.Meta>
        <Card.Description>
          se asigno un <strong>corte hombre</strong> para <strong>gaston palleres</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Echo
          </Button>
          <Button basic color='red'>
            Cancelar
          </Button>
        </div>
      </Card.Content>
    </Card>
    }/>
    
    <Card>
      <Card.Content>
        
        <Card.Header>Analia</Card.Header>
        <Card.Meta>fecha 12/03/21</Card.Meta>
        <Card.Meta>hora 14:30 PM</Card.Meta>
        <Card.Description>
          se asigno un <strong>corte hombre</strong> para <strong>gaston palleres</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Echo
          </Button>
          <Button basic color='red'>
            Cancelar
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        
        <Card.Header>Analia</Card.Header>
        <Card.Meta>fecha 12/03/21</Card.Meta>
        <Card.Meta>hora 14:30 PM</Card.Meta>
        <Card.Description>
          se asigno un <strong>corte hombre</strong> para <strong>gaston palleres</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Echo
          </Button>
          <Button basic color='red'>
            Cancelar
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        
        <Card.Header>Analia</Card.Header>
        <Card.Meta>fecha 12/03/21</Card.Meta>
        <Card.Meta>hora 14:30 PM</Card.Meta>
        <Card.Description>
          se asigno un <strong>corte hombre</strong> para <strong>gaston palleres</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Echo
          </Button>
          <Button basic color='red'>
            Cancelar
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        
        <Card.Header>Analia</Card.Header>
        <Card.Meta>fecha 12/03/21</Card.Meta>
        <Card.Meta>hora 14:30 PM</Card.Meta>
        <Card.Description>
          se asigno un <strong>corte hombre</strong> para <strong>gaston palleres</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Echo
          </Button>
          <Button basic color='red'>
            Cancelar
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        
        <Card.Header>Analia</Card.Header>
        <Card.Meta>fecha 12/03/21</Card.Meta>
        <Card.Meta>hora 14:30 PM</Card.Meta>
        <Card.Description>
          se asigno un <strong>corte hombre</strong> para <strong>gaston palleres</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Echo
          </Button>
          <Button basic color='red'>
            Cancelar
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        
        <Card.Header>Analia</Card.Header>
        <Card.Meta>fecha 12/03/21</Card.Meta>
        <Card.Meta>hora 14:30 PM</Card.Meta>
        <Card.Description>
          se asigno un <strong>corte hombre</strong> para <strong>gaston palleres</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Echo
          </Button>
          <Button basic color='red'>
            Cancelar
          </Button>
        </div>
      </Card.Content>
    </Card>
    
  </Card.Group>
    </div>
    </div>
    )    
}

export default Inicio;