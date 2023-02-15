//variable set
let a = 0 //play & pause
let b = 0 //undertitle 1
let c = 0 //undertitle 2
let d = 0 //undertitle 3
let e = 0 //serch
let i = 0 //animation time_1
let j = 0 //animation time_2



//import
//body
let body = document.body;
//under title 1
let background_3 = document.getElementById("background_3");
let background_4 = document.getElementById("background_4");
let undertitle_1 = document.getElementById("undertitle_1");
let for_undertitle_1_1 = document.getElementById("for_undertitle_1_1");
let for_undertitle_1_2 = document.getElementById("for_undertitle_1_2");
let for_undertitle_1_3 = document.getElementById("for_undertitle_1_3");
//under title 2
let undertitle_2 = document.getElementById("undertitle_2");
let for_undertitle_2_1 = document.getElementById("for_undertitle_2_1");
let for_undertitle_2_2 = document.getElementById("for_undertitle_2_2");
let for_undertitle_2_3 = document.getElementById("for_undertitle_2_3");
//under title 3
let undertitle_3 = document.getElementById("undertitle_3");
let for_undertitle_3_1 = document.getElementById("for_undertitle_3_1");
let for_undertitle_3_2 = document.getElementById("for_undertitle_3_2");
let for_undertitle_3_3 = document.getElementById("for_undertitle_3_3");
//title background
let title_background_2 = document.getElementById("title_background_2");
//box 1
let b1i1 = document.getElementById("item_1");
let b1i2 = document.getElementById("item_2");
let b1i3 = document.getElementById("item_3");
let b1i4 = document.getElementById("item_4");
let b1i5 = document.getElementById("item_5");
let for_b1i5_box = document.getElementById("for_b1i5_box");
let for_b1i5_button = document.getElementById("for_b1i5_button")
//box 2
let b2i1 = document.getElementById("box_2_item_1");
let b2i2 = document.getElementById("box_2_item_2");
let b2i3 = document.getElementById("box_2_item_3");
let b2i4 = document.getElementById("box_2_item_4");
let b2i5 = document.getElementById("box_2_item_5");
let underline = document.getElementsByClassName("underline");
//lower left
let lower_left_Chinese = document.getElementById("lower_left_Chinese");
let lower_left_English = document.getElementById("lower_left_English");
let lower_left_triangle = document.getElementById("lower_left_triangle");
let lower_left_circle = document.getElementById("lower_left_circle");
let lower_left_small_circle_1 = document.getElementById("lower_left_small_circle_1");
let lower_left_small_circle_2 = document.getElementById("lower_left_small_circle_2");
let lower_left_small_circle_3 = document.getElementById("lower_left_small_circle_3");
let lower_left_small_circle_4 = document.getElementById("lower_left_small_circle_4");


//lower right
let lower_right = document.getElementById("lower_right");
let lower_right_font = document.getElementById("lower_right_font");
//animation
let time = setInterval(timer,7000);
function timer(){
    i += 1
    if(i % 2 == 1){
        lower_left_Chinese.innerText = "臺大永續"
        lower_left_English.innerText = "sustainable NTU"
    }
    else{
        lower_left_Chinese.innerText = "開創未來"
        lower_left_English.innerText = "Pioneering the Future"
    }

    if(i % 4 == 1){
        lower_left_small_circle_2.style.opacity = 1;
        lower_left_small_circle_1.style.opacity = 0.5;
        lower_left_small_circle_3.style.opacity = 0.5;
        lower_left_small_circle_4.style.opacity = 0.5;
        body.style.background = "url(image/cover_2.jpeg)";
        body.style.backgroundSize = "cover";
    }
    else if(i % 4 == 2){
        lower_left_small_circle_3.style.opacity = 1;
        lower_left_small_circle_1.style.opacity = 0.5;
        lower_left_small_circle_2.style.opacity = 0.5;
        lower_left_small_circle_4.style.opacity = 0.5;
        body.style.background = "url(image/cover_3.jpeg)"
        body.style.backgroundSize = "cover";
    }
    else if(i % 4 == 3){
        lower_left_small_circle_4.style.opacity = 1;
        lower_left_small_circle_1.style.opacity = 0.5;
        lower_left_small_circle_2.style.opacity = 0.5;
        lower_left_small_circle_3.style.opacity = 0.5;
        body.style.background = "url(image/cover_4.jpeg)"
        body.style.backgroundSize = "cover";
    }
    else if(i % 4 == 0){
        lower_left_small_circle_1.style.opacity = 1;
        lower_left_small_circle_2.style.opacity = 0.5;
        lower_left_small_circle_3.style.opacity = 0.5;
        lower_left_small_circle_4.style.opacity = 0.5;
        body.style.background = "url(image/cover_1.jpeg)"
        body.style.backgroundSize = "cover";
    }
    console.log(i)
}


