<template>
    <div class="task">
        <h2>
            {{specificTask.task}}
            <i @click="onDelete(specificTask.id)" >wykasuj</i>
        </h2>
    </div>
</template>

<script>import axios from "axios"

export default {
    name:"SpecificTask",
    data() {
        return{

        }
        
    },
    props: {
        specificTask: Object,
    },
    methods:{
        onDelete(id){
            axios.delete("http://localhost:3000/Tasks/" + id)
            
        }
    }
}
</script>

<style scoped>
.task{
    background-color: blanchedalmond;
}

</style>