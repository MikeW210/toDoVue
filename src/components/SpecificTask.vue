<template>
    <div>
        <h2>
            {{specificTasks.text}}
        </h2>
    </div>
</template>

<script>
export default {
    name:"SpecificTask",
    data() {
        return{

        }
        
    },
    props: {
        specificTasks: Object,
    },
}
</script>

<style scoped>

</style>