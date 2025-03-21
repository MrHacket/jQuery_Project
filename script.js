$(document).ready(function() {
    // Fade In/Out
    $("#fade-button").click(function() {
        $("#hero").fadeToggle(1000); // Toggle fade in/out effect
    });

    // Hide/Show
    $("#hide-button").click(function() {
        $("#hidden-element").hide(500); // Hide with a duration
    });

    $("#show-button").click(function() {
        $("#hidden-element").show(500); // Show with a duration
    });

    // Add/Remove Class
    $("#add-class-button").click(function() {
        $("#class-element").addClass("highlighted");
    });

    $("#remove-class-button").click(function() {
        $("#class-element").removeClass("highlighted");
    });

    // Animate
    $("#animate-button").click(function() {
        $("#animated-element").animate({
            left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px'
        }, 1000, function() {
            // Animation complete callback
            $(this).animate({
                left: '0px',
                opacity: '1',
                height: '100px',
                width: '100px'
            }, 1000);
        });
    });

    // Get/Set Text
    $("#get-text-button").click(function() {
        alert($("#text-element").text());
    });

    $("#set-text-button").click(function() {
        $("#text-element").text("New text set by jQuery!");
    });

    // Example of event delegation
    $("#example-section").on("click", ".example h3", function() {
        $(this).toggleClass("active-header"); // Add/remove a class on header click
    });
});