//  perspective * camera * model * local

function to_string(m){
    let s = m[0];

    for(let i = 1; i < 16; i++){
        s += "," + m[i];

    }
    return s;
}

function cos(x){return Math.cos(x);}
function sin(x){return Math.sin(x);}
function rad(x){return x * Math.PI/180;}

function rotate(face){
    let r = window.innerHeight*0.8/2;
    //let face = Math.floor(Math.random() * 5)+1;

    switch(face){
        case 1: $(".model ").css({transform: "translateZ(-"+r+"px) rotateX(0deg) rotateY(-90deg) rotateZ(0deg)"}); // 1
        break;
        case 2: $(".model ").css({transform: "translateZ(-"+r+"px) rotateX(0deg) rotateY( 90deg) rotateZ(0deg)"}); // 2
        break;
        case 3: $(".model ").css({transform: "translateZ(-"+r+"px) rotateX(270deg) rotateY(180deg) rotateZ(180deg)"}); // 3
        break;
        case 4: $(".model ").css({transform: "translateZ(-"+r+"px) rotateX(270deg) rotateY(0deg) rotateZ(0deg)"}); // 4
        break;
        case 5: $(".model ").css({transform: "translateZ(-"+r+"px) rotateX( 0deg) rotateY(0) rotateZ(0deg)"}); // 5
        break;
        case 6: $(".model ").css({transform: "translateZ(-"+r+"px) rotateX(180deg) rotateY(0) rotateZ(180deg)"}); // 6
        break;
    }
}


$(document).ready(function(){
    console.log("loaded")

    /*
    let angle = 0;
    setInterval(function(){
        $(".model").css({transform: "rotateX(" + angle + "deg)"})
        angle = angle + 1;
    },25)
    */

    $(".face-buttons > button").click(function(e){
        let id = $(e.currentTarget).prop("id");
        rotate(parseInt(id));
    })

    /*
   setInterval(function(){
        let face = Math.floor(Math.random() * 5)+1;
        rotate(face);
        //$(".model ").css({transform: "rotate3d(1,1,.25," + angle +"deg)"});
        //$(".face1").css({transform: "rotateX(" + 45 +"deg)"});
    },1000)
    */

})

    //$(".model ").css({transform: "rotateX(0deg) rotateY(-90deg) rotateZ(0deg)"}); // 1
    //$(".model ").css({transform: "rotateX(0deg) rotateY( 90deg) rotateZ(0deg)"}); // 2

    //$(".model ").css({transform: "rotateX(270deg) rotateY(180deg) rotateZ(180deg)"}); // 3
    //$(".model ").css({transform: "rotateX(270deg) rotateY(0deg) rotateZ(0deg)"}); // 4

    //$(".model ").css({transform: "rotateX( 0deg) rotateY(0) rotateZ(0deg)"}); // 5
    //$(".model ").css({transform: "rotateX(180deg) rotateY(0) rotateZ(180deg)"}); // 6