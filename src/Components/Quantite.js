import React, {Component} from 'react';
import Image from './img/tartine.png';
import Article from './Article';


class Quantite extends Component {
    render () {
        return(
            this.props.state.nbr >=2 ? (
                <div>
                    <Article titre="Titre" img={Image} para={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}/>
                    <Article titre="Titre" img={Image} para={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}/>
                  </div>
              ) : (
                <div>
                  <h1>pas d'article disponible</h1>
                </div>
            )
        )
    }
    
};

export default Quantite