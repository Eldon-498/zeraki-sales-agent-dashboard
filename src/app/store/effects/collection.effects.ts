import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {catchError, map, mergeMap, switchMap} from "rxjs/operators";
import * as CollectionActions from '../actions/collection.actions';
import {CollectionsService} from "../../services/collection-service/collections-service.service";
import {of} from "rxjs";


@Injectable()
export class CollectionsEffects {

  constructor(private actions$: Actions, private collectionService: CollectionsService) {}


  loadCollections$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CollectionActions.loadCollections),
      mergeMap(() =>
        this.collectionService.getCollections().pipe(
          map(collections => CollectionActions.loadCollectionsSuccess({ collections })),
          catchError(error => of(CollectionActions.loadCollectionsFailure({ error })))
        )
      )
    )
  );

  addCollection$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CollectionActions.addCollection),
      mergeMap(action =>
        this.collectionService.addCollection(action.collection).pipe(
          map(collection => CollectionActions.addCollectionSuccess({ collection })),
          catchError(error => of(CollectionActions.addCollectionFailure({ error })))
        )
      )
    )
  );

  updateCollection$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CollectionActions.updateCollection),
      switchMap(action =>
        this.collectionService.updateCollection(action.collection).pipe(
          map(collection => CollectionActions.updateCollectionSuccess({ collection })),
          catchError(error => of(CollectionActions.updateCollectionFailure({ error })))
        )
      )
    )
  );

  deleteCollection$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CollectionActions.deleteCollection),
      mergeMap(action =>
        this.collectionService.deleteCollection(action.id).pipe(
          map(() => CollectionActions.deleteCollectionSuccess({ id: action.id })),
          catchError(error => of(CollectionActions.deleteCollectionFailure({ error })))
        )
      )
    )
  );
}


