// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-state").on("click", function(event) {
    var id = $(this).data("id");
    var newState = $(this).data("newstate");

    var newStateChanged = {
      done: newState
    };

    // Send the PUT request.
    $.ajax("/api/goals/" + id, {
      type: "PUT",
      data: newStateChanged
    }).then(
      function() {
        console.log("changed state to", newState);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newGoal = {
      name: $("#go").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/goals", {
      type: "POST",
      data: newGoal
    }).then(
      function() {
        console.log("created new goal");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-goal").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/goals/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted goal", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
