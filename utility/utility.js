

function countClick(value){
    if(value===0){
        alert('Congrats!!! You have completed all the current task');
    }
}


function subTaskNumber(id) {
    const mainNumber = document.getElementById(id).innerText;
    const mainNumberConvert=parseInt(mainNumber)
    const value=mainNumberConvert-1;
    document.getElementById(id).innerText=value;
    countClick(value);
}

function addCheckNumber(id){
    const mainNumber = document.getElementById(id).innerText;
    const mainNumberConvert=parseInt(mainNumber)
    const value=mainNumberConvert+1;
    document.getElementById(id).innerText=value;

}
