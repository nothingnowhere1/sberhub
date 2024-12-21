import {createSelector} from '@reduxjs/toolkit'

import {rootSelector} from './root'

const createAppRootSelector = createSelector(rootSelector, state => state.session)

export const userSession = createSelector(createAppRootSelector, state => state.session)

export const isAuthorized = createSelector(userSession, state => Boolean(state))
export const userToken = createSelector(userSession, state => state?.token ?? '')
export const userID = createSelector(userSession, state => state?._id ?? '')
