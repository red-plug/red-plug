---
title: 'Estimaciones y cobros | Red Plug'
description: 'Así es como gestionaremos los pagos, estimaciones y contribuciones'
---

# Estimaciones y cobros

La fase 1 estimada en la sección de Ruta desafortunadamente no contará con un retribución inmediata, sin embargo a partir de la fase 2 es probable que ya comiencen los ingresos.

Contamos con 2 posibles clientes, entraremos en más detalle por chat.


Siempre que entre un proyecto a nuestra organización debe existir una persona que conozca al 100% los requerimientos, habitualmente será la persona que logro la primera negociación.


Para la siguiente explicación utilizaremos de referencia a un sujeto que ahora en adelante llamaremos __Pepe__ esta persona será nuestro cliente, adicional tendremos a __Doge__ quien fue el encargado de ponerse en contacto con __Pepe__ y por último contamos con el equipo de [__Red Plug__]{.text-primary} conformado mismamente por __Doge__, __Chems__, __Keyboard Cat__, __Bongo Cat__.

Entonces tenemos los siguientes participantes

::div{.w-full .md:w-1/2 .mx-auto .overflow-x-auto}
| Rol | Persona  |
| :-: |  :---:   |
| [Cliente]{.text-lime-500} | Pepe |
| [Líder]{.text-red-700}  | Doge  |
| [Pogramador]{.text-red-500} | Chems |
| [Pogramador]{.text-red-500} | Keyboard Cat |
| [Pogramador]{.text-red-500} | Bongo Cat |
::

## Requerimientos 

Primero es necesario recabar toda la información acerca de los requerimientos del proyecto, de esto se encargará [__Doge__]{.text-red-800} hablando con [__Pepe__]{.text-lime-500}, [__Doge__]{.text-red-800} logra obtener la siguiente información:

::div{.mockup-window .bg-base-300 .border .mb-8}
::::div{.bg-base-200 .px-4 .py-16}
### Descripción del Proyecto: Plataforma CMS con Funcionalidades Específicas y Módulo de Pago

En nuestra última reunión con el cliente, se estableció el objetivo claro de desarrollar una plataforma CMS robusta y altamente funcional que cumpla con varios requisitos específicos.

#### Funcionalidades Principales:

__Gestión de Contenido:__ La aplicación actuará como un CMS (Sistema de Gestión de Contenido) integral, permitiendo al cliente crear, editar y publicar contenido de manera eficiente y organizada. Esto incluye artículos, imágenes, videos y otros tipos de contenido multimedia.

__Administración de Usuarios y Roles:__ Será posible gestionar usuarios con diferentes roles y permisos. Esto permitirá controlar quién puede acceder y modificar el contenido dentro de la plataforma.

__Personalización y Temas:__ Se implementará un sistema flexible de personalización de temas para que el cliente pueda adaptar el diseño y la apariencia de su plataforma según sus necesidades y marca.

__SEO y Analíticas:__ Integración de herramientas para mejorar el SEO (Optimización en Motores de Búsqueda) y para realizar análisis de rendimiento y uso del contenido publicado.

#### Funcionalidades Específicas Adicionales:

__Módulo de Pago:__ Se desarrollará un módulo de pago seguro que permitirá a ciertos clientes suscribirse para acceder a contenido premium. Esto garantiza que solo los suscriptores autorizados puedan ver ciertos artículos o secciones específicas dentro del sitio.

__Integración con Pasarelas de Pago:__ Implementaremos integraciones con pasarelas de pago reconocidas para asegurar transacciones seguras y sin complicaciones.

__Sistema de Gestión de Suscriptores:__ Se establecerá un sistema eficaz para la gestión de suscriptores, permitiendo al cliente administrar fácilmente las suscripciones, renovaciones y cancelaciones.

#### Conclusión:

En resumen, este proyecto no solo busca crear una plataforma CMS estándar, sino también incorporar funcionalidades avanzadas como el módulo de pago para contenido premium, asegurando así que el cliente pueda monetizar su contenido de manera efectiva mientras ofrece una experiencia de usuario excepcional.

::::
::
## Estimación genérica

