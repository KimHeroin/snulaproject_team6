Scene = 0;
s_Number = 0;
var select = new Array();


var input_loc = document.querySelector("#play_loc");
var input_char_name = document.querySelector("#char_name");
var input_char_talk = document.querySelector("#char_talk");
var input_button = document.querySelector("#next_button");
var input_bg = document.getElementById("game_bg")
var input_img = document.getElementById("img_char");


function get_answer(idx){
    console.log(s_Number);
    move_Number();
    input_loc.innerHTML = scr_List[1][Scene][0].s_Loc;
    input_char_name.innerHTML = scr_List[1][Scene][s_Number].s_Name;
    input_char_talk.innerHTML = qna_List[0].Answer[idx];
    input_button.innerHTML = scr_List[1][Scene][s_Number].s_button;
    var char_name = scr_List[1][Scene][s_Number].s_Name;
    var img_url = 'images/game/' + char_name + '.png';
    input_img.src = img_url;
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
        answer.classList.add('my-3');
        answer.classList.add('mx-5');
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
    reset_Number();
    input_bg.style.backgroundImage = 'url("../images/bg/'+scr_List[1][Scene][s_Number].s_Loc+'.png")';

}
// change char
function move_Number() {
    s_Number +=1;
    
}

function reset_Number() {
    s_Number = 1;
}

function next() {
    var Scene_length = scr_List[1][Scene].length-1;
    console.log(Scene,s_Number);
    if (s_Number < parseInt(Scene_length)) {
        move_Number();
    } else {
        move_Scene();
        console.log("here");
    }
    var input_isselect = scr_List[1][Scene][s_Number].is_Select;
    var char_name = scr_List[1][Scene][s_Number].s_Name;
    var img_url = 'images/game/' + char_name + '.png';
    

    input_img.src = img_url;
    input_img.alt = [Scene,s_Number];

    input_char_name.innerHTML = char_name;

    new_loc = scr_List[1][Scene][0].s_Loc;
    input_loc.innerHTML = new_loc;
    input_bg.style.backgroundImage = 'url("images/bg/'+new_loc+'.png")';
    
    if (input_isselect == 1) {
        get_selection(); 
    } else {
        input_char_talk.innerHTML = scr_List[1][Scene][s_Number].s_Script;
        input_button.innerHTML = scr_List[1][Scene][s_Number].s_button;
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
    input_bg.style.backgroundImage = 'url("images/bg/'+scr_List[0].s_Loc+'.png")';
}