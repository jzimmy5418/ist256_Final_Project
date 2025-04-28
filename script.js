$(document).ready(function () {
    let $aboutText = $('#aboutText');
    let $aboutButton = $('#aboutButton');
    let $productsText = $('#productsText');
    let $productsButton = $('#productsButton');
    let $homeText = $('#homeText');
    let $homeButton = $('#homeButton');
    let $orderButton = $('#orderButton');

    let $gp59eScale = $('input[name="gp59eScale"]');
    let $gp59ePrice = $('#gp59ePrice');
    let $c44CabScale = $('input[name="c44CabScale"]');
    let $c44CabPrice = $('#c44CabPrice');
    let $admiralCabScale = $('input[name="admiralCabScale"]');
    let $admiralCabPrice = $('#admiralCabPrice');
    let $squadScale = $('input[name="squadScale"]');
    let $squadPrice = $('#squadPrice');
    let $gonCoverScale = $('input[name="gonCoverScale"]');
    let $gonCoverPrice = $('input[name="gonCoverPrice"]');
    let $rpm4cScale = $('input[name="rpm4cScale"]');
    let $rpm4cPrice = $('#rpm4cPrice');

    let descriptionList = [];
    let $c44Description = $('#c44Description');
    let $c44DescBtn = $('#c44DescBtn');
    let $c44Desc = 0;
    let $admiralDescription = $('#admiralDescription');
    let $admiralDescBtn = $('#admiralDescBtn');
    let $admiralDesc = 0;
    let $squadDescription = $('#squadDescription');
    let $squadDescBtn = $('#squadDescBtn');
    let $squadDesc = 0;
    let $gonDescription = $('#gonDescription');
    let $gonDescBtn = $('#gonDescBtn');
    let $gonDesc = 0;
    let $gp59Description = $('#gp59Description');
    let $gp59DescBtn = $('#gp59DescBtn');
    let $gp59Desc = 0;
    let $rpm4cDescription = $('#rpm4cDescription');
    let $rpm4cDescBtn = $('#rpm4cDescBtn');
    let $rpm4cDesc = 0;

    $gp59eScale.on('change', function () {
        let scale = $(this).val();
        if (scale==="N-Scale"){
            $gp59ePrice.html("$29.95")
        }
        else if (scale==="HO-Scale"){
            $gp59ePrice.html("$35.95")
        }
    })

    $c44CabScale.on('change', function () {
        let scale = $(this).val();
        if (scale==="N-Scale"){
            $c44CabPrice.html("$16.95")
        }
        else if (scale==="HO-Scale"){
            $c44CabPrice.html("$19.95")
        }
    })

    $admiralCabScale.on('change', function () {
        let scale = $(this).val();
        if (scale==="N-Scale"){
            $admiralCabPrice.html("$16.95")
        }
        else if (scale==="HO-Scale"){
            $admiralCabPrice.html("$19.95")
        }
    })

    $squadScale.on('change', function () {
        let scale = $(this).val();
        if (scale==="N-Scale"){
            $squadPrice.html("$16.95")
        }
        else if (scale==="HO-Scale"){
            $squadPrice.html("$19.95")
        }
    })

    $gonCoverScale.on('change', function () {
        let scale = $(this).val();
        if (scale==="N-Scale"){
            $gonCoverPrice.html("$20.95")
        }
        else if (scale==="HO-Scale"){
            $gonCoverPrice.html("$24.95")
        }
    })

    $rpm4cScale.on('change', function () {
        let scale = $(this).val();
        if (scale==="N-Scale"){
            $rpm4cPrice.html("$29.95")
        }
        else if (scale==="HO-Scale"){
            $rpm4cPrice.html("$35.95")
        }
    })

    $orderButton.on('click', function () {
        alert("Order has been successfully placed.");
    })

    $c44DescBtn.on('click', function () {
        if ($c44Desc === 0){
            $c44Description.show();
            $c44Desc = 1;
        }
        else if ($c44Desc === 1){
            $c44Description.hide();
            $c44Desc = 0;
        }
    })

    $admiralDescBtn.on('click', function () {
        if ($admiralDesc === 0){
            $admiralDescription.show();
            $admiralDesc = 1;
        }
        else if ($admiralDesc === 1){
            $admiralDescription.hide();
            $admiralDesc = 0;
        }
    })

    $squadDescBtn.on('click', function () {
        if ($squadDesc === 0){
            $squadDescription.show();
            $squadDesc = 1;
        }
        else if ($squadDesc === 1){
            $squadDescription.hide();
            $squadDesc = 0;
        }
    })

    $gonDescBtn.on('click', function () {
        if ($gonDesc === 0){
            $gonDescription.show();
            $gonDesc = 1;
        }
        else if ($gonDesc === 1){
            $gonDescription.hide();
            $gonDesc = 0;
        }
    })

    $gp59DescBtn.on('click', function () {
        if ($gp59Desc === 0){
            $gp59Description.show();
            $gp59Desc = 1;
        }
        else if ($gp59Desc === 1){
            $gp59Description.hide();
            $gp59Desc = 0;
        }
    })

    $rpm4cDescBtn.on('click', function () {
        if ($rpm4cDesc === 0){
            $rpm4cDescription.show();
            $rpm4cDesc = 1;
        }
        else if ($rpm4cDesc === 1){
            $rpm4cDescription.hide();
            $rpm4cDesc = 0;
        }
    })

    $aboutButton.click(function () {
        addButtonClasses();
        $aboutButton.removeClass('btn-info');
        $aboutButton.addClass('btn-outline-primary');
        $homeText.hide();
        $productsText.hide();
        $aboutText.show();
        console.log("About")
    })

    $homeButton.click(function () {
        addButtonClasses();
        $homeButton.removeClass('btn-info');
        $homeButton.addClass('btn-outline-primary');
        $productsText.hide();
        $aboutText.hide();
        $homeText.show();
        console.log("Home");
    })

    $productsButton.click(function () {
        $.ajax({
            url: "productDescription.json",
            type: "GET",
            crossDomain: true,
            success: function (data) {
                console.log(data);
                const descriptions = data.items;
                descriptions.forEach(function (line) {
                    descriptionList.push(line);
                });
                console.log(descriptionList);
                $c44Description.html(descriptionList[0]);
                $admiralDescription.html(descriptionList[1]);
                $squadDescription.html(descriptionList[2]);
                $gonDescription.html(descriptionList[3]);
                $gp59Description.html(descriptionList[4]);
                $rpm4cDescription.html(descriptionList[5]);
            },
            error: function (error) {
                console.log(error);
            }
        })
        addButtonClasses();
        $productsButton.removeClass("btn-info");
        $productsButton.addClass("btn-outline-primary");
        $aboutText.hide();
        $homeText.hide();
        $productsText.show();
        console.log("products")
    })

    function addButtonClasses(){
        $productsButton.removeClass("btn-outline-primary");
        $productsButton.addClass("btn-info");
        $homeButton.removeClass("btn-outline-primary");
        $homeButton.addClass("btn-info");
        $aboutButton.removeClass("btn-outline-primary");
        $aboutButton.addClass("btn-info");
    }
})