---
title: 'Servicios y tecnologías | Red Plug'
description: 'Aprende cuales son nuestros servicios y las tecnologías que usaremos'
---

# Servicios y tecnologías

## Desarrollo a la medida

Nuestro esquema de negocios principal será el desarrollo a la medida, ofreciendo aplicaciones completas escritas en [PHP](https://www.php.net/){.!text-php} y [TypeScript](https://www.typescriptlang.org/){.!text-typescript}

### Backend (Filament y Administratix)

Usaremos [Laravel](https://laravel.com/){.!text-laravel} como nuestra base sin embargo para el administrador utilizaremos [FilamentPHP](https://filamentphp.com/){.!text-filament} y nuestra extensión de [Administratix](https://github.com/red-plug/packages-administratix) la idea es tener una gran colección de [Filament plugins](https://filamentphp.com/plugins) para reutilizarlos siempre que se requiera.

### Frontend (Nuxt y Nutrix)

Respecto al diseño y funcionalidad final estaremos utilizando [Nuxt](https://nuxt.com/){.!text-nuxt} el cual es un framework de [Vue](https://vuejs.org/){.!text-vue} del cual recomiedan programar en [TypeScript](https://vuejs.org/guide/typescript/overview.html#general-usage-notes){.!text-typescript} y junto con ello para poder conectarnos a la API proveida por el Backend estaremos utilizando [Nutrix](https://github.com/red-plug/templates-nutrix).
## Hosting

### Digital Ocean

[Digital Ocean](https://www.digitalocean.com/){.!text-digitalocean} es un proveedor de hosting múltiproposito, sin embargo nosotros estamos interesados en los [VPS, maquinas virtuales](https://www.digitalocean.com/products/droplets), contaremos con 3 tipos de servidores con los siguientes prefijos

- php- Estos servidores están preparados para hostear aplicaciones PHP y MySQL o MariaDB
- nodejs- estos servidores están preparados hostear aplicaciones JS
- meilisearch- estos servidores están preparados para funcionar como gestores de búsqueda

#### Laravel Forge para el backend

[Laravel Forge](https://forge.laravel.com/){.!text-forge} es una solución de aprovisionamiento de servidores para php y especificamente para Laravel, esto facilita enormemente los deploys constantes que se suelen requerir en el backend, Laravel Forge requiere de un proveedor de VPS como Digital Ocean para funcionar.

#### Jenkinks para el frontend (A futuro)
[Jenkins](https://www.jenkins.io/){.!text-jenkins} es un automatizador de servidores parecido a Laravel Forge pero con una mayor funcionalidad y profundidad, sin embargo requiere conocimientos más profundos de DevOps, adicional, la configuración de Nginx y NodeJS requiere ser manual, por lo tanto aunque es una excelente opción no es la primera, por lo que optaremos por Laravel Forge para desplegar nuestras aplicaciones Nuxt, no es lo más óptimo pero de momento nos funcionará.

#### Meilisearch
[Meilisearch](https://www.meilisearch.com/){.!text-meilisearch} es un motor de búsqueda avanzado que ofrece resultados de búsqueda óptimos, la implementación de estás búsquedas nos puede colocar por encima del mercado al ofrecer soluciones innovadoras sin embargo requiere de su propia configuración en su servidor propio. la implementación de esto será por Laravel Scout y API Builder para facilitar su implementación.