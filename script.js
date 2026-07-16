// Rolagem suave

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const id = this.getAttribute('href');

        if(id !== "#"){

            document.querySelector(id).scrollIntoView({

                behavior:'smooth'

            });

        }

    });

});