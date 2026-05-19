    const cartes = document.querySelectorAll(".section__tp");
 
    const observateur = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });
 
    cartes.forEach(function(carte) {
      observateur.observe(carte);
    });