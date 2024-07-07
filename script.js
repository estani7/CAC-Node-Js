    function validarFormulario() {
        var nombre = document.getElementById('nombre').value;
        var email = document.getElementById('email').value;
        var telefono = document.getElementById('telefono').value;
        var consulta = document.getElementById('consulta').value;
        var preferencia = document.getElementById('preferencia').value;

        if (nombre.trim() === '' || email.trim() === '' || telefono.trim() === '' || consulta.trim() === '' || preferencia === '') {
            alert('Por favor, completa todos los campos obligatorios.');
            return false;
        }

        return true;
    }
   // Ejecutar hasta que todo esté cargado
window.onload = function() {
    // Variable para controlar el botón
    let btn = document.getElementById('toggle-btn');
  
    // Variable para controlar el menú
    let side = document.getElementById('sidebar');
  
    // Agregar evento "onclick" al botón
    btn.addEventListener('click', function() {
      // Agregar o quitar clase "active" a botón y menú
      btn.classList.toggle('active');
      side.classList.toggle('active');
    });
  }
    document.addEventListener("DOMContentLoaded", function() {
        const testimonioCarousel = document.getElementById('testimonio-carousel');
        const testimonios = testimonioCarousel.querySelectorAll('.testimonio');
        const numTestimonios = testimonios.length;
        let currentIndex = 0;
    
        function mostrarTestimonios() {
            for (let i = 0; i < numTestimonios; i++) {
                testimonios[i].style.transform = `translateX(-${currentIndex * 100}%)`;
            }
        }
    
        function avanzarTestimonios() {
            currentIndex = (currentIndex + 1) % numTestimonios;
            mostrarTestimonios();
        }
    
        setInterval(avanzarTestimonios, 5000); // Cambiar de testimonio cada 5 segundos
    });
    document.addEventListener("DOMContentLoaded", function() {
        const secciones = document.querySelectorAll('.seccion');
    
        function mostrarTransicion() {
            secciones.forEach(function(seccion) {
                const rect = seccion.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.5 && rect.bottom > window.innerHeight * 0.5) {
                    seccion.classList.add('activo');
                } else {
                    seccion.classList.remove('activo');
                }
            });
        }
    
        window.addEventListener('scroll', mostrarTransicion);
        window.addEventListener('resize', mostrarTransicion);
    
        mostrarTransicion(); // Mostrar la transición al cargar la página
    });
    
    
    
            
