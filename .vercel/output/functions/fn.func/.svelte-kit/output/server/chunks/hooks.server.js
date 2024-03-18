import { p as pb } from "./pb.js";
import { r as redirect } from "./index.js";
const handle = async ({ event, resolve }) => {
  event.locals.pb = pb;
  event.locals.pb.autoCancellation(false);
  event.locals.pb.authStore.loadFromCookie(event.request.headers.get("cookie") || "");
  const default_sys_props = await event.locals.pb.collection("sys_props").getOne("deflt_sys_props");
  event.locals.default_sys_props = default_sys_props;
  try {
    if (event.locals.pb.authStore.isValid) {
      await event.locals.pb.collection("users").authRefresh();
      event.locals.user = structuredClone(event.locals.pb.authStore.model);
      event.locals.user.rol = structuredClone(
        await event.locals.pb.collection("roles").getOne(event.locals.user.rol)
      );
    }
  } catch (_) {
    event.locals.pb.authStore.clear();
    event.locals.user = void 0;
  }
  if (!event.locals.user && event.url.pathname !== "/login") {
    throw redirect(303, "/login");
  }
  const response = await resolve(event);
  response.headers.set("set-cookie", event.locals.pb.authStore.exportToCookie({ secure: true }));
  return response;
};
export {
  handle
};
