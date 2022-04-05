<template>
    <div>
        <main-nav></main-nav>
        <router-view/>
        <footer>
            
        </footer>
   </div>
</template>

<script>
import MainNav from '@/components/MainNav.vue'

export default {
    name: 'IndexLayout',
    components: {
        MainNav
    }
}
</script>

<style lang="scss" src="./index.scss"></style>