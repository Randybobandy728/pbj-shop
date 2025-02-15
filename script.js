document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let toasted = document.getElementById("toasted").value;
    let peanutButter = document.getElementById("peanutButter").value;
    let jelly = document.getElementById("jelly").value;

    let orderSummary = `
        <h2>Order Summary</h2>
        <p>Bread: ${toasted}</p>
        <p>Peanut Butter: ${peanutButter}</p>
        <p>Jelly: ${jelly}</p>
        <p>Thank you for your order!</p>
    `;

    document.getElementById("orderSummary").innerHTML = orderSummary;
});