//event listener
//box 1
b1i3.addEventListener("mouseover",function(){
    this.style.color = "#990000";
    body.style.cursor = "pointer";
});
b1i3.addEventListener("mouseout",function(){
    this.style.color = "black";
    body.style.cursor = "default";
});

b1i5.addEventListener("mouseover",function(){
    this.style.color = "#990000";
    body.style.cursor = "pointer";
});
b1i5.addEventListener("mouseout",function(){
    this.style.color = "black";
    body.style.cursor = "default";
});
b1i5.addEventListener("click",function(){
    e++;
    e = e % 2;
    if(e == 1){
        this.style.color = "#990000";
        for_b1i5_box.style.zIndex = "10";
        for_b1i5_box.style.opacity = 1;
        for_b1i5_button.style.zIndex = "10";
        for_b1i5_button.style.opacity = 1;
    }
    else if(e == 0){
        this.style.color = "black";
        for_b1i5_box.style.zIndex = "0";
        for_b1i5_box.style.opacity = 0;
        for_b1i5_button.style.zIndex = "0";
        for_b1i5_button.style.opacity = 0;
    }
})
for_b1i5_button.addEventListener("mouseover",function(){
    body.style.cursor = "pointer";
})
for_b1i5_button.addEventListener("mouseleave",function(){
    body.style.cursor = "default";
})
//box 2
b2i4.addEventListener("mouseover",function(){
    b = 0;
    c = 0;
    d = 0;
    title_background_2.style.opacity = 1;
    title_background_2.style.borderBottomColor = "black";
})
b2i4.addEventListener("mouseleave",function(){
    title_background_2.style.opacity = 0;
    title_background_2.style.borderBottomColor = "#0000";
})

b2i5.addEventListener("mouseover",function(){
    b = 0;
    c = 0;
    d = 0;
    title_background_2.style.opacity = 1;
    title_background_2.style.borderBottomColor = "black";
})
b2i5.addEventListener("mouseleave",function(){
    title_background_2.style.opacity = 0;
    title_background_2.style.borderBottomColor = "#0000";
})





b2i1.addEventListener("mouseover",function(){
    b = 1;
    undertitle_1.style.opacity = 1;
    title_background_2.style.opacity = 1;
    this.style.color = "#990000";
    this.style.paddingBottom = "30px";
    this.style.borderBottomColor = "#990000";
    this.style.borderBottomStyle = "solid";
    this.style.borderBottomWidth = "4px";
    b2i2.style.border = "none";
    b2i3.style.border = "none";
    title_background_2.style.borderBottomColor = "black";
    undertitle_1.style.zIndex = "10";
    undertitle_2.style.zIndex = "0";
    undertitle_3.style.zIndex = "0";
    undertitle_2.style.opacity = 0;
    undertitle_3.style.opacity = 0;
});
b2i1.addEventListener("mouseleave",function(){
    this.style.paddingBottom = "0px";
    this.style.borderBottomColor = "#0000";
    undertitle_1.style.opacity = 0;
    title_background_2.style.opacity = 0;
})
undertitle_1.addEventListener("mouseover",function(){
    if(b == 1){
        undertitle_1.style.opacity = 1;
        title_background_2.style.opacity = 1;
        b2i1.style.paddingBottom = "30px";
        b2i1.style.borderBottomColor = "#990000";
        b2i1.style.borderBottomStyle = "solid";
        b2i1.style.borderBottomWidth = "4px";
    }
    else{
        undertitle_1.style.opacity = 0;
        title_background_2.style.opacity = 0;
    }
})






