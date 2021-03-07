<template>
    <div>
        <Header/>
    </div>
</template>
<script>
import axios from 'axios';
import Header from './layout/Header.vue';
export default {
    name: "Detail",
    components:{
        Header
    },
    data(){
        return {
            polls_detail:[]
        }
    },
    created(){
        let id = this.$route.params.id
        axios.get('http://127.0.0.1:8000/polls/'+id).then(response => {
            this.polls_detail = response.data
        });
    }    
}
</script>
<style scoped>

</style>