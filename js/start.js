Scene = 0;
s_Number = 0;
var select = new Array();


var input_loc = document.querySelector("#play_loc");
var input_char_name = document.querySelector("#char_name");
var input_char_talk = document.querySelector("#char_talk");
var input_button = document.querySelector("#next_button");


function get_answer(idx){
    input_loc.innerHTML = scr_List[1][Scene][s_Number].s_Loc;
    input_char_name.innerHTML = scr_List[1][Scene][s_Number].s_Name;
    input_char_talk.innerHTML = qna_List[0].Answer[idx];
    input_button.innerHTML = scr_List[1][Scene][s_Number].s_button;
    move_Number();
    
}


function get_selection() {
    var input_select = document.querySelector("#selection");
    var input_script = document.querySelector("#interaction");
    input_script.style.display = "none";
    input_select.style.display = "block";
    for (let i = 0; i < qna_List[0].Quest.length; i++) {
        var answer = document.createElement("button");
        answer.classList.add('answerList');
        answer.classList.add('my-1');
        answer.classList.add('mx-auto');
        input_select.appendChild(answer);
        answer.innerHTML = qna_List[0].Quest[i];     

        answer.addEventListener("click", function() {
            select.push(parseInt(i));
            console.log(select);
            input_select.style.display = "none";
            input_script.style.display = "flex";
            get_answer(i);       
        })
    }

    
}
//change bg 
function move_Scene() {
    Scene += 1;
}
// change char
function move_Number() {
    s_Number +=1;
    
}

function reset_Number() {
    s_Number = 0;
}

function next() {
    console.log(Scene, s_Number);
    var input_isselect = scr_List[1][Scene][s_Number].is_Select;
    console.log(input_isselect);
    
    input_loc.innerHTML = scr_List[1][Scene][s_Number].s_Loc;
    input_char_name.innerHTML = scr_List[1][Scene][s_Number].s_Name;
    
    if (input_isselect == 1) {
        get_selection(); 
    } else {
        input_char_talk.innerHTML = scr_List[1][Scene][s_Number].s_Script;
        input_button.innerHTML = scr_List[1][Scene][s_Number].s_button;
    }

    var Scene_length = scr_List[1][Scene].length;
    if (s_Number == parseInt(Scene_length-1)) {
        move_Scene();
        reset_Number();
    } else {
        move_Number();
    }

}

function play() {
    const p_landing = document.querySelector("#landing");
    const p_playing = document.querySelector("#play");
    p_landing.style.display = "none";
    p_playing.style.display = "block";

    input_loc.innerHTML = scr_List[0].s_Loc;
    input_char_name.innerHTML = scr_List[0].s_Name;
    input_char_talk.innerHTML = scr_List[0].s_Script;
    input_button.innerHTML = scr_List[0].s_button;

}