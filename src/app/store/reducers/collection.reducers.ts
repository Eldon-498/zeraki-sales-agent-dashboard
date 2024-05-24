import {Collection} from "../../interfaces/collection";
import {createReducer, on} from "@ngrx/store";
import * as CollectionActions from '../actions/collection.actions'

export interface CollectionState {
  collections: Collection[];
  error: any;
}

export const initialState: CollectionState = {
  collections: [],
  error: null
};

export const collectionReducer = createReducer(
  initialState,
  on(CollectionActions.loadCollectionsSuccess, (state, { collections }) => ({
    ...state,
    collections
  })),
  on(CollectionActions.loadCollectionsFailure, (state, { error }) => ({
    ...state,
    error
  })),
  on(CollectionActions.addCollectionSuccess, (state, { collection }) => ({
    ...state,
    collections: [...state.collections, collection]
  })),
  on(CollectionActions.addCollectionFailure, (state, { error }) => ({
    ...state,
    error
  })),
  on(CollectionActions.updateCollectionSuccess, (state, { collection }) => ({
    ...state,
    collections: state.collections.map(coll => coll.id === collection.id ? collection : coll)
  })),
  on(CollectionActions.updateCollectionFailure, (state, { error }) => ({
    ...state,
    error
  })),
  on(CollectionActions.deleteCollectionSuccess, (state, { id }) => ({
    ...state,
    collections: state.collections.filter(coll => coll.id !== id)
  })),
  on(CollectionActions.deleteCollectionFailure, (state, { error }) => ({
    ...state,
    error
  }))
);
