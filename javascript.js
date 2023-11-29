const btns = document.querySelectorAll(".dados h3");


btns.forEach(function(btn) {
    btn.addEventListener("click", function() {
      const paragrafo = btn.parentElement
      const img = paragrafo.querySelector("img")
      const link = paragrafo.querySelector("a")
      img.classList.toggle("display-on")
      link.classList.toggle("display-on")
    });
  });

