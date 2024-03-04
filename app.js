function main(){
    calculateCapitalization();
    exponentialConvention();
    linearConvention();
}
function calculateCapitalization() {
    const investment = parseFloat(document.getElementById("value").value);
    const time = parseInt(document.getElementById("time").value);
    const rate = parseFloat(document.getElementById("rate").value);

    const euler = Math.E;
    let rateInDecimal = rate/100;

    let res = (investment) * Math.exp(rateInDecimal * time)

    document.getElementById("result-1").textContent = "O valor do seu investimento após " + time + " anos será de R$" + res.toFixed(2);
}


function exponentialConvention() {
    const investment = parseFloat(document.getElementById("value").value);
    const time = parseInt(document.getElementById("time").value);
    const rate = parseFloat(document.getElementById("rate").value);

    let result = investment * Math.pow(1 + (rate / 100), time);
    console.log(result);

    document.getElementById("result-2").textContent = "O valor do seu investimento após " + time + " anos será de R$" + result.toFixed(2);
}

function linearConvention(){
    const investment = parseFloat(document.getElementById("value").value);
    const time = parseInt(document.getElementById("time").value);
    const rate = parseFloat(document.getElementById("rate").value);
    let rateInDecimal = rate/100;

    let result = (investment) * (1 + rateInDecimal * time);
    document.getElementById("result-3").textContent = "O valor do seu investimento após " + time + " anos será de R$" + result.toFixed(2);
    console.log(result)
}

