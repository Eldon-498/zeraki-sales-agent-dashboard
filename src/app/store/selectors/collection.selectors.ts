import {createFeatureSelector, createSelector} from "@ngrx/store";
import {CollectionState} from "../reducers/collection.reducers";
import {Collection} from "../../interfaces/collection";

export const selectCollectionState = createFeatureSelector<CollectionState>('collections');

export const selectAllCollections = createSelector(
  selectCollectionState,
  (state: CollectionState) => state.collections
);

export const selectCollectionError = createSelector(
  selectCollectionState,
  (state: CollectionState) => state.error
);
export const selectValidCollections = createSelector(
  selectAllCollections,
  (collections: Collection[]) => collections.filter(coll => coll.status === 'Valid')
);

export const selectSortedCollections = createSelector(
  selectValidCollections,
  (collections: Collection[]) => [...collections].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
);
