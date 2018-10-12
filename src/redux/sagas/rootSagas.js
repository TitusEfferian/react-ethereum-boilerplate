import { all, takeEvery } from 'redux-saga/effects'
import * as Types from '../actions/types'
import { fetchSampleRequest } from './sampleRequest';


export default function* watchSagas() {
  yield all([
    yield takeEvery(Types.SAMPLE_REQUEST, fetchSampleRequest)
  ])
}