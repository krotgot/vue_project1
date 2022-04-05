<template>
  <div>
    <nameSurname
          v-for="(item, index) in arr"
            :key="index"
            :i="item"
            />

    Мы молодцы! почти

      <div>
        <button @click="addOne">Add 1</button>
        <p>{{ count }}</p>
      </div>
  </div>
</template>

<script>
import nameSurname from '@/components/nameSurname.vue'

export default {
  name: 'AboutView',
  components: {
    nameSurname
  },
  data(){
        return {
            arr: [
                    {
                    name: 'German',
                    surname: 'Bezhev'
                    },
                    {
                    name: 'Andrey',
                    surname: 'Semenushkin'
                    },
                    {
                    name: 'Leo',
                    surname: 'Cherednik'
                    }
                ],
              count: 0
                }
    },
    methods: {
      addOne(){
        this.count++
      }
    },

    
  }
</script>




