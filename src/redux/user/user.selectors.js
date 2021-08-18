import { createSelector } from "reselect"

const selectCurrentUser = state = state.currentUser

export const selectUserConvos = createSelector(
    [selectCurrentUser],
    currentUser => currentUser.conversations 
)

