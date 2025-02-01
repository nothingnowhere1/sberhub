import {createSelector} from '@reduxjs/toolkit'

import {rootSelector} from "../../../store/selectors/root";

const createAppRootSelector = createSelector(rootSelector, state => state.sidebar)

export const sidebarSelector = createSelector(createAppRootSelector, state => state.isOpen)
