// 반복문(for문, while문)
// for문: 횟수에의한 반복 실행
// while문: 조건에의한 반복 실행

/*
    시작    끝     단계  => for (var i = 1; i < 11; i++)
for(초기화; 조건식; 단계) {
    반복 실행문
}
*/

// for(var i = 1; i < 11; i++) {
//     console.log('hello ', i);
// }

// 1부터 10까지의 정수의 합
// var sum = 0;
// for(var i = 1; i <= 10; i++) {
//     // sum = sum + i;
//     sum += i;
// }
// console.log(`sum: ${sum}`);  // 55


// Q) 1~10 까지의 정수의 합을 구하되, 홀수의 합만 구하자!
// var sum = 0
// for(var i = 1; i < 11; i += 2) {
//     sum += i;
// }

// console.log(`sum: ${sum}`);

// Q) 사용자가 원하는 구구단을 입력하면 해당 구구단이 출력된다. 7 -> 7단 출력
// var userInputNumber = Number(prompt('원하는 구구단 입력: '));
// for (var i = 1; i < 10; i++) {
//     console.log(`${userInputNumber} * ${i} = ${userInputNumber * i}`);
// }

// Q) 1단부터 9단까지 전체 구구단을 출력하는 프로그램을 만들어보자!
// for(var gugu = 1; gugu < 10; gugu++) {          // 1부터 9까지 반복
//     for(var i = 1; i < 10; i++) {
//         console.log(`${gugu} * ${i} = ${gugu * i}`);  
//     }
// }

// 1 * 1 = 1, 1 * 2 = 2 ... 1 * 9 = 9
// 2 * 1 = 1, 2 * 2 = 4 ... 2 * 9 = 18
// 3 * 1 = 1, 3 * 2 = 6 ... 3 * 9 = 27
// ...
// 9 * 1 = 1, 9 * 2 = 18 ... 9 * 9 = 81

// var nature = 1;
// for(var i = 1; i < 10; i++) {
//     console.log(`${nature} * 1 = ${i * 1}`)
//     console.log(`${nature} * 2 = ${i * 2}`)
//     console.log(`${nature} * 3 = ${i * 3}`)
//     console.log(`${nature} * 4 = ${i * 4}`)
//     console.log(`${nature} * 5 = ${i * 5}`)
//     console.log(`${nature} * 6 = ${i * 6}`)
//     console.log(`${nature} * 7 = ${i * 7}`)
//     console.log(`${nature} * 8 = ${i * 8}`)
//     console.log(`${nature} * 9 = ${i * 9}`)
//     nature += 1;
// }

// var nature = 1;
// for(var i = 1; i < 10; i++) {
//     console.log(`${nature} * 1 = ${nature * 1}`);
//     console.log(`${nature} * 2 = ${nature * 2}`);
//     console.log(`${nature} * 3 = ${nature * 3}`);
//     console.log(`${nature} * 4 = ${nature * 4}`);
//     console.log(`${nature} * 5 = ${nature * 5}`);
//     console.log(`${nature} * 6 = ${nature * 6}`);
//     console.log(`${nature} * 7 = ${nature * 7}`);
//     console.log(`${nature} * 8 = ${nature * 8}`);
//     console.log(`${nature} * 9 = ${nature * 9}`);
//     nature += 1;
// }

/*
for (var i = 1; i < 10; i++) {
    var result = '';
    for(var j = 2; j < 10; j++) {
        // result += j + ' * ' + i + ' = ' + (j * i) + '\t';
        result += `${j} * ${i} = ${j*i} \t`;  // 2 * 2 = 4    3 * 2 = 6    4 * 1 = 4
    }
    console.log(result);                          
}

console.log('he\'llo');
*/

// for ... in문
var myInfo = {
    myName : 'gildong',
    myAge : 20,
    myAddr : '대전',
    myPhone: '010-1234-5678'
}

for (var info in myInfo) {
    console.log(`info: ${info}`);
    console.log(`${myInfo[info]}`);  // myInfo[myAddr]

}

// for(초기값; 조건식; 단계)

// while문
// while(조건식) {
//   반복 실행문
// }

var i = 1;
while(i > 100) {
    console.log(`i: ${i}`);  // 1 2 3 ... 10
    i++;
}
console.log(`i out : ${i}`); // 11

// do{ } while(조건식)문
var j = 1;
do {
    console.log(`j: ${j}`);
    j++;
} while(j < 100);