var maxValue;  
var minValue;
var cards;


var updated = setInterval(updateCards ,1000);
function updateCards() {
    cards = document.querySelectorAll(".catalogo_query");
}

/* Slider */
(function() {

    function addSeperator(nStr) {
        nStr += '';
        var x = nStr.split('.');
        var x1 = x[0];
        var x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + '.' + '$2');
        }



        return x1 + x2;
    }

    function rangeInputChangeEventHandler(e){
        var rangeGroup = $(this).attr('name'),
        minBtn = $(this).parent().children('.min'),
        maxBtn = $(this).parent().children('.max'),
        range_min = $(this).parent().children('.range_min'),
        range_max = $(this).parent().children('.range_max'),
        minVal = parseInt($(minBtn).val()),
        maxVal = parseInt($(maxBtn).val()),
        origin_min = $('#origin_min').attr('class');
        origin_max = $('#origin_max').attr('class');

        if(origin_min === 'min' && minVal > maxVal-5){
            $(minBtn).val(maxVal-5);
        }

        var valueMax = addSeperator(maxVal*50);
        var valueMin = addSeperator(minVal*50);

        var minVal = parseInt($(minBtn).val());
        $(range_min).html('R$ ' + valueMin);

        queryValue(maxVal*50, minVal*50);

        if(origin_max === 'max' && maxVal-5 < minVal){
            $(maxBtn).val(5+ minVal);
        }
        var maxVal = parseInt($(maxBtn).val());
        $(range_max).html('R$ ' + valueMax);
    }

    $('input[type="range"]').on( 'input', rangeInputChangeEventHandler);
})();

function queryValue(filterMax, filterMin){
    maxValues = document.querySelectorAll(".max-value");  
    minValues = document.querySelectorAll(".min-value");




    maxValues.forEach(function(maxValue, index) {
        var min = minValues[index].textContent;
        var max = maxValue.textContent;

        if(filterMin >= min && filterMax <= max){
            cards[index].style.display = "flex";
        }else{
            cards[index].style.display = 'none';
        
        }

    });

}