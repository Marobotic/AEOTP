$(document).ready(function() {

    $(".donate_one").hide();

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


        $(".donate_button").click(function() {
                // Enable #x
            $(".donate_button").prop("disabled", false);
            // Disable #x
            $(this).prop("disabled", true);
            console.log("beep");

        });

    //  $(".download").click(function() {
    //      e.preventDefault();
    //      window.location = 'https://repos.aioneotp.com/Client/Launcher/Echoes%20Of%20The%20past.exe';
    //  });

    //  $('#download_torrent').click(function(e) {
    //      e.preventDefault();
    //      window.location = 'https://cdn.discordapp.com/attachments/317702390868606987/486754834423480350/TR_client_uncompressed.torrent';
    //  });

    //  $('#download_launcher').click(function(e) {
    //      e.preventDefault();
    //      window.location = 'https://repos.aioneotp.com/Client/Launcher/Echoes%20Of%20The%20past.exe';
    //  });

    //  $('#download_directX').click(function(e) {
    //      e.preventDefault();
    //      window.location = 'https://download.microsoft.com/download/8/4/A/84A35BF1-DAFE-4AE8-82AF-AD2AE20B6B14/directx_Jun2010_redist.exe';
    //  });


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

});