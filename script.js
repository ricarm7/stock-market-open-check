const start = 9 * 60 + 30
const end = 17 * 60 + 30
const date = new Date();
const now = date.getHours() * 60 + date.getMinutes();
const day = date.getDay();

if (start <= now && now <= end && day >= 1 && day <= 5) {
    document.getElementById("open").innerHTML = "Xetra Geöffnet";
    document.getElementById("open").className = "marketsopen"
} else {
    document.getElementById("closed").innerHTML = "Xetra Geschlossen";
    document.getElementById("closed").className = "marketsclosed";
}

const startNYSE = 15 * 60 + 30
const endNYSE = 22 * 60 + 30
const dateNYSE = new Date();
const nowNYSE = date.getHours() * 60 + date.getMinutes();
const dayNYSE = date.getDay();

if (startNYSE <= nowNYSE && nowNYSE <= endNYSE && dayNYSE >= 1 && dayNYSE <= 5) {
    document.getElementById("openNYSE").innerHTML = "NYSE Geöffnet";
    document.getElementById("openNYSE").className = "marketsopen"
} else {
    document.getElementById("closedNYSE").innerHTML = "NYSE Geschlossen";
    document.getElementById("closedNYSE").className = "marketsclosed";
}