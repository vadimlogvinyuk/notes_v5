import * as types from './mutations_types'

export default {

    addNewUser ({ commit },userName) {
        commit(types.ADD_NEW_USER,userName)
    },
    AddNote ({ commit },NotesText) {
        commit(types.ADD_NOTE,NotesText)
    },
    OtherUser ({ commit },OtherUser) {
        commit(types.OTHER_USER,OtherUser)
    },
    onClickCheckBox ({ commit },val) {
        commit(types.CHECK_BOX,val)
    },
    ShareNotes ({ commit },user) {
        commit(types.SHARE_NOTES,user)
    },
    deleteRowFromUser ({ commit },index) {
        commit(types.DELETE_ROW,index)
    },
    onComplite ({ commit },row) {
        commit(types.COMPLETE,row)
    }

}
