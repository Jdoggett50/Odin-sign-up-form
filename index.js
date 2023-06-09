//const form = document.getElementById('form');
const mainPwd = document.getElementById('main-pwd')
const conPwd = document.getElementById('confirm-pwd')
const error = document.querySelector('.error')

//an eventlistener for main and an event listener for confirm

function getMainPwd() {
    return mainPwd.value
}

mainPwd.addEventListener('input', () => {
    getMainPwd()
})

conPwd.addEventListener('input', function () {
    var mPwd = getMainPwd();
    var cPwd = conPwd.value;
    if(mPwd == cPwd){
        document.querySelector('.error').textContent= ('');    
    } else 
        document.querySelector('.error').textContent= ('*fields do not match');
})