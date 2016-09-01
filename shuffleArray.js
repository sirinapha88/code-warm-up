// Shuffle
// 
// Without using a shuffle or sort write your own shuffle method for an array. 
// The method will take an array and returns a new array with all of the elements in a random order. 
// One important property of a good shuffle method is that every permutation is equally likely.
// 

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
shuffleArray(["a", "b", "c", "d"]);