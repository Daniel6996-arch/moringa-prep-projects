//story flashes and disappear as it is '''submitted''' to unknown address
/* $(document).ready(function() {
    $("#blanks form").submit(function() {
        $(".person1").append("blah blah");
        $(".person2").append("blah blah");
        $(".animal").append("blah blah");
        $(".exclamation").append("blah blah");
        $(".verb").append("blah blah");
        $(".noun").append("blah blah");

        $("#story").show();
    });
}); */


//add event parameter to stop default action---'''submit'''
/* $(document).ready(function() {
    $("#blanks form").submit(function(event) {
        $(".person1").append("blah blah");
        $(".person2").append("blah blah");
        $(".animal").append("blah blah");
        $(".exclamation").append("blah blah");
        $(".verb").append("blah blah");
        $(".noun").append("blah blah");

        $("#story").show();
        event.preventDefault();
    });
}); */

/* //allows input from html
$(document).ready(function() {
    $("#blanks form").submit(function(event) {
        var person1Input = $("input#person1").val();
        var person2Input = $("input#person2").val();
        var animalInput = $("input#animal").val();
        var exclamationInput = $("input#exclamation").val();
        var verbInput = $("input#verb").val();
        var nounInput = $("input#noun").val();
        $(".person1").append(person1Input);
        $(".person2").append(person2Input);
        $(".animal").append(animalInput);
        $(".exclamation").append(exclamationInput);
        $(".verb").append(verbInput);
        $(".noun").append(nounInput);

        $("#story").show();

        event.preventDefault();
    });
}); */
/* //allows input from html but appends input after input if page is not refreshed
$(document).ready(function() {
    $("#blanks form").submit(function(event) {
        var person1Input = $("input#person1").val();
        var person2Input = $("input#person2").val();
        var animalInput = $("input#animal").val();
        var exclamationInput = $("input#exclamation").val();
        var verbInput = $("input#verb").val();
        var nounInput = $("input#noun").val();
        $(".person1").append(person1Input);
        $(".person2").append(person2Input);
        $(".animal").append(animalInput);
        $(".exclamation").append(exclamationInput);
        $(".verb").append(verbInput);
        $(".noun").append(nounInput);

        $("#story").show();

        event.preventDefault();
    });
}); */
/* $(document).ready(function() {
    $("#blanks form").submit(function(event) {
        var person1Input = $("input#person1").val();
        var person2Input = $("input#person2").val();
        var animalInput = $("input#animal").val();
        var exclamationInput = $("input#exclamation").val();
        var verbInput = $("input#verb").val();
        var nounInput = $("input#noun").val();
        $(".person1").text(person1Input);
        $(".person2").text(person2Input);
        $(".animal").text(animalInput);
        $(".exclamation").text(exclamationInput);
        $(".verb").text(verbInput);
        $(".noun").text(nounInput);

        $("#story").show();

        event.preventDefault();
    });
    }); */

    //refactored code.
    $(document).ready(function() {
        $("#blanks form").submit(function(event) {
          var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];
    
          blanks.forEach(function(blank) {
            var userInput = $("input#" + blank).val();
            $("." + blank).text(userInput);
          });
    
          $("#story").show();
    
          event.preventDefault();
        });
      });