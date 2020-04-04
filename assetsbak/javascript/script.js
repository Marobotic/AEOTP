var base_uri = "https://www.aioneotp.com/";
var base_dir = document.location.hostname;

function myFunction() {
    setInterval(function() {
        // console.log("boop");
        fetch(base_uri + "API/online.php").then(res => res.text()).then(res => document.getElementById("online").innerHTML = res + " Players Online");
    }, 15000);

    setInterval(function() {
        fetch(base_uri + "API/characters_created.php").then(res => res.text()).then(res => document.getElementById("characters").innerHTML = "Characters Created " + res);
    }, 15000);

    setInterval(function() {
        fetch(base_uri + "API/registered_accounts.php").then(res => res.text()).then(res => document.getElementById("registered_accounts").innerHTML = "Registered Accounts " + res);
    }, 15000);


    setInterval(function() {
        fetch(base_uri + "API/server_status.php").then(res => res.text()).then(res => document.getElementById("server_status").innerHTML = "Game Server: " + res);
    }, 15000);
}




$(document).ready(function() {

    fetch(base_uri + "API/server_status.php").then(res => res.text()).then(res => document.getElementById("server_status").innerHTML = "Game Server: " + res);
    fetch(base_uri + "API/online.php").then(res => res.text()).then(res => document.getElementById("online").innerHTML = res + " Players Online");
    fetch(base_uri + "API/characters_created.php").then(res => res.text()).then(res => document.getElementById("characters").innerHTML = "Characters Created " + res);
    fetch(base_uri + "API/registered_accounts.php").then(res => res.text()).then(res => document.getElementById("registered_accounts").innerHTML = "Registered Accounts " + res);

    $(".donate_one").hide();
    $(".vote_navigation").show();
    $(".news_navigation").hide();
    $(".statistics_navigation").hide();
    $(".changelog_navigation").hide();

    $(".news_tab").click(function() {

        $(".news_navigation").show();
        $(".statistics_navigation").hide();
        $(".changelog_navigation").hide();
        $(".vote_navigation").hide();
    });
    $(".statistics_tab").click(function() {
        $(".vote_navigation").hide();
        $(".statistics_navigation").show();
        $(".news_navigation").hide();
        $(".changelog_navigation").hide();
    });
    $(".changelog_tab").click(function() {
        $(".vote_navigation").hide();
        $(".changelog_navigation").show();
        $(".news_navigation").hide();
        $(".statistics_navigation").hide();

    });

    $(".vote_tab").click(function() {
        $(".vote_navigation").show();
        $(".changelog_navigation").hide();
        $(".news_navigation").hide();
        $(".statistics_navigation").hide();

    });



    $(".donation_text").text('Beer Lootbox');

    $("#one").click(function() {

        $(".donation_text").text('1 Beer Lootbox');
    });

    $("#five").click(function() {

        $(".donation_text").text('5 Beer Lootbox');
    });

    $("#ten").click(function() {

        $(".donation_text").text('10 Beer Lootbox');
    });

    $("#fifteen").click(function() {
        $(".donation_text").text('15 Beer Lootbox');
    });

    $("#twenty").click(function() {

        $(".donation_text").text('20 Beer Lootbox');
    });






    $(".login_container").hide();


    $(".Manastones").click(function() {

        window.location = base_uri + 'manastone';
    });
    $(".Statistics").click(function() {

        window.location = base_uri + 'statistics';
    });


    $(".home").click(function() {

        window.location = base_uri + '';
    });



    $(".potions_event").click(function() {

        window.location = base_uri + 'potion_event';
    });

    $(".events").click(function() {

        window.location = base_uri + 'events';
    });


    $(".scrolls_event").click(function() {

        window.location = base_uri + 'scroll_event';
    });


    $(".christmas_event").click(function() {

        window.location = base_uri + 'christmas_event';
    });


    $(".downloads").click(function() {

        window.location = base_uri + 'download';
    });

    $(".download").click(function() {
        e.preventDefault();
        window.location = 'https://repos.aioneotp.com/Client/Launcher/Echoes%20Of%20The%20past.exe';
    });


    $(".donate").click(function() {

        window.location = base_uri + 'donate';
    });



    $(".support").click(function() {
        window.location = base_uri + 'support';

    });

    $(".player_commands").click(function() {
        window.location = base_uri + 'player_commands';

    });




    $(".discord_side").click(function() {
        var url = "https://discord.gg/TwHYsaa";
        window.open(url, '_blank');

    });


    $(".facebook_side").click(function() {
        var url = "https://www.facebook.com/aeotp/";
        window.open(url, '_blank');

    });

    $(".discord").click(function() {
        var url = "https://discord.gg/TwHYsaa";
        window.open(url, '_blank');

    });


    $(".facebook").click(function() {
        var url = "https://www.facebook.com/aeotp/";
        window.open(url, '_blank');

    });


    $(".getting_started").click(function() {
        window.location = base_uri + 'starter_guide';

    });


    $(".Full_schedule").click(function() {

        window.location = base_uri + 'schedule_full';
    });


    $("#tickets_button").click(function() {

        window.location = base_uri + 'tickets';
    });


    $(".register").click(function() {

        window.location = base_uri + 'register';
    });


    $(".leaderboards").click(function() {

        window.location = base_uri + 'ap_ranking';
    });


    $(".siege_schedule").click(function() {

        window.location = base_uri + 'schedule';
    });


    $(".about_us").click(function() {

        window.location = base_uri + 'FAQ';
    });


    $(".leaderboards_side").click(function() {

        window.location = base_uri + 'ap_ranking';
    });


    $(".siege_schedule_side").click(function() {

        window.location = base_uri + 'schedule';
    });


    $(".about_us_side").click(function() {

        window.location = base_uri + 'FAQ';
    });
    $(".crafting").click(function() {

        window.location = base_uri + 'craft';
    });

    $(".AP").click(function() {

        window.location = base_uri + 'ap_ranking';
    });

    $('#download_torrent').click(function(e) {
        e.preventDefault();
        window.location = 'https://cdn.discordapp.com/attachments/317702390868606987/486754834423480350/TR_client_uncompressed.torrent';
    });


    $('#download_launcher').click(function(e) {
        e.preventDefault();
        window.location = 'https://repos.aioneotp.com/Client/Launcher/Echoes%20Of%20The%20past.exe';
    });




    $('#download_directX').click(function(e) {
        e.preventDefault();
        window.location = 'https://download.microsoft.com/download/8/4/A/84A35BF1-DAFE-4AE8-82AF-AD2AE20B6B14/directx_Jun2010_redist.exe';
    });





    $(".leaderboards_side")
        .mouseover(function() {
            $('.leaderboard_image').hide();

            $('.leaderboard_text').show();

        })
        .mouseout(function() {
            $('.leaderboard_image').show();
            $('.leaderboard_text').hide();
        });


    $(".siege_schedule_side")
        .mouseover(function() {
            $('.schedule_image').hide();

            $('.schedule_text').show();
        })
        .mouseout(function() {
            $('.schedule_image').show();
            $('.schedule_text').hide();
        });



    $(".about_us_side")
        .mouseover(function() {
            $('.about_image').hide();

            $('.about_text').delay(100).show();
        })
        .mouseout(function() {
            $('.about_image').show();
            $('.about_text').hide();
        });



    $(".discord_side")
        .mouseover(function() {
            $('.discord_image').hide();

            $('.about_text').delay(100).show();
        })
        .mouseout(function() {
            $('.discord_image').show();
            $('.about_text').hide();
        });
    $(".facebook_side")
        .mouseover(function() {
            $('.facebook_image').hide();

            $('.about_text').delay(100).show();
        })
        .mouseout(function() {
            $('.facebook_image').show();
            $('.about_text').hide();
        });

});



