    // Fonction pour vérifier si un élément est dans la fenêtre d'affichage
    function estElementDansFenetre(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Fonction pour gérer les événements d'intersection
    function gererIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-slide-in');
                observer.unobserve(entry.target);
            }
        });
    }

    // Créer l'objet IntersectionObserver
    const observer = new IntersectionObserver(gererIntersection, { threshold: 0.5 });

    // Récupérer tous les éléments avec la classe "slide-in-right" et commencer à les observer
    const elementsSlideIn = document.querySelectorAll('.slide-in-right');
    elementsSlideIn.forEach(element => observer.observe(element));