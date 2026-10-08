const docleanElementValue = (...eles) => {
    console.log('docleanElementValue() CALLED!!');


    for (let i = 0; i < eles.length; i++) 
        eles[i].value = '';
    
}