const getIsAuthenticated = (state) => state.auth.isLoggedOn;
const getUserName = (state) => state.auth.user.name;
const getLoading = (state) => state.auth.isLoading;

export default { getIsAuthenticated, getUserName, getLoading };
