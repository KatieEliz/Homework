var scores = [60, 50, 60, 58, 54, 54,
    58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51,
    69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18,
    41, 53, 55, 61, 51, 44];    //Values grouped together into an array and assigned to the variable scores//
    

 var costs = [.25, .27, .25, .25, .25, .25, .33, .31, 
              .25, .29, .27, .22, .31, .25, .25, .33, 
              .21, .25, .25, .25, .28, .25, .24, .22,
              .20, .25, .30, .25, .24, .25, .25, .25, 
              .27, .25, .26, .29];
    //Bubble solution e.g #0 score: 60, #1 score: 50, #2 score: 60//
    //Total number of bubble scores = 36//
    //Highest number of bubble score = 69//
    //Bubble solutions highest score #11 & #18//
    
    var highScore, bestSolutions;

 
    highScore = printAndGetHighScore(scores);
    console.log("Bubbles tests: " + scores.length);
    console.log("Highest bubble score: " + highScore);
    
  
    bestSolutions = getBestResults(scores, highScore);
    console.log("Solutions with the highest score: " + bestSolutions);
    
    mostCostEffective = getMostCostEffectiveSolution(scores, costs, highScore);
    
    
    console.log("Bubble Solution #" + mostCostEffective + " is the most cost effective");
    
    function printAndGetHighScore(scores) {
        var highScore = 0;
        var output;
        for (var i = 0; i < scores.length; i++) {
            output = "Bubble solution #" + i + " score: " + scores[i];
            console.log(output);
            if (scores[i] > highScore) {
                highScore = scores[i];
            }
        }
        return highScore;
    }
    
    function getBestResults(scores, highScore) {
        var bestSolutions = [];
        for (var i = 0; i < scores.length; i++) {
            if (scores[i] == highScore) {
                bestSolutions.push(i);
            }
        }
        return bestSolutions;
    }
    
    
    function getMostCostEffectiveSolution(scores, costs, highScore) {
        var cost = 100; 
        var index;
    
        for (var i = 0; i < scores.length; i++) {
            if (scores[i] == highScore) {
                if (cost > costs[i]) {
                    index = i;
                    cost = costs[i];
                }
            }
        }
        return index;
    }
    
    function getMostCostEffectiveSolution2(bestSolutions, costs) {
        var cost = 100;
        var solutionIndex;
        var lowCostIndex;
    
        for (var i = 0; i < bestSolutions.length; i++) {
            solutionIndex = bestSolutions[i];
            if (cost > costs[solutionIndex]) {
                lowCostIndex = solutionIndex;
                cost = costs[solutionIndex];
            }
        }
        return lowCostIndex;
    }
    
    
   