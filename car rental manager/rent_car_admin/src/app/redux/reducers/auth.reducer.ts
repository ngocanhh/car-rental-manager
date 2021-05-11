import { LoggedUser } from './../../models/logged-user.model';
import * as StateActions from '../actions/auth.action';

export type Action = StateActions.All;

export interface ConfigurationState {
    configuration: any;
}

export interface State {
    access_token: string;
    token_type: string;
    expires_in: string;
    username: string;
    users?: any;
}

export const initialState: LoggedUser = {
    access_token: null,
    token_type: null,
    expires_in: null,
    username: null,
};

export function reducer(state = initialState, action: StateActions.All): any {
    switch (action.type) {
        case StateActions.LOGIN_SUCCESS:
            return {
                ...state,
                access_token: action.payload.access_token,
                token_type: action.payload.token_type,
                expires_in: action.payload.expires_in,
                username: action.payload.username,
            };
        case StateActions.LOGIN_FAILURE:
            return { ...state, ...action.payload };
        case StateActions.LOGOUT:
            return {
                ...state,
                access_token: null,
                token_type: null,
                expires_in: null,
                username: null,
            };
        case StateActions.REGISTRATIONING:
            return { ...state, isAuthenticated: false, user: null, token: null, registrationing: true, error: '' };
        case StateActions.REGISTRATION_SUCCESS:
            return {
                ...state, isAuthenticated: true, token: action.payload.token
            };
        case StateActions.REGISTRATION_FAILURE:
            return { ...state, ...action.payload, registrationing: false, token: null };
        default:
            return state;
    }
}
