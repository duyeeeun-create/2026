// const SIGN_UP_VIEW = 1;
// const SIGN_IN_VIEW = 2;
// const SIGN_OUT_VIEW = 3;
// const DIARY_WRITE_VIEW = 4;
// const DIARY_LIST_VIEW = 5;
const VIEW_NO={
 SIGN_UP_VIEW : 1,
 SIGN_IN_VIEW : 2,
 SIGN_OUT_VIEW : 3,
 DIARY_WRITE_VIEW : 4,
 DIARY_LIST_VIEW : 5
}

let signUpWrap ='';
let signInWrap ='';
let writeWrap ='';
let listWrap ='';

//initViews 상수const로 바꾸면 안되는 변수

const initViews = () => {

     signUpWrap = document.querySelector('#wrap > div.sign_up_wrap');
     signInWrap = document.querySelector('#wrap > div.sign_in_wrap');
     writeWrap = document.querySelector('#wrap > div.write_wrap');
     listWrap = document.querySelector('#wrap > div.list_wrap');

}

const showSelectedView = (viewNo) =>{

    switch(viewNo){

        case VIEW_NO.SIGN_UP_VIEW:
            signUpWrap.style.display = 'block';
            signInWrap.style.display = 'none';
            writeWrap.style.display = 'none';
            listWrap.style.display = 'none';
            break;

        case VIEW_NO.SIGN_IN_VIEW:
            signUpWrap.style.display = 'none';
            signInWrap.style.display = 'block';
            writeWrap.style.display = 'none';
            listWrap.style.display = 'none';
            break;

        case VIEW_NO.SIGN_OUT_VIEW:
            signUpWrap.style.display = 'none';
            signInWrap.style.display = 'none';
            writeWrap.style.display = 'none';
            listWrap.style.display = 'none';
            break;

        case VIEW_NO.DIARY_WRITE_VIEW:
            signUpWrap.style.display = 'none';
            signInWrap.style.display = 'none';
            writeWrap.style.display = 'block';
            listWrap.style.display = 'none';
            break;

        case VIEW_NO.DIARY_LIST_VIEW:
            signUpWrap.style.display = 'none';
            signInWrap.style.display = 'none';
            writeWrap.style.display = 'none';
            listWrap.style.display = 'block';
            break;




    }



}