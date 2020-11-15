$(document).ready(

    function() {
        //validation rules
    var myRules = {

        heightInput: {
            required: true,
            min: 59,
            max: 79,
            digits: true
        },
        weightInput: {

            required: true,
            min: 88,
            max: 353,
            digits: true
        }

    }

    //validation messages
    var myMessages = {
        heightInput: {
            required: "Please input a height",
            min: "Must be at least 59 inches",
            max: "Height over 79 inches not allowed",
            digits: "Please enter whole numbers"
        },
        weightInput: {

            required: "Please input a weight",
            min: "Minimum weight is 88lbs",
            max: "Maximum weight is 353lbs",
            digits: "Please enter a whole number"
        }
    };
    //validation handler
    $("form").validate( {
        submitHandler: calcBmi,
        rules:myRules,
        messages: myMessages
    });

    function calcBmi()
    {
        //Get Height and Weight
        var heightVal = $("#heightInput").val()
        var weightVal = $("#weightInput").val()
        //Calculate BMI
        var bmiTotal = (weightVal / (heightVal*heightVal))*703
        //output BMI
        $("#bmiOutput").text(bmiTotal.toFixed(1))
        $("#outputBmi").show()
        //Determine Category
        if (bmiTotal > 40) {
            $("#catOutput").text("Very Severely Obese").css("color", "red")
            $("#outputCat").show()
        }
        else if (bmiTotal > 35) {
            $("#catOutput").text("Severely Obese").css("color", "red")
            $("#outputCat").show()
        }
        else if (bmiTotal > 30) {
            $("#catOutput").text("Moderately Obese").css("color", "pink")
            $("#outputCat").show()
        }
        else if (bmiTotal > 25) {
            $("#catOutput").text("Overweight").css("color", "pink")
            $("#outputCat").show()
        }
        else if (bmiTotal > 18.5) {
            $("#catOutput").text("Healthy").css("color", "white")
            $("#outputCat").show()
        }
        else if (bmiTotal > 16) {
            $("#catOutput").text("Underweight").css("color", "pink")
            $("#outputCat").show()
        }
        else if (bmiTotal > 15) {
            $("#catOutput").text("Severely Underweight").css("color", "red")
            $("#outputCat").show()
        }
        else {
            $("#catOutput").text("Very Severely Underweight").css("color", "red")
            $("#outputCat").show()
        }

    }


    }
);