import React, {useState} from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Inicio from './Inicio';
import Sidebar from './sidebar'
import Cheader from './header'
import cn from 'classnames'
import ValidationComponent from './validacion'


export default function Home (){

    const [toggle,setToggle] = useState(false);

    const classes = cn (
        'pusher',
        'bottom',
        {'dimmed':toggle}
    );

    function toggleMenu(){
        setToggle(!toggle);
    }

        return (
        <div>
            <Cheader onToggleMenu={toggleMenu} />
            <div className="ui attached pushable" style={{height: '100vh'}}>
                <Sidebar toggleMenu={toggle} className='sidebar'/>
                <div className={classes}>
                    <Router>
                        <Route exact path={"/"} component={Inicio}  />
                        <Route exact path={"/inicio"} component={Inicio} />
                        <Route exact path={"/validacion"} component={ValidationComponent} />
                        
                    </Router>
                </div>
            </div>

        </div>
        )

}