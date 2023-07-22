# Rest_API_Salud_MEAN_Proy1

## Introducción
Un aplicativo web REST API, que por medio de formularios reciba información de: Pacientes, Doctores y pueda agendar citas entre los mismos. Se utilizará el stack MEAN y es uno de los proyectos finales del programa Todos a la U.

Se utilizará una carpeta para el cliente y otra para el servidor. Puedes modificar el puerto que utiliza el cliente o el servidor, en caso de que estén ocupados o que así lo prefieras.

Puertos por defecto

Cliente: 4200

Servidor: 4000

## Tecnologías utilizadas
Las principales tecnologías que fueron utilizadas en este proyecto son:

-mongoose v 7.3.2

-express v 4.18.2

-angular v 16.1.0

-node v 18.12.1

-typescript v 5.1.3

-cors v 2.8.5

-dotenv v 16.3.1

-nodemon v 3.0.1

## Instalación
Primero clona el contenido de este repositorio, en una carpeta que tengas destinada para tal fin, después dentro de la carpeta dale click derecho y en Git Bash here o similares. Asegurate que la dirección de la carpeta coincida con dónde quieres que se clone el  repositorio y ejecuta la siguiente instrucción.

'git clone https://github.com/JuangarcDev/Rest_API_Salud_MEAN_Proy1.git'

Cuando se clone el repositorio asegurate de estar en la ruta /viewsalud la cual funciona como el Cliente de la aplicación, puedes desplazarte a dicha ruta mediante el comando

'cd viewsalud'

Ahora instala las dependencias necesarias para que el proyecto funcione, ejecuta el siguiente comando en la consola

'npm install'

Espera que se complete la descarga de todas las dependencias necesarias y posteriormente despliega el Cliente, mediante el comando

'ng serve --o'

Ahora abre otro terminal y asegurate que se este sobre la ruta /servidor, esto lo puedes lograr mediante la terminal con cd seguida de la ruta de /servidor. Procede a instalar las dependencias necesarias para que el servidor funcione.

'npm install'

Espera que se complete la descarga de todas las dependencias necesarias y posteriormente despliega el Servidor, mediante el comando

'npm run dev'

Recibirás el siguiente mensaje en el terminal "El servidor esta desplegado correctamente
 
BD conectada"

Listo con estos pasos habrás hecho lo necesario para que la aplicación funcione correctamente. Se te debería abrir una pestaña en tu navegador con la aplicación. En caso de que no se abra automáticamente puedes acceder a ella de forma manual colocando la siguiente dirección en tu navegador.

'http://localhost:4200/'

## Endpoints

Se utiliza el siguiente esquema de colecciones de datos:

![Modelo_Datos](https://github.com/JuangarcDev/Rest_API_Salud_MEAN_Proy1/assets/131199084/48351423-f10d-4482-86e6-3981a18a671b)

El cual se podría pulir más a detalle y crear en colecciones independientes la especialidad y el consultorio, la especialidad estaría relacionado con el doctor y el consultorio estaría relacionado con la cita. Pero se utiliza un esquema más básico con solo 3 colecciones puesto que por la necesidad del proyecto no se ahonda en la importancia de la especialidad ni del consultorio.

Se utiliza app.use() para definir los prefijos de las rutas de los endpoints y asociarlos a los controladores correspondientes. En este caso, las rutas de los endpoints están definidas en  archivos separados (paciente.js, doctor.js y cita.js) y se importan y se asocian en el archivo  principal de la aplicación. Se tienen 3 diferentes una por cada componente grande: paciente, doctor y cita. Como se puede apreciar a continuación.

![Endpoint_app](https://github.com/JuangarcDev/Rest_API_Salud_MEAN_Proy1/assets/131199084/b4cbbffa-5e76-47cd-a631-849cb7ec7582)

Ahora veamos las rutas de los endpoints en el archivo cita.js, doctor.js y paciente.js, en las rutas. utilizando router.post(), router.get() y router.delete() para especificar las rutas y los controladores asociados.

paciente.js

![Endpoint_PACIENTE](https://github.com/JuangarcDev/Rest_API_Salud_MEAN_Proy1/assets/131199084/25406fca-bac2-4d19-969c-72ca84a6964c)

Como podemos apreciar tenemos individualizado, para cada petición que vamos a realizar, en orden tenemos

-- Crear nuevo paciente

-- Lista todos los pacientes

-- Actualizar/editar un paciente especifico

-- Obtener un paciente especifico

-- Eliminar un paciente especifico

doctor.js

![Endpoint_DOCTOR](https://github.com/JuangarcDev/Rest_API_Salud_MEAN_Proy1/assets/131199084/efef6d13-7da2-4daf-9909-80564075878f)

Como podemos apreciar también esta individualizado, para cada petición que vamos a realizar, en orden tenemos

-- Crear nuevo doctor

-- Lista todos los doctores

-- Actualizar/editar un doctor especifico

-- Obtener un doctor especifico

-- Eliminar un doctor especifico

Ademas tenemos una ruta adicional, que será consumida para la creación de las citas, la cual lista los nombres de todos los doctores que cumplen con una especialidad requerida

--Lista los doctores que tengan una especialidad especifica

cita.js

![Endpoint_CITA](https://github.com/JuangarcDev/Rest_API_Salud_MEAN_Proy1/assets/131199084/2202540c-ce12-46d2-a14f-cc2d6c989565)

Como podemos apreciar también esta individualizado, para cada petición que vamos a realizar, en orden tenemos

-- Crear nueva cita

-- Lista todas las citas

-- Eliminar una cita en especifico

No se crea EDITAR, principalmente porque es la forma tradicional que se manejan las citas, como se consideran compromisos no son tan fáciles de modificar, sino que se puede eliminar la cita o crear una nueva

Para ver cada endpoint en especifico, puede visualizar el DOCUMENTO PDF incluido en el repositorio llamado DOCUMENTO_PRUEBAS_UNITARIAS

## Funcionamiento Aplicativo

El aplicativo cuenta con varias  rutas principales

--La página de inicio

https://github.com/JuangarcDev/Rest_API_Salud_MEAN_Proy1/assets/131199084/f60e2ca0-5e3f-415e-8220-68d9fe529129

Como podemos ver una pequeña descripción del servicio un carrusel de fotos y su respectivo header y footer.

--La página de Pacientes

https://github.com/JuangarcDev/Rest_API_Salud_MEAN_Proy1/assets/131199084/0ba5ae28-1ef8-40ba-87fc-5c602bbf6354

Como podemos ver una pestaña, en la cual al inicio se listan los pacientes y se puede crear un nuevo paciente, editar o eliminar uno existente.

--La página de Doctores

https://github.com/JuangarcDev/Rest_API_Salud_MEAN_Proy1/assets/131199084/e99481ff-fff5-42d7-8b2c-81f561d5af68

Como podemos ver una pestaña, en la cual al inicio se listan los doctores y se puede crear un nuevo doctor, editar o eleminar uno existente.
--La página de Citas

https://github.com/JuangarcDev/Rest_API_Salud_MEAN_Proy1/assets/131199084/04394b20-4972-4613-909a-dcc028181bca

Como podemos ver una pestaña, en la cual al inicio se listan las citas y se puede crear una nueva cita o eliminar uno existente. Para crearla la cedula debe existir en la colección de paciente, además debe haber al menos un doctor con la especialidad solicitada, si es más de uno podrá elegir al  doctor con el cual le gustaría tener la cita y finalmente la fecha de la cita que debe ser una fecha superior al momento en que se pide la cita.

## Integrantes
El proyecto fue desarrollado en su totalidad por
-Juan Carlos Garcia Guerrero
