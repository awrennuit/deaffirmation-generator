$(document).ready(function() {
    getQuote();
});

function getQuote(){
    $.ajax({
        method: `GET`,
        url: `/quote`
    }).then(function(response){
        console.log('response:', response);
        renderQuote(response);
    }).catch(function(error){
    alert(`something went wrong`);
    console.log(error)
    });
}

function renderQuote(quote){
    $(`#quote-output`).empty();
    for(let i=0; i<quote.length; i++) {
        $(`#quote-output`).append(`<div>${quote[i].quote}</div>`);
        $(`#quote-output`).append(`<div>${quote[i].name}</div>`);        
    }
}