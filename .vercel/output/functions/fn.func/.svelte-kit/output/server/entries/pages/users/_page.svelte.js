import { x as set_current_component, u as run_all, y as current_component, c as create_ssr_component, a as compute_rest_props, g as createEventDispatcher, j as subscribe, s as setContext, b as spread, d as escape_object, i as add_attribute, h as add_classes, f as escape, v as validate_component, q as getContext, n as add_styles, e as escape_attribute_value, o as each } from "../../../chunks/ssr.js";
import { R as Row, C as Column, G as Grid } from "../../../chunks/Column.js";
import { D as DataTable, T as Toolbar, a as ToolbarContent, b as ToolbarSearch, c as ToolbarMenu, P as Pagination } from "../../../chunks/Pagination.js";
import { N as NumberInput } from "../../../chunks/NumberInput.js";
import { S as Save } from "../../../chunks/Save.js";
import "devalue";
import { T as Tile } from "../../../chunks/Tile.js";
import { T as Toggle } from "../../../chunks/Toggle.js";
import { B as Button } from "../../../chunks/Button.js";
import { C as ComposedModal, M as ModalHeader, a as ModalBody } from "../../../chunks/ModalBody.js";
import { I as InlineLoading, M as ModalFooter } from "../../../chunks/InlineLoading.js";
import { F as FormGroup } from "../../../chunks/FormGroup.js";
import { T as TextInput } from "../../../chunks/TextInput.js";
import { D as Dropdown } from "../../../chunks/Dropdown.js";
import { A as Add } from "../../../chunks/Add.js";
import { d as derived, w as writable } from "../../../chunks/index2.js";
import { C as ChevronDown } from "../../../chunks/ChevronDown.js";
const dirty_components = [];
const binding_callbacks = [];
let render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = /* @__PURE__ */ Promise.resolve();
let update_scheduled = false;
function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}
function tick() {
  schedule_update();
  return resolved_promise;
}
function add_render_callback(fn) {
  render_callbacks.push(fn);
}
const seen_callbacks = /* @__PURE__ */ new Set();
let flushidx = 0;
function flush() {
  if (flushidx !== 0) {
    return;
  }
  const saved_component = current_component;
  do {
    try {
      while (flushidx < dirty_components.length) {
        const component = dirty_components[flushidx];
        flushidx++;
        set_current_component(component);
        update(component.$$);
      }
    } catch (e) {
      dirty_components.length = 0;
      flushidx = 0;
      throw e;
    }
    set_current_component(null);
    dirty_components.length = 0;
    flushidx = 0;
    while (binding_callbacks.length)
      binding_callbacks.pop()();
    for (let i = 0; i < render_callbacks.length; i += 1) {
      const callback = render_callbacks[i];
      if (!seen_callbacks.has(callback)) {
        seen_callbacks.add(callback);
        callback();
      }
    }
    render_callbacks.length = 0;
  } while (dirty_components.length);
  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }
  update_scheduled = false;
  seen_callbacks.clear();
  set_current_component(saved_component);
}
function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    const dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}
const Tabs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentTab;
  let currentContent;
  let $$restProps = compute_rest_props($$props, ["selected", "type", "autoWidth", "iconDescription", "triggerHref"]);
  let $selectedTab, $$unsubscribe_selectedTab;
  let $content, $$unsubscribe_content;
  let $tabs, $$unsubscribe_tabs;
  let $tabsById, $$unsubscribe_tabsById;
  let { selected = 0 } = $$props;
  let { type = "default" } = $$props;
  let { autoWidth = false } = $$props;
  let { iconDescription = "Show menu options" } = $$props;
  let { triggerHref = "#" } = $$props;
  createEventDispatcher();
  const tabs = writable([]);
  $$unsubscribe_tabs = subscribe(tabs, (value) => $tabs = value);
  const tabsById = derived(tabs, (_) => _.reduce((a, c) => ({ ...a, [c.id]: c }), {}));
  $$unsubscribe_tabsById = subscribe(tabsById, (value) => $tabsById = value);
  const useAutoWidth = writable(autoWidth);
  const selectedTab = writable(void 0);
  $$unsubscribe_selectedTab = subscribe(selectedTab, (value) => $selectedTab = value);
  const content = writable([]);
  $$unsubscribe_content = subscribe(content, (value) => $content = value);
  const contentById = derived(content, (_) => _.reduce((a, c) => ({ ...a, [c.id]: c }), {}));
  const selectedContent = writable(void 0);
  let refTabList = null;
  setContext("Tabs", {
    tabs,
    contentById,
    selectedTab,
    selectedContent,
    useAutoWidth,
    add: (data) => {
      tabs.update((_) => [..._, { ...data, index: _.length }]);
    },
    addContent: (data) => {
      content.update((_) => [..._, { ...data, index: _.length }]);
    },
    update: (id) => {
      currentIndex = $tabsById[id].index;
    },
    change: async (direction) => {
      let index = currentIndex + direction;
      if (index < 0) {
        index = $tabs.length - 1;
      } else if (index >= $tabs.length) {
        index = 0;
      }
      let disabled = $tabs[index].disabled;
      while (disabled) {
        index = index + direction;
        if (index < 0) {
          index = $tabs.length - 1;
        } else if (index >= $tabs.length) {
          index = 0;
        }
        disabled = $tabs[index].disabled;
      }
      currentIndex = index;
      await tick();
    }
  });
  let dropdownHidden = true;
  let currentIndex = selected;
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.autoWidth === void 0 && $$bindings.autoWidth && autoWidth !== void 0)
    $$bindings.autoWidth(autoWidth);
  if ($$props.iconDescription === void 0 && $$bindings.iconDescription && iconDescription !== void 0)
    $$bindings.iconDescription(iconDescription);
  if ($$props.triggerHref === void 0 && $$bindings.triggerHref && triggerHref !== void 0)
    $$bindings.triggerHref(triggerHref);
  currentIndex = selected;
  currentTab = $tabs[currentIndex] || void 0;
  currentContent = $content[currentIndex] || void 0;
  {
    {
      if (currentTab) {
        selectedTab.set(currentTab.id);
      }
      if (currentContent) {
        selectedContent.set(currentContent.id);
      }
    }
  }
  {
    if ($selectedTab) {
      dropdownHidden = true;
    }
  }
  {
    useAutoWidth.set(autoWidth);
  }
  $$unsubscribe_selectedTab();
  $$unsubscribe_content();
  $$unsubscribe_tabs();
  $$unsubscribe_tabsById();
  return `<div${spread([{ role: "navigation" }, escape_object($$restProps)], {
    classes: "bx--tabs " + (type === "container" ? "bx--tabs--container" : "")
  })}><div role="listbox" tabindex="0"${add_attribute("aria-label", $$props["aria-label"] || "listbox", 0)}${add_classes("bx--tabs-trigger".trim())}><a tabindex="-1"${add_attribute("href", triggerHref, 0)}${add_classes("bx--tabs-trigger-text".trim())}>${currentTab ? `${escape(currentTab.label)}` : ``}</a> ${validate_component(ChevronDown, "ChevronDown").$$render(
    $$result,
    {
      "aria-hidden": "true",
      title: iconDescription
    },
    {},
    {}
  )}</div>  <ul role="tablist"${add_classes(("bx--tabs__nav " + (dropdownHidden ? "bx--tabs__nav--hidden" : "")).trim())}${add_attribute("this", refTabList, 0)}>${slots.default ? slots.default({}) : ``}</ul></div> ${slots.content ? slots.content({}) : ``}`;
});
const Tabs$1 = Tabs;
const Tab = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selected;
  let $$restProps = compute_rest_props($$props, ["label", "href", "disabled", "tabindex", "id", "ref"]);
  let $selectedTab, $$unsubscribe_selectedTab;
  let $useAutoWidth, $$unsubscribe_useAutoWidth;
  let { label = "" } = $$props;
  let { href = "#" } = $$props;
  let { disabled = false } = $$props;
  let { tabindex = "0" } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { ref = null } = $$props;
  const { selectedTab, useAutoWidth, add, update: update2, change } = getContext("Tabs");
  $$unsubscribe_selectedTab = subscribe(selectedTab, (value) => $selectedTab = value);
  $$unsubscribe_useAutoWidth = subscribe(useAutoWidth, (value) => $useAutoWidth = value);
  add({ id, label, disabled });
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.tabindex === void 0 && $$bindings.tabindex && tabindex !== void 0)
    $$bindings.tabindex(tabindex);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  selected = $selectedTab === id;
  $$unsubscribe_selectedTab();
  $$unsubscribe_useAutoWidth();
  return ` <li${spread([{ tabindex: "-1" }, { role: "presentation" }, escape_object($$restProps)], {
    classes: "bx--tabs__nav-item " + (disabled ? "bx--tabs__nav-item--disabled" : "") + " " + (selected ? "bx--tabs__nav-item--selected" : "")
  })}><a role="tab"${add_attribute("tabindex", disabled ? "-1" : tabindex, 0)}${add_attribute("aria-selected", selected, 0)}${add_attribute("aria-disabled", disabled, 0)}${add_attribute("id", id, 0)}${add_attribute("href", href, 0)}${add_classes("bx--tabs__nav-link".trim())}${add_styles({
    "width": $useAutoWidth ? "auto" : void 0
  })}${add_attribute("this", ref, 0)}>${slots.default ? slots.default({}) : `${escape(label)}`}</a></li>`;
});
const Tab$1 = Tab;
const TabContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selected;
  let index;
  let tabId;
  let $$restProps = compute_rest_props($$props, ["id"]);
  let $tabs, $$unsubscribe_tabs;
  let $contentById, $$unsubscribe_contentById;
  let $selectedContent, $$unsubscribe_selectedContent;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  const { selectedContent, addContent, tabs, contentById } = getContext("Tabs");
  $$unsubscribe_selectedContent = subscribe(selectedContent, (value) => $selectedContent = value);
  $$unsubscribe_tabs = subscribe(tabs, (value) => $tabs = value);
  $$unsubscribe_contentById = subscribe(contentById, (value) => $contentById = value);
  addContent({ id });
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  selected = $selectedContent === id;
  index = $contentById[id].index;
  tabId = $tabs[index].id;
  $$unsubscribe_tabs();
  $$unsubscribe_contentById();
  $$unsubscribe_selectedContent();
  return `<div${spread(
    [
      { role: "tabpanel" },
      {
        "aria-labelledby": escape_attribute_value(tabId)
      },
      {
        "aria-hidden": escape_attribute_value(!selected)
      },
      {
        hidden: (selected ? void 0 : "") || null
      },
      { id: escape_attribute_value(id) },
      escape_object($$restProps)
    ],
    { classes: "bx--tab-content" }
  )}>${slots.default ? slots.default({}) : ``}</div>`;
});
const TabContent$1 = TabContent;
const AccessManagement = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["title"]);
  let { title = void 0 } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || $$props["title"];
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { preserveAspectRatio: "xMidYMid meet" },
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { width: "64" },
      { height: "64" },
      { fill: "currentColor" },
      { title: escape_attribute_value(title) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}><path d="M16,31.36C7.53,31.36,0.64,24.47,0.64,16	S7.53,0.64,16,0.64S31.36,7.53,31.36,16S24.47,31.36,16,31.36z M16,1.36C7.927,1.36,1.36,7.927,1.36,16	c0,8.072,6.567,14.64,14.64,14.64c8.072,0,14.64-6.567,14.64-14.64S24.072,1.36,16,1.36z M28,19.36h-2	c-0.199,0-0.36-0.161-0.36-0.36c0-0.353-0.287-0.64-0.64-0.64s-0.64,0.287-0.64,0.64c0,0.199-0.161,0.36-0.36,0.36h-2	c-0.199,0-0.36-0.161-0.36-0.36v-2.64H11.143c-0.573,1.741-2.214,3-4.143,3c-2.404,0-4.36-1.956-4.36-4.36S4.596,10.64,7,10.64	c1.929,0,3.57,1.26,4.143,3H28c0.199,0,0.36,0.161,0.36,0.36v5C28.36,19.199,28.199,19.36,28,19.36z M26.312,18.64h1.328v-4.28	H11.313c0.031,0.209,0.047,0.423,0.047,0.64s-0.016,0.431-0.047,0.64H22c0.199,0,0.36,0.161,0.36,0.36v2.64h1.328	c0.158-0.575,0.687-1,1.312-1S26.153,18.064,26.312,18.64z M7,11.36c-2.007,0-3.64,1.633-3.64,3.64S4.993,18.64,7,18.64	s3.64-1.633,3.64-3.64S9.007,11.36,7,11.36z"></path></svg>`;
});
const RolDataTable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let rows = data.roles;
  let pageSize = 10;
  let page = 1;
  let filteredRowIds = [];
  let { selectedRowId = {} } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.selectedRowId === void 0 && $$bindings.selectedRowId && selectedRowId !== void 0)
    $$bindings.selectedRowId(selectedRowId);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Row, "Row").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Column, "Column").$$render($$result, {}, {}, {
          default: () => {
            return `<div class="overflow-scroll uppercase">${validate_component(DataTable, "DataTable").$$render(
              $$result,
              {
                zebra: true,
                sortable: true,
                sortKey: "created",
                sortDirection: "descending",
                headers: [
                  { key: "name", value: "NOMBRE" },
                  { key: "created", value: "CREADO" },
                  { key: "updated", value: "ACTUALIZADO" }
                ],
                rows,
                pageSize,
                page
              },
              {},
              {
                cell: ({ row, cell }) => {
                  return `${cell.key === "created" || cell.key === "updated" ? `<div role="button" tabindex="0">${escape(new Date(cell.value).toLocaleDateString("es-ES", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric"
                  }))}</div>` : `<div role="button" tabindex="0">${escape(cell.value)}</div>`} `;
                },
                default: () => {
                  return `${validate_component(Toolbar, "Toolbar").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(ToolbarContent, "ToolbarContent").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(ToolbarSearch, "ToolbarSearch").$$render(
                            $$result,
                            {
                              persistent: true,
                              shouldFilterRows: true,
                              placeholder: "Buscar...",
                              filteredRowIds
                            },
                            {
                              filteredRowIds: ($$value) => {
                                filteredRowIds = $$value;
                                $$settled = false;
                              }
                            },
                            {}
                          )} ${validate_component(ToolbarMenu, "ToolbarMenu").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NumberInput, "NumberInput").$$render(
                                $$result,
                                {
                                  min: 1,
                                  max: 100,
                                  label: "Numero de filas por página",
                                  value: pageSize
                                },
                                {
                                  value: ($$value) => {
                                    pageSize = $$value;
                                    $$settled = false;
                                  }
                                },
                                {}
                              )}`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  })}`;
                }
              }
            )}</div> <div class="fixed bottom-0 sm:w-2/3 ml-8">${validate_component(Pagination, "Pagination").$$render(
              $$result,
              {
                totalItems: filteredRowIds.length,
                pageSizeInputDisabled: true,
                pageSize,
                page
              },
              {
                pageSize: ($$value) => {
                  pageSize = $$value;
                  $$settled = false;
                },
                page: ($$value) => {
                  page = $$value;
                  $$settled = false;
                }
              },
              {}
            )}</div>`;
          }
        })}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
const RolForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let toggles;
  let { data } = $$props;
  let { form } = $$props;
  let updateForm;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  toggles = [
    {
      name: "view_users",
      labelText: "Acceso a las cuentas",
      formValue: form?.view_users,
      dataValue: data.view_users
    },
    {
      name: "view_audit",
      labelText: "Ver registros de auditoria",
      formValue: form?.view_audit,
      dataValue: data.view_audit
    },
    {
      name: "view_reports",
      labelText: "Acceso a reportes",
      formValue: form?.view_reports,
      dataValue: data.view_reports
    },
    {
      name: "view_sales",
      labelText: "Generar ventas y pagos",
      formValue: form?.view_sales,
      dataValue: data.view_sales
    },
    {
      name: "view_clients",
      labelText: "Crear y editar clientes",
      formValue: form?.view_clients,
      dataValue: data.view_clients
    },
    {
      name: "view_products",
      labelText: "Crear y editar paquetes",
      formValue: form?.view_products,
      dataValue: data.view_products
    }
  ];
  return `${data.id === void 0 ? `<h3 data-svelte-h="svelte-1u4ov3t">SELECCIONE UN ROL <br> PARA VER SUS PERMISOS</h3>` : `${`${`<form method="post" action="?/update"${add_attribute("this", updateForm, 0)}><input type="hidden" name="id"${add_attribute("value", data.id, 0)}> <input type="hidden" name="name"${add_attribute("value", data.name, 0)}> ${validate_component(Grid, "Grid").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, { class: "mb-1" }, {}, {
        default: () => {
          return `${validate_component(Column, "Column").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Tile, "Tile").$$render($$result, {}, {}, {
                default: () => {
                  return `<h3>${escape(data.name)}</h3>`;
                }
              })}`;
            }
          })}`;
        }
      })} <section class="grid grid-cols-2 gap-1">${each(toggles, (toggle, i) => {
        return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Column, "Column").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Tile, "Tile").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(Toggle, "Toggle").$$render(
                      $$result,
                      {
                        disabled: data.name === "ADMINISTRADOR",
                        name: toggle.name,
                        toggled: toggle.formValue ?? toggle.dataValue ? true : false,
                        labelText: toggle.labelText,
                        labelA: "NO",
                        labelB: "SI"
                      },
                      {},
                      {}
                    )} `;
                  }
                })} `;
              }
            })} `;
          }
        })}`;
      })}</section> <section class="grid grid-cols-2 gap-1 mt-1">${validate_component(Button, "Button").$$render(
        $$result,
        {
          kind: "tertiary",
          disabled: data.name === "ADMINISTRADOR",
          class: "w-full"
        },
        {},
        {
          default: () => {
            return `Desactivar todos`;
          }
        }
      )} ${validate_component(Button, "Button").$$render(
        $$result,
        {
          icon: Save,
          disabled: data.name === "ADMINISTRADOR",
          class: "w-full"
        },
        {},
        {
          default: () => {
            return `Guardar cambios`;
          }
        }
      )}</section>`;
    }
  })}</form>`}`}`}`;
});
const RolesTab = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { form } = $$props;
  let selectedRowId = {};
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      console.log("form desde el RolesTab: ", form);
    }
    $$rendered = `${validate_component(Grid, "Grid").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Column, "Column").$$render($$result, {}, {}, {
              default: () => {
                return `<h1 data-svelte-h="svelte-ilemu6">Roles y permisos</h1> <p data-svelte-h="svelte-1eivxw4">Aqui puede administrar los roles para cada permiso.</p>`;
              }
            })} ${validate_component(Column, "Column").$$render($$result, {}, {}, {})} ${validate_component(Column, "Column").$$render($$result, { class: "flex justify-end" }, {}, {
              default: () => {
                return `${validate_component(AccessManagement, "AccessManagement").$$render($$result, {}, {}, {})}`;
              }
            })}`;
          }
        })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Column, "Column").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(RolDataTable, "RolDataTable").$$render(
                  $$result,
                  { data, selectedRowId },
                  {
                    selectedRowId: ($$value) => {
                      selectedRowId = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            })} ${validate_component(Column, "Column").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(RolForm, "RolForm").$$render(
                  $$result,
                  { data: selectedRowId, form },
                  {
                    data: ($$value) => {
                      selectedRowId = $$value;
                      $$settled = false;
                    },
                    form: ($$value) => {
                      form = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            })}`;
          }
        })}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
const CreateModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let creating;
  let form;
  let { open = false } = $$props;
  let { roles } = $$props;
  const dropDownItems = roles.map((rol) => {
    return { id: rol.id, text: rol.name };
  });
  let dropDownSelected = dropDownItems[0].id;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.roles === void 0 && $$bindings.roles && roles !== void 0)
    $$bindings.roles(roles);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    creating = false;
    $$rendered = `${validate_component(ComposedModal, "ComposedModal").$$render(
      $$result,
      { class: "uppercase", open },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(ModalHeader, "ModalHeader").$$render($$result, { label: "", title: "Registrar nuevo" }, {}, {})} ${validate_component(ModalBody, "ModalBody").$$render($$result, { hasForm: true, hasScrollingContent: true }, {}, {
            default: () => {
              return `${creating ? `<div>${validate_component(InlineLoading, "InlineLoading").$$render($$result, { description: "Guardando..." }, {}, {})}</div>` : `${`<form id="modalForm" method="post" action="?/create"${add_attribute("this", form, 0)}>${validate_component(Grid, "Grid").$$render($$result, { class: "uppercase" }, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Column, "Column").$$render($$result, { class: "bg-neutral-900 py-2 my-2" }, {}, {
                        default: () => {
                          return `${validate_component(FormGroup, "FormGroup").$$render(
                            $$result,
                            {
                              legendText: "Datos personales (Obligatorios)"
                            },
                            {},
                            {
                              default: () => {
                                return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `${validate_component(Column, "Column").$$render($$result, {}, {}, {
                                      default: () => {
                                        return `${validate_component(TextInput, "TextInput").$$render(
                                          $$result,
                                          {
                                            required: true,
                                            id: "nombre",
                                            name: "nombre",
                                            labelText: "Nombre",
                                            placeholder: "Ingrese el nombre"
                                          },
                                          {},
                                          {}
                                        )}`;
                                      }
                                    })} ${validate_component(Column, "Column").$$render($$result, {}, {}, {
                                      default: () => {
                                        return `${validate_component(TextInput, "TextInput").$$render(
                                          $$result,
                                          {
                                            required: true,
                                            id: "apellido",
                                            name: "apellido",
                                            labelText: "Apellido",
                                            placeholder: "Ingrese el nombre"
                                          },
                                          {},
                                          {}
                                        )}`;
                                      }
                                    })}`;
                                  }
                                })} ${validate_component(Row, "Row").$$render($$result, { class: "py-2 my-2" }, {}, {
                                  default: () => {
                                    return `${validate_component(Column, "Column").$$render($$result, {}, {}, {
                                      default: () => {
                                        return `${validate_component(TextInput, "TextInput").$$render(
                                          $$result,
                                          {
                                            required: true,
                                            id: "dni",
                                            name: "dni",
                                            labelText: "DNI",
                                            placeholder: "Ingrese el DNI"
                                          },
                                          {},
                                          {}
                                        )}`;
                                      }
                                    })}`;
                                  }
                                })}`;
                              }
                            }
                          )}`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Column, "Column").$$render($$result, { class: "bg-neutral-900 py-2 my-2" }, {}, {
                        default: () => {
                          return `<input type="hidden" name="rol"${add_attribute("value", dropDownSelected, 0)}> ${validate_component(FormGroup, "FormGroup").$$render($$result, { legendText: "Permisos" }, {}, {
                            default: () => {
                              return `${validate_component(Dropdown, "Dropdown").$$render(
                                $$result,
                                {
                                  name: "rol",
                                  id: "rol",
                                  selectedId: dropDownSelected,
                                  items: dropDownItems
                                },
                                {},
                                {}
                              )}`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Column, "Column").$$render($$result, { class: "bg-neutral-900 py-2 my-2" }, {}, {
                        default: () => {
                          return `${validate_component(FormGroup, "FormGroup").$$render($$result, { legendText: "Observaciones" }, {}, {
                            default: () => {
                              return `${validate_component(TextInput, "TextInput").$$render(
                                $$result,
                                {
                                  id: "observaciones",
                                  name: "observaciones",
                                  labelText: "",
                                  placeholder: "Puede ingresar observaciones"
                                },
                                {},
                                {}
                              )}`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}</form>`}`}`;
            }
          })} ${validate_component(ModalFooter, "ModalFooter").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Button, "Button").$$render($$result, { kind: "secondary", size: "lg" }, {}, {
                default: () => {
                  return `Cancelar`;
                }
              })} ${validate_component(Button, "Button").$$render(
                $$result,
                {
                  id: "modalSubmitButton",
                  size: "lg",
                  type: "submit",
                  disabled: creating
                },
                {},
                {
                  default: () => {
                    return `Crear`;
                  }
                }
              )}`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const DataTable_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { open = false } = $$props;
  let rows = data.users;
  let pageSize = 10;
  let page = 1;
  let filteredRowIds = [];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Row, "Row").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Column, "Column").$$render($$result, {}, {}, {
          default: () => {
            return `<div class="overflow-scroll uppercase">${validate_component(DataTable, "DataTable").$$render(
              $$result,
              {
                zebra: true,
                sortable: true,
                sortKey: "created",
                sortDirection: "descending",
                headers: [
                  { key: "username", value: "USUARIO" },
                  { key: "name", value: "NOMBRE" },
                  { key: "rol", value: "PERMISOS" },
                  { key: "verified", value: "ESTADO" },
                  { key: "created", value: "CREADO" },
                  { key: "updated", value: "ACTUALIZADO" }
                ],
                rows,
                pageSize,
                page
              },
              {},
              {
                cell: ({ row, cell }) => {
                  return `${cell.key === "created" || cell.key === "updated" ? `<div role="button" tabindex="0">${escape(new Date(cell.value).toLocaleDateString("es-ES", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric"
                  }))}</div>` : `${cell.key === "name" ? `<div role="button" tabindex="0">${escape(row.name)} ${escape(row.apellido)}</div>` : `${cell.key === "rol" ? `<div role="button" tabindex="0"> ${row.rol === "ADMINISTRADOR" ? `<div class="bg-purple-200 text-purple-800 text-center rounded-full px-2 py-1">${escape(row.rol)}</div>` : `${row.rol === "SOLO VENDER" ? `<div class="bg-green-200 text-green-800 text-center rounded-full px-2 py-1">${escape(row.rol)}</div>` : `${row.rol === "SOLO CREAR" ? `<div class="bg-blue-200 text-blue-800 text-center rounded-full px-2 py-1">${escape(row.rol)}</div>` : `${row.rol === "SOLO VER" ? `<div class="bg-yellow-200 text-yellow-800 text-center rounded-full px-2 py-1">${escape(row.rol)}</div>` : `${row.rol === "VENDER, CREAR" ? `<div class="bg-cyan-200 text-cyan-800 text-center rounded-full px-2 py-1">${escape(row.rol)}</div>` : `${row.rol === "VENDER, CREAR, EDITAR" ? `<div class="bg-orange-200 text-orange-800 text-center rounded-full px-2 py-1">${escape(row.rol)}</div>` : `<div class="bg-red-200 text-red-800 text-center rounded-full px-2 py-1">${escape(row.rol)}</div>`}`}`}`}`}`}</div>` : `${cell.key === "verified" ? `<div role="button" tabindex="0">${row.verified ? `<div class="bg-green-200 text-green-800 text-center rounded-full px-2 py-1" data-svelte-h="svelte-15cmuqo">ACTIVO</div>` : `<div class="bg-red-200 text-red-800 text-center rounded-full px-2 py-1" data-svelte-h="svelte-1dj8rx3">INACTIVO</div>`}</div>` : `<div role="button" tabindex="0">${escape(cell.value)}</div>`}`}`}`} `;
                },
                default: () => {
                  return `${validate_component(Toolbar, "Toolbar").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(ToolbarContent, "ToolbarContent").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(ToolbarSearch, "ToolbarSearch").$$render(
                            $$result,
                            {
                              persistent: true,
                              shouldFilterRows: true,
                              placeholder: "Buscar...",
                              filteredRowIds
                            },
                            {
                              filteredRowIds: ($$value) => {
                                filteredRowIds = $$value;
                                $$settled = false;
                              }
                            },
                            {}
                          )} ${validate_component(ToolbarMenu, "ToolbarMenu").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(NumberInput, "NumberInput").$$render(
                                $$result,
                                {
                                  min: 1,
                                  max: 100,
                                  label: "Numero de filas por página",
                                  value: pageSize
                                },
                                {
                                  value: ($$value) => {
                                    pageSize = $$value;
                                    $$settled = false;
                                  }
                                },
                                {}
                              )}`;
                            }
                          })} ${validate_component(Button, "Button").$$render($$result, { icon: Add }, {}, {
                            default: () => {
                              return `Registrar nuevo`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  })}`;
                }
              }
            )}</div> <div class="fixed bottom-0 sm:w-2/3 ml-8">${validate_component(Pagination, "Pagination").$$render(
              $$result,
              {
                totalItems: filteredRowIds.length,
                pageSizeInputDisabled: true,
                pageSize,
                page
              },
              {
                pageSize: ($$value) => {
                  pageSize = $$value;
                  $$settled = false;
                },
                page: ($$value) => {
                  page = $$value;
                  $$settled = false;
                }
              },
              {}
            )}</div>`;
          }
        })}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
const TrustedUser = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["title"]);
  let { title = void 0 } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || $$props["title"];
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { preserveAspectRatio: "xMidYMid meet" },
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { width: "64" },
      { height: "64" },
      { fill: "currentColor" },
      { title: escape_attribute_value(title) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}><path d="M24.36,31h-0.72v-7.492c0-3.556-2.414-6.612-5.872-7.432c-0.15-0.036-0.261-0.163-0.275-0.316 c-0.015-0.154,0.071-0.3,0.212-0.363c1.517-0.675,2.496-2.181,2.496-3.836c0-2.316-1.884-4.201-4.2-4.201s-4.2,1.884-4.2,4.201 c0,1.656,0.98,3.162,2.496,3.836c0.141,0.063,0.226,0.209,0.212,0.363c-0.014,0.153-0.125,0.281-0.275,0.316 c-3.458,0.819-5.872,3.875-5.872,7.432V31h-0.72v-7.492c0-3.597,2.256-6.725,5.585-7.887c-1.327-0.907-2.147-2.421-2.147-4.06 c0-1.964,1.157-3.664,2.825-4.452C14.101,6.617,14.2,6.097,14.2,5.561c0-2.316-1.884-4.201-4.2-4.201S5.799,3.244,5.799,5.561 c0,1.655,0.98,3.162,2.496,3.836C8.437,9.46,8.522,9.606,8.507,9.76c-0.014,0.153-0.125,0.281-0.275,0.316 C4.774,10.896,2.36,13.948,2.36,17.5V25H1.64v-7.5c0-3.592,2.257-6.718,5.585-7.879C5.899,8.714,5.08,7.2,5.08,5.561 c0-2.713,2.207-4.92,4.92-4.92s4.92,2.207,4.92,4.92c0,0.422-0.052,0.836-0.157,1.237c0.791-0.205,1.683-0.205,2.473,0 c-0.104-0.401-0.157-0.815-0.157-1.237c0-2.713,2.208-4.92,4.921-4.92s4.921,2.207,4.921,4.92c0,1.64-0.82,3.154-2.146,4.061 c3.329,1.161,5.586,4.287,5.586,7.879V25H29.64v-7.5c0-3.552-2.414-6.604-5.872-7.424c-0.15-0.036-0.261-0.163-0.275-0.316 c-0.015-0.154,0.071-0.3,0.212-0.363C25.221,8.722,26.2,7.216,26.2,5.561c0-2.316-1.884-4.201-4.2-4.201s-4.2,1.884-4.2,4.201 c0,0.536,0.099,1.056,0.295,1.548c1.669,0.789,2.826,2.488,2.826,4.452c0,1.64-0.82,3.154-2.146,4.061 c3.329,1.162,5.586,4.29,5.586,7.887L24.36,31L24.36,31z M19.255,24.255l-0.51-0.51L15,27.491l-1.746-1.746l-0.509,0.51L15,28.509 L19.255,24.255z"></path></svg>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { form } = $$props;
  let open = false;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      console.log("form desde el +page: ", form);
    }
    $$rendered = `${validate_component(Tabs$1, "Tabs").$$render($$result, {}, {}, {
      content: () => {
        return `${validate_component(TabContent$1, "TabContent").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Grid, "Grid").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(Column, "Column").$$render($$result, {}, {}, {
                      default: () => {
                        return `<h1 data-svelte-h="svelte-y7vi7p">Cuentas de usuarios</h1> <p data-svelte-h="svelte-ccfxbc">Aqui puede administrar las cuentas de usuarios.</p>`;
                      }
                    })} ${validate_component(Column, "Column").$$render($$result, { class: "flex justify-end" }, {}, {
                      default: () => {
                        return `${validate_component(TrustedUser, "TrustedUser").$$render($$result, {}, {}, {})}`;
                      }
                    })}`;
                  }
                })} ${validate_component(DataTable_1, "DataTable").$$render(
                  $$result,
                  { data, open },
                  {
                    open: ($$value) => {
                      open = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            })}`;
          }
        })} ${validate_component(TabContent$1, "TabContent").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(RolesTab, "RolesTab").$$render(
              $$result,
              { data, form },
              {
                data: ($$value) => {
                  data = $$value;
                  $$settled = false;
                },
                form: ($$value) => {
                  form = $$value;
                  $$settled = false;
                }
              },
              {}
            )}`;
          }
        })} `;
      },
      default: () => {
        return `${validate_component(Tab$1, "Tab").$$render($$result, { label: "Cuentas de usuario" }, {}, {})} ${validate_component(Tab$1, "Tab").$$render($$result, { label: "Roles y permisos" }, {}, {})}`;
      }
    })} ${validate_component(CreateModal, "CreateModal").$$render(
      $$result,
      { roles: data.roles, open },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
