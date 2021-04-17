(function(   ) {
        /*
        LORSQUE l'on clique sur un onglet
            *ON RETIRE la class active de l'onglet actif
            *J'ajoute la classe active à l'onglet actuel
        
        ON RETIRE la class active sur le contenu actif
        J'ajoute la class active sur le contenu correspondant à mon clic
        */
        var afficherOnglet = function (a) {
            var li = a.parentNode
            var div = a.parentNode.parentNode.parentNode

            if(li.classList.contains('active')){
                return false
            }   
            // ON RETIRE la class active de l'onglet actif
            div.querySelector('.tabs .active').classList.remove('active')
            //J'ajoute la classe active à l'onglet actuel
            li.classList.add('active')
        
            //ON RETIRE la class active sur le contenu actif
            div.querySelector('.tab-content.active').classList.remove('active')
            //J'ajoute la class active sur le contenu correspondant à mon clic
            div.querySelector(a.getAttribute('href')).classList.add('active')
        }
        var tabs = document.querySelectorAll('.tabs a')
        for (var i = 0; i < tabs.length; i++){
            tabs[i].addEventListener('click', function () {
                afficherOnglet(this)
            })
        }   
        /*
        JE RECUPERE le hash
        AJOUTER LA CLASS active sur le lien href="hash"
        RETIRE LA CLASS active sur les autres onglets
        AFFICHER / MASQUER les contenus
        */
        var hashChange = function (){
            var hash = window.location.hash
            var a = document.querySelector('a[href="' + hash + '"]')
            if (a !== null && !a.classList.contains('active')) {
                afficherOnglet(a)
            }     
        }
        window.addEventListener('hashchange' , hashChange)
        hashChange()

    })()