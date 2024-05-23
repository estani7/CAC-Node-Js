    function validarFormulario() {
        // Obtener los valores de los campos
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const consulta = document.getElementById('consulta').value.trim();
        const preferencia = document.getElementById('preferencia').value;
        const suscripcion = document.getElementById('suscripcion').checked;

        // Expresión regular para validar el formato del correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validar que todos los campos requeridos estén llenos
        if (nombre === "") {
            alert("Por favor, ingrese su nombre.");
            return false;
        }

        if (email === "") {
            alert("Por favor, ingrese su correo electrónico.");
            return false;
        }

        if (!emailRegex.test(email)) {
            alert("Por favor, ingrese un correo electrónico válido.");
            return false;
        }

        if (telefono === "") {
            alert("Por favor, ingrese su número de teléfono.");
            return false;
        }

        if (consulta === "") {
            alert("Por favor, ingrese su consulta.");
            return false;
        }

        if (preferencia === "") {
            alert("Por favor, seleccione una preferencia de contacto.");
            return false;
        }

        // Si todas las validaciones son correctas, permitir el envío del formulario
        return true;
    }
