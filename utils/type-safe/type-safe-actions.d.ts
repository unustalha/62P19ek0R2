import { StateType, ActionType } from 'typesafe-actions';

/**
 * This declaration helps us get action payload typings automatically inside the
 * createReducer syntax 'handleActon' function usage as long as we
 * stick to the convention of adding our action types to the root action interface
 * in each action file. This significantly reduces manual work to make types work.
 *
 * declare module 'typesafe-actions' {
 *  export interface RootActionInterface {
 *   moduleNameStoreAction: typeof moduleNameStoreAction;
 *  }
 * }
 *
 */

declare module 'typesafe-actions' {

  export interface RootActionInterface { }

  export type RootAction = ActionType<RootActionInterface>;

  interface Types {
    RootAction: RootAction;
  }
}