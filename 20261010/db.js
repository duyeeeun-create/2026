const memberDB = new Map();
const  diaryDB = new Map();

const addMember = (id, pw, mail)  => {
    console.log('addMember() CALLED!!');

    memberDB.set(id, {
        u_id : id, 
        u_pw : pw,
        u_mail : mail
    });

    diaryDB.set(id, []);

    console.log(memberDB.get(id));
    console.log(diaryDB.get(id));

}

const searchMember  = (id, pw) => {
    console.log('searchMember() CALLED!!');

    let memberObj = memberDB.get
}