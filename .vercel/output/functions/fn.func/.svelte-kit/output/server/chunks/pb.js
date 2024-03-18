import PocketBase from "pocketbase";
const url = "http://127.0.0.1:8090";
let pb = new PocketBase(url);
export {
  pb as p
};
