function PhotoGrid() {
    let ArrayImg = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    return (
        <section className="photo-grid">
            {ArrayImg.map((item) => {
                    return (<img className="photo-grid__item" src={`./img/for_grid/${item}.jpg`} alt={`image${item}`} />)  
                })
          }
        </section>
    );
}
export default PhotoGrid;
