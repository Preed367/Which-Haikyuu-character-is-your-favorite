$("button").click(function() {
    let favChar = $(".favChar").val();
    console.log(favChar);
    let year = $(".year").val();
    console.log(year);

    let fourK = 0 + 1;


    $(".results").show();
    fourK = fourK + 1;
    $(".fourK").text("You tested yourself " + fourK + " times");

    if (favChar === "Hinata" && year === "first") {
        $(".results").text('You are first year and your favorite Karasuno player is Ryuunosuke Tanaka.');
        console.log(favChar);
    } else if (favChar === "Hinata" && year === "third") {
        $(".results").text('You are third year and your favorite Karasuno player is Daichi Sawamura.');
        console.log(favChar);
    } else if (favChar === "Tsukki" && year === "third") {
        $(".results").text('You are third year and your favorite Karasuno player is Koshi Sugawara.');
        console.log(favChar);
    } else if (favChar === "Tsukki" && year === "first") {
        $(".results").text('You are first year and your favorite Karasuno player is Tobio Kageyama.');
        console.log(favChar);
    }
});