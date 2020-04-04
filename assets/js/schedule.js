    var x = new Date();
    x.setDate(x.getDate() + ((5 - x.getDay()) % 10 + 7) % 1);

    // console.log(x);

    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date();
    var n = d.getDay();

    function Today() {

        if (n == 0) {
            $('.Sunday').show();
            $('.Monday').hide();
            $('.Tuesday').hide();
            $('.Wednesday').hide();
            $('.Thursday').hide();
            $('.Friday').hide();
            $('.Saturday').hide();
        } else if (n == 1) {
            $('.Sunday').hide();
            $('.Monday').show();
            $('.Tuesday').hide();
            $('.Wednesday').hide();
            $('.Thursday').hide();
            $('.Friday').hide();
            $('.Saturday').hide();
        } else if (n == 2) {
            $('.Sunday').hide();
            $('.Monday').hide();
            $('.Tuesday').show();
            $('.Wednesday').hide();
            $('.Thursday').hide();
            $('.Friday').hide();
            $('.Saturday').hide();
        } else if (n == 3) {
            $('.Sunday').hide();
            $('.Monday').hide();
            $('.Tuesday').hide();
            $('.Wednesday').show();
            $('.Thursday').hide();
            $('.Friday').hide();
            $('.Saturday').hide();
        } else if (n == 4) {
            $('.Sunday').hide();
            $('.Monday').hide();
            $('.Tuesday').hide();
            $('.Wednesday').hide();
            $('.Thursday').show();
            $('.Friday').hide();
            $('.Saturday').hide();
        } else if (n == 5) {
            $('.Sunday').hide();
            $('.Monday').hide();
            $('.Tuesday').hide();
            $('.Wednesday').hide();
            $('.Thursday').hide();
            $('.Friday').show();
            $('.Saturday').hide();
        } else if (n == 6) {
            $('.Sunday').hide();
            $('.Monday').hide();
            $('.Tuesday').hide();
            $('.Wednesday').hide();
            $('.Thursday').hide();
            $('.Friday').hide();
            $('.Saturday').show();
        } else {
            alert("well something broke...");
            $('.Sunday').hide();
            $('.Monday').hide();
            $('.Tuesday').hide();
            $('.Wednesday').hide();
            $('.Thursday').hide();
            $('.Friday').hide();
            $('.Saturday').hide();
        }
    }





    $(document).ready(function() {


        $(".day_selector_button").click(function() {
                // Enable #x
            $(".day_selector_button").prop("disabled", false);
            // Disable #x
            $(this).prop("disabled", true);
            console.log("beep");

        
        });

        $('#today').text(days[n] + " (today)");
        $('#today').show();
        $('.Sunday').hide();
        $('.Monday').hide();
        $('.Tuesday').hide();
        $('.Wednesday').hide();
        $('.Thursday').hide();
        $('.Friday').hide();
        $('.Saturday').hide();


        Today();




        $("#Today").click(function() {

            $('#today').text(days[n] + " (today)");

        });

        $("#Monday").click(function() {
            $('.Sunday').hide();
            $('.Monday').show();
            $('.Tuesday').hide();
            $('.Wednesday').hide();
            $('.Thursday').hide();
            $('.Friday').hide();
            $('.Saturday').hide();
            $('#today').text(days[1]);

        });

        $("#Tuesday").click(function() {
            $('.Sunday').hide();
            $('.Monday').hide();
            $('.Tuesday').show();
            $('.Wednesday').hide();
            $('.Thursday').hide();
            $('.Friday').hide();
            $('.Saturday').hide();
            $('#today').text(days[2]);

        });

        $("#Wednesday").click(function() {
            $('.Sunday').hide();
            $('.Monday').hide();
            $('.Tuesday').hide();
            $('.Wednesday').show();
            $('.Thursday').hide();
            $('.Friday').hide();
            $('.Saturday').hide();
            $('#today').text(days[3]);

        });

        $("#Thursday").click(function() {
            $('.Sunday').hide();
            $('.Monday').hide();
            $('.Tuesday').hide();
            $('.Wednesday').hide();
            $('.Thursday').show();
            $('.Friday').hide();
            $('.Saturday').hide();
            $('#today').text(days[4]);

        });

        $("#Friday").click(function() {
            $('.Sunday').hide();
            $('.Monday').hide();
            $('.Tuesday').hide();
            $('.Wednesday').hide();
            $('.Thursday').hide();
            $('.Friday').show();
            $('.Saturday').hide();
            $('#today').text(days[5]);

        });


        $("#Saturday").click(function() {
            $('.Sunday').hide();
            $('.Monday').hide();
            $('.Tuesday').hide();
            $('.Wednesday').hide();
            $('.Thursday').hide();
            $('.Friday').hide();
            $('.Saturday').show();
            $('#today').text(days[6]);

        });
        $("#Sunday").click(function() {
            $('.Sunday').show();
            $('.Monday').hide();
            $('.Tuesday').hide();
            $('.Wednesday').hide();
            $('.Thursday').hide();
            $('.Friday').hide();
            $('.Saturday').hide();
            $('#today').text(days[0]);

        });
    });