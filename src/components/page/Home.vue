<template>
    <div id="home">
        <NavMenu/>
        <TableOutNotes/>
    </div>
</template>

<script>
    import NavMenu       from '.././NavMenu.vue'
    import TableOutNotes from '.././TableOutNotes.vue'
    export default {
        components: {
            name: 'home',
            NavMenu,
            TableOutNotes,
        }}
</script>
