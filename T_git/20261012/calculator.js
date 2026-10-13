export const PI = 3.14;

export const SIGN_UP_VIEW = 1;
export const SIGN_IN_VIEW = 2;
export const SIGN_OUT_VIEW = 3;
export const DIARY_WRITE_VIEW = 4;
export const DIARY_LIST_VIEW = 5;
export const HOME_VIEW = 6;

export const VIEW_NO = {
    SIGN_UP_VIEW : 1,
    SIGN_IN_VIEW : 2,
    SIGN_OUT_VIEW : 3,
    DIARY_WRITE_VIEW : 4,
    DIARY_LIST_VIEW : 5,
    HOME_VIEW: 6
}

export function addOperator(n1, n2) {
    console.log('addOperator()');

    let result = n1 + n2;
    console.log('result: ', result);

}

export function subOperator(n1, n2) {
    console.log('subOperator()');
    
    let result = n1 - n2;
    console.log('result: ', result);

}

export function mulOperator(n1, n2) {
    console.log('mulOperator()');
    
    let result = n1 * n2;
    console.log('result: ', result);

}

// export function divOperator(n1, n2) {
//     console.log('divOperator()');
    
//     let result = n1 / n2;
//     console.log('result: ', result);

// }

export const divOperator = (n1, n2) => {
    console.log('divOperator()');

    let result = n1 / n2;
    console.log('result: ', result);

}