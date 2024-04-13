// //Question 121: Implement a for loop that counts from 1 to 10 but skips number 5 using the continue statement.
// Explain & TIP: The continue statement can be used to skip over an iteration in a loop. It's particularly handy when you want to ignore specific cases without stopping the entire loop.
function displayCounting() {
    for (var i = 1; i <= 10; i++) {
        if (i === 5) { //this block of i helps to skip this particular condition i.e when i reaches to 5 it continues means skip 5 and then continue to iterate until condition remains true.
            continue;
        }
        console.log(i);
    }
}
displayCounting();
//Author-Huma Mohsin
