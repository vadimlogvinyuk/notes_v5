import * as types from './mutations_types'

export default {
    [types.ADD_NEW_USER](state,userName) {
        if (userName == "") {
            alert("Oops, user name is not correct");
            return;
        }
        var userFound = false;
        for (var i=0; state.users.length > i; i++)
        {

            if (userName == state.users[i].userName) userFound=true;
        }

        if (!userFound) {

            var user = {
                userName:userName,
                Notes:[]
            };

            state.users.push(user);
            state.currentUser = user;
        } else {

        }
        userName = '';
        state.multipleSelection.clean;

    },

    [types.ADD_NOTE](state,NotesText) {

        if (NotesText.length == 0) {
            alert("please add text ...");
        }else {
            state.currentUser.Notes.push({note:NotesText,act: false});
            NotesText = '';

        }
    },

    [types.OTHER_USER](state,OtherUser) {
        state.currentUser = OtherUser;
        state.multipleSelection =  [];
    },

    [types.CHECK_BOX] (state,val) {
        state.multipleSelection = val;
    },

    [types.SHARE_NOTES](state,user) {

        for (var n=0; state.multipleSelection.length > n; n++)
        {
            user.Notes.push({note:state.multipleSelection[n].note, act: false});
        }
        state.multipleSelection.clean;

    },

    [types.DELETE_ROW] (state,index) {
        state.currentUser.Notes.splice(index, 1);
    },

    [types.COMPLETE] (state,row) {
        row.act = !row.act;
    }
}