b2i2.addEventListener("mouseover",function(){
    c = 1;
    undertitle_2.style.opacity = 1;
    title_background_2.style.opacity = 1;
    this.style.color = "#990000";
    this.style.paddingBottom = "30px";
    this.style.borderBottomColor = "#990000";
    this.style.borderBottomStyle = "solid";
    this.style.borderBottomWidth = "4px";
    b2i1.style.border = "none";
    b2i3.style.border = "none";
    title_background_2.style.borderBottomColor = "black";
    undertitle_1.style.zIndex = "0";
    undertitle_2.style.zIndex = "10";
    undertitle_3.style.zIndex = "0";
    undertitle_1.style.opacity = 0;
    undertitle_3.style.opacity = 0;
    console.log("c = " + c); 
});
b2i2.addEventListener("mouseleave",function(){
    this.style.paddingBottom = "0px";
    this.style.borderBottomColor = "#0000";
    undertitle_2.style.opacity = 0;
    title_background_2.style.opacity = 0;
})
undertitle_2.addEventListener("mouseover",function(){
    if(c == 1){
        undertitle_2.style.opacity = 1;
        title_background_2.style.opacity = 1;
        b2i2.style.paddingBottom = "30px";
        b2i2.style.borderBottomColor = "#990000";
        b2i2.style.borderBottomStyle = "solid";
        b2i2.style.borderBottomWidth = "4px";
        title_background_2.style.borderBottomColor = "black";
        undertitle_2.style.zIndex = "10";
    }
    else{
        undertitle_2.style.opacity = 0;
        title_background_2.style.opacity = 0;
    }
})





b2i3.addEventListener("mouseover",function(){
    d = 1;
    undertitle_3.style.opacity = 1;
    title_background_2.style.opacity = 1;
    this.style.color = "#990000";
    this.style.paddingBottom = "30px";
    this.style.borderBottomColor = "#990000";
    this.style.borderBottomStyle = "solid";
    this.style.borderBottomWidth = "4px";
    b2i1.style.border = "none";
    b2i2.style.border = "none";
    title_background_2.style.borderBottomColor = "black";
    undertitle_1.style.zIndex = "0";
    undertitle_2.style.zIndex = "0";
    undertitle_3.style.zIndex = "10";
    undertitle_1.style.opacity = 0;
    undertitle_2.style.opacity = 0;
    console.log("d = " + d); 
});
b2i3.addEventListener("mouseleave",function(){
    this.style.paddingBottom = "0px";
    this.style.borderBottomColor = "#0000";
    undertitle_3.style.opacity = 0;
    title_background_2.style.opacity = 0;
})
undertitle_3.addEventListener("mouseover",function(){
    if(d == 1){
        undertitle_3.style.opacity = 1;
        title_background_2.style.opacity = 1;
        b2i3.style.paddingBottom = "30px";
        b2i3.style.borderBottomColor = "#990000";
        b2i3.style.borderBottomStyle = "solid";
        b2i3.style.borderBottomWidth = "4px";
        title_background_2.style.borderBottomColor = "black";
        undertitle_2.style.zIndex = "10";
    }
    else{
        undertitle_3.style.opacity = 0;
        title_background_2.style.opacity = 0;
    }
})




background_3.addEventListener("mouseover",function(){
    b = 0;
    c = 0;
    d = 0;
    undertitle_1.style.opacity = 0;
    undertitle_2.style.opacity = 0;
    undertitle_3.style.opacity = 0;
    title_background_2.style.opacity = 0;
    b2i1.style.paddingBottom = "0px";
    b2i1.style.borderBottomColor = "#0000";
    b2i2.style.paddingBottom = "0px";
    b2i2.style.borderBottomColor = "#0000";
    b2i3.style.paddingBottom = "0px";
    b2i3.style.borderBottomColor = "#0000";
    undertitle_1.style.zIndex = "0";
    undertitle_2.style.zIndex = "0";
    undertitle_3.style.zIndex = "0";
    console.log(b);

})

background_4.addEventListener("mouseover",function(){
    b = 0;
    c = 0;
    d = 0;
    undertitle_1.style.opacity = 0;
    undertitle_2.style.opacity = 0;
    undertitle_3.style.opacity = 0;
    title_background_2.style.opacity = 0;
    b2i1.style.paddingBottom = "0px";
    b2i1.style.borderBottomColor = "#0000";
    b2i2.style.paddingBottom = "0px";
    b2i2.style.borderBottomColor = "#0000";
    b2i3.style.paddingBottom = "0px";
    b2i3.style.borderBottomColor = "#0000";
    undertitle_1.style.zIndex = "0";
    undertitle_2.style.zIndex = "0";
    undertitle_3.style.zIndex = "0";
    console.log(b);
})

