






$(document).ready(function() {




    $(".big_ass_login_thingy").hide();

    $(".download").click(function() {
        $(".inner-container").hide();
        $(".secondary_cool_ass_window").show();
        $(".secondary_cool_ass_info").show();
        $(".big_ass_login_thingy").hide();
    });

    $('#password2, #password').on('keyup', function() {
        if (($('#password2').val() == $('#password').val()) && ($('#password2').val() != '' && $('#password').val() != '')) {
            $('#message').html('Matching').css('color', 'green');
        } else
            $('#message').html('Not Matching').css('color', 'red');
    });

    $(".register").click(function() {
        window.location = "http://tiamatsreturn.com/register.php"
    });

    $(".login_register").click(function() {
        $(".register_form").hide();
        $(".secondary_cool_ass_info").hide();
        $(".big_ass_login_thingy").show();
        $('.register_mid_div').animate({ height: '250px' }, 500);
    });

    $(".logout").click(function() {
        $(".papyrus").show();
        $(".flux3").show();
        $(".leaderboard_button").show();
        $(".register").show();
        $(".login").show();
        $(".download").show();

        $(".flux4").hide();
    });
    $(".download").click(function() {
        window.location = "http://tiamatsreturn.com/download.php"
    });

    $(".FAQ").click(function() {
        window.location = "http://tiamatsreturn.com/FAQ.php"
    });

    $(".community").click(function() {

        window.location = "http://tiamatsreturn.com/community.php"
    });
    $(".SUPPORT_BUTTON").click(function() {
        window.location = "http://tiamatsreturn.com/support.php#main"
    });
    $(".features").click(function() {

        window.location = 'http://tiamatsreturn.com/features.php';
    });
    $(".logo_div").click(function() {
        window.location = 'http://tiamatsreturn.com/';
    });
    $('.leaderboard_button').hover(
        function() {
            var $this = $(this); // caching $(this)
            $this.data('initialText', $this.text());
            $this.text("Coming soon!");
        },
        function() {
            var $this = $(this); // caching $(this)
            $this.text($this.data('initialText'));
        }
    );

});
