<template>
    <div>
         <b-navbar type="dark" variant="dark">
            <b-navbar-nav>
                <b-nav-item class="text-center" href="#">Home</b-nav-item>
                <b-nav-item class="text-center" href="#">Results</b-nav-item>
            </b-navbar-nav>
        </b-navbar>
        <br>
        <b-form-group method="post" id="question" :label="polls_detail.id+'.'+' '+polls_detail.question_text"></b-form-group>  
        <div class="container" :key="i.id" v-for="i in choices" >
            <form :action="'http://127.0.0.1:8000/vote/'+`${i.question}`+'/'" method="post">
                <b-list-group id="list">
                    <b-list-group-item>
                        <input type="radio" name="choice" id="choice" :value="`${i.id}`" v-model="selected_choice">
                        <label id="choice" for="choice">{{i.choice_text}}</label>
                        <br>
                        <button id="btn" v-on:click="greet">Vote</button> 
                    </b-list-group-item>
                </b-list-group>
            </form>     
        </div>
    </div>
</template>
<script>
import {getApi} from '../axios-api.js';
export default {
    name: "Detail",
    data(){
        return {
            polls_detail:[],
            choices:[],
            selected_choice:[]
        }
    },
    methods:{
        greet: function (){
            alert("Vote Has Been Added!")
        }
    },
    created(){
        let id = this.$route.params.id
        getApi.get(id+'/').then(response => {
            this.polls_detail = response.data
        }).catch(err => {
            console.log(err);
        });
        
        getApi.get('vote/'+id+'/').then(response =>{
            this.choices = response.data
        }).catch(err =>{
            console.log(err);
        })
    }    
}
</script>
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
#btn{
    background-color: green;
    border: none;
    color: white;
    padding: 5px 20px;
    text-align: center;
    line-height: normal;
    font-weight: bold;
}
#question{
    font-weight: bold;
}
#choice{
    font-weight: bold;
}

</style>