//MergeArraySorted using while loop

function mergeSorted(a,b){
	var i = 0, j = 0, k = 0;
	var answer = [];
    while (i < a.length && j < b.length)
    {
        if (a[i] < b[j])   
            answer.push(a[i++]);
        else        
             answer.push(b[j++]);
    }

    while (i < a.length)  
        answer.push(a[i++]);
        
    while (j < b.length)    
        answer.push(b[j++]);
       
    return answer;
}

//MergeArraySorted using for loop
function mergeSorted(a,b){
    var mergedArray = [];
	var i = 0, j = 0;
    var mergedArrayIndex = 0;
    for (; i < a.length || j < b.length;) {
        if (i < a.length && j < b.length) {
            if (a[i] < b[j]) {
                mergedArray[mergedArrayIndex] = a[i];
                i++;
            } else {
                mergedArray[mergedArrayIndex] = b[j];
                j++;
            }
        } else if (i < a.length) {
            mergedArray[mergedArrayIndex] = a[i];
            i++;
        } else if (j < b.length) {
            mergedArray[mergedArrayIndex] = b[j];
            j++;
        }
        mergedArrayIndex++;
    }
    return mergedArray;
}
mergeSorted([2,5,6,9,67],[1,2,3,29])