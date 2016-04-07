function binarySearch(arr, item, lowIndex, highIndex) {
    var midIndex = //compute this;
    var currentItem = arr[midIndex];
    
    //we found it
    if(currentItem === item) {
        return midIndex;
    }

    if(lowIndex === highIndex || arr.length === 0) {
        // either we have a solution or a failure
        return -1;
    }

    // guess is too high.
    if(item < currentItem) {
        return binarySearch(arr, item, lowIndex, midIndex - 1)
    }

    // guess is too low.
    if(item > currentItem){ 
        return binarySearch(arr, item, midIndex + 1, highIndex);
    }

    // Is it possible to get here?
    throw new Error("You used invalid input, no comparisons returned true for", item, currentItem);
}

binarySearch(arr, item, 0, arr.length - 1);



function fib(n) {
    if(n === 0 || n === 1) {
        //return something
        // this is my base case
    }

    return fib(n-1) + fib(n-2);
}


function findNodeWithVal(node, val) {
    
    if(node.val === val) {
        return node;
    }

    if(node.children === null || node.children.length === 0) {
        return false;
    }

    for(var childI = 0; childI < node.children.length; childI++) {
        var childNode = node.children[childI];
        var answer = findNodeWithVal(childNode, val);

        if(answer !== false) {
            return answer;
        }
    }

    return false;
}