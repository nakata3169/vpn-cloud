function startGhost() {
    const btn = document.getElementById('connect-btn');
    const statusText = document.getElementById('status-text');
    
    btn.disabled = true;
    btn.innerText = "TUNNELING...";
    statusText.innerText = "CONNECTING...";
    statusText.style.color = "#ffae00";

    setTimeout(() => {
        statusText.innerText = "CONNECTED";
        statusText.style.color = "#00ff9d";
        btn.innerText = "GHOST ACTIVE";
        btn.style.borderColor = "#00ff9d";
        
        console.log("Kinetic Ghost Engine: kinetik-hayalet.atakanalhan.workers.dev is online.");
    }, 2000);
}
