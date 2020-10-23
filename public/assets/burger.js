
$(function () {
    $(".change-devoured").on("click", function (event) {

        let id = $(this).data("id");
        let newDevoured = $(this).data("newdevoured");

        let newDevouredState = {
            devoured: newDevoured
        };
        console.log("New devoured data: "+newDevouredState);

        
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function () {
                console.log("changed devoured to", newDevoured);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        let newBurger = {
            name: $("#newBurger").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };
        console.log("New Burger Data: "+newBurger);

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new Burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    })
});