import {SchoolState} from "../reducers/school.reducers";
import {createFeatureSelector, createSelector} from "@ngrx/store";


export const selectSchoolState = createFeatureSelector<SchoolState>('schools');

export const selectAllSchools = createSelector(
  selectSchoolState,
  (state: SchoolState) => state.schools
);

export const selectSchoolError = createSelector(
  selectSchoolState,
  (state: SchoolState) => state.error
);
