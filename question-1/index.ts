// //Question 121: Implement a for loop that counts from 1 to 10 but skips number 5 using the continue statement.

// Explain & TIP: The continue statement can be used to skip over an iteration in a loop. It's particularly handy when you want to ignore specific cases without stopping the entire loop.

function displayCounting(){
    for(let i=1;i<=10;i++){//The for loop iterates from 1 to 10.
        
    if (i===5){//Inside the loop, there's an if statement that checks if the current value of i is equal to 5.
        //If i is 5, the continue statement is executed, which skips the current iteration and proceeds to the next one.
        
        continue;
    }
        console.log(i);//If i is not 5, the loop prints the current value of i using console.log().
    }
}
displayCounting();
//Author-Huma Mohsin
