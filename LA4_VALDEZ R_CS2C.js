// Initialize the customer queue
let customerQueue = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

// Function to display the queue
function displayQueue() {
    console.log("Current Queue:");
    for (let i = 0; i < customerQueue.length; i++) {
        console.log(`${i + 1}. ${customerQueue[i]}`);
    }
    if (customerQueue.length === 0) {
        console.log("Queue is empty.");
    }
}


// Main program loop
while (customerQueue.length > 0) {
    displayQueue();
    let serviceNumber = parseInt(prompt("Enter the number of the customer to be serviced:"));

    // Input validation: Check if the input is a valid number within the queue range.
    if (isNaN(serviceNumber) || serviceNumber < 1 || serviceNumber > customerQueue.length) {
        alert("Invalid input. Please enter a number within the queue range.");
        continue; // Go back to the beginning of the loop
    }

    // Service the customer
    let servicedCustomer = customerQueue.splice(serviceNumber - 1, 1); //Remove the customer from the queue.

    // Display the serviced customer and updated queue.
    console.log(`Serviced customer: ${servicedCustomer[0]}`);
    displayQueue();

}

console.log("All customers have been serviced.");

