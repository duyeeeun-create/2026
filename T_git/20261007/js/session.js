let currentSignInedMemberID = '';

const setCurrentSignInedMemberID =(id = '') => {
    console.log('setCurrentSignInedMemberID() CALLED!!');
    currentSignInedMemberID = id;
}

const getCurrentSignInedMemberID =() => {
    console.log('getCurrentSignInedMemberID() CALLED!!');
    return currentSignInedMemberID;
}