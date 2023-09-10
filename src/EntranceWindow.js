// function  checkForm(){
//     let copy = document.querySelectorAll('.entrance__log');
//     let login =(copy[0].value);
//     let pass =(copy[1].value);
//     let fail = "";
//     if (!login || !pass)
//         fail = "Enter login and password"; 
//     else if (login.length <= 1)
//         fail = "Enter correct login";
//     if (fail != ""){
//         document.getElementById("error").innerHTML = fail;
//         return fail;}
import Animation from "./Animation";



// let closeButton = document.querySelector('.entrance__button_enter');
// let editBlock = document.querySelector('.entrance');
// let enterButton = document.querySelector('.header__button').onclick = function() {console.log(enterButton);editBlock.classList.toggle('visible')};

// console.log(document.querySelector('.entrance__button_enter'));
// console.log(document.querySelector('.entrance'));
// console.log(document.querySelector('.header__button'));

//   enterButton.addEventListener('click',function(){
//   editBlock.classList.toggle('visible')})

//   closeButton.addEventListener('click',function(){
//   editBlock.classList.toggle('visible')})

function EntranceWindow() {

    return (
        <section className="entrance">
            <div className="entrance__info">
                <h2 className="entrance__title">Enter site</h2>
                <label className="entrance__label" for="login">Login:</label>
                <p><input type="text" className="entrance__log" name="login" id="login" placeholder="Login" /></p>
                <label className="entrance__label" for="password">Password:</label>
                <p><input className="entrance__log" name="password" id="login" type="text" placeholder="Password" /></p>
                <div id="error" style={{ color: 'brown' }}></div>
                <button className="entrance__button_enter" id="enter"  >Enter</button>
         
            </div>
            <script>
                {Animation()}
            </script>
        
        </section>
    );


}
export default EntranceWindow;





























