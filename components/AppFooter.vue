<template>
    <footer class="footer footer-center bg-neutral text-neutral-content p-4">
        <aside>
            <p>Copyright © <span v-text="year"></span> - All right reserved by <a href="" class="link link-primary">Red Plug</a> Associates</p>
        </aside>
    </footer>
</template>
<script setup lang="ts">
const year = new Date().getFullYear()
</script>