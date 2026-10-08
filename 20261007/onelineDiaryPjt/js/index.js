// 웹문서가 끝까지 완전히 로딩 되면...
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOCUMENT READY!');

    initViews();

    addEvents();

});

// 이벤트 처리(리스너, 핸들러 정의)
function addEvents() {
    console.log('addEvents() CALLED!!');

    /* MENU CLICK EVENT START */
    let signUpMenuBtn = document.querySelector('div.menu_wrap a.sign_up');
    signUpMenuBtn.addEventListener('click', function() {
        console.log('signUpMenuBtn CLICKED!!');

        showSelectedView(VIEW_NO.SIGN_UP_VIEW);

    });

    let signInMenuBtn = document.querySelector('div.menu_wrap a.sign_in');
    signInMenuBtn.addEventListener('click', function() {
        console.log('signInMenuBtn CLICKED!!');

        showSelectedView(VIEW_NO.SIGN_IN_VIEW);
        
    });

    let signOutMenuBtn = document.querySelector('div.menu_wrap a.sign_out');
    signOutMenuBtn.addEventListener('click', function() {
        console.log('signOutMenuBtn CLICKED!!');
         
        currentSingInedMemberID = '';
        setMenuStatus(SIGN_OUT_STATUS);
        showSelectedView(VIEW_NO.SIGN_OUT_VIEW);
      
        
    });

    let writeMenuBtn = document.querySelector('div.menu_wrap a.write');
    writeMenuBtn.addEventListener('click', function() {
        console.log('writeMenuBtn CLICKED!!');
        
        showSelectedView(VIEW_NO.DIARY_WRITE_VIEW);

    });

    let listMenuBtn = document.querySelector('div.menu_wrap a.list');
    listMenuBtn.addEventListener('click', function() {
        console.log('listMenuBtn CLICKED!!');
        
        showSelectedView(VIEW_NO.DIARY_LIST_VIEW);

    });
    /* MENU CLICK EVENT END */



/* FUCTION BUTTON CLICK EVENT START */
let signUpBtn = document.querySelector('div.sign_up_wrap input[type="button"]');
signUpBtn.addEventListener('click',function() { //핸들러(SW전반에 용어), 콜백함수(JS)
    console.log('signUpBtn CLICKED!!');

    let u_id = document.querySelector('div.sign_up_wrap input[name="u_id"]').value;
    let u_pw = document.querySelector('div.sign_up_wrap input[name="u_pw"]').value;
    let u_mail = document.querySelector('div.sign_up_wrap input[name="u_mail"]').value;
  
    addMember(u_id, u_pw, u_mail);

    alert('SIGN-UP SUCCESS!!');

    
  
    docleanElementValue(
          document.querySelector('div.sign_up_wrap input[name="u_id"]'),
    document.querySelector('div.sign_up_wrap input[name="u_pw"]'),
    document.querySelector('div.sign_up_wrap input[name="u_mail"]')
    );

    showSelectedView(VIEW_NO.SIGN_IN_VIEW);

});

let signInBtn = document.querySelector('div.sign_in_wrap input[type="button"]');
signInBtn.addEventListener('click',function() { //핸들러(SW전반에 용어), 콜백함수(JS)
    console.log('signInBtn CLICKED!!');

    let u_id = document.querySelector('div.sign_in_wrap input[name="u_id"]').value;
    let u_pw = document.querySelector('div.sign_in_wrap input[name="u_pw"]').value;
  
    let signInREsult = searchMember(u_id, u_pw); //true or false
    if(signInREsult){
        // currentSingInedMemberID = u_id;
        setcurrentSingInedMemberID(u_id);
        
        alert('SIGN-IN SUCCESS!!');
        showSelectedView(VIEW_NO.HOME_VIEW);
        setMenuStatus(SIGN_IN_STATUS);
    } else {
        currentSingInedMemberID = '';
        alert('SIGN-IN FAIL!!');
        showSelectedView(VIEW_NO.SIGN_IN_VIEW);
        setMenuStatus(SIGN_OUT_STATUS);

    }


    docleanElementValu(
    document.querySelector('div.sign_in_wrap input[name="u_id"]'),
    document.querySelector('div.sign_in_wrap input[name="u_pw"]')
);
   


});


}
/* FUCTION BUTTON CLICK EVENT END */