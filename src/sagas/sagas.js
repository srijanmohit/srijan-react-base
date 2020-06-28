import { put, takeEvery } from 'redux-saga/effects';

export function* updateMenu() {
  yield put({ type: `MENU_UPDATE`, actualAction: 'MENU_UPDATE' })
}

export function* watchAction() {
  yield takeEvery('updateMenuItem', updateMenu)
}
