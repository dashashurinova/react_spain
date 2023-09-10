import sagrada from './img/sagrada.jpg';

function Header() {
    return(
    <>
   <div className="page">
        <header className="header">
          <div ><img className="header__logo" src={sagrada} alt="sagrada" /></div>
          <span className="header__lang">RU EN</span>
          <button className="header__button">Log in</button>
    
        </header>

      </div> 
    </>
);}
export default Header;
