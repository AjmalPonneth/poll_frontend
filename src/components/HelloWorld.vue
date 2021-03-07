<template>
  <div>
    <Header/>
       <b-col :key="i.id" v-for="i in polls">
         <b-card :title="'Question' + i.id" :sub-title="i.pub_date">
            <b-card-text>
              {{i.question_text}}
            </b-card-text>  
            <a href="#" class="card-link">Results</a>
            <b-link href="#" class="card-link"><router-link :to="'/polls/'+i.id">Vote</router-link></b-link>
         </b-card>
       </b-col>
  </div>
</template>

<script>
import Header from "@/components/layout/Header.vue";
import axios from 'axios'
export default {
  name: 'HelloWorld',
  components:{
    Header
  },
  data () {
    return {
      polls:[]
    }
  },
  created(){
      axios.get('http://127.0.0.1:8000/polls/').then(response =>{
        this.polls = response.data
      }).then((err)=>{
        console.error(err)
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
