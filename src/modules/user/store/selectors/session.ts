import {createSelector} from '@reduxjs/toolkit'

import {rootSelector} from "../../../../common/store/selectors/root";

const createAppRootSelector = createSelector(rootSelector, state => state.session)

export const userSessionToken = createSelector(createAppRootSelector, state => state)
export const userSession = createSelector(createAppRootSelector, state => state.user)
export const userToken = createSelector(createAppRootSelector, state => state?.token ?? '')

export const isAuthorized = createSelector(userSession, state => Boolean(state))
export const userID = createSelector(userSession, state => state?._id ?? '')
