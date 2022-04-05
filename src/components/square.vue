<template>
    <div 
        class="square"
        :style="`background: ${color}`"
    >
        {{ number }}
    </div>
</template>

<script>

export default {
    name: "x-square",
    props: {
        number: Number,
        color: String 
    },
}
</script>

<style>
.square {
    width: 50px;
    height: 50px;
    border: 2px solid black;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
