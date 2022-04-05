<template>
    <nav>
        <span 
            v-for="(i, index) in routerList"
            :key="index"
            class="router-link"
        >
            <router-link
                :to="i.path"
                v-if="i.meta.postion === 'main'"
            >
                {{ i.name }}
            </router-link>
        </span>
    </nav>
</template>
<script>
export default {
    name: 'MainNav',
    data() {
        return {
            routerList: [],
        }
    },
    mounted() {
        this.routerList = this.$router.options.routes
    }
}
</script>
<style lang="scss" scoped>
    .router-link {
        text-transform: capitalize;

        & + & {
            &:before {
                content: '|';
            }
        }
    }
</style>