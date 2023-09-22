//VARIABLE DECLARATIONS
var customName = document.querySelector('#customname'); //"Enter custom name" text field by its id.
var randomize = document.querySelector('.randomize'); //the button with class "randomize".
var story = document.querySelector('.story'); //the paragraph for the final story.

//ARRAYS FOR RANDOMIZING
var insertX = ['Donald Trump', 'Jackie Chan', 'Santa Claus'];
var insertY = ['Area 51', 'Death Valley', 'Aruba'];
var insertZ = ['spontaneously combusted', 'rapidly sublimated', 'evaporated instantly'];

//FUNCTION TO GENERATE THE STORY
function result() {
    // STORY TEXT - generate a new story text with placeholders replaced by random values
    var storyText = `It was 94 fahrenheit outside, so ${randomValueFromArray(insertX)} went for a walk. When they got to ${randomValueFromArray(insertY)}, they stared in horror for a few moments, then ${randomValueFromArray(insertZ)}. Bob saw the whole thing, but he was not surprised — ${randomValueFromArray(insertX)} weighs 300 pounds, and it was a hot day.`;

    //create a new variable called newStory and set it to the value of storyText
    var newStory = storyText;

    //randomValueFromArray() function to generate a value for each of three new variables - xItem, yItem, and zItem
    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);

    //replace the three placeholders in the newStory string with the strings stored in xItem, yItem, and zItem
    newStory = newStory.replace(':insertX:', xItem);
    newStory = newStory.replace(':insertY:', yItem);
    newStory = newStory.replace(':insertZ:', zItem);

    //if the user has typed a name in the customName field, replace the name 'Bob' in the story with whatever they typed
    if (customName.value !== '') {
        newStory = newStory.replace('Bob', customName.value);
    }

    //if the metric radio button has been checked, convert temperature and weight units
    if (document.getElementById("metric").checked) {
        //create a variable called weight and convert the 300lbs to kgs, from pounds to kilograms (1lb = 0.453592kg)
        var weight = 300 * 0.453592;
        //replace the string '300 pounds' with the updated weight in kg
        newStory = newStory.replace('300 pounds', weight.toFixed(2) + ' kilograms');

        //convert temp. from Fahrenheit to Celsius (formula: °C = (°F - 32) x 5/9)
        var temp = ((94 - 32) * 5/9);

        //replace the string '94 Fahrenheit with the updated temperature in °C
        newStory = newStory.replace('94 fahrenheit', temp.toFixed(2) + ' Celsius');
    }

    //set the textContent property of the story paragraph to newStory
    story.textContent = newStory;
    story.style.visibility = 'visible'; //make the paragraph visible
}

//EVENT LISTENERS
//add a click event listener to the randomize variable so that when the button it represents is clicked, the result() function is run.
randomize.addEventListener('click', result);

//FUNCTION TO RANDOMLY SELECT AN ITEM FROM AN ARRAY
function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}
