document.addEventListener('DOMContentLoaded', function(){
    console.log('DOCUMENT READY')

    addEvents();

});

function addEvents(){
console.log('addEvents() CALLED!!');

 /*MENU CLICK EVENT START */
 let signUpMenuBtn = document.querySelector('div.menu_wrap a.sign_up');
 signUpMenuBtn.addEventListener('click' , function(){
    console.log('signUpMenuBtn CLICKED!!');

   
 });

  let signInMenuBtn = document.querySelector('div.menu_wrap a.sign_in');
 signInMenuBtn.addEventListener('click' , function(){
    console.log('signInMenuBtn CLICKED!!');
 });

let signOutMenuBtn = document.querySelector('div.menu_wrap a.sign_out');
 signOutMenuBtn.addEventListener('click' , function(){
    console.log('signOutMenuBtn CLICKED!!');
 });

let writeMenuBtn = document.querySelector('div.menu_wrap a.write');
 writeMenuBtn.addEventListener('click' , function(){
    console.log('writeMenuBtn CLICKED!!');
 });

let listMenuBtn = document.querySelector('div.menu_wrap a.list');
 listMenuBtn.addEventListener('click' , function(){
    console.log('listMenuBtn CLICKED!!');
 });
/*MENU CLICK EVENT END */

/*FUCTION BUTTON CLICK EVENT START*/

let signUpBtn = document.querySelector('div.sign_up_wrap input[type = "button"]');
signUpBtn.addEventListener('click', function(){
    console.log('signUpBtn CLICKED!!');

    let u_id = document.querySelector('div.sign_up_wrap input[name = "u_id"]').value;
    let u_pw = document.querySelector('div.sign_up_wrap input[name = "u_pw"]').value;
    let u_mail = document.querySelector('div.sign_up_wrap input[name = "u_mail"]').value;

    addMember(u_id, u_pw,u_mail );

    alert('SING_UP SUCCESS!!');

});

let signInBtn = document.querySelector('div.sign_in_wrap input[type = "button"]');
signInBtn.addEventListener('click', function() {
    console.log('signInBtn CLICKED!!');

    let u_id = document.querySelector('div.sign_up_wrap input[name = "u_id"]').value;
    let u_pw = document.querySelector('div.sign_up_wrap input[name = "u_pw"]').value;
    
    let signInResult = searchMember(u_id, u_pw);
    if (signInResult) {
       setCurrentSignInedMemberID(u_id);

        alert('SIGN_IN SUCCESS!!');
        showSelectedView(VIEW_NO.HOME_VIEW);
        setMenuStatus(SIGN_IN_VIEW);

    } else{
        setCurrentSignInedMemberID();

       alert('SIGN_IN FAIL!!'); 
       showSelectedView(VIEW_NO.SIGN_IN_VIEW);
       setMenuStatus(SIGN_OUT_STATUS);  
    }
    doElementValueClean(
        document.querySelector('div.sign_in_wrap input[name = "u_id"]'),
        document.querySelector('div.sign_in_wrap input[name = "u_pw"]'),

    )


});

let writeBtn = document.querySelector('div.write_wrap button');
writeBtn.addEventListener('click', function() {
    console.log('writeBtn CLICKED!!');

    let diry = document.querySelector('div.write_wrap input').value;
    addDiary(diary);
});
/*FUCTION BUTTON CLICK EVENT END*/
}