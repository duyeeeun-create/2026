const memberDB = new Map();
const diaryDB = new Map();

/* MEMBER DB START */
// sign-up(Create)
const addMember = (id, pw, mail) => {
    console.log('addMember() CALLED!!');
    
    memberDB.set(id, {
        u_id: id,
        u_pw: pw,
        u_mail: mail
    });

    diaryDB.set(id, []);

    console.log(memberDB.get(id));
    console.log(diaryDB.get(id));  // []

}

// sign-in(Read)
const searchMember = (id, pw) => {
    console.log('searchMember() CALLED!!');

    let memberObj = memberDB.get(id);  // {...} or undefined
    if (memberObj !== undefined && memberObj.u_pw === pw) {
        console.log('SIGN IN SUCCESS!!');
        return true;

    } 

    console.log('SIGN IN FAIL!!');
    return false;
    
}

/* MEMBER DB END */

/* DAIRY DB START */
const addDiary = (diary) => {
    console.log('addDiary() CALLED!!');

    let u_id = getCurrentSignInedMemberID();
    let diaries = diaryDB.get(u_id); // []

    diaries.push(diary);
    console.log(`diaries: ${diaries}`);

}

const searchDiaries = () => {
    console.log('searchDiaries() CALLED!!');

}
/* DAIRY DB END */


/* SET DUMY DATA START */
if (IS_DEV) {
    addMember('gildong', '1234', 'gildong@gmail.com');
    addMember('chanho', '0000', 'chanho@naver.com');
}
/* SET DUMY DATA END */