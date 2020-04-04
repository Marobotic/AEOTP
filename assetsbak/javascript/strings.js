var options = [
    set0 = [''],
    set1 = ['First Option', 'Second Option', 'Third Option']
];

function makeUL(array) {
    // Create the list element:
    var list = document.createElement('ul');

    for (var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(array[i]));

        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
}

// Add the contents of options[0] to #foo:
// document.getElementById('news').appendChild(makeUL(options[1]));



$(document).ready(function() {
    // $("#news").append(makeUL(options[0]));


    $("#Description").text("Aion: Echoes of the past is a 3.9 private server, dedicated to highlight the best parts past of Aion. We believe that if this game has been handled with care it would have become far more enjoyable, far addictive and even further more meaningful! The road to perfect is long, yet we managed to kill some of the bottlenecks of 3.9, in other words; we have taken 3.9 and improved it a little.");
    $("#Description_00").text("Be the Hero to earn your wings and conquer Atreia, to be allowed to experience full-content of the game, and to unfold your inner interests as our goal is appealling to all types of players.");
    $("#Description_01").text("Challenge yourself in hard dungeons with your friends, as the PVE content is massive. Evolve to the best and beat your opponents in our exclusive open-worlds to conquer the opposed faction with this server’s PVP content.");
    $("#Description_02").text("Go, travel, fly and explore all of the game’s content and see it’s unique beauty, all the 3.9 Aion maps do exist in our server.");
    $("#Description_03").text("Tired of only saving the world? You're allowed to craft with an acceptable rate for succeeding, so unlock your inner craftsmanship and be your own master of crafts!");
    $("#Description_04").text("You can explore, pvp, pve and conquer this world with your friends. There is not a single opportunity that would not allow you to achieve your goals with your friends. This is a vast community with players that may seek the same as you! So don’t be shy and meet new friends!");
    $("#Description_05").text("Do you like roleplaying? Then this Is the right server for YOU! Echoes of the past offers many functions, that enables players to role-play. One of the exclusive features are the housing in one of Atreia’s most beautiful places Oriel. You can get for free a studio for yourself, or even aim higher to live with your friend in a house? A mansion? Or even a palace? Housing also enable players to customise their city and their houses both architectural from the inside and outside. Not to mention the long list of already unlocked emotes to discover with your friends!");
    $("#Description_06").text("SO… Are you ready? Get ready to get IMMERSED and sucked in Atreia!");




    $(".home").text("Home");
    $(".downloads").text("Download");
    $(".donate").text("Donate");
    $(".support").text("Support");
    $(".leaderboards").text("Abyss Ranking");

    $(".siege_schedule").text("Siege Schedule");
    $(".about_us").text("About us");

$("#donate_button").text("Donate via Paypal");





});