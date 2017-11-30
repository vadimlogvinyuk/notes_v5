<template>
    <div v-if="users.length > 0">
        <router-link to="/allnotepage">  View all notes</router-link>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
       computed: {
           ...mapGetters ([
               'users'
           ])
       }
    }


</script>