Primero se hará una estimación global de lo que puede durar un proyecto en base a la división en módulos, está estimación se conoce como [Estimación por tallas de camisetas](https://asana.com/es/resources/t-shirt-sizing), las medidas son las siguientes:


::div{.w-full .md:w-3/4 .lg:w-1/2 .mx-auto .mb-8 .overflow-x-auto}
| Talla |  Estimado |
| :---: |   :---:   |
|   XS  | 4 días    |
|   S   | 1 semana  |
|   M   | 2 semanas |
|   L   | 3 semanas |
|   XL  | 1 mes     |
|  XXL  | 2 meses   |
::

Se dividirán las secciones principales y se puntuarán en equipo, de tal manera que todos estén de acuerdo con el puntaje, en caso de que no coincidan, cada quien tendrá que dar sus argumentos del porque el resto debería de cambiar de opinión, en caso de que un módulo ya se encuentre creado como plugin dentro de la colección de plugins de [__Red Plug__]{.text-primary} se tomarán solamente el 30% del total estimado en el plugin original para su cobro y su estimación. con lo anterior tenemos los siguientes resultados

::div{.w-full .lg:w-3/4 .mx-auto .overflow-x-auto .mb-8}
| Sección | Módulo | Talla | ¿Ya es un plugin? | ¿Puede convertirse en un plugin?  | Estimación final |
| :---    | :---   | :---  | :---              | :---                              | :---
| Admin | Administradores | XS | Sí | N/A | 1.2 días |
| Admin | Roles | XS | Sí | N/A | 1.2 días |
| Admin | Contenidos | M | Sí | N/A | 4.2 días |
| Admin | Medios (gestor de imágenes, videos, etc) | S | Sí | N/A | 2.1 días |
| Admin | Gestor de SEO | S | Sí | N/A | 2.1 días |
| Admin | Plantillas de contenido | M | Sí | N/A | 4.2 días |
| Admin | Métodos de pago | M | Sí | N/A | 4.2 días |
| Admin | Implementación con Stripe | L | No | Sí | 21 días |
| Admin | Suscriptores | XS | No | No | 4 días |
| Admin | Newsletters | S | No | Sí | 7 días |
| Front | Home | S | No | No | 7 días |
| Front | Secciones legales | XS | No | No | 4 días |
| Front | Listado de contenidos | XS | No | No | 4 días |
| Front | Detalle de contenido | S | No | No | 7 días |
| Front | Formulario de suscripción | XS | No | No | 4 días |
| Front | Pasarela de pagos (newsletter premium) | S | No | No | 7 días |
::

En base a lo anterior tenemos la siguiente estimación de tiempo

::div{.w-full .mx-auto .mb-8 .overflow-x-auto}
| Concepto | Explicación | Tiempo |
| :---     | :---        | :---   | 
| Tiempo de entrega | Esto es el tiempo en que se entregará la aplicación (la suma de __Estimación final__) | 84 días |
| Tiempo de negociación | Este tiempo es de los módulos que aún no son plugins pero pueden convertise en uno y que pueden ser o no cobrados al cliente | 28 días |
| Tiempo real de trabajo | Este es el tiempo que se requiere dedicar para la creación de los módulos que aún no son o no pueden ser plugins | 65 días |
| Costo al cliente | Esto es la cantidad de dinero que le costará al cliente, todos los desarrolladores deben estipular cuanto costará el día para el cliente actual, por ejemplo para [__Pepe__]{.text-lime-500} costará $400.00, esto es un rango de precios a negociar donde el máximo se cálcula `tiempo de entrega * costo del cliente`{.badge-accent} y el mímimo se cálcula `(tiempo de entrega - tiempo de negociación) * costo del cliente`{.badge-accent}| $22,000.00 - $33,000.00 |
::


Digamos que [__Doge__]{.text-red-800} Logra convencer a [__Pepe__]{.text-lime-500} de comprar el proyecto en __$25,000.00__, para que el proyecto pueda tener inicio es necesario que [__Pepe__]{.text-lime-500} pague el __40%__ por adelantado, es decir el equipo de [__Red Plug__]{.text-primary} recibirá __$10,00.00__ como presupuesto inicial, a [__Pepe__]{.text-lime-500} se le da la fecha de entrega (_Aún no se como tener este dato_), el equipo comienza a desarrollar todas las funcionalidades. 

Por último cuando se realice la entrega y se recibá el total del costo del proyecto, el presupuesto se dividirá entre los integrantes del equipo de [__Red Plug__]{.text-primary}, tomando en cuenta que solo [__Doge__]{.text-red-800} y [__Keyboard Cat__]{.text-red-500} participaron en este proyecto porque el resto mencionó no tener tiempo para desarrollar, el presupuesto restante se dividirá de la siguiente manera:

::div{.w-full .mx-auto .mb-8 .overflow-x-auto}
| Integrante | Aportación | Cálculo | Ingreso |
| :---       | :---       | :---    |    ---: |
| [__Doge__]{.text-red-800} | Trajó el proyecto al equipo | __15%__ del total | __$3,750.00__ |
| [__Doge__]{.text-red-800} | Participó en la creación de módulos reutilizables |  __15%__ del total | __$3,750.00__ |
| [__Chems__]{.text-red-500} | Participó en la creación de módulos reutilizables |  __15%__ del total | __$3,750.00__ |
| [__Keyboard Cat__]{.text-red-500} | Participó en la creación de módulos reutilizables |  __15%__ del total | __$3,750.00__ |
| [__Bongo Cat__]{.text-red-500} | Participó en la creación de módulos reutilizables |  __15%__ del total | __$3,750.00__ |
| [__Doge__]{.text-red-800} | Configuró el proyecto de backend con la instalación de los plugins que ya se tienen creados | __3%__ del total | __$750.00__ |
| [__Keyboard Cat__]{.text-red-500} | Configuró el proyecto de frontend |  __2%__ del total | __$500.00__ |
| [__Doge__]{.text-red-800} | Creo el módulo (backend) de Stripe (L) | __20%__ del total / `Tiempo real de trabajo`{.badge-accent} * `Talla de camiseta de la actividad`  | __$1,615.32__ |
| [__Doge__]{.text-red-800} | Creo el módulo (backend) de suscripciones (XS) | __20%__ del total / `Tiempo real de trabajo`{.badge-accent} * `Talla de camiseta de la actividad`  | __$307.68__ |
| [__Doge__]{.text-red-800} | Creo el módulo (backend) de newsletters (S) | __20%__ del total / `Tiempo real de trabajo`{.badge-accent} * `Talla de camiseta de la actividad`  | __$538.44__ |
| [__Keyboard Cat__]{.text-red-500} | Creo el módulo (front) de home (S) | __20%__ del total / `Tiempo real de trabajo`{.badge-accent} * `Talla de camiseta de la actividad`  | __$538.44__ |
| [__Keyboard Cat__]{.text-red-500} | Creo el módulo (front) de secciones legales (XS) | __20%__ del total / `Tiempo real de trabajo`{.badge-accent} * `Talla de camiseta de la actividad`  | __$307.68__ |
| [__Keyboard Cat__]{.text-red-500} | Creo el módulo (front) de listado de contenidos (XS) | __20%__ del total / `Tiempo real de trabajo`{.badge-accent} * `Talla de camiseta de la actividad`  | __$307.68__ |
| [__Keyboard Cat__]{.text-red-500} | Creo el módulo (front) de detalle de contenido (S) | __20%__ del total / `Tiempo real de trabajo`{.badge-accent} * `Talla de camiseta de la actividad`  | __$538.44__ |
| [__Keyboard Cat__]{.text-red-500} | Creo el módulo (front) de formulario de suscripción (XS) | __20%__ del total / `Tiempo real de trabajo`{.badge-accent} * `Talla de camiseta de la actividad`  | __$307.68__ |
| [__Keyboard Cat__]{.text-red-500} | Creo el módulo (front) de pasarela de pagos (S) | __20%__ del total / `Tiempo real de trabajo`{.badge-accent} * `Talla de camiseta de la actividad`  | __$538.44__ |
::

Al final los miembros de __Red Plug__{.text-primary} recibirán los siguientes ingresos por sus respectivos trabajos


::div{.w-full .md:w-1/2 .mx-auto .overflow-x-auto}
| Miebro | Tiempo real de trabajo  | Ingreso |
| :---   | :---                    |    ---: |
| [Doge]{.text-red-700}  | 32 días | __$10,711.36__ |
| [Chems]{.text-red-500} | 0 días | __$3,750.00__ |
| [Keyboard Cat]{.text-red-500} | 33 días | __$6,788.36__ |
| [Bongo Cat]{.text-red-500} | 0 días | __$3,750.00__ |
| | Total repartido | __$24,999.72__ |
::