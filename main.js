let circleData = document.querySelector('.check-mark');

let lineData = document.querySelector('.complete-line');

let visaData = document.querySelector('#visaType');

let emailData = document.querySelector('#email');

let countryData = document.querySelector('#country');

let universityData = document.querySelector('#university');

let progress = 0;

let passes = false;

const regex = /^[a-z0-9]+\.?[a-z0-9]+@[a-z0-9]+\.[a-z0-9]+\.?[a-z0-9]+$/; //regular expression  to confirm email is of the right syntax

let render = () =>{

    progress = 0;
    passes = regex.test(emailData.value);

    if (visaData.value !== ''){progress+=25};

    if(countryData.value !== ''){progress+=25};

    if(universityData.value.length>2 && universityData.value.length<32){progress +=25};

    if(passes && emailData.value.length<128){progress+=25};

    lineData.style.width = progress+'%';
    circleData.innerHTML = progress+'%';


}

setInterval(render,1000);

