<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
          <b-nav-item class="text-center" href="#"><router-link to="/" class="text-white">Home</router-link></b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <b-col :key="index" v-for="(i, index) in polls">
      <b-card :title="'Question ' + i.id" :sub-title="i.pub_date">
        <b-card-text>
          {{ i.question_text }}
        </b-card-text>
        <a href="#" class="card-link"><router-link :to="'/results/' + i.id">Results</router-link></a>
        <a href="#" class="card-link"><router-link :to="'/polls/' + i.id">Vote</router-link></a>
      </b-card>
    </b-col>
  </div>
</template>

<script>
import {getApi} from '../axios-api.js'

export default {
  name: "HelloWorld",
  data() {
    return {
      polls: []
    };
  },
  created(){
    getApi.get('').then(response =>{
      this.polls = response.data
    }).catch(err =>{
      console.log(err);
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
