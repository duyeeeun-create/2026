let currentSignInedMemberID = '';

const setCurrentSignInedMemberID = (id = '') => {
    console.log('setCurrentSignInedMemberID() CALLED!!');
    currentSignInedMemberID =id;

}


const getCurrentSignInedMemberID = (id = '') => {
    console.log('getCurrentSignInedMemberID() CALLED!!');
    return currentSignInedMemberID

}