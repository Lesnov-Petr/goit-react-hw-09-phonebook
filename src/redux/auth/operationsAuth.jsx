import axios from "axios";
import { authReducer } from ".";
import serviceAPI from "../../Service/ServiceAPI";

const {
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
} = authReducer.actions;

const tokenHeaders = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const getUser = () => async (dispatch, getState) => {
  dispatch(getCurrentUserRequest());
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) return;

  tokenHeaders.set(persistedToken);

  try {
    const { data } = await serviceAPI.getCurrentUser();
    dispatch(getCurrentUserSuccess(data));
  } catch (error) {
    tokenHeaders.unset();
    dispatch(getCurrentUserError(error.message));
  }
};

const register = (credential) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const { data } = await serviceAPI.registerQuery(credential);
    tokenHeaders.set(data.token);
    dispatch(registerSuccess(data));
  } catch (error) {
    dispatch(registerError(error.message));
  }
};

const login = (credential) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const { data } = await serviceAPI.loginQuery(credential);
    tokenHeaders.set(data.token);
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginError(error.message));
  }
};

const logout = () => async (dispatch) => {
  dispatch(logoutRequest());
  try {
    await serviceAPI.logoutQuery();
    tokenHeaders.unset();
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutError(error.message));
  }
};

export default { getUser, register, login, logout };
