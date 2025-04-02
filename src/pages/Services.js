
import Service from "../components/service/Service";

import { services } from "../helpers/servicesList";



const Services = () => {
    return ( 
    <main className="section">
        <div className="container">
            <h2 className="title-1">Services</h2>
            <ul className="projects">
            
            {services.map((service, index) => {
                return <Service key={index} title={service.title} img={service.img} index={index}/>

            })}

            </ul>
        </div>
    </main>

     );
}
 
export default Services;