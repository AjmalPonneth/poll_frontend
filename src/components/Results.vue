<template>
    <div>
        <b-navbar type="dark" variant="dark">
            <b-navbar-nav>
                <b-nav-item class="text-center" href="#"><router-link to="/" class="text-white">Home</router-link></b-nav-item>
                <b-nav-item class="text-center" href="#" active>Results</b-nav-item>
            </b-navbar-nav>
        </b-navbar>
        <div class="container">
            <br>
            <b-list-group :key="i.id" v-for="i in results">
                <b-list-group-item>
                    <p id="text">{{i.choice_text}}</p>
                    Votes: <b-badge variant="primary">{{i.votes}}</b-badge>
                </b-list-group-item>
            </b-list-group>
        </div>
    </div>
</template>
<script>
import {getApi} from '../axios-api.js'
export default {
    name: "Results",
    components:{
        getApi,
    },
    data(){
        return{
            results:[]
        }
    },
    created(){
        let id = this.$route.params.id
        getApi.get('vote/'+id+'/').then(response =>{
            this.results = response.data
        })
    }
}
</script>
<style scoped>
.text-white{
    text-decoration: none;
}
#text{
    font-weight: bold;
}
</style>