//play & pause
lower_left_circle.addEventListener("mouseover",function(){
    this.style.backgroundColor = "#990000";
    this.style.borderColor = "#990000"
    lower_left_triangle.style.borderLeftColor = "#fff";
    lower_left_triangle.style.borderRightColor = "#fff";
    body.style.cursor = "pointer";
});
lower_left_circle.addEventListener("mouseleave",function(){
    this.style.backgroundColor = "#fff"
    this.style.borderColor = "black"
    lower_left_triangle.style.borderLeftColor = "black";
    lower_left_triangle.style.borderRightColor = "black";
    body.style.cursor= "default";
});

lower_left_triangle.addEventListener("mouseover",function(){
    lower_left_circle.style.backgroundColor = "#990000"
    lower_left_circle.style.borderColor = "#990000"
    this.style.borderLeftColor = "#fff";
    this.style.borderRightColor = "#fff";
    body.style.cursor = "pointer";
});
lower_left_triangle.addEventListener("mouseleave",function(){
    lower_left_circle.style.backgroundColor = "#fff"
    lower_left_circle.style.borderColor = "black"
    this.style.borderLeftColor = "black"
    this.style.borderRightColor = "black"
    body.style.cursor= "default";
});

lower_left_triangle.addEventListener("click",function(){
    a +=1;
    if(a % 2 == 1){
        this.style.position = "fixed";
        this.style.width = "0px";
        this.style.height = "0px";
        this.style.bottom = "48px";
        this.style.left = "60px";
        this.style.borderTopColor = "transperent";
        this.style.borderTopStyle = "solid";
        this.style.borderTopWidth = "9px";
        this.style.borderBottomColor = "transperent";
        this.style.borderBottomStyle = "solid";
        this.style.borderBottomWidth = "9px";
        this.style.borderLeftColor = "white";
        this.style.borderLeftStyle = "solid";
        this.style.borderLeftWidth = "15px";
        this.style.borderRightColor = "#0000";
        this.style.borderRightStyle = "none";
        this.style.borderRightWidth = "transperent";
        this.style.color = "transperent";
        clearInterval(time)
    }
    else{
        this.style.position = "fixed";
        this.style.bottom = "48px";
        this.style.left = "61px";
        this.style.width = "5px";
        this.style.height = "20px";
        this.style.color = "white";
        this.style.borderLeftColor = "white";
        this.style.borderLeftStyle = "solid";
        this.style.borderLeftWidth = "2px";
        this.style.borderRightColor = "white";
        this.style.borderRightStyle = "solid";
        this.style.borderRightWidth = "2px";
        this.style.borderTopColor = "#0000";
        this.style.borderTopStyle = "none";
        this.style.borderTopWidth = "transperent";
        this.style.borderBottomColor = "#0000";
        this.style.borderBottomStyle = "none";
        this.style.borderBottomWidth = "transperent";
        let time = setInterval(timer,7000);
        timer()
    }
    console.log(a)
})

lower_left_circle.addEventListener("click",function(){
    a +=1;
    if(a % 2 == 1){
        lower_left_triangle.style.position = "fixed";
        lower_left_triangle.style.width = "0px";
        lower_left_triangle.style.height = "0px";
        lower_left_triangle.style.bottom = "48px";
        lower_left_triangle.style.left = "60px";
        lower_left_triangle.style.borderTopColor = "transperent";
        lower_left_triangle.style.borderTopStyle = "solid";
        lower_left_triangle.style.borderTopWidth = "9px";
        lower_left_triangle.style.borderBottomColor = "transperent";
        lower_left_triangle.style.borderBottomStyle = "solid";
        lower_left_triangle.style.borderBottomWidth = "9px";
        lower_left_triangle.style.borderLeftColor = "white";
        lower_left_triangle.style.borderLeftStyle = "solid";
        lower_left_triangle.style.borderLeftWidth = "15px";
        lower_left_triangle.style.borderRightColor = "#0000";
        lower_left_triangle.style.borderRightStyle = "none";
        lower_left_triangle.style.borderRightWidth = "transperent";
        lower_left_triangle.style.color = "transperent";
        clearInterval(time)
    }
    else{
        lower_left_triangle.style.position = "fixed";
        lower_left_triangle.style.bottom = "48px";
        lower_left_triangle.style.left = "61px";
        lower_left_triangle.style.width = "5px";
        lower_left_triangle.style.height = "20px";
        lower_left_triangle.style.color = "white";
        lower_left_triangle.style.borderLeftColor = "white";
        lower_left_triangle.style.borderLeftStyle = "solid";
        lower_left_triangle.style.borderLeftWidth = "2px";
        lower_left_triangle.style.borderRightColor = "white";
        lower_left_triangle.style.borderRightStyle = "solid";
        lower_left_triangle.style.borderRightWidth = "2px";
        lower_left_triangle.style.borderTopColor = "#0000";
        lower_left_triangle.style.borderTopStyle = "none";
        lower_left_triangle.style.borderTopWidth = "transperent";
        lower_left_triangle.style.borderBottomColor = "#0000";
        lower_left_triangle.style.borderBottomStyle = "none";
        lower_left_triangle.style.borderBottomWidth = "transperent";
        let time = setInterval(timer,7000);
        timer();
    }
    console.log(a)
})






