import { c as create_ssr_component, a as compute_rest_props, g as createEventDispatcher, b as spread, d as escape_object, i as add_attribute, h as add_classes, f as escape, v as validate_component } from "../../../chunks/ssr.js";
import "devalue";
import { g as getImageURL } from "../../../chunks/utils.js";
import { B as Button } from "../../../chunks/Button.js";
const FileUploaderDropContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "accept",
    "files",
    "multiple",
    "validateFiles",
    "labelText",
    "role",
    "disabled",
    "tabindex",
    "id",
    "name",
    "ref"
  ]);
  let { accept = [] } = $$props;
  let { files = [] } = $$props;
  let { multiple = false } = $$props;
  let { validateFiles = (files2) => files2 } = $$props;
  let { labelText = "Add file" } = $$props;
  let { role = "button" } = $$props;
  let { disabled = false } = $$props;
  let { tabindex = "0" } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { name = "" } = $$props;
  let { ref = null } = $$props;
  createEventDispatcher();
  if ($$props.accept === void 0 && $$bindings.accept && accept !== void 0)
    $$bindings.accept(accept);
  if ($$props.files === void 0 && $$bindings.files && files !== void 0)
    $$bindings.files(files);
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0)
    $$bindings.multiple(multiple);
  if ($$props.validateFiles === void 0 && $$bindings.validateFiles && validateFiles !== void 0)
    $$bindings.validateFiles(validateFiles);
  if ($$props.labelText === void 0 && $$bindings.labelText && labelText !== void 0)
    $$bindings.labelText(labelText);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.tabindex === void 0 && $$bindings.tabindex && tabindex !== void 0)
    $$bindings.tabindex(tabindex);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  return ` <div${spread([escape_object($$restProps)], { classes: "bx--file" })}>  <label${add_attribute("for", id, 0)}${add_attribute("tabindex", tabindex, 0)}${add_classes(("bx--file-browse-btn " + (disabled ? "bx--file-browse-btn--disabled" : "")).trim())}><div${add_attribute("role", role, 0)}${add_classes("bx--file__drop-container ".trim())}>${slots.labelText ? slots.labelText({}) : ` ${escape(labelText)} `}</div></label> <input type="file" tabindex="-1"${add_attribute("id", id, 0)} ${disabled ? "disabled" : ""}${add_attribute("accept", accept, 0)}${add_attribute("name", name, 0)} ${multiple ? "multiple" : ""}${add_classes("bx--file-input".trim())}></div>`;
});
const FileUploaderDropContainer$1 = FileUploaderDropContainer;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { form } = $$props;
  let loading;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  loading = false;
  return `<div class="flex items-center flex-col md:w-1/2 w-full h-screen"><form action="?/updateProfile" method="POST" class="flex flex-col space-y-2 w-full" enctype="multipart/form-data"><h3 class="text-2xl font-medium dark:text-gray-200" data-svelte-h="svelte-g2msr4">Actualizar perfil</h3> <div class="form-control w-full max-w-lg"><label for="avatar" class="label font-medium pb-1" data-svelte-h="svelte-1sl2en0"><span class="label-text dark:text-gray-200">Imagen de perfil</span></label> <label for="avatar" class="avatar w-32 rounded-full hover:cursor-pointer"><label for="avatar" class="absolute -bottom-0.5 -right-0.5 hover:cursor-pointer"></label> <div class="w-32 rounded-full"><img${add_attribute(
    "src",
    data.user?.avatar ? getImageURL(data.user?.collectionId, data.user?.id, data.user?.avatar) : `https://ui-avatars.com/api/?name=${data.user?.name}`,
    0
  )} alt="user avatar" id="avatar-preview"></div></label> <input type="file" name="avatar" id="avatar" value="" accept="image/*" hidden ${loading ? "disabled" : ""}> ${validate_component(FileUploaderDropContainer$1, "FileUploaderDropContainer").$$render(
    $$result,
    {
      name: "avatar",
      id: "avatar",
      multiple: true,
      disabled: loading,
      labelText: "Drag and drop files here or click to upload",
      validateFiles: (files) => {
        return files.filter((file) => file.size < 1024);
      }
    },
    {},
    {}
  )}</div> <input id="name" label="Nombre"${add_attribute("value", form?.data?.name ?? data?.user?.name, 0)}> <div class="w-full max-w-lg pt-3">${validate_component(Button, "Button").$$render(
    $$result,
    {
      class: "w-full max-w-lg",
      type: "submit",
      disabled: loading
    },
    {},
    {
      default: () => {
        return `Actualizar perfil`;
      }
    }
  )}</div></form></div>`;
});
export {
  Page as default
};
