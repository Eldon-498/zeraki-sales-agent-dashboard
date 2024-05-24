import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap, switchMap} from "rxjs/operators";
import {of} from "rxjs";
import * as SchoolActions from '../actions/school.actions'
import {Injectable} from "@angular/core";
import {SchoolService} from "../../services/school-service/school.service";

@Injectable()
export class  SchoolEffects {

  constructor(private actions$: Actions, private schoolService: SchoolService) {
  }


  loadSchools$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SchoolActions.loadSchools),
      mergeMap(() =>
        this.schoolService.getSchools().pipe(
          map(schools => SchoolActions.loadSchoolsSuccess({ schools })),
          catchError(error => of(SchoolActions.loadSchoolsFailure({ error })))
        )
      )
    )
  );

  addSchool$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SchoolActions.addSchool),
      mergeMap(action =>
        this.schoolService.addSchool(action.school).pipe(
          map(school => SchoolActions.addSchoolSuccess({ school })),
          catchError(error => of(SchoolActions.addSchoolFailure({ error })))
        )
      )
    )
  );

  updateSchool$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SchoolActions.updateSchool),
      switchMap(action =>
        this.schoolService.updateSchool(action.school).pipe(
          map(school => SchoolActions.updateSchoolSuccess({ school })),
          catchError(error => of(SchoolActions.updateSchoolFailure({ error })))
        )
      )
    )
  );

  deleteSchool$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SchoolActions.deleteSchool),
      mergeMap(action =>
        this.schoolService.deleteSchool(action.id).pipe(
          map(() => SchoolActions.deleteSchoolSuccess({ id: action.id })),
          catchError(error => of(SchoolActions.deleteSchoolFailure({ error })))
        )
      )
    )
  );
}
