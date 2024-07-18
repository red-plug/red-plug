<template>
    <ul class="menu">
        <li v-for="link in links">
            <NuxtLink :to="link.navigate" :class="[route.path == link.navigate ? 'text-primary' : '']">
                <span v-text="link.display"></span>
            </NuxtLink>
        </li>
    </ul>
</template>
<script setup lang="ts">

const route = useRoute()

const links = [
    {
        display: "Ruta",
        navigate: "/route"
    },
    {
        display: "Equipo",
        navigate: "/team"
    },
    {
        display: "Estimación",
        navigate: "/estimation"
    },
    {
        display: "Servicios",
        navigate: "/services-and-technologies"
    }
]
console.log(route.path)
</script>