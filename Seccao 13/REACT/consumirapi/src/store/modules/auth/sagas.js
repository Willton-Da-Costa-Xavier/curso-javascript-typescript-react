import { call, put, takeLatest, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';



function* loginRequest({payload}) {
  console.log('Saga', payload);
}

export default all([takeLatest(types.LOGIN_REQUEST, loginRequest)]);
