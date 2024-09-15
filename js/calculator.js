function calculateTotal() {
    const sites = parseInt(document.getElementById('sites').value) || 0;
    const servers = parseInt(document.getElementById('servers').value) || 0;
    const pcs = parseInt(document.getElementById('pcs').value) || 0;

    const siteCost = sites * 100;
    const serverCost = servers * 30;
    const pcCost = pcs * 12;

    const total = siteCost + serverCost + pcCost;

    document.getElementById('total').innerText = total;
}

