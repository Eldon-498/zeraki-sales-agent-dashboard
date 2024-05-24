import {School} from "../../interfaces/school";
import {createReducer, on} from "@ngrx/store";
import * as SchoolActions from '../actions/school.actions'

export interface SchoolState {
  schools: School[];
  error: any;
}

export const initialState: SchoolState = {
  schools: [],
  error: null
};

export const schoolReducer = createReducer(
  initialState,
  on(SchoolActions.loadSchoolsSuccess, (state, { schools }) => ({
    ...state,
    schools
  })),
  on(SchoolActions.loadSchoolsFailure, (state, { error }) => ({
    ...state,
    error
  })),
  on(SchoolActions.addSchoolSuccess, (state, { school }) => ({
    ...state,
    schools: [...state.schools, school]
  })),
  on(SchoolActions.addSchoolFailure, (state, { error }) => ({
    ...state,
    error
  })),
  on(SchoolActions.updateSchoolSuccess, (state, { school }) => ({
    ...state,
    schools: state.schools.map(sch => sch.id === school.id ? school : sch)
  })),
  on(SchoolActions.updateSchoolFailure, (state, { error }) => ({
    ...state,
    error
  })),
  on(SchoolActions.deleteSchoolSuccess, (state, { id }) => ({
    ...state,
    schools: state.schools.filter(sch => sch.id !== id)
  })),
  on(SchoolActions.deleteSchoolFailure, (state, { error }) => ({
    ...state,
    error
  }))
);
