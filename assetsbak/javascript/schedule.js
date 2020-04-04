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

    function Sunday() {
        document.getElementById("Today").disabled = false;
        document.getElementById("Sunday").disabled = true;
        document.getElementById("Monday").disabled = false;
        document.getElementById("Tuesday").disabled = false;
        document.getElementById("Wednesday").disabled = false;
        document.getElementById("Tuesday").disabled = false;
        document.getElementById("Thursday").disabled = false;
        document.getElementById("Friday").disabled = false;
        document.getElementById("Saturday").disabled = false;
    }

    function Monday() {
        document.getElementById("Today").disabled = false;
        document.getElementById("Sunday").disabled = false;
        document.getElementById("Monday").disabled = true;

        document.getElementById("Wednesday").disabled = false;
        document.getElementById("Tuesday").disabled = false;
        document.getElementById("Thursday").disabled = false;
        document.getElementById("Friday").disabled = false;
        document.getElementById("Saturday").disabled = false;
    }

    function Tuesday() {
        document.getElementById("Today").disabled = false;
        document.getElementById("Sunday").disabled = false;
        document.getElementById("Monday").disabled = false;
        document.getElementById("Wednesday").disabled = false;
        document.getElementById("Tuesday").disabled = true;
        document.getElementById("Thursday").disabled = false;
        document.getElementById("Friday").disabled = false;
        document.getElementById("Saturday").disabled = false;
        console.log("boop");
    }

    function Wednesday() {
        document.getElementById("Today").disabled = false;
        document.getElementById("Sunday").disabled = false;
        document.getElementById("Monday").disabled = false;
        document.getElementById("Wednesday").disabled = true;
        document.getElementById("Tuesday").disabled = false;
        document.getElementById("Thursday").disabled = false;
        document.getElementById("Friday").disabled = false;
        document.getElementById("Saturday").disabled = false;
    }

    function Thursday() {
        document.getElementById("Today").disabled = false;
        document.getElementById("Sunday").disabled = false;
        document.getElementById("Monday").disabled = false;
        document.getElementById("Wednesday").disabled = false;
        document.getElementById("Tuesday").disabled = false;
        document.getElementById("Thursday").disabled = true;
        document.getElementById("Friday").disabled = false;
        document.getElementById("Saturday").disabled = false;
    }

    function Friday() {
        document.getElementById("Today").disabled = false;
        document.getElementById("Sunday").disabled = false;
        document.getElementById("Monday").disabled = false;
        document.getElementById("Wednesday").disabled = false;
        document.getElementById("Tuesday").disabled = false;
        document.getElementById("Thursday").disabled = false;
        document.getElementById("Friday").disabled = true;
        document.getElementById("Saturday").disabled = false;
    }

    function Saturday() {
        document.getElementById("Today").disabled = false;
        document.getElementById("Sunday").disabled = false;
        document.getElementById("Monday").disabled = false;
        document.getElementById("Wednesday").disabled = false;
        document.getElementById("Tuesday").disabled = false;
        document.getElementById("Thursday").disabled = false;
        document.getElementById("Friday").disabled = false;
        document.getElementById("Saturday").disabled = true;
    }

    function Today2() {
        document.getElementById("Today").disabled = true;
        document.getElementById("Sunday").disabled = false;
        document.getElementById("Monday").disabled = false;
        document.getElementById("Wednesday").disabled = false;
        document.getElementById("Tuesday").disabled = false;
        document.getElementById("Thursday").disabled = false;
        document.getElementById("Friday").disabled = false;
        document.getElementById("Saturday").disabled = false;
    }

    $(document).ready(function() {

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
        Today2();



        $("#Today").click(function() {
            Today();
            $('#today').text(days[n] + " (today)");
            Today2();
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
            Monday();
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
           Tuesday();
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
            Wednesday();
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
            Thursday();
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
            Friday();
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
            Saturday()
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
            Sunday();
        });
    });