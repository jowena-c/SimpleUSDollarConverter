
function euro(){
    let USDollar = document.getElementById("USDollarInput").value;
    const euro = 1;
    const ans = USDollar * euro;

    document.getElementById("displayAns").innerHTML = parseFloat(ans);
    document.getElementById("displayUnit").innerHTML = "Euro (€)";
}

function yen(){
    let USDollar = document.getElementById("USDollarInput").value;
    const yen = 146.90;
    const ans = USDollar * yen;

    document.getElementById("displayAns").innerHTML = parseFloat(ans);
    document.getElementById("displayUnit").innerHTML = "Japanese Yen (¥)";
}

function won(){
    let USDollar = document.getElementById("USDollarInput").value;
    const won = 1425;
    const ans = USDollar * won;

    document.getElementById("displayAns").innerHTML = parseFloat(ans);
    document.getElementById("displayUnit").innerHTML = "Korean Won (₩)";
}

function php(){
    let USDollar = document.getElementById("USDollarInput").value;
    const php = 57.96;
    const ans = USDollar * php;

    document.getElementById("displayAns").innerHTML = parseFloat(ans);
    document.getElementById("displayUnit").innerHTML = "Philippine Peso (₱)";
}

