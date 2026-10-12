// const memberDB = new Map(); //데이터 영속성XX
//undefind || {...}
if(localStorage.getItem('memberDB')  === undefined){
   localStorage.setItem("memberDB",JSON.stringify({})); // {}---->'{}'스트링화 
}
// const diaryDB = new Map();
if(localStorage.getItem('diaryDB') ===undefined){
   localStorage.setItem('diaryDB', JSON.stringify({}));
   
}    // {}---->'{}'스트링화 
/*MEMBER DB START*/
//sign-up(create)
const addMember = (id, pw, mail) =>{
    console.log('addMember() CALLED!!');

   let memberDB = JSON.parse(localStorage.getItem('memberDB')); // '{}'--> {}
   //ID 중복 체크 (이미 존재하는 ID라면 회원가입 및 다이어리 초기화 진행 막음)
   if (memberDB[id] !== undefined)
       return;
      
   memberDB[id] = {
        u_id: id, 
        u_pw: pw,
        u_mail: mail
    
   };

   localStorage.setItem('memberDB', JSON.stringify(memberDB)); //{'gildong': {'gildong','1234','gildong@gmail.com'}}
    // memberDB.set(id, {
    //     u_id: id, 
    //     u_pw: pw,
    //     u_mail: mail
    
    // });
   let  diaryDB = JSON.parse(localStorage.getItem('diaryDB')); // '{}' --> {}
   diaryDB[id] = [];  //{'gildong' : []}--->'{'gildong' : []}'
   localStorage.setItem('diaryDB', JSON.stringify(diaryDB));

//    diaryDB .set (id,[]); 

//    console.log(memberDB.get(id));
//    console.log(diaryDB.get(id));//[]
}
//sign-in(read)
const searchMember = (id, pw) =>{
    console.log('searchMember() CALLED!!');

   let memberDB = JSON.parse(localStorage.getItem('memberDB'));
  if( memberDB[id] !== undefined &&  memberDB[id].u_pw === pw ) {
       console.log('SIGN IN SUCCESS!!');
       return true;
  }
    console.log('SIGN IN FAIL');
    return false;
//    let memberObj = memberDB.get(id); //{...} or undifind
//    if(memberObj !== undefined && memberObj.u_pw === pw){
//     console.log('SIGN IN SUCCESS');
//     return true;
//    }/*else{*/
//     console.log('SIGN IN FAIL');
//     return false;

  /* }*/
}

/*MEMBER DB END*/

/*DIARY DB START*/
const addDiary = (diary) =>{
    console.log('addDiary() CALLED!!');

   let diaryDB = JSON.parse(localStorage.getItem('diaryDB')); //{}
   let u_id = getcurrentSingInedMemberID();
   let myDiaries = diaryDB[u_id]; //[]
   myDiaries.push(diary); //[~~]
   localStorage.setItem('diaryDB',JSON.stringify(diaryDB));

    // let u_id = getcurrentSingInedMemberID();
    // let diaries = diaryDB.get(u_id);
    // diaries.push(diary)
    
    // console.log(`diaries: ${diaries}`); // diaries : 1111, 2222
    // console.log('diaries:', diaries); // diaries : [1111, 2222]
}

const searchDiaries = (u_id) => {
    console.log('searchDiaries() CALLED!!'); 

  let diaryDB = JSON.parse(localStorage.getItem('diaryDB')); //{...}
  return diaryDB[u_id];
    // return diaryDB.get(u_id);
}

/*DIARY DB END*/

/* SET DUMY DATA START */
if(IS_DEV){
addMember('gildong','1234','gilgong@gmail.com'); 
addMember('chanho','0000','chanho@gmail.com');
}
/* SET DUMY DATA END */