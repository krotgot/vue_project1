<template>
    <div class='nameSurname'>
        
         <h1> {{ `${i.name} ${i.surname}` }} </h1>
    </div>
</template>

<script>

export default {
   name: 'nameSurname',
   props: {
       i: Object
   } 
}
</script>

<style scope lang='scss'>

.nameSurname {
    color: black;
    background-color: yellow;

}
</style>