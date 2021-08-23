import { createSelector } from "reselect"

const selectCurrentUser = state = state.currentUser

export const selectUserSaved = createSelector(
    [selectCurrentUser],
    currentUser => currentUser.saved
)

