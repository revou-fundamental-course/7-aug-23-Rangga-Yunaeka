document.addEventListener("DOMContentLoaded", function () {
    const hitungBtn = document.getElementById("hitungBtn");
    const hasilDiv = document.getElementById("hasil");
  
    hitungBtn.addEventListener("click", function () {
      const alas = parseFloat(document.getElementById("alas").value);
      const tinggi = parseFloat(document.getElementById("tinggi").value);
  
      const luas = 0.5 * alas * tinggi;
  
      hasilDiv.innerHTML = `Luas segitiga dengan alas ${alas} dan tinggi ${tinggi} adalah ${luas}`;
    });
  });

  
    function calculate() {
        const sideA = parseFloat(document.getElementById("sideA").value);
        const sideB = parseFloat(document.getElementById("sideB").value);
        const sideC = parseFloat(document.getElementById("sideC").value);
      
        if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
          alert("Masukkan angka pada semua sisi segitiga.");
          return;
        }
      
        const perimeter = sideA + sideB + sideC;
        document.getElementById("result").textContent = perimeter;
      }
 