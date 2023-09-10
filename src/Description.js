function Description() {
    let ArrayCity = ['Barselona', 'Girona', 'Figueres', 'Madrid', 'Valencia']
    let ArrayImgNum = [0, 1, 2, 3, 4]

    let ArrayP1 = ['The capital and largest city of the autonomous community of Catalonia, as well as the second most populous municipality of Spain. With a population of 1.6 million within city limits, its urban area extends to numerous neighbouring municipalities within the province of Barcelona and is home to around 4.8 million people.', '', '', '', '',]
    let ArrayP2 = ['Founded as a Roman city, in the Middle Ages Barcelona became the capital of the County ofBarcelona. After joining with the Kingdom of Aragon to form the confederation of the Crown of Aragon, Barcelona, which continued to be the capital of the Principality of Catalonia, became the most important city in the Crown of Aragon.', '', '', '', '',]
    ArrayP1[1] = ['The city had an official population of 103,369 in 2020 but, the population of the Girona-Salt urban area is estimated to be about 156,400 (2020).']
    ArrayP2[1] = ['Girona is the capital of the province of the same name and also capital of the comarca of theGironès and the vegueria of Girona. Since much of the old quarter of this ancient city has been preserved, Girona is a popular destination for tourists, and film productions have used it as filming location (e.g., Game of Thrones). The city is located 99 km (62 mi) northeast of Barcelona.']
    ArrayP1[2] = ['Figueres (Catalan for fig trees, Catalan pronunciation: [fiˈɡeɾəs], [fiˈɡeɾes]; Spanish: Figueras, [fiˈɣeɾas]) is the capital of the comarca of Alt Empordà, in the province of Girona, Catalonia, Spain.']
    ArrayP2[2] = ['The town is the birthplace of artist Salvador Dalí, and houses the Teatre-Museu Gala Salvador Dalí, a large museum designed by Dalí himself which attracts many visitors. It is also the birthplace of Narcís Monturiol, inventor of the first successful machine-powered submarine. Also born here was Mónica Naranjo, one of the best selling Spanish singers of the 1990s and 2000s.']
    ArrayP1[3] = ['The capital and most populous city of Spain. The city has almost 3.4 million inhabitants and a metropolitan area population of approximately 6.7 million. It is the second-largest city in the European Union (EU), and its monocentric metropolitan area is the second-largest in the EU.']
    ArrayP2[3] = ['Madrid lies on the River Manzanares in the central part of the Iberian Peninsula. Capital city of both Spain (almost without interruption since 1561) and the surrounding autonomous community of Madrid (since 1983), it is also the political, economic and cultural centre of the country.']
    ArrayP1[4] = ['Valencia (Valencian: València or Valéncia) is the capital of the autonomous community of Valencia and the third-most populated municipality in Spain, with 792,492 inhabitants (2022).']
    ArrayP2[4] = ['It is the capital of the province of the same name. The wider urban area comprising the neighbouring municipalities has a population of around 1.6 million, constituting one of the major urban areas on the European side of the Mediterranean Sea. It is located on the banks of the Turia, on the east coast of the Iberian Peninsula at the Gulf of Valencia, north of the Albufera lagoon.']


    return (
        <section className="places">
            <div className="places__sight">
                {ArrayImgNum.map((item) => {
                    return (<>
                        <div className="places__sight_title">{ArrayCity[item]}</div>
                        <div className="places__sight_a">
                            <p className="URL">URL</p>
                            <a href={`https://en.wikipedia.org/wiki/${ArrayCity[item]}`}>{`${ArrayCity[item]}.wiki`}</a>
                        </div>
                        <img className="cplaces__sight_picture" src={`./img/cities/${item}.jpg`} alt={ArrayCity[item]} />
                        <div className="places__sight_text">
                            <p className="places__sight_text-first">{ArrayP1[item]}</p>
                            <p> {ArrayP2[item]} </p>
                        </div>
                    </>
                    )
                })
                }
            </div>
        </section>
    );
}
export default Description;
