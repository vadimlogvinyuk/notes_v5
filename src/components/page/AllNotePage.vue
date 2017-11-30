<template>
    <div>
        <el-button type="primary"><router-link to="/">  Back to home page</router-link></el-button>

    <el-table
            :data="allNotes"
            style="width: 100%">
        <el-table-column
                prop="name"
                label="name"
                width="180">
        </el-table-column>
        <el-table-column
                prop="note"
                label="note"
                width="180">
        </el-table-column>
    </el-table>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        computed: {
            ...mapGetters ([
                'users','allNotes'
            ])
        },

    }
</script>