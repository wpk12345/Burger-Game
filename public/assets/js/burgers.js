$(function() {
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var newDevour = 1;
    console.log(newDevour);

   var newDevouredState = {
      devoured: newDevour
    };

   $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        location.reload();
      }
    );
  });

 $(".create-form").on("submit", function(event) {
    event.preventDefault();

   var newBurger = {
      name: $("#ca").val().trim(),
      devoured: 0
    };

   $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        location.reload();
      }
    );
  });

 
});