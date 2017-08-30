$("#skills-prog-lang-but").on("click", function () {
        $('#skills').slideToggle(400);
        $("#tools").slideUp(400);
        $("#languages").slideUp(400);
    });

$("#skills-tools-but").on("click", function () {
        $('#skills').slideUp(400);
        $("#tools").slideToggle(400);
        $("#languages").slideUp(400);
    });

$("#skills-nat-lang-but").on("click", function () {
        $('#skills').slideUp(400);
        $("#tools").slideUp(400);
        $("#languages").slideToggle(400);
    });

function sendMail() {
    var link = "mailto:ea.cabello10@uniandes.edu.co?"
             + "&subject=" + escape("Webpage message")
             + "&body=" + escape(document.getElementById('message').value)
    ;

    window.location.href = link;
}