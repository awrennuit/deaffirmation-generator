$(document).ready(function() {
    getQuote();
    $(`#quote-output`).on(`click`, `#refresh-btn`, getQuote);
});

function getQuote(){
    $.ajax({
        method: `GET`,
        url: `/quote`
    }).then(function(response){
        renderQuote(response);
    }).catch(function(error){
    alert(`something went wrong`);
    console.log(error)
    });
}

function renderQuote(quote){
    $(`#quote-output`).empty();
        $(`#quote-output`).append(`<div>${quote[0].quote}</div>`);
        $(`#quote-output`).append(`<div>${quote[0].name}</div>`);
        $(`#quote-output`).append(`<button id="refresh-btn">New quote</button>`);
}