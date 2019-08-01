import {
  REFRESH_TOKEN,
  GET_MARKETS,
  GET_USER_PROFILE,
  UPDATE_MARKET_SELECTION,
  DISPLAY_ERROR_MESSAGE
} from './actions';
// import { User } from '../modules/login/model/login.model';
 import { tassign } from 'tassign';
import { Error } from '@ar-angular/shared/models';

export interface IAppState {
  selectedMarket: any;
  markets: any[];
  user: any;
  isRateEditModeEnabled: boolean;
  error: Error;
}

export const INITIAL_STATE: IAppState = {
  selectedMarket: {
    divNbr: 0,
    divNm: '',
    zoneCd: '',
    zoneNum: 0,
    mrktCd: '',
    displayName: ''
  },
  markets: [],
  user: {
    roles: [],
    userId: '',
    firstName: '',
    lastName: '',
    expiration: '',
    markets: []
  },
  isRateEditModeEnabled: false,
  error: {
    display: false,
    code: '',
    message: ''
  }
};

export function rootReducer(state: IAppState, action): IAppState {
  switch (action.type) {
    case REFRESH_TOKEN:
      // return { counter: state.counter + 1 };
      // return Object.assign({}, state, {counter: state.counter + 1});
      return tassign(state, {user: action.payload});

    case GET_MARKETS:
      return tassign(state, { markets: action.payload });

    case GET_USER_PROFILE:
      return tassign(state, {user: action.payload});

    case UPDATE_MARKET_SELECTION:
      return tassign(state, {selectedMarket: action.payload});

    case DISPLAY_ERROR_MESSAGE:
      return tassign(state, {error: action.payload});
  }
  return state;
}
