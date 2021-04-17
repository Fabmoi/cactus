function rien()
               {
                return false;
               }
function prot()
               {
               var imgs = document.getElementsByTagName("img");
               for(var i=0; i<imgs.length; i++)
               imgs[i].oncontextmenu = rien;
               }                                                                                  /* Bloque le clic-droit sur les images */ 


function ffalse()
                {
                        return false;
                }
                function ftrue()
                {
                        return true;
                }
                document.onselectstart = new Function ("return false");
                if(window.sidebar)
                {
                        document.onmousedown = ffalse;
                        document.onclick = ftrue;
                }                                                                                 /* Empêche la sélection sur la page */