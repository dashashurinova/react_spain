function Animation () {
    let closeButton = document.querySelector('.entrance__button_enter');
    let editBlock = document.querySelector('.entrance');
    let enterButton = document.querySelector('.header__button');
    
    console.log(document.querySelector('.entrance__button_enter'));
    
    enterButton.addEventListener('click',function(){
    editBlock.classList.toggle('visible')})
    
    closeButton.addEventListener('click',function(){
    editBlock.classList.toggle('visible')})
}
export default Animation;