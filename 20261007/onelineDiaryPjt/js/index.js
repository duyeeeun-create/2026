// 웹문서가 끝까지 완전히 로딩되면..
document.addEventListener('DOMContentLoaded', function() {
 console.log('DOCUMENT READY!');

 initViews ();

 addEvents();
  

});

//이벤트 처리(리스너, 핸들러 정의)
function addEvents(){
    console.log('addEvents() CALLED!');

    /* MENU CLICK EVENT START*/
    let signUpMenuBtn = document.querySelector('div.menu_wrap a.sign_up');
    signUpMenuBtn.addEventListener('click', function(){
        console.log('signUpMenuBtn CLICKED');  

        showSelectedView(VIEW_NO.SIGN_UP_VIEW);


    //  let signUpWrap = document.querySelector('#wrap > div.sign_up_wrap');
    //  signUpWrap.style.display = 'block';

     
    //  let signInWrap = document.querySelector('#wrap > div.sign_in_wrap');
    //  signInWrap.style.display = 'none';

    });

    let signInMenuBtn = document.querySelector('div.menu_wrap a.sign_in');
    signInMenuBtn.addEventListener('click', function(){
        console.log('signInMenuBtn CLICKED');

        showSelectedView(VIEW_NO.SIGN_IN_VIEW);
  


    
    //  let signInWrap = document.querySelector('#wrap > div.sign_in_wrap');
    //  signInWrap.style.display = 'block';

    // let signUpWrap = document.querySelector('#wrap > div.sign_up_wrap');
    //  signUpWrap.style.display = 'none';

    });
    
    let signOutMenuBtn = document.querySelector('div.menu_wrap a.sign_out');
    signOutMenuBtn.addEventListener('click', function(){
        console.log('signOutMenuBtn CLICKED');  

        showSelectedView(VIEW_NO.SIGN_OUT_VIEW);


        
    });

    let signWriteMenuBtn = document.querySelector('div.menu_wrap a.write');
    signWriteMenuBtn.addEventListener('click', function(){
        console.log('signWriteMenuBtn CLICKED'); 

        showSelectedView(VIEW_NO.DIARY_WRITE_VIEW);

        
   
    });

    let signlistMenuBtn = document.querySelector('div.menu_wrap a.list');
    signlistMenuBtn.addEventListener('click', function(){
        console.log('signlistMenuBtn CLICKED');
        
        showSelectedView(VIEW_NO.DIARY_LIST_VIEW);


       
    });

    /* MENU CLICK EVENT END*/


}