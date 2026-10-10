const doElementValueClean = (...eles) => {
    console.log('doElementValueClean() CALLED!!');

    for (let i = 0; i < eles.length; i++)
        eles[i].value = '';

}