// 조건문(if, switch)
// if문, if ~ else문, if ~ else if문
// if문: 단일 선택
// if (조건식) {
//      실행문
// }
if (10 > 5) {
    console.log('10은 5보다 크다!');
}

// if ~ else문: 양자 택일
// 만약 시험 점수가 80이상이면 '합격'을 출력
// 그렇지 않으면 '불합격'을 출력 

var score = 90;
// if (score >= 80) {
//     console.log('합격');
// }

// if (score < 80) {
//     console.log('불합격');
// }

if (score >= 80) {
    console.log('합격');
} else {
    console.log('불합격');
}

// if ~ else if문: 다중 선택
/*
    점수가
    90이상 이면     -->  'A'
    80이상 90미만   -->  'B'
    70이상 80미만   -->  'C'
    60이상 70미만   -->  'D'
*/

score = 65;

// 90이상 이면     -->  'A'
if (score >= 90) {
    console.log('A');
}

// 80이상 90미만   -->  'B'
if (score >= 80 && score < 90) {
    console.log('B');
}

// 70이상 80미만   -->  'C'
if (score >= 70 && score < 80) {
    console.log('C');
}

// 60이상 70미만   -->  'D'
if (score >= 60 && score < 70) {
    console.log('D');
}

score = 85;
if (score >= 90) {
    console.log('A');
} else if(score >= 70 && score < 80) {
    console.log('C');
} else if(score >= 80 && score < 90) {
    console.log('B');
} else if(score >= 60 && score < 70) {
    console.log('D');
} else {
    console.log('F');
}

// switch문
/*
switch(값) {
    case 경우1:
        break;
    case 경우2:
        break;
    case 경우3:
        break;
}
*/

var now = new Date();
console.log(`now: ${now}`);

var year = now.getFullYear();  // 2026
var month = now.getMonth();     // 0 ~ 11: 8
var date = now.getDate();       // 30
var day = now.getDay();         // 0 ~ 6: 3

console.log(`year: ${year}`);
console.log(`month: ${month}`);
console.log(`date: ${date}`);
console.log(`day: ${day}`);   // 0(일요일), 1(월요일), 2(화요일), 3(수요일) ~ 6(토요일)

var dayString = '';
switch(day) {   // 3
    case 1:
        console.log('월요일');
        dayString = '월';
        break;

    case 2:
        console.log('화요일');
        dayString = '화';
        break;

    case 3:
        console.log('수요일');
        dayString = '수';
        break;

    case 4:
        console.log('목요일');
        dayString = '목';
        break;

    case 5:
        console.log('금요일');
        dayString = '금';
        break;

    case 6:
        console.log('토요일');
        dayString = '토';
        break;

    case 0:
        console.log('일요일');
        dayString = '일';
        break;
    
    default:
        console.log('모르겠어요.');
        break;
}


// 오늘 날짜 출력
console.log(`${year}년 ${month+1}월 ${date}일 ${dayString}요일`);
