# m2-ejercicio-3

Para visualizar el proyecto, abrir el archivo index.html en el navegador. La navegación luego se realiza con el menú principal.

# Implementa el uso de console.log() en varias partes del proyecto para depuración y mensajes informativos.

- Se utiliza console.log() en las siguientes partes:    1. HOME, boton reservar
                                                        2. CONTACTO, boton enviar formulario
                                                        3. TODAS LAS PÁGINAS, LOGO

# Utiliza import o require si es necesario para la estructura del programa JavaScript.

- Por el momento no ha sido necesario utilizar import o require

# Explica en el archivo README cómo funciona el event loop (stack, heap, queue) en JavaScript.

- stack (pila):  Una pila es una estructura para almacenar datos que opera de forma lineal y unidireccional. Esto significa que solo hay una forma para agregar elementos y estos se incorporan en un orden determinado en una sola dirección (de inicio a fin). Las pilas operan bajo una modalidad llamada LIFO (Last In First Out). Esto quiere decir, que siempre el último elemento agregado va a ser el primero que saquemos.

- heap (almacenamiento libre): El montículo libre, zona libre, almacenamiento libre o heap es una estructura dinámica de datos utilizada para almacenar datos en ejecución. A diferencia de la pila de ejecución que solamente almacena las variables declaradas en los bloques previo a su ejecución, el heap permite reservar memoria dinámicamente, es decir, es el encargado de que la «magia» de la memoria dinámica ocurra. Las variables globales y estáticas también son almacenadas en él.

- Queue (cola): Un programa en ejecución en JavaScript contiene una cola de mensajes, la cual es una lista de mensajes a ser procesados. Cada mensaje se asocia con una función. Cuando la pila está vacía, un mensaje es sacado de la cola y procesado. Procesar un mensaje consiste en llamar a la función asociada al mensaje (y por ende crear una frame en la pila). El mensaje procesado termina cuando la pila está vacía de nuevo.

# Solicita información al usuario mediante prompts (nombre, email, teléfono).
- Se realiza al hacer click en el envío del formulario en la página CONTACTO
- Los datos se muestran tanto en la consola como en una alert del navegador para darle retroalimentación al usuario.
- Se utilizan variables válidas solo en la función para almacenar los datos ingresados
- Se utilizan expresiones regulares y whiles para realizar validaciones de ingreso. Mail o telefono

# Implementa un ciclo o iteración (for, while, forEach) que manipule el DOM de forma dinámica.
- Se utiliza un listado de usuarios como doctores en la pagina EQUIPO
- Se utiliza su ID interno como años de experiencia para filtro
- Se utiliza bloque try/catch para el fetch de datos
