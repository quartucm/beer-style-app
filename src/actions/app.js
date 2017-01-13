import { APP_LOAD, GET_STYLE_ID } from 'constants/action-types';
import axios from 'axios';

export function loadApp() {
  return {
    type: APP_LOAD,
  }
}
