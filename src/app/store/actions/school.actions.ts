import {createAction, props} from "@ngrx/store";
import {School} from "../../interfaces/school";

export const loadSchools = createAction('[School] Load Schools');
export const loadSchoolsSuccess = createAction('[School] Load Schools Success', props<{ schools: School[] }>());
export const loadSchoolsFailure = createAction('[School] Load Schools Failure', props<{ error: any }>());

export const addSchool = createAction('[School] Add School', props<{ school: School }>());
export const addSchoolSuccess = createAction('[School] Add School Success', props<{ school: School }>());
export const addSchoolFailure = createAction('[School] Add School Failure', props<{ error: any }>());

export const updateSchool = createAction('[School] Update School', props<{ school: School }>());
export const updateSchoolSuccess = createAction('[School] Update School Success', props<{ school: School }>());
export const updateSchoolFailure = createAction('[School] Update School Failure', props<{ error: any }>());

export const deleteSchool = createAction('[School] Delete School', props<{ id: number }>());
export const deleteSchoolSuccess = createAction('[School] Delete School Success', props<{ id: number }>());
export const deleteSchoolFailure = createAction('[School] Delete School Failure', props<{ error: any }>());
