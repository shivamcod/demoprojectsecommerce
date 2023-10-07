const setofwords = [
"My Name is Shivam Kumar and I am a Softwarengineer",
"hdjadhquaj jhajdhaid ndkjhd nkjBDKJA NDKJABD",
"DJBASHDKVA AJDHQIcbjkakvba KDBKVAFfbdsjd",
"FBSJHVC dsjbvsvbjha FJAKFBAK fkabfkaf BFKABF",
"KBAHKVAHVbvknka v ajvbkja JKBKJA  kfbjkab KJFBK"
];

const msg = document.getElementById('msg');
const typeofwords = document.getElementById('words');
const btn = document.getElementById('btn');
let startTime, endTime;

const playgame = () =>{
    let randomnumber = Math.floor(Math.random()*setofwords.length);
    msg.innerText = setofwords[randomnumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
}

const endPlay = () =>{
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime) / 1000);
    console.log(totalTime);

    let totalstr = typeofwords.value;
    let wordcount = wordcounter(totalstr);

    let speed = Math.round((wordcount / totalTime) * 60);
    console.log(speed);
}

const wordcounter = (str) => {
    let response = str.split(" ").length;
    console.log(response);
    return response;
}

btn.addEventListener('click', function(){
    if(this.innerText == 'Start'){
        typeofwords.disabled = false;
        playgame();
    }else if(this.innerText == "Done"){
        typeofwords.disabled = true;
        btn.innerText = "Start";
        endPlay();
    }
})
