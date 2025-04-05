function yes() {
    document.getElementById("response").innerText = "Yeyyyyy, SEDIKIT GAK ESPEKKKK TERNYATAA MAU 💕";
  }
  
  function moveNoButton() {
    const button = document.getElementById("no-button");
    const x = Math.floor(Math.random() * 200) - 100;
    const y = Math.floor(Math.random() * 200) - 100;
    button.style.transform = `translate(${x}px, ${y}px)`;
  }
  