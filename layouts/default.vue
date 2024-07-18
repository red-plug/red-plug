<template>
    <div class="drawer">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
            <AppHeader></AppHeader>
            <div class="container mx-auto py-3 lg:py-8 p-2 sm:p-4 md:p-8" id="content">
                <Alert class="alert-warning shadow shadow-warning my-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>
                        Seguimos en desarrollo y planeación, si ves algo incorrecto o deseas cambiar algo por favor <Anchor href="https://github.com/red-plug/red-plug/issues" class="link-primary link-hover" external>levanta un issue en Github</Anchor> o házmelo saber
                    </span>
                </Alert>
                <slot />
            </div>
            <AppFooter></AppFooter>
        </div>
        <div class="drawer-side">
            <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
            <AppNavigation class="menu bg-base-200 min-h-full w-80 p-4"></AppNavigation>
        </div>
    </div>
</template>
<script setup type="ts">
    useHead({
        htmlAttrs: {
            'data-theme': 'redpluglight'
        }
    })
</script>