import barsaevening from './img/barsa evening.jpg';

function LeadIntro() {
    return(
    <>
  
<section className="lead">
          <h1 className="lead__title">Travelling through Spain</h1>
          <p className="lead__subtitle">Taste Colour Glory Surrealism is all you need</p>
          <img src={barsaevening} width="984px" className="lead_image" alt="barsa evening" />
          <p className="lead__caption">Your ticket to amotions</p>
        </section>
        <section className="intro">
          <h2 className="intro__title">What shall you see there?</h2>
          <p className="intro__text">Spain is full of beautiful, breathtaking places. So many, in fact, that it may
            actually be difficult to decide where to go! Now you don’t have to. Instead, just follow this list of
            the most stunning spots in Spain you shouldn’t miss.
            Did you know you can now travel with Culture Trip? Book now and join one of our premium small-group
            tours to discover the world like never before.</p>
          <ul className="intro__list">
            <li className="intro__list-item">Spain is the only European country to have a physical border with an
              African country.</li>
            <li className="intro__list-item">Spain was the world's first global empire.</li>
            <li className="intro__list-item">Spanish is the world's second-most spoken native language.</li>
            <li className="intro__list-item">Spain boasts the world's third-largest number of UNESCO World Heritage
              Sites.</li>
            <li className="intro__list-item">Spain was also influential in Europe.</li>
          </ul>
        </section>
    </>
);}
export default LeadIntro;



