function convertir() {
    const cantidad = parseFloat(document.getElementById("cantidad").value);
    const tasaDeCambio = 209.41;
    const resultado = cantidad * tasaDeCambio;
    
    document.getElementById("resultado").value = resultado.toFixed(2);
  }
  