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

}