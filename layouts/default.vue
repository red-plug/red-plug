<template>
    <div class="drawer">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
            <!-- Navbar -->
            <AppHeader></AppHeader>
            <div class="container mx-auto py-3 lg:py-8">
                <slot />
            </div>
            <AppFooter></AppFooter>
            <!-- Page content here -->
        </div>
        <div class="drawer-side">
            <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
            <AppNavigation class="menu bg-base-200 min-h-full w-80 p-4"></AppNavigation>
        </div>
    </div>
</template>
<script>
export default {
    setup() {
        // Configuración específica del layout
        const bodyAttrs = {
            "meta-theme": 'redpluglight'
        };

        return {
            bodyAttrs
        };
    }
}
</script>