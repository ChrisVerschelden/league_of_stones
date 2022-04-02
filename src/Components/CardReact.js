import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
class CardReact extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() { 
            const address = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + this.props.data.key + "_0.jpg"
            return (
                <div className="card-before card border-3 border-light bg-black" style={{width: '9rem'}}>
                    <img src={address} className="card-img-top" alt="image de perso nul"/>
                    <div className="bg-dark text-secondary panel-footer text-center">
                        <p className='bg-black'>{this.props.data.name}</p>
                        <span> attack :     {this.props.data.info.attack}     </span><br></br>
                        <span> defense :    {this.props.data.info.defense}    </span><br></br>
                        <span> difficulty : {this.props.data.info.difficulty} </span><br></br>
                        <span> magic :      {this.props.data.info.magic}      </span>
                    </div>
                </div>
            )
        }
    }
    
    export default CardReact; // le composant pourra être importé dans un autre composant