import "./style.css";
import { NavLink } from "react-router-dom";

const Service = ({title, img, index}) => {
    return ( 
    <NavLink to={`/service/` + index}>
    <li className="service">
        
            <img src={img} alt={title} className="service__img" />
            <h3 className="service__title">{title}</h3>

    </li>
    </NavLink>
     );
}
 
export default Service;