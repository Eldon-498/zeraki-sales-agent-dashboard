import {createAction, props} from "@ngrx/store";
import {Collection} from "../../interfaces/collection";

export const loadCollections = createAction('[Collection] Load Collections');
export const loadCollectionsSuccess = createAction('[Collection] Load Collections Success', props<{ collections: Collection[] }>());
export const loadCollectionsFailure = createAction('[Collection] Load Collections Failure', props<{ error: any }>());

export const addCollection = createAction('[Collection] Add Collection', props<{ collection: Collection }>());
export const addCollectionSuccess = createAction('[Collection] Add Collection Success', props<{ collection: Collection }>());
export const addCollectionFailure = createAction('[Collection] Add Collection Failure', props<{ error: any }>());

export const updateCollection = createAction('[Collection] Update Collection', props<{ collection: Collection }>());
export const updateCollectionSuccess = createAction('[Collection] Update Collection Success', props<{ collection: Collection }>());
export const updateCollectionFailure = createAction('[Collection] Update Collection Failure', props<{ error: any }>());

export const deleteCollection = createAction('[Collection] Delete Collection', props<{ id: number }>());
export const deleteCollectionSuccess = createAction('[Collection] Delete Collection Success', props<{ id: number }>());
export const deleteCollectionFailure = createAction('[Collection] Delete Collection Failure', props<{ error: any }>());