function hide_bundles() {
    document.getElementById("attack_bundle").style.display = "none";
    document.getElementById("crit_bundle").style.display = "none";
    document.getElementById("magical_bundle").style.display = "none";
}


function attack() {
    document.getElementById("attack").disabled = true;
    document.getElementById("crit").disabled = false;
    document.getElementById("magical").disabled = false;


    document.getElementById("attack_bundle").style.display = "block";
    document.getElementById("crit_bundle").style.display = "none";
    document.getElementById("magical_bundle").style.display = "none";
    document.getElementById("bundle_text").innerHTML = "//dual attack";

}

function crit() {
    document.getElementById("attack").disabled = false;
    document.getElementById("crit").disabled = true;
    document.getElementById("magical").disabled = false;


    document.getElementById("attack_bundle").style.display = "none";
    document.getElementById("crit_bundle").style.display = "block";
    document.getElementById("magical_bundle").style.display = "none";
    document.getElementById("bundle_text").innerHTML = "//dual crit";

}


function magical() {
    document.getElementById("attack").disabled = false;
    document.getElementById("crit").disabled = false;
    document.getElementById("magical").disabled = true;


    document.getElementById("attack_bundle").style.display = "none";
    document.getElementById("crit_bundle").style.display = "none";
    document.getElementById("magical_bundle").style.display = "block";
    document.getElementById("bundle_text").innerHTML = "//dual magical";
}