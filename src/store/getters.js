export default {

    users(state) {
        return state.users;

    },
    currentUser(state) {
        return state.currentUser;

    },
    multipleSelection (state) {
        return state.multipleSelection;

    },
    allNotes (state) {

        var arrNotes = []

        for(var n = 0; state.users.length > n; n++) {
            for(var i = 0; state.users[n].Notes.length > i; i++) {
                arrNotes.push({name:state.users[n].userName,note:state.users[n].Notes[i].note})
            }
        }

        return arrNotes
    }

}
