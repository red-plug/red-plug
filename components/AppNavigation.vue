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

interface NavLink {
    display: string,
    navigate: string
}

const route = useRoute()

const links: NavLink[] = [
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