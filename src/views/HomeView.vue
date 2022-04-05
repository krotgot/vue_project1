<template>
  <div class="home">
    <x-input
      type="number"
      @hasChanged="numberUpd"
    >
    </x-input>
    <x-input
      type="color"
      @hasChanged="colorUpd"
    >
    </x-input>
    <div class="home__wrapper">
      <x-square
        v-for="i in squareNum"
        :key="i"
        :number="i"
        :color="buildColor(i)"
      > 
      </x-square>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import xInput from '@/components/x-input.vue'
import xSquare from '@/components/square.vue'

export default {
  

  name: 'HomeView',
  components: {
    xInput,
    xSquare,
  },

  
  data() {
    return {
      squareNum: 0,
      color: null,
      isEven: true
    }
  },
  created() {
    if (Cookies.get('number')) {
      this.squareNum = parseInt(Cookies.get('number'))
    }    
  },
  methods: {
    numberUpd(num) {
      this.squareNum = parseInt(num)
      Cookies.set('number', this.squareNum)
    },
    colorUpd(color) {
      this.isEven = !this.isEven
      this.color = color

      if (this.isEven) {
        Cookies.set('color1', this.color)
      } else {
        Cookies.set('color2', this.color)
      }
    },
    buildColor(i) {
      if (this.color) {
        if(i % 2 === 0 && this.isEven) {
          return this.color 
        } 
        if(!this.isEven && i % 2 !== 0) {
          return this.color
        }
      }

      if(i % 2 === 0) {
        return Cookies.get('color1') 
      } 
      if(i % 2 !== 0) {
        return Cookies.get('color2')
      }
    }
  }
  
}

</script>

<style>
.home__wrapper {
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>