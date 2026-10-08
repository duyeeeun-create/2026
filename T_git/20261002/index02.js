// 매개변수
/*
function printHello(name, age, add) {     // name = '길동'; age = 20; add = '대전';
    console.log(`${name}님 안녕하세요. 나이: ${age}, 주소: ${add}`);
}

printHello('찬호', 20, '대전');
*/

// 매개변수 - 가변인자
/*
학교에서 선생님의 요구: 우리반 총학생 3명의 시험점수 총합과 평균을 구하는 프로그램을 개발해 주세요. 
*/

function printTotalAndAverageScore(className, ...student) {  // var student = [80, 90, 100, 80];
    console.log(`student: ${student}`);
    console.log(`student: ${student.length}`);  // 4

    console.log(`학급번호: ${className}`);
    var totalScore = 0;
    for (var i = 0; i < student.length; i++) {
        console.log(student[i]);
        totalScore += student[i];
    }

    var averageScore = totalScore / student.length;

    console.log(`총점: ${totalScore}`);
    console.log(`평점: ${averageScore}`);

    /*
    var totalScore = student1 + student2 + student3;
    var averageScore = totalScore / 3;

    console.log(`총점: ${totalScore}`);
    console.log(`평점: ${averageScore}`);
    */
}

printTotalAndAverageScore('3-3반', 80, 90, 100);