document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".navbar li").forEach(function (item) {
        item.addEventListener("click", function (event) {
            // Fermer tous les autres dropdowns
            document.querySelectorAll(".navbar li").forEach(li => {
                if (li !== item) {
                    li.classList.remove("active");
                }
            });

            // Basculer l'état du dropdown
            item.classList.toggle("active");

            // Empêcher la propagation du clic pour éviter la fermeture immédiate
            event.stopPropagation();
        });
    });

    // Fermer les dropdowns si on clique ailleurs
    document.addEventListener("click", function () {
        document.querySelectorAll(".navbar li").forEach(function (item) {
            item.classList.remove("active");
        });
    });
});
