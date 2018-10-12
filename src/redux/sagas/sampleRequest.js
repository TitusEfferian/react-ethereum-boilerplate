import { call, put } from 'redux-saga/effects'
import { SAMPLE_REQUEST_SUCCESS, SAMPLE_REQUEST_FAILED } from '../actions/types';
import { sampleRequestApi } from '../apis/sampleRequest';


export function* fetchSampleRequest() {
  try {
    const data = yield call(sampleRequestApi)
    yield put({ type: SAMPLE_REQUEST_SUCCESS, data })
  }
  catch (e) {
    yield put({ type: SAMPLE_REQUEST_FAILED, errData: { message: e.message } })
  }
}