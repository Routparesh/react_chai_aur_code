import './Card.css';

export default function Card({image , children}){
    return(
        <div className="card">
            <div>
                <img src={image} alt="" />
            </div> 
            {children}
        </div>    
    ) 
}