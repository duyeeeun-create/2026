// Q) 전기 요금 계산기
/*
전기를 많이 사용하면 누진세가 붙어 단가와 기본요금이 올라갑니다.
다음 누진제가 적용된 단가표를 참고하여 전기 사용량을 입력하면 
전기료가 출력되는 프로그램을 만들어봅시다.

-------------------------------------------------------
사용량(kwh)   200이하     201초과 ~ 400이하      400초과
단가(원)        99.3                187.9       280.6
기본요금         910                 1600        7300
-------------------------------------------------------

전기 사용량을 입력하세요. 190
사용량 : 190.0 kwh
기본요금 : 910 원
단가 : 99.3 원
전기 요금 : 19777.0 

*/

/*
var elecUse = Number(prompt('전기 사용량(kwh)을 입력하세요.'));

if (elecUse <= 200) {
    console.log(`${910 + 99.3 * elecUse}원`);

} else if (elecUse <= 400) {
    console.log(`${1600 + 187.9 * elecUse}원`);

} else if (elecUse > 400) {
    console.log(`${7300 + 280.6 * elecUse}원`);

}
*/

// var elecUse = Number(prompt('전기 사용량(kwh)을 입력하세요.'));

// var basicPrice = 0;     // 기본요금
// var unitPrice = 0;      // 단가
// var totalPrice = 0;     // 전기 요금

// if (elecUse <= 200) {
//     // console.log(`${910 + 99.3 * elecUse}원`);
//     basicPrice = 910;
//     unitPrice = 99.3;

// } else if (elecUse <= 400) {
//     // console.log(`${1600 + 187.9 * elecUse}원`);
//     basicPrice = 1600;
//     unitPrice = 187.9;

// } else if (elecUse > 400) {
//     // console.log(`${7300 + 280.6 * elecUse}원`);
//     basicPrice = 7300;
//     unitPrice = 280.6;

// }

// totalPrice = basicPrice + unitPrice * elecUse;
// console.log(`${totalPrice}원`);


// Q) 다음의 요구사항을 삼항 연산자(조건식)와 if ~ else문을 이용해서 각각의 프로그램으로 만드시오.
/*
 - 시험 점수를 입력한다.
 - 점수가 85점 이상이면 'success'를 출력하고, 85점 미만이면 'fail'을 출력한다.
*/

// var score = Number(prompt('시험점수 입력: '));
// var result = score >= 85 ? 'success' : 'fail';
// alert(result);

// if (score >= 85) {
//     alert('success');
// } else {
//     alert('fail');
// }

// Q) 어린이의 신장을 입력하면 놀이기구 탑승 여부가 출력되는 프로그램을 만드시오
// (단, 놀이기구 탑승은 신장이 최소 120cm부터 최대 160cm까지 가능하다)
// var height = Number(prompt('신장을 입력하세요.'));
// if (height >= 120 && height <= 160) {
//     console.log('가능');
// } else {
//     console.log('불가능');
// }

// Q) 다음의 요구사항을 충족시키는 프로그램을 만드시오.
/*
 - 아침 최저 기온을 입력한다.
 - 오후 최고 기온을 입력한다.
 - 일교차가 10도 이상이면 '감기 조심하세요.'를 출력한다.
 - 오후 최고 기온이 28도 이상이고 일교차가 10도 미만이면 '초여름 날씨입니다.'를 출력한다.
*/
// var minTemp = Number(prompt('아침 최저 기온을 입력하세요(°C)'));
// var maxTemp = Number(prompt('오후 최고 기온을 입력하세요(°C)'));
// var temperatureDifference = maxTemp - minTemp;

// if (temperatureDifference >= 10) {
//     alert('감기 조심하세요.');

// } else if (maxTemp >= 28 && temperatureDifference < 10) {
//     alert('초여름 날씨입니다.');

// }

