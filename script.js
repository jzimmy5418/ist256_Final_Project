$(document).ready(function () {
    let $aboutText = $('#aboutText');
    let $aboutButton = $('#aboutButton');
    let $productsText = $('#productsText');
    let $productsButton = $('#productsButton');
    let $homeText = $('#homeText');
    let $homeButton = $('#homeButton');

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
        $aboutText.hide();
        $homeText.hide();
        $productsText.show();
        console.log("products")
    })
})