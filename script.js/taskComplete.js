function localDay() {
    const today = new Date();
    const dayName = today.toLocaleDateString("en-US", { weekday: "long" });
     return `${dayName},`;
}

function yearDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    return `${day}/${month}/${year}`;
    
}

function dateTime() {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let amPM;
    if (hours >= 12) {
        amPM = 'pm';
    }
    else {
        amPM = 'AM';

    }

    if (hours === 0) {
        hours = 12;
    }
    else if (hours > 12) {
        hours = hours - 12;
    }

    return `${hours}:${minutes}:${seconds} ${amPM}`;

}



// background random color
document.getElementById('bg-color-change').addEventListener('click',function(){
    document.body.style.backgroundColor=
    'rgb('+Math.round(Math.random()*255)+
    ','+Math.round(Math.random()*255)+
    ','+Math.round(Math.random()*255)+')';
    console.log('aodfk');
})

// date and time
let currentTime = yearDate();
document.getElementById('realTimeDate').innerText = currentTime;

let currentDay=localDay();
document.getElementById('realDay').innerText = currentDay;




// course list

document.getElementById('complete_btn1').addEventListener('click', function () {
    alert("Board Update Successfully")

   
    subTaskNumber('taskNumber');
    addCheckNumber('check_number');

    const Title = document.getElementById('title').innerText;
    const history = document.getElementById('historyContainer');

    let currentTime = dateTime();
    const div = document.createElement("div");
    div.innerText = `You have Complete The ${Title} at ${currentTime} `
    div.classList.add("p-2", "bg-[#F4F7FF]", "rounded-md", "mt-2", "mb-2");
    history.appendChild(div);
 

});

document.getElementById('complete_btn2').addEventListener('click', function () {
    alert("Board Update Successfully")

    
    subTaskNumber('taskNumber');
    addCheckNumber('check_number');

    const Title2 = document.getElementById('title2').innerText;
    const history = document.getElementById('historyContainer');

    let currentTime = dateTime();
    const div = document.createElement("div");
    div.innerText = `You have Complete The ${Title2} at ${currentTime} `
    div.classList.add("p-2", "bg-[#F4F7FF]", "rounded-md", "mt-2", "mb-2");
    history.appendChild(div);
  
   
});

document.getElementById('complete_btn3').addEventListener('click', function () {
    alert("Board Update Successfully")

    subTaskNumber('taskNumber');
    addCheckNumber('check_number');

    const Title3 = document.getElementById('title3').innerText;
    const history = document.getElementById('historyContainer');

    let currentTime = dateTime();
    const div = document.createElement("div");
    div.innerText = `You have Complete The ${Title3} at ${currentTime} `
    div.classList.add("p-2", "bg-[#F4F7FF]", "rounded-md", "mt-2", "mb-2");
    history.appendChild(div);

});

document.getElementById('complete_btn4').addEventListener('click', function () {
    alert("Board Update Successfully")

    subTaskNumber('taskNumber');
    addCheckNumber('check_number');

    const Title4 = document.getElementById('title4').innerText;
    const history = document.getElementById('historyContainer');

    let currentTime = dateTime();
    const div = document.createElement("div");
    div.innerText = `You have Complete The ${Title4} at ${currentTime} `
    div.classList.add("p-2", "bg-[#F4F7FF]", "rounded-md", "mt-2", "mb-2");
    history.appendChild(div);

});

document.getElementById('complete_btn5').addEventListener('click', function () {
    alert("Board Update Successfully")

    subTaskNumber('taskNumber');
    addCheckNumber('check_number');

    const Title5 = document.getElementById('title5').innerText;
    const history = document.getElementById('historyContainer');

    let currentTime = dateTime();
    const div = document.createElement("div");
    div.innerText = `You have Complete The ${Title5} at ${currentTime} `
    div.classList.add("p-2", "bg-[#F4F7FF]", "rounded-md", "mt-2", "mb-2");
    history.appendChild(div);

});

document.getElementById('complete_btn6').addEventListener('click', function () {
    alert("Board Update Successfully")

    subTaskNumber('taskNumber');
    addCheckNumber('check_number');

    const Title6 = document.getElementById('title6').innerText;
    const history = document.getElementById('historyContainer');

    let currentTime = dateTime();
    const div = document.createElement("div");
    div.innerText = `You have Complete The ${Title6} at ${currentTime} `;
    div.classList.add("p-2", "bg-[#F4F7FF]", "rounded-md", "mt-2", "mb-2");
    history.appendChild(div);

});



















function disable(x) {
    x.disabled = true;
}




document.getElementById('clear_btn').addEventListener('click', function () {
    const element = document.getElementById('historyContainer');
    element.remove();
})