import {createSelector} from '@reduxjs/toolkit'

import {AppState} from '../store'

export const rootSelector = createSelector((state: AppState) => state, state => state)
