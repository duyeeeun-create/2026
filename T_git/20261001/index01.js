var today = new Date();
var date = today.getDate(); // 오늘 날짜
console.log(`오늘 날짜: ${date}`);

var carNumber = Number(prompt('차량번호 입력: ')); // 차량번호

if (date % 2 === 0) {       // 짝수 날

    /*
    if (carNumber % 2 === 0)
        alert('입차가능!!');
    else
        alert('입차불가!!');
    */
    
    // 삼항(조건식) 연산자 (조건식 ? __ : __)
    carNumber % 2 === 0 
    ? 
    alert('입차가능!!') 
    : 
    alert('입차불가!!');

} else {                    // 홀수 날

    /*
    if (carNumber % 2 === 0)-
        alert('입차불가!!');
    else
        alert('입차가능!!');
    */

    /*
    carNumber % 2 === 0 
    ? 
    alert('입차불가!!') 
    : 
    alert('입차가능!!');
    */

    var resultStr = carNumber % 2 === 0 ? '입차불가!!' : '입차가능';
    alert(resultStr);
}