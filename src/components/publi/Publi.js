/**
 * Created by brendaortega on 26/02/18.
 */
import React, {Component} from 'react';
import './Publi.css';

class Publi extends Component {

    componentDidMount () {
        window.scroll(0, 0)
    }
    render() {
        return (
            <div>
                <div className="recuadro">
                    <h3>#Yako</h3>
                    <p>ENVIOS NACIONALES GRATIS EN COMPRAS MAYORES A 200 USD.</p>
                </div>
            </div>
        );
    }
}

export default Publi;