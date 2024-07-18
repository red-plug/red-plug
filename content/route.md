---
title: 'Ruta | Red Plug'
description: 'Descubre nuestros próximos pasos, toma alguna tarea y crezcamos juntos'
---

# Ruta
La ruta de desarrollo y aprendizaje de Red Plug será gradual, por fases y en base a los deseos del equipo, dividiremos nuestro crecimiento en etapas, se prevee que al terminar la etapa 2 ya estaremos preparados para comenzar a estimar, diseñar codificar y vender sitios.

## Fase 1 (sin fecha estimada)

Como parte de los primeros pasos de [__Red Plug__]{.text-primary} para su inicio de operaciones se busca desarrollar los softwares principales de los cuales se alimentarán los proyectos, estos softwares estarán aferrados a las tecnologías en las que esten desarrollados por lo tanto es importante mantenerlos actualizados de manera constante.

### Administratix

[Administratix](https://github.com/red-plug/packages-administratix) será nuestro software Backend principal, en el crearemos todas las herramientas que necesitaremos para crear plugins basados en [Filament](https://filamentphp.com/plugins) de una manera más rápida. Contará con un base de código solida y varios plugins preinstalados

#### Filament Plugin Base

Dentro del proyecto en Github src/Support/ encontrarás todas las clases que nos ayudarán a crear los plugins, entre los cuales existe un ServiceProvider.php que será el service provider de donde todos los plugins hereden, adicional encontrarás un Filament/BasePlugin.php el cual nuevamente todas nuestras clases de tipo plugin heredarán. 

A partir de la carpeta src/Support/Filament encontrarás todas las clases abstractas para heredar las distintas funcionalidades de Filament
- Resource
- Resource/Pages/
- Actions
- Tables
- Forms

lo que buscamos es que cada implementación tipo plugin sea totalmente personalizable desde los PanelServiceProvider de cada proyecto:

Ejemplos

::code-mockup{:class="mb-8"}

```php
...
->plugins([
    YourPlugin::make()
            ->authorResource() // https://filamentphp.com/docs/3.x/panels/plugins#configuring-plugins-per-panel
            ->configureResourceUsing('author-resource', function(ResourceSettings $resource): void {
                $resource->label('custom label')
                        ->navigationIcon('heroicon-o-pencil')
                        ->model(YourCustomModel::class)
                        ->configurePageUsing('index', function(ListRecordsSettings $listRecords): void {
                            $listRecords->appendHeaderWidgets([])
                                        ->prependFooterWidgets([])
                                        ->configureTableUsing(function(TableSettings $table): void {
                                            $table->striped()
                                                    ->appendColumns([])
                                                    ->prependFilters([]);
                                        });
                        
                        })
            });
])
...
```
::

Para lo anterior se requiere una gran cantidad de código, inclusive de bastante recursividad, por favor revisar el [Project de Administratix](https://github.com/orgs/red-plug/projects/1/views/1) para darte un idea de como estamos dividiendo el código y como cada quien está tomando actividades por desarrollar

#### Plugins preinstalados

[Administratix](https://github.com/red-plug/packages-administratix) busca tener algunos plugins preinstalados creados en la carpeta /plugins/ junto con el mismo, algunos de ellos son los siguientes

- Stylist (Devuelve los estilos de Filament v2 para tener un sidebar con textura)
- Query Booster (Colección de Scopes para las tareas más recurrentes de Eloquent [por defecto quita las columnas timestamps de los modelos])
- Panel Tenacy (Crea divisiones de registros entre paneles para tener múltiples paneles con múltiples propositos, por ejemplo tener 2 sitios web en la misma aplicación, pero cada una con su información)
- API Builder (crea una api de un recurso en pocos minutos adapatandose a la especificación JSON:API)
- Developer Panel (porque el concepto de superadministrador no es suficiente, los desarrolladores cuentan con un propio panel de administración en cada aplicación)
- Image Optimizer (Convierte cualquier imagen subida a formato .webp)
- Action Logger (manten un registro de las acciones que cada usuario realiza)
- Lang Manager (permite agregar varios idiomas a los registros de cada plugin)

### API Builder

Debido a que el front será principalmente construido en [Nuxt](https://nuxt.com) requerimos de crear APIs para los distintos recursos a manejar, eso significa que el concepto de plug-in también debe de ser implementado de manera directa a cada recurso, es decir que si instalas el plugin red-plug/brands en tu panel, autómaticamente debería existir una api con el endpoint /api/v1/admin/brands disponible en tu aplicación, este plugin busca automatizar todo este proceso además de estandarizar la [especificación JSON:API](https://jsonapi.org) para facilitar su implementación en front.

Adicional esta plugin debe de agregar un recurso a los panels `API Config` para permitir crear tokens con sus respectivos permisos.

## Nutrix

[Nutrix](https://github.com/red-plug/templates-nutrix) es nuestro [template layer de Nuxt](https://nuxt.com/docs/getting-started/layers#usage).
Aún no controlamos al 100% Nuxt y mucho menos los Layers, pero creemos que es la mejor y más rápida manera de crear sitios web sin tener que lidiar con herramientas de paga o herramientas que no son del todo compatibles con lo que hacemos como Webflow, no descartamos su uso sin embargo sería para otros conceptos de desarrollo (landing pages por ejemplo).

Nutrix contiene todas las herramientas necesarias para conectarse a una API proveída por API Builder, principalmente mediante [composables](https://nuxt.com/docs/guide/directory-structure/composables) para obtener información

ejemplo

::code-mockup{:class="mb-8"}

```vue
// components/profile.vue
<template>
    <div>
        Your profile: {{ client.name }}
    </div>
    <div>
        Your last orders:
    </div>
    <div>
        <OrderItem v-for="order in orders" :key="order.id" :order="order">
    </div>

</template>
<script setup lang="ts">
    const client = await useNutrixAuthCurrent({ with: ['orders': {orderBy: 'createdAt'}]})
    const orders = client.orders;
</script>
```
::

## Fase 2

Durante la fase 2 crearemos los primeros plugins orientados a funcionamiento y necesidades reales de los clientes, creemos que el más sencillo podría ser el CMS ya que son algunos pocos módulos.


### CMS

El cms es un administrador de contenidos, en el regularmente se construyen blogs o documentaciones, el es solo un bloque más grande, es un plugin que recopila plugins, por lo tanto se va a requerir construir los siguientes plugins.

- Admins (manejo de administradores que pueden acceder al panel)
- Roles (manejo de roles y permisos que cada admin puede tener)
- Plantillas (manejo de plantillas, esto está muy relacionado a nuxt y funcionará como petición a desarrolladores de un nuevo [tema de Nuxt](https://nuxt.com/docs/guide/directory-structure/layouts))
- Gestión de medios (manejo de imagenes, videos, audios)
- Gestión de contenidos (el principal donde se manejan las entradas de blog, se debe seleccionar una plantilla)
- Comentarios (permite agregar comentarios a los contenidos)
- Lectores (permite crear sesiones a los visitantes)
  - Subscripciones de lectores (permite enviar correo a las personas que se suscribieron)
- Configuración de seo (permite agregar valores de seo a los registros y las páginas [resource y relationManager])

### CMS Template

El cms template será nuestro primer [template layer de Nuxt](https://nuxt.com/docs/getting-started/layers#usage) funcional es decir que podrá ya ser utilizado en aplicaciones reales, lo que se busca es que este template ofrezca algunos layouts por defecto y algunas configuraciones generales para comenzar a funciona junto con el plugin de CMS gracias a API Builder

## Fase 3

### Ecommerce

pendiente...


### Ecommerce Template

pendiente...


## Fase 4

### ERP

### Landings