<template>
    <ul class="menu">
        <li v-for="link in links">
            <NuxtLink :to="link.navigate">
                <span v-text="link.display"></span>
            </NuxtLink>
        </li>
    </ul>
</template>
<script setup lang="ts">
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
</script>