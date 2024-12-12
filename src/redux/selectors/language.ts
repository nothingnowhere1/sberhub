import {createSelector} from '@reduxjs/toolkit'

import {rootSelector} from './root'

const createAppRootSelector = createSelector(rootSelector, state => state.language)

export const pickedLanguage = createSelector(createAppRootSelector, state => state.language)
