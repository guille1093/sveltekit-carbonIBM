import { r as redirect } from "../../../chunks/index.js";
const POST = ({ locals }) => {
  locals.pb.authStore.clear();
  locals.user = void 0;
  throw redirect(303, "/login");
};
export {
  POST
};
