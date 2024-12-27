import {createSelector} from '@reduxjs/toolkit'

import {rootSelector} from "../../../store/selectors/root";

const createAppRootSelector = createSelector(rootSelector, state => state.language)

export const pickedLanguage = createSelector(createAppRootSelector, state => state.language)
