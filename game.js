 $(document).ready(function() {

     // displays users guess on click

     /* $("#check").on('click', function(){
          $("#guessText").html($('#guess').val());
      }); */

     // generate non repeating, random number and stores it in global var called random

     $("#start").on('click', function () {
         var arr = [];
         while (arr.length < 4) {
             var randomNum = Math.floor(Math.random() * 9) + 1;
             var found = false;
             for (var i = 0; i < arr.length; i++) {
                 if (arr[i] === randomNum) {
                     found = true;
                     break;
                 }
             }
             if (!found) arr[arr.length] = randomNum;
         }
         window.random = arr;
     });

     // start playing hides the button, and generates the random number for the game

     $("#start").on('click', function () {
         $("#start").hide();
         $("#guessText").html(random);

     // This function runs the game on click of submit

        $("#check").on('click', function game(){


        // stores guess in variable called user

        var user = $("#guess").val();

        // makes sure number is 4 digits

        if (user.length != 4) {
            alert("This number is too long or short to be valid")
        }

        // Makes sure the numbers are non repeating if they are 4 digits //!! this caused error with entering numbers 5678, kept saying no repeating numbers.

       // else if (user.indexOf(0) === user.indexOf(1) || user.indexOf(0) === user.indexOf(2) || user.indexOf(0) === user.indexOf(3) || user.indexOf(1) === user.indexOf(2) || user.indexOf(1) === user.indexOf(3) || user.indexOf(2) === user.indexOf(3)) {
       //  alert("This game doesn't have repeating digits")
       //  }

        // this is the game

        else{

        // stores variables to display bulls + cows based on guess.

            var bulls = 0;
            var cows = 0;

            // this is how it adds bulls and cows

            if (user !== random) {
                if (user.indexOf(0) === random.indexOf(0)){
                    bulls += 1;
                } else if (user.indexOf(0) === random.indexOf(1) || user.indexOf(0) === random.indexOf(2) || user.indexOf(0) === random.indexOf(3)){
                    cows += 1;
                }
                if (user.indexOf(1) === random.indexOf(1)){
                    bulls += 1;
                } else if (user.indexOf(1) === random.indexOf(0) || user.indexOf(1) === random.indexOf(2) || user.indexOf(1) === random.indexOf(3)){
                    cows += 1;
                }
                if (user.indexOf(2) === random.indexOf(2)){
                    bulls += 1;
                } else if(user.indexOf(2) === random.indexOf(0) || user.indexOf(2) === random.indexOf(1) || user.indexOf(2) === random.indexOf(3)){
                    cows += 1;
                }
                if(user.indexOf(3) === random.indexOf(3)){
                    bulls += 1;
                } else if(user.indexOf(3) === random.indexOf(0) || user.indexOf(3) === random.indexOf(1) || user.indexOf(3) === random.indexOf(2)){
                    cows +=1;
                }
                $("#result").html("Bulls: " + bulls + " & Cows: " + cows + "");
            } else if (user === random) {
                alert("You win")
            }
        }

    });



    })


});
