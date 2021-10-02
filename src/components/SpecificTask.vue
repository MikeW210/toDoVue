<template>
    <div class="task">
        <h2>
            {{specificTask.task}}
            <i @click="onDelete(specificTask.id)" class="fas fa-times">wykasuj</i>
        </h2>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name:"SpecificTask",
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

<style>
.task {
     background: #b2b390;
}
</style>