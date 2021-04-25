import React from 'react';
import { Button, Icon,Search, Grid, Header, Segment } from 'semantic-ui-react'
function Cheader(props){
    return <div class="ui top inverted attached menu" style={{MaxHeight:'20px',borderRight: '0px none !important'}}  >
    <Button icon onClick={props.onToggleMenu} style={{margin:'10px'}}>
    <Icon name='align justify' />
    </Button>
    <div style={{ textAlign:'center'}}>
      <Search style={{padding:'10px'}}/>
    </div>
    </div>
}
export default Cheader;  