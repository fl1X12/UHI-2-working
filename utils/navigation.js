

export const navigateToDrawerScreen = (navigation,screenName,params={}) => {
    navigation.navigate('MainDrawer', {
      screen: screenName,
      params: params
    });
  };


  // This helper ensures that the patient_id is always passed along
export const navigateWithUser = (navigation, screenName, params = {}) => {
  // Assuming you store the patient_id in params.userId already
  // or attach a default userId from global store / context.
  return navigation.navigate(screenName, { ...params, userId: params.userId });
};