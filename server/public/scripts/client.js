$(document).ready(function() {
    getQuote();
    $(`#btn-output`).on(`click`, `#refresh-btn`, incrementCount);
});

let count = 0;

function getBackground(){
    $.ajax({
        method: `GET`,
        url: `/quote/bg`
    }).then(function(response){
        renderBackground(response);
    }).catch(function(error){
    alert(`something went wrong`);
    console.log(error)
    });
}

function getQuote(){
    $.ajax({
        method: `GET`,
        url: `/quote`
    }).then(function(response){
        getBackground();
        renderQuote(response);
    }).catch(function(error){
    alert(`something went wrong`);
    console.log(error)
    });
}

function incrementCount(){
    count++;
    getQuote();
    if(count % 10 == 0){
        toggleText();
    }
    else{
        $(`#quote-output`).removeClass(`font-on`);
    }
}

function renderBackground(bg){
    console.log('bg', bg);
    let arr = bg[0].name;
    let img = arr.replace(/"/g,"");
    console.log(img);
    let $main = $(`#quote-output`);
    $main.css("background-image", `url(../images/${img})`);
}

function renderQuote(quote){
    let $main = $(`#quote-output`)
    $main.empty();
    let $el = $main.append(`<div id="main-output"></div>`)
    $el.append(`<div class="text">${quote[0].quote}</div>`);
    $el.append(`<div class="text">${quote[0].name}</div>`);
    $main.append($el);
    $(`#btn-output`).append(`<button id="refresh-btn">New quote ${count}</button>`);
}

function toggleText(){
    console.log('in count');
    $(`#quote-output`).toggleClass(`font-on`);
}