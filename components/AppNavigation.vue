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
        display: "Esquema",
        navigate: "/schema"
    },
    {
        display: "Equipo",
        navigate: "/team"
    },
    {
        display: "Ruta",
        navigate: "/route"
    }
]
</script>