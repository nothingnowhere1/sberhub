import {createSelector} from "@reduxjs/toolkit";
import {rootSelector} from "../../store/selectors/root";

const createSnackbarSelector = createSelector(rootSelector, state => state.snackbar)

export const getSnackbars = createSelector(createSnackbarSelector, state => state.snackbars)

