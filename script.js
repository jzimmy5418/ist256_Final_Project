$(document).ready(function () {
    let $aboutText = $('#aboutText');
    let $aboutButton = $('#aboutButton');
    let $productsText = $('#productsText');
    let $productsButton = $('#productsButton');
    let $homeText = $('#homeText');
    let $homeButton = $('#homeButton');

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
        $homeText.hide();
        $productsText.hide();
        $aboutText.show();
        console.log("About")
    })

    $homeButton.click(function () {
        $productsText.hide();
        $aboutText.hide();
        $homeText.show();
        console.log("Home");
    })

    $productsButton.click(function () {
        $.ajax({
            url: "productDescriptions.txt",
            type: "GET",
            crossDomain: true,
            success: function (data) {
                console.log(data);
                const lines = data.trim().split("\n");
                lines.forEach(function (line) {
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
        $aboutText.hide();
        $homeText.hide();
        $productsText.show();
        console.log("products")
    })

})