// Q) 사용자가 입력한 문자 메시지 길이에 따라서 SMS 또는 MMS의 발송을 결정하는 
//    프로그램을 완성하시오.
//    (단, 메시지 길이가 50 이하면 SMS 발송, 그렇지 않으면 MMS를 발송한다).
//    문자의 길이는 string.length를 이용합니다.('hello'.length => 5)
// let sms = (prompt(`메시지를 입력하십시오`));

// if (sms.length > 50)
//     console.log('MMS');
// else
//     console.log('SMS');

// console.log(`sms.length: ${sms.length}`);

// --------------------------------------------------------------------------------

// Q) 2~8 사이의 짝수 출력하자!

// Q) 1~10 사이의 정수를 출력하되, 정수가 3의 배수이면 '3의 배수!' 출력하기

// Q) for문을 이용해서 1~100까지 정수 중에서 3과 7의 공배수와 최소공배수를 출력하시오.
// var minNum = 0;     // 공배수 변수
// for (var i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 7 === 0) {
//         console.log(`공배수: ${i}`);
//         if (minNum === 0) 
//             minNum = i;     // 21
//     }
// }
// console.log(`최소공배수: ${minNum}`);

// Q) 0~100까지 정수 중 3과 8의 공배수와 최소공배수 출력하기

// Q)369 게임 만들기
/*
친구들끼리 많이 하는 369 게임을 만들어 봅시다.
1부터 99까지 1씩 증가하면서 숫자에 3, 6, 9가 들어 있을 때마다
숫자와 함께 '짝!' 을 출력합니다. 
*/

/*
 3 짝!
 6 짝!
 9 짝!

 1     3 짝!
 1     6 짝!
 1     9 짝!
 ...
 30 짝!
 3     3 짝!짝!
 34 짝!
 36 짝!짝!
 37 짝!
 39 짝!짝!
 ...
 63 짝!짝!
 64 짝!
*/
// for(var i = 1; i <= 99; i++) {
//     if (i < 10) {
//         var str = '';
//         if (i % 3 === 0)
//             str = '짝!';

//         console.log(`일의자리수: ${i} :: ${str}`);  // 6 :: 짝!

//     } else {
        
//         var firstNum = parseInt(i / 10);      // 십의자리수   40 / 10 = 4
//         var secondNum = i % 10;               // 일의자리수   40 % 10 = 0
//         var str = '';

//         if (firstNum % 3 === 0)
//             str += '짝!';

//         if (secondNum % 3 === 0 && secondNum !== 0)
//             str += '짝!';

//         console.log(`십의자리수: ${firstNum}, 일의자리수: ${secondNum} :: ${str}`);

//     }

// }


// Q) 열차 교차 시간 알아내기
/*
대전역에는 3개 노선의 열차가 오전 9시부터 오후 6시까지 교차 운행한다.
3대의 열차가 교차하는 시간을 구해 열차 충돌 사고를 막으세요.
(단 매일 오전 9시에 대전역에서 모든 열차가 출발한다.)
A열차 첫차(오전 9시) 막차(오후 6시)	 운행간격(10분)
B열차 첫차(오전 9시) 막차(오후 6시)  운행간격(25분)
C열차 첫차(오전 9시) 막차(오후 6시)  운행간격(30분)
*/

var trainA = 10;
var trainB = 25;
var trainC = 30;

for(var i = 1; i < 541; i++) {

    var clashTime = `${9 + parseInt(i/60)}시 ${i % 60}분`;

    if (i % trainA === 0 && i % trainB === 0 && i % trainC === 0) {
        console.log(`ABC 충돌 시간 ${clashTime}`);

    } else if (i % trainA === 0 && i % trainB === 0) {
        console.log(`AB 충돌 시간 ${clashTime}`);

    } else if (i % trainB === 0 && i % trainC === 0) {
        console.log(`BC 충돌 시간 ${clashTime}`);

    } else if (i % trainC === 0 && i % trainA === 0) {
        console.log(`CA 충돌 시간 ${clashTime}`);

    }

}