//small crcle
lower_left_small_circle_1.addEventListener("click",function(){
    i = -1;
    console.log(i);
    timer();
})
lower_left_small_circle_2.addEventListener("click",function(){
    i = 0;
    console.log(i);
    timer();
})
lower_left_small_circle_3.addEventListener("click",function(){
    i = 1;
    console.log(i);
    timer();
})
lower_left_small_circle_4.addEventListener("click",function(){
    i = 2;
    console.log(i);
    timer();
})

//small circle
lower_left_small_circle_1.addEventListener('mouseover',function(){
    body.style.cursor = "pointer";
    this.style.opacity = 1
})
lower_left_small_circle_1.addEventListener("mouseout",function(){
    body.style.cursor= "default";
    this.style.opacity = 0.5
    if(i % 4 == 0){
        lower_left_small_circle_1.style.opacity = 1;
        lower_left_small_circle_4.style.opacity = 0.5;
    }
})
lower_left_small_circle_2.addEventListener('mouseover',function(){
    body.style.cursor = "pointer";
    this.style.opacity = 1
})
lower_left_small_circle_2.addEventListener("mouseout",function(){
    body.style.cursor= "default";
    this.style.opacity = 0.5
    if(i % 4 == 1){
        lower_left_small_circle_2.style.opacity = 1;
        lower_left_small_circle_1.style.opacity = 0.5;
    }
})
lower_left_small_circle_3.addEventListener('mouseover',function(){
    body.style.cursor = "pointer";
    this.style.opacity = 1;
})
lower_left_small_circle_3.addEventListener("mouseout",function(){
    body.style.cursor = "default";
    this.style.opacity = 0.5
    if(i % 4 == 2){
        lower_left_small_circle_3.style.opacity = 1;
        lower_left_small_circle_2.style.opacity = 0.5;
    }
})
lower_left_small_circle_4.addEventListener('mouseover',function(){
    body.style.cursor= "pointer";
    this.style.opacity = 1
})
lower_left_small_circle_4.addEventListener("mouseout",function(){
    body.style.cursor= "default";
    this.style.opacity = 0.5;
    if(i % 4 == 3){
        lower_left_small_circle_4.style.opacity = 1;
        lower_left_small_circle_3.style.opacity = 0.5;
    }
})

//lower right
lower_right.addEventListener("mouseover",function(){
    body.style.cursor ="pointer";
    lower_right_font.style.top = "48px";
    clearInterval(time_2);
})
lower_right.addEventListener("mouseleave",function(){
    body.style.cursor = "default";
    let time_2 = setInterval(timer_2,90);
})
lower_right_font.addEventListener("mouseover",function(){
    body.style.cursor = "pointer";
    lower_right_font.style.top = "48px";
    clearInterval(time_2);
})

let time_2 = setInterval(timer_2,90);
console.log("j =" + j)
function timer_2(){
    j++;
    j = j % 10;
    if(j<=5){
        console.log("j =" + j)
        lower_right_font.style.top =(48 - j) + "px";//43
    }
    else if(j>5 && j <= 10){
        console.log("j1 =" + j);
        lower_right_font.style.top =(38 + j) + "px";//53
    }
}

