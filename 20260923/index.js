// console.log('Hello javascript~');
// console.log('Hello WEB!!~');
// //alert('주의');


//1. 변수 정의(선언과 초기화)
// 변수 정의 기본 문법: var 변수명 = 데이터;
// // var myScore (변수선언 특정공간+명찰) = 80; (할당 연산자 )
// var myScore = 80;
// console.log(myScore);

// myScore = 90;
// console.log(myScore);

// myScore = "Hello";
// console.log(myScore);

// myScore = "3.14";
// console.log(myScore);

// myScore = "true";
// console.log(myScore);

//2. 변수선언 키워드 (var,(left,const)->ES6+)
// var, let: 일반 변수를 선언하는 키워드
//const: 상수 선언(값을 바꿀수없다)

// let myName ="gildong";
// console.log( myName);

// const PI = 3.14;
// console.log(PI);

// //Q1 변수 myName 과 myMajor에 자신의 이름과 전공 저장 출력

// var myName ="두예은";
// var myMajor ="student";

// console.log( "myName:", myName);
// console.log("myMajor:", myMajor);


// var intro ="Hello";
// console.log(intro);

// intro = "안녕하세요";
// console.log(intro);

//3. 변수명 규칙
// 3-1. 영문자를 사용한다
// var gildongAge = 20;
// console.log(gildongAge);

// //3-2. 변수명은 소문자로 시작한다
// var money = 100; //권장
// var Money = 100; //권장하지 않음


// //3-3. 데이터의 의미를 쉽게 파악할 수 있게 짓는다
// // 길동 플레이어 
// var player = "gildong"; //권장
// var p = "gildong"; //권장하지 않음
// // 점수 score 위치 location 시간time
// //  현재시간current_Time

// // 3-4 두 개 이상의 단어가 조합될 경우 낙타표기법을 따른다
//새로운 아이템 new item -> newitem(비권장) -> newItem(권장)
// 현재위도값 current location latitude 
//currentLocationLatitude 


// 3-5. 예약어(키워드)는 변수명으로 사용할 수 없다
// var let const for if else return...

//3-6 언더바(_)를 제외한 특수문자는 사용할 수 없다.
// var _score = 100;
// var $score = 100;
// var !score = 100;
//3-7. 숫자는 첫 글자는 제외한 나머지 자리에서만 사용한다
// var lplayer = 'gildong'; (X)
// var player1 = 'gildong'; (O)
// var play1er = 'gildong'; (O)

// 첫 글자는 소문자로 시작하고 낙타표기법을 따른다 
// 언더바를 제외한 특수문자,예약어,공백문자는 사용하지 않는다
// 숫자를 사용할경우 변수의 중간 또는 뒤에 사용한다

//4. 데이터 자료형
//정수형(Integer)  : 1, 100, 99, -20, -100, 0
//실수형(Float): 3.14, 0.1, 0.0, -5.129
//문자열형(String): "Hello", "Hi", "good", 'a', ''," "
//논리형(Boolean): ture, false

// var currentScore = 100; //4byte 
// var currentScore_ = 0.1;  //4byte
// var currentScore__ = "hello"; //
// var currentScore___ = true; //1byte

// console.log(typeof(currentScore));
// console.log(typeof(currentScore__));
// console.log(typeof(currentScore___));

// {...} : Object 타입***************