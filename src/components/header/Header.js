import "./style.css"

const Header = () => {
    return ( 
            <header className="header">
                <div className="header__wrapper">
                    <h1 className="header__title">
                        <strong>Software Development and Testing Solutions <em> DimTim</em></strong><br />
                            
                    </h1>
                    <div className="header__text">
                        <p>We build modern websites and web/mobile apps, provide QA and test automation, and deliver smart business solutions.</p>
                    </div>
                    <a href="#!" className="btn">Get In Touch</a>
                </div>
            </header>
     );
}
 
export default Header;