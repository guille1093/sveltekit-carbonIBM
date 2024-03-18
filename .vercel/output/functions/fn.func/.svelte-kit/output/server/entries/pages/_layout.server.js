const load = ({ locals }) => {
  if (locals.user) {
    return {
      user: locals.user
    };
  }
  return {
    //redirect to login if not logged in
    user: void 0
  };
};
export {
  load
};
