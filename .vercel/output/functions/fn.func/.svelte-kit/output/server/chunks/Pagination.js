import { c as create_ssr_component, a as compute_rest_props, h as add_classes, b as spread, e as escape_attribute_value, d as escape_object, i as add_attribute, f as escape, q as getContext, j as subscribe, k as compute_slots, v as validate_component, g as createEventDispatcher, s as setContext, l as set_store_value, o as each } from "./ssr.js";
import { w as writable } from "./index2.js";
import { C as ChevronRight } from "./ChevronRight.js";
import { S as Search } from "./Search.js";
import { O as OverflowMenu } from "./OverflowMenu.js";
import { B as Button } from "./Button.js";
import { S as Select, a as SelectItem } from "./SelectItem.js";
const globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);
const InlineCheckbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["checked", "indeterminate", "title", "id", "ref"]);
  let { checked = false } = $$props;
  let { indeterminate = false } = $$props;
  let { title = void 0 } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { ref = null } = $$props;
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  if ($$props.indeterminate === void 0 && $$bindings.indeterminate && indeterminate !== void 0)
    $$bindings.indeterminate(indeterminate);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  return `<div${add_classes("bx--checkbox--inline".trim())}><input${spread(
    [
      { type: "checkbox" },
      {
        checked: (indeterminate ? false : checked) || null
      },
      {
        indeterminate: escape_attribute_value(indeterminate)
      },
      { id: escape_attribute_value(id) },
      escape_object($$restProps),
      {
        "aria-checked": escape_attribute_value(indeterminate ? void 0 : checked)
      }
    ],
    { classes: "bx--checkbox" }
  )}${add_attribute("this", ref, 0)}> <label${add_attribute("for", id, 0)}${add_attribute("title", title, 0)}${add_attribute("aria-label", $$props["aria-label"], 0)}${add_classes("bx--checkbox-label".trim())}></label></div>`;
});
const InlineCheckbox$1 = InlineCheckbox;
const CaretRight = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M12 8L22 16 12 24z"></path></svg>`;
});
const CaretRight$1 = CaretRight;
const RadioButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "value",
    "checked",
    "disabled",
    "required",
    "labelPosition",
    "labelText",
    "hideLabel",
    "id",
    "name",
    "ref"
  ]);
  let $$slots = compute_slots(slots);
  let $selectedValue, $$unsubscribe_selectedValue;
  let { value = "" } = $$props;
  let { checked = false } = $$props;
  let { disabled = false } = $$props;
  let { required = false } = $$props;
  let { labelPosition = "right" } = $$props;
  let { labelText = "" } = $$props;
  let { hideLabel = false } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { name = "" } = $$props;
  let { ref = null } = $$props;
  const ctx = getContext("RadioButtonGroup");
  const selectedValue = ctx ? ctx.selectedValue : writable(checked ? value : void 0);
  $$unsubscribe_selectedValue = subscribe(selectedValue, (value2) => $selectedValue = value2);
  if (ctx) {
    ctx.add({ id, checked, disabled, value });
  }
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.labelPosition === void 0 && $$bindings.labelPosition && labelPosition !== void 0)
    $$bindings.labelPosition(labelPosition);
  if ($$props.labelText === void 0 && $$bindings.labelText && labelText !== void 0)
    $$bindings.labelText(labelText);
  if ($$props.hideLabel === void 0 && $$bindings.hideLabel && hideLabel !== void 0)
    $$bindings.hideLabel(hideLabel);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  checked = $selectedValue === value;
  $$unsubscribe_selectedValue();
  return `<div${spread([escape_object($$restProps)], {
    classes: "bx--radio-button-wrapper " + (labelPosition === "left" ? "bx--radio-button-wrapper--label-left" : "")
  })}><input type="radio"${add_attribute("id", id, 0)}${add_attribute("name", name, 0)} ${checked ? "checked" : ""} ${disabled ? "disabled" : ""} ${required ? "required" : ""}${add_attribute("value", value, 0)}${add_classes("bx--radio-button".trim())}${add_attribute("this", ref, 0)}> <label${add_attribute("for", id, 0)}${add_classes("bx--radio-button__label".trim())}><span${add_classes("bx--radio-button__appearance".trim())}></span> ${labelText || $$slots.labelText ? `<span${add_classes((hideLabel ? "bx--visually-hidden" : "").trim())}>${slots.labelText ? slots.labelText({}) : ` ${escape(labelText)} `}</span>` : ``}</label></div>`;
});
const RadioButton$1 = RadioButton;
const Table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "zebra", "useStaticWidth", "sortable", "stickyHeader", "tableStyle"]);
  let { size = void 0 } = $$props;
  let { zebra = false } = $$props;
  let { useStaticWidth = false } = $$props;
  let { sortable = false } = $$props;
  let { stickyHeader = false } = $$props;
  let { tableStyle = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.zebra === void 0 && $$bindings.zebra && zebra !== void 0)
    $$bindings.zebra(zebra);
  if ($$props.useStaticWidth === void 0 && $$bindings.useStaticWidth && useStaticWidth !== void 0)
    $$bindings.useStaticWidth(useStaticWidth);
  if ($$props.sortable === void 0 && $$bindings.sortable && sortable !== void 0)
    $$bindings.sortable(sortable);
  if ($$props.stickyHeader === void 0 && $$bindings.stickyHeader && stickyHeader !== void 0)
    $$bindings.stickyHeader(stickyHeader);
  if ($$props.tableStyle === void 0 && $$bindings.tableStyle && tableStyle !== void 0)
    $$bindings.tableStyle(tableStyle);
  return `${stickyHeader ? `<section${spread([escape_object($$restProps)], {
    classes: "bx--data-table_inner-container"
  })}><table${add_attribute("style", tableStyle, 0)}${add_classes(("bx--data-table " + (size === "compact" ? "bx--data-table--compact" : "") + " " + (size === "short" ? "bx--data-table--short" : "") + " " + (size === "tall" ? "bx--data-table--tall" : "") + " " + (size === "medium" ? "bx--data-table--md" : "") + " " + (sortable ? "bx--data-table--sort" : "") + " " + (zebra ? "bx--data-table--zebra" : "") + " " + (useStaticWidth ? "bx--data-table--static" : "") + " " + (stickyHeader ? "bx--data-table--sticky-header" : "")).trim())}>${slots.default ? slots.default({}) : ``}</table></section>` : `<table${spread(
    [
      escape_object($$restProps),
      {
        style: escape_attribute_value(tableStyle)
      }
    ],
    {
      classes: "bx--data-table " + (size === "compact" ? "bx--data-table--compact" : "") + " " + (size === "short" ? "bx--data-table--short" : "") + " " + (size === "tall" ? "bx--data-table--tall" : "") + " " + (size === "medium" ? "bx--data-table--md" : "") + " " + (sortable ? "bx--data-table--sort" : "") + " " + (zebra ? "bx--data-table--zebra" : "") + " " + (useStaticWidth ? "bx--data-table--static" : "") + " " + (stickyHeader ? "bx--data-table--sticky-header" : "")
    }
  )}>${slots.default ? slots.default({}) : ``}</table>`}`;
});
const Table$1 = Table;
const TableBody = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return `<tbody${spread([{ "aria-live": "polite" }, escape_object($$restProps)], {})}>${slots.default ? slots.default({}) : ``}</tbody>`;
});
const TableBody$1 = TableBody;
const TableCell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return ` <td${spread([escape_object($$restProps)], {})}>${slots.default ? slots.default({}) : ``}</td>`;
});
const TableCell$1 = TableCell;
const TableContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["title", "description", "stickyHeader", "useStaticWidth"]);
  let { title = "" } = $$props;
  let { description = "" } = $$props;
  let { stickyHeader = false } = $$props;
  let { useStaticWidth = false } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.stickyHeader === void 0 && $$bindings.stickyHeader && stickyHeader !== void 0)
    $$bindings.stickyHeader(stickyHeader);
  if ($$props.useStaticWidth === void 0 && $$bindings.useStaticWidth && useStaticWidth !== void 0)
    $$bindings.useStaticWidth(useStaticWidth);
  return `<div${spread([escape_object($$restProps)], {
    classes: "bx--data-table-container " + (useStaticWidth ? "bx--data-table-container--static" : "") + " " + (stickyHeader ? "bx--data-table--max-width" : "")
  })}>${title ? `<div${add_classes("bx--data-table-header".trim())}><h4${add_classes("bx--data-table-header__title".trim())}>${escape(title)}</h4> <p${add_classes("bx--data-table-header__description".trim())}>${escape(description)}</p></div>` : ``} ${slots.default ? slots.default({}) : ``}</div>`;
});
const TableContainer$1 = TableContainer;
const TableHead = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return `  <thead${spread([escape_object($$restProps)], {})}>${slots.default ? slots.default({}) : ``}</thead>`;
});
const TableHead$1 = TableHead;
const ArrowUp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M16 4L6 14 7.41 15.41 15 7.83 15 28 17 28 17 7.83 24.59 15.41 26 14 16 4z"></path></svg>`;
});
const ArrowUp$1 = ArrowUp;
const ArrowsVertical = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M27.6 20.6L24 24.2 24 4 22 4 22 24.2 18.4 20.6 17 22 23 28 29 22zM9 4L3 10 4.4 11.4 8 7.8 8 28 10 28 10 7.8 13.6 11.4 15 10z"></path></svg>`;
});
const ArrowsVertical$1 = ArrowsVertical;
const TableHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ariaLabel;
  let $$restProps = compute_rest_props($$props, ["sortable", "sortDirection", "active", "scope", "translateWithId", "id"]);
  let { sortable = false } = $$props;
  let { sortDirection = "none" } = $$props;
  let { active = false } = $$props;
  let { scope = "col" } = $$props;
  let { translateWithId = () => "" } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  if ($$props.sortable === void 0 && $$bindings.sortable && sortable !== void 0)
    $$bindings.sortable(sortable);
  if ($$props.sortDirection === void 0 && $$bindings.sortDirection && sortDirection !== void 0)
    $$bindings.sortDirection(sortDirection);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.scope === void 0 && $$bindings.scope && scope !== void 0)
    $$bindings.scope(scope);
  if ($$props.translateWithId === void 0 && $$bindings.translateWithId && translateWithId !== void 0)
    $$bindings.translateWithId(translateWithId);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  ariaLabel = translateWithId();
  return ` ${sortable ? `<th${spread(
    [
      {
        "aria-sort": escape_attribute_value(active ? sortDirection : "none")
      },
      { scope: escape_attribute_value(scope) },
      {
        "data-header": escape_attribute_value(id)
      },
      escape_object($$restProps)
    ],
    {}
  )}><button type="button"${add_classes(("bx--table-sort " + (active ? "bx--table-sort--active" : "") + " " + (active && sortDirection === "descending" ? "bx--table-sort--ascending" : "")).trim())}><div${add_classes("bx--table-header-label".trim())}>${slots.default ? slots.default({}) : ``}</div> ${validate_component(ArrowUp$1, "ArrowUp").$$render(
    $$result,
    {
      size: 20,
      "aria-label": ariaLabel,
      class: "bx--table-sort__icon"
    },
    {},
    {}
  )} ${validate_component(ArrowsVertical$1, "ArrowsVertical").$$render(
    $$result,
    {
      size: 20,
      "aria-label": ariaLabel,
      class: "bx--table-sort__icon-unsorted"
    },
    {},
    {}
  )}</button></th>` : `<th${spread(
    [
      { scope: escape_attribute_value(scope) },
      {
        "data-header": escape_attribute_value(id)
      },
      escape_object($$restProps)
    ],
    {}
  )}><div${add_classes("bx--table-header-label".trim())}>${slots.default ? slots.default({}) : ``}</div></th>`}`;
});
const TableHeader$1 = TableHeader;
const TableRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return ` <tr${spread([escape_object($$restProps)], {})}>${slots.default ? slots.default({}) : ``}</tr>`;
});
const TableRow$1 = TableRow;
const DataTable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let expandedRows;
  let rowIds;
  let expandableRowIds;
  let selectableRowIds;
  let selectAll;
  let indeterminate;
  let headerKeys;
  let tableCellsByRowId;
  let sortedRows;
  let ascending;
  let sorting;
  let sortingHeader;
  let displayedRows;
  let displayedSortedRows;
  let hasCustomHeaderWidth;
  let $$restProps = compute_rest_props($$props, [
    "headers",
    "rows",
    "size",
    "title",
    "description",
    "zebra",
    "sortable",
    "sortKey",
    "sortDirection",
    "expandable",
    "batchExpansion",
    "expandedRowIds",
    "nonExpandableRowIds",
    "radio",
    "selectable",
    "batchSelection",
    "selectedRowIds",
    "nonSelectableRowIds",
    "stickyHeader",
    "useStaticWidth",
    "pageSize",
    "page"
  ]);
  let $$slots = compute_slots(slots);
  let $tableRows, $$unsubscribe_tableRows;
  let { headers = [] } = $$props;
  let { rows = [] } = $$props;
  let { size = void 0 } = $$props;
  let { title = "" } = $$props;
  let { description = "" } = $$props;
  let { zebra = false } = $$props;
  let { sortable = false } = $$props;
  let { sortKey = null } = $$props;
  let { sortDirection = "none" } = $$props;
  let { expandable = false } = $$props;
  let { batchExpansion = false } = $$props;
  let { expandedRowIds = [] } = $$props;
  let { nonExpandableRowIds = [] } = $$props;
  let { radio = false } = $$props;
  let { selectable = false } = $$props;
  let { batchSelection = false } = $$props;
  let { selectedRowIds = [] } = $$props;
  let { nonSelectableRowIds = [] } = $$props;
  let { stickyHeader = false } = $$props;
  let { useStaticWidth = false } = $$props;
  let { pageSize = 0 } = $$props;
  let { page = 0 } = $$props;
  createEventDispatcher();
  const batchSelectedIds = writable(false);
  const tableRows = writable(rows);
  $$unsubscribe_tableRows = subscribe(tableRows, (value) => $tableRows = value);
  const resolvePath = (object, path) => {
    if (path in object)
      return object[path];
    return path.split(/[\.\[\]\'\"]/).filter((p) => p).reduce((o, p) => o && typeof o === "object" ? o[p] : o, object);
  };
  setContext("DataTable", {
    batchSelectedIds,
    tableRows,
    resetSelectedRowIds: () => {
      selectAll = false;
      selectedRowIds = [];
      if (refSelectAll)
        refSelectAll.checked = false;
    }
  });
  let expanded = false;
  let parentRowId = null;
  let refSelectAll = null;
  const getDisplayedRows = (rows2, page2, pageSize2) => page2 && pageSize2 ? rows2.slice((page2 - 1) * pageSize2, page2 * pageSize2) : rows2;
  const formatHeaderWidth = (header) => {
    const styles = [
      header.width && `width: ${header.width}`,
      header.minWidth && `min-width: ${header.minWidth}`
    ].filter(Boolean);
    if (styles.length === 0)
      return void 0;
    return styles.join(";");
  };
  if ($$props.headers === void 0 && $$bindings.headers && headers !== void 0)
    $$bindings.headers(headers);
  if ($$props.rows === void 0 && $$bindings.rows && rows !== void 0)
    $$bindings.rows(rows);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.zebra === void 0 && $$bindings.zebra && zebra !== void 0)
    $$bindings.zebra(zebra);
  if ($$props.sortable === void 0 && $$bindings.sortable && sortable !== void 0)
    $$bindings.sortable(sortable);
  if ($$props.sortKey === void 0 && $$bindings.sortKey && sortKey !== void 0)
    $$bindings.sortKey(sortKey);
  if ($$props.sortDirection === void 0 && $$bindings.sortDirection && sortDirection !== void 0)
    $$bindings.sortDirection(sortDirection);
  if ($$props.expandable === void 0 && $$bindings.expandable && expandable !== void 0)
    $$bindings.expandable(expandable);
  if ($$props.batchExpansion === void 0 && $$bindings.batchExpansion && batchExpansion !== void 0)
    $$bindings.batchExpansion(batchExpansion);
  if ($$props.expandedRowIds === void 0 && $$bindings.expandedRowIds && expandedRowIds !== void 0)
    $$bindings.expandedRowIds(expandedRowIds);
  if ($$props.nonExpandableRowIds === void 0 && $$bindings.nonExpandableRowIds && nonExpandableRowIds !== void 0)
    $$bindings.nonExpandableRowIds(nonExpandableRowIds);
  if ($$props.radio === void 0 && $$bindings.radio && radio !== void 0)
    $$bindings.radio(radio);
  if ($$props.selectable === void 0 && $$bindings.selectable && selectable !== void 0)
    $$bindings.selectable(selectable);
  if ($$props.batchSelection === void 0 && $$bindings.batchSelection && batchSelection !== void 0)
    $$bindings.batchSelection(batchSelection);
  if ($$props.selectedRowIds === void 0 && $$bindings.selectedRowIds && selectedRowIds !== void 0)
    $$bindings.selectedRowIds(selectedRowIds);
  if ($$props.nonSelectableRowIds === void 0 && $$bindings.nonSelectableRowIds && nonSelectableRowIds !== void 0)
    $$bindings.nonSelectableRowIds(nonSelectableRowIds);
  if ($$props.stickyHeader === void 0 && $$bindings.stickyHeader && stickyHeader !== void 0)
    $$bindings.stickyHeader(stickyHeader);
  if ($$props.useStaticWidth === void 0 && $$bindings.useStaticWidth && useStaticWidth !== void 0)
    $$bindings.useStaticWidth(useStaticWidth);
  if ($$props.pageSize === void 0 && $$bindings.pageSize && pageSize !== void 0)
    $$bindings.pageSize(pageSize);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    headers.reduce((a, c) => ({ ...a, [c.key]: c.key }), {});
    expandedRows = expandedRowIds.reduce((a, id) => ({ ...a, [id]: true }), {});
    {
      batchSelectedIds.set(selectedRowIds);
    }
    headerKeys = headers.map(({ key }) => key);
    tableCellsByRowId = rows.reduce(
      (rows2, row) => {
        rows2[row.id] = headerKeys.map((key, index) => ({
          key,
          value: resolvePath(row, key),
          display: headers[index].display
        }));
        return rows2;
      },
      {}
    );
    set_store_value(tableRows, $tableRows = rows, $tableRows);
    rowIds = $tableRows.map((row) => row.id);
    expandableRowIds = rowIds.filter((id) => !nonExpandableRowIds.includes(id));
    selectableRowIds = rowIds.filter((id) => !nonSelectableRowIds.includes(id));
    selectAll = selectableRowIds.length > 0 && selectedRowIds.length === selectableRowIds.length;
    indeterminate = selectedRowIds.length > 0 && selectedRowIds.length < selectableRowIds.length;
    {
      if (batchExpansion) {
        expandable = true;
        expanded = expandedRowIds.length === expandableRowIds.length;
      }
    }
    {
      if (radio || batchSelection)
        selectable = true;
    }
    sortedRows = [...$tableRows];
    ascending = sortDirection === "ascending";
    sorting = sortable && sortKey != null;
    sortingHeader = headers.find((header) => header.key === sortKey);
    {
      if (sorting) {
        if (sortDirection === "none") {
          sortedRows = $tableRows;
        } else {
          sortedRows = [...$tableRows].sort((a, b) => {
            const itemA = ascending ? resolvePath(a, sortKey) : resolvePath(b, sortKey);
            const itemB = ascending ? resolvePath(b, sortKey) : resolvePath(a, sortKey);
            if (sortingHeader?.sort)
              return sortingHeader.sort(itemA, itemB);
            if (typeof itemA === "number" && typeof itemB === "number")
              return itemA - itemB;
            if ([itemA, itemB].every((item) => !item && item !== 0))
              return 0;
            if (!itemA && itemA !== 0)
              return ascending ? 1 : -1;
            if (!itemB && itemB !== 0)
              return ascending ? -1 : 1;
            return itemA.toString().localeCompare(itemB.toString(), "en", { numeric: true });
          });
        }
      }
    }
    displayedRows = getDisplayedRows($tableRows, page, pageSize);
    displayedSortedRows = getDisplayedRows(sortedRows, page, pageSize);
    hasCustomHeaderWidth = headers.some((header) => header.width || header.minWidth);
    $$rendered = `${validate_component(TableContainer$1, "TableContainer").$$render($$result, Object.assign({}, { useStaticWidth }, $$restProps), {}, {
      default: () => {
        return `${title || $$slots.title || description || $$slots.description ? `<div${add_classes("bx--data-table-header".trim())}>${title || $$slots.title ? `<h4${add_classes("bx--data-table-header__title".trim())}>${slots.title ? slots.title({}) : `${escape(title)}`}</h4>` : ``} ${description || $$slots.description ? `<p${add_classes("bx--data-table-header__description".trim())}>${slots.description ? slots.description({}) : `${escape(description)}`}</p>` : ``}</div>` : ``} ${slots.default ? slots.default({}) : ``} ${validate_component(Table$1, "Table").$$render(
          $$result,
          {
            zebra,
            size,
            stickyHeader,
            sortable,
            useStaticWidth,
            tableStyle: hasCustomHeaderWidth && "table-layout: fixed"
          },
          {},
          {
            default: () => {
              return `${validate_component(TableHead$1, "TableHead").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(TableRow$1, "TableRow").$$render($$result, {}, {}, {
                    default: () => {
                      return `${expandable ? `<th scope="col"${add_attribute("data-previous-value", expanded ? "collapsed" : void 0, 0)}${add_classes("bx--table-expand".trim())}>${batchExpansion ? `<button type="button"${add_classes("bx--table-expand__button".trim())}>${validate_component(ChevronRight, "ChevronRight").$$render($$result, { class: "bx--table-expand__svg" }, {}, {})}</button>` : ``}</th>` : ``} ${selectable && !batchSelection ? `<th scope="col"></th>` : ``} ${batchSelection && !radio ? `<th scope="col"${add_classes("bx--table-column-checkbox".trim())}>${validate_component(InlineCheckbox$1, "InlineCheckbox").$$render(
                        $$result,
                        {
                          "aria-label": "Select all rows",
                          checked: selectAll,
                          indeterminate,
                          ref: refSelectAll
                        },
                        {
                          ref: ($$value) => {
                            refSelectAll = $$value;
                            $$settled = false;
                          }
                        },
                        {}
                      )}</th>` : ``} ${each(headers, (header) => {
                        return `${header.empty ? `<th scope="col"${add_attribute("style", formatHeaderWidth(header), 0)}></th>` : `${validate_component(TableHeader$1, "TableHeader").$$render(
                          $$result,
                          {
                            id: header.key,
                            style: formatHeaderWidth(header),
                            sortable: sortable && header.sort !== false,
                            sortDirection: sortKey === header.key ? sortDirection : "none",
                            active: sortKey === header.key
                          },
                          {},
                          {
                            default: () => {
                              return `${slots["cell-header"] ? slots["cell-header"]({ header }) : `${escape(header.value)}`} `;
                            }
                          }
                        )}`}`;
                      })}`;
                    }
                  })}`;
                }
              })} ${validate_component(TableBody$1, "TableBody").$$render($$result, {}, {}, {
                default: () => {
                  return `${each(sorting ? displayedSortedRows : displayedRows, (row, i) => {
                    return `${validate_component(TableRow$1, "TableRow").$$render(
                      $$result,
                      {
                        "data-row": row.id,
                        "data-parent-row": expandable ? true : void 0,
                        class: (selectedRowIds.includes(row.id) ? "bx--data-table--selected" : "") + " " + (expandedRows[row.id] ? "bx--expandable-row" : "") + " " + (expandable ? "bx--parent-row" : "") + " " + (expandable && parentRowId === row.id ? "bx--expandable-row--hover" : "")
                      },
                      {},
                      {
                        default: () => {
                          return `${expandable ? `${validate_component(TableCell$1, "TableCell").$$render(
                            $$result,
                            {
                              class: "bx--table-expand",
                              headers: "expand",
                              "data-previous-value": !nonExpandableRowIds.includes(row.id) && expandedRows[row.id] ? "collapsed" : void 0
                            },
                            {},
                            {
                              default: () => {
                                return `${!nonExpandableRowIds.includes(row.id) ? `<button type="button"${add_attribute(
                                  "aria-label",
                                  expandedRows[row.id] ? "Collapse current row" : "Expand current row",
                                  0
                                )}${add_classes("bx--table-expand__button".trim())}>${validate_component(ChevronRight, "ChevronRight").$$render($$result, { class: "bx--table-expand__svg" }, {}, {})} </button>` : ``} `;
                              }
                            }
                          )}` : ``} ${selectable ? `<td${add_classes(("bx--table-column-checkbox " + (radio ? "bx--table-column-radio" : "")).trim())}>${!nonSelectableRowIds.includes(row.id) ? `${radio ? `${validate_component(RadioButton$1, "RadioButton").$$render(
                            $$result,
                            {
                              name: "select-row-" + row.id,
                              checked: selectedRowIds.includes(row.id)
                            },
                            {},
                            {}
                          )}` : `${validate_component(InlineCheckbox$1, "InlineCheckbox").$$render(
                            $$result,
                            {
                              name: "select-row-" + row.id,
                              checked: selectedRowIds.includes(row.id)
                            },
                            {},
                            {}
                          )}`}` : ``} </td>` : ``} ${each(tableCellsByRowId[row.id], (cell, j) => {
                            return `${headers[j].empty ? `<td${add_classes((headers[j].columnMenu ? "bx--table-column-menu" : "").trim())}>${slots.cell ? slots.cell({ row, cell, rowIndex: i, cellIndex: j }) : ` ${escape(cell.display ? cell.display(cell.value) : cell.value)} `} </td>` : `${validate_component(TableCell$1, "TableCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `${slots.cell ? slots.cell({ row, cell, rowIndex: i, cellIndex: j }) : ` ${escape(cell.display ? cell.display(cell.value) : cell.value)} `} `;
                              }
                            })}`}`;
                          })} `;
                        }
                      }
                    )} ${expandable ? `<tr data-child-row${add_classes("bx--expandable-row".trim())}>${expandedRows[row.id] && !nonExpandableRowIds.includes(row.id) ? `${validate_component(TableCell$1, "TableCell").$$render(
                      $$result,
                      {
                        colspan: selectable ? headers.length + 2 : headers.length + 1
                      },
                      {},
                      {
                        default: () => {
                          return `<div${add_classes("bx--child-row-inner-container".trim())}>${slots["expanded-row"] ? slots["expanded-row"]({ row }) : ``}</div> `;
                        }
                      }
                    )}` : ``} </tr>` : ``}`;
                  })}`;
                }
              })}`;
            }
          }
        )}`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_tableRows();
  return $$rendered;
});
const DataTable$1 = DataTable;
const Toolbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size"]);
  let { size = "default" } = $$props;
  let ref = null;
  const overflowVisible = writable(false);
  setContext("Toolbar", {
    overflowVisible,
    setOverflowVisible: (visible) => {
      overflowVisible.set(visible);
    }
  });
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `<section${spread([{ "aria-label": "data table toolbar" }, escape_object($$restProps)], {
    classes: "bx--table-toolbar " + (size === "sm" ? "bx--table-toolbar--small" : "") + " " + (size === "default" ? "bx--table-toolbar--normal" : ""),
    styles: { "z-index": 1 }
  })}${add_attribute("this", ref, 0)}>${slots.default ? slots.default({}) : ``}</section>`;
});
const Toolbar$1 = Toolbar;
const ToolbarContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div${add_classes("bx--toolbar-content".trim())}>${slots.default ? slots.default({}) : ``}</div>`;
});
const ToolbarContent$1 = ToolbarContent;
const { Object: Object_1 } = globals;
const ToolbarSearch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let originalRows;
  let classes;
  let $$restProps = compute_rest_props($$props, [
    "value",
    "expanded",
    "persistent",
    "disabled",
    "shouldFilterRows",
    "filteredRowIds",
    "tabindex",
    "ref"
  ]);
  let $tableRows, $$unsubscribe_tableRows;
  let { value = "" } = $$props;
  let { expanded = false } = $$props;
  let { persistent = false } = $$props;
  let { disabled = false } = $$props;
  let { shouldFilterRows = false } = $$props;
  let { filteredRowIds = [] } = $$props;
  let { tabindex = "0" } = $$props;
  let { ref = null } = $$props;
  const { tableRows } = getContext("DataTable") ?? {};
  $$unsubscribe_tableRows = subscribe(tableRows, (value2) => $tableRows = value2);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.expanded === void 0 && $$bindings.expanded && expanded !== void 0)
    $$bindings.expanded(expanded);
  if ($$props.persistent === void 0 && $$bindings.persistent && persistent !== void 0)
    $$bindings.persistent(persistent);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.shouldFilterRows === void 0 && $$bindings.shouldFilterRows && shouldFilterRows !== void 0)
    $$bindings.shouldFilterRows(shouldFilterRows);
  if ($$props.filteredRowIds === void 0 && $$bindings.filteredRowIds && filteredRowIds !== void 0)
    $$bindings.filteredRowIds(filteredRowIds);
  if ($$props.tabindex === void 0 && $$bindings.tabindex && tabindex !== void 0)
    $$bindings.tabindex(tabindex);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    originalRows = tableRows ? [...$tableRows] : [];
    {
      if (shouldFilterRows) {
        let rows = originalRows;
        if (value.trim().length > 0) {
          if (shouldFilterRows === true) {
            rows = rows.filter((row) => {
              return Object.entries(row).filter(([key]) => key !== "id").some(([key, _value]) => {
                if (typeof _value === "string" || typeof _value === "number") {
                  return (_value + "")?.toLowerCase().includes(value.trim().toLowerCase());
                }
              });
            });
          } else if (typeof shouldFilterRows === "function") {
            rows = rows.filter((row) => shouldFilterRows(row, value) ?? false);
          }
        }
        tableRows.set(rows);
        filteredRowIds = rows.map((row) => row.id);
      }
    }
    expanded = !!value.length;
    classes = [
      expanded && "bx--toolbar-search-container-active",
      persistent ? "bx--toolbar-search-container-persistent" : "bx--toolbar-search-container-expandable",
      disabled && "bx--toolbar-search-container-disabled"
    ].filter(Boolean).join(" ");
    $$rendered = `${validate_component(Search, "Search").$$render(
      $$result,
      Object_1.assign(
        {},
        { tabindex },
        { disabled },
        $$restProps,
        {
          searchClass: classes + " " + $$restProps.class
        },
        { ref },
        { value }
      ),
      {
        ref: ($$value) => {
          ref = $$value;
          $$settled = false;
        },
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  $$unsubscribe_tableRows();
  return $$rendered;
});
const ToolbarSearch$1 = ToolbarSearch;
const Settings = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M27,16.76c0-.25,0-.5,0-.76s0-.51,0-.77l1.92-1.68A2,2,0,0,0,29.3,11L26.94,7a2,2,0,0,0-1.73-1,2,2,0,0,0-.64.1l-2.43.82a11.35,11.35,0,0,0-1.31-.75l-.51-2.52a2,2,0,0,0-2-1.61H13.64a2,2,0,0,0-2,1.61l-.51,2.52a11.48,11.48,0,0,0-1.32.75L7.43,6.06A2,2,0,0,0,6.79,6,2,2,0,0,0,5.06,7L2.7,11a2,2,0,0,0,.41,2.51L5,15.24c0,.25,0,.5,0,.76s0,.51,0,.77L3.11,18.45A2,2,0,0,0,2.7,21L5.06,25a2,2,0,0,0,1.73,1,2,2,0,0,0,.64-.1l2.43-.82a11.35,11.35,0,0,0,1.31.75l.51,2.52a2,2,0,0,0,2,1.61h4.72a2,2,0,0,0,2-1.61l.51-2.52a11.48,11.48,0,0,0,1.32-.75l2.42.82a2,2,0,0,0,.64.1,2,2,0,0,0,1.73-1L29.3,21a2,2,0,0,0-.41-2.51ZM25.21,24l-3.43-1.16a8.86,8.86,0,0,1-2.71,1.57L18.36,28H13.64l-.71-3.55a9.36,9.36,0,0,1-2.7-1.57L6.79,24,4.43,20l2.72-2.4a8.9,8.9,0,0,1,0-3.13L4.43,12,6.79,8l3.43,1.16a8.86,8.86,0,0,1,2.71-1.57L13.64,4h4.72l.71,3.55a9.36,9.36,0,0,1,2.7,1.57L25.21,8,27.57,12l-2.72,2.4a8.9,8.9,0,0,1,0,3.13L27.57,20Z"></path><path d="M16,22a6,6,0,1,1,6-6A5.94,5.94,0,0,1,16,22Zm0-10a3.91,3.91,0,0,0-4,4,3.91,3.91,0,0,0,4,4,3.91,3.91,0,0,0,4-4A3.91,3.91,0,0,0,16,12Z"></path></svg>`;
});
const Settings$1 = Settings;
const ToolbarMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  const ctx = getContext("Toolbar");
  let menuRef = null;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if (menuRef)
        menuRef.style.top = "100%";
    }
    {
      ctx.setOverflowVisible(menuRef != null);
    }
    $$rendered = `${validate_component(OverflowMenu, "OverflowMenu").$$render(
      $$result,
      Object.assign(
        {},
        { icon: Settings$1 },
        $$restProps,
        {
          class: "bx--toolbar-action bx--overflow-menu " + $$restProps.class
        },
        { flipped: true },
        { menuRef }
      ),
      {
        menuRef: ($$value) => {
          menuRef = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const ToolbarMenu$1 = ToolbarMenu;
const CaretLeft = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M20 24L10 16 20 8z"></path></svg>`;
});
const CaretLeft$1 = CaretLeft;
const Pagination = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let totalPages;
  let selectItems;
  let backButtonDisabled;
  let forwardButtonDisabled;
  let $$restProps = compute_rest_props($$props, [
    "page",
    "totalItems",
    "disabled",
    "forwardText",
    "backwardText",
    "itemsPerPageText",
    "itemText",
    "itemRangeText",
    "pageInputDisabled",
    "pageSizeInputDisabled",
    "pageSize",
    "pageSizes",
    "pagesUnknown",
    "pageText",
    "pageRangeText",
    "id"
  ]);
  let { page = 1 } = $$props;
  let { totalItems = 0 } = $$props;
  let { disabled = false } = $$props;
  let { forwardText = "Next page" } = $$props;
  let { backwardText = "Previous page" } = $$props;
  let { itemsPerPageText = "Items per page:" } = $$props;
  let { itemText = (min, max) => `${min}–${max} item${max === 1 ? "" : "s"}` } = $$props;
  let { itemRangeText = (min, max, total) => `${min}–${max} of ${total} item${max === 1 ? "" : "s"}` } = $$props;
  let { pageInputDisabled = false } = $$props;
  let { pageSizeInputDisabled = false } = $$props;
  let { pageSize = 10 } = $$props;
  let { pageSizes = [10] } = $$props;
  let { pagesUnknown = false } = $$props;
  let { pageText = (page2) => `page ${page2}` } = $$props;
  let { pageRangeText = (current, total) => `of ${total} page${total === 1 ? "" : "s"}` } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  const dispatch = createEventDispatcher();
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.totalItems === void 0 && $$bindings.totalItems && totalItems !== void 0)
    $$bindings.totalItems(totalItems);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.forwardText === void 0 && $$bindings.forwardText && forwardText !== void 0)
    $$bindings.forwardText(forwardText);
  if ($$props.backwardText === void 0 && $$bindings.backwardText && backwardText !== void 0)
    $$bindings.backwardText(backwardText);
  if ($$props.itemsPerPageText === void 0 && $$bindings.itemsPerPageText && itemsPerPageText !== void 0)
    $$bindings.itemsPerPageText(itemsPerPageText);
  if ($$props.itemText === void 0 && $$bindings.itemText && itemText !== void 0)
    $$bindings.itemText(itemText);
  if ($$props.itemRangeText === void 0 && $$bindings.itemRangeText && itemRangeText !== void 0)
    $$bindings.itemRangeText(itemRangeText);
  if ($$props.pageInputDisabled === void 0 && $$bindings.pageInputDisabled && pageInputDisabled !== void 0)
    $$bindings.pageInputDisabled(pageInputDisabled);
  if ($$props.pageSizeInputDisabled === void 0 && $$bindings.pageSizeInputDisabled && pageSizeInputDisabled !== void 0)
    $$bindings.pageSizeInputDisabled(pageSizeInputDisabled);
  if ($$props.pageSize === void 0 && $$bindings.pageSize && pageSize !== void 0)
    $$bindings.pageSize(pageSize);
  if ($$props.pageSizes === void 0 && $$bindings.pageSizes && pageSizes !== void 0)
    $$bindings.pageSizes(pageSizes);
  if ($$props.pagesUnknown === void 0 && $$bindings.pagesUnknown && pagesUnknown !== void 0)
    $$bindings.pagesUnknown(pagesUnknown);
  if ($$props.pageText === void 0 && $$bindings.pageText && pageText !== void 0)
    $$bindings.pageText(pageText);
  if ($$props.pageRangeText === void 0 && $$bindings.pageRangeText && pageRangeText !== void 0)
    $$bindings.pageRangeText(pageRangeText);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      dispatch("update", { pageSize, page });
    }
    totalPages = Math.max(Math.ceil(totalItems / pageSize), 1);
    selectItems = Array.from({ length: totalPages }, (_, i) => i);
    backButtonDisabled = disabled || page === 1;
    forwardButtonDisabled = disabled || page === totalPages;
    $$rendered = `<div${spread([{ id: escape_attribute_value(id) }, escape_object($$restProps)], { classes: "bx--pagination" })}><div${add_classes("bx--pagination__left".trim())}>${!pageSizeInputDisabled ? `<label id="${"bx--pagination-select-" + escape(id, true) + "-count-label"}" for="${"bx--pagination-select-" + escape(id, true)}"${add_classes("bx--pagination__text".trim())}>${escape(itemsPerPageText)}</label> ${validate_component(Select, "Select").$$render(
      $$result,
      {
        id: "bx--pagination-select-" + id,
        class: "bx--select__item-count",
        hideLabel: true,
        noLabel: true,
        inline: true,
        selected: pageSize
      },
      {
        selected: ($$value) => {
          pageSize = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${each(pageSizes, (size, i) => {
            return `${validate_component(SelectItem, "SelectItem").$$render($$result, { value: size, text: size.toString() }, {}, {})}`;
          })}`;
        }
      }
    )}` : ``} <span${add_classes((!pageSizeInputDisabled ? "bx--pagination__text" : "").trim())}>${pagesUnknown ? `${escape(itemText(pageSize * (page - 1) + 1, page * pageSize))}` : `${escape(itemRangeText(Math.min(pageSize * (page - 1) + 1, totalItems), Math.min(page * pageSize, totalItems), totalItems))}`}</span></div> <div${add_classes("bx--pagination__right".trim())}>${!pageInputDisabled ? `${validate_component(Select, "Select").$$render(
      $$result,
      {
        id: "bx--pagination-select-" + (id + 2),
        class: "bx--select__page-number",
        labelText: "Page number, of " + totalPages + " pages",
        inline: true,
        hideLabel: true,
        selected: page
      },
      {
        selected: ($$value) => {
          page = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${each(selectItems, (size, i) => {
            return `${validate_component(SelectItem, "SelectItem").$$render(
              $$result,
              {
                value: size + 1,
                text: (size + 1).toString()
              },
              {},
              {}
            )}`;
          })}`;
        }
      }
    )} <span${add_classes("bx--pagination__text".trim())}>${pagesUnknown ? `${escape(pageText(page))}` : `${escape(pageRangeText(page, totalPages))}`}</span>` : ``} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        kind: "ghost",
        tooltipAlignment: "center",
        tooltipPosition: "top",
        icon: CaretLeft$1,
        iconDescription: backwardText,
        disabled: backButtonDisabled,
        class: "bx--pagination__button bx--pagination__button--backward " + (backButtonDisabled ? "bx--pagination__button--no-index" : "")
      },
      {},
      {}
    )} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        kind: "ghost",
        tooltipAlignment: "end",
        tooltipPosition: "top",
        icon: CaretRight$1,
        iconDescription: forwardText,
        disabled: forwardButtonDisabled,
        class: "bx--pagination__button bx--pagination__button--forward " + (forwardButtonDisabled ? "bx--pagination__button--no-index" : "")
      },
      {},
      {}
    )}</div></div>`;
  } while (!$$settled);
  return $$rendered;
});
const Pagination$1 = Pagination;
export {
  DataTable$1 as D,
  Pagination$1 as P,
  Toolbar$1 as T,
  ToolbarContent$1 as a,
  ToolbarSearch$1 as b,
  ToolbarMenu$1 as c
};
