// //Question 122: Use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5.

// Explain & TIP: The break statement terminates the loop immediately. This is useful for stopping a loop when a certain condition is met, even if the loop's original termination condition hasn't been reached yet.

function countDown(){
     let i=10; //for count down from 10, We start with i initialized to 10.
     while(i>=1){//The while loop continues as long as i is greater than or equal to 1.
        if(i===5){//Inside the loop, it checks if i is equal to 5.
            break;//If i is indeed 5, the break statement is executed, which immediately terminates the loop.
        }
        console.log(i);
        i--;//If i is not 5, the loop prints the current value of i using console.log() and decrements i by 1 in each iteration.
        
     }

}
countDown();
//Author-Huma Mohsin