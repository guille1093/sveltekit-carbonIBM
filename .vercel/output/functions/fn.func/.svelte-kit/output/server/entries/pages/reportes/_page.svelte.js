import { c as create_ssr_component, a as compute_rest_props, k as compute_slots, q as getContext, j as subscribe, b as spread, e as escape_attribute_value, d as escape_object, i as add_attribute, h as add_classes, f as escape, v as validate_component, g as createEventDispatcher, p as onDestroy } from "../../../chunks/ssr.js";
import { P as Printer } from "../../../chunks/Printer.js";
import { T as Tile } from "../../../chunks/Tile.js";
import { A as Accordion, a as AccordionItem } from "../../../chunks/AccordionItem.js";
import { D as DataTable, T as Toolbar, a as ToolbarContent, b as ToolbarSearch, c as ToolbarMenu, P as Pagination } from "../../../chunks/Pagination.js";
import { B as Button } from "../../../chunks/Button.js";
import { pointer, min, easeCubicInOut, bin, stack, stackOffsetDiverging, scaleOrdinal, select, area, line, scaleBand, brushX, scaleTime, axisBottom, axisLeft, scaleLinear, arc, easeLinear, extent, pie, interpolateRound, interpolateNumber, axisTop, axisRight, interpolate, max, scaleLog, curveLinear, curveLinearClosed, curveBasis, curveBasisClosed, curveBasisOpen, curveBundle, curveCardinal, curveCardinalClosed, curveCardinalOpen, curveCatmullRom, curveCatmullRomClosed, curveCatmullRomOpen, curveMonotoneX, curveMonotoneY, curveNatural, curveStep, curveStepAfter, curveStepBefore } from "d3";
import "d3-sankey";
import "d3-cloud";
import { Spanish } from "flatpickr/dist/l10n/es.js";
import { G as Grid, R as Row, C as Column } from "../../../chunks/Column.js";
import { D as DatePicker, a as DatePickerInput } from "../../../chunks/DatePickerInput.js";
const OverflowMenuItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let buttonProps;
  let $$restProps = compute_rest_props($$props, [
    "text",
    "href",
    "primaryFocus",
    "disabled",
    "hasDivider",
    "danger",
    "requireTitle",
    "id",
    "ref"
  ]);
  let $$slots = compute_slots(slots);
  let $focusedId, $$unsubscribe_focusedId;
  let { text = "Provide text" } = $$props;
  let { href = "" } = $$props;
  let { primaryFocus = false } = $$props;
  let { disabled = false } = $$props;
  let { hasDivider = false } = $$props;
  let { danger = false } = $$props;
  let { requireTitle = true } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { ref = null } = $$props;
  const { focusedId, add, update, change } = getContext("OverflowMenu");
  $$unsubscribe_focusedId = subscribe(focusedId, (value) => $focusedId = value);
  add({ id, text, primaryFocus, disabled });
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.primaryFocus === void 0 && $$bindings.primaryFocus && primaryFocus !== void 0)
    $$bindings.primaryFocus(primaryFocus);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.hasDivider === void 0 && $$bindings.hasDivider && hasDivider !== void 0)
    $$bindings.hasDivider(hasDivider);
  if ($$props.danger === void 0 && $$bindings.danger && danger !== void 0)
    $$bindings.danger(danger);
  if ($$props.requireTitle === void 0 && $$bindings.requireTitle && requireTitle !== void 0)
    $$bindings.requireTitle(requireTitle);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  primaryFocus = $focusedId === id;
  buttonProps = {
    role: "menuitem",
    tabindex: "-1",
    class: "bx--overflow-menu-options__btn",
    disabled: href ? void 0 : disabled,
    href: href ? href : void 0,
    title: requireTitle ? $$slots.default ? void 0 : text : void 0
  };
  $$unsubscribe_focusedId();
  return `<li${spread(
    [
      { role: "none" },
      { id: escape_attribute_value(id) },
      escape_object($$restProps)
    ],
    {
      classes: "bx--overflow-menu-options__option " + (hasDivider ? "bx--overflow-menu--divider" : "") + " " + (danger ? "bx--overflow-menu-options__option--danger" : "") + " " + (disabled ? "bx--overflow-menu-options__option--disabled" : "")
    }
  )}>${href ? `  <a${spread([escape_object(buttonProps)], {})}${add_attribute("this", ref, 0)}>${slots.default ? slots.default({}) : ` <div${add_classes("bx--overflow-menu-options__option-content".trim())}>${escape(text)}</div> `}</a>` : `<button${spread([escape_object(buttonProps)], {})}${add_attribute("this", ref, 0)}>${slots.default ? slots.default({}) : ` <div${add_classes("bx--overflow-menu-options__option-content".trim())}>${escape(text)}</div> `}</button>`}</li>`;
});
const OverflowMenuItem$1 = OverflowMenuItem;
const ToolbarMenuItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return `${validate_component(OverflowMenuItem$1, "OverflowMenuItem").$$render($$result, Object.assign({}, $$restProps), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const ToolbarMenuItem$1 = ToolbarMenuItem;
const styles = "";
const TileVentas = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { titulo } = $$props;
  let ventasMesAnterior = 0;
  data.ventas.forEach((venta) => {
    if (venta.expand.pagos) {
      venta.expand.pagos.forEach((pago) => {
        ventasMesAnterior += parseInt(pago.valor);
      });
    }
  });
  ventasMesAnterior = new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS" }).format(ventasMesAnterior);
  let rows = data.ventas.map((venta) => {
    if (venta.expand.pagos) {
      return {
        id: venta.expand.pagos[0].id,
        Paquete: venta.expand.paquete.nombre + " " + new Date(venta.expand.paquete.fechasalida).toLocaleDateString("es-AR", {
          year: "numeric",
          month: "numeric",
          day: "numeric"
        }),
        Titular: venta.expand.cliente.nombre + " " + venta.expand.cliente.apellido,
        Importe: new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS" }).format(venta.expand.pagos.reduce((acc, pago) => acc + pago.valor, 0)),
        Fecha: new Date(venta.expand.pagos[0].created).toLocaleDateString("es-AR", {
          year: "numeric",
          month: "numeric",
          day: "numeric"
        })
      };
    }
  });
  rows = rows.filter((row) => row !== void 0);
  let pageSize = 5;
  let page = 1;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.titulo === void 0 && $$bindings.titulo && titulo !== void 0)
    $$bindings.titulo(titulo);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div>${validate_component(Tile, "Tile").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Accordion, "Accordion").$$render($$result, { size: "sm" }, {}, {
          default: () => {
            return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
              title: () => {
                return `<h5>${escape(titulo)}</h5> <h3>${escape(ventasMesAnterior)}</h3> `;
              },
              default: () => {
                return `${validate_component(DataTable, "DataTable").$$render(
                  $$result,
                  {
                    useStaticWidth: true,
                    stickyHeader: true,
                    class: "w-full",
                    sortKey: "Fecha",
                    sortDirection: "descending",
                    sortable: true,
                    headers: [
                      { key: "Paquete", value: "Paquete" },
                      { key: "Titular", value: "Titular" },
                      { key: "Importe", value: "Importe" },
                      { key: "Fecha", value: "Fecha" }
                    ],
                    pageSize,
                    page,
                    rows
                  },
                  {},
                  {
                    default: () => {
                      return `${validate_component(Toolbar, "Toolbar").$$render($$result, { size: "sm" }, {}, {
                        default: () => {
                          return `${validate_component(ToolbarContent, "ToolbarContent").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(ToolbarSearch, "ToolbarSearch").$$render(
                                $$result,
                                {
                                  placeholder: "Buscar",
                                  persistent: true,
                                  shouldFilterRows: true
                                },
                                {},
                                {}
                              )} ${validate_component(ToolbarMenu, "ToolbarMenu").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(ToolbarMenuItem$1, "ToolbarMenuItem").$$render($$result, { primaryFocus: true }, {}, {
                                    default: () => {
                                      return `Restart all`;
                                    }
                                  })} ${validate_component(ToolbarMenuItem$1, "ToolbarMenuItem").$$render(
                                    $$result,
                                    {
                                      href: "https://cloud.ibm.com/docs/loadbalancer-service"
                                    },
                                    {},
                                    {
                                      default: () => {
                                        return `API documentation`;
                                      }
                                    }
                                  )} ${validate_component(ToolbarMenuItem$1, "ToolbarMenuItem").$$render($$result, { hasDivider: true, danger: true }, {}, {
                                    default: () => {
                                      return `Stop all`;
                                    }
                                  })}`;
                                }
                              })} ${validate_component(Button, "Button").$$render($$result, { icon: Printer }, {}, {
                                default: () => {
                                  return `Imprimir reporte`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  }
                )} ${validate_component(Pagination, "Pagination").$$render(
                  $$result,
                  {
                    totalItems: rows.length,
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
                )}`;
              }
            })}`;
          }
        })}`;
      }
    })}</div>`;
  } while (!$$settled);
  return $$rendered;
});
var r$1 = /* @__PURE__ */ ((E2) => (E2.RENDER_FINISHED = "render-finished", E2.RESIZE = "chart-resize", E2.MOUSEOVER = "chart-mouseover", E2.MOUSEOUT = "chart-mouseout", E2))(r$1 || {}), e = /* @__PURE__ */ ((E2) => (E2.SHOW = "show-modal", E2.HIDE = "hide-modal", E2))(e || {}), O$1 = /* @__PURE__ */ ((E2) => (E2.UPDATE = "model-update", E2))(O$1 || {}), a = /* @__PURE__ */ ((E2) => (E2.SHOW_OVERFLOW_MENU = "show-toolbar-overflow-menu", E2.HIDE_OVERFLOW_MENU = "hide-toolbar-overflow-menu", E2.BUTTON_CLICK = "toolbar-button-click", E2))(a || {}), u$1 = /* @__PURE__ */ ((E2) => (E2.UPDATE = "zoom-bar-update", E2.SELECTION_START = "zoom-bar-selection-start", E2.SELECTION_IN_PROGRESS = "zoom-bar-selection-in-progress", E2.SELECTION_END = "zoom-bar-selection-end", E2))(u$1 || {}), o = /* @__PURE__ */ ((E2) => (E2.CHANGE = "zoom-domain-change", E2))(o || {}), _$2 = /* @__PURE__ */ ((E2) => (E2.CANVAS_ZOOM_IN = "canvas-zoom-in", E2.CANVAS_ZOOM_OUT = "canvas-zoom-out", E2))(_$2 || {}), t = /* @__PURE__ */ ((E2) => (E2.LABEL_MOUSEOVER = "axis-label-mouseover", E2.LABEL_MOUSEMOVE = "axis-label-mousemove", E2.LABEL_CLICK = "axis-label-click", E2.LABEL_MOUSEOUT = "axis-label-mouseout", E2.LABEL_FOCUS = "axis-label-focus", E2.LABEL_BLUR = "axis-label-blur", E2.RENDER_COMPLETE = "axis-render-complete", E2))(t || {}), R = /* @__PURE__ */ ((E2) => (E2.POINT_MOUSEOVER = "scatter-mouseover", E2.POINT_MOUSEMOVE = "scatter-mousemove", E2.POINT_CLICK = "scatter-click", E2.POINT_MOUSEOUT = "scatter-mouseout", E2))(R || {}), s = /* @__PURE__ */ ((E2) => (E2.WORD_MOUSEOVER = "wordcloud-word-mouseover", E2.WORD_MOUSEMOVE = "wordcloud-word-mousemove", E2.WORD_CLICK = "wordcloud-word-click", E2.WORD_MOUSEOUT = "wordcloud-word-mouseout", E2))(s || {}), M$3 = /* @__PURE__ */ ((E2) => (E2.SLICE_MOUSEOVER = "pie-slice-mouseover", E2.SLICE_MOUSEMOVE = "pie-slice-mousemove", E2.SLICE_CLICK = "pie-slice-click", E2.SLICE_MOUSEOUT = "pie-slice-mouseout", E2))(M$3 || {}), v$3 = /* @__PURE__ */ ((E2) => (E2.ARC_MOUSEOVER = "gauge-arc-mouseover", E2.ARC_MOUSEMOVE = "gauge-arc-mousemove", E2.ARC_CLICK = "gauge-arc-click", E2.ARC_MOUSEOUT = "gauge-arc-mouseout", E2))(v$3 || {}), U$1 = /* @__PURE__ */ ((E2) => (E2.BAR_MOUSEOVER = "bar-mouseover", E2.BAR_MOUSEMOVE = "bar-mousemove", E2.BAR_CLICK = "bar-click", E2.BAR_MOUSEOUT = "bar-mouseout", E2))(U$1 || {}), S$2 = /* @__PURE__ */ ((E2) => (E2.BOX_MOUSEOVER = "box-mouseover", E2.BOX_MOUSEMOVE = "box-mousemove", E2.BOX_CLICK = "box-click", E2.BOX_MOUSEOUT = "box-mouseout", E2.OUTLIER_MOUSEOVER = "outlier-mouseover", E2.OUTLIER_MOUSEMOVE = "outlier-mousemove", E2.OUTLIER_CLICK = "outlier-click", E2.OUTLIER_MOUSEOUT = "outlier-mouseout", E2))(S$2 || {}), I$2 = /* @__PURE__ */ ((E2) => (E2.SCATTER_MOUSEOVER = "scatter-mouseover", E2.SCATTER_MOUSEMOVE = "scatter-mousemove", E2.SCATTER_CLICK = "scatter-click", E2.SCATTER_MOUSEOUT = "scatter-mouseout", E2))(I$2 || {}), m$1 = /* @__PURE__ */ ((E2) => (E2.POINT_MOUSEOVER = "scatter-mouseover", E2.POINT_MOUSEMOVE = "scatter-mousemove", E2.POINT_CLICK = "scatter-click", E2.POINT_MOUSEOUT = "scatter-mouseout", E2))(m$1 || {}), l = /* @__PURE__ */ ((E2) => (E2.X_AXIS_MOUSEOVER = "radar-x-axis-mouseover", E2.X_AXIS_MOUSEMOVE = "radar-x-axis-mousemove", E2.X_AXIS_CLICK = "radar-x-axis-click", E2.X_AXIS_MOUSEOUT = "radar-x-axis-mouseout", E2))(l || {}), c = /* @__PURE__ */ ((E2) => (E2.NODE_MOUSEOVER = "tree-node-mouseover", E2.NODE_CLICK = "tree-node-click", E2.NODE_MOUSEOUT = "tree-node-mouseout", E2))(c || {}), L$1 = /* @__PURE__ */ ((E2) => (E2.LEAF_MOUSEOVER = "leaf-mouseover", E2.LEAF_MOUSEMOVE = "leaf-mousemove", E2.LEAF_CLICK = "leaf-click", E2.LEAF_MOUSEOUT = "leaf-mouseout", E2))(L$1 || {}), N$2 = /* @__PURE__ */ ((E2) => (E2.SHOW = "show-tooltip", E2.MOVE = "move-tooltip", E2.HIDE = "hide-tooltip", E2))(N$2 || {}), n = /* @__PURE__ */ ((E2) => (E2.SHOW = "show-threshold", E2.HIDE = "hide-threshold", E2))(n || {}), A$2 = /* @__PURE__ */ ((E2) => (E2.ITEM_HOVER = "legend-item-onhover", E2.ITEM_CLICK = "legend-item-onclick", E2.ITEM_MOUSEOUT = "legend-item-onmouseout", E2.ITEMS_UPDATE = "legend-items-update", E2))(A$2 || {}), C$1 = /* @__PURE__ */ ((E2) => (E2.CIRCLE_MOUSEOVER = "circle-leaf-mouseover", E2.CIRCLE_CLICK = "circle-leaf-click", E2.CIRCLE_MOUSEOUT = "circle-leaf-mouseout", E2.CIRCLE_MOUSEMOVE = "circle-leaf-mousemove", E2))(C$1 || {}), T$1 = /* @__PURE__ */ ((E2) => (E2.NODE_MOUSEOVER = "alluvial-node-mouseover", E2.NODE_CLICK = "alluvial-node-click", E2.NODE_MOUSEOUT = "alluvial-node-mouseout", E2.NODE_MOUSEMOVE = "alluvial-node-mousemove", E2.LINE_MOUSEOVER = "alluvial-line-mouseover", E2.LINE_CLICK = "alluvial-line-click", E2.LINE_MOUSEOUT = "alluvial-line-mouseout", E2.LINE_MOUSEMOVE = "alluvial-line-mousemove", E2))(T$1 || {}), V$2 = /* @__PURE__ */ ((E2) => (E2.METER_MOUSEOVER = "meter-mouseover", E2.METER_CLICK = "meter-click", E2.METER_MOUSEOUT = "meter-mouseout", E2.METER_MOUSEMOVE = "meter-mousemove", E2))(V$2 || {}), i$1 = /* @__PURE__ */ ((E2) => (E2.HEATMAP_MOUSEOVER = "heatmap-mouseover", E2.HEATMAP_CLICK = "heatmap-click", E2.HEATMAP_MOUSEOUT = "heatmap-mouseout", E2.HEATMAP_MOUSEMOVE = "hetmap-mousemove", E2))(i$1 || {}), d = /* @__PURE__ */ ((E2) => (E2.CHOROPLETH_MOUSEOVER = "choropleth-mouseover", E2.CHOROPLETH_CLICK = "choropleth-click", E2.CHOROPLETH_MOUSEOUT = "choropleth-mouseout", E2.CHOROPLETH_MOUSEMOVE = "choropleth-mousemove", E2))(d || {});
const H$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Alluvial: T$1,
  Area: R,
  Axis: t,
  Bar: U$1,
  Boxplot: S$2,
  CanvasZoom: _$2,
  Chart: r$1,
  Choropleth: d,
  CirclePack: C$1,
  Gauge: v$3,
  Heatmap: i$1,
  Legend: A$2,
  Line: m$1,
  Meter: V$2,
  Modal: e,
  Model: O$1,
  Pie: M$3,
  Radar: l,
  Scatter: I$2,
  Threshold: n,
  Toolbar: a,
  Tooltip: N$2,
  Tree: c,
  Treemap: L$1,
  WordCloud: s,
  ZoomBar: u$1,
  ZoomDomain: o
}, Symbol.toStringTag, { value: "Module" })), oE = H$2;
var D$2 = /* @__PURE__ */ ((E2) => (E2.HTML = "html", E2.SVG = "svg", E2))(D$2 || {}), g$1 = /* @__PURE__ */ ((E2) => (E2.WHITE = "white", E2.G100 = "g100", E2.G90 = "g90", E2.G10 = "g10", E2))(g$1 || {}), b$1 = /* @__PURE__ */ ((E2) => (E2.BACKGROUND = "background", E2.FILL = "fill", E2.STROKE = "stroke", E2.TOOLTIP = "tooltip", E2))(b$1 || {}), f = /* @__PURE__ */ ((E2) => (E2.LEFT = "left", E2.RIGHT = "right", E2.TOP = "top", E2.BOTTOM = "bottom", E2))(f || {}), K$2 = /* @__PURE__ */ ((E2) => (E2.GRAPH_VIEW = "graph_view", E2.SLIDER_VIEW = "slider_view", E2))(K$2 || {}), h$1 = /* @__PURE__ */ ((E2) => (E2.END_LINE = "end_line", E2.MID_LINE = "mid_line", E2.FRONT_LINE = "front_line", E2.NONE = "none", E2))(h$1 || {}), F$2 = /* @__PURE__ */ ((E2) => (E2.VERTICAL = "vertical", E2.HORIZONTAL = "horizontal", E2))(F$2 || {}), w$1 = /* @__PURE__ */ ((E2) => (E2.TIME = "time", E2.LINEAR = "linear", E2.LOG = "log", E2.LABELS = "labels", E2.LABELS_RATIO = "labels-ratio", E2))(w$1 || {}), P$1 = /* @__PURE__ */ ((E2) => (E2.RIGHT = "right", E2.LEFT = "left", E2.TOP = "top", E2.BOTTOM = "bottom", E2))(P$1 || {}), k$2 = /* @__PURE__ */ ((E2) => (E2.LEFT = "left", E2.CENTER = "center", E2.RIGHT = "right", E2))(k$2 || {}), G$2 = /* @__PURE__ */ ((E2) => (E2.HORIZONTAL = "horizontal", E2.VERTICAL = "vertical", E2))(G$2 || {}), X$2 = /* @__PURE__ */ ((E2) => (E2.TREE = "tree", E2.DENDROGRAM = "dendrogram", E2))(X$2 || {}), z$2 = /* @__PURE__ */ ((E2) => (E2.ROW = "row", E2.COLUMN = "column", E2.ROW_REVERSE = "row-reverse", E2.COLUMN_REVERSE = "column-reverse", E2))(z$2 || {}), W$3 = /* @__PURE__ */ ((E2) => (E2.FIXED = "fixed", E2.PREFERRED = "preferred", E2.STRETCH = "stretch", E2))(W$3 || {}), B$2 = /* @__PURE__ */ ((E2) => (E2.CENTER = "center", E2))(B$2 || {}), q$2 = /* @__PURE__ */ ((E2) => (E2.LEFT = "left", E2.RIGHT = "right", E2))(q$2 || {}), Z$3 = /* @__PURE__ */ ((E2) => (E2.GRID = "grid", E2.VERT_OR_HORIZ = "vertOrHoriz", E2.PIE = "pie", E2.DONUT = "donut", E2))(Z$3 || {}), Q$3 = /* @__PURE__ */ ((E2) => (E2.SEMI = "semi", E2.FULL = "full", E2))(Q$3 || {}), j$3 = /* @__PURE__ */ ((E2) => (E2.ALWAYS = "always", E2.AUTO = "auto", E2.NEVER = "never", E2))(j$3 || {}), p$2 = /* @__PURE__ */ ((E2) => (E2.SCATTER = "scatter", E2.LINE = "line", E2.SIMPLE_BAR = "simple-bar", E2.STACKED_BAR = "stacked-bar", E2.GROUPED_BAR = "grouped-bar", E2.AREA = "area", E2.STACKED_AREA = "stacked-area", E2))(p$2 || {}), y$1 = /* @__PURE__ */ ((E2) => (E2.EXPORT_CSV = "Export as CSV", E2.EXPORT_PNG = "Export as PNG", E2.EXPORT_JPG = "Export as JPG", E2.ZOOM_IN = "Zoom in", E2.ZOOM_OUT = "Zoom out", E2.RESET_ZOOM = "Reset zoom", E2.MAKE_FULLSCREEN = "Make fullscreen", E2.SHOW_AS_DATATABLE = "Show as data-table", E2.CUSTOM = "Custom", E2))(y$1 || {}), EE = /* @__PURE__ */ ((E2) => (E2.LEFT = "left", E2.RIGHT = "right", E2))(EE || {}), rE = /* @__PURE__ */ ((E2) => (E2.CHECKBOX = "checkbox", E2.RADIUS = "radius", E2.AREA = "area", E2.SIZE = "size", E2.LINE = "line", E2.QUARTILE = "quartile", E2.ZOOM = "zoom", E2))(rE || {}), OE = /* @__PURE__ */ ((E2) => (E2.ON = "on", E2.AUTO = "auto", E2.OFF = "off", E2))(OE || {}), aE = /* @__PURE__ */ ((E2) => (E2.DEFAULT = "default", E2.HOVERABLE = "hoverable", E2))(aE || {}), uE = /* @__PURE__ */ ((E2) => (E2.geoEqualEarth = "geoEqualEarth", E2.geoAlbers = "geoAlbers", E2.geoConicEqualArea = "geoConicEqualArea", E2.geoConicEquidistant = "geoConicEquidistant", E2.geoEquirectangular = "geoEquirectangular", E2.geoMercator = "geoMercator", E2.geoNaturalEarth1 = "geoNaturalEarth1", E2))(uE || {});
function Be$2(e2) {
  return function() {
    var t2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r2 = t2.width ? String(t2.width) : e2.defaultWidth, n2 = e2.formats[r2] || e2.formats[e2.defaultWidth];
    return n2;
  };
}
function ue(e2) {
  return function(t2, r2) {
    var n2 = r2 != null && r2.context ? String(r2.context) : "standalone", a2;
    if (n2 === "formatting" && e2.formattingValues) {
      var i2 = e2.defaultFormattingWidth || e2.defaultWidth, o2 = r2 != null && r2.width ? String(r2.width) : i2;
      a2 = e2.formattingValues[o2] || e2.formattingValues[i2];
    } else {
      var s2 = e2.defaultWidth, u2 = r2 != null && r2.width ? String(r2.width) : e2.defaultWidth;
      a2 = e2.values[u2] || e2.values[s2];
    }
    var l2 = e2.argumentCallback ? e2.argumentCallback(t2) : t2;
    return a2[l2];
  };
}
function le$1(e2) {
  return function(t2) {
    var r2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n2 = r2.width, a2 = n2 && e2.matchPatterns[n2] || e2.matchPatterns[e2.defaultMatchWidth], i2 = t2.match(a2);
    if (!i2)
      return null;
    var o2 = i2[0], s2 = n2 && e2.parsePatterns[n2] || e2.parsePatterns[e2.defaultParseWidth], u2 = Array.isArray(s2) ? fn(s2, function(c2) {
      return c2.test(o2);
    }) : cn(s2, function(c2) {
      return c2.test(o2);
    }), l2;
    l2 = e2.valueCallback ? e2.valueCallback(u2) : u2, l2 = r2.valueCallback ? r2.valueCallback(l2) : l2;
    var f2 = t2.slice(o2.length);
    return {
      value: l2,
      rest: f2
    };
  };
}
function cn(e2, t2) {
  for (var r2 in e2)
    if (e2.hasOwnProperty(r2) && t2(e2[r2]))
      return r2;
}
function fn(e2, t2) {
  for (var r2 = 0; r2 < e2.length; r2++)
    if (t2(e2[r2]))
      return r2;
}
function dn(e2) {
  return function(t2) {
    var r2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n2 = t2.match(e2.matchPattern);
    if (!n2)
      return null;
    var a2 = n2[0], i2 = t2.match(e2.parsePattern);
    if (!i2)
      return null;
    var o2 = e2.valueCallback ? e2.valueCallback(i2[0]) : i2[0];
    o2 = r2.valueCallback ? r2.valueCallback(o2) : o2;
    var s2 = t2.slice(a2.length);
    return {
      value: o2,
      rest: s2
    };
  };
}
function Me$2(e2) {
  "@babel/helpers - typeof";
  return Me$2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t2) {
    return typeof t2;
  } : function(t2) {
    return t2 && typeof Symbol == "function" && t2.constructor === Symbol && t2 !== Symbol.prototype ? "symbol" : typeof t2;
  }, Me$2(e2);
}
function B$1(e2) {
  if (e2 === null || e2 === true || e2 === false)
    return NaN;
  var t2 = Number(e2);
  return isNaN(t2) ? t2 : t2 < 0 ? Math.ceil(t2) : Math.floor(t2);
}
function O(e2, t2) {
  if (t2.length < e2)
    throw new TypeError(e2 + " argument" + (e2 > 1 ? "s" : "") + " required, but only " + t2.length + " present");
}
function E$2(e2) {
  O(1, arguments);
  var t2 = Object.prototype.toString.call(e2);
  return e2 instanceof Date || Me$2(e2) === "object" && t2 === "[object Date]" ? new Date(e2.getTime()) : typeof e2 == "number" || t2 === "[object Number]" ? new Date(e2) : ((typeof e2 == "string" || t2 === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function hn(e2, t2) {
  O(2, arguments);
  var r2 = E$2(e2).getTime(), n2 = B$1(t2);
  return new Date(r2 + n2);
}
var gn = {};
function Le$1() {
  return gn;
}
function mn(e2) {
  var t2 = new Date(Date.UTC(e2.getFullYear(), e2.getMonth(), e2.getDate(), e2.getHours(), e2.getMinutes(), e2.getSeconds(), e2.getMilliseconds()));
  return t2.setUTCFullYear(e2.getFullYear()), e2.getTime() - t2.getTime();
}
function pn(e2) {
  return O(1, arguments), e2 instanceof Date || Me$2(e2) === "object" && Object.prototype.toString.call(e2) === "[object Date]";
}
function vn(e2) {
  if (O(1, arguments), !pn(e2) && typeof e2 != "number")
    return false;
  var t2 = E$2(e2);
  return !isNaN(Number(t2));
}
function yn(e2, t2) {
  O(2, arguments);
  var r2 = B$1(t2);
  return hn(e2, -r2);
}
var bn = 864e5;
function wn(e2) {
  O(1, arguments);
  var t2 = E$2(e2), r2 = t2.getTime();
  t2.setUTCMonth(0, 1), t2.setUTCHours(0, 0, 0, 0);
  var n2 = t2.getTime(), a2 = r2 - n2;
  return Math.floor(a2 / bn) + 1;
}
function xe$1(e2) {
  O(1, arguments);
  var t2 = 1, r2 = E$2(e2), n2 = r2.getUTCDay(), a2 = (n2 < t2 ? 7 : 0) + n2 - t2;
  return r2.setUTCDate(r2.getUTCDate() - a2), r2.setUTCHours(0, 0, 0, 0), r2;
}
function er$1(e2) {
  O(1, arguments);
  var t2 = E$2(e2), r2 = t2.getUTCFullYear(), n2 = /* @__PURE__ */ new Date(0);
  n2.setUTCFullYear(r2 + 1, 0, 4), n2.setUTCHours(0, 0, 0, 0);
  var a2 = xe$1(n2), i2 = /* @__PURE__ */ new Date(0);
  i2.setUTCFullYear(r2, 0, 4), i2.setUTCHours(0, 0, 0, 0);
  var o2 = xe$1(i2);
  return t2.getTime() >= a2.getTime() ? r2 + 1 : t2.getTime() >= o2.getTime() ? r2 : r2 - 1;
}
function Tn(e2) {
  O(1, arguments);
  var t2 = er$1(e2), r2 = /* @__PURE__ */ new Date(0);
  r2.setUTCFullYear(t2, 0, 4), r2.setUTCHours(0, 0, 0, 0);
  var n2 = xe$1(r2);
  return n2;
}
var _n = 6048e5;
function On(e2) {
  O(1, arguments);
  var t2 = E$2(e2), r2 = xe$1(t2).getTime() - Tn(t2).getTime();
  return Math.round(r2 / _n) + 1;
}
function Ae$1(e2, t2) {
  var r2, n2, a2, i2, o2, s2, u2, l2;
  O(1, arguments);
  var f2 = Le$1(), c2 = B$1((r2 = (n2 = (a2 = (i2 = t2 == null ? void 0 : t2.weekStartsOn) !== null && i2 !== void 0 ? i2 : t2 == null || (o2 = t2.locale) === null || o2 === void 0 || (s2 = o2.options) === null || s2 === void 0 ? void 0 : s2.weekStartsOn) !== null && a2 !== void 0 ? a2 : f2.weekStartsOn) !== null && n2 !== void 0 ? n2 : (u2 = f2.locale) === null || u2 === void 0 || (l2 = u2.options) === null || l2 === void 0 ? void 0 : l2.weekStartsOn) !== null && r2 !== void 0 ? r2 : 0);
  if (!(c2 >= 0 && c2 <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var d2 = E$2(e2), g2 = d2.getUTCDay(), m2 = (g2 < c2 ? 7 : 0) + g2 - c2;
  return d2.setUTCDate(d2.getUTCDate() - m2), d2.setUTCHours(0, 0, 0, 0), d2;
}
function tr$1(e2, t2) {
  var r2, n2, a2, i2, o2, s2, u2, l2;
  O(1, arguments);
  var f2 = E$2(e2), c2 = f2.getUTCFullYear(), d2 = Le$1(), g2 = B$1((r2 = (n2 = (a2 = (i2 = t2 == null ? void 0 : t2.firstWeekContainsDate) !== null && i2 !== void 0 ? i2 : t2 == null || (o2 = t2.locale) === null || o2 === void 0 || (s2 = o2.options) === null || s2 === void 0 ? void 0 : s2.firstWeekContainsDate) !== null && a2 !== void 0 ? a2 : d2.firstWeekContainsDate) !== null && n2 !== void 0 ? n2 : (u2 = d2.locale) === null || u2 === void 0 || (l2 = u2.options) === null || l2 === void 0 ? void 0 : l2.firstWeekContainsDate) !== null && r2 !== void 0 ? r2 : 1);
  if (!(g2 >= 1 && g2 <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var m2 = /* @__PURE__ */ new Date(0);
  m2.setUTCFullYear(c2 + 1, 0, g2), m2.setUTCHours(0, 0, 0, 0);
  var T2 = Ae$1(m2, t2), y2 = /* @__PURE__ */ new Date(0);
  y2.setUTCFullYear(c2, 0, g2), y2.setUTCHours(0, 0, 0, 0);
  var w2 = Ae$1(y2, t2);
  return f2.getTime() >= T2.getTime() ? c2 + 1 : f2.getTime() >= w2.getTime() ? c2 : c2 - 1;
}
function Sn(e2, t2) {
  var r2, n2, a2, i2, o2, s2, u2, l2;
  O(1, arguments);
  var f2 = Le$1(), c2 = B$1((r2 = (n2 = (a2 = (i2 = t2 == null ? void 0 : t2.firstWeekContainsDate) !== null && i2 !== void 0 ? i2 : t2 == null || (o2 = t2.locale) === null || o2 === void 0 || (s2 = o2.options) === null || s2 === void 0 ? void 0 : s2.firstWeekContainsDate) !== null && a2 !== void 0 ? a2 : f2.firstWeekContainsDate) !== null && n2 !== void 0 ? n2 : (u2 = f2.locale) === null || u2 === void 0 || (l2 = u2.options) === null || l2 === void 0 ? void 0 : l2.firstWeekContainsDate) !== null && r2 !== void 0 ? r2 : 1), d2 = tr$1(e2, t2), g2 = /* @__PURE__ */ new Date(0);
  g2.setUTCFullYear(d2, 0, c2), g2.setUTCHours(0, 0, 0, 0);
  var m2 = Ae$1(g2, t2);
  return m2;
}
var $n = 6048e5;
function Pn(e2, t2) {
  O(1, arguments);
  var r2 = E$2(e2), n2 = Ae$1(r2, t2).getTime() - Sn(r2, t2).getTime();
  return Math.round(n2 / $n) + 1;
}
function p$1(e2, t2) {
  for (var r2 = e2 < 0 ? "-" : "", n2 = Math.abs(e2).toString(); n2.length < t2; )
    n2 = "0" + n2;
  return r2 + n2;
}
var Cn = {
  // Year
  y: function(t2, r2) {
    var n2 = t2.getUTCFullYear(), a2 = n2 > 0 ? n2 : 1 - n2;
    return p$1(r2 === "yy" ? a2 % 100 : a2, r2.length);
  },
  // Month
  M: function(t2, r2) {
    var n2 = t2.getUTCMonth();
    return r2 === "M" ? String(n2 + 1) : p$1(n2 + 1, 2);
  },
  // Day of the month
  d: function(t2, r2) {
    return p$1(t2.getUTCDate(), r2.length);
  },
  // AM or PM
  a: function(t2, r2) {
    var n2 = t2.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (r2) {
      case "a":
      case "aa":
        return n2.toUpperCase();
      case "aaa":
        return n2;
      case "aaaaa":
        return n2[0];
      case "aaaa":
      default:
        return n2 === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h: function(t2, r2) {
    return p$1(t2.getUTCHours() % 12 || 12, r2.length);
  },
  // Hour [0-23]
  H: function(t2, r2) {
    return p$1(t2.getUTCHours(), r2.length);
  },
  // Minute
  m: function(t2, r2) {
    return p$1(t2.getUTCMinutes(), r2.length);
  },
  // Second
  s: function(t2, r2) {
    return p$1(t2.getUTCSeconds(), r2.length);
  },
  // Fraction of second
  S: function(t2, r2) {
    var n2 = r2.length, a2 = t2.getUTCMilliseconds(), i2 = Math.floor(a2 * Math.pow(10, n2 - 3));
    return p$1(i2, r2.length);
  }
};
const N$1 = Cn;
var V$1 = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Mn = {
  // Era
  G: function(t2, r2, n2) {
    var a2 = t2.getUTCFullYear() > 0 ? 1 : 0;
    switch (r2) {
      case "G":
      case "GG":
      case "GGG":
        return n2.era(a2, {
          width: "abbreviated"
        });
      case "GGGGG":
        return n2.era(a2, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return n2.era(a2, {
          width: "wide"
        });
    }
  },
  // Year
  y: function(t2, r2, n2) {
    if (r2 === "yo") {
      var a2 = t2.getUTCFullYear(), i2 = a2 > 0 ? a2 : 1 - a2;
      return n2.ordinalNumber(i2, {
        unit: "year"
      });
    }
    return N$1.y(t2, r2);
  },
  // Local week-numbering year
  Y: function(t2, r2, n2, a2) {
    var i2 = tr$1(t2, a2), o2 = i2 > 0 ? i2 : 1 - i2;
    if (r2 === "YY") {
      var s2 = o2 % 100;
      return p$1(s2, 2);
    }
    return r2 === "Yo" ? n2.ordinalNumber(o2, {
      unit: "year"
    }) : p$1(o2, r2.length);
  },
  // ISO week-numbering year
  R: function(t2, r2) {
    var n2 = er$1(t2);
    return p$1(n2, r2.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(t2, r2) {
    var n2 = t2.getUTCFullYear();
    return p$1(n2, r2.length);
  },
  // Quarter
  Q: function(t2, r2, n2) {
    var a2 = Math.ceil((t2.getUTCMonth() + 1) / 3);
    switch (r2) {
      case "Q":
        return String(a2);
      case "QQ":
        return p$1(a2, 2);
      case "Qo":
        return n2.ordinalNumber(a2, {
          unit: "quarter"
        });
      case "QQQ":
        return n2.quarter(a2, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return n2.quarter(a2, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return n2.quarter(a2, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(t2, r2, n2) {
    var a2 = Math.ceil((t2.getUTCMonth() + 1) / 3);
    switch (r2) {
      case "q":
        return String(a2);
      case "qq":
        return p$1(a2, 2);
      case "qo":
        return n2.ordinalNumber(a2, {
          unit: "quarter"
        });
      case "qqq":
        return n2.quarter(a2, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return n2.quarter(a2, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return n2.quarter(a2, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(t2, r2, n2) {
    var a2 = t2.getUTCMonth();
    switch (r2) {
      case "M":
      case "MM":
        return N$1.M(t2, r2);
      case "Mo":
        return n2.ordinalNumber(a2 + 1, {
          unit: "month"
        });
      case "MMM":
        return n2.month(a2, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return n2.month(a2, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return n2.month(a2, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone month
  L: function(t2, r2, n2) {
    var a2 = t2.getUTCMonth();
    switch (r2) {
      case "L":
        return String(a2 + 1);
      case "LL":
        return p$1(a2 + 1, 2);
      case "Lo":
        return n2.ordinalNumber(a2 + 1, {
          unit: "month"
        });
      case "LLL":
        return n2.month(a2, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return n2.month(a2, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return n2.month(a2, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Local week of year
  w: function(t2, r2, n2, a2) {
    var i2 = Pn(t2, a2);
    return r2 === "wo" ? n2.ordinalNumber(i2, {
      unit: "week"
    }) : p$1(i2, r2.length);
  },
  // ISO week of year
  I: function(t2, r2, n2) {
    var a2 = On(t2);
    return r2 === "Io" ? n2.ordinalNumber(a2, {
      unit: "week"
    }) : p$1(a2, r2.length);
  },
  // Day of the month
  d: function(t2, r2, n2) {
    return r2 === "do" ? n2.ordinalNumber(t2.getUTCDate(), {
      unit: "date"
    }) : N$1.d(t2, r2);
  },
  // Day of year
  D: function(t2, r2, n2) {
    var a2 = wn(t2);
    return r2 === "Do" ? n2.ordinalNumber(a2, {
      unit: "dayOfYear"
    }) : p$1(a2, r2.length);
  },
  // Day of week
  E: function(t2, r2, n2) {
    var a2 = t2.getUTCDay();
    switch (r2) {
      case "E":
      case "EE":
      case "EEE":
        return n2.day(a2, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return n2.day(a2, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return n2.day(a2, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return n2.day(a2, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(t2, r2, n2, a2) {
    var i2 = t2.getUTCDay(), o2 = (i2 - a2.weekStartsOn + 8) % 7 || 7;
    switch (r2) {
      case "e":
        return String(o2);
      case "ee":
        return p$1(o2, 2);
      case "eo":
        return n2.ordinalNumber(o2, {
          unit: "day"
        });
      case "eee":
        return n2.day(i2, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return n2.day(i2, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return n2.day(i2, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return n2.day(i2, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(t2, r2, n2, a2) {
    var i2 = t2.getUTCDay(), o2 = (i2 - a2.weekStartsOn + 8) % 7 || 7;
    switch (r2) {
      case "c":
        return String(o2);
      case "cc":
        return p$1(o2, r2.length);
      case "co":
        return n2.ordinalNumber(o2, {
          unit: "day"
        });
      case "ccc":
        return n2.day(i2, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return n2.day(i2, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return n2.day(i2, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return n2.day(i2, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(t2, r2, n2) {
    var a2 = t2.getUTCDay(), i2 = a2 === 0 ? 7 : a2;
    switch (r2) {
      case "i":
        return String(i2);
      case "ii":
        return p$1(i2, r2.length);
      case "io":
        return n2.ordinalNumber(i2, {
          unit: "day"
        });
      case "iii":
        return n2.day(a2, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return n2.day(a2, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return n2.day(a2, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return n2.day(a2, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(t2, r2, n2) {
    var a2 = t2.getUTCHours(), i2 = a2 / 12 >= 1 ? "pm" : "am";
    switch (r2) {
      case "a":
      case "aa":
        return n2.dayPeriod(i2, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n2.dayPeriod(i2, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n2.dayPeriod(i2, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n2.dayPeriod(i2, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(t2, r2, n2) {
    var a2 = t2.getUTCHours(), i2;
    switch (a2 === 12 ? i2 = V$1.noon : a2 === 0 ? i2 = V$1.midnight : i2 = a2 / 12 >= 1 ? "pm" : "am", r2) {
      case "b":
      case "bb":
        return n2.dayPeriod(i2, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n2.dayPeriod(i2, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n2.dayPeriod(i2, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n2.dayPeriod(i2, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(t2, r2, n2) {
    var a2 = t2.getUTCHours(), i2;
    switch (a2 >= 17 ? i2 = V$1.evening : a2 >= 12 ? i2 = V$1.afternoon : a2 >= 4 ? i2 = V$1.morning : i2 = V$1.night, r2) {
      case "B":
      case "BB":
      case "BBB":
        return n2.dayPeriod(i2, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n2.dayPeriod(i2, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n2.dayPeriod(i2, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(t2, r2, n2) {
    if (r2 === "ho") {
      var a2 = t2.getUTCHours() % 12;
      return a2 === 0 && (a2 = 12), n2.ordinalNumber(a2, {
        unit: "hour"
      });
    }
    return N$1.h(t2, r2);
  },
  // Hour [0-23]
  H: function(t2, r2, n2) {
    return r2 === "Ho" ? n2.ordinalNumber(t2.getUTCHours(), {
      unit: "hour"
    }) : N$1.H(t2, r2);
  },
  // Hour [0-11]
  K: function(t2, r2, n2) {
    var a2 = t2.getUTCHours() % 12;
    return r2 === "Ko" ? n2.ordinalNumber(a2, {
      unit: "hour"
    }) : p$1(a2, r2.length);
  },
  // Hour [1-24]
  k: function(t2, r2, n2) {
    var a2 = t2.getUTCHours();
    return a2 === 0 && (a2 = 24), r2 === "ko" ? n2.ordinalNumber(a2, {
      unit: "hour"
    }) : p$1(a2, r2.length);
  },
  // Minute
  m: function(t2, r2, n2) {
    return r2 === "mo" ? n2.ordinalNumber(t2.getUTCMinutes(), {
      unit: "minute"
    }) : N$1.m(t2, r2);
  },
  // Second
  s: function(t2, r2, n2) {
    return r2 === "so" ? n2.ordinalNumber(t2.getUTCSeconds(), {
      unit: "second"
    }) : N$1.s(t2, r2);
  },
  // Fraction of second
  S: function(t2, r2) {
    return N$1.S(t2, r2);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(t2, r2, n2, a2) {
    var i2 = a2._originalDate || t2, o2 = i2.getTimezoneOffset();
    if (o2 === 0)
      return "Z";
    switch (r2) {
      case "X":
        return _t(o2);
      case "XXXX":
      case "XX":
        return j$2(o2);
      case "XXXXX":
      case "XXX":
      default:
        return j$2(o2, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(t2, r2, n2, a2) {
    var i2 = a2._originalDate || t2, o2 = i2.getTimezoneOffset();
    switch (r2) {
      case "x":
        return _t(o2);
      case "xxxx":
      case "xx":
        return j$2(o2);
      case "xxxxx":
      case "xxx":
      default:
        return j$2(o2, ":");
    }
  },
  // Timezone (GMT)
  O: function(t2, r2, n2, a2) {
    var i2 = a2._originalDate || t2, o2 = i2.getTimezoneOffset();
    switch (r2) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Tt$1(o2, ":");
      case "OOOO":
      default:
        return "GMT" + j$2(o2, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(t2, r2, n2, a2) {
    var i2 = a2._originalDate || t2, o2 = i2.getTimezoneOffset();
    switch (r2) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Tt$1(o2, ":");
      case "zzzz":
      default:
        return "GMT" + j$2(o2, ":");
    }
  },
  // Seconds timestamp
  t: function(t2, r2, n2, a2) {
    var i2 = a2._originalDate || t2, o2 = Math.floor(i2.getTime() / 1e3);
    return p$1(o2, r2.length);
  },
  // Milliseconds timestamp
  T: function(t2, r2, n2, a2) {
    var i2 = a2._originalDate || t2, o2 = i2.getTime();
    return p$1(o2, r2.length);
  }
};
function Tt$1(e2, t2) {
  var r2 = e2 > 0 ? "-" : "+", n2 = Math.abs(e2), a2 = Math.floor(n2 / 60), i2 = n2 % 60;
  if (i2 === 0)
    return r2 + String(a2);
  var o2 = t2 || "";
  return r2 + String(a2) + o2 + p$1(i2, 2);
}
function _t(e2, t2) {
  if (e2 % 60 === 0) {
    var r2 = e2 > 0 ? "-" : "+";
    return r2 + p$1(Math.abs(e2) / 60, 2);
  }
  return j$2(e2, t2);
}
function j$2(e2, t2) {
  var r2 = t2 || "", n2 = e2 > 0 ? "-" : "+", a2 = Math.abs(e2), i2 = p$1(Math.floor(a2 / 60), 2), o2 = p$1(a2 % 60, 2);
  return n2 + i2 + r2 + o2;
}
const xn = Mn;
var Ot$1 = function(t2, r2) {
  switch (t2) {
    case "P":
      return r2.date({
        width: "short"
      });
    case "PP":
      return r2.date({
        width: "medium"
      });
    case "PPP":
      return r2.date({
        width: "long"
      });
    case "PPPP":
    default:
      return r2.date({
        width: "full"
      });
  }
}, rr$1 = function(t2, r2) {
  switch (t2) {
    case "p":
      return r2.time({
        width: "short"
      });
    case "pp":
      return r2.time({
        width: "medium"
      });
    case "ppp":
      return r2.time({
        width: "long"
      });
    case "pppp":
    default:
      return r2.time({
        width: "full"
      });
  }
}, An = function(t2, r2) {
  var n2 = t2.match(/(P+)(p+)?/) || [], a2 = n2[1], i2 = n2[2];
  if (!i2)
    return Ot$1(t2, r2);
  var o2;
  switch (a2) {
    case "P":
      o2 = r2.dateTime({
        width: "short"
      });
      break;
    case "PP":
      o2 = r2.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      o2 = r2.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      o2 = r2.dateTime({
        width: "full"
      });
      break;
  }
  return o2.replace("{{date}}", Ot$1(a2, r2)).replace("{{time}}", rr$1(i2, r2));
}, En = {
  p: rr$1,
  P: An
};
const Dn = En;
var In = ["D", "DD"], Ln = ["YY", "YYYY"];
function Fn(e2) {
  return In.indexOf(e2) !== -1;
}
function Rn(e2) {
  return Ln.indexOf(e2) !== -1;
}
function St$1(e2, t2, r2) {
  if (e2 === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t2, "`) for formatting years to the input `").concat(r2, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e2 === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(t2, "`) for formatting years to the input `").concat(r2, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e2 === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(t2, "`) for formatting days of the month to the input `").concat(r2, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e2 === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(t2, "`) for formatting days of the month to the input `").concat(r2, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var Un = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, Nn = function(t2, r2, n2) {
  var a2, i2 = Un[t2];
  return typeof i2 == "string" ? a2 = i2 : r2 === 1 ? a2 = i2.one : a2 = i2.other.replace("{{count}}", r2.toString()), n2 != null && n2.addSuffix ? n2.comparison && n2.comparison > 0 ? "in " + a2 : a2 + " ago" : a2;
};
const Wn = Nn;
var jn = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Yn = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Gn = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Bn = {
  date: Be$2({
    formats: jn,
    defaultWidth: "full"
  }),
  time: Be$2({
    formats: Yn,
    defaultWidth: "full"
  }),
  dateTime: Be$2({
    formats: Gn,
    defaultWidth: "full"
  })
};
const Hn = Bn;
var qn = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, zn = function(t2, r2, n2, a2) {
  return qn[t2];
};
const Qn = zn;
var Xn = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, kn = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Kn = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, Vn = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, Zn = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, Jn = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, ea = function(t2, r2) {
  var n2 = Number(t2), a2 = n2 % 100;
  if (a2 > 20 || a2 < 10)
    switch (a2 % 10) {
      case 1:
        return n2 + "st";
      case 2:
        return n2 + "nd";
      case 3:
        return n2 + "rd";
    }
  return n2 + "th";
}, ta = {
  ordinalNumber: ea,
  era: ue({
    values: Xn,
    defaultWidth: "wide"
  }),
  quarter: ue({
    values: kn,
    defaultWidth: "wide",
    argumentCallback: function(t2) {
      return t2 - 1;
    }
  }),
  month: ue({
    values: Kn,
    defaultWidth: "wide"
  }),
  day: ue({
    values: Vn,
    defaultWidth: "wide"
  }),
  dayPeriod: ue({
    values: Zn,
    defaultWidth: "wide",
    formattingValues: Jn,
    defaultFormattingWidth: "wide"
  })
};
const ra = ta;
var na = /^(\d+)(th|st|nd|rd)?/i, aa = /\d+/i, ia = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, oa = {
  any: [/^b/i, /^(a|c)/i]
}, sa = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, ua = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, la = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, ca = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, fa = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, da = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, ha = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, ga = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, ma = {
  ordinalNumber: dn({
    matchPattern: na,
    parsePattern: aa,
    valueCallback: function(t2) {
      return parseInt(t2, 10);
    }
  }),
  era: le$1({
    matchPatterns: ia,
    defaultMatchWidth: "wide",
    parsePatterns: oa,
    defaultParseWidth: "any"
  }),
  quarter: le$1({
    matchPatterns: sa,
    defaultMatchWidth: "wide",
    parsePatterns: ua,
    defaultParseWidth: "any",
    valueCallback: function(t2) {
      return t2 + 1;
    }
  }),
  month: le$1({
    matchPatterns: la,
    defaultMatchWidth: "wide",
    parsePatterns: ca,
    defaultParseWidth: "any"
  }),
  day: le$1({
    matchPatterns: fa,
    defaultMatchWidth: "wide",
    parsePatterns: da,
    defaultParseWidth: "any"
  }),
  dayPeriod: le$1({
    matchPatterns: ha,
    defaultMatchWidth: "any",
    parsePatterns: ga,
    defaultParseWidth: "any"
  })
};
const pa = ma;
var va = {
  code: "en-US",
  formatDistance: Wn,
  formatLong: Hn,
  formatRelative: Qn,
  localize: ra,
  match: pa,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const nr$1 = va;
var ya = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, ba = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, wa = /^'([^]*?)'?$/, Ta = /''/g, _a$1 = /[a-zA-Z]/;
function ke$2(e2, t2, r2) {
  var n2, a2, i2, o2, s2, u2, l2, f2, c2, d2, g2, m2, T2, y2, w2, C2, k2, R2;
  O(2, arguments);
  var K2 = String(t2), ie2 = Le$1(), oe2 = (n2 = (a2 = r2 == null ? void 0 : r2.locale) !== null && a2 !== void 0 ? a2 : ie2.locale) !== null && n2 !== void 0 ? n2 : nr$1, Ye2 = B$1((i2 = (o2 = (s2 = (u2 = r2 == null ? void 0 : r2.firstWeekContainsDate) !== null && u2 !== void 0 ? u2 : r2 == null || (l2 = r2.locale) === null || l2 === void 0 || (f2 = l2.options) === null || f2 === void 0 ? void 0 : f2.firstWeekContainsDate) !== null && s2 !== void 0 ? s2 : ie2.firstWeekContainsDate) !== null && o2 !== void 0 ? o2 : (c2 = ie2.locale) === null || c2 === void 0 || (d2 = c2.options) === null || d2 === void 0 ? void 0 : d2.firstWeekContainsDate) !== null && i2 !== void 0 ? i2 : 1);
  if (!(Ye2 >= 1 && Ye2 <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var Ge2 = B$1((g2 = (m2 = (T2 = (y2 = r2 == null ? void 0 : r2.weekStartsOn) !== null && y2 !== void 0 ? y2 : r2 == null || (w2 = r2.locale) === null || w2 === void 0 || (C2 = w2.options) === null || C2 === void 0 ? void 0 : C2.weekStartsOn) !== null && T2 !== void 0 ? T2 : ie2.weekStartsOn) !== null && m2 !== void 0 ? m2 : (k2 = ie2.locale) === null || k2 === void 0 || (R2 = k2.options) === null || R2 === void 0 ? void 0 : R2.weekStartsOn) !== null && g2 !== void 0 ? g2 : 0);
  if (!(Ge2 >= 0 && Ge2 <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!oe2.localize)
    throw new RangeError("locale must contain localize property");
  if (!oe2.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var _e2 = E$2(e2);
  if (!vn(_e2))
    throw new RangeError("Invalid time value");
  var Qr = mn(_e2), Xr = yn(_e2, Qr), kr = {
    firstWeekContainsDate: Ye2,
    weekStartsOn: Ge2,
    locale: oe2,
    _originalDate: _e2
  }, Kr = K2.match(ba).map(function($2) {
    var U2 = $2[0];
    if (U2 === "p" || U2 === "P") {
      var Oe2 = Dn[U2];
      return Oe2($2, oe2.formatLong);
    }
    return $2;
  }).join("").match(ya).map(function($2) {
    if ($2 === "''")
      return "'";
    var U2 = $2[0];
    if (U2 === "'")
      return Oa($2);
    var Oe2 = xn[U2];
    if (Oe2)
      return !(r2 != null && r2.useAdditionalWeekYearTokens) && Rn($2) && St$1($2, t2, String(e2)), !(r2 != null && r2.useAdditionalDayOfYearTokens) && Fn($2) && St$1($2, t2, String(e2)), Oe2(Xr, $2, oe2.localize, kr);
    if (U2.match(_a$1))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + U2 + "`");
    return $2;
  }).join("");
  return Kr;
}
function Oa(e2) {
  var t2 = e2.match(wa);
  return t2 ? t2[1].replace(Ta, "'") : e2;
}
var Sa = typeof global == "object" && global && global.Object === Object && global;
const ar$1 = Sa;
var $a = typeof self == "object" && self && self.Object === Object && self, Pa = ar$1 || $a || Function("return this")();
const D$1 = Pa;
var Ca = D$1.Symbol;
const P = Ca;
var ir$1 = Object.prototype, Ma = ir$1.hasOwnProperty, xa = ir$1.toString, ce$1 = P ? P.toStringTag : void 0;
function Aa(e2) {
  var t2 = Ma.call(e2, ce$1), r2 = e2[ce$1];
  try {
    e2[ce$1] = void 0;
    var n2 = true;
  } catch {
  }
  var a2 = xa.call(e2);
  return n2 && (t2 ? e2[ce$1] = r2 : delete e2[ce$1]), a2;
}
var Ea = Object.prototype, Da = Ea.toString;
function Ia(e2) {
  return Da.call(e2);
}
var La = "[object Null]", Fa$1 = "[object Undefined]", $t = P ? P.toStringTag : void 0;
function z$1(e2) {
  return e2 == null ? e2 === void 0 ? Fa$1 : La : $t && $t in Object(e2) ? Aa(e2) : Ia(e2);
}
function A$1(e2) {
  return e2 != null && typeof e2 == "object";
}
var Ra = "[object Symbol]";
function nt$2(e2) {
  return typeof e2 == "symbol" || A$1(e2) && z$1(e2) == Ra;
}
function Ua$1(e2, t2) {
  for (var r2 = -1, n2 = e2 == null ? 0 : e2.length, a2 = Array(n2); ++r2 < n2; )
    a2[r2] = t2(e2[r2], r2, e2);
  return a2;
}
var Na$1 = Array.isArray;
const S$1 = Na$1;
var Wa$1 = 1 / 0, Pt = P ? P.prototype : void 0, Ct$1 = Pt ? Pt.toString : void 0;
function or$1(e2) {
  if (typeof e2 == "string")
    return e2;
  if (S$1(e2))
    return Ua$1(e2, or$1) + "";
  if (nt$2(e2))
    return Ct$1 ? Ct$1.call(e2) : "";
  var t2 = e2 + "";
  return t2 == "0" && 1 / e2 == -Wa$1 ? "-0" : t2;
}
function I$1(e2) {
  var t2 = typeof e2;
  return e2 != null && (t2 == "object" || t2 == "function");
}
function at$3(e2) {
  return e2;
}
var ja$1 = "[object AsyncFunction]", Ya$1 = "[object Function]", Ga = "[object GeneratorFunction]", Ba = "[object Proxy]";
function it$3(e2) {
  if (!I$1(e2))
    return false;
  var t2 = z$1(e2);
  return t2 == Ya$1 || t2 == Ga || t2 == ja$1 || t2 == Ba;
}
var Ha$1 = D$1["__core-js_shared__"];
const He$2 = Ha$1;
var Mt$1 = function() {
  var e2 = /[^.]+$/.exec(He$2 && He$2.keys && He$2.keys.IE_PROTO || "");
  return e2 ? "Symbol(src)_1." + e2 : "";
}();
function qa$1(e2) {
  return !!Mt$1 && Mt$1 in e2;
}
var za$1 = Function.prototype, Qa$1 = za$1.toString;
function Q$2(e2) {
  if (e2 != null) {
    try {
      return Qa$1.call(e2);
    } catch {
    }
    try {
      return e2 + "";
    } catch {
    }
  }
  return "";
}
var Xa$1 = /[\\^$.*+?()[\]{}|]/g, ka = /^\[object .+?Constructor\]$/, Ka$1 = Function.prototype, Va = Object.prototype, Za$1 = Ka$1.toString, Ja$1 = Va.hasOwnProperty, ei$1 = RegExp(
  "^" + Za$1.call(Ja$1).replace(Xa$1, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ti$1(e2) {
  if (!I$1(e2) || qa$1(e2))
    return false;
  var t2 = it$3(e2) ? ei$1 : ka;
  return t2.test(Q$2(e2));
}
function ri$1(e2, t2) {
  return e2 == null ? void 0 : e2[t2];
}
function X$1(e2, t2) {
  var r2 = ri$1(e2, t2);
  return ti$1(r2) ? r2 : void 0;
}
var ni$1 = X$1(D$1, "WeakMap");
const Ke$3 = ni$1;
var xt$1 = Object.create, ai$1 = function() {
  function e2() {
  }
  return function(t2) {
    if (!I$1(t2))
      return {};
    if (xt$1)
      return xt$1(t2);
    e2.prototype = t2;
    var r2 = new e2();
    return e2.prototype = void 0, r2;
  };
}();
const ii$1 = ai$1;
function oi$1(e2, t2, r2) {
  switch (r2.length) {
    case 0:
      return e2.call(t2);
    case 1:
      return e2.call(t2, r2[0]);
    case 2:
      return e2.call(t2, r2[0], r2[1]);
    case 3:
      return e2.call(t2, r2[0], r2[1], r2[2]);
  }
  return e2.apply(t2, r2);
}
function si$1() {
}
function sr$1(e2, t2) {
  var r2 = -1, n2 = e2.length;
  for (t2 || (t2 = Array(n2)); ++r2 < n2; )
    t2[r2] = e2[r2];
  return t2;
}
var ui$1 = 800, li$1 = 16, ci$1 = Date.now;
function fi$1(e2) {
  var t2 = 0, r2 = 0;
  return function() {
    var n2 = ci$1(), a2 = li$1 - (n2 - r2);
    if (r2 = n2, a2 > 0) {
      if (++t2 >= ui$1)
        return arguments[0];
    } else
      t2 = 0;
    return e2.apply(void 0, arguments);
  };
}
function di$1(e2) {
  return function() {
    return e2;
  };
}
var hi$1 = function() {
  try {
    var e2 = X$1(Object, "defineProperty");
    return e2({}, "", {}), e2;
  } catch {
  }
}();
const Ee$1 = hi$1;
var gi$1 = Ee$1 ? function(e2, t2) {
  return Ee$1(e2, "toString", {
    configurable: true,
    enumerable: false,
    value: di$1(t2),
    writable: true
  });
} : at$3;
const mi$1 = gi$1;
var pi$1 = fi$1(mi$1);
const vi$1 = pi$1;
function yi$1(e2, t2) {
  for (var r2 = -1, n2 = e2 == null ? 0 : e2.length; ++r2 < n2 && t2(e2[r2], r2, e2) !== false; )
    ;
  return e2;
}
function bi$1(e2, t2, r2, n2) {
  for (var a2 = e2.length, i2 = r2 + (n2 ? 1 : -1); n2 ? i2-- : ++i2 < a2; )
    if (t2(e2[i2], i2, e2))
      return i2;
  return -1;
}
function wi$1(e2) {
  return e2 !== e2;
}
function Ti$1(e2, t2, r2) {
  for (var n2 = r2 - 1, a2 = e2.length; ++n2 < a2; )
    if (e2[n2] === t2)
      return n2;
  return -1;
}
function _i$1(e2, t2, r2) {
  return t2 === t2 ? Ti$1(e2, t2, r2) : bi$1(e2, wi$1, r2);
}
function Oi$1(e2, t2) {
  var r2 = e2 == null ? 0 : e2.length;
  return !!r2 && _i$1(e2, t2, 0) > -1;
}
var Si$1 = 9007199254740991, $i$1 = /^(?:0|[1-9]\d*)$/;
function ot$3(e2, t2) {
  var r2 = typeof e2;
  return t2 = t2 ?? Si$1, !!t2 && (r2 == "number" || r2 != "symbol" && $i$1.test(e2)) && e2 > -1 && e2 % 1 == 0 && e2 < t2;
}
function st$2(e2, t2, r2) {
  t2 == "__proto__" && Ee$1 ? Ee$1(e2, t2, {
    configurable: true,
    enumerable: true,
    value: r2,
    writable: true
  }) : e2[t2] = r2;
}
function pe$1(e2, t2) {
  return e2 === t2 || e2 !== e2 && t2 !== t2;
}
var Pi$1 = Object.prototype, Ci$1 = Pi$1.hasOwnProperty;
function ur(e2, t2, r2) {
  var n2 = e2[t2];
  (!(Ci$1.call(e2, t2) && pe$1(n2, r2)) || r2 === void 0 && !(t2 in e2)) && st$2(e2, t2, r2);
}
function ve$1(e2, t2, r2, n2) {
  var a2 = !r2;
  r2 || (r2 = {});
  for (var i2 = -1, o2 = t2.length; ++i2 < o2; ) {
    var s2 = t2[i2], u2 = n2 ? n2(r2[s2], e2[s2], s2, r2, e2) : void 0;
    u2 === void 0 && (u2 = e2[s2]), a2 ? st$2(r2, s2, u2) : ur(r2, s2, u2);
  }
  return r2;
}
var At$1 = Math.max;
function Mi$1(e2, t2, r2) {
  return t2 = At$1(t2 === void 0 ? e2.length - 1 : t2, 0), function() {
    for (var n2 = arguments, a2 = -1, i2 = At$1(n2.length - t2, 0), o2 = Array(i2); ++a2 < i2; )
      o2[a2] = n2[t2 + a2];
    a2 = -1;
    for (var s2 = Array(t2 + 1); ++a2 < t2; )
      s2[a2] = n2[a2];
    return s2[t2] = r2(o2), oi$1(e2, this, s2);
  };
}
function lr$1(e2, t2) {
  return vi$1(Mi$1(e2, t2, at$3), e2 + "");
}
var xi$1 = 9007199254740991;
function ut$2(e2) {
  return typeof e2 == "number" && e2 > -1 && e2 % 1 == 0 && e2 <= xi$1;
}
function ye$1(e2) {
  return e2 != null && ut$2(e2.length) && !it$3(e2);
}
function Ai$1(e2, t2, r2) {
  if (!I$1(r2))
    return false;
  var n2 = typeof t2;
  return (n2 == "number" ? ye$1(r2) && ot$3(t2, r2.length) : n2 == "string" && t2 in r2) ? pe$1(r2[t2], e2) : false;
}
function Ei$1(e2) {
  return lr$1(function(t2, r2) {
    var n2 = -1, a2 = r2.length, i2 = a2 > 1 ? r2[a2 - 1] : void 0, o2 = a2 > 2 ? r2[2] : void 0;
    for (i2 = e2.length > 3 && typeof i2 == "function" ? (a2--, i2) : void 0, o2 && Ai$1(r2[0], r2[1], o2) && (i2 = a2 < 3 ? void 0 : i2, a2 = 1), t2 = Object(t2); ++n2 < a2; ) {
      var s2 = r2[n2];
      s2 && e2(t2, s2, n2, i2);
    }
    return t2;
  });
}
var Di$1 = Object.prototype;
function Fe$2(e2) {
  var t2 = e2 && e2.constructor, r2 = typeof t2 == "function" && t2.prototype || Di$1;
  return e2 === r2;
}
function Ii$1(e2, t2) {
  for (var r2 = -1, n2 = Array(e2); ++r2 < e2; )
    n2[r2] = t2(r2);
  return n2;
}
var Li$1 = "[object Arguments]";
function Et$1(e2) {
  return A$1(e2) && z$1(e2) == Li$1;
}
var cr = Object.prototype, Fi$1 = cr.hasOwnProperty, Ri$1 = cr.propertyIsEnumerable, Ui$1 = Et$1(function() {
  return arguments;
}()) ? Et$1 : function(e2) {
  return A$1(e2) && Fi$1.call(e2, "callee") && !Ri$1.call(e2, "callee");
};
const ee$2 = Ui$1;
function Ni$1() {
  return false;
}
var fr = typeof exports == "object" && exports && !exports.nodeType && exports, Dt$1 = fr && typeof module == "object" && module && !module.nodeType && module, Wi$1 = Dt$1 && Dt$1.exports === fr, It = Wi$1 ? D$1.Buffer : void 0, ji$1 = It ? It.isBuffer : void 0, Yi$1 = ji$1 || Ni$1;
const te$1 = Yi$1;
var Gi$1 = "[object Arguments]", Bi$1 = "[object Array]", Hi$1 = "[object Boolean]", qi$1 = "[object Date]", zi$1 = "[object Error]", Qi$1 = "[object Function]", Xi$1 = "[object Map]", ki$1 = "[object Number]", Ki$1 = "[object Object]", Vi$1 = "[object RegExp]", Zi$1 = "[object Set]", Ji$1 = "[object String]", eo = "[object WeakMap]", to = "[object ArrayBuffer]", ro = "[object DataView]", no = "[object Float32Array]", ao = "[object Float64Array]", io = "[object Int8Array]", oo = "[object Int16Array]", so = "[object Int32Array]", uo = "[object Uint8Array]", lo = "[object Uint8ClampedArray]", co = "[object Uint16Array]", fo = "[object Uint32Array]", b = {};
b[no] = b[ao] = b[io] = b[oo] = b[so] = b[uo] = b[lo] = b[co] = b[fo] = true;
b[Gi$1] = b[Bi$1] = b[to] = b[Hi$1] = b[ro] = b[qi$1] = b[zi$1] = b[Qi$1] = b[Xi$1] = b[ki$1] = b[Ki$1] = b[Vi$1] = b[Zi$1] = b[Ji$1] = b[eo] = false;
function ho(e2) {
  return A$1(e2) && ut$2(e2.length) && !!b[z$1(e2)];
}
function lt$3(e2) {
  return function(t2) {
    return e2(t2);
  };
}
var dr = typeof exports == "object" && exports && !exports.nodeType && exports, de = dr && typeof module == "object" && module && !module.nodeType && module, go = de && de.exports === dr, qe$3 = go && ar$1.process, mo = function() {
  try {
    var e2 = de && de.require && de.require("util").types;
    return e2 || qe$3 && qe$3.binding && qe$3.binding("util");
  } catch {
  }
}();
const re$1 = mo;
var Lt$1 = re$1 && re$1.isTypedArray, po = Lt$1 ? lt$3(Lt$1) : ho;
const Re$1 = po;
var vo = Object.prototype, yo = vo.hasOwnProperty;
function hr(e2, t2) {
  var r2 = S$1(e2), n2 = !r2 && ee$2(e2), a2 = !r2 && !n2 && te$1(e2), i2 = !r2 && !n2 && !a2 && Re$1(e2), o2 = r2 || n2 || a2 || i2, s2 = o2 ? Ii$1(e2.length, String) : [], u2 = s2.length;
  for (var l2 in e2)
    (t2 || yo.call(e2, l2)) && !(o2 && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l2 == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a2 && (l2 == "offset" || l2 == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i2 && (l2 == "buffer" || l2 == "byteLength" || l2 == "byteOffset") || // Skip index properties.
    ot$3(l2, u2))) && s2.push(l2);
  return s2;
}
function gr(e2, t2) {
  return function(r2) {
    return e2(t2(r2));
  };
}
var bo = gr(Object.keys, Object);
const wo = bo;
var To = Object.prototype, _o = To.hasOwnProperty;
function mr(e2) {
  if (!Fe$2(e2))
    return wo(e2);
  var t2 = [];
  for (var r2 in Object(e2))
    _o.call(e2, r2) && r2 != "constructor" && t2.push(r2);
  return t2;
}
function Ue$2(e2) {
  return ye$1(e2) ? hr(e2) : mr(e2);
}
function Oo(e2) {
  var t2 = [];
  if (e2 != null)
    for (var r2 in Object(e2))
      t2.push(r2);
  return t2;
}
var So = Object.prototype, $o = So.hasOwnProperty;
function Po(e2) {
  if (!I$1(e2))
    return Oo(e2);
  var t2 = Fe$2(e2), r2 = [];
  for (var n2 in e2)
    n2 == "constructor" && (t2 || !$o.call(e2, n2)) || r2.push(n2);
  return r2;
}
function be$2(e2) {
  return ye$1(e2) ? hr(e2, true) : Po(e2);
}
var Co = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Mo = /^\w*$/;
function ct$2(e2, t2) {
  if (S$1(e2))
    return false;
  var r2 = typeof e2;
  return r2 == "number" || r2 == "symbol" || r2 == "boolean" || e2 == null || nt$2(e2) ? true : Mo.test(e2) || !Co.test(e2) || t2 != null && e2 in Object(t2);
}
var xo = X$1(Object, "create");
const he = xo;
function Ao() {
  this.__data__ = he ? he(null) : {}, this.size = 0;
}
function Eo(e2) {
  var t2 = this.has(e2) && delete this.__data__[e2];
  return this.size -= t2 ? 1 : 0, t2;
}
var Do = "__lodash_hash_undefined__", Io = Object.prototype, Lo = Io.hasOwnProperty;
function Fo(e2) {
  var t2 = this.__data__;
  if (he) {
    var r2 = t2[e2];
    return r2 === Do ? void 0 : r2;
  }
  return Lo.call(t2, e2) ? t2[e2] : void 0;
}
var Ro = Object.prototype, Uo = Ro.hasOwnProperty;
function No(e2) {
  var t2 = this.__data__;
  return he ? t2[e2] !== void 0 : Uo.call(t2, e2);
}
var Wo = "__lodash_hash_undefined__";
function jo(e2, t2) {
  var r2 = this.__data__;
  return this.size += this.has(e2) ? 0 : 1, r2[e2] = he && t2 === void 0 ? Wo : t2, this;
}
function H$1(e2) {
  var t2 = -1, r2 = e2 == null ? 0 : e2.length;
  for (this.clear(); ++t2 < r2; ) {
    var n2 = e2[t2];
    this.set(n2[0], n2[1]);
  }
}
H$1.prototype.clear = Ao;
H$1.prototype.delete = Eo;
H$1.prototype.get = Fo;
H$1.prototype.has = No;
H$1.prototype.set = jo;
function Yo() {
  this.__data__ = [], this.size = 0;
}
function Ne$2(e2, t2) {
  for (var r2 = e2.length; r2--; )
    if (pe$1(e2[r2][0], t2))
      return r2;
  return -1;
}
var Go = Array.prototype, Bo = Go.splice;
function Ho(e2) {
  var t2 = this.__data__, r2 = Ne$2(t2, e2);
  if (r2 < 0)
    return false;
  var n2 = t2.length - 1;
  return r2 == n2 ? t2.pop() : Bo.call(t2, r2, 1), --this.size, true;
}
function qo(e2) {
  var t2 = this.__data__, r2 = Ne$2(t2, e2);
  return r2 < 0 ? void 0 : t2[r2][1];
}
function zo(e2) {
  return Ne$2(this.__data__, e2) > -1;
}
function Qo(e2, t2) {
  var r2 = this.__data__, n2 = Ne$2(r2, e2);
  return n2 < 0 ? (++this.size, r2.push([e2, t2])) : r2[n2][1] = t2, this;
}
function L(e2) {
  var t2 = -1, r2 = e2 == null ? 0 : e2.length;
  for (this.clear(); ++t2 < r2; ) {
    var n2 = e2[t2];
    this.set(n2[0], n2[1]);
  }
}
L.prototype.clear = Yo;
L.prototype.delete = Ho;
L.prototype.get = qo;
L.prototype.has = zo;
L.prototype.set = Qo;
var Xo = X$1(D$1, "Map");
const ge$1 = Xo;
function ko() {
  this.size = 0, this.__data__ = {
    hash: new H$1(),
    map: new (ge$1 || L)(),
    string: new H$1()
  };
}
function Ko(e2) {
  var t2 = typeof e2;
  return t2 == "string" || t2 == "number" || t2 == "symbol" || t2 == "boolean" ? e2 !== "__proto__" : e2 === null;
}
function We$3(e2, t2) {
  var r2 = e2.__data__;
  return Ko(t2) ? r2[typeof t2 == "string" ? "string" : "hash"] : r2.map;
}
function Vo(e2) {
  var t2 = We$3(this, e2).delete(e2);
  return this.size -= t2 ? 1 : 0, t2;
}
function Zo(e2) {
  return We$3(this, e2).get(e2);
}
function Jo(e2) {
  return We$3(this, e2).has(e2);
}
function es$1(e2, t2) {
  var r2 = We$3(this, e2), n2 = r2.size;
  return r2.set(e2, t2), this.size += r2.size == n2 ? 0 : 1, this;
}
function F$1(e2) {
  var t2 = -1, r2 = e2 == null ? 0 : e2.length;
  for (this.clear(); ++t2 < r2; ) {
    var n2 = e2[t2];
    this.set(n2[0], n2[1]);
  }
}
F$1.prototype.clear = ko;
F$1.prototype.delete = Vo;
F$1.prototype.get = Zo;
F$1.prototype.has = Jo;
F$1.prototype.set = es$1;
var ts$1 = "Expected a function";
function ft$2(e2, t2) {
  if (typeof e2 != "function" || t2 != null && typeof t2 != "function")
    throw new TypeError(ts$1);
  var r2 = function() {
    var n2 = arguments, a2 = t2 ? t2.apply(this, n2) : n2[0], i2 = r2.cache;
    if (i2.has(a2))
      return i2.get(a2);
    var o2 = e2.apply(this, n2);
    return r2.cache = i2.set(a2, o2) || i2, o2;
  };
  return r2.cache = new (ft$2.Cache || F$1)(), r2;
}
ft$2.Cache = F$1;
var rs$1 = 500;
function ns$1(e2) {
  var t2 = ft$2(e2, function(n2) {
    return r2.size === rs$1 && r2.clear(), n2;
  }), r2 = t2.cache;
  return t2;
}
var as$1 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, is$1 = /\\(\\)?/g, os$1 = ns$1(function(e2) {
  var t2 = [];
  return e2.charCodeAt(0) === 46 && t2.push(""), e2.replace(as$1, function(r2, n2, a2, i2) {
    t2.push(a2 ? i2.replace(is$1, "$1") : n2 || r2);
  }), t2;
});
const ss$1 = os$1;
function us(e2) {
  return e2 == null ? "" : or$1(e2);
}
function pr(e2, t2) {
  return S$1(e2) ? e2 : ct$2(e2, t2) ? [e2] : ss$1(us(e2));
}
var ls$1 = 1 / 0;
function je$2(e2) {
  if (typeof e2 == "string" || nt$2(e2))
    return e2;
  var t2 = e2 + "";
  return t2 == "0" && 1 / e2 == -ls$1 ? "-0" : t2;
}
function vr$1(e2, t2) {
  t2 = pr(t2, e2);
  for (var r2 = 0, n2 = t2.length; e2 != null && r2 < n2; )
    e2 = e2[je$2(t2[r2++])];
  return r2 && r2 == n2 ? e2 : void 0;
}
function cs$1(e2, t2, r2) {
  var n2 = e2 == null ? void 0 : vr$1(e2, t2);
  return n2 === void 0 ? r2 : n2;
}
function dt$1(e2, t2) {
  for (var r2 = -1, n2 = t2.length, a2 = e2.length; ++r2 < n2; )
    e2[a2 + r2] = t2[r2];
  return e2;
}
var Ft = P ? P.isConcatSpreadable : void 0;
function fs(e2) {
  return S$1(e2) || ee$2(e2) || !!(Ft && e2 && e2[Ft]);
}
function yr$1(e2, t2, r2, n2, a2) {
  var i2 = -1, o2 = e2.length;
  for (r2 || (r2 = fs), a2 || (a2 = []); ++i2 < o2; ) {
    var s2 = e2[i2];
    t2 > 0 && r2(s2) ? t2 > 1 ? yr$1(s2, t2 - 1, r2, n2, a2) : dt$1(a2, s2) : n2 || (a2[a2.length] = s2);
  }
  return a2;
}
var ds = gr(Object.getPrototypeOf, Object);
const ht$2 = ds;
var hs = "[object Object]", gs = Function.prototype, ms = Object.prototype, br = gs.toString, ps = ms.hasOwnProperty, vs = br.call(Object);
function ys(e2) {
  if (!A$1(e2) || z$1(e2) != hs)
    return false;
  var t2 = ht$2(e2);
  if (t2 === null)
    return true;
  var r2 = ps.call(t2, "constructor") && t2.constructor;
  return typeof r2 == "function" && r2 instanceof r2 && br.call(r2) == vs;
}
function bs() {
  this.__data__ = new L(), this.size = 0;
}
function ws(e2) {
  var t2 = this.__data__, r2 = t2.delete(e2);
  return this.size = t2.size, r2;
}
function Ts(e2) {
  return this.__data__.get(e2);
}
function _s(e2) {
  return this.__data__.has(e2);
}
var Os = 200;
function Ss(e2, t2) {
  var r2 = this.__data__;
  if (r2 instanceof L) {
    var n2 = r2.__data__;
    if (!ge$1 || n2.length < Os - 1)
      return n2.push([e2, t2]), this.size = ++r2.size, this;
    r2 = this.__data__ = new F$1(n2);
  }
  return r2.set(e2, t2), this.size = r2.size, this;
}
function M$2(e2) {
  var t2 = this.__data__ = new L(e2);
  this.size = t2.size;
}
M$2.prototype.clear = bs;
M$2.prototype.delete = ws;
M$2.prototype.get = Ts;
M$2.prototype.has = _s;
M$2.prototype.set = Ss;
function $s$1(e2, t2) {
  return e2 && ve$1(t2, Ue$2(t2), e2);
}
function Ps(e2, t2) {
  return e2 && ve$1(t2, be$2(t2), e2);
}
var wr = typeof exports == "object" && exports && !exports.nodeType && exports, Rt = wr && typeof module == "object" && module && !module.nodeType && module, Cs = Rt && Rt.exports === wr, Ut = Cs ? D$1.Buffer : void 0, Nt = Ut ? Ut.allocUnsafe : void 0;
function Tr(e2, t2) {
  if (t2)
    return e2.slice();
  var r2 = e2.length, n2 = Nt ? Nt(r2) : new e2.constructor(r2);
  return e2.copy(n2), n2;
}
function Ms(e2, t2) {
  for (var r2 = -1, n2 = e2 == null ? 0 : e2.length, a2 = 0, i2 = []; ++r2 < n2; ) {
    var o2 = e2[r2];
    t2(o2, r2, e2) && (i2[a2++] = o2);
  }
  return i2;
}
function _r() {
  return [];
}
var xs = Object.prototype, As = xs.propertyIsEnumerable, Wt = Object.getOwnPropertySymbols, Es = Wt ? function(e2) {
  return e2 == null ? [] : (e2 = Object(e2), Ms(Wt(e2), function(t2) {
    return As.call(e2, t2);
  }));
} : _r;
const gt$2 = Es;
function Ds(e2, t2) {
  return ve$1(e2, gt$2(e2), t2);
}
var Is = Object.getOwnPropertySymbols, Ls = Is ? function(e2) {
  for (var t2 = []; e2; )
    dt$1(t2, gt$2(e2)), e2 = ht$2(e2);
  return t2;
} : _r;
const Or = Ls;
function Fs$1(e2, t2) {
  return ve$1(e2, Or(e2), t2);
}
function Sr(e2, t2, r2) {
  var n2 = t2(e2);
  return S$1(e2) ? n2 : dt$1(n2, r2(e2));
}
function Ve$2(e2) {
  return Sr(e2, Ue$2, gt$2);
}
function Rs(e2) {
  return Sr(e2, be$2, Or);
}
var Us$1 = X$1(D$1, "DataView");
const Ze$3 = Us$1;
var Ns$1 = X$1(D$1, "Promise");
const Je$2 = Ns$1;
var Ws$1 = X$1(D$1, "Set");
const J$2 = Ws$1;
var jt = "[object Map]", js$1 = "[object Object]", Yt = "[object Promise]", Gt$1 = "[object Set]", Bt$1 = "[object WeakMap]", Ht = "[object DataView]", Ys$1 = Q$2(Ze$3), Gs$1 = Q$2(ge$1), Bs = Q$2(Je$2), Hs = Q$2(J$2), qs = Q$2(Ke$3), Y$1 = z$1;
(Ze$3 && Y$1(new Ze$3(new ArrayBuffer(1))) != Ht || ge$1 && Y$1(new ge$1()) != jt || Je$2 && Y$1(Je$2.resolve()) != Yt || J$2 && Y$1(new J$2()) != Gt$1 || Ke$3 && Y$1(new Ke$3()) != Bt$1) && (Y$1 = function(e2) {
  var t2 = z$1(e2), r2 = t2 == js$1 ? e2.constructor : void 0, n2 = r2 ? Q$2(r2) : "";
  if (n2)
    switch (n2) {
      case Ys$1:
        return Ht;
      case Gs$1:
        return jt;
      case Bs:
        return Yt;
      case Hs:
        return Gt$1;
      case qs:
        return Bt$1;
    }
  return t2;
});
const ne$2 = Y$1;
var zs = Object.prototype, Qs = zs.hasOwnProperty;
function Xs$2(e2) {
  var t2 = e2.length, r2 = new e2.constructor(t2);
  return t2 && typeof e2[0] == "string" && Qs.call(e2, "index") && (r2.index = e2.index, r2.input = e2.input), r2;
}
var ks = D$1.Uint8Array;
const De$2 = ks;
function mt$1(e2) {
  var t2 = new e2.constructor(e2.byteLength);
  return new De$2(t2).set(new De$2(e2)), t2;
}
function Ks(e2, t2) {
  var r2 = t2 ? mt$1(e2.buffer) : e2.buffer;
  return new e2.constructor(r2, e2.byteOffset, e2.byteLength);
}
var Vs = /\w*$/;
function Zs$1(e2) {
  var t2 = new e2.constructor(e2.source, Vs.exec(e2));
  return t2.lastIndex = e2.lastIndex, t2;
}
var qt = P ? P.prototype : void 0, zt = qt ? qt.valueOf : void 0;
function Js(e2) {
  return zt ? Object(zt.call(e2)) : {};
}
function $r(e2, t2) {
  var r2 = t2 ? mt$1(e2.buffer) : e2.buffer;
  return new e2.constructor(r2, e2.byteOffset, e2.length);
}
var eu = "[object Boolean]", tu = "[object Date]", ru = "[object Map]", nu = "[object Number]", au = "[object RegExp]", iu = "[object Set]", ou = "[object String]", su = "[object Symbol]", uu = "[object ArrayBuffer]", lu = "[object DataView]", cu = "[object Float32Array]", fu = "[object Float64Array]", du = "[object Int8Array]", hu = "[object Int16Array]", gu = "[object Int32Array]", mu = "[object Uint8Array]", pu = "[object Uint8ClampedArray]", vu = "[object Uint16Array]", yu = "[object Uint32Array]";
function bu(e2, t2, r2) {
  var n2 = e2.constructor;
  switch (t2) {
    case uu:
      return mt$1(e2);
    case eu:
    case tu:
      return new n2(+e2);
    case lu:
      return Ks(e2, r2);
    case cu:
    case fu:
    case du:
    case hu:
    case gu:
    case mu:
    case pu:
    case vu:
    case yu:
      return $r(e2, r2);
    case ru:
      return new n2();
    case nu:
    case ou:
      return new n2(e2);
    case au:
      return Zs$1(e2);
    case iu:
      return new n2();
    case su:
      return Js(e2);
  }
}
function Pr(e2) {
  return typeof e2.constructor == "function" && !Fe$2(e2) ? ii$1(ht$2(e2)) : {};
}
var wu = "[object Map]";
function Tu(e2) {
  return A$1(e2) && ne$2(e2) == wu;
}
var Qt$1 = re$1 && re$1.isMap, _u = Qt$1 ? lt$3(Qt$1) : Tu;
const Ou = _u;
var Su = "[object Set]";
function $u(e2) {
  return A$1(e2) && ne$2(e2) == Su;
}
var Xt = re$1 && re$1.isSet, Pu = Xt ? lt$3(Xt) : $u;
const Cu = Pu;
var Mu = 1, xu = 2, Au = 4, Cr = "[object Arguments]", Eu = "[object Array]", Du = "[object Boolean]", Iu = "[object Date]", Lu = "[object Error]", Mr = "[object Function]", Fu = "[object GeneratorFunction]", Ru = "[object Map]", Uu = "[object Number]", xr = "[object Object]", Nu = "[object RegExp]", Wu = "[object Set]", ju = "[object String]", Yu = "[object Symbol]", Gu = "[object WeakMap]", Bu = "[object ArrayBuffer]", Hu = "[object DataView]", qu = "[object Float32Array]", zu = "[object Float64Array]", Qu = "[object Int8Array]", Xu = "[object Int16Array]", ku = "[object Int32Array]", Ku = "[object Uint8Array]", Vu = "[object Uint8ClampedArray]", Zu = "[object Uint16Array]", Ju = "[object Uint32Array]", v$2 = {};
v$2[Cr] = v$2[Eu] = v$2[Bu] = v$2[Hu] = v$2[Du] = v$2[Iu] = v$2[qu] = v$2[zu] = v$2[Qu] = v$2[Xu] = v$2[ku] = v$2[Ru] = v$2[Uu] = v$2[xr] = v$2[Nu] = v$2[Wu] = v$2[ju] = v$2[Yu] = v$2[Ku] = v$2[Vu] = v$2[Zu] = v$2[Ju] = true;
v$2[Lu] = v$2[Mr] = v$2[Gu] = false;
function Ce$2(e2, t2, r2, n2, a2, i2) {
  var o2, s2 = t2 & Mu, u2 = t2 & xu, l2 = t2 & Au;
  if (r2 && (o2 = a2 ? r2(e2, n2, a2, i2) : r2(e2)), o2 !== void 0)
    return o2;
  if (!I$1(e2))
    return e2;
  var f2 = S$1(e2);
  if (f2) {
    if (o2 = Xs$2(e2), !s2)
      return sr$1(e2, o2);
  } else {
    var c2 = ne$2(e2), d2 = c2 == Mr || c2 == Fu;
    if (te$1(e2))
      return Tr(e2, s2);
    if (c2 == xr || c2 == Cr || d2 && !a2) {
      if (o2 = u2 || d2 ? {} : Pr(e2), !s2)
        return u2 ? Fs$1(e2, Ps(o2, e2)) : Ds(e2, $s$1(o2, e2));
    } else {
      if (!v$2[c2])
        return a2 ? e2 : {};
      o2 = bu(e2, c2, s2);
    }
  }
  i2 || (i2 = new M$2());
  var g2 = i2.get(e2);
  if (g2)
    return g2;
  i2.set(e2, o2), Cu(e2) ? e2.forEach(function(y2) {
    o2.add(Ce$2(y2, t2, r2, y2, e2, i2));
  }) : Ou(e2) && e2.forEach(function(y2, w2) {
    o2.set(w2, Ce$2(y2, t2, r2, w2, e2, i2));
  });
  var m2 = l2 ? u2 ? Rs : Ve$2 : u2 ? be$2 : Ue$2, T2 = f2 ? void 0 : m2(e2);
  return yi$1(T2 || e2, function(y2, w2) {
    T2 && (w2 = y2, y2 = e2[w2]), ur(o2, w2, Ce$2(y2, t2, r2, w2, e2, i2));
  }), o2;
}
var el = 1, tl = 4;
function rl(e2) {
  return Ce$2(e2, el | tl);
}
var nl = "__lodash_hash_undefined__";
function al(e2) {
  return this.__data__.set(e2, nl), this;
}
function il(e2) {
  return this.__data__.has(e2);
}
function me$1(e2) {
  var t2 = -1, r2 = e2 == null ? 0 : e2.length;
  for (this.__data__ = new F$1(); ++t2 < r2; )
    this.add(e2[t2]);
}
me$1.prototype.add = me$1.prototype.push = al;
me$1.prototype.has = il;
function ol(e2, t2) {
  for (var r2 = -1, n2 = e2 == null ? 0 : e2.length; ++r2 < n2; )
    if (t2(e2[r2], r2, e2))
      return true;
  return false;
}
function Ar(e2, t2) {
  return e2.has(t2);
}
var sl = 1, ul = 2;
function Er(e2, t2, r2, n2, a2, i2) {
  var o2 = r2 & sl, s2 = e2.length, u2 = t2.length;
  if (s2 != u2 && !(o2 && u2 > s2))
    return false;
  var l2 = i2.get(e2), f2 = i2.get(t2);
  if (l2 && f2)
    return l2 == t2 && f2 == e2;
  var c2 = -1, d2 = true, g2 = r2 & ul ? new me$1() : void 0;
  for (i2.set(e2, t2), i2.set(t2, e2); ++c2 < s2; ) {
    var m2 = e2[c2], T2 = t2[c2];
    if (n2)
      var y2 = o2 ? n2(T2, m2, c2, t2, e2, i2) : n2(m2, T2, c2, e2, t2, i2);
    if (y2 !== void 0) {
      if (y2)
        continue;
      d2 = false;
      break;
    }
    if (g2) {
      if (!ol(t2, function(w2, C2) {
        if (!Ar(g2, C2) && (m2 === w2 || a2(m2, w2, r2, n2, i2)))
          return g2.push(C2);
      })) {
        d2 = false;
        break;
      }
    } else if (!(m2 === T2 || a2(m2, T2, r2, n2, i2))) {
      d2 = false;
      break;
    }
  }
  return i2.delete(e2), i2.delete(t2), d2;
}
function ll(e2) {
  var t2 = -1, r2 = Array(e2.size);
  return e2.forEach(function(n2, a2) {
    r2[++t2] = [a2, n2];
  }), r2;
}
function pt$1(e2) {
  var t2 = -1, r2 = Array(e2.size);
  return e2.forEach(function(n2) {
    r2[++t2] = n2;
  }), r2;
}
var cl = 1, fl = 2, dl = "[object Boolean]", hl = "[object Date]", gl = "[object Error]", ml = "[object Map]", pl = "[object Number]", vl = "[object RegExp]", yl = "[object Set]", bl = "[object String]", wl = "[object Symbol]", Tl = "[object ArrayBuffer]", _l = "[object DataView]", kt$1 = P ? P.prototype : void 0, ze$2 = kt$1 ? kt$1.valueOf : void 0;
function Ol(e2, t2, r2, n2, a2, i2, o2) {
  switch (r2) {
    case _l:
      if (e2.byteLength != t2.byteLength || e2.byteOffset != t2.byteOffset)
        return false;
      e2 = e2.buffer, t2 = t2.buffer;
    case Tl:
      return !(e2.byteLength != t2.byteLength || !i2(new De$2(e2), new De$2(t2)));
    case dl:
    case hl:
    case pl:
      return pe$1(+e2, +t2);
    case gl:
      return e2.name == t2.name && e2.message == t2.message;
    case vl:
    case bl:
      return e2 == t2 + "";
    case ml:
      var s2 = ll;
    case yl:
      var u2 = n2 & cl;
      if (s2 || (s2 = pt$1), e2.size != t2.size && !u2)
        return false;
      var l2 = o2.get(e2);
      if (l2)
        return l2 == t2;
      n2 |= fl, o2.set(e2, t2);
      var f2 = Er(s2(e2), s2(t2), n2, a2, i2, o2);
      return o2.delete(e2), f2;
    case wl:
      if (ze$2)
        return ze$2.call(e2) == ze$2.call(t2);
  }
  return false;
}
var Sl = 1, $l = Object.prototype, Pl = $l.hasOwnProperty;
function Cl(e2, t2, r2, n2, a2, i2) {
  var o2 = r2 & Sl, s2 = Ve$2(e2), u2 = s2.length, l2 = Ve$2(t2), f2 = l2.length;
  if (u2 != f2 && !o2)
    return false;
  for (var c2 = u2; c2--; ) {
    var d2 = s2[c2];
    if (!(o2 ? d2 in t2 : Pl.call(t2, d2)))
      return false;
  }
  var g2 = i2.get(e2), m2 = i2.get(t2);
  if (g2 && m2)
    return g2 == t2 && m2 == e2;
  var T2 = true;
  i2.set(e2, t2), i2.set(t2, e2);
  for (var y2 = o2; ++c2 < u2; ) {
    d2 = s2[c2];
    var w2 = e2[d2], C2 = t2[d2];
    if (n2)
      var k2 = o2 ? n2(C2, w2, d2, t2, e2, i2) : n2(w2, C2, d2, e2, t2, i2);
    if (!(k2 === void 0 ? w2 === C2 || a2(w2, C2, r2, n2, i2) : k2)) {
      T2 = false;
      break;
    }
    y2 || (y2 = d2 == "constructor");
  }
  if (T2 && !y2) {
    var R2 = e2.constructor, K2 = t2.constructor;
    R2 != K2 && "constructor" in e2 && "constructor" in t2 && !(typeof R2 == "function" && R2 instanceof R2 && typeof K2 == "function" && K2 instanceof K2) && (T2 = false);
  }
  return i2.delete(e2), i2.delete(t2), T2;
}
var Ml = 1, Kt = "[object Arguments]", Vt = "[object Array]", Se$1 = "[object Object]", xl = Object.prototype, Zt = xl.hasOwnProperty;
function Al(e2, t2, r2, n2, a2, i2) {
  var o2 = S$1(e2), s2 = S$1(t2), u2 = o2 ? Vt : ne$2(e2), l2 = s2 ? Vt : ne$2(t2);
  u2 = u2 == Kt ? Se$1 : u2, l2 = l2 == Kt ? Se$1 : l2;
  var f2 = u2 == Se$1, c2 = l2 == Se$1, d2 = u2 == l2;
  if (d2 && te$1(e2)) {
    if (!te$1(t2))
      return false;
    o2 = true, f2 = false;
  }
  if (d2 && !f2)
    return i2 || (i2 = new M$2()), o2 || Re$1(e2) ? Er(e2, t2, r2, n2, a2, i2) : Ol(e2, t2, u2, r2, n2, a2, i2);
  if (!(r2 & Ml)) {
    var g2 = f2 && Zt.call(e2, "__wrapped__"), m2 = c2 && Zt.call(t2, "__wrapped__");
    if (g2 || m2) {
      var T2 = g2 ? e2.value() : e2, y2 = m2 ? t2.value() : t2;
      return i2 || (i2 = new M$2()), a2(T2, y2, r2, n2, i2);
    }
  }
  return d2 ? (i2 || (i2 = new M$2()), Cl(e2, t2, r2, n2, a2, i2)) : false;
}
function vt$1(e2, t2, r2, n2, a2) {
  return e2 === t2 ? true : e2 == null || t2 == null || !A$1(e2) && !A$1(t2) ? e2 !== e2 && t2 !== t2 : Al(e2, t2, r2, n2, vt$1, a2);
}
var El = 1, Dl = 2;
function Il(e2, t2, r2, n2) {
  var a2 = r2.length, i2 = a2, o2 = !n2;
  if (e2 == null)
    return !i2;
  for (e2 = Object(e2); a2--; ) {
    var s2 = r2[a2];
    if (o2 && s2[2] ? s2[1] !== e2[s2[0]] : !(s2[0] in e2))
      return false;
  }
  for (; ++a2 < i2; ) {
    s2 = r2[a2];
    var u2 = s2[0], l2 = e2[u2], f2 = s2[1];
    if (o2 && s2[2]) {
      if (l2 === void 0 && !(u2 in e2))
        return false;
    } else {
      var c2 = new M$2();
      if (n2)
        var d2 = n2(l2, f2, u2, e2, t2, c2);
      if (!(d2 === void 0 ? vt$1(f2, l2, El | Dl, n2, c2) : d2))
        return false;
    }
  }
  return true;
}
function Dr(e2) {
  return e2 === e2 && !I$1(e2);
}
function Ll(e2) {
  for (var t2 = Ue$2(e2), r2 = t2.length; r2--; ) {
    var n2 = t2[r2], a2 = e2[n2];
    t2[r2] = [n2, a2, Dr(a2)];
  }
  return t2;
}
function Ir(e2, t2) {
  return function(r2) {
    return r2 == null ? false : r2[e2] === t2 && (t2 !== void 0 || e2 in Object(r2));
  };
}
function Fl(e2) {
  var t2 = Ll(e2);
  return t2.length == 1 && t2[0][2] ? Ir(t2[0][0], t2[0][1]) : function(r2) {
    return r2 === e2 || Il(r2, e2, t2);
  };
}
function Rl(e2, t2) {
  return e2 != null && t2 in Object(e2);
}
function Ul(e2, t2, r2) {
  t2 = pr(t2, e2);
  for (var n2 = -1, a2 = t2.length, i2 = false; ++n2 < a2; ) {
    var o2 = je$2(t2[n2]);
    if (!(i2 = e2 != null && r2(e2, o2)))
      break;
    e2 = e2[o2];
  }
  return i2 || ++n2 != a2 ? i2 : (a2 = e2 == null ? 0 : e2.length, !!a2 && ut$2(a2) && ot$3(o2, a2) && (S$1(e2) || ee$2(e2)));
}
function Nl(e2, t2) {
  return e2 != null && Ul(e2, t2, Rl);
}
var Wl = 1, jl = 2;
function Yl(e2, t2) {
  return ct$2(e2) && Dr(t2) ? Ir(je$2(e2), t2) : function(r2) {
    var n2 = cs$1(r2, e2);
    return n2 === void 0 && n2 === t2 ? Nl(r2, e2) : vt$1(t2, n2, Wl | jl);
  };
}
function Gl(e2) {
  return function(t2) {
    return t2 == null ? void 0 : t2[e2];
  };
}
function Bl(e2) {
  return function(t2) {
    return vr$1(t2, e2);
  };
}
function Hl(e2) {
  return ct$2(e2) ? Gl(je$2(e2)) : Bl(e2);
}
function ql(e2) {
  return typeof e2 == "function" ? e2 : e2 == null ? at$3 : typeof e2 == "object" ? S$1(e2) ? Yl(e2[0], e2[1]) : Fl(e2) : Hl(e2);
}
function zl(e2) {
  return function(t2, r2, n2) {
    for (var a2 = -1, i2 = Object(t2), o2 = n2(t2), s2 = o2.length; s2--; ) {
      var u2 = o2[e2 ? s2 : ++a2];
      if (r2(i2[u2], u2, i2) === false)
        break;
    }
    return t2;
  };
}
var Ql = zl();
const Xl = Ql;
function et$3(e2, t2, r2) {
  (r2 !== void 0 && !pe$1(e2[t2], r2) || r2 === void 0 && !(t2 in e2)) && st$2(e2, t2, r2);
}
function tt$1(e2) {
  return A$1(e2) && ye$1(e2);
}
function rt$3(e2, t2) {
  if (!(t2 === "constructor" && typeof e2[t2] == "function") && t2 != "__proto__")
    return e2[t2];
}
function kl(e2) {
  return ve$1(e2, be$2(e2));
}
function Kl(e2, t2, r2, n2, a2, i2, o2) {
  var s2 = rt$3(e2, r2), u2 = rt$3(t2, r2), l2 = o2.get(u2);
  if (l2) {
    et$3(e2, r2, l2);
    return;
  }
  var f2 = i2 ? i2(s2, u2, r2 + "", e2, t2, o2) : void 0, c2 = f2 === void 0;
  if (c2) {
    var d2 = S$1(u2), g2 = !d2 && te$1(u2), m2 = !d2 && !g2 && Re$1(u2);
    f2 = u2, d2 || g2 || m2 ? S$1(s2) ? f2 = s2 : tt$1(s2) ? f2 = sr$1(s2) : g2 ? (c2 = false, f2 = Tr(u2, true)) : m2 ? (c2 = false, f2 = $r(u2, true)) : f2 = [] : ys(u2) || ee$2(u2) ? (f2 = s2, ee$2(s2) ? f2 = kl(s2) : (!I$1(s2) || it$3(s2)) && (f2 = Pr(u2))) : c2 = false;
  }
  c2 && (o2.set(u2, f2), a2(f2, u2, n2, i2, o2), o2.delete(u2)), et$3(e2, r2, f2);
}
function Lr(e2, t2, r2, n2, a2) {
  e2 !== t2 && Xl(t2, function(i2, o2) {
    if (a2 || (a2 = new M$2()), I$1(i2))
      Kl(e2, t2, o2, r2, Lr, n2, a2);
    else {
      var s2 = n2 ? n2(rt$3(e2, o2), i2, o2 + "", e2, t2, a2) : void 0;
      s2 === void 0 && (s2 = i2), et$3(e2, o2, s2);
    }
  }, be$2);
}
function Vl(e2, t2, r2) {
  for (var n2 = -1, a2 = e2 == null ? 0 : e2.length; ++n2 < a2; )
    if (r2(t2, e2[n2]))
      return true;
  return false;
}
function Zl(e2) {
  var t2 = e2 == null ? 0 : e2.length;
  return t2 ? e2[t2 - 1] : void 0;
}
var Jl = "[object Map]", ec = "[object Set]", tc = Object.prototype, rc$1 = tc.hasOwnProperty;
function nc$1(e2) {
  if (e2 == null)
    return true;
  if (ye$1(e2) && (S$1(e2) || typeof e2 == "string" || typeof e2.splice == "function" || te$1(e2) || Re$1(e2) || ee$2(e2)))
    return !e2.length;
  var t2 = ne$2(e2);
  if (t2 == Jl || t2 == ec)
    return !e2.size;
  if (Fe$2(e2))
    return !mr(e2).length;
  for (var r2 in e2)
    if (rc$1.call(e2, r2))
      return false;
  return true;
}
var ac$1 = Ei$1(function(e2, t2, r2) {
  Lr(e2, t2, r2);
});
const h = ac$1;
var ic$1 = 1 / 0, oc$1 = J$2 && 1 / pt$1(new J$2([, -0]))[1] == ic$1 ? function(e2) {
  return new J$2(e2);
} : si$1;
const sc = oc$1;
var uc$1 = 200;
function Fr(e2, t2, r2) {
  var n2 = -1, a2 = Oi$1, i2 = e2.length, o2 = true, s2 = [], u2 = s2;
  if (r2)
    o2 = false, a2 = Vl;
  else if (i2 >= uc$1) {
    var l2 = t2 ? null : sc(e2);
    if (l2)
      return pt$1(l2);
    o2 = false, a2 = Ar, u2 = new me$1();
  } else
    u2 = t2 ? [] : s2;
  e:
    for (; ++n2 < i2; ) {
      var f2 = e2[n2], c2 = t2 ? t2(f2) : f2;
      if (f2 = r2 || f2 !== 0 ? f2 : 0, o2 && c2 === c2) {
        for (var d2 = u2.length; d2--; )
          if (u2[d2] === c2)
            continue e;
        t2 && u2.push(c2), s2.push(f2);
      } else
        a2(u2, c2, r2) || (u2 !== s2 && u2.push(c2), s2.push(f2));
    }
  return s2;
}
var lc$1 = lr$1(function(e2) {
  var t2 = Zl(e2);
  return tt$1(t2) && (t2 = void 0), Fr(yr$1(e2, 1, tt$1, true), ql(t2));
});
const cc$1 = lc$1;
function lf(e2) {
  return e2 && e2.length ? Fr(e2) : [];
}
const fc$1 = "cds", dc$1 = {
  opacity: {
    unselected: 0.05,
    selected: 0.4
  }
}, hc$1 = {
  ticks: {
    number: 7,
    rotateIfSmallerThan: 30,
    verticalSpaceRatio: 2.5,
    horizontalSpaceRatio: 3.5
  },
  ratio: {
    reference: "value",
    compareTo: "marker"
  },
  paddingRatio: 0.1,
  hover: {
    rectanglePadding: 4
  }
}, gc$1 = {
  duration: 1e3,
  ease: easeCubicInOut,
  zoomLevel: 3
}, Rr = {
  circles: {
    fillOpacity: 0.3,
    hover: {
      stroke: "#FFF"
    }
  },
  padding: {
    mainGroup: 4,
    children: 2
  },
  hierarchyLevel: 2
}, mc$1 = {
  pairingOptions: {
    "1-color": 4,
    "2-color": 5,
    "3-color": 5,
    "4-color": 3,
    "5-color": 2,
    "14-color": 1
  }
}, vc$1 = {
  defaultBins: 10
}, yc = {
  items: {
    status: {
      ACTIVE: 1,
      DISABLED: 0
    },
    horizontalSpace: 12,
    verticalSpace: 24,
    textYOffset: 8,
    spaceAfter: 4
  },
  checkbox: {
    radius: 6.5
  },
  radius: {
    iconData: [
      { cx: 7, cy: 7, r: 6.5 },
      { cx: 7, cy: 10, r: 3.5 }
    ],
    fill: null,
    stroke: "#8c8c8c"
  },
  line: {
    yPosition: 6,
    width: 24,
    strokeWidth: 1.4,
    fill: null,
    stroke: "#999999"
  },
  area: {
    width: 24,
    height: 14,
    fill: "#6f6f6f",
    stroke: null
  },
  size: {
    iconData: [
      { width: 23, height: 12 },
      { width: 13, height: 6 }
    ],
    fill: null,
    stroke: "#8D8D8D"
  },
  quartile: {
    iconData: [
      { x: 0, y: 0, width: 24, height: 13 },
      { x: 11, y: 4, width: 1, height: 4 }
    ]
  },
  zoom: {
    iconData: [{ x: 0, y: 0, width: 12, height: 12 }],
    color: "#8D8D8D"
  },
  color: {
    barWidth: 300,
    barHeight: 8,
    axisYTranslation: 10
  }
}, bc$1 = {
  opacity: {
    unselected: 0.3,
    selected: 1
  },
  weight: {
    selected: 2,
    unselected: 1
  }
}, Tc = {
  radiusOffset: -15,
  innerRadius: 2,
  padAngle: 7e-3,
  hoverArc: {
    outerRadiusOffset: 3
  },
  xOffset: 30,
  yOffset: 20,
  yOffsetCallout: 10,
  callout: {
    minSliceDegree: 5,
    offsetX: 15,
    offsetY: 12,
    horizontalLineLength: 8,
    textMargin: 2
  }
}, $c$1 = {
  default: {
    size: 24
  }
}, Pc = {
  horizontalOffset: 10
}, Cc = {
  default: {
    duration: 300
  },
  pie_slice_mouseover: {
    duration: 100
  },
  pie_chart_titles: {
    duration: 375
  },
  graph_element_mouseover_fill_update: {
    duration: 100
  },
  graph_element_mouseout_fill_update: {
    duration: 100
  }
}, xc = {
  height: {
    [K$2.GRAPH_VIEW]: 32,
    [K$2.SLIDER_VIEW]: 10
  },
  spacerHeight: 8,
  handleWidth: 5,
  handleBarWidth: 1,
  handleBarHeight: 12
}, Ur = [
  {
    type: rE.RADIUS,
    name: "Radius"
  },
  {
    type: rE.AREA,
    name: "Poor area"
  },
  {
    type: rE.AREA,
    name: "Satisfactory area"
  },
  {
    type: rE.AREA,
    name: "Great area"
  },
  {
    type: rE.QUARTILE,
    name: "Quartiles"
  }
], Z$2 = {
  type: h$1.END_LINE,
  threshold: 16,
  numCharacter: 14
}, Ac = {
  enabled: true,
  position: P$1.BOTTOM,
  clickable: true,
  truncation: Z$2,
  alignment: k$2.LEFT,
  order: null,
  additionalItems: []
}, Nr = {
  x: {
    // set enable to false will not draw grid and stroke of grid backdrop
    enabled: true,
    numberOfTicks: 15,
    alignWithAxisTicks: false
  },
  y: {
    // set enable to false will not draw grid and stroke of grid backdrop
    enabled: true,
    numberOfTicks: 5,
    alignWithAxisTicks: false
  }
}, Wr = {
  // enable or disable ruler
  enabled: true
}, yt$3 = {
  enabled: true,
  showTotal: true,
  truncation: Z$2,
  groupLabel: "Group"
}, jr = {
  top: {
    visible: true,
    includeZero: true,
    truncation: Z$2
  },
  bottom: {
    visible: true,
    includeZero: true,
    truncation: Z$2
  },
  left: {
    visible: true,
    includeZero: true,
    truncation: Z$2
  },
  right: {
    visible: true,
    includeZero: true,
    truncation: Z$2
  }
}, we$2 = {
  addSpaceOnEdges: 1,
  showDayName: false,
  localeObject: nr$1,
  timeIntervalFormats: {
    "15seconds": { primary: "MMM d, pp", secondary: "pp" },
    minute: { primary: "MMM d, p", secondary: "p" },
    "30minutes": { primary: "MMM d, p", secondary: "p" },
    hourly: { primary: "MMM d, hh a", secondary: "hh a" },
    daily: { primary: "MMM d", secondary: "d" },
    weekly: { primary: "eee, MMM d", secondary: "eee" },
    monthly: { primary: "MMM yyyy", secondary: "MMM" },
    quarterly: { primary: "QQQ ''yy", secondary: "QQQ" },
    yearly: { primary: "yyyy", secondary: "yyyy" }
  }
}, Ec = typeof document < "u" && (document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled), _$1 = {
  width: null,
  height: null,
  resizable: true,
  theme: g$1.WHITE,
  tooltip: yt$3,
  legend: Ac,
  style: {
    prefix: "cc"
  },
  data: {
    groupMapsTo: "group",
    loading: false,
    selectedGroups: []
  },
  color: {
    scale: null,
    pairing: {
      numberOfVariants: null,
      option: 1
    },
    gradient: {
      enabled: false
    }
  },
  toolbar: {
    enabled: true,
    numberOfIcons: 3,
    controls: [
      {
        type: y$1.SHOW_AS_DATATABLE
      },
      ...Ec ? [
        {
          type: y$1.MAKE_FULLSCREEN
        }
      ] : [],
      {
        type: y$1.EXPORT_CSV
      },
      {
        type: y$1.EXPORT_PNG
      },
      {
        type: y$1.EXPORT_JPG
      }
    ]
  }
}, Yr = h({}, _$1, {
  thematic: {
    projection: uE.geoNaturalEarth1
  }
}), Te$1 = h({}, _$1, {
  axes: jr,
  timeScale: we$2,
  grid: Nr,
  ruler: Wr,
  zoomBar: {
    zoomRatio: 0.4,
    minZoomRatio: 0.01,
    top: {
      enabled: false,
      type: K$2.GRAPH_VIEW
    }
  }
}), q$1 = h({}, Te$1, {
  bars: {
    maxWidth: 16,
    spacingFactor: 0.25
  },
  timeScale: h(we$2, {
    addSpaceOnEdges: 1
  })
}), Dc = h({}, q$1, {}), Ic = h({}, q$1, {}), Lc = h({}, q$1, {
  bars: h({}, q$1.bars, {
    dividerSize: 1.5
  })
}), Fc$1 = h({}, q$1, {}), bt$1 = h({}, Te$1, {
  points: {
    // default point radius to 4
    radius: 4,
    fillOpacity: 0.3,
    filled: true,
    enabled: true
  }
}), Rc = bt$1, Gr = h({}, bt$1, {
  points: {
    // default point radius to 3
    radius: 3,
    filled: false,
    enabled: true
  }
}), Br = h({}, Gr, {
  timeScale: h(we$2, {
    addSpaceOnEdges: 0
  })
}), Uc = Br, Nc = h({}, Te$1, {
  bubble: {
    radiusMapsTo: "radius",
    radiusLabel: "Radius",
    radiusRange: (e2) => {
      const t2 = Math.min(e2.width, e2.height);
      return [t2 * 3 / 400, t2 * 25 / 400];
    },
    fillOpacity: 0.2,
    enabled: true
  },
  points: {
    filled: true
  },
  legend: {
    additionalItems: [
      {
        type: rE.RADIUS,
        name: "Radius"
      }
    ]
  }
}), Wc = h({}, Te$1, {
  bullet: {
    performanceAreaTitles: ["Poor", "Satisfactory", "Great"]
  },
  grid: {
    x: {
      enabled: false
    },
    y: {
      enabled: false
    }
  },
  legend: {
    additionalItems: [
      {
        type: rE.AREA,
        name: "Poor area"
      },
      {
        type: rE.AREA,
        name: "Satisfactory area"
      },
      {
        type: rE.AREA,
        name: "Great area"
      },
      {
        type: rE.QUARTILE,
        name: "Quartiles"
      }
    ]
  }
}), jc$1 = h({}, q$1, {
  bars: {
    dividerSize: 1.5
  },
  timeScale: h(we$2, {
    addSpaceOnEdges: 0
  })
}), Yc = h({}, _$1, {
  tooltip: h({}, yt$3, {
    wordLabel: "Word",
    valueLabel: "Value"
  }),
  wordCloud: {
    fontSizeMapsTo: "value",
    fontSizeRange: (e2) => {
      const t2 = Math.min(e2.width, e2.height);
      return [t2 * 20 / 400, t2 * 75 / 400];
    },
    wordMapsTo: "word"
  }
}), Hr = h({}, _$1, {
  pie: {
    labels: {
      formatter: null,
      enabled: true
    },
    alignment: k$2.LEFT,
    sortFunction: null,
    valueMapsTo: "value"
  }
}), Gc = h({}, _$1, {
  legend: {
    enabled: false
  },
  gauge: {
    type: Q$3.SEMI,
    arcWidth: 16,
    deltaArrow: {
      size: (e2) => e2 / 8,
      enabled: true
    },
    showPercentageSymbol: true,
    status: null,
    numberSpacing: 10,
    deltaFontSize: (e2) => e2 / 8,
    valueFontSize: (e2) => e2 / 2.5,
    numberFormatter: (e2) => Number(e2.toFixed(2)) % 1 !== 0 ? e2.toFixed(2).toLocaleString() : e2.toFixed().toLocaleString(),
    alignment: k$2.LEFT
  }
}), Bc = h({}, Hr, {
  donut: {
    center: {
      numberFontSize: (e2) => `${Math.min(e2 / 100 * 24, 24)}px`,
      titleFontSize: (e2) => `${Math.min(e2 / 100 * 15, 15)}px`,
      titleYPosition: (e2) => Math.min(e2 / 80 * 20, 20),
      numberFormatter: (e2) => Math.floor(e2).toLocaleString()
    },
    alignment: k$2.LEFT
  }
}), qr = h({}, _$1, {
  legend: {
    enabled: false,
    clickable: false
  },
  meter: {
    showLabels: true,
    proportional: null,
    statusBar: {
      percentageIndicator: {
        enabled: true
      }
    }
  }
}), Hc = h({}, qr, {
  legend: {
    enabled: true
  }
}), qc = h({}, _$1, {
  radar: {
    axes: {
      angle: "key",
      value: "value"
    },
    alignment: k$2.LEFT
  },
  tooltip: {
    gridline: {
      enabled: true
    },
    valueFormatter: (e2) => e2 ?? "N/A"
  }
}), zc = h({}, q$1, {
  comboChartTypes: []
}), Qc = h(
  {
    tree: {
      type: X$2.TREE
    }
  },
  _$1,
  {}
), Xc$1 = h({}, _$1, {
  data: h(_$1.data, {
    groupMapsTo: "name"
  })
}), kc = h({}, _$1, Rr, {
  data: h(_$1.data, {
    groupMapsTo: "name"
  })
}), Kc = h({}, _$1, {
  alluvial: {
    data: h(_$1.data, {
      groupMapsTo: "source"
    }),
    nodeAlignment: k$2.CENTER,
    nodePadding: 24,
    monochrome: false,
    nodes: []
  }
}), Vc$1 = h({}, _$1, {
  axes: jr,
  heatmap: {
    divider: {
      state: OE.AUTO
    },
    colorLegend: {
      type: "linear"
    }
  }
}), Zc$1 = h({}, Yr, {
  choropleth: {
    colorLegend: {
      type: "linear"
    }
  }
}), Jc = {
  alluvialChart: Kc,
  areaChart: Br,
  axisChart: Te$1,
  boxplotChart: Fc$1,
  bubbleChart: Nc,
  bulletChart: Wc,
  chart: _$1,
  circlePackChart: kc,
  choroplethChart: Zc$1,
  comboChart: zc,
  donutChart: Bc,
  gaugeChart: Gc,
  groupedBarChart: Ic,
  heatmapChart: Vc$1,
  histogramChart: jc$1,
  lineChart: Gr,
  lollipopChart: Rc,
  meterChart: qr,
  pieChart: Hr,
  proportionalMeterChart: Hc,
  radarChart: qc,
  scatterChart: bt$1,
  simpleBarChart: Dc,
  stackedAreaChart: Uc,
  stackedBarChart: Lc,
  thematicChart: Yr,
  treeChart: Qc,
  treemapChart: Xc$1,
  wordCloudChart: Yc
};
function ff(e2, t2, r2) {
  let n2 = null;
  return function(...a2) {
    const i2 = this;
    i2.mousePosition = pointer(a2[0], r2), clearTimeout(n2), n2 = setTimeout(function() {
      e2.apply(i2, a2);
    }, t2);
  };
}
function df(e2, t2) {
  var a2;
  const r2 = rl(e2), n2 = Object.keys(t2.axes || {});
  (a2 = t2 == null ? void 0 : t2.toolbar) != null && a2.controls && delete r2.toolbar.controls, n2.length === 0 && delete r2.axes;
  for (const i2 in r2.axes)
    if (n2.includes(i2)) {
      const o2 = t2.axes[i2];
      (o2.primary || o2.secondary) && console.warn(
        "`primary` & `secondary` are no longer needed for axis configurations. Read more here https://carbon-design-system.github.io/carbon-charts/?path=/story/docs-tutorials--tabular-data-format"
      );
      const s2 = o2.mapsTo;
      if (s2 == null) {
        const u2 = o2.scaleType;
        u2 == null ? o2.mapsTo = "value" : u2 === w$1.TIME ? o2.mapsTo = "date" : u2 === w$1.LABELS && (o2.mapsTo = "key");
      }
    } else
      delete r2.axes[i2];
  return ef(r2, t2), h(r2, t2);
}
function hf(e2) {
  if (!e2)
    return;
  const t2 = /translate\([0-9]+\.?[0-9]*,[0-9]+\.?[0-9]*\)/, r2 = e2.getAttribute("transform").match(t2);
  if (!r2)
    return null;
  if (r2[0]) {
    const n2 = r2[0].replace(/translate\(/, "").replace(/\)/, "").split(",");
    return {
      tx: n2[0],
      ty: n2[1]
    };
  }
  return null;
}
function mf(e2, t2, r2 = "value", n2 = false) {
  const a2 = e2 / t2.reduce((i2, o2) => i2 + o2[r2], 0) * 100;
  return n2 ? a2 : a2 % 1 !== 0 ? parseFloat(a2.toFixed(1)) : a2;
}
function pf(e2, t2, r2) {
  if (r2 > e2.length)
    return e2;
  if (t2 === h$1.MID_LINE)
    return e2.substr(0, r2 / 2) + "..." + e2.substr(-r2 / 2);
  if (t2 === h$1.FRONT_LINE)
    return "..." + e2.substr(-r2);
  if (t2 === h$1.END_LINE)
    return e2.substr(0, r2) + "...";
}
function ef(e2, t2) {
  const r2 = G$1(e2, "legend", "additionalItems"), n2 = G$1(t2, "legend", "additionalItems");
  if (r2 && n2) {
    const a2 = n2.map((s2) => s2.type), i2 = r2.map((s2) => s2.type), o2 = Ur.filter(
      (s2) => i2.includes(s2.type) && !a2.includes(s2.type)
    );
    e2.legend.additionalItems = o2, t2.legend.additionalItems = cc$1(
      o2,
      n2,
      "name"
    );
  }
}
const G$1 = (e2, ...t2) => {
  let r2 = e2;
  if (r2) {
    for (const n2 of t2)
      if (r2[n2] !== null && r2[n2] !== void 0)
        r2 = r2[n2];
      else
        return null;
    return r2;
  }
  return null;
}, tf = (e2, t2) => t2 === F$2.HORIZONTAL ? {
  y0: e2.x0,
  y1: e2.x1,
  x0: e2.y0,
  x1: e2.y1
} : e2, vf = (e2, t2) => {
  const { x0: r2, x1: n2, y0: a2, y1: i2 } = tf(e2, t2);
  return `M${r2},${a2}L${r2},${i2}L${n2},${i2}L${n2},${a2}L${r2},${a2}`;
};
function yf(e2, t2, r2) {
  return r2 === F$2.VERTICAL ? [e2, t2] : [t2, e2];
}
var zr = /* @__PURE__ */ ((e2) => (e2["15seconds"] = "15seconds", e2.minute = "minute", e2["30minutes"] = "30minutes", e2.hourly = "hourly", e2.daily = "daily", e2.weekly = "weekly", e2.monthly = "monthly", e2.quarterly = "quarterly", e2.yearly = "yearly", e2))(zr || {});
const Qe$2 = [
  ["15seconds", 15 * 1e3],
  ["minute", 60 * 1e3],
  ["30minutes", 30 * 60 * 1e3],
  ["hourly", 60 * 60 * 1e3],
  ["daily", 24 * 60 * 60 * 1e3],
  ["monthly", 30 * 24 * 60 * 60 * 1e3],
  ["quarterly", 3 * 30 * 24 * 60 * 60 * 1e3],
  ["yearly", 12 * 30 * 24 * 60 * 60 * 1e3]
];
function rf(e2, t2, r2, n2, a2) {
  const i2 = t2 === 0, o2 = Number(ke$2(new Date(e2), "c")) === 2, s2 = Number(ke$2(new Date(e2), "q")) === 1, u2 = t2 !== 0 ? r2[t2 - 1] : null;
  switch (n2) {
    case "15seconds":
      return i2 || $e$2(e2) || fe(e2, u2) || W$2(e2);
    case "minute":
      return i2 || $e$2(e2) || fe(e2, u2) || W$2(e2);
    case "30minutes":
      return i2 || $e$2(e2) || fe(e2, u2) || W$2(e2);
    case "hourly":
      return i2 || $e$2(e2) || fe(e2, u2) || W$2(e2);
    case "daily":
      return a2 ? i2 || o2 || W$2(e2) : i2 || fe(e2, u2) || W$2(e2);
    case "weekly":
      return i2 || o2 || W$2(e2);
    case "monthly":
      return i2 || W$2(e2);
    case "quarterly":
      return i2 || s2;
    case "yearly":
      return false;
    default:
      throw new Error(`${n2} is not a valid time interval.`);
  }
}
function bf(e2, t2, r2, n2, a2) {
  const i2 = a2.showDayName, o2 = n2 === "daily" && i2 ? "weekly" : n2, s2 = new Date(e2), u2 = G$1(a2, "timeIntervalFormats")[o2], l2 = G$1(u2, "primary"), f2 = G$1(u2, "secondary");
  let c2 = rf(e2, t2, r2, n2, i2) ? l2 : f2;
  n2 === "15seconds" && s2.getMilliseconds() !== 0 && (c2 = c2.replace("pp", "h:mm:ss.SSS a"));
  const d2 = a2.localeObject;
  return ke$2(s2, c2, { locale: d2 });
}
function Ie$2(e2) {
  const t2 = new Date(e2);
  return {
    M: t2.getMonth() + 1,
    // month: 1-12
    d: t2.getDate(),
    // day of the month: 1-31
    H: t2.getHours(),
    // 24-hour clock: 0-23
    m: t2.getMinutes(),
    // minute: 0-59
    s: t2.getSeconds()
    // seconds: 0-59
  };
}
function nf(e2) {
  if (e2)
    return e2.slice(1).map((t2, r2) => t2 - e2[r2]);
}
function af(e2) {
  const t2 = Qe$2.reduce((r2, [, n2], a2) => {
    const i2 = Qe$2[r2][1], o2 = Math.abs(i2 - e2), s2 = Math.abs(n2 - e2);
    return o2 < s2 ? r2 : a2;
  }, 0);
  return Qe$2[t2][0];
}
function wf(e2, t2) {
  if (zr[t2])
    return t2;
  if (e2.length === 1)
    return "15seconds";
  const r2 = nf(e2), n2 = min(r2);
  return af(n2);
}
function $e$2(e2) {
  const { s: t2, m: r2, H: n2 } = Ie$2(e2);
  return n2 === 0 && r2 === 0 && t2 === 0;
}
function fe(e2, t2) {
  const r2 = Ie$2(e2).M, n2 = Ie$2(t2).M;
  return r2 !== n2;
}
function W$2(e2) {
  const { M: t2, d: r2, s: n2, m: a2, H: i2 } = Ie$2(e2);
  return t2 === 1 && r2 === 1 && i2 === 0 && a2 === 0 && n2 === 0;
}
function Tf(e2) {
  return e2 === void 0 ? "" : e2.toISOString();
}
var r = /* @__PURE__ */ ((c2) => (c2.GRAPHICS_DOCUMENT = "graphics-document", c2.GRAPHICS_OBJECT = "graphics-object", c2.GRAPHICS_SYMBOL = "graphics-symbol", c2.GROUP = "group", c2.DOCUMENT = "document", c2.CHECKBOX = "checkbox", c2.BUTTON = "button", c2.MENU = "menu", c2.MENU_ITEM = "menuitem", c2.IMG = "img", c2))(r || {});
function i(a2, e2) {
  return a2 && Xl(a2, e2, Ue$2);
}
function k$1(a2, e2) {
  return function(r2, n2) {
    if (r2 == null)
      return r2;
    if (!ye$1(r2))
      return a2(r2, n2);
    for (var u2 = r2.length, s2 = e2 ? u2 : -1, b2 = Object(r2); (e2 ? s2-- : ++s2 < u2) && n2(b2[s2], s2, b2) !== false; )
      ;
    return r2;
  };
}
var E$1 = k$1(i);
const v$1 = E$1;
function et$2(h2, t2, e2, s2) {
  for (var a2 = -1, o2 = h2 == null ? 0 : h2.length; ++a2 < o2; ) {
    var i2 = h2[a2];
    t2(s2, i2, e2(i2), h2);
  }
  return s2;
}
function st$1(h2, t2, e2, s2) {
  return v$1(h2, function(a2, o2, i2) {
    t2(s2, a2, e2(a2), i2);
  }), s2;
}
function at$2(h2, t2) {
  return function(e2, s2) {
    var a2 = S$1(e2) ? et$2 : st$1, o2 = t2 ? t2() : {};
    return a2(e2, h2, ql(s2), o2);
  };
}
function ot$2(h2) {
  for (var t2 = -1, e2 = h2 == null ? 0 : h2.length, s2 = {}; ++t2 < e2; ) {
    var a2 = h2[t2];
    s2[a2[0]] = a2[1];
  }
  return s2;
}
var it$2 = Object.prototype, nt$1 = it$2.hasOwnProperty, rt$2 = at$2(function(h2, t2, e2) {
  nt$1.call(h2, e2) ? h2[e2].push(t2) : st$2(h2, e2, [t2]);
});
const lt$2 = rt$2;
class m {
  constructor(t2) {
    this.state = {
      options: {}
    }, this.colorScale = {}, this.colorClassNames = {}, this.services = t2;
  }
  getAllDataFromDomain(t2) {
    if (!this.getData())
      return null;
    const e2 = this.getOptions();
    let s2 = this.getData();
    const a2 = this.getDataGroups(), { groupMapsTo: o2 } = G$1(e2, "data"), i2 = G$1(e2, "axes");
    return t2 && (s2 = s2.filter((n2) => t2.includes(n2[o2]))), i2 && Object.keys(i2).forEach((n2) => {
      const r2 = i2[n2].mapsTo, l2 = i2[n2].scaleType;
      if ((l2 === w$1.LINEAR || l2 === w$1.LOG) && (s2 = s2.map((c2) => ({
        ...c2,
        [r2]: c2[r2] === null ? c2[r2] : Number(c2[r2])
      }))), r2 && i2[n2].domain)
        if (l2 === w$1.LABELS)
          s2 = s2.filter(
            (c2) => i2[n2].domain.includes(c2[r2])
          );
        else {
          const [c2, p2] = i2[n2].domain;
          s2 = s2.filter(
            (g2) => !(r2 in g2) || g2[r2] >= c2 && g2[r2] <= p2
          );
        }
    }), s2.filter((n2) => a2.find((r2) => r2.name === n2[o2]));
  }
  /**
   * Charts that have group configs passed into them, only want to retrieve the display data relevant to that chart
   * @param groups the included datasets for the particular chart
   */
  getDisplayData(t2) {
    if (!this.get("data"))
      return null;
    const { ACTIVE: e2 } = yc.items.status, s2 = this.getDataGroups(t2), { groupMapsTo: a2 } = this.getOptions().data;
    return this.getAllDataFromDomain(t2).filter((i2) => s2.find(
      (n2) => n2.name === i2[a2] && n2.status === e2
    ));
  }
  getData() {
    return this.get("data");
  }
  isDataEmpty() {
    return !this.getData().length;
  }
  /**
   *
   * @param newData The new raw data to be set
   */
  setData(t2) {
    const e2 = this.sanitize(rl(t2)), s2 = this.generateDataGroups(e2);
    return this.set({
      data: e2,
      dataGroups: s2
    }), e2;
  }
  getDataGroups(t2) {
    return G$1(this.getOptions(), "data", "loading") ? [] : t2 ? this.get("dataGroups").filter((s2) => t2.includes(s2.name)) : this.get("dataGroups");
  }
  getActiveDataGroups(t2) {
    const { ACTIVE: e2 } = yc.items.status;
    return this.getDataGroups(t2).filter((s2) => s2.status === e2);
  }
  getDataGroupNames(t2) {
    return this.getDataGroups(t2).map((s2) => s2.name);
  }
  getActiveDataGroupNames(t2) {
    return this.getActiveDataGroups(t2).map((s2) => s2.name);
  }
  aggregateBinDataByGroup(t2) {
    return lt$2(t2, "group");
  }
  getBinConfigurations() {
    const t2 = this.getDisplayData(), e2 = this.getOptions(), s2 = this.services.cartesianScales.getMainXAxisPosition(), a2 = this.services.cartesianScales.getDomainIdentifier(), o2 = e2.axes[s2], { groupMapsTo: i2 } = e2.data, { bins: n2 = vc$1.defaultBins } = o2, r2 = Array.isArray(n2), l2 = bin().value((d2) => d2[a2]).thresholds(n2)(t2);
    if (r2)
      l2[l2.length - 1].x1 = n2[n2.length - 1];
    else {
      const d2 = l2[0].x1 - l2[0].x0;
      l2[l2.length - 1].x1 = +l2[l2.length - 1].x0 + d2;
    }
    const c2 = r2 ? [n2[0], n2[n2.length - 1]] : [l2[0].x0, l2[l2.length - 1].x1], p2 = Array.from(new Set(t2.map((d2) => d2[i2]))), g2 = [];
    return l2.forEach((d2) => {
      const f2 = `${d2.x0}-${d2.x1}`, T2 = this.aggregateBinDataByGroup(d2);
      p2.forEach((C2) => {
        g2.push({
          group: C2,
          key: f2,
          value: T2[C2] || 0,
          bin: d2.x0
        });
      });
    }), {
      bins: l2,
      binsDomain: c2
    };
  }
  getBinnedStackedData() {
    const t2 = this.getOptions(), { groupMapsTo: e2 } = t2.data, s2 = this.getActiveDataGroupNames(), { bins: a2 } = this.getBinConfigurations(), o2 = this.getDataValuesGroupedByKeys({
      bins: a2
    });
    return stack().keys(s2)(o2).map((i2, n2) => Object.keys(i2).filter((r2) => !isNaN(r2)).map((r2) => {
      const l2 = i2[r2];
      return l2[e2] = s2[n2], l2;
    }));
  }
  getGroupedData(t2) {
    const e2 = this.getDisplayData(t2), s2 = {}, { groupMapsTo: a2 } = this.getOptions().data;
    return e2.map((o2) => {
      const i2 = o2[a2];
      s2[i2] !== null && s2[i2] !== void 0 ? s2[i2].push(o2) : s2[i2] = [o2];
    }), Object.keys(s2).map((o2) => ({
      name: o2,
      data: s2[o2]
    }));
  }
  getStackKeys({ bins: t2 = null, groups: e2 = null } = { bins: null, groups: null }) {
    const s2 = this.getOptions(), a2 = this.getDisplayData(e2);
    let o2;
    t2 ? o2 = t2.map((r2) => `${r2.x0}-${r2.x1}`) : o2 = lf(
      a2.map((r2) => {
        const l2 = this.services.cartesianScales.getDomainIdentifier(r2);
        return r2[l2] instanceof Date ? Tf(r2[l2]) : r2[l2] && typeof r2[l2].toString == "function" ? r2[l2].toString() : r2[l2];
      })
    );
    const i2 = this.services.cartesianScales.domainAxisPosition, n2 = s2.axes[i2].scaleType;
    return n2 === w$1.TIME ? o2.sort((r2, l2) => {
      const c2 = new Date(r2), p2 = new Date(l2);
      return c2 - p2;
    }) : (n2 === w$1.LOG || n2 === w$1.LINEAR) && o2.sort((r2, l2) => r2 - l2), o2;
  }
  getDataValuesGroupedByKeys({ bins: t2 = null, groups: e2 = null }) {
    const s2 = this.getOptions(), { groupMapsTo: a2 } = s2.data, o2 = this.getDisplayData(e2), i2 = this.getDataGroupNames(), n2 = this.getStackKeys({ bins: t2, groups: e2 });
    return t2 ? n2.map((r2) => {
      const [l2, c2] = r2.split("-"), p2 = { x0: l2, x1: c2 }, g2 = t2.find((d2) => d2.x0.toString() === l2.toString());
      return i2.forEach((d2) => {
        p2[d2] = g2.filter(
          (f2) => f2[a2] === d2
        ).length;
      }), p2;
    }) : n2.map((r2) => {
      const l2 = { sharedStackKey: r2 };
      return i2.forEach((c2) => {
        const p2 = o2.find((d2) => {
          const f2 = this.services.cartesianScales.getDomainIdentifier(d2);
          return d2[a2] === c2 && Object.prototype.hasOwnProperty.call(d2, f2) && (d2[f2] instanceof Date ? Tf(d2[f2]) === r2 : d2[f2].toString() === r2);
        }), g2 = this.services.cartesianScales.getRangeIdentifier(l2);
        l2[c2] = p2 ? p2[g2] : null;
      }), l2;
    });
  }
  getStackedData({ percentage: t2 = false, groups: e2 = null, divergent: s2 = false }) {
    const a2 = this.getOptions(), { groupMapsTo: o2 } = a2.data, i2 = this.getActiveDataGroupNames(e2), n2 = this.getDataValuesGroupedByKeys({
      groups: e2
    });
    if (t2) {
      const l2 = ot$2(n2.map((c2) => [c2.sharedStackKey, 0]));
      n2.forEach((c2) => {
        i2.forEach((p2) => {
          l2[c2.sharedStackKey] += c2[p2];
        });
      }), n2.forEach((c2) => {
        i2.forEach((p2) => {
          const g2 = l2[c2.sharedStackKey];
          l2[c2.sharedStackKey] ? c2[p2] = c2[p2] / g2 * 100 : c2[p2] = 0;
        });
      });
    }
    return (s2 ? stack().offset(stackOffsetDiverging) : stack()).keys(i2)(n2).map((l2, c2) => Object.keys(l2).filter((p2) => !isNaN(p2)).map((p2) => {
      const g2 = l2[p2];
      return g2[o2] = i2[c2], g2;
    }));
  }
  /**
   * @return {Object} The chart's options
   */
  getOptions() {
    return this.state.options;
  }
  set(t2, e2) {
    this.state = Object.assign({}, this.state, t2);
    const s2 = Object.assign(
      { skipUpdate: false, animate: true },
      // default configs
      e2
    );
    s2.skipUpdate || this.update(s2.animate);
  }
  get(t2) {
    return t2 ? this.state[t2] : this.state;
  }
  /**
   *
   * @param newOptions New options to be set
   */
  setOptions(t2) {
    const e2 = this.getOptions();
    ef(e2, t2), this.set({
      options: h(e2, t2)
    });
  }
  /**
   *
   * Updates miscellanous information within the model
   * such as the color scales, or the legend data labels
   */
  update(t2 = true) {
    this.getDisplayData() && (this.updateAllDataGroups(), this.setCustomColorScale(), this.setColorClassNames(), this.services.events.dispatchEvent(oE.Model.UPDATE, { animate: t2 }));
  }
  /*
   * Data labels
   */
  toggleDataLabel(t2) {
    const { ACTIVE: e2, DISABLED: s2 } = yc.items.status, a2 = this.getDataGroups(), o2 = a2.some((c2) => c2.status === s2), i2 = a2.filter((c2) => c2.status === e2);
    if (o2)
      if (i2.length === 1 && i2[0].name === t2)
        a2.forEach((c2, p2) => {
          a2[p2].status = e2;
        });
      else {
        const c2 = a2.findIndex((p2) => p2.name === t2);
        a2[c2].status = a2[c2].status === s2 ? e2 : s2;
      }
    else
      a2.forEach((c2, p2) => {
        a2[p2].status = c2.name === t2 ? e2 : s2;
      });
    const n2 = a2.filter((c2) => c2.status === e2), r2 = this.getOptions();
    a2.some((c2) => c2.status === s2) ? r2.data.selectedGroups = n2.map((c2) => c2.name) : r2.data.selectedGroups = [], this.services.events.dispatchEvent(oE.Legend.ITEMS_UPDATE, {
      dataGroups: a2
    }), this.set({
      dataGroups: a2
    });
  }
  /**
   * Should the data point be filled?
   * @param group
   * @param key
   * @param data
   * @param defaultFilled the default for this chart
   */
  getIsFilled(t2, e2, s2, a2) {
    const o2 = this.getOptions();
    return o2.getIsFilled ? o2.getIsFilled(t2, e2, s2, a2) : a2;
  }
  getFillColor(t2, e2, s2) {
    const a2 = this.getOptions(), o2 = G$1(this.colorScale, t2);
    return a2.getFillColor ? a2.getFillColor(t2, e2, s2, o2) : o2;
  }
  getStrokeColor(t2, e2, s2) {
    const a2 = this.getOptions(), o2 = G$1(this.colorScale, t2);
    return a2.getStrokeColor ? a2.getStrokeColor(t2, e2, s2, o2) : o2;
  }
  isUserProvidedColorScaleValid() {
    const t2 = G$1(this.getOptions(), "color", "scale"), e2 = this.getDataGroups();
    return t2 == null || Object.keys(t2).length == 0 ? false : e2.some(
      (s2) => Object.keys(t2).includes(s2.name)
    );
  }
  getColorClassName(t2) {
    const e2 = this.colorClassNames(t2.dataGroupName);
    let s2 = t2.originalClassName;
    return t2.classNameTypes.forEach(
      (a2) => s2 = t2.originalClassName ? `${s2} ${a2}-${e2}` : `${a2}-${e2}`
    ), s2 || "";
  }
  /**
   * For charts that might hold an associated status for their dataset
   */
  getStatus() {
    return null;
  }
  getAllDataGroupsNames() {
    return this.allDataGroups;
  }
  /**
   * Converts data provided in the older format to tabular
   *
   */
  transformToTabularData(t2) {
    console.warn(
      "We've updated the charting data format to be tabular by default. The current format you're using is deprecated and will be removed in v1.0, read more here https://carbon-design-system.github.io/carbon-charts/?path=/story/docs-tutorials--tabular-data-format"
    );
    const e2 = [], { datasets: s2, labels: a2 } = t2;
    return s2.forEach((o2) => {
      o2.data.forEach((i2, n2) => {
        let r2;
        const l2 = G$1(o2, "label");
        if (l2 === null) {
          const p2 = G$1(a2, n2);
          p2 ? r2 = p2 : r2 = "Ungrouped";
        } else
          r2 = l2;
        const c2 = {
          group: r2,
          key: a2[n2]
        };
        isNaN(i2) ? (c2.value = i2.value, c2.date = i2.date) : c2.value = i2, e2.push(c2);
      });
    }), e2;
  }
  getTabularDataArray() {
    return [];
  }
  exportToCSV() {
    const t2 = this.getTabularDataArray().map(
      (n2) => n2.map((r2) => `"${r2 === "&ndash;" ? "–" : r2}"`)
    );
    let e2 = "", s2 = "";
    t2.forEach(function(n2, r2) {
      s2 = n2.join(","), e2 += r2 < t2.length ? s2 + `
` : s2;
    });
    const a2 = this.getOptions();
    let o2 = "myChart";
    const i2 = G$1(
      a2,
      "fileDownload",
      "fileName"
    );
    typeof i2 == "function" ? o2 = i2("csv") : typeof i2 == "string" && (o2 = i2), this.services.files.downloadCSV(e2, `${o2}.csv`);
  }
  getTabularData(t2) {
    return Array.isArray(t2) ? t2 : this.transformToTabularData(t2);
  }
  sanitize(t2) {
    return t2 = this.getTabularData(t2), t2;
  }
  /*
   * Data groups
   */
  updateAllDataGroups() {
    this.allDataGroups ? this.getDataGroupNames().forEach((t2) => {
      this.allDataGroups.indexOf(t2) === -1 && this.allDataGroups.push(t2);
    }) : this.allDataGroups = this.getDataGroupNames();
  }
  generateDataGroups(t2) {
    const { groupMapsTo: e2 } = this.getOptions().data, { ACTIVE: s2, DISABLED: a2 } = yc.items.status, o2 = this.getOptions(), i2 = lf(t2.map((r2) => r2[e2]));
    o2.data.selectedGroups.length && (o2.data.selectedGroups.every(
      (l2) => i2.includes(l2)
    ) || (o2.data.selectedGroups = []));
    const n2 = (r2) => !o2.data.selectedGroups.length || o2.data.selectedGroups.includes(r2) ? s2 : a2;
    return i2.map((r2) => ({
      name: r2,
      status: n2(r2)
    }));
  }
  /*
   * Fill scales
   */
  setCustomColorScale() {
    if (!this.isUserProvidedColorScaleValid())
      return;
    const t2 = this.getOptions(), e2 = G$1(t2, "color", "scale");
    Object.keys(e2).forEach((a2) => {
      this.allDataGroups.includes(a2) || console.warn(`"${a2}" does not exist in data groups.`);
    }), this.allDataGroups.filter(
      (a2) => e2[a2]
    ).forEach(
      (a2) => this.colorScale[a2] = e2[a2]
    );
  }
  /*
   * Color palette
   */
  setColorClassNames() {
    const t2 = G$1(this.getOptions(), "color", "pairing");
    let e2 = G$1(t2, "numberOfVariants");
    (!e2 || e2 < this.allDataGroups.length) && (e2 = this.allDataGroups.length);
    let s2 = G$1(t2, "option");
    const a2 = mc$1.pairingOptions, o2 = e2 > 5 ? 14 : e2, i2 = `${o2}-color`;
    s2 = s2 <= a2[i2] ? s2 : 1;
    const n2 = this.allDataGroups.map(
      (r2, l2) => `${o2}-${s2}-${l2 % 14 + 1}`
    );
    this.colorClassNames = scaleOrdinal().range(n2).domain(this.allDataGroups);
  }
}
class S extends m {
  // can't be protected as it's used by two-dimensional-axes.ts
  constructor(t2) {
    super(t2), this.axisFlavor = aE.DEFAULT;
  }
  // get the scales information
  // needed for getTabularArray()
  assignRangeAndDomains() {
    const { cartesianScales: t2 } = this.services, e2 = this.getOptions(), s2 = t2.isDualAxes(), a2 = {
      primaryDomain: t2.domainAxisPosition,
      primaryRange: t2.rangeAxisPosition,
      secondaryDomain: null,
      secondaryRange: null
    };
    return s2 && (a2.secondaryDomain = t2.secondaryDomainAxisPosition, a2.secondaryRange = t2.secondaryRangeAxisPosition), Object.keys(a2).forEach((o2) => {
      const i2 = a2[o2];
      t2.scales[i2] ? a2[o2] = {
        position: i2,
        label: t2.getScaleLabel(i2),
        identifier: G$1(e2, "axes", i2, "mapsTo")
      } : a2[o2] = null;
    }), a2;
  }
  getTabularDataArray() {
    const t2 = this.getDisplayData(), e2 = this.getOptions(), { groupMapsTo: s2 } = e2.data, { cartesianScales: a2 } = this.services, { primaryDomain: o2, primaryRange: i2, secondaryDomain: n2, secondaryRange: r2 } = this.assignRangeAndDomains(), l2 = a2.getDomainAxisScaleType();
    let c2;
    return l2 === w$1.TIME && (c2 = (g2) => ke$2(g2, "MMM d, yyyy")), [
      [
        "Group",
        o2.label,
        i2.label,
        ...n2 ? [n2.label] : [],
        ...r2 ? [r2.label] : []
      ],
      ...t2.map((g2) => [
        g2[s2],
        g2[o2.identifier] === null ? "&ndash;" : c2 ? c2(g2[o2.identifier]) : g2[o2.identifier],
        g2[i2.identifier] === null || isNaN(g2[i2.identifier]) ? "&ndash;" : g2[i2.identifier].toLocaleString(),
        ...n2 ? [
          g2[n2.identifier] === null ? "&ndash;" : g2[n2.identifier]
        ] : [],
        ...r2 ? [
          g2[r2.identifier] === null || isNaN(g2[r2.identifier]) ? "&ndash;" : g2[r2.identifier]
        ] : []
      ])
    ];
  }
  setData(t2) {
    let e2;
    if (t2 && (e2 = super.setData(t2), G$1(this.getOptions(), "zoomBar", f.TOP, "enabled"))) {
      const s2 = G$1(
        this.getOptions(),
        "zoomBar",
        f.TOP,
        "data"
      );
      this.setZoomBarData(s2);
    }
    return e2;
  }
  /**
   * @param zoomBarData any special zoom bar data to use instead of the model data
   */
  setZoomBarData(t2) {
    const e2 = t2 ? this.sanitize(rl(t2)) : this.getDisplayData();
    let s2 = e2;
    const { cartesianScales: a2 } = this.services;
    if (e2 && a2.domainAxisPosition && a2.rangeAxisPosition) {
      const o2 = a2.getDomainIdentifier(), i2 = a2.getRangeIdentifier();
      let n2 = e2.map((r2) => r2[o2].getTime());
      n2 = lf(n2).sort(), s2 = n2.map((r2) => {
        let l2 = 0;
        const c2 = {};
        return e2.forEach((p2) => {
          p2[o2].getTime() === r2 && (l2 += p2[i2]);
        }), c2[o2] = new Date(r2), c2[i2] = l2, c2;
      });
    }
    this.set({ zoomBarData: s2 });
  }
  getZoomBarData() {
    return this.get("zoomBarData");
  }
  sanitizeDateValues(t2) {
    const e2 = this.getOptions();
    if (!e2.axes)
      return t2;
    const s2 = [];
    return Object.keys(f).forEach((a2) => {
      const o2 = f[a2], i2 = e2.axes[o2];
      if (i2 && i2.scaleType === w$1.TIME) {
        const n2 = i2.mapsTo;
        (n2 !== null || n2 !== void 0) && s2.push(n2);
      }
    }), s2.length > 0 && t2.forEach((a2) => {
      s2.forEach((o2) => {
        G$1(a2, o2, "getTime") === null && (a2[o2] = new Date(a2[o2]));
      });
    }), t2;
  }
  sanitize(t2) {
    return t2 = super.sanitize(t2), t2 = this.sanitizeDateValues(t2), t2;
  }
}
let yt$2 = class yt extends m {
  constructor(t2) {
    super(t2);
  }
  getTabularData(t2) {
    const e2 = super.getTabularData(t2);
    return t2 !== e2 && e2.forEach((s2) => {
      s2.key && s2.key !== s2.group && (s2.group = s2.key);
    }), e2;
  }
  getTabularDataArray() {
    const t2 = this.getDisplayData(), e2 = this.getOptions(), { groupMapsTo: s2 } = e2.data;
    return [
      ["Group", "Value"],
      ...t2.map((o2) => [
        o2[s2],
        o2.value === null ? "&ndash;" : o2.value.toLocaleString()
      ])
    ];
  }
  sanitize(t2) {
    return this.getTabularData(t2).sort((s2, a2) => a2.value - s2.value);
  }
};
var me = /\s/;
function ge(t2) {
  for (var e2 = t2.length; e2-- && me.test(t2.charAt(e2)); )
    ;
  return e2;
}
var pe = /^\s+/;
function ye(t2) {
  return t2 && t2.slice(0, ge(t2) + 1).replace(pe, "");
}
var q = 0 / 0, we$1 = /^[-+]0x[0-9a-f]+$/i, Se = /^0b[01]+$/i, Ee = /^0o[0-7]+$/i, be$1 = parseInt;
function j$1(t2) {
  if (typeof t2 == "number")
    return t2;
  if (nt$2(t2))
    return q;
  if (I$1(t2)) {
    var e2 = typeof t2.valueOf == "function" ? t2.valueOf() : t2;
    t2 = I$1(e2) ? e2 + "" : e2;
  }
  if (typeof t2 != "string")
    return t2 === 0 ? t2 : +t2;
  t2 = ye(t2);
  var n2 = Se.test(t2);
  return n2 || Ee.test(t2) ? be$1(t2.slice(2), n2 ? 2 : 8) : we$1.test(t2) ? q : +t2;
}
var xe = function() {
  return D$1.Date.now();
};
const M$1 = xe;
var Re = "Expected a function", Ce$1 = Math.max, Te = Math.min;
function Ie$1(t2, e2, n2) {
  var r2, i2, s2, a2, c2, o2, u2 = 0, f2 = false, d2 = false, h2 = true;
  if (typeof t2 != "function")
    throw new TypeError(Re);
  e2 = j$1(e2) || 0, I$1(n2) && (f2 = !!n2.leading, d2 = "maxWait" in n2, s2 = d2 ? Ce$1(j$1(n2.maxWait) || 0, e2) : s2, h2 = "trailing" in n2 ? !!n2.trailing : h2);
  function w2(l2) {
    var S2 = r2, C2 = i2;
    return r2 = i2 = void 0, u2 = l2, a2 = t2.apply(C2, S2), a2;
  }
  function R2(l2) {
    return u2 = l2, c2 = setTimeout(L2, e2), f2 ? w2(l2) : a2;
  }
  function I2(l2) {
    var S2 = l2 - o2, C2 = l2 - u2, U2 = e2 - S2;
    return d2 ? Te(U2, s2 - C2) : U2;
  }
  function z2(l2) {
    var S2 = l2 - o2, C2 = l2 - u2;
    return o2 === void 0 || S2 >= e2 || S2 < 0 || d2 && C2 >= s2;
  }
  function L2() {
    var l2 = M$1();
    if (z2(l2))
      return G2(l2);
    c2 = setTimeout(L2, I2(l2));
  }
  function G2(l2) {
    return c2 = void 0, h2 && r2 ? w2(l2) : (r2 = i2 = void 0, a2);
  }
  function ue2() {
    c2 !== void 0 && clearTimeout(c2), u2 = 0, r2 = o2 = i2 = c2 = void 0;
  }
  function he2() {
    return c2 === void 0 ? a2 : G2(M$1());
  }
  function $2() {
    var l2 = M$1(), S2 = z2(l2);
    if (r2 = arguments, i2 = this, o2 = l2, S2) {
      if (c2 === void 0)
        return R2(o2);
      if (d2)
        return clearTimeout(c2), c2 = setTimeout(L2, e2), w2(o2);
    }
    return c2 === void 0 && (c2 = setTimeout(L2, e2)), a2;
  }
  return $2.cancel = ue2, $2.flush = he2, $2;
}
function Le(t2, e2) {
  if (t2.match(/^[a-z]+:\/\//i))
    return t2;
  if (t2.match(/^\/\//))
    return window.location.protocol + t2;
  if (t2.match(/^[a-z]+:/i))
    return t2;
  const n2 = document.implementation.createHTMLDocument(), r2 = n2.createElement("base"), i2 = n2.createElement("a");
  return n2.head.appendChild(r2), n2.body.appendChild(i2), e2 && (r2.href = e2), i2.href = t2, i2.href;
}
const De$1 = (() => {
  let t2 = 0;
  const e2 = () => (
    // eslint-disable-next-line no-bitwise
    `0000${(Math.random() * 36 ** 4 << 0).toString(36)}`.slice(-4)
  );
  return () => (t2 += 1, `u${e2()}${t2}`);
})();
function y(t2) {
  const e2 = [];
  for (let n2 = 0, r2 = t2.length; n2 < r2; n2++)
    e2.push(t2[n2]);
  return e2;
}
function v(t2, e2) {
  const r2 = (t2.ownerDocument.defaultView || window).getComputedStyle(t2).getPropertyValue(e2);
  return r2 ? parseFloat(r2.replace("px", "")) : 0;
}
function ve(t2) {
  const e2 = v(t2, "border-left-width"), n2 = v(t2, "border-right-width");
  return t2.clientWidth + e2 + n2;
}
function Ae(t2) {
  const e2 = v(t2, "border-top-width"), n2 = v(t2, "border-bottom-width");
  return t2.clientHeight + e2 + n2;
}
function ee$1(t2, e2 = {}) {
  const n2 = e2.width || ve(t2), r2 = e2.height || Ae(t2);
  return { width: n2, height: r2 };
}
function Fe$1() {
  let t2, e2;
  try {
    e2 = process;
  } catch {
  }
  const n2 = e2 && e2.env ? e2.env.devicePixelRatio : null;
  return n2 && (t2 = parseInt(n2, 10), Number.isNaN(t2) && (t2 = 1)), t2 || window.devicePixelRatio || 1;
}
const p = 16384;
function $e$1(t2) {
  (t2.width > p || t2.height > p) && (t2.width > p && t2.height > p ? t2.width > t2.height ? (t2.height *= p / t2.width, t2.width = p) : (t2.width *= p / t2.height, t2.height = p) : t2.width > p ? (t2.height *= p / t2.width, t2.width = p) : (t2.width *= p / t2.height, t2.height = p));
}
function A(t2) {
  return new Promise((e2, n2) => {
    const r2 = new Image();
    r2.decode = () => e2(r2), r2.onload = () => e2(r2), r2.onerror = n2, r2.crossOrigin = "anonymous", r2.decoding = "async", r2.src = t2;
  });
}
async function Pe(t2) {
  return Promise.resolve().then(() => new XMLSerializer().serializeToString(t2)).then(encodeURIComponent).then((e2) => `data:image/svg+xml;charset=utf-8,${e2}`);
}
async function Me$1(t2, e2, n2) {
  const r2 = "http://www.w3.org/2000/svg", i2 = document.createElementNS(r2, "svg"), s2 = document.createElementNS(r2, "foreignObject");
  return i2.setAttribute("width", `${e2}`), i2.setAttribute("height", `${n2}`), i2.setAttribute("viewBox", `0 0 ${e2} ${n2}`), s2.setAttribute("width", "100%"), s2.setAttribute("height", "100%"), s2.setAttribute("x", "0"), s2.setAttribute("y", "0"), s2.setAttribute("externalResourcesRequired", "true"), i2.appendChild(s2), s2.appendChild(t2), Pe(i2);
}
const g = (t2, e2) => {
  if (t2 instanceof e2)
    return true;
  const n2 = Object.getPrototypeOf(t2);
  return n2 === null ? false : n2.constructor.name === e2.name || g(n2, e2);
};
function He$1(t2) {
  const e2 = t2.getPropertyValue("content");
  return `${t2.cssText} content: '${e2.replace(/'|"/g, "")}';`;
}
function Oe(t2) {
  return y(t2).map((e2) => {
    const n2 = t2.getPropertyValue(e2), r2 = t2.getPropertyPriority(e2);
    return `${e2}: ${n2}${r2 ? " !important" : ""};`;
  }).join(" ");
}
function Be$1(t2, e2, n2) {
  const r2 = `.${t2}:${e2}`, i2 = n2.cssText ? He$1(n2) : Oe(n2);
  return document.createTextNode(`${r2}{${i2}}`);
}
function N(t2, e2, n2) {
  const r2 = window.getComputedStyle(t2, n2), i2 = r2.getPropertyValue("content");
  if (i2 === "" || i2 === "none")
    return;
  const s2 = De$1();
  try {
    e2.className = `${e2.className} ${s2}`;
  } catch {
    return;
  }
  const a2 = document.createElement("style");
  a2.appendChild(Be$1(s2, n2, r2)), e2.appendChild(a2);
}
function ke$1(t2, e2) {
  N(t2, e2, ":before"), N(t2, e2, ":after");
}
const X = "application/font-woff", J$1 = "image/jpeg", Ve$1 = {
  woff: X,
  woff2: X,
  ttf: "application/font-truetype",
  eot: "application/vnd.ms-fontobject",
  png: "image/png",
  jpg: J$1,
  jpeg: J$1,
  gif: "image/gif",
  tiff: "image/tiff",
  svg: "image/svg+xml",
  webp: "image/webp"
};
function We$2(t2) {
  const e2 = /\.([^./]*?)$/g.exec(t2);
  return e2 ? e2[1] : "";
}
function V(t2) {
  const e2 = We$2(t2).toLowerCase();
  return Ve$1[e2] || "";
}
function ze$1(t2) {
  return t2.split(/,/)[1];
}
function B(t2) {
  return t2.search(/^(data:)/) !== -1;
}
function te(t2, e2) {
  return `data:${e2};base64,${t2}`;
}
async function ne$1(t2, e2, n2) {
  const r2 = await fetch(t2, e2);
  if (r2.status === 404)
    throw new Error(`Resource "${r2.url}" not found`);
  const i2 = await r2.blob();
  return new Promise((s2, a2) => {
    const c2 = new FileReader();
    c2.onerror = a2, c2.onloadend = () => {
      try {
        s2(n2({ res: r2, result: c2.result }));
      } catch (o2) {
        a2(o2);
      }
    }, c2.readAsDataURL(i2);
  });
}
const H = {};
function Ge$1(t2, e2, n2) {
  let r2 = t2.replace(/\?.*/, "");
  return n2 && (r2 = t2), /ttf|otf|eot|woff2?/i.test(r2) && (r2 = r2.replace(/.*\//, "")), e2 ? `[${e2}]${r2}` : r2;
}
async function W$1(t2, e2, n2) {
  const r2 = Ge$1(t2, e2, n2.includeQueryParams);
  if (H[r2] != null)
    return H[r2];
  n2.cacheBust && (t2 += (/\?/.test(t2) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime());
  let i2;
  try {
    const s2 = await ne$1(t2, n2.fetchRequestInit, ({ res: a2, result: c2 }) => (e2 || (e2 = a2.headers.get("Content-Type") || ""), ze$1(c2)));
    i2 = te(s2, e2);
  } catch (s2) {
    i2 = n2.imagePlaceholder || "";
    let a2 = `Failed to fetch resource: ${t2}`;
    s2 && (a2 = typeof s2 == "string" ? s2 : s2.message), a2 && console.warn(a2);
  }
  return H[r2] = i2, i2;
}
async function Ue$1(t2) {
  const e2 = t2.toDataURL();
  return e2 === "data:," ? t2.cloneNode(false) : A(e2);
}
async function _e$1(t2, e2) {
  if (t2.currentSrc) {
    const s2 = document.createElement("canvas"), a2 = s2.getContext("2d");
    s2.width = t2.clientWidth, s2.height = t2.clientHeight, a2 == null || a2.drawImage(t2, 0, 0, s2.width, s2.height);
    const c2 = s2.toDataURL();
    return A(c2);
  }
  const n2 = t2.poster, r2 = V(n2), i2 = await W$1(n2, r2, e2);
  return A(i2);
}
async function qe$2(t2) {
  var e2;
  try {
    if (!((e2 = t2 == null ? void 0 : t2.contentDocument) === null || e2 === void 0) && e2.body)
      return await F(t2.contentDocument.body, {}, true);
  } catch {
  }
  return t2.cloneNode(false);
}
async function je$1(t2, e2) {
  return g(t2, HTMLCanvasElement) ? Ue$1(t2) : g(t2, HTMLVideoElement) ? _e$1(t2, e2) : g(t2, HTMLIFrameElement) ? qe$2(t2) : t2.cloneNode(false);
}
const Ne$1 = (t2) => t2.tagName != null && t2.tagName.toUpperCase() === "SLOT";
async function Xe$2(t2, e2, n2) {
  var r2, i2;
  let s2 = [];
  return Ne$1(t2) && t2.assignedNodes ? s2 = y(t2.assignedNodes()) : g(t2, HTMLIFrameElement) && (!((r2 = t2.contentDocument) === null || r2 === void 0) && r2.body) ? s2 = y(t2.contentDocument.body.childNodes) : s2 = y(((i2 = t2.shadowRoot) !== null && i2 !== void 0 ? i2 : t2).childNodes), s2.length === 0 || g(t2, HTMLVideoElement) || await s2.reduce((a2, c2) => a2.then(() => F(c2, n2)).then((o2) => {
    o2 && e2.appendChild(o2);
  }), Promise.resolve()), e2;
}
function Je$1(t2, e2) {
  const n2 = e2.style;
  if (!n2)
    return;
  const r2 = window.getComputedStyle(t2);
  r2.cssText ? (n2.cssText = r2.cssText, n2.transformOrigin = r2.transformOrigin) : y(r2).forEach((i2) => {
    let s2 = r2.getPropertyValue(i2);
    i2 === "font-size" && s2.endsWith("px") && (s2 = `${Math.floor(parseFloat(s2.substring(0, s2.length - 2))) - 0.1}px`), g(t2, HTMLIFrameElement) && i2 === "display" && s2 === "inline" && (s2 = "block"), i2 === "d" && e2.getAttribute("d") && (s2 = `path(${e2.getAttribute("d")})`), n2.setProperty(i2, s2, r2.getPropertyPriority(i2));
  });
}
function Qe$1(t2, e2) {
  g(t2, HTMLTextAreaElement) && (e2.innerHTML = t2.value), g(t2, HTMLInputElement) && e2.setAttribute("value", t2.value);
}
function Ye$2(t2, e2) {
  if (g(t2, HTMLSelectElement)) {
    const n2 = e2, r2 = Array.from(n2.children).find((i2) => t2.value === i2.getAttribute("value"));
    r2 && r2.setAttribute("selected", "");
  }
}
function Ze$2(t2, e2) {
  return g(e2, Element) && (Je$1(t2, e2), ke$1(t2, e2), Qe$1(t2, e2), Ye$2(t2, e2)), e2;
}
async function Ke$2(t2, e2) {
  const n2 = t2.querySelectorAll ? t2.querySelectorAll("use") : [];
  if (n2.length === 0)
    return t2;
  const r2 = {};
  for (let s2 = 0; s2 < n2.length; s2++) {
    const c2 = n2[s2].getAttribute("xlink:href");
    if (c2) {
      const o2 = t2.querySelector(c2), u2 = document.querySelector(c2);
      !o2 && u2 && !r2[c2] && (r2[c2] = await F(u2, e2, true));
    }
  }
  const i2 = Object.values(r2);
  if (i2.length) {
    const s2 = "http://www.w3.org/1999/xhtml", a2 = document.createElementNS(s2, "svg");
    a2.setAttribute("xmlns", s2), a2.style.position = "absolute", a2.style.width = "0", a2.style.height = "0", a2.style.overflow = "hidden", a2.style.display = "none";
    const c2 = document.createElementNS(s2, "defs");
    a2.appendChild(c2);
    for (let o2 = 0; o2 < i2.length; o2++)
      c2.appendChild(i2[o2]);
    t2.appendChild(a2);
  }
  return t2;
}
async function F(t2, e2, n2) {
  return !n2 && e2.filter && !e2.filter(t2) ? null : Promise.resolve(t2).then((r2) => je$1(r2, e2)).then((r2) => Xe$2(t2, r2, e2)).then((r2) => Ze$2(t2, r2)).then((r2) => Ke$2(r2, e2));
}
const re = /url\((['"]?)([^'"]+?)\1\)/g, et$1 = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g, tt = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function nt(t2) {
  const e2 = t2.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
  return new RegExp(`(url\\(['"]?)(${e2})(['"]?\\))`, "g");
}
function rt$1(t2) {
  const e2 = [];
  return t2.replace(re, (n2, r2, i2) => (e2.push(i2), n2)), e2.filter((n2) => !B(n2));
}
async function it$1(t2, e2, n2, r2, i2) {
  try {
    const s2 = n2 ? Le(e2, n2) : e2, a2 = V(e2);
    let c2;
    if (i2) {
      const o2 = await i2(s2);
      c2 = te(o2, a2);
    } else
      c2 = await W$1(s2, a2, r2);
    return t2.replace(nt(e2), `$1${c2}$3`);
  } catch {
  }
  return t2;
}
function st(t2, { preferredFontFormat: e2 }) {
  return e2 ? t2.replace(tt, (n2) => {
    for (; ; ) {
      const [r2, , i2] = et$1.exec(n2) || [];
      if (!i2)
        return "";
      if (i2 === e2)
        return `src: ${r2};`;
    }
  }) : t2;
}
function ie(t2) {
  return t2.search(re) !== -1;
}
async function se(t2, e2, n2) {
  if (!ie(t2))
    return t2;
  const r2 = st(t2, n2);
  return rt$1(r2).reduce((s2, a2) => s2.then((c2) => it$1(c2, a2, e2, n2)), Promise.resolve(r2));
}
async function D(t2, e2, n2) {
  var r2;
  const i2 = (r2 = e2.style) === null || r2 === void 0 ? void 0 : r2.getPropertyValue(t2);
  if (i2) {
    const s2 = await se(i2, null, n2);
    return e2.style.setProperty(t2, s2, e2.style.getPropertyPriority(t2)), true;
  }
  return false;
}
async function at$1(t2, e2) {
  await D("background", t2, e2) || await D("background-image", t2, e2), await D("mask", t2, e2) || await D("mask-image", t2, e2);
}
async function ct$1(t2, e2) {
  const n2 = g(t2, HTMLImageElement);
  if (!(n2 && !B(t2.src)) && !(g(t2, SVGImageElement) && !B(t2.href.baseVal)))
    return;
  const r2 = n2 ? t2.src : t2.href.baseVal, i2 = await W$1(r2, V(r2), e2);
  await new Promise((s2, a2) => {
    t2.onload = s2, t2.onerror = a2;
    const c2 = t2;
    c2.decode && (c2.decode = s2), c2.loading === "lazy" && (c2.loading = "eager"), n2 ? (t2.srcset = "", t2.src = i2) : t2.href.baseVal = i2;
  });
}
async function ot$1(t2, e2) {
  const r2 = y(t2.childNodes).map((i2) => ae(i2, e2));
  await Promise.all(r2).then(() => t2);
}
async function ae(t2, e2) {
  g(t2, Element) && (await at$1(t2, e2), await ct$1(t2, e2), await ot$1(t2, e2));
}
function lt$1(t2, e2) {
  const { style: n2 } = t2;
  e2.backgroundColor && (n2.backgroundColor = e2.backgroundColor), e2.width && (n2.width = `${e2.width}px`), e2.height && (n2.height = `${e2.height}px`);
  const r2 = e2.style;
  return r2 != null && Object.keys(r2).forEach((i2) => {
    n2[i2] = r2[i2];
  }), t2;
}
const Q$1 = {};
async function Y(t2) {
  let e2 = Q$1[t2];
  if (e2 != null)
    return e2;
  const r2 = await (await fetch(t2)).text();
  return e2 = { url: t2, cssText: r2 }, Q$1[t2] = e2, e2;
}
async function Z$1(t2, e2) {
  let n2 = t2.cssText;
  const r2 = /url\(["']?([^"')]+)["']?\)/g, s2 = (n2.match(/url\([^)]+\)/g) || []).map(async (a2) => {
    let c2 = a2.replace(r2, "$1");
    return c2.startsWith("https://") || (c2 = new URL(c2, t2.url).href), ne$1(c2, e2.fetchRequestInit, ({ result: o2 }) => (n2 = n2.replace(a2, `url(${o2})`), [a2, o2]));
  });
  return Promise.all(s2).then(() => n2);
}
function K$1(t2) {
  if (t2 == null)
    return [];
  const e2 = [], n2 = /(\/\*[\s\S]*?\*\/)/gi;
  let r2 = t2.replace(n2, "");
  const i2 = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
  for (; ; ) {
    const o2 = i2.exec(r2);
    if (o2 === null)
      break;
    e2.push(o2[0]);
  }
  r2 = r2.replace(i2, "");
  const s2 = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi, a2 = "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", c2 = new RegExp(a2, "gi");
  for (; ; ) {
    let o2 = s2.exec(r2);
    if (o2 === null) {
      if (o2 = c2.exec(r2), o2 === null)
        break;
      s2.lastIndex = c2.lastIndex;
    } else
      c2.lastIndex = s2.lastIndex;
    e2.push(o2[0]);
  }
  return e2;
}
async function ut$1(t2, e2) {
  const n2 = [], r2 = [];
  return t2.forEach((i2) => {
    if ("cssRules" in i2)
      try {
        y(i2.cssRules || []).forEach((s2, a2) => {
          if (s2.type === CSSRule.IMPORT_RULE) {
            let c2 = a2 + 1;
            const o2 = s2.href, u2 = Y(o2).then((f2) => Z$1(f2, e2)).then((f2) => K$1(f2).forEach((d2) => {
              try {
                i2.insertRule(d2, d2.startsWith("@import") ? c2 += 1 : i2.cssRules.length);
              } catch (h2) {
                console.error("Error inserting rule from remote css", {
                  rule: d2,
                  error: h2
                });
              }
            })).catch((f2) => {
              console.error("Error loading remote css", f2.toString());
            });
            r2.push(u2);
          }
        });
      } catch (s2) {
        const a2 = t2.find((c2) => c2.href == null) || document.styleSheets[0];
        i2.href != null && r2.push(Y(i2.href).then((c2) => Z$1(c2, e2)).then((c2) => K$1(c2).forEach((o2) => {
          a2.insertRule(o2, i2.cssRules.length);
        })).catch((c2) => {
          console.error("Error loading remote stylesheet", c2);
        })), console.error("Error inlining remote css file", s2);
      }
  }), Promise.all(r2).then(() => (t2.forEach((i2) => {
    if ("cssRules" in i2)
      try {
        y(i2.cssRules || []).forEach((s2) => {
          n2.push(s2);
        });
      } catch (s2) {
        console.error(`Error while reading CSS rules from ${i2.href}`, s2);
      }
  }), n2));
}
function ht$1(t2) {
  return t2.filter((e2) => e2.type === CSSRule.FONT_FACE_RULE).filter((e2) => ie(e2.style.getPropertyValue("src")));
}
async function ft$1(t2, e2) {
  if (t2.ownerDocument == null)
    throw new Error("Provided element is not within a Document");
  const n2 = y(t2.ownerDocument.styleSheets), r2 = await ut$1(n2, e2);
  return ht$1(r2);
}
async function dt(t2, e2) {
  const n2 = await ft$1(t2, e2);
  return (await Promise.all(n2.map((i2) => {
    const s2 = i2.parentStyleSheet ? i2.parentStyleSheet.href : null;
    return se(i2.cssText, s2, e2);
  }))).join(`
`);
}
async function mt(t2, e2) {
  const n2 = e2.fontEmbedCSS != null ? e2.fontEmbedCSS : e2.skipFonts ? null : await dt(t2, e2);
  if (n2) {
    const r2 = document.createElement("style"), i2 = document.createTextNode(n2);
    r2.appendChild(i2), t2.firstChild ? t2.insertBefore(r2, t2.firstChild) : t2.appendChild(r2);
  }
}
async function gt$1(t2, e2 = {}) {
  const { width: n2, height: r2 } = ee$1(t2, e2), i2 = await F(t2, e2, true);
  return await mt(i2, e2), await ae(i2, e2), lt$1(i2, e2), await Me$1(i2, n2, r2);
}
async function ce(t2, e2 = {}) {
  const { width: n2, height: r2 } = ee$1(t2, e2), i2 = await gt$1(t2, e2), s2 = await A(i2), a2 = document.createElement("canvas"), c2 = a2.getContext("2d"), o2 = e2.pixelRatio || Fe$1(), u2 = e2.canvasWidth || n2, f2 = e2.canvasHeight || r2;
  return a2.width = u2 * o2, a2.height = f2 * o2, e2.skipAutoScale || $e$1(a2), a2.style.width = `${u2}`, a2.style.height = `${f2}`, e2.backgroundColor && (c2.fillStyle = e2.backgroundColor, c2.fillRect(0, 0, a2.width, a2.height)), c2.drawImage(s2, 0, 0, a2.width, a2.height), a2;
}
async function pt(t2, e2 = {}) {
  return (await ce(t2, e2)).toDataURL();
}
async function yt$1(t2, e2 = {}) {
  return (await ce(t2, e2)).toDataURL("image/jpeg", e2.quality || 1);
}
class oe {
  constructor(e2, n2) {
    this.model = e2, this.services = n2, this.init();
  }
  init() {
  }
  update() {
  }
  // Used to pass down information to the components
  setModel(e2) {
    this.model = e2;
  }
  // Used to pass down services to the components
  setServices(e2) {
    this.services = e2;
  }
}
const wt$1 = "DONT_STYLE_ME_css_styles_verifier";
class k extends oe {
  // initialized in initializeID() called by init()
  constructor(e2, n2) {
    super(e2, n2), this.chartID = "";
  }
  static getHTMLElementSize(e2) {
    return {
      width: e2.clientWidth,
      height: e2.clientHeight
    };
  }
  static getSVGElementSize(e2, n2 = {
    useAttrs: false,
    useClientDimensions: false,
    useBBox: false,
    useBoundingRect: false
  }) {
    e2.attr || (e2 = select(e2));
    const r2 = {
      width: 0,
      height: 0
    }, i2 = (h2) => {
      h2 && Object.keys(r2).forEach((w2) => {
        if (h2[w2]) {
          const R2 = h2[w2], I2 = parseFloat(R2);
          R2 && I2 > r2[w2] && ("" + R2).indexOf("%") === -1 && (r2[w2] = I2);
        }
      });
    }, s2 = {
      width: e2.attr("width"),
      height: e2.attr("height")
    }, a2 = e2.node();
    let c2, o2, u2, f2;
    try {
      typeof a2.getBBox == "function" && (c2 = a2.getBBox(), o2 = {
        width: c2.width,
        height: c2.height
      });
    } catch (h2) {
      console.error(h2);
    }
    try {
      typeof (a2 == null ? void 0 : a2.getBoundingClientRect) == "function" && (u2 = a2.getBoundingClientRect(), f2 = {
        width: u2.width,
        height: u2.height
      });
    } catch (h2) {
      console.error(h2);
    }
    let d2;
    if (a2 instanceof SVGSVGElement && (d2 = {
      width: a2.clientWidth,
      height: a2.clientHeight
    }), n2) {
      if (n2.useAttrs && (i2(s2), r2.width > 0 && r2.height > 0))
        return r2;
      if (n2.useClientDimensions && (i2(d2), r2.width > 0 && r2.height > 0))
        return d2;
      if (n2.useBBox && (i2(o2), r2.width > 0 && r2.height > 0))
        return o2;
      if (n2.useBoundingRect && (i2(f2), r2.width > 0 && r2.height > 0))
        return f2;
    }
    try {
      const h2 = {
        width: G$1(e2.node(), "width", "baseVal", "value"),
        height: G$1(e2.node(), "height", "baseVal", "value")
      };
      i2(h2);
    } catch {
      i2(d2), i2(o2), i2(s2);
    }
    return r2;
  }
  static appendOrSelect(e2, n2) {
    const r2 = e2.select(`${n2}`);
    if (r2.empty()) {
      let i2 = n2.split("#"), s2, a2;
      return i2.length === 2 ? (s2 = i2[0], i2 = i2[1].split("."), a2 = i2[0]) : (i2 = n2.split("."), s2 = i2[0]), e2.append(s2).attr("id", a2).attr("class", i2.slice(1).join(" "));
    }
    return r2;
  }
  init() {
    this.styleHolderElement(), this.initializeID(), this.addMainContainer(), this.model.getOptions().resizable && this.addResizeListener(), this.addHolderListeners(), this.handleFullscreenChange();
  }
  getChartID() {
    return this.chartID;
  }
  generateElementIDString(e2) {
    return `chart-${this.chartID}-${e2}`;
  }
  initializeID() {
    this.chartID = Math.floor((1 + Math.random()) * 281474976710656).toString(16);
  }
  addMainContainer() {
    const e2 = this.model.getOptions(), n2 = G$1(e2, "style", "prefix"), r2 = select(this.getHolder()).append("div").classed(`${fc$1}--${n2}--chart-wrapper`, true).attr("id", `chart-${this.getChartID()}`).style("height", "100%").style("width", "100%");
    r2.append("g").attr("class", wt$1), this.mainContainer = r2.node();
  }
  update() {
    this.styleHolderElement();
  }
  styleHolderElement() {
    const e2 = this.getHolder(), { width: n2, height: r2, theme: i2 } = this.model.getOptions();
    n2 !== this.width && (e2.style.width = n2, this.width = n2), r2 !== this.height && (e2.style.height = r2, this.height = r2), select(this.getHolder()).classed(`${fc$1}--chart-holder`, true).attr("data-carbon-theme", i2);
  }
  getHolder() {
    return this.model.get("holder");
  }
  exportToJPG() {
    const e2 = this, n2 = this.model.getOptions(), r2 = this.getHolder(), i2 = select(r2);
    i2.classed("filled", true), yt$1(this.getMainContainer(), {
      quality: 1,
      // Remove toolbar
      filter: (s2) => !(s2.classList && s2.classList.contains("cds--cc--toolbar"))
    }).then(function(s2) {
      var o2;
      let a2 = "myChart";
      const c2 = G$1(
        n2,
        "fileDownload",
        "fileName"
      );
      typeof c2 == "function" ? a2 = c2("jpg") : typeof c2 == "string" && (a2 = c2), (o2 = e2.services.files) == null || o2.downloadImage(s2, `${a2}.jpg`), i2.classed("filled", false);
    });
  }
  exportToPNG() {
    const e2 = this, n2 = this.model.getOptions(), r2 = this.getHolder(), i2 = select(r2);
    i2.classed("filled", true), pt(this.getMainContainer(), {
      quality: 1,
      // Remove toolbar
      filter: (s2) => !(s2.classList && s2.classList.contains("cds--cc--toolbar"))
    }).then(function(s2) {
      var o2;
      let a2 = "myChart";
      const c2 = G$1(
        n2,
        "fileDownload",
        "fileName"
      );
      typeof c2 == "function" ? a2 = c2("png") : typeof c2 == "string" && (a2 = c2), (o2 = e2.services.files) == null || o2.downloadImage(s2, `${a2}.png`), i2.classed("filled", false);
    }).catch(function(s2) {
      console.error("oops, something went wrong!", s2);
    });
  }
  toggleFullscreen() {
    const e2 = this.getHolder();
    select(e2).classed("fullscreen") && (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) ? document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen() : e2.requestFullscreen ? e2.requestFullscreen() : e2.webkitRequestFullscreen ? e2.webkitRequestFullscreen() : e2.mozRequestFullScreen ? e2.mozRequestFullScreen() : e2.msRequestFullscreen && e2.msRequestFullscreen();
  }
  handleFullscreenChange() {
    document.addEventListener("fullscreenchange", () => {
      const e2 = select(this.getHolder()), n2 = e2.classed("fullscreen");
      e2.classed("fullscreen", !n2);
    });
  }
  setSVGMaxHeight() {
    if (!this.model.getOptions().height) {
      const { height: e2 } = k.getSVGElementSize(
        select(this.mainContainer),
        {
          useBBox: true
        }
      ), n2 = select(this.mainContainer).attr("class"), r2 = select(this.mainContainer).selectAll(`.${n2} > svg`);
      let i2 = 0;
      r2.nodes().forEach(function(s2) {
        i2 += Number(
          k.getSVGElementSize(select(s2), {
            useBBox: true
          }).height
        );
      }), i2 <= e2 ? select(this.mainContainer).attr("height", i2) : select(this.mainContainer).attr("height", "100%");
    }
  }
  getMainContainer() {
    return this.mainContainer;
  }
  addHolderListeners() {
    const e2 = this.getHolder();
    e2 && select(e2).on("mouseover", () => {
      var n2;
      (n2 = this.services.events) == null || n2.dispatchEvent(oE.Chart.MOUSEOVER);
    }).on("mouseout", () => {
      var n2;
      (n2 = this.services.events) == null || n2.dispatchEvent(oE.Chart.MOUSEOUT);
    });
  }
  addResizeListener() {
    const e2 = this.getHolder();
    if (!e2)
      return;
    let n2 = e2.clientWidth, r2 = e2.clientHeight;
    const i2 = Ie$1(() => {
      var a2;
      e2 && (Math.abs(n2 - e2.clientWidth) > 1 || Math.abs(r2 - e2.clientHeight) > 1) && (n2 = e2.clientWidth, r2 = e2.clientHeight, (a2 = this.services.events) == null || a2.dispatchEvent(oE.Chart.RESIZE));
    }, 12.5);
    new ResizeObserver(i2).observe(e2);
  }
}
class le extends oe {
  static appendOrUpdateLinearGradient(e2) {
    let n2 = e2.svg.select(`defs linearGradient#${e2.id}`);
    n2.empty() && (n2 = e2.svg.append("defs").append("linearGradient").attr("id", e2.id).attr("x1", e2.x1).attr("x2", e2.x2).attr("y1", e2.y1).attr("y2", e2.y2)), n2.selectAll("stop").remove(), n2.selectAll("stop").data(e2.stops).enter().append("stop").attr("offset", (r2) => r2.offset).style("stop-color", (r2) => r2.color).style("stop-opacity", (r2) => r2.opacity);
  }
  static getOffsetRatio(e2) {
    return (Math.abs(e2[1]) * 100 / Math.abs(e2[0] - e2[1])).toFixed(2) + "%";
  }
  static getStops(e2, n2) {
    const r2 = e2[0] < 0 && e2[1] > 0;
    let i2 = [
      {
        offset: "0%",
        color: n2,
        opacity: "0.6"
      },
      {
        offset: "80%",
        color: n2,
        opacity: "0"
      }
    ];
    return r2 && (i2 = [
      {
        offset: "0%",
        color: n2,
        opacity: "0.6"
      },
      {
        offset: le.getOffsetRatio(e2),
        color: n2,
        opacity: "0"
      },
      {
        offset: "100%",
        color: n2,
        opacity: "0.6"
      }
    ]), i2;
  }
}
function _a(o2, e2, t2) {
  return o2 === o2 && (t2 !== void 0 && (o2 = o2 <= t2 ? o2 : t2), e2 !== void 0 && (o2 = o2 >= e2 ? o2 : e2)), o2;
}
function $s(o2, e2, t2) {
  return t2 === void 0 && (t2 = e2, e2 = void 0), t2 !== void 0 && (t2 = j$1(t2), t2 = t2 === t2 ? t2 : 0), e2 !== void 0 && (e2 = j$1(e2), e2 = e2 === e2 ? e2 : 0), _a(j$1(o2), e2, t2);
}
function Gs(o2, e2) {
  return vt$1(o2, e2);
}
function Na(o2, e2) {
  var t2;
  return v$1(o2, function(s2, n2, a2) {
    return t2 = e2(s2, n2, a2), !t2;
  }), !!t2;
}
function Ha(o2, e2, t2) {
  var s2 = S$1(o2) ? ol : Na;
  return t2 && Ai$1(o2, e2, t2) && (e2 = void 0), s2(o2, ql(e2));
}
class z {
  constructor(e2, t2, s2) {
    if (this.type = "", this.renderType = D$2.HTML, this.id = "", this.parent = void 0, this.configs = {}, this.model = e2, this.services = t2, s2 && (this.configs = s2, this.configs.id)) {
      const n2 = G$1(this.model.getOptions(), "style", "prefix");
      this.id = `${n2}--${this.configs.id}`;
    }
    this.parent || this.setParent(select(this.services.domUtils.getMainContainer()));
  }
  init() {
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render(e2 = true) {
    console.error("Error: Component did not provide the required render function.");
  }
  destroy() {
  }
  // Used to pass down information to the components
  setModel(e2) {
    this.model = e2;
  }
  // Used to pass down information to the components
  setServices(e2) {
    this.services = e2;
  }
  setParent(e2) {
    var s2;
    const t2 = this.parent;
    if (this.parent = e2, !(t2 && t2.node() === e2.node()) && this.type) {
      const n2 = G$1(this.model.getOptions(), "style", "prefix");
      (s2 = this.parent) == null || s2.classed(`${fc$1}--${n2}--${this.type}`, true), t2 && t2.classed(`${fc$1}--${n2}--${this.type}`, false);
    }
  }
  getParent() {
    return this.parent;
  }
  getComponentContainer(e2 = { withinChartClip: false }) {
    if (this.type) {
      const t2 = G$1(this.model.getOptions(), "style", "prefix"), s2 = this.id ? `#${this.id}` : "", n2 = k.appendOrSelect(
        this.parent,
        `${this.renderType === D$2.SVG ? "svg" : "div"}${s2}.${fc$1}--${t2}--${this.type}`
      );
      if (e2.withinChartClip) {
        const a2 = this.model.get("chartClipId");
        if (a2) {
          const r2 = select(`#${a2}`).select("rect");
          r2.size() !== 0 && parseFloat(r2.attr("height")) > 0 && n2.attr("clip-path", `url(#${a2})`);
        }
      }
      return n2.attr("width", "100%").attr("height", "100%");
    }
    return this.parent;
  }
  /**
   * graphs used in combo charts share a model with global options but can receive their own local options.
   * this function retrieves the global options and merges it with any options passed into this
   * component's config.options object.
   */
  getOptions() {
    return this.configs.options ? h({}, this.model.getOptions(), this.configs.options) : this.model.getOptions();
  }
}
const Ns = class Hs2 extends z {
  constructor() {
    super(...arguments), this.type = "toolbar", this.renderType = D$2.HTML;
  }
  init() {
    const e2 = () => this.updateOverflowMenu(false);
    this.services.events.addEventListener(oE.Toolbar.SHOW_OVERFLOW_MENU, () => {
      this.renderOverflowMenu(), document.body.addEventListener("click", e2);
    }), this.services.events.addEventListener(oE.Toolbar.HIDE_OVERFLOW_MENU, () => {
      document.body.removeEventListener("click", e2);
    });
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render(e2 = true) {
    const t2 = this.getComponentContainer().attr("role", "toolbar").attr("aria-label", `chart-${this.services.domUtils.getChartID()} toolbar`);
    if (G$1(this.getOptions(), "data", "loading"))
      t2.html(""), this.overflowMenu = null;
    else {
      this.overflowMenu || (this.overflowMenu = t2.append("div").attr(
        "class",
        "cds--overflow-menu-options cds--overflow-menu--flip cds--overflow-menu-options cds--overflow-menu--flip"
      ).attr("tabindex", -1).html("<ul role='menu'></ul>"));
      const { buttonList: n2, overflowMenuItemList: a2 } = this.getControlConfigs();
      a2 && n2.push(this.getOverflowButtonConfig());
      const i2 = t2.selectAll("div.toolbar-control").data(n2, (c2) => c2.id);
      i2.exit().remove();
      const r2 = i2.enter().append("div").attr("class", "toolbar-control cds--overflow-menu cds--overflow-menu").attr("role", "button"), l2 = this;
      r2.merge(i2).classed("disabled", (c2) => c2.shouldBeDisabled()).attr("aria-disabled", (c2) => c2.shouldBeDisabled()).attr("aria-label", (c2) => c2.title).html(
        (c2) => `
			<button
				class="cds--overflow-menu__trigger cds--overflow-menu__trigger"
				aria-haspopup="true" aria-expanded="false" id="${this.services.domUtils.generateElementIDString(
          `control-${c2.id}`
        )}" aria-label="${c2.title}">
				<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" class="cds--overflow-menu__icon cds--overflow-menu__icon" viewBox="0 0 32 32" aria-hidden="true">
					${c2.iconSVG.content}
				</svg>
			</button>`
      ).each(function(c2, d2) {
        select(this).select("svg").style("will-change", "transform").style("width", c2.iconSVG.width !== void 0 ? c2.iconSVG.width : "20px").style("height", c2.iconSVG.height !== void 0 ? c2.iconSVG.height : "20px"), select(this).select("button").on("click", (p2) => {
          c2.shouldBeDisabled() || l2.triggerFunctionAndEvent(c2, p2, this);
        }).on("keydown", (p2) => {
          p2.key && p2.key === "Enter" || p2.key === " " ? (p2.preventDefault(), l2.triggerFunctionAndEvent(c2, p2, this)) : p2.key && p2.key === "ArrowLeft" ? l2.focusOnPreviousEnabledToolbarItem(d2) : p2.key && p2.key === "ArrowRight" && l2.focusOnNextEnabledToolbarItem(d2);
        });
      }), this.overflowButton = this.getComponentContainer().select(
        `button.cds--overflow-menu__trigger#${this.services.domUtils.generateElementIDString(
          "control-toolbar-overflow-menu"
        )}`
      );
    }
  }
  renderOverflowMenu() {
    const { overflowMenuItemList: e2 } = this.getControlConfigs(), t2 = this.overflowMenu.select("ul").selectAll("li.cds--overflow-menu-options__option").data(e2, (n2) => G$1(n2, "id"));
    t2.exit().remove();
    const s2 = t2.enter().append("li").attr("id", (n2) => this.services.domUtils.generateElementIDString(`control-${n2.id}`)).attr("class", "cds--overflow-menu-options__option cds--overflow-menu-options__option").attr("role", "menuitem").attr("tabindex", 1);
    s2.append("button").attr("class", "cds--overflow-menu-options__btn cds--overflow-menu-options__btn"), s2.merge(t2).classed("cds--overflow-menu-options__option--disabled", (n2) => n2.shouldBeDisabled()).classed("cds--overflow-menu-options__option--disabled", (n2) => n2.shouldBeDisabled()).attr("aria-disabled", (n2) => n2.shouldBeDisabled()).selectAll("button").text((n2) => n2.text);
  }
  isOverflowMenuOpen() {
    return this.overflowMenu.classed("is-open");
  }
  // show/hide overflow menu
  updateOverflowMenu(e2) {
    this.overflowMenu && (this.overflowMenu.classed("is-open", e2), this.overflowButton && (this.overflowButton.attr("aria-expanded", e2), select(this.overflowButton.node().parentNode).classed("cds--overflow-menu--open", e2).classed("cds--overflow-menu--open", e2)), e2 ? this.services.events.dispatchEvent(oE.Toolbar.SHOW_OVERFLOW_MENU) : this.services.events.dispatchEvent(oE.Toolbar.HIDE_OVERFLOW_MENU));
  }
  // Toolbar controllers
  focusOnPreviousEnabledToolbarItem(e2) {
    const t2 = this.getToolbarButtonItems();
    let s2 = t2.length;
    for (let n2 = e2 - 1; n2 >= 0; n2--)
      if (!t2[n2].shouldBeDisabled()) {
        s2 = n2;
        break;
      }
    if (s2 < t2.length) {
      const n2 = select(
        `button#${this.services.domUtils.generateElementIDString(
          `control-${t2[s2].id}`
        )}`
      ).node();
      "focus" in n2 && n2.focus();
    }
  }
  focusOnNextEnabledToolbarItem(e2) {
    const t2 = this.getToolbarButtonItems();
    let s2 = -1;
    for (let n2 = e2 + 1; n2 < t2.length; n2++)
      if (!t2[n2].shouldBeDisabled()) {
        s2 = n2;
        break;
      }
    if (s2 > -1) {
      const n2 = select(
        `button#${this.services.domUtils.generateElementIDString(
          `control-${t2[s2].id}`
        )}`
      ).node();
      "focus" in n2 && n2.focus();
    }
  }
  focusOnPreviousEnabledMenuItem(e2) {
    const t2 = this.getOverflowMenuItems();
    let s2 = t2.length;
    for (let n2 = e2 - 1; n2 >= 0; n2--)
      if (!t2[n2].shouldBeDisabled()) {
        s2 = n2;
        break;
      }
    if (s2 < t2.length) {
      const n2 = select(
        `#${this.services.domUtils.generateElementIDString(
          `control-${t2[s2].id}`
        )} button`
      ).node();
      "focus" in n2 && n2.focus();
    }
  }
  focusOnNextEnabledMenuItem(e2) {
    const t2 = this.getOverflowMenuItems();
    let s2 = -1;
    for (let n2 = e2 + 1; n2 < t2.length; n2++)
      if (!t2[n2].shouldBeDisabled()) {
        s2 = n2;
        break;
      }
    if (s2 > -1) {
      const n2 = select(
        `#${this.services.domUtils.generateElementIDString(
          `control-${t2[s2].id}`
        )} button`
      ).node();
      "focus" in n2 && n2.focus();
    }
  }
  toggleOverflowMenu(e2) {
    if (this.isOverflowMenuOpen())
      this.updateOverflowMenu(false);
    else {
      this.updateOverflowMenu(true);
      const t2 = this;
      this.getOverflowMenuItems().forEach((n2, a2) => {
        const i2 = select(
          `#${this.services.domUtils.generateElementIDString(`control-${n2.id}`)}`
        );
        i2 !== null && (i2.on("click", () => {
          t2.triggerFunctionAndEvent(n2, e2, i2.node()), t2.updateOverflowMenu(false);
        }), i2.on("keydown", (r2) => {
          r2 && r2.key === "Enter" ? t2.triggerFunctionAndEvent(n2, e2, i2.node()) : r2 && r2.key === "ArrowUp" ? t2.focusOnPreviousEnabledMenuItem(a2) : r2 && r2.key === "ArrowDown" ? t2.focusOnNextEnabledMenuItem(a2) : r2 && r2.key === "Escape" && t2.updateOverflowMenu(false), r2.preventDefault();
        }));
      }), t2.focusOnNextEnabledMenuItem(-1);
    }
    e2 && e2.stopImmediatePropagation();
  }
  // Calls passed function && dispatches event
  triggerFunctionAndEvent(e2, t2, s2) {
    typeof e2.shouldBeDisabled == "function" && e2.shouldBeDisabled() || (typeof e2.clickFunction == "function" && e2.clickFunction(t2), this.services.events.dispatchEvent(oE.Toolbar.BUTTON_CLICK, {
      control: e2,
      event: t2,
      element: s2
    }));
  }
  getControlConfigs() {
    const e2 = G$1(this.getOptions(), "toolbar", "numberOfIcons") - 1, t2 = G$1(this.getOptions(), "toolbar", "controls"), s2 = [], n2 = [], a2 = [];
    return t2.forEach((i2) => {
      let r2 = null;
      i2.type === y$1.CUSTOM ? (G$1(i2, "id") === null && (i2.id = `toolbar-button-${Hs2.buttonID++}`), G$1(i2, "shouldBeDisabled") === null && (i2.shouldBeDisabled = () => false), r2 = i2) : r2 = this.getControlConfigByType(i2.type), r2 && (r2.text = i2.text ? i2.text : i2.type, r2.id.indexOf("toolbar-export") !== -1 ? s2.push(r2) : n2.length < e2 ? G$1(r2, "iconSVG", "content") === null ? a2.push(r2) : n2.push(r2) : a2.push(r2));
    }), a2.push(...s2), a2.length ? {
      buttonList: n2,
      overflowMenuItemList: a2
    } : {
      buttonList: n2
    };
  }
  getToolbarButtonItems() {
    const { buttonList: e2, overflowMenuItemList: t2 } = this.getControlConfigs();
    return t2 && e2.push(this.getOverflowButtonConfig()), e2 || [];
  }
  getOverflowMenuItems() {
    const { overflowMenuItemList: e2 } = this.getControlConfigs();
    return e2 || [];
  }
  // special button config for overflow button
  getOverflowButtonConfig() {
    return {
      id: "toolbar-overflow-menu",
      title: "More options",
      shouldBeDisabled: () => false,
      iconSVG: {
        content: `<circle cx="16" cy="8" r="2"></circle>
				<circle cx="16" cy="16" r="2"></circle>
				<circle cx="16" cy="24" r="2"></circle>`
      },
      clickFunction: (e2) => this.toggleOverflowMenu(e2)
    };
  }
  getControlConfigByType(e2) {
    const t2 = this.services.zoom && this.services.zoom.isZoomBarEnabled() && !this.services.zoom.isEmptyState(), s2 = this.model.getDisplayData();
    let n2;
    switch (e2) {
      case y$1.ZOOM_IN:
        t2 && (n2 = {
          id: "toolbar-zoomIn",
          title: "Zoom in",
          shouldBeDisabled: () => this.services.zoom.isMinZoomDomain(),
          iconSVG: {
            content: this.getControlIconByType(e2)
          },
          clickFunction: () => this.services.zoom.zoomIn()
        });
        break;
      case y$1.ZOOM_OUT:
        t2 && (n2 = {
          id: "toolbar-zoomOut",
          title: "Zoom out",
          shouldBeDisabled: () => this.services.zoom.isMaxZoomDomain(),
          iconSVG: {
            content: this.getControlIconByType(e2)
          },
          clickFunction: () => this.services.zoom.zoomOut()
        });
        break;
      case y$1.RESET_ZOOM:
        t2 && (n2 = {
          id: "toolbar-resetZoom",
          title: "Reset zoom",
          shouldBeDisabled: () => this.services.zoom.isMaxZoomDomain(),
          iconSVG: {
            content: this.getControlIconByType(e2)
          },
          clickFunction: () => this.services.zoom.resetZoomDomain()
        });
        break;
      case y$1.MAKE_FULLSCREEN:
        n2 = {
          id: "toolbar-makefullscreen",
          iconSVG: {
            content: this.getControlIconByType(e2),
            width: "15px",
            height: "15px"
          },
          title: "Make fullscreen",
          shouldBeDisabled: () => false,
          clickFunction: () => {
            this.services.domUtils.toggleFullscreen();
          }
        };
        break;
      case y$1.SHOW_AS_DATATABLE:
        n2 = {
          id: "toolbar-showasdatatable",
          iconSVG: {
            content: this.getControlIconByType(e2)
          },
          title: "Show as table",
          shouldBeDisabled: () => s2.length === 0,
          clickFunction: () => this.services.events.dispatchEvent(oE.Modal.SHOW)
        };
        break;
      case y$1.EXPORT_CSV:
        n2 = {
          id: "toolbar-export-CSV",
          title: "Export as CSV",
          shouldBeDisabled: () => false,
          iconSVG: {
            content: this.getControlIconByType(e2)
          },
          clickFunction: () => this.model.exportToCSV()
        };
        break;
      case y$1.EXPORT_PNG:
        n2 = {
          id: "toolbar-export-PNG",
          title: "Export as PNG",
          shouldBeDisabled: () => false,
          iconSVG: {
            content: this.getControlIconByType(e2)
          },
          clickFunction: () => this.services.domUtils.exportToPNG()
        };
        break;
      case y$1.EXPORT_JPG:
        n2 = {
          id: "toolbar-export-JPG",
          title: "Export as JPG",
          shouldBeDisabled: () => false,
          iconSVG: {
            content: this.getControlIconByType(e2)
          },
          clickFunction: () => this.services.domUtils.exportToJPG()
        };
        break;
      default:
        throw Error("Not supported toolbar control type: " + e2);
    }
    return n2;
  }
  getControlIconByType(e2) {
    switch (e2) {
      case y$1.ZOOM_IN:
        return `<polygon points="19 13 15 13 15 9 13 9 13 13 9 13 9 15 13 15 13 19 15 19 15 15 19 15 19 13"/>
						<path d="M22.45,21A10.87,10.87,0,0,0,25,14,11,11,0,1,0,14,25a10.87,10.87,0,0,0,7-2.55L28.59,30,30,28.59ZM14,23a9,9,0,1,1,9-9A9,9,0,0,1,14,23Z"/>`;
      case y$1.ZOOM_OUT:
        return `<rect x="9" y="13" width="10" height="2"/>
						<path d="M22.45,21A10.87,10.87,0,0,0,25,14,11,11,0,1,0,14,25a10.87,10.87,0,0,0,7-2.55L28.59,30,30,28.59ZM14,23a9,9,0,1,1,9-9A9,9,0,0,1,14,23Z"/>`;
      case y$1.RESET_ZOOM:
        return '<path d="M22.4478,21A10.855,10.855,0,0,0,25,14,10.99,10.99,0,0,0,6,6.4658V2H4v8h8V8H7.332a8.9768,8.9768,0,1,1-2.1,8H3.1912A11.0118,11.0118,0,0,0,14,25a10.855,10.855,0,0,0,7-2.5522L28.5859,30,30,28.5859Z"/>';
      case y$1.MAKE_FULLSCREEN:
        return '<polygon points="21 2 21 4 26.59 4 17 13.58 18.41 15 28 5.41 28 11 30 11 30 2 21 2"/><polygon points="15 18.42 13.59 17 4 26.59 4 21 2 21 2 30 11 30 11 28 5.41 28 15 18.42"/>';
      case y$1.SHOW_AS_DATATABLE:
        return '<rect x="4" y="6" width="18" height="2"/><rect x="4" y="12" width="18" height="2"/><rect x="4" y="18" width="18" height="2"/><rect x="4" y="24" width="18" height="2"/><rect x="26" y="6" width="2" height="2"/><rect x="26" y="12" width="2" height="2"/><rect x="26" y="18" width="2" height="2"/><rect x="26" y="24" width="2" height="2"/>';
      case y$1.EXPORT_CSV:
        return '<path d="M22.4478,21A10.855,10.855,0,0,0,25,14,10.99,10.99,0,0,0,6,6.4658V2H4v8h8V8H7.332a8.9768,8.9768,0,1,1-2.1,8H3.1912A11.0118,11.0118,0,0,0,14,25a10.855,10.855,0,0,0,7-2.5522L28.5859,30,30,28.5859Z"/>';
      case y$1.EXPORT_JPG:
        return '<path d="M22.4478,21A10.855,10.855,0,0,0,25,14,10.99,10.99,0,0,0,6,6.4658V2H4v8h8V8H7.332a8.9768,8.9768,0,1,1-2.1,8H3.1912A11.0118,11.0118,0,0,0,14,25a10.855,10.855,0,0,0,7-2.5522L28.5859,30,30,28.5859Z"/>';
      case y$1.EXPORT_PNG:
        return '<path d="M22.4478,21A10.855,10.855,0,0,0,25,14,10.99,10.99,0,0,0,6,6.4658V2H4v8h8V8H7.332a8.9768,8.9768,0,1,1-2.1,8H3.1912A11.0118,11.0118,0,0,0,14,25a10.855,10.855,0,0,0,7-2.5522L28.5859,30,30,28.5859Z"/>';
      default:
        throw Error("Not supported toolbar control type: " + e2);
    }
  }
};
Ns.buttonID = 0;
let nc = Ns;
const Us = class zs2 extends z {
  constructor(e2, t2, s2, n2) {
    super(e2, t2, n2), this.type = "layout", this.configs = n2, this.children = s2, this._instanceID = zs2.instanceID++, this.init();
  }
  init() {
    this.children.forEach((e2) => {
      e2.components.forEach((t2) => {
        t2.init();
      });
    });
  }
  getPreferedAndFixedSizeSum() {
    const e2 = this.parent;
    let t2 = 0;
    return e2.selectAll(`div.layout-child-${this._instanceID}`).filter((s2) => {
      const n2 = G$1(s2, "growth");
      return n2 === W$3.PREFERRED || n2 === W$3.FIXED;
    }).each(function(s2) {
      t2 += s2.size;
    }), t2;
  }
  getNumOfStretchChildren() {
    return this.parent.selectAll(`div.layout-child-${this._instanceID}`).filter((t2) => G$1(t2, "growth") === W$3.STRETCH).size();
  }
  render(e2 = true) {
    const t2 = this.parent, { width: s2, height: n2 } = k.getHTMLElementSize(t2.node()), a2 = this.configs.direction === z$2.ROW || this.configs.direction === z$2.ROW_REVERSE, i2 = G$1(this.model.getOptions(), "style", "prefix"), r2 = t2.classed(
      `${fc$1}--${i2}--layout-row`,
      this.configs.direction === z$2.ROW
    ).classed(
      `${fc$1}--${i2}--layout-row-reverse`,
      this.configs.direction === z$2.ROW_REVERSE
    ).classed(
      `${fc$1}--${i2}--layout-column`,
      this.configs.direction === z$2.COLUMN
    ).classed(
      `${fc$1}--${i2}--layout-column-reverse`,
      this.configs.direction === z$2.COLUMN_REVERSE
    ).classed(
      `${fc$1}--${i2}--layout-alignitems-center`,
      this.configs.alignItems === B$2.CENTER
    ).selectAll(`div.layout-child-${this._instanceID}`).data(this.children, (d2) => d2.id);
    r2.enter().append("div").merge(t2.selectAll(`div.layout-child-${this._instanceID}`)).attr("class", (d2) => `layout-child layout-child-${this._instanceID} ${d2.id}`).each(function(d2) {
      d2.components.forEach((p2) => {
        const h2 = select(this), g2 = G$1(d2, "renderType") === D$2.SVG;
        p2.setParent(
          g2 ? k.appendOrSelect(h2, "svg.layout-svg-wrapper").attr("width", "100%").attr("height", "100%") : h2
        );
        const m2 = G$1(d2, "growth");
        (m2 === W$3.PREFERRED || m2 === W$3.FIXED) && p2.render(e2);
      });
    }), t2.selectAll(`div.layout-child-${this._instanceID}`).style("height", null).style("width", null).each(function(d2) {
      const p2 = G$1(d2, "growth"), u2 = G$1(d2, "renderType") === D$2.SVG ? k.getSVGElementSize(select(this).select("svg.layout-svg-wrapper"), {
        useBBox: true
      }) : k.getHTMLElementSize(this);
      if (p2 === W$3.PREFERRED) {
        const g2 = a2 ? u2.width : u2.height, m2 = a2 ? s2 : n2;
        d2.size = g2 / m2 * 100;
      }
    }), r2.exit().remove(), this.children.filter((d2) => G$1(d2, "growth") === W$3.STRETCH).forEach((d2) => {
      d2.size = (100 - +this.getPreferedAndFixedSizeSum()) / +this.getNumOfStretchChildren();
    });
    const c2 = t2.selectAll(`div.layout-child-${this._instanceID}`).data(this.children, (d2) => d2.id);
    a2 ? c2.style("width", (d2) => `${d2.size / 100 * s2}px`).style("height", "100%") : c2.style("height", (d2) => `${d2.size / 100 * n2}px`).style("width", "100%"), c2.each(function(d2) {
      d2.components.forEach((p2) => {
        G$1(d2, "growth") === W$3.STRETCH && p2.render(e2);
      });
    });
  }
  // Pass on model to children as well
  setModel(e2) {
    super.setModel(e2), this.children.forEach((t2) => {
      t2.components.forEach((s2) => s2.setModel(e2));
    });
  }
  // Pass on essentials to children as well
  setServices(e2) {
    super.setServices(e2), this.children.forEach((t2) => {
      t2.components.forEach((s2) => s2.setServices(e2));
    });
  }
  destroy() {
    this.children.forEach((e2) => {
      e2.components.forEach((t2) => t2.destroy());
    });
  }
};
Us.instanceID = Math.floor(Math.random() * 99999999999);
let ac = Us;
class ic extends z {
  constructor() {
    super(...arguments), this.type = "spacer";
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render(e2 = false) {
    this.getComponentContainer().style("width", `${this.configs.size || $c$1.default.size}px`).style("height", `${this.configs.size || $c$1.default.size}px`).attr("opacity", 0);
  }
}
var Ua = {
  prefix: "bx",
  selectorTabbable: `
    a[href], area[href], input:not([disabled]):not([tabindex='-1']),
    button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']),
    textarea:not([disabled]):not([tabindex='-1']),
    iframe, object, embed, *[tabindex]:not([tabindex='-1']), *[contenteditable=true]
  `,
  selectorFocusable: `
    a[href], area[href], input:not([disabled]),
    button:not([disabled]),select:not([disabled]),
    textarea:not([disabled]),
    iframe, object, embed, *[tabindex], *[contenteditable=true]
  `
}, ht = Ua;
function Qt(o2, e2) {
  for (var t2 = 0; t2 < e2.length; t2++) {
    var s2 = e2[t2];
    s2.enumerable = s2.enumerable || false, s2.configurable = true, "value" in s2 && (s2.writable = true), Object.defineProperty(o2, s2.key, s2);
  }
}
function za(o2, e2, t2) {
  return e2 && Qt(o2.prototype, e2), t2 && Qt(o2, t2), Object.defineProperty(o2, "prototype", {
    writable: false
  }), o2;
}
function Fa(o2, e2) {
  if (!(o2 instanceof e2))
    throw new TypeError("Cannot call a class as a function");
}
function Wa(o2) {
  return Ya(o2) || Xa(o2) || Za(o2) || ja();
}
function ja() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Za(o2, e2) {
  if (o2) {
    if (typeof o2 == "string")
      return ft(o2, e2);
    var t2 = Object.prototype.toString.call(o2).slice(8, -1);
    if (t2 === "Object" && o2.constructor && (t2 = o2.constructor.name), t2 === "Map" || t2 === "Set")
      return Array.from(o2);
    if (t2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t2))
      return ft(o2, e2);
  }
}
function Xa(o2) {
  if (typeof Symbol < "u" && o2[Symbol.iterator] != null || o2["@@iterator"] != null)
    return Array.from(o2);
}
function Ya(o2) {
  if (Array.isArray(o2))
    return ft(o2);
}
function ft(o2, e2) {
  (e2 == null || e2 > o2.length) && (e2 = o2.length);
  for (var t2 = 0, s2 = new Array(e2); t2 < e2; t2++)
    s2[t2] = o2[t2];
  return s2;
}
function Fs(o2) {
  return o2.reduce(function(e2, t2) {
    return Array.isArray(t2) ? e2.push.apply(e2, Wa(Fs(t2))) : e2.push(t2), e2;
  }, []);
}
function qa() {
  for (var o2 = arguments.length, e2 = new Array(o2), t2 = 0; t2 < o2; t2++)
    e2[t2] = arguments[t2];
  return Fs(e2).reduce(function(s2, n2) {
    return n2(s2);
  }, /* @__PURE__ */ function() {
    function s2() {
      Fa(this, s2);
    }
    return za(s2);
  }());
}
function vt(o2) {
  "@babel/helpers - typeof";
  return vt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e2) {
    return typeof e2;
  } : function(e2) {
    return e2 && typeof Symbol == "function" && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
  }, vt(o2);
}
function Ka(o2, e2) {
  if (!(o2 instanceof e2))
    throw new TypeError("Cannot call a class as a function");
}
function es(o2, e2) {
  for (var t2 = 0; t2 < e2.length; t2++) {
    var s2 = e2[t2];
    s2.enumerable = s2.enumerable || false, s2.configurable = true, "value" in s2 && (s2.writable = true), Object.defineProperty(o2, s2.key, s2);
  }
}
function Ja(o2, e2, t2) {
  return e2 && es(o2.prototype, e2), t2 && es(o2, t2), Object.defineProperty(o2, "prototype", {
    writable: false
  }), o2;
}
function Qa(o2, e2) {
  if (typeof e2 != "function" && e2 !== null)
    throw new TypeError("Super expression must either be null or a function");
  o2.prototype = Object.create(e2 && e2.prototype, {
    constructor: {
      value: o2,
      writable: true,
      configurable: true
    }
  }), Object.defineProperty(o2, "prototype", {
    writable: false
  }), e2 && yt2(o2, e2);
}
function yt2(o2, e2) {
  return yt2 = Object.setPrototypeOf || function(s2, n2) {
    return s2.__proto__ = n2, s2;
  }, yt2(o2, e2);
}
function ei(o2) {
  var e2 = si();
  return function() {
    var s2 = Ze$1(o2), n2;
    if (e2) {
      var a2 = Ze$1(this).constructor;
      n2 = Reflect.construct(s2, arguments, a2);
    } else
      n2 = s2.apply(this, arguments);
    return ti(this, n2);
  };
}
function ti(o2, e2) {
  if (e2 && (vt(e2) === "object" || typeof e2 == "function"))
    return e2;
  if (e2 !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Ws(o2);
}
function Ws(o2) {
  if (o2 === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return o2;
}
function si() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return false;
  if (typeof Proxy == "function")
    return true;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), true;
  } catch {
    return false;
  }
}
function Ze$1(o2) {
  return Ze$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function(t2) {
    return t2.__proto__ || Object.getPrototypeOf(t2);
  }, Ze$1(o2);
}
function ni(o2) {
  var e2 = /* @__PURE__ */ function(t2) {
    Qa(n2, t2);
    var s2 = ei(n2);
    function n2(a2) {
      var i2, r2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (Ka(this, n2), i2 = s2.call(this, a2, r2), i2.children = [], !a2 || a2.nodeType !== Node.ELEMENT_NODE)
        throw new TypeError("DOM element should be given to initialize this widget.");
      return i2.element = a2, i2.options = Object.assign(Object.create(i2.constructor.options), r2), i2.constructor.components.set(i2.element, Ws(i2)), i2;
    }
    return Ja(n2, [{
      key: "release",
      value: (
        /**
         * Releases this component's instance from the associated element.
         */
        function() {
          for (var i2 = this.children.pop(); i2; i2 = this.children.pop())
            i2.release();
          return this.constructor.components.delete(this.element), null;
        }
      )
    }], [{
      key: "create",
      value: function(i2, r2) {
        return this.components.get(i2) || new this(i2, r2);
      }
    }]), n2;
  }(o2);
  return e2;
}
function bt(o2) {
  "@babel/helpers - typeof";
  return bt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e2) {
    return typeof e2;
  } : function(e2) {
    return e2 && typeof Symbol == "function" && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
  }, bt(o2);
}
function ai(o2, e2) {
  if (!(o2 instanceof e2))
    throw new TypeError("Cannot call a class as a function");
}
function ts(o2, e2) {
  for (var t2 = 0; t2 < e2.length; t2++) {
    var s2 = e2[t2];
    s2.enumerable = s2.enumerable || false, s2.configurable = true, "value" in s2 && (s2.writable = true), Object.defineProperty(o2, s2.key, s2);
  }
}
function ii(o2, e2, t2) {
  return e2 && ts(o2.prototype, e2), t2 && ts(o2, t2), Object.defineProperty(o2, "prototype", {
    writable: false
  }), o2;
}
function We$1() {
  return typeof Reflect < "u" && Reflect.get ? We$1 = Reflect.get : We$1 = function(e2, t2, s2) {
    var n2 = ri(e2, t2);
    if (n2) {
      var a2 = Object.getOwnPropertyDescriptor(n2, t2);
      return a2.get ? a2.get.call(arguments.length < 3 ? e2 : s2) : a2.value;
    }
  }, We$1.apply(this, arguments);
}
function ri(o2, e2) {
  for (; !Object.prototype.hasOwnProperty.call(o2, e2) && (o2 = De(o2), o2 !== null); )
    ;
  return o2;
}
function oi(o2, e2) {
  if (typeof e2 != "function" && e2 !== null)
    throw new TypeError("Super expression must either be null or a function");
  o2.prototype = Object.create(e2 && e2.prototype, {
    constructor: {
      value: o2,
      writable: true,
      configurable: true
    }
  }), Object.defineProperty(o2, "prototype", {
    writable: false
  }), e2 && Et(o2, e2);
}
function Et(o2, e2) {
  return Et = Object.setPrototypeOf || function(s2, n2) {
    return s2.__proto__ = n2, s2;
  }, Et(o2, e2);
}
function li(o2) {
  var e2 = hi();
  return function() {
    var s2 = De(o2), n2;
    if (e2) {
      var a2 = De(this).constructor;
      n2 = Reflect.construct(s2, arguments, a2);
    } else
      n2 = s2.apply(this, arguments);
    return ci(this, n2);
  };
}
function ci(o2, e2) {
  if (e2 && (bt(e2) === "object" || typeof e2 == "function"))
    return e2;
  if (e2 !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return di(o2);
}
function di(o2) {
  if (o2 === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return o2;
}
function hi() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return false;
  if (typeof Proxy == "function")
    return true;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), true;
  } catch {
    return false;
  }
}
function De(o2) {
  return De = Object.setPrototypeOf ? Object.getPrototypeOf : function(t2) {
    return t2.__proto__ || Object.getPrototypeOf(t2);
  }, De(o2);
}
function ui(o2) {
  var e2 = /* @__PURE__ */ function(t2) {
    oi(n2, t2);
    var s2 = li(n2);
    function n2() {
      var a2;
      ai(this, n2);
      for (var i2 = arguments.length, r2 = new Array(i2), l2 = 0; l2 < i2; l2++)
        r2[l2] = arguments[l2];
      return a2 = s2.call.apply(s2, [this].concat(r2)), a2.handles = /* @__PURE__ */ new Set(), a2;
    }
    return ii(n2, [{
      key: "manage",
      value: (
        /**
         * Manages the given handle.
         * @param {Handle} handle The handle to manage.
         * @returns {Handle} The given handle.
         */
        function(i2) {
          return this.handles.add(i2), i2;
        }
      )
      /**
       * Stop managing the given handle.
       * @param {Handle} handle The handle to stop managing.
       * @returns {Handle} The given handle.
       */
    }, {
      key: "unmanage",
      value: function(i2) {
        return this.handles.delete(i2), i2;
      }
    }, {
      key: "release",
      value: function() {
        var i2 = this;
        return this.handles.forEach(function(r2) {
          r2.release(), i2.handles.delete(r2);
        }), We$1(De(n2.prototype), "release", this).call(this);
      }
    }]), n2;
  }(o2);
  return e2;
}
function Be(o2) {
  for (var e2 = arguments.length, t2 = new Array(e2 > 1 ? e2 - 1 : 0), s2 = 1; s2 < e2; s2++)
    t2[s2 - 1] = arguments[s2];
  return o2.addEventListener.apply(o2, t2), {
    release: function() {
      return o2.removeEventListener.apply(o2, t2), null;
    }
  };
}
function St(o2) {
  "@babel/helpers - typeof";
  return St = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e2) {
    return typeof e2;
  } : function(e2) {
    return e2 && typeof Symbol == "function" && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
  }, St(o2);
}
function pi(o2) {
  return vi(o2) || fi(o2) || mi(o2) || gi();
}
function gi() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function mi(o2, e2) {
  if (o2) {
    if (typeof o2 == "string")
      return xt(o2, e2);
    var t2 = Object.prototype.toString.call(o2).slice(8, -1);
    if (t2 === "Object" && o2.constructor && (t2 = o2.constructor.name), t2 === "Map" || t2 === "Set")
      return Array.from(o2);
    if (t2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t2))
      return xt(o2, e2);
  }
}
function fi(o2) {
  if (typeof Symbol < "u" && o2[Symbol.iterator] != null || o2["@@iterator"] != null)
    return Array.from(o2);
}
function vi(o2) {
  if (Array.isArray(o2))
    return xt(o2);
}
function xt(o2, e2) {
  (e2 == null || e2 > o2.length) && (e2 = o2.length);
  for (var t2 = 0, s2 = new Array(e2); t2 < e2; t2++)
    s2[t2] = o2[t2];
  return s2;
}
function yi(o2, e2) {
  if (!(o2 instanceof e2))
    throw new TypeError("Cannot call a class as a function");
}
function ss(o2, e2) {
  for (var t2 = 0; t2 < e2.length; t2++) {
    var s2 = e2[t2];
    s2.enumerable = s2.enumerable || false, s2.configurable = true, "value" in s2 && (s2.writable = true), Object.defineProperty(o2, s2.key, s2);
  }
}
function bi(o2, e2, t2) {
  return e2 && ss(o2.prototype, e2), t2 && ss(o2, t2), Object.defineProperty(o2, "prototype", {
    writable: false
  }), o2;
}
function Ei(o2, e2) {
  if (typeof e2 != "function" && e2 !== null)
    throw new TypeError("Super expression must either be null or a function");
  o2.prototype = Object.create(e2 && e2.prototype, {
    constructor: {
      value: o2,
      writable: true,
      configurable: true
    }
  }), Object.defineProperty(o2, "prototype", {
    writable: false
  }), e2 && Ot(o2, e2);
}
function Ot(o2, e2) {
  return Ot = Object.setPrototypeOf || function(s2, n2) {
    return s2.__proto__ = n2, s2;
  }, Ot(o2, e2);
}
function Si(o2) {
  var e2 = Ti();
  return function() {
    var s2 = Xe$1(o2), n2;
    if (e2) {
      var a2 = Xe$1(this).constructor;
      n2 = Reflect.construct(s2, arguments, a2);
    } else
      n2 = s2.apply(this, arguments);
    return xi(this, n2);
  };
}
function xi(o2, e2) {
  if (e2 && (St(e2) === "object" || typeof e2 == "function"))
    return e2;
  if (e2 !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Oi(o2);
}
function Oi(o2) {
  if (o2 === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return o2;
}
function Ti() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return false;
  if (typeof Proxy == "function")
    return true;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), true;
  } catch {
    return false;
  }
}
function Xe$1(o2) {
  return Xe$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function(t2) {
    return t2.__proto__ || Object.getPrototypeOf(t2);
  }, Xe$1(o2);
}
function Li(o2) {
  var e2 = /* @__PURE__ */ function(t2) {
    Ei(n2, t2);
    var s2 = Si(n2);
    function n2() {
      return yi(this, n2), s2.apply(this, arguments);
    }
    return bi(n2, [{
      key: "_changeState",
      value: (
        /* eslint-disable jsdoc/check-param-names */
        /**
         * The internal implementation for {@link EventedState#changeState `.changeState()`}, performing actual change in state.
         * @param {string} [state] The new state. Can be an omitted, which means toggling.
         * @param {object} [detail]
         *   The object that should be put to event details that is fired before/after changing state.
         *   Can have a `group` property, which specifies what state to be changed.
         * @param {EventedState~changeStateCallback} callback The callback called once changing state is finished or is canceled.
         * @private
         */
        function() {
          throw new Error("_changeState() should be overridden to perform actual change in state.");
        }
      )
      /**
       * Changes the state of this component.
       * @param {string} [state] The new state. Can be an omitted, which means toggling.
       * @param {object} [detail]
       *   The object that should be put to event details that is fired before/after changing state.
       *   Can have a `group` property, which specifies what state to be changed.
       * @param {EventedState~changeStateCallback} [callback] The callback called once changing state is finished or is canceled.
       */
    }, {
      key: "changeState",
      value: function() {
        for (var i2 = this, r2 = arguments.length, l2 = new Array(r2), c2 = 0; c2 < r2; c2++)
          l2[c2] = arguments[c2];
        var d2 = typeof l2[0] == "string" ? l2.shift() : void 0, p2 = Object(l2[0]) === l2[0] && typeof l2[0] != "function" ? l2.shift() : void 0, h2 = typeof l2[0] == "function" ? l2.shift() : void 0;
        if (typeof this.shouldStateBeChanged == "function" && !this.shouldStateBeChanged(d2, p2)) {
          h2 && h2(null, true);
          return;
        }
        var u2 = {
          group: p2 && p2.group,
          state: d2
        }, g2 = [u2.group, d2].filter(Boolean).join("-").split("-").map(function(M2) {
          return M2[0].toUpperCase() + M2.substr(1);
        }).join(""), m2 = new CustomEvent(this.options["eventBefore".concat(g2)], {
          bubbles: true,
          cancelable: true,
          detail: p2
        }), b2 = p2 && p2.delegatorNode || this.element, v2 = !b2.dispatchEvent(m2);
        if (v2) {
          if (h2) {
            var S2 = new Error("Changing state (".concat(JSON.stringify(u2), ") has been canceled."));
            S2.canceled = true, h2(S2);
          }
        } else {
          var T2 = [d2, p2].filter(Boolean);
          this._changeState.apply(this, pi(T2).concat([function() {
            b2.dispatchEvent(new CustomEvent(i2.options["eventAfter".concat(g2)], {
              bubbles: true,
              cancelable: true,
              detail: p2
            })), h2 && h2();
          }]));
        }
      }
      /* eslint-enable jsdoc/check-param-names */
      /**
       * Tests if change in state should happen or not.
       * Classes inheriting {@link EventedState `EventedState`} should override this function.
       * @function EventedState#shouldStateBeChanged
       * @param {string} [state] The new state. Can be an omitted, which means toggling.
       * @param {object} [detail]
       *   The object that should be put to event details that is fired before/after changing state.
       *   Can have a `group` property, which specifies what state to be changed.
       * @returns {boolean}
       *   `false` if change in state shouldn't happen, e.g. when the given new state is the same as the current one.
       */
    }]), n2;
  }(o2);
  return e2;
}
function Tt(o2, e2) {
  var t2 = o2.target, s2 = o2.currentTarget;
  if (typeof t2.matches == "function") {
    if (t2.matches(e2))
      return t2;
    if (t2.matches("".concat(e2, " *"))) {
      var n2 = t2.closest(e2);
      if ((s2.nodeType === Node.DOCUMENT_NODE ? s2.documentElement : s2).contains(n2))
        return n2;
    }
  }
}
function ns(o2) {
  if (!o2 || typeof o2 == "function")
    return {
      launchingElement: null,
      launchingEvent: null
    };
  var e2 = o2.delegateTarget || o2.currentTarget || o2, t2 = o2.currentTarget && o2;
  if (e2 && !e2.nodeType)
    throw new TypeError("DOM Node should be given for launching element.");
  if (t2 && !t2.type)
    throw new TypeError("DOM event should be given for launching event.");
  return {
    launchingElement: e2,
    launchingEvent: t2
  };
}
function Lt(o2) {
  "@babel/helpers - typeof";
  return Lt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e2) {
    return typeof e2;
  } : function(e2) {
    return e2 && typeof Symbol == "function" && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
  }, Lt(o2);
}
function wi(o2, e2) {
  if (!(o2 instanceof e2))
    throw new TypeError("Cannot call a class as a function");
}
function as(o2, e2) {
  for (var t2 = 0; t2 < e2.length; t2++) {
    var s2 = e2[t2];
    s2.enumerable = s2.enumerable || false, s2.configurable = true, "value" in s2 && (s2.writable = true), Object.defineProperty(o2, s2.key, s2);
  }
}
function Mi(o2, e2, t2) {
  return e2 && as(o2.prototype, e2), t2 && as(o2, t2), Object.defineProperty(o2, "prototype", {
    writable: false
  }), o2;
}
function Ai(o2, e2) {
  if (typeof e2 != "function" && e2 !== null)
    throw new TypeError("Super expression must either be null or a function");
  o2.prototype = Object.create(e2 && e2.prototype, {
    constructor: {
      value: o2,
      writable: true,
      configurable: true
    }
  }), Object.defineProperty(o2, "prototype", {
    writable: false
  }), e2 && wt(o2, e2);
}
function wt(o2, e2) {
  return wt = Object.setPrototypeOf || function(s2, n2) {
    return s2.__proto__ = n2, s2;
  }, wt(o2, e2);
}
function Ci(o2) {
  var e2 = Ri();
  return function() {
    var s2 = Ye$1(o2), n2;
    if (e2) {
      var a2 = Ye$1(this).constructor;
      n2 = Reflect.construct(s2, arguments, a2);
    } else
      n2 = s2.apply(this, arguments);
    return ki(this, n2);
  };
}
function ki(o2, e2) {
  if (e2 && (Lt(e2) === "object" || typeof e2 == "function"))
    return e2;
  if (e2 !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Ii(o2);
}
function Ii(o2) {
  if (o2 === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return o2;
}
function Ri() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return false;
  if (typeof Proxy == "function")
    return true;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), true;
  } catch {
    return false;
  }
}
function Ye$1(o2) {
  return Ye$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function(t2) {
    return t2.__proto__ || Object.getPrototypeOf(t2);
  }, Ye$1(o2);
}
function Di(o2) {
  var e2 = /* @__PURE__ */ function(t2) {
    Ai(n2, t2);
    var s2 = Ci(n2);
    function n2() {
      return wi(this, n2), s2.apply(this, arguments);
    }
    return Mi(n2, [{
      key: "show",
      value: (
        /**
         */
        /**
         * Switch to 'shown' state.
         * @param [evtOrElem] The launching event or element.
         * @param {EventedState~changeStateCallback} [callback] The callback.
         */
        function(i2, r2) {
          (!i2 || typeof i2 == "function") && (r2 = i2), this.changeState("shown", ns(i2), r2);
        }
      )
      /**
       * Switch to 'hidden' state.
       * @param [evtOrElem] The launching event or element.
       * @param {EventedState~changeStateCallback} [callback] The callback.
       */
    }, {
      key: "hide",
      value: function(i2, r2) {
        (!i2 || typeof i2 == "function") && (r2 = i2), this.changeState("hidden", ns(i2), r2);
      }
    }]), n2;
  }(o2);
  return e2;
}
var _i = [Li, Di];
const Pi = _i;
function Vi(o2) {
  return o2 && o2.__esModule && Object.prototype.hasOwnProperty.call(o2, "default") ? o2.default : o2;
}
var js = function() {
};
process.env.NODE_ENV !== "production" && (js = function(o2, e2, t2) {
  var s2 = arguments.length;
  t2 = new Array(s2 > 2 ? s2 - 2 : 0);
  for (var n2 = 2; n2 < s2; n2++)
    t2[n2 - 2] = arguments[n2];
  if (e2 === void 0)
    throw new Error(
      "`warning(condition, format, ...args)` requires a warning message argument"
    );
  if (e2.length < 10 || /^[s\W]*$/.test(e2))
    throw new Error(
      "The warning format should be able to uniquely identify this warning. Please, use a more descriptive format than: " + e2
    );
  if (!o2) {
    var a2 = 0, i2 = "Warning: " + e2.replace(/%s/g, function() {
      return t2[a2++];
    });
    typeof console < "u" && console.error(i2);
    try {
      throw new Error(i2);
    } catch {
    }
  }
});
var Bi = js;
const $i = /* @__PURE__ */ Vi(Bi);
function Mt(o2) {
  "@babel/helpers - typeof";
  return Mt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e2) {
    return typeof e2;
  } : function(e2) {
    return e2 && typeof Symbol == "function" && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
  }, Mt(o2);
}
function Gi(o2, e2) {
  if (!(o2 instanceof e2))
    throw new TypeError("Cannot call a class as a function");
}
function is(o2, e2) {
  for (var t2 = 0; t2 < e2.length; t2++) {
    var s2 = e2[t2];
    s2.enumerable = s2.enumerable || false, s2.configurable = true, "value" in s2 && (s2.writable = true), Object.defineProperty(o2, s2.key, s2);
  }
}
function Ni(o2, e2, t2) {
  return e2 && is(o2.prototype, e2), t2 && is(o2, t2), Object.defineProperty(o2, "prototype", {
    writable: false
  }), o2;
}
function Hi(o2, e2) {
  if (typeof e2 != "function" && e2 !== null)
    throw new TypeError("Super expression must either be null or a function");
  o2.prototype = Object.create(e2 && e2.prototype, {
    constructor: {
      value: o2,
      writable: true,
      configurable: true
    }
  }), Object.defineProperty(o2, "prototype", {
    writable: false
  }), e2 && At(o2, e2);
}
function At(o2, e2) {
  return At = Object.setPrototypeOf || function(s2, n2) {
    return s2.__proto__ = n2, s2;
  }, At(o2, e2);
}
function Ui(o2) {
  var e2 = Wi();
  return function() {
    var s2 = qe$1(o2), n2;
    if (e2) {
      var a2 = qe$1(this).constructor;
      n2 = Reflect.construct(s2, arguments, a2);
    } else
      n2 = s2.apply(this, arguments);
    return zi(this, n2);
  };
}
function zi(o2, e2) {
  if (e2 && (Mt(e2) === "object" || typeof e2 == "function"))
    return e2;
  if (e2 !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Fi(o2);
}
function Fi(o2) {
  if (o2 === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return o2;
}
function Wi() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return false;
  if (typeof Proxy == "function")
    return true;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), true;
  } catch {
    return false;
  }
}
function qe$1(o2) {
  return qe$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function(t2) {
    return t2.__proto__ || Object.getPrototypeOf(t2);
  }, qe$1(o2);
}
function ji(o2) {
  var e2 = /* @__PURE__ */ function(t2) {
    Hi(n2, t2);
    var s2 = Ui(n2);
    function n2() {
      return Gi(this, n2), s2.apply(this, arguments);
    }
    return Ni(n2, null, [{
      key: "init",
      value: (
        /**
         * `true` suggests that this component is lazily initialized upon an action/event, etc.
         * @type {boolean}
         */
        /**
         * Instantiates this component in the given element.
         * If the given element indicates that it's an component of this class, instantiates it.
         * Otherwise, instantiates this component by clicking on launcher buttons
         * (buttons with attribute that `options.attribInitTarget` points to) of this component in the given node.
         * @param {Node} target The DOM node to instantiate this component in. Should be a document or an element.
         * @param {object} [options] The component options.
         * @param {string} [options.selectorInit] The CSS selector to find this component.
         * @param {string} [options.attribInitTarget] The attribute name in the launcher buttons to find target component.
         * @returns {Handle} The handle to remove the event listener to handle clicking.
         */
        function() {
          var i2 = this, r2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document, l2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, c2 = Object.assign(Object.create(this.options), l2);
          if (!r2 || r2.nodeType !== Node.ELEMENT_NODE && r2.nodeType !== Node.DOCUMENT_NODE)
            throw new TypeError("DOM document or DOM element should be given to search for and initialize this widget.");
          if (r2.nodeType === Node.ELEMENT_NODE && r2.matches(c2.selectorInit))
            this.create(r2, l2);
          else {
            var d2 = c2.initEventNames.map(function(p2) {
              return Be(r2, p2, function(h2) {
                var u2 = Tt(h2, "[".concat(c2.attribInitTarget, "]"));
                if (u2) {
                  h2.delegateTarget = u2;
                  var g2 = u2.ownerDocument.querySelectorAll(u2.getAttribute(c2.attribInitTarget));
                  if (g2.length > 1)
                    throw new Error("Target widget must be unique.");
                  if (g2.length === 1) {
                    u2.tagName === "A" && h2.preventDefault();
                    var m2 = i2.create(g2[0], l2);
                    typeof m2.createdByLauncher == "function" && m2.createdByLauncher(h2);
                  }
                }
              });
            });
            return {
              release: function() {
                for (var h2 = d2.pop(); h2; h2 = d2.pop())
                  h2.release();
              }
            };
          }
          return "";
        }
      )
    }]), n2.forLazyInit = true, n2;
  }(o2);
  return e2;
}
function Ct(o2) {
  "@babel/helpers - typeof";
  return Ct = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e2) {
    return typeof e2;
  } : function(e2) {
    return e2 && typeof Symbol == "function" && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
  }, Ct(o2);
}
function Zi(o2, e2) {
  if (!(o2 instanceof e2))
    throw new TypeError("Cannot call a class as a function");
}
function rs(o2, e2) {
  for (var t2 = 0; t2 < e2.length; t2++) {
    var s2 = e2[t2];
    s2.enumerable = s2.enumerable || false, s2.configurable = true, "value" in s2 && (s2.writable = true), Object.defineProperty(o2, s2.key, s2);
  }
}
function Xi(o2, e2, t2) {
  return e2 && rs(o2.prototype, e2), t2 && rs(o2, t2), Object.defineProperty(o2, "prototype", {
    writable: false
  }), o2;
}
function Yi(o2, e2) {
  if (typeof e2 != "function" && e2 !== null)
    throw new TypeError("Super expression must either be null or a function");
  o2.prototype = Object.create(e2 && e2.prototype, {
    constructor: {
      value: o2,
      writable: true,
      configurable: true
    }
  }), Object.defineProperty(o2, "prototype", {
    writable: false
  }), e2 && kt(o2, e2);
}
function kt(o2, e2) {
  return kt = Object.setPrototypeOf || function(s2, n2) {
    return s2.__proto__ = n2, s2;
  }, kt(o2, e2);
}
function qi(o2) {
  var e2 = Qi();
  return function() {
    var s2 = Ke$1(o2), n2;
    if (e2) {
      var a2 = Ke$1(this).constructor;
      n2 = Reflect.construct(s2, arguments, a2);
    } else
      n2 = s2.apply(this, arguments);
    return Ki(this, n2);
  };
}
function Ki(o2, e2) {
  if (e2 && (Ct(e2) === "object" || typeof e2 == "function"))
    return e2;
  if (e2 !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Ji(o2);
}
function Ji(o2) {
  if (o2 === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return o2;
}
function Qi() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return false;
  if (typeof Proxy == "function")
    return true;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), true;
  } catch {
    return false;
  }
}
function Ke$1(o2) {
  return Ke$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function(t2) {
    return t2.__proto__ || Object.getPrototypeOf(t2);
  }, Ke$1(o2);
}
var er = /* @__PURE__ */ function(o2) {
  Yi(t2, o2);
  var e2 = qi(t2);
  function t2(s2, n2) {
    var a2;
    return Zi(this, t2), a2 = e2.call(this, s2, n2), a2._handleFocusinListener = void 0, a2._handleKeydownListener = void 0, a2._handleFocusin = function(i2) {
      var r2 = a2.element.querySelector(a2.options.selectorModalContainer) || a2.element;
      a2.element.classList.contains(a2.options.classVisible) && !r2.contains(i2.target) && a2.options.selectorsFloatingMenus.every(function(l2) {
        return !Tt(i2, l2);
      }) && a2.element.querySelector(ht.selectorTabbable).focus();
    }, a2._hookCloseActions(), a2;
  }
  return Xi(t2, [{
    key: "createdByLauncher",
    value: (
      /**
       * A method that runs when `.init()` is called from `initComponentByLauncher`.
       * @param {Event} evt The event fired on the launcher button.
       */
      function(n2) {
        this.show(n2);
      }
    )
    /**
     * Determines whether or not to emit events and callback function when `.changeState()` is called from `eventedState`.
     * @param {string} state The new state.
     * @returns {boolean} `true` if the given `state` is different from current state.
     */
  }, {
    key: "shouldStateBeChanged",
    value: function(n2) {
      return n2 === "shown" ? !this.element.classList.contains(this.options.classVisible) : this.element.classList.contains(this.options.classVisible);
    }
    /**
     * Changes the shown/hidden state.
     * @private
     * @param {string} state The new state.
     * @param {object} detail The detail data to be included in the event that will be fired.
     * @param {Function} callback Callback called when change in state completes.
     */
  }, {
    key: "_changeState",
    value: function(n2, a2, i2) {
      var r2 = this, l2, c2 = function() {
        if (l2 && (l2 = r2.unmanage(l2).release()), n2 === "shown" && r2.element.offsetWidth > 0 && r2.element.offsetHeight > 0) {
          r2.previouslyFocusedNode = r2.element.ownerDocument.activeElement;
          var u2 = r2.element.querySelector(r2.options.selectorPrimaryFocus) || r2.element.querySelector(ht.selectorTabbable);
          u2.focus(), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && $i(u2, "Modals need to contain a focusable element by either using " + "`".concat(r2.options.selectorPrimaryFocus, "` or settings.selectorTabbable."));
        }
        i2();
      };
      if (this._handleFocusinListener && (this._handleFocusinListener = this.unmanage(this._handleFocusinListener).release()), n2 === "shown") {
        var d2 = "onfocusin" in this.element.ownerDocument.defaultView, p2 = d2 ? "focusin" : "focus";
        this._handleFocusinListener = this.manage(Be(this.element.ownerDocument, p2, this._handleFocusin, !d2));
      }
      n2 === "hidden" ? (this.element.classList.toggle(this.options.classVisible, false), this.element.ownerDocument.body.classList.toggle(this.options.classBody, false), (this.options.selectorFocusOnClose || this.previouslyFocusedNode) && (this.element.ownerDocument.querySelector(this.options.selectorFocusOnClose) || this.previouslyFocusedNode).focus()) : n2 === "shown" && (this.element.classList.toggle(this.options.classVisible, true), this.element.ownerDocument.body.classList.toggle(this.options.classBody, true)), l2 = this.manage(Be(this.element, "transitionend", c2));
    }
  }, {
    key: "_hookCloseActions",
    value: function() {
      var n2 = this;
      this.manage(Be(this.element, "click", function(a2) {
        var i2 = Tt(a2, n2.options.selectorModalClose);
        i2 && (a2.delegateTarget = i2), (i2 || a2.target === n2.element) && n2.hide(a2);
      })), this._handleKeydownListener && (this._handleKeydownListener = this.unmanage(this._handleKeydownListener).release()), this._handleKeydownListener = this.manage(Be(this.element.ownerDocument.body, "keydown", function(a2) {
        a2.which === 27 && n2.shouldStateBeChanged("hidden") && (a2.stopPropagation(), n2.hide(a2));
      }));
    }
    /**
     * Handles `focusin` (or `focus` depending on browser support of `focusin`) event to do wrap-focus behavior.
     * @param {Event} evt The event.
     * @private
     */
  }], [{
    key: "options",
    get: (
      /**
       * The component options.
       * If `options` is specified in the constructor, {@linkcode Modal.create .create()}, or {@linkcode Modal.init .init()},
       * properties in this object are overridden for the instance being create and how {@linkcode Modal.init .init()} works.
       * @member Modal.options
       * @type {object}
       * @property {string} selectorInit The CSS class to find modal dialogs.
       * @property {string} [selectorModalClose] The selector to find elements that close the modal.
       * @property {string} [selectorPrimaryFocus] The CSS selector to determine the element to put focus when modal gets open.
       * @property {string} [selectorFocusOnClose] The CSS selector to determine the element to put focus when modal closes.
       *   If undefined, focus returns to the previously focused element prior to the modal opening.
       * @property {string} [selectorModalContainer] The CSS selector for the content container of the modal for focus wrap feature.
       * @property {string} attribInitTarget The attribute name in the launcher buttons to find target modal dialogs.
       * @property {string[]} [selectorsFloatingMenu]
       *   The CSS selectors of floating menus.
       *   Used for detecting if focus-wrap behavior should be disabled temporarily.
       * @property {string} [classVisible] The CSS class for the visible state.
       * @property {string} [classBody] The CSS class for `<body>` with open modal.
       * @property {string} [classNoScroll] The CSS class for hiding scroll bar in body element while modal is shown.
       * @property {string} [eventBeforeShown]
       *   The name of the custom event fired before this modal is shown.
       *   Cancellation of this event stops showing the modal.
       * @property {string} [eventAfterShown]
       *   The name of the custom event telling that modal is sure shown
       *   without being canceled by the event handler named by `eventBeforeShown` option (`modal-beingshown`).
       * @property {string} [eventBeforeHidden]
       *   The name of the custom event fired before this modal is hidden.
       *   Cancellation of this event stops hiding the modal.
       * @property {string} [eventAfterHidden]
       *   The name of the custom event telling that modal is sure hidden
       *   without being canceled by the event handler named by `eventBeforeHidden` option (`modal-beinghidden`).
       */
      function() {
        var n2 = ht.prefix;
        return {
          selectorInit: "[data-modal]",
          selectorModalClose: "[data-modal-close]",
          selectorPrimaryFocus: "[data-modal-primary-focus]",
          selectorsFloatingMenus: [".".concat(n2, "--overflow-menu-options"), ".".concat(n2, "--tooltip"), ".flatpickr-calendar"],
          selectorModalContainer: ".".concat(n2, "--modal-container"),
          classVisible: "is-visible",
          classBody: "".concat(n2, "--body--with-modal-open"),
          attribInitTarget: "data-modal-target",
          initEventNames: ["click"],
          eventBeforeShown: "modal-beingshown",
          eventAfterShown: "modal-shown",
          eventBeforeHidden: "modal-beinghidden",
          eventAfterHidden: "modal-hidden"
        };
      }
    )
  }]), t2.components = /* @__PURE__ */ new WeakMap(), t2;
}(qa(ni, ji, Pi, ui));
const tr = er;
class rc extends z {
  constructor(e2, t2, s2) {
    super(e2, t2, s2), this.type = "modal", this.isEventListenerAdded = false, this.handleShowModal = () => {
      this.modal.html(this.getModalHTML()), this.modal.select("div.cds--modal-footer button.cds--btn").on("click", () => this.model.exportToCSV()), tr.create(this.modal.node()).show();
    }, this.init();
  }
  addEventListeners() {
    this.services.events.addEventListener(oE.Modal.SHOW, this.handleShowModal);
  }
  removeEventListeners() {
    this.services.events.removeEventListener(oE.Modal.SHOW, this.handleShowModal);
  }
  getModalHTML() {
    const e2 = this.model.getOptions(), t2 = G$1(e2, "style", "prefix"), s2 = this.model.getTabularDataArray();
    return `
		<div class="cds--modal-container cds--modal-container">
			<div class="cds--modal-header cds--modal-header">
				<p class="cds--modal-header__label cds--type-delta cds--modal-header__label cds--type-delta" id="modal-title">Tabular representation</p>

				<p class="cds--modal-header__heading cds--type-beta cds--modal-header__heading cds--type-beta" id="modal-description">${e2.title}</p>

				<button class="cds--modal-close cds--modal-close" type="button" data-modal-close aria-label="close modal"  data-modal-primary-focus>
					<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-label="Close" width="20" height="20" viewBox="0 0 32 32" role="img" class="cds--modal-close__icon cds--modal-close__icon">
						<path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"></path>
					</svg>
				</button>
			</div>

			<div class="cds--modal-content cds--modal-content">
				<table class="cds--data-table cds--data-table--no-border cds--data-table cds--data-table--no-border">
					<thead>
						<tr>
							${cs$1(s2, 0).map(
      (n2) => `<th scope="col">
								<div class="cds--table-header-label cds--table-header-label">${n2}</div>
							</th>`
    ).join("")}
						</tr>
					</thead>

					<tbody>${s2.slice(1).map(
      (n2) => `
							<tr>
								${n2.map((a2) => `<td>${a2}</td>`).join("")}
							</tr>`
    ).join("")}
					</tbody>
				</table>
			</div>

			<div class="cds--modal-footer cds--modal-footer">
			  <div class="${fc$1}--${t2}-modal-footer-spacer"></div>
			  <button class="cds--btn cds--btn--primary cds--btn cds--btn--primary" type="button" data-modal-primary-focus>Download as CSV</button>
			</div>
		</div>`;
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render(e2 = false) {
    const t2 = this.model.getOptions();
    if (!this.isEventListenerAdded) {
      const s2 = select(this.services.domUtils.getHolder()), n2 = G$1(t2, "style", "prefix");
      this.modal = k.appendOrSelect(s2, `div.${fc$1}--${n2}--modal`), this.addEventListeners(), this.isEventListenerAdded = true, this.modal.attr("data-modal", true).attr("class", "cds--modal cds--modal").attr("role", "dialog").attr("aria-modal", true).attr("aria-labelledby", "modal-title").attr("aria-describedby", "modal-description").attr("tabindex", -1);
    }
  }
  destroy() {
    this.removeEventListeners(), this.isEventListenerAdded = false;
  }
}
class sr extends z {
  constructor() {
    super(...arguments), this.type = "title", this.renderType = D$2.HTML;
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render(e2 = false) {
    const t2 = this.getComponentContainer(), s2 = G$1(this.getOptions(), "title"), n2 = t2.selectAll("p.title").data([s2]);
    if (n2.enter().append("p").classed("title", true).attr("role", "heading").attr("aria-level", 2).merge(n2).html((a2) => a2), n2.node() && n2.node().offsetWidth < n2.node().scrollWidth) {
      const a2 = this;
      n2.on("mouseover", function(i2) {
        a2.services.events.dispatchEvent(oE.Tooltip.SHOW, {
          event: i2,
          hoveredElement: n2,
          content: n2.text()
        });
      }).on("mousemove", function(i2) {
        a2.services.events.dispatchEvent(oE.Tooltip.MOVE, {
          event: i2
        });
      }).on("mouseout", function() {
        a2.services.events.dispatchEvent(oE.Tooltip.HIDE);
      });
    }
    n2.exit().remove();
  }
  /**
   * Truncates title creating ellipses and attaching tooltip for exposing full title.
   */
  truncateTitle(e2, t2) {
    if (t2 <= 0)
      return;
    const s2 = e2.text();
    if (e2.node().getComputedTextLength() > t2) {
      e2.append("tspan").text("...");
      const n2 = k.appendOrSelect(e2, "tspan").node().getComputedTextLength(), a2 = e2.text(), i2 = this.getSubstringIndex(
        e2.node(),
        0,
        a2.length - 1,
        t2 - n2
      );
      e2.html(a2.substring(0, i2 - 1)).append("tspan").text("...");
      const r2 = this;
      e2.on("mouseover", function(l2) {
        r2.services.events.dispatchEvent(oE.Tooltip.SHOW, {
          event: l2,
          hoveredElement: e2,
          content: s2
        });
      }).on("mousemove", function(l2) {
        r2.services.events.dispatchEvent(oE.Tooltip.MOVE, {
          event: l2
        });
      }).on("mouseout", function() {
        r2.services.events.dispatchEvent(oE.Tooltip.HIDE);
      });
    }
  }
  // computes the maximum space a title can take
  getMaxTitleWidth() {
    return k.getSVGElementSize(this.parent.node(), {
      useAttrs: true
    }).width;
  }
  /**
   * Returns the index for a maximum length substring that is less than the width parameter.
   * @param title the title node used for getting the text lengths of substrings
   * @param start the start index for the binary search
   * @param end the end index for the binary search
   * @param width the width of the svg container that holds the title
   */
  getSubstringIndex(e2, t2, s2, n2) {
    const a2 = Math.floor((s2 + t2) / 2);
    return e2.getSubStringLength(0, a2) > n2 ? this.getSubstringIndex(e2, t2, a2, n2) : e2.getSubStringLength(0, a2) < n2 ? e2.getSubStringLength(0, a2 + 1) > n2 ? a2 : this.getSubstringIndex(e2, a2, s2, n2) : a2;
  }
}
class nr extends z {
  constructor() {
    super(...arguments), this.type = "legend", this.renderType = D$2.HTML;
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render(e2 = false) {
    const t2 = this.getOptions(), s2 = G$1(t2, "legend"), n2 = G$1(s2, "alignment"), a2 = G$1(t2, "legend", "orientation");
    let i2 = this.model.getDataGroups();
    const { DISABLED: r$12 } = yc.items.status, l2 = i2.some((S2) => S2.status === r$12), c2 = G$1(s2, "order"), d2 = this.getComponentContainer().classed("center-aligned", n2 === k$2.CENTER).classed("right-aligned", n2 === k$2.RIGHT).classed(a2, true).classed("has-deactivated-items", l2).attr("role", r.GROUP).attr("aria-label", "Data groups").attr("data-name", "legend-items");
    c2 && (i2 = this.sortDataGroups(i2, c2));
    const p2 = d2.selectAll("div.legend-item").data(i2, (S2) => S2.name), h2 = p2.enter().append("div").attr("class", "legend-item");
    h2.merge(d2.selectAll("div.legend-item")).classed("active", function(S2) {
      return S2.status === yc.items.status.ACTIVE;
    });
    const u2 = G$1(this.getOptions(), "legend", "clickable");
    d2.classed("clickable", u2 && i2.length > 1);
    const g2 = yc.checkbox.radius, m2 = h2.append("div").classed("checkbox", true), b2 = m2.merge(p2.select("div.checkbox")).attr("role", r.CHECKBOX).attr("tabindex", u2 ? 0 : -1).attr(
      "aria-labelledby",
      (S2, T2) => this.services.domUtils.generateElementIDString(`legend-datagroup-${T2}-title`)
    ).attr("aria-checked", ({ status: S2 }) => S2 === yc.items.status.ACTIVE).attr("width", g2 * 2).attr("height", g2 * 2).attr(
      "class",
      (S2) => this.model.getColorClassName({
        classNameTypes: [b$1.BACKGROUND],
        dataGroupName: S2.name,
        originalClassName: "checkbox"
      })
    ).style(
      "background",
      (S2) => S2.status === yc.items.status.ACTIVE ? this.model.getFillColor(S2.name) || this.model.getStrokeColor(S2.name) : null
    ).classed("active", function(S2) {
      return S2.status === yc.items.status.ACTIVE;
    });
    m2.append("svg").attr("focusable", false).attr("preserveAspectRatio", "xMidYMid meet").attr("xmlns", "http://www.w3.org/2000/svg").attr("width", "11").attr("height", "11").attr("viewBox", "0 0 31 28").attr("aria-hidden", true).style("will-change", "transform").append("path").attr("d", "M13 21.2l-7.1-7.1-1.4 1.4 7.1 7.1L13 24 27.1 9.9l-1.4-1.5z"), h2.append("p").merge(p2.select("p"));
    const v2 = G$1(t2, "legend", "additionalItems");
    if (v2 && i2.length) {
      const S2 = this, T2 = d2.selectAll("div.additional-item").data(v2);
      T2.exit().remove();
      const M2 = T2.enter().append("div").merge(T2).classed("legend-item", true).classed("additional", true).attr(
        "aria-labelledby",
        (k2, I2) => this.services.domUtils.generateElementIDString(
          `legend-datagroup-${b2.size() + I2}-title`
        )
      );
      M2.selectAll("*").remove();
      let L2, O2 = 1;
      M2.append("svg").classed("icon", true).each(function(k2) {
        const I2 = select(this);
        !L2 || L2 != k2.type ? (L2 = k2.type, O2 = 1) : O2++, S2.addAdditionalItem(I2, k2, O2);
      }), M2.append("p").merge(M2.select("p")), this.truncateLegendText();
    }
    p2.exit().on("mouseover", null).on("click", null).on("mouseout", null).remove(), u2 && h2.size() > 1 && this.addEventListeners();
  }
  sortDataGroups(e2, t2) {
    if (e2.sort(
      (s2, n2) => t2.indexOf(s2.name) - t2.indexOf(n2.name)
    ), t2.length < e2.length) {
      const s2 = e2.length - t2.length;
      return e2.slice(s2).concat(e2.slice(0, s2));
    }
    return e2;
  }
  addAdditionalItem(e2, t2, s2) {
    const { width: n2, height: a2 } = yc.area;
    if (t2.type === rE.RADIUS ? e2.style("width", `${a2}px`).style("height", `${a2}px`) : e2.style("width", `${n2}px`).style("height", `${a2}px`), t2.type === rE.RADIUS) {
      const { iconData: i2, fill: r$12, stroke: l2 } = yc.radius;
      e2.attr("fill", "none").selectAll("circle").data(i2).enter().append("circle").classed("radius", true).attr("role", r.IMG).attr("aria-label", "radius").attr("cx", (d2) => d2.cx).attr("cy", (d2) => d2.cy).attr("r", (d2) => d2.r).style("fill", t2.fill ? t2.fill : r$12).style("stroke", t2.stroke ? t2.stroke : l2);
    } else if (t2.type === rE.LINE) {
      const i2 = yc.line;
      e2.select("line.line").empty() && e2.append("line").classed(`line-${s2}`, true).attr("role", r.IMG).attr("aria-label", "line").attr("x1", 0).attr("y1", i2.yPosition).attr("x2", n2).attr("y2", i2.yPosition).style("stroke", t2.stroke ? t2.stroke : i2.stroke).style("stroke-width", i2.strokeWidth);
    } else if (t2.type === rE.AREA)
      e2.select("rect.area").empty() && e2.append("rect").classed(`area-${s2}`, true).attr("role", r.IMG).attr("aria-label", "area").attr("width", n2).attr("height", a2).style(
        "fill",
        s2 > 3 && !t2.fill ? yc.area.fill : t2.fill
      ).style("stroke", t2.stroke);
    else if (t2.type === rE.SIZE) {
      const { iconData: i2, fill: r$12, stroke: l2 } = yc.size;
      e2.attr("fill", "none").attr("role", r.IMG).attr("aria-label", "size").selectAll("rect").data(i2).enter().append("rect").classed("size", true).attr("width", (d2) => d2.width).attr("height", (d2) => d2.height).attr("y", () => 0).style("fill", t2.fill ? t2.fill : r$12).style("stroke", t2.stroke ? t2.stroke : l2).style("stroke-width", 1);
    } else if (t2.type === rE.QUARTILE) {
      const { iconData: i2 } = yc.quartile;
      e2.selectAll("rect").attr("role", r.IMG).attr("aria-label", "quartile").data(i2).enter().append("rect").attr("class", (l2, c2) => `quartile-${c2 === 0 ? "wrapper" : "line"}`).attr("x", (l2) => l2.x).attr("y", (l2) => l2.y).attr("width", (l2) => l2.width).attr("height", (l2) => l2.height);
    } else if (t2.type === rE.ZOOM) {
      const { iconData: i2, color: r$12 } = G$1(yc, "zoom"), l2 = e2.attr("role", r.IMG).attr("aria-label", "zoom").selectAll("g.icon").data(i2).enter();
      l2.append("g").attr("x", (c2) => c2.x).attr("y", (c2) => c2.y).attr("width", (c2) => c2.width).attr("height", (c2) => c2.height).append("polygon").attr(
        "points",
        "7.7 4.82 5.78 4.82 5.78 2.89 4.82 2.89 4.82 4.82 2.89 4.82 2.89 5.78 4.82 5.78 4.82 7.7 5.78 7.7 5.78 5.78 7.7 5.78 7.7 4.82"
      ).attr("fill", () => t2.color ? t2.color : r$12), l2.append("path").attr(
        "d",
        "M9.36,8.67A5.22,5.22,0,0,0,10.59,5.3,5.3,5.3,0,1,0,5.3,10.59,5.22,5.22,0,0,0,8.67,9.36L12.32,13l.68-.68Zm-4.06,1A4.34,4.34,0,1,1,9.63,5.3,4.33,4.33,0,0,1,5.3,9.63Z"
      ).attr("fill", () => t2.color ? t2.color : r$12);
    }
  }
  truncateLegendText() {
    const e2 = this.getComponentContainer(), t2 = G$1(this.getOptions(), "legend", "truncation"), s2 = G$1(t2, "type"), n2 = G$1(t2, "threshold"), a2 = G$1(t2, "numCharacter"), i2 = e2.selectAll("div.legend-item p");
    i2.attr("id", function() {
      return (this.parentNode.querySelector("div.checkbox") || this.parentNode).getAttribute("aria-labelledby");
    }), s2 !== h$1.NONE ? i2.html(function(r2) {
      return r2.name.length > n2 && r2.name.length !== a2 ? pf(r2.name, s2, a2) : r2.name;
    }) : i2.html((r2) => r2.name);
  }
  addEventListeners() {
    const e2 = this, t2 = this.getComponentContainer(), s2 = this.getOptions(), n2 = G$1(s2, "legend"), a2 = G$1(n2, "truncation");
    t2.selectAll("div.legend-item").on("mouseover", function(i2) {
      e2.services.events.dispatchEvent(oE.Legend.ITEM_HOVER, {
        hoveredElement: select(this)
      });
      const r2 = select(this);
      r2.select("div.checkbox").classed("hovered", true);
      const l2 = r2.datum();
      l2.name.length > a2.threshold && a2.numCharacter < l2.name.length && a2.type !== h$1.NONE && e2.services.events.dispatchEvent(oE.Tooltip.SHOW, {
        event: i2,
        hoveredElement: r2,
        content: l2.name
      });
    }).on("mousemove", function(i2) {
      select(this).datum().name.length > a2.threshold && a2.type !== h$1.NONE && e2.services.events.dispatchEvent(oE.Tooltip.MOVE, {
        event: i2
      });
    }).on("click", function() {
      e2.services.events.dispatchEvent(oE.Legend.ITEM_CLICK, {
        clickedElement: select(this)
      });
      const r2 = select(this).datum();
      e2.model.toggleDataLabel(r2.name);
    }).on("mouseout", function() {
      const i2 = select(this);
      i2.select("div.checkbox").classed("hovered", false), i2.datum().name.length > a2.threshold && a2.type !== h$1.NONE && e2.services.events.dispatchEvent(oE.Tooltip.HIDE), e2.services.events.dispatchEvent(oE.Legend.ITEM_MOUSEOUT, {
        hoveredElement: i2
      });
    }), t2.selectAll("div.legend-item div.checkbox").on("keyup", function(i2) {
      i2.key && i2.key === "Tab" && e2.services.events.dispatchEvent(oE.Legend.ITEM_HOVER, {
        hoveredElement: select(this)
      });
    }), t2.selectAll("div.legend-item div.checkbox").on("keydown", function(i2, r2) {
      i2.key && i2.key === " " ? (i2.preventDefault(), e2.model.toggleDataLabel(r2.name)) : i2.key && i2.key === "Tab" && e2.services.events.dispatchEvent(oE.Legend.ITEM_MOUSEOUT, {
        hoveredElement: select(this)
      });
    }), t2.selectAll("g.additional-item").on("mouseover", function(i2) {
      const r2 = select(this), l2 = r2.datum();
      l2.name.length > a2.threshold && e2.services.events.dispatchEvent(oE.Tooltip.SHOW, {
        event: i2,
        hoveredElement: r2,
        content: l2.name
      });
    });
  }
}
class ar extends z {
  constructor(e2, t2, s2) {
    super(e2, t2, s2), this.type = "chart-clip", this.renderType = D$2.SVG, this.chartClipId = "chart-clip-id-" + Math.floor(Math.random() * 99999999999), this.init();
  }
  init() {
    this.model.set({ chartClipId: this.chartClipId }, { skipUpdate: true });
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render(e2 = true) {
    this.createClipPath();
  }
  createClipPath() {
    const e2 = this.parent, { cartesianScales: t2 } = this.services;
    if (!t2)
      throw new Error("Service cartesianScales was undefined");
    const s2 = t2.getMainXScale(), n2 = t2.getMainYScale(), [a2, i2] = s2.range(), [r2, l2] = n2.range();
    if (!e2)
      throw new Error("svg is undefined");
    this.chartClipPath = k.appendOrSelect(e2, `clipPath.${this.type}`).attr(
      "id",
      this.chartClipId
    );
    const c2 = k.appendOrSelect(this.chartClipPath, `rect.${this.type}`);
    i2 - a2 > 0 && c2.attr("x", a2).attr("y", l2).attr("width", i2 - a2).attr("height", r2 - l2), this.chartClipPath.merge(c2).lower();
  }
}
class oc extends ar {
  constructor() {
    super(...arguments), this.type = "canvas-chart-clip", this.chartClipId = "canvas-chart-clip-id-" + Math.floor(Math.random() * 99999999999);
  }
  createClipPath() {
    const e2 = this.parent, { width: t2, height: s2 } = k.getSVGElementSize(this.parent, {
      useAttrs: true
    });
    this.chartClipPath = k.appendOrSelect(e2, `clipPath.${this.type}`).attr(
      "id",
      this.chartClipId
    );
    const n2 = k.appendOrSelect(this.chartClipPath, `rect.${this.type}`);
    n2.attr("x", 0).attr("y", 0).attr("width", t2).attr("height", s2), this.chartClipPath.merge(n2).lower();
  }
}
var Me, ne;
(function(o2) {
  o2.LEFT = "left", o2.RIGHT = "right", o2.TOP = "top", o2.BOTTOM = "bottom";
})(ne || (ne = {}));
var os = (Me = {}, Me[ne.LEFT] = function(o2, e2, t2) {
  return {
    top: o2.top - Math.round(e2.offsetHeight / 2) + Math.round(t2.height / 2),
    left: Math.round(o2.left - e2.offsetWidth)
  };
}, Me[ne.RIGHT] = function(o2, e2, t2) {
  return {
    top: o2.top - Math.round(e2.offsetHeight / 2) + Math.round(t2.height / 2),
    left: Math.round(o2.left + t2.width)
  };
}, Me[ne.TOP] = function(o2, e2, t2) {
  return {
    top: Math.round(o2.top - e2.offsetHeight),
    left: o2.left - Math.round(e2.offsetWidth / 2) + Math.round(t2.width / 2)
  };
}, Me[ne.BOTTOM] = function(o2, e2, t2) {
  return {
    top: Math.round(o2.top + t2.height),
    left: o2.left - Math.round(e2.offsetWidth / 2) + Math.round(t2.width / 2)
  };
}, Me), ls = typeof window < "u" ? window : {
  innerHeight: 0,
  scrollY: 0,
  innerWidth: 0,
  scrollX: 0
}, et = (
  /** @class */
  function() {
    function o2(e2) {
      e2 === void 0 && (e2 = {}), this.positions = os, this.positions = Object.assign({}, os, e2);
    }
    return o2.prototype.getRelativeOffset = function(e2) {
      for (var t2 = {
        left: e2.offsetLeft,
        top: e2.offsetTop
      }; e2.offsetParent && getComputedStyle(e2.offsetParent).position === "static"; )
        t2.left += e2.offsetLeft, t2.top += e2.offsetTop, e2 = e2.offsetParent;
      return t2;
    }, o2.prototype.getAbsoluteOffset = function(e2) {
      for (var t2 = e2, s2 = {
        top: 0,
        left: 0
      }; t2.offsetParent; ) {
        var n2 = getComputedStyle(t2.offsetParent);
        n2.position === "static" && n2.marginLeft && n2.marginTop && (parseInt(n2.marginTop, 10) && (s2.top += parseInt(n2.marginTop, 10)), parseInt(n2.marginLeft, 10) && (s2.left += parseInt(n2.marginLeft, 10))), t2 = t2.offsetParent;
      }
      var a2 = e2.getBoundingClientRect(), i2 = document.body.getBoundingClientRect();
      return {
        top: a2.top - i2.top + s2.top,
        left: a2.left - i2.left + s2.left
      };
    }, o2.prototype.findRelative = function(e2, t2, s2) {
      var n2 = this.getRelativeOffset(e2), a2 = e2.getBoundingClientRect();
      return this.calculatePosition(n2, a2, t2, s2);
    }, o2.prototype.findAbsolute = function(e2, t2, s2) {
      var n2 = this.getAbsoluteOffset(e2), a2 = e2.getBoundingClientRect();
      return this.calculatePosition(n2, a2, t2, s2);
    }, o2.prototype.findPosition = function(e2, t2, s2, n2) {
      n2 === void 0 && (n2 = this.getAbsoluteOffset.bind(this));
      var a2 = n2(e2), i2 = e2.getBoundingClientRect();
      return this.calculatePosition(a2, i2, t2, s2);
    }, o2.prototype.findPositionAt = function(e2, t2, s2) {
      return this.calculatePosition(e2, { top: 0, left: 0, height: 0, width: 0 }, t2, s2);
    }, o2.prototype.getPlacementBox = function(e2, t2) {
      var s2 = e2.offsetHeight + t2.top, n2 = e2.offsetWidth + t2.left;
      return {
        top: t2.top,
        bottom: s2,
        left: t2.left,
        right: n2
      };
    }, o2.prototype.addOffset = function(e2, t2, s2) {
      return t2 === void 0 && (t2 = 0), s2 === void 0 && (s2 = 0), Object.assign({}, e2, {
        top: e2.top + t2,
        left: e2.left + s2
      });
    }, o2.prototype.setElement = function(e2, t2) {
      e2.style.top = t2.top + "px", e2.style.left = t2.left + "px";
    }, o2.prototype.findBestPlacement = function(e2, t2, s2, n2, a2) {
      var i2 = this;
      n2 === void 0 && (n2 = this.defaultContainerFunction.bind(this)), a2 === void 0 && (a2 = this.findPosition.bind(this));
      var r2 = s2.map(function(l2) {
        var c2 = a2(e2, t2, l2), d2 = i2.getPlacementBox(t2, c2), p2 = 0, h2 = 0, u2 = n2();
        d2.top < u2.top ? p2 = u2.top - d2.top : d2.bottom > u2.height && (p2 = d2.bottom - u2.height), d2.left < u2.left ? h2 = u2.left - d2.left : d2.right > u2.width && (h2 = d2.right - u2.width), p2 && !h2 ? h2 = 1 : h2 && !p2 && (p2 = 1);
        var g2 = t2.offsetHeight * t2.offsetWidth, m2 = p2 * h2, b2 = g2 - m2, v2 = b2 / g2;
        return {
          placement: l2,
          weight: v2
        };
      });
      return r2.sort(function(l2, c2) {
        return c2.weight - l2.weight;
      }), r2[0].placement;
    }, o2.prototype.findBestPlacementAt = function(e2, t2, s2, n2) {
      var a2 = this;
      n2 === void 0 && (n2 = this.defaultContainerFunction.bind(this));
      var i2 = function(r2, l2, c2) {
        return a2.findPositionAt(e2, l2, c2);
      };
      return this.findBestPlacement(null, t2, s2, n2, i2);
    }, o2.prototype.defaultContainerFunction = function() {
      return {
        // we go with window here, because that's going to be the simple/common case
        top: 0,
        left: 0,
        height: ls.innerHeight,
        width: ls.innerWidth
      };
    }, o2.prototype.calculatePosition = function(e2, t2, s2, n2) {
      return this.positions[n2] ? this.positions[n2](e2, s2, t2) : (console.error("No function found for placement, defaulting to 0,0"), { left: 0, top: 0 });
    }, o2;
  }()
);
new et();
class ir extends z {
  constructor(e2, t2, s2) {
    super(e2, t2, s2), this.type = "tooltip", this.renderType = D$2.HTML, this.isEventListenerAdded = false, this.positionService = new et(), this.handleShowTooltip = (n2) => {
      const a2 = n2.detail.data || n2.detail.items;
      let i2;
      const r2 = this.formatItems(this.getItems(n2));
      n2.detail.content ? i2 = `<div class="title-tooltip"><p>${n2.detail.content}</p></div>` : i2 = this.getTooltipHTML(r2);
      const l2 = k.appendOrSelect(this.tooltip, "div.content-box");
      if (G$1(this.getOptions(), "tooltip", "customHTML"))
        if (n2.detail.content) {
          const c2 = `<div class="title-tooltip"><p>${n2.detail.content}</p></div>`;
          l2.html(c2);
        } else
          l2.html(this.model.getOptions().tooltip.customHTML(a2, i2));
      else
        l2.html(i2);
      l2.selectAll(".datapoint-tooltip").each(function(c2, d2) {
        const p2 = r2[d2];
        r2[d2] && r2[d2].color && select(this).select(".tooltip-color").attr("class", "tooltip-color").style("background-color", p2.color);
      }), this.positionTooltip(n2), this.tooltip.classed("hidden", false).attr("aria-hidden", false);
    }, this.handleHideTooltip = () => {
      this.tooltip.classed("hidden", true).attr("aria-hidden", true);
    }, this.init();
  }
  addTooltipEventListener() {
    this.services.events.addEventListener(oE.Tooltip.MOVE, (e2) => {
      this.tooltip.classed("hidden") === false && this.positionTooltip(e2);
    }), this.services.events.addEventListener(oE.Tooltip.SHOW, this.handleShowTooltip), this.services.events.addEventListener(oE.Tooltip.HIDE, this.handleHideTooltip), this.services.events.addEventListener(oE.Chart.MOUSEOUT, this.handleHideTooltip);
  }
  removeTooltipEventListener() {
    this.services.events.removeEventListener(oE.Tooltip.MOVE, null), this.services.events.removeEventListener(oE.Tooltip.SHOW, this.handleShowTooltip), this.services.events.removeEventListener(oE.Tooltip.HIDE, this.handleHideTooltip), this.services.events.removeEventListener(oE.Chart.MOUSEOUT, this.handleHideTooltip);
  }
  getItems(e2) {
    return e2.detail.items ? e2.detail.items : [];
  }
  formatItems(e2) {
    const t2 = this.getOptions(), s2 = G$1(t2, "tooltip", "truncation", "type"), n2 = G$1(t2, "tooltip", "truncation", "threshold"), a2 = G$1(t2, "tooltip", "truncation", "numCharacter");
    return s2 !== h$1.NONE ? e2.map((i2) => {
      const r2 = i2.labelIcon ? 12 : 0;
      return i2.value = i2.value ? this.valueFormatter(i2.value, i2.label) : i2.value, i2.label && i2.label.length + r2 > n2 && (i2.label = pf(i2.label, s2, a2)), i2.value && i2.value.length > n2 && (i2.value = pf(i2.value, s2, a2)), i2;
    }) : e2.map((i2) => (i2.value = i2.value ? this.valueFormatter(i2.value, i2.label) : i2.value, i2));
  }
  getTooltipHTML(e2) {
    return '<ul class="multi-tooltip">' + e2.map(
      (t2) => `<li>
					<div class="datapoint-tooltip${t2.bold ? " bold" : ""}">
						${t2.class || t2.color ? `<div class="tooltip-color ${t2.class}"></div>` : ""}
						<div class="label">
						<p>${t2.label || ""}</p>
						${t2.labelIcon ? `<span class="label-icon"/>${t2.labelIcon}</span>` : ""}
						</div>
						${t2.value === void 0 || t2.value === null ? "" : `<p class="value"/>${t2.value}</p>`}
					</div>
				</li>`
    ).join("") + "</ul>";
  }
  valueFormatter(e2, t2) {
    const s2 = this.getOptions(), n2 = G$1(s2, "tooltip", "valueFormatter");
    if (n2)
      return n2(e2, t2);
    if (typeof e2.getTime == "function")
      return ke$2(e2, "MMM d, yyyy");
    try {
      if (typeof e2 == "string" && /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(e2))
        return ke$2(Date.parse(e2), "MMM d, yyyy");
    } catch {
    }
    return e2.toLocaleString();
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render(e2 = false) {
    const t2 = this.getOptions(), s2 = G$1(t2, "tooltip", "enabled");
    if (s2) {
      const n2 = select(this.services.domUtils.getHolder()), a2 = G$1(t2, "style", "prefix");
      this.tooltip = k.appendOrSelect(n2, `div.${fc$1}--${a2}--tooltip`), this.tooltip.style("max-width", null).attr("role", "tooltip"), this.isEventListenerAdded || (this.addTooltipEventListener(), this.isEventListenerAdded = true), this.tooltip.classed("hidden", true);
    } else
      !s2 && this.isEventListenerAdded && (this.removeTooltipEventListener(), this.isEventListenerAdded = false);
  }
  positionTooltip(e2) {
    const t2 = this.services.domUtils.getHolder(), s2 = this.tooltip.node(), n2 = this.getOptions(), a2 = G$1(n2, "zoomBar", "top", "enabled");
    let i2 = G$1(e2, "detail", "mousePosition");
    if (!i2)
      i2 = pointer(G$1(e2, "detail", "event"), t2);
    else {
      const h2 = G$1(n2, "zoomBar", "top", "type"), u2 = xc.height[h2];
      a2 && (i2[1] += u2 + xc.spacerHeight);
    }
    const r2 = t2.offsetWidth, l2 = t2.offsetHeight;
    let c2;
    i2[0] / r2 > 0.9 ? c2 = ne.LEFT : i2[0] / r2 < 0.1 ? c2 = ne.RIGHT : c2 = this.positionService.findBestPlacementAt(
      {
        left: i2[0],
        top: i2[1]
      },
      s2,
      [ne.RIGHT, ne.LEFT, ne.TOP, ne.BOTTOM],
      () => ({
        top: void 0,
        // properties were never set to optional (probably should)
        left: void 0,
        // ditto
        width: r2,
        height: l2
      })
    );
    let { horizontalOffset: d2 } = Pc;
    c2 === ne.LEFT && (d2 *= -1);
    const p2 = this.positionService.findPositionAt(
      {
        left: i2[0] + d2,
        top: i2[1]
      },
      s2,
      c2
    );
    this.positionService.setElement(s2, p2);
  }
}
const Zs = class je extends z {
  constructor() {
    super(...arguments), this.type = "grid-brush", this.renderType = D$2.SVG, this.selectionSelector = "rect.selection", this.frontSelectionSelector = "rect.frontSelection";
  }
  // needs to match the class name in _grid-brush.scss
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render(e2 = true) {
    const t2 = this.parent, s2 = this.getComponentContainer();
    if (!t2)
      throw new Error("SVG was not defined");
    const n2 = k.appendOrSelect(t2, "svg.chart-grid-backdrop"), a2 = k.appendOrSelect(n2, `g.${this.type}`), i2 = k.appendOrSelect(a2, this.selectionSelector), { width: r2, height: l2 } = k.getSVGElementSize(n2, {
      useAttrs: true
    }), { cartesianScales: c2 } = this.services, d2 = c2.getMainXScaleType(), p2 = c2.getMainXScale(), [h2] = p2.range();
    s2.attr("transform", `translate(${h2},0)`);
    const u2 = k.appendOrSelect(s2, this.frontSelectionSelector);
    if (p2 && d2 === w$1.TIME) {
      let g2 = this.model.get("zoomDomain");
      g2 === void 0 && (g2 = this.services.zoom.getDefaultZoomBarDomain(), g2 && this.model.set({ zoomDomain: g2 }, { animate: false }));
      const m2 = (L2) => {
        const O2 = L2[1] - L2[0];
        let k2 = "0," + O2.toString();
        const I2 = Math.floor(l2 / je.DASH_LENGTH), F2 = I2 * je.DASH_LENGTH;
        for (let P2 = 0; P2 < I2; P2++)
          k2 += "," + je.DASH_LENGTH;
        k2 += "," + (l2 - F2), I2 % 2 === 1 && (k2 += ",0"), k2 += "," + O2.toString(), k2 += "," + l2.toString(), u2.attr("stroke-dasharray", k2);
      }, b2 = (L2) => {
        const O2 = L2.selection;
        O2 === null || O2[0] === O2[1] || (u2.attr("x", parseFloat(i2.attr("x")) + parseFloat(n2.attr("x"))).attr("y", i2.attr("y")).attr("width", i2.attr("width")).attr("height", i2.attr("height")).style("cursor", "pointer").style("display", null), m2(O2));
      }, v2 = (L2, O2) => {
        const k2 = scaleTime().range([0, r2]).domain(g2);
        let I2 = [k2.invert(L2), k2.invert(O2)];
        I2[0].valueOf() === I2[1].valueOf() && (I2 = this.services.zoom.getDefaultZoomBarDomain()), (g2[0].valueOf() !== I2[0].valueOf() || g2[1].valueOf() !== I2[1].valueOf()) && this.services.zoom.handleDomainChange(I2);
      };
      let S2;
      const T2 = (L2) => {
        const O2 = L2.selection;
        O2 !== null && (v2(O2[0], O2[1]), a2.call(S2.move, null), u2.style("display", "none"));
      };
      l2 != 0 && r2 != 0 && (S2 = brushX().extent([
        [0, 0],
        [r2 - 1, l2]
      ]).on("start brush end", b2).on("end.brushed", T2), a2.call(S2));
      const M2 = this.services.zoom.getZoomRatio();
      n2.on("click", function(L2) {
        if (L2.shiftKey) {
          const O2 = this.services.domUtils.getHolder(), k2 = pointer(a2.node(), O2)[0];
          let I2 = k2 - r2 * M2 / 2;
          I2 < 0 && (I2 = 0);
          let F2 = k2 + r2 * M2 / 2;
          F2 > r2 && (F2 = r2), v2(I2, F2);
        }
      });
    }
  }
};
Zs.DASH_LENGTH = 4;
let lc = Zs;
class cc extends z {
  constructor() {
    super(...arguments), this.type = "zoom-bar", this.renderType = D$2.SVG, this.MIN_SELECTION_DIFF = 9e-10, this.brushSelector = "g.zoom-bar-brush", this.clipId = "zoomBarClip-" + Math.floor(Math.random() * 99999999999), this.brush = brushX(), this.highlightStrokeWidth = 1;
  }
  init() {
    this.services.events.addEventListener(oE.ZoomBar.UPDATE, this.render.bind(this));
    const e2 = G$1(this.getOptions(), "zoomBar", f.TOP, "data");
    this.model.setZoomBarData(e2);
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render(e2 = true) {
    const t2 = this.getComponentContainer(), s2 = this.services.zoom.isZoomBarLoading(f.TOP), n2 = this.services.zoom.isZoomBarLocked(f.TOP), a2 = G$1(this.getOptions(), "zoomBar", f.TOP, "type"), i2 = G$1(this.getOptions(), "axes", f.BOTTOM, "highlights"), r2 = xc.height[a2], { width: l2 } = k.getSVGElementSize(this.parent, {
      useAttrs: true
    });
    if (l2 === 0)
      return;
    let c2 = 0;
    const d2 = this.model.get("axesMargins");
    d2 && d2.left && (c2 = d2.left);
    const p2 = k.appendOrSelect(t2, "svg.zoom-container").attr("width", "100%").attr("height", r2).attr("opacity", 1);
    if (k.appendOrSelect(t2, "rect.zoom-spacer").attr("x", 0).attr("y", r2).attr("width", "100%").attr("height", xc.spacerHeight).attr("opacity", 1).attr("fill", "none"), a2 === K$2.GRAPH_VIEW ? k.appendOrSelect(p2, "rect.zoom-bg").attr("x", c2).attr("y", 0).attr("width", l2 - c2).attr("height", "100%").classed("zoom-bg-skeleton", s2).style(
      "stroke",
      s2 ? `url(#${this.services.domUtils.generateElementIDString("shimmer-lines")})` : null
    ) : a2 === K$2.SLIDER_VIEW && k.appendOrSelect(p2, "rect.zoom-slider-bg").attr("x", c2).attr("y", r2 / 2 - 1).attr("width", l2 - c2).attr("height", 2).classed("zoom-slider-bg-skeleton", s2).style(
      "stroke",
      s2 ? `url(#${this.services.domUtils.generateElementIDString("shimmer-lines")})` : null
    ), s2) {
      this.renderSkeleton(p2, c2, l2);
      return;
    }
    const { cartesianScales: h$12 } = this.services, u2 = h$12.getMainXScale(), g2 = h$12.getMainYScale(), m2 = h$12.getMainXScaleType();
    if (u2 && m2 === w$1.TIME) {
      let b2 = this.services.zoom.getZoomBarData();
      if (nc$1(b2) || b2.length === 1)
        return;
      this.xScale = u2.copy(), this.yScale = g2.copy();
      const v2 = this.services.zoom.getDefaultZoomBarDomain(b2);
      b2 = this.compensateDataForDefaultDomain(b2, v2);
      const S2 = this.model.get("initialZoomDomain"), T2 = G$1(
        this.getOptions(),
        "zoomBar",
        f.TOP,
        "initialZoomDomain"
      );
      T2 && T2[0] && T2[1] && (T2[0] = new Date(T2[0]), T2[1] = new Date(T2[1])), T2 && !(S2 && S2[0].valueOf() === T2[0].valueOf() && S2[1].valueOf() === T2[1].valueOf()) ? this.model.set(
        {
          // use a new object instead of newInitialZoomDomain
          initialZoomDomain: h([], T2),
          zoomDomain: T2 ? h([], T2) : v2
        },
        { skipUpdate: true }
      ) : T2 === null && S2 !== null && this.model.set(
        {
          initialZoomDomain: null,
          zoomDomain: h([], v2)
        },
        { skipUpdate: true }
      ), this.xScale.range([c2, l2]).domain(v2), this.maxSelectionRange = this.xScale.range(), this.yScale.range([0, r2 - 6]).domain(extent(b2, (O2) => O2.value));
      const M2 = this.model.get("zoomDomain");
      if (a2 === K$2.GRAPH_VIEW && (this.renderZoomBarArea(p2, "path.zoom-graph-area-unselected", b2, null), this.updateClipPath(t2, this.clipId, 0, 0, 0, 0), this.renderZoomBarArea(p2, "path.zoom-graph-area", b2, this.clipId), this.renderZoomBarBaseline(p2, c2, l2), i2)) {
        const O2 = i2.highlightStartMapsTo, k$12 = i2.highlightEndMapsTo, I2 = i2.color, F2 = i2.labelMapsTo;
        i2.data.forEach((P2, A2) => {
          k.appendOrSelect(p2, `rect.highlight-${A2}`).attr("height", r2 - 2 * this.highlightStrokeWidth).attr("y", this.highlightStrokeWidth).attr("x", this.xScale(P2[O2])).attr(
            "width",
            this.xScale(P2[k$12]) - this.xScale(P2[O2])
          ).style(
            "fill",
            I2 && I2.scale[P2[F2]] ? I2.scale[P2[F2]] : null
          ).style("fill-opacity", 0.1).style(
            "stroke",
            I2 && I2.scale[P2[F2]] ? I2.scale[P2[F2]] : null
          ).style("stroke-dasharray", "2, 2").attr("stroke-width", "1px");
        });
      }
      this.addBrushEventListener(M2, c2, l2);
      const L2 = k.appendOrSelect(t2, this.brushSelector).call(this.brush);
      if (M2 !== void 0)
        if (M2[0].valueOf() === M2[1].valueOf())
          L2.call(this.brush.move, this.xScale.range()), this.updateBrushHandle(this.getComponentContainer(), this.xScale.range());
        else {
          const O2 = M2.map((k2) => this.xScale(k2));
          O2[1] - O2[0] < this.MIN_SELECTION_DIFF || (L2.call(this.brush.move, O2), this.updateBrushHandle(this.getComponentContainer(), O2));
        }
      n2 && (this.brush.filter(() => false), L2.selectAll("rect").attr("cursor", "auto"));
    }
  }
  addBrushEventListener(e2, t2, s2) {
    const n2 = (r2) => {
      const l2 = r2.selection;
      l2 === null ? this.handleBrushedEvent(r2, e2, this.xScale, this.xScale.range()) : l2[0] === l2[1] || this.handleBrushedEvent(r2, e2, this.xScale, l2);
    }, a2 = G$1(this.getOptions(), "zoomBar", f.TOP, "type"), i2 = xc.height[a2];
    this.brush.extent([
      [t2, 0],
      [s2, i2]
    ]).on("start brush end", null).on("start brush end", n2);
  }
  // brush event listener
  handleBrushedEvent(e2, t2, s2, n2) {
    const a2 = [s2.invert(n2[0]), s2.invert(n2[1])];
    if (this.updateBrushHandle(this.getComponentContainer(), n2), e2.sourceEvent != null && (e2.sourceEvent.type === "mousemove" || e2.sourceEvent.type === "mouseup" || e2.sourceEvent.type === "mousedown" || e2.sourceEvent.type === "touchstart" || e2.sourceEvent.type === "touchmove" || e2.sourceEvent.type === "touchend")) {
      (t2 === void 0 || t2[0] !== a2[0] || t2[1] !== a2[1]) && this.services.zoom.handleDomainChange(a2, {
        dispatchEvent: false
      });
      let i2;
      e2.type === "start" ? i2 = oE.ZoomBar.SELECTION_START : e2.type === "brush" ? i2 = oE.ZoomBar.SELECTION_IN_PROGRESS : e2.type === "end" && (i2 = oE.ZoomBar.SELECTION_END, this.services.events.dispatchEvent(oE.ZoomDomain.CHANGE, {
        newDomain: a2
      })), this.services.events.dispatchEvent(i2, {
        selection: n2,
        newDomain: a2
      });
    }
  }
  updateBrushHandle(e2, t2) {
    const s2 = this, n2 = xc.handleWidth, a2 = G$1(this.getOptions(), "zoomBar", f.TOP, "type"), i2 = xc.height[a2], r2 = -n2 / 2, l2 = xc.handleBarWidth, c2 = a2 === K$2.GRAPH_VIEW ? xc.handleBarHeight : 6, d2 = -l2 / 2, p2 = (i2 - c2) / 2;
    e2.select(this.brushSelector).selectAll("rect.handle").data([{ type: "w" }, { type: "e" }]).attr("x", function(u2) {
      if (u2.type === "w")
        return Math.max(t2[0] + r2, s2.maxSelectionRange[0]);
      if (u2.type === "e")
        return Math.min(t2[1] + r2, s2.maxSelectionRange[1] - n2);
    }).attr("y", 0).attr("width", n2).attr("height", i2).attr("cursor", "ew-resize").style("display", null);
    const h2 = e2.select(this.brushSelector).selectAll("rect.handle-bar").data([{ type: "w" }, { type: "e" }]);
    h2.enter().append("rect").attr("class", function(u2) {
      return "handle-bar handle-bar--" + u2.type;
    }), h2.attr("x", function(u2) {
      if (u2.type === "w")
        return Math.max(
          t2[0] + d2,
          s2.maxSelectionRange[0] - r2 + d2
        );
      if (u2.type === "e")
        return Math.min(
          t2[1] + d2,
          s2.maxSelectionRange[1] + r2 + d2
        );
    }).attr("y", p2).attr("width", l2).attr("height", c2).attr("cursor", "ew-resize"), a2 === K$2.SLIDER_VIEW && this.updateSliderSelectedArea(t2), this.updateClipPath(
      e2,
      this.clipId,
      t2[0],
      0,
      t2[1] - t2[0],
      i2
    );
  }
  updateSliderSelectedArea(e2) {
    const t2 = G$1(this.getOptions(), "zoomBar", f.TOP, "type"), s2 = xc.height[t2], a2 = this.getComponentContainer().select("svg.zoom-container");
    k.appendOrSelect(a2, "rect.zoom-slider-selected-area").attr("x", e2[0]).attr("y", s2 / 2 - 1).attr("width", e2[1] - e2[0]).attr("height", 2);
  }
  renderZoomBarArea(e2, t2, s2, n2) {
    const { cartesianScales: a2 } = this.services, i2 = a2.getMainXAxisPosition(), r2 = a2.getMainYAxisPosition(), l2 = a2.getMainXScaleType(), c2 = a2.getMainYScaleType(), d2 = (v2, S2, T2) => (M2) => a2.getValueFromScale(v2, S2, T2, M2), p2 = d2(this.xScale, l2, i2), h2 = d2(this.yScale, c2, r2), u2 = G$1(this.getOptions(), "zoomBar", f.TOP, "type"), g2 = xc.height[u2], m2 = area().x((v2) => p2(v2)).y0(g2).y1((v2) => g2 - h2(v2)), b2 = k.appendOrSelect(e2, t2).datum(s2).attr("d", m2);
    n2 && b2.attr("clip-path", `url(#${n2})`);
  }
  updateClipPath(e2, t2, s2, n2, a2, i2) {
    const r2 = k.appendOrSelect(e2, "clipPath").attr("id", t2);
    k.appendOrSelect(r2, "rect").attr("x", s2).attr("y", n2).attr("width", a2).attr("height", i2);
  }
  // assume the domains in data are already sorted
  compensateDataForDefaultDomain(e2, t2) {
    if (!e2 || e2.length < 2)
      return;
    const s2 = rl(e2), n2 = this.services.cartesianScales.getDomainIdentifier(), a2 = this.services.cartesianScales.getRangeIdentifier();
    if (Number(t2[0]) < Number(s2[0][n2])) {
      const i2 = {};
      i2[n2] = t2[0], i2[a2] = 0, s2.unshift(i2);
    }
    if (Number(t2[1]) > Number(s2[s2.length - 1][n2])) {
      const i2 = {};
      i2[n2] = t2[1], i2[a2] = 0, s2.push(i2);
    }
    return s2;
  }
  renderZoomBarBaseline(e2, t2, s2, n2 = false) {
    const a2 = G$1(
      this.model.getOptions(),
      "zoomBar",
      f.TOP,
      "type"
    ), i2 = xc.height[a2], r2 = line()([
      [t2, i2],
      [s2, i2]
    ]);
    k.appendOrSelect(e2, "path.zoom-bg-baseline").attr("d", r2).classed("zoom-bg-baseline-skeleton", n2).style(
      "stroke",
      n2 ? `url(#${this.services.domUtils.generateElementIDString("shimmer-lines")})` : null
    );
  }
  renderSkeleton(e2, t2, s2) {
    this.renderZoomBarArea(e2, "path.zoom-graph-area-unselected", [], null), this.renderZoomBarArea(e2, "path.zoom-graph-area", [], this.clipId), this.brush.on("start brush end", null), k.appendOrSelect(this.getComponentContainer(), this.brushSelector).html(null), G$1(this.getOptions(), "zoomBar", f.TOP, "type") === K$2.GRAPH_VIEW && this.renderZoomBarBaseline(e2, t2, s2, true);
  }
  destroy() {
    this.brush.on("start brush end", null), this.services.events.removeEventListener(oE.ZoomBar.UPDATE, this.render.bind(this));
  }
}
class dc extends z {
  constructor(e2, t2) {
    super(e2, t2), this.type = "threshold", this.renderType = D$2.SVG, this.positionService = new et();
  }
  render(e2 = false) {
    const t2 = G$1(this.getOptions(), "axes"), s2 = [];
    Object.keys(t2).forEach((h2) => {
      if (Object.values(f).includes(h2)) {
        const u2 = t2[h2];
        u2.thresholds && u2.thresholds.length > 0 && s2.push({
          axisPosition: h2,
          thresholds: u2.thresholds,
          correspondingDatasets: u2 == null ? void 0 : u2.correspondingDatasets,
          mapsTo: u2 == null ? void 0 : u2.mapsTo
        });
      }
    });
    const a2 = this.getComponentContainer({ withinChartClip: true }).selectAll("g.axis-thresholds").data(s2, (h2) => h2.axisPosition);
    a2.exit().attr("opacity", 0).remove();
    const r2 = a2.enter().append("g").merge(a2);
    r2.attr("class", (h2) => `axis-thresholds ${h2.axisPosition}`);
    const l2 = r2.selectAll("g.threshold-group").data(
      (h2) => h2.thresholds.map((u2) => (u2.axisPosition = h2.axisPosition, u2.datum = this.constructDatumObj(h2, u2), u2))
    );
    l2.exit().attr("opacity", 0).remove();
    const c2 = l2.enter().append("g");
    c2.append("line").attr("class", "threshold-line"), c2.append("rect").attr("class", "threshold-hoverable-area"), c2.merge(l2).attr("class", "threshold-group");
    const p2 = this;
    r2.each(function({ axisPosition: h2 }) {
      const u2 = p2.services.cartesianScales.getScaleByPosition(
        h2
      ), g2 = p2.services.cartesianScales.getScaleTypeByPosition(h2);
      let m2 = null, b2 = null;
      h2 === f.LEFT || h2 === f.RIGHT ? (b2 = u2, m2 = p2.services.cartesianScales.getMainXScale()) : (m2 = u2, b2 = p2.services.cartesianScales.getMainYScale());
      const v2 = g2 === w$1.LABELS, [S2, T2] = m2.range(), [M2, L2] = b2.range(), { cartesianScales: O2 } = p2.services, k2 = O2.getOrientation(), I2 = (G2) => O2.getDomainValue(G2), F2 = (G2) => O2.getRangeValue(G2), [P2, A2] = yf(
        I2,
        F2,
        k2
      ), w2 = select(this);
      h2 === f.TOP || h2 === f.BOTTOM ? (w2.selectAll("line.threshold-line").transition().call(
        (G2) => p2.services.transitions.setupTransition({
          transition: G2,
          name: "threshold-line-update",
          animate: e2
        })
      ).attr("y1", L2).attr("y2", M2).attr(
        "x1",
        ({ datum: G2 }) => P2(G2) + (v2 ? u2.step() / 2 : 0)
      ).attr(
        "x2",
        ({ datum: G2 }) => P2(G2) + (v2 ? u2.step() / 2 : 0)
      ).style("stroke", ({ fillColor: G2 }) => G2), w2.selectAll("rect.threshold-hoverable-area").attr("x", 0).attr("y", ({ datum: G2 }) => -P2(G2)).attr("width", Math.abs(M2 - L2)).classed("rotate", true)) : (w2.selectAll("line.threshold-line").transition().call(
        (G2) => p2.services.transitions.setupTransition({
          transition: G2,
          name: "threshold-line-update",
          animate: e2
        })
      ).attr("x1", S2).attr("x2", T2).attr(
        "y1",
        ({ datum: G2 }) => A2(G2) + (v2 ? u2.step() / 2 : 0)
      ).attr(
        "y2",
        ({ datum: G2 }) => A2(G2) + (v2 ? u2.step() / 2 : 0)
      ).style("stroke", ({ fillColor: G2 }) => G2), w2.selectAll("rect.threshold-hoverable-area").attr("x", S2).attr("y", ({ datum: G2 }) => A2(G2)).attr("width", Math.abs(T2 - S2)).classed("rotate", false));
    }), this.services.events.addEventListener(oE.Threshold.SHOW, (h2) => {
      this.setThresholdLabelPosition(h2.detail), this.label.classed("hidden", false);
    }), this.services.events.addEventListener(oE.Threshold.HIDE, () => {
      this.label.classed("hidden", true);
    }), this.appendThresholdLabel(), this.addEventListeners();
  }
  getFormattedValue(e2) {
    const { value: t2, axisPosition: s2 } = e2, n2 = this.getOptions();
    if (this.services.cartesianScales.getScaleTypeByPosition(s2) === w$1.TIME) {
      const i2 = [f.LEFT, f.RIGHT].includes(s2), r2 = this.services.cartesianScales.getMainXScale(), l2 = this.services.cartesianScales.getMainYScale(), c2 = i2 ? l2 : r2, d2 = G$1(n2, "timeScale"), p2 = wf(
        c2.ticks(),
        G$1(d2, "timeInterval")
      );
      return bf(t2, 0, c2.ticks(), p2, d2);
    }
    return t2.toLocaleString("en");
  }
  appendThresholdLabel() {
    const e2 = select(this.services.domUtils.getHolder()), t2 = G$1(this.getOptions(), "style", "prefix");
    this.label = k.appendOrSelect(
      e2,
      `div.${fc$1}--${t2}--threshold--label`
    ).classed("hidden", true);
  }
  setThresholdLabelPosition({ event: e2, datum: t2 }) {
    const s2 = this.services.domUtils.getHolder(), n2 = pointer(e2, s2), a2 = t2.valueFormatter ? t2.valueFormatter(t2.value) : this.getFormattedValue(t2);
    this.label.html(`${t2.label || "Threshold"}: ${a2}`).style("background-color", t2.fillColor);
    const i2 = this.label.node(), r2 = this.positionService.findBestPlacementAt(
      {
        left: n2[0],
        top: n2[1]
      },
      i2,
      [ne.RIGHT, ne.LEFT, ne.TOP, ne.BOTTOM],
      () => ({
        top: void 0,
        // other package lists this as non-optional
        left: void 0,
        // ditto
        width: s2.offsetWidth,
        height: s2.offsetHeight
      })
    ), l2 = this.positionService.findPositionAt(
      {
        left: n2[0],
        top: n2[1]
      },
      i2,
      r2
    );
    this.positionService.setElement(i2, l2);
  }
  // Constructs object to pass in scale functions
  constructDatumObj(e2, t2) {
    const s2 = {};
    return e2.correspondingDatasets && (s2.group = G$1(e2, "correspondingDatasets", 0)), s2[e2.mapsTo] = t2.value, s2;
  }
  addEventListeners() {
    const e2 = this;
    this.getComponentContainer({ withinChartClip: true }).selectAll("rect.threshold-hoverable-area").on("mouseover mousemove", function(s2) {
      select(this.parentNode).select("line.threshold-line").classed("active", true), e2.services.events.dispatchEvent(oE.Threshold.SHOW, {
        event: s2,
        hoveredElement: select(this),
        datum: select(this).datum()
      });
    }).on("mouseout", function(s2) {
      select(this.parentNode).select("line.threshold-line").classed("active", false), e2.services.events.dispatchEvent(oE.Threshold.HIDE, {
        event: s2,
        hoveredElement: select(this),
        datum: select(this).datum()
      });
    });
  }
}
class hc extends z {
  constructor(e2, t2) {
    super(e2, t2), this.type = "highlight", this.renderType = D$2.SVG, this.positionService = new et(), this.highlightStrokeWidth = 1;
  }
  render(e2 = false) {
    const t2 = G$1(this.getOptions(), "axes"), s2 = [];
    Object.keys(t2).forEach((h2) => {
      if (Object.values(f).includes(h2)) {
        const u2 = t2[h2];
        u2.highlights && u2.highlights.data.length > 0 && s2.push({
          axisPosition: h2,
          highlightStartMapsTo: u2.highlights.highlightStartMapsTo,
          highlightEndMapsTo: u2.highlights.highlightEndMapsTo,
          labelMapsTo: u2.highlights.labelMapsTo,
          highlight: u2.highlights.data,
          color: u2.highlights.color
        });
      }
    });
    const a2 = this.getComponentContainer({ withinChartClip: true }).selectAll("g.axis-highlight").data(s2, (h2) => h2.axisPosition);
    a2.exit().attr("opacity", 0).remove();
    const r2 = a2.enter().append("g").merge(a2);
    r2.attr("class", (h2) => `axis-highlight ${h2.axisPosition}`);
    const l2 = r2.selectAll("g.highlight-group").data(
      (h2) => h2.highlight.map((u2) => (u2.axisPosition = h2.axisPosition, u2.highlightStartMapsTo = h2.highlightStartMapsTo, u2.labelMapsTo = h2.labelMapsTo, u2.color = h2.color, u2.highlightEndMapsTo = h2.highlightEndMapsTo, u2))
    );
    l2.exit().attr("opacity", 0).remove();
    const c2 = l2.enter().append("g");
    c2.append("rect").attr("class", "highlight-bar"), c2.append("line").attr("class", "highlight-line"), c2.merge(l2).attr("class", "highlight-group");
    const p2 = this;
    r2.each(function({ axisPosition: h2 }) {
      const u2 = p2.services.cartesianScales.getMainXScale(), g2 = p2.services.cartesianScales.getMainYScale(), [m2, b2] = u2.range(), [v2, S2] = g2.range(), { cartesianScales: T2 } = p2.services, M2 = T2.getOrientation(), L2 = (P2) => T2.getDomainValue(P2), O2 = (P2) => T2.getRangeValue(P2), [k2, I2] = yf(
        L2,
        O2,
        M2
      ), F2 = select(this);
      h2 === f.TOP || h2 === f.BOTTOM ? F2.selectAll("rect.highlight-bar").transition().call(
        (P2) => p2.services.transitions.setupTransition({
          transition: P2,
          name: "highlight-bar-update",
          animate: e2
        })
      ).attr("y", Math.max(S2 + p2.highlightStrokeWidth, 0)).attr("height", Math.max(v2 - 2 * p2.highlightStrokeWidth, 0)).attr("x", ({ highlightStartMapsTo: P2, ...A2 }) => k2(A2[P2])).attr(
        "width",
        ({ highlightStartMapsTo: P2, highlightEndMapsTo: A2, ...w2 }) => Math.max(k2(w2[A2]) - k2(w2[P2]), 0)
      ).style("stroke", ({ color: P2, labelMapsTo: A2, ...w2 }) => P2 && P2.scale[w2[A2]] ? P2.scale[w2[A2]] : null).style("stroke-dasharray", "2, 2").attr("stroke-width", p2.highlightStrokeWidth + "px").style("fill-opacity", 0.1).style("fill", ({ color: P2, labelMapsTo: A2, ...w2 }) => P2 && P2.scale[w2[A2]] ? P2.scale[w2[A2]] : null) : F2.selectAll("rect.highlight-bar").transition().call(
        (P2) => p2.services.transitions.setupTransition({
          transition: P2,
          name: "highlight-bar-update",
          animate: e2
        })
      ).attr("x", m2).attr("width", Math.max(b2 - m2, 0)).attr("y", ({ highlightEndMapsTo: P2, ...A2 }) => I2(A2[P2])).attr(
        "height",
        ({ highlightStartMapsTo: P2, highlightEndMapsTo: A2, ...w2 }) => Math.max(I2(w2[P2]) - I2(w2[A2]), 0)
      ).style("stroke", ({ color: P2, labelMapsTo: A2, ...w2 }) => P2 && P2.scale[w2[A2]] ? P2.scale[w2[A2]] : null).style("stroke-dasharray", "2, 2").attr("stroke-width", p2.highlightStrokeWidth + "px").style("fill-opacity", 0.1).style("fill", ({ color: P2, labelMapsTo: A2, ...w2 }) => P2 && P2.scale[w2[A2]] ? P2.scale[w2[A2]] : null);
    });
  }
}
class uc extends ir {
  getItems(e2) {
    if (e2.detail.items)
      return e2.detail.items;
    const { data: t2 } = e2.detail;
    if (!t2 || !t2.length || !t2[0])
      return [];
    const s2 = this.getOptions(), { cartesianScales: n2 } = this.services, a2 = n2.getDomainIdentifier(), i2 = n2.isDualAxes(), { groupMapsTo: r2 } = s2.data, l2 = n2.getDomainLabel();
    let c2 = n2.getRangeLabel();
    const d2 = t2[0][a2];
    let p2;
    if (t2.length === 1) {
      const h2 = t2[0], u2 = n2.getRangeIdentifier(h2);
      if (i2) {
        const m2 = n2.getRangeAxisPosition({
          datum: h2,
          groups: [h2[r2]]
        });
        c2 = n2.getScaleLabel(m2);
      }
      const g2 = h2[u2];
      p2 = [
        {
          label: l2,
          value: d2
        },
        ...Array.isArray(g2) && g2.length === 2 ? [
          {
            label: "Start",
            value: g2[0]
          },
          {
            label: "End",
            value: g2[1]
          }
        ] : [
          {
            label: c2,
            value: h2[u2]
          }
        ]
      ], e2.detail.additionalItems && e2.detail.additionalItems.forEach(
        (m2) => p2.push({
          label: m2.label,
          value: m2.value
        })
      ), p2.push({
        label: s2.tooltip.groupLabel,
        value: h2[r2],
        color: this.model.getFillColor(h2[r2]),
        class: this.model.getColorClassName({
          classNameTypes: [b$1.TOOLTIP],
          dataGroupName: h2[r2]
        })
      });
    } else if (t2.length > 1 && (p2 = [
      {
        label: l2,
        value: d2
      }
    ], p2 = p2.concat(
      t2.map((h2) => {
        const u2 = h2[n2.getRangeIdentifier(h2)];
        return {
          label: h2[r2],
          value: Array.isArray(u2) && u2.length === 2 ? `${u2[0]} - ${u2[1]}` : u2,
          color: this.model.getFillColor(h2[r2]),
          class: this.model.getColorClassName({
            classNameTypes: [b$1.TOOLTIP],
            dataGroupName: h2[r2]
          })
        };
      }).sort((h2, u2) => u2.value - h2.value)
    ), !i2 && G$1(s2, "tooltip", "showTotal") === true)) {
      const h2 = n2.getRangeIdentifier();
      p2.push({
        label: cs$1(s2, "tooltip.totalLabel") || "Total",
        value: t2.reduce(
          (u2, g2) => u2 + g2[h2],
          0
        ),
        bold: true
      });
    }
    return p2;
  }
}
class gc extends z {
  constructor() {
    super(...arguments), this.type = "grid", this.renderType = D$2.SVG;
  }
  render(e2 = true) {
    const t2 = G$1(this.getOptions(), "grid", "x", "enabled"), s2 = G$1(this.getOptions(), "grid", "y", "enabled");
    this.drawBackdrop(t2, s2), !(!t2 && !s2) && (t2 && (k.appendOrSelect(this.backdrop, "g.x.grid"), this.drawXGrid(e2)), s2 && (k.appendOrSelect(this.backdrop, "g.y.grid"), this.drawYGrid(e2)));
  }
  drawXGrid(e2) {
    const t2 = this.parent, s2 = this.backdrop.attr("height"), n2 = this.services.cartesianScales.getMainXScale(), a2 = axisBottom(n2).tickSizeInner(-s2).tickSizeOuter(0);
    if (G$1(this.getOptions(), "grid", "x", "alignWithAxisTicks")) {
      const l2 = this.services.cartesianScales.getDomainAxisPosition(), c2 = G$1(this.getOptions(), "axes", l2, "ticks", "values");
      c2 && a2.tickValues(c2);
    } else {
      const l2 = G$1(this.getOptions(), "grid", "x", "numberOfTicks");
      a2.ticks(l2);
    }
    const r2 = t2.select(".x.grid").attr("transform", `translate(${-this.backdrop.attr("x")}, ${s2})`);
    e2 ? r2.transition().call(
      (l2) => this.services.transitions.setupTransition({
        transition: l2,
        name: "grid-update",
        animate: e2
      })
    ).call(a2) : r2.call(a2), this.cleanGrid(r2);
  }
  drawYGrid(e2) {
    const t2 = this.parent, s2 = this.backdrop.attr("width"), n2 = this.services.cartesianScales.getMainYScale(), a2 = axisLeft(n2).tickSizeInner(-s2).tickSizeOuter(0);
    if (G$1(this.getOptions(), "grid", "y", "alignWithAxisTicks")) {
      const l2 = this.services.cartesianScales.getRangeAxisPosition(), c2 = G$1(this.getOptions(), "axes", l2, "ticks", "values");
      c2 && a2.tickValues(c2);
    } else {
      const l2 = G$1(this.getOptions(), "grid", "y", "numberOfTicks");
      a2.ticks(l2);
    }
    const r2 = t2.select(".y.grid").attr("transform", `translate(0, ${-this.backdrop.attr("y")})`);
    e2 ? r2.transition().call(
      (l2) => this.services.transitions.setupTransition({
        transition: l2,
        name: "grid-update",
        animate: e2
      })
    ).call(a2) : r2.call(a2), this.cleanGrid(r2);
  }
  /**
   * Returns the threshold for the gridline tooltips based on the mouse location.
   * Calculated based on the mouse position between the two closest gridlines or edges of chart.
   */
  getGridlineThreshold(e2) {
    const t2 = this.parent, s2 = t2.selectAll(".x.grid .tick").nodes().sort((d2, p2) => Number(hf(d2).tx) - Number(hf(p2).tx));
    let n2 = -1;
    if (!s2.length)
      return;
    s2.forEach((d2) => {
      e2[0] >= +hf(d2).tx && n2++;
    });
    const a2 = n2 + 1 < s2.length ? n2 + 1 : s2.length, i2 = s2[n2], r2 = s2[a2];
    let l2;
    if (!i2)
      l2 = +hf(r2).tx;
    else if (r2)
      l2 = +hf(r2).tx - +hf(i2).tx;
    else {
      const d2 = t2.select("rect.chart-grid-backdrop").node();
      l2 = k.getSVGElementSize(d2).width - +hf(i2).tx;
    }
    const { threshold: c2 } = this.getOptions().tooltip.gridline;
    return l2 * c2;
  }
  /**
   * Returns the active gridlines based on the gridline threshold and mouse position.
   * @param position mouse positon
   */
  getActiveGridline(e2) {
    const t2 = G$1(this.getOptions, "tooltip", "gridline", "threshold"), s2 = t2 || this.getGridlineThreshold(e2);
    return this.parent.selectAll(".x.grid .tick").filter(function() {
      const i2 = hf(this), r2 = {
        min: Number(i2.tx) - s2,
        max: Number(i2.tx) + s2
      };
      return r2.min <= e2[0] && e2[0] <= r2.max;
    });
  }
  drawBackdrop(e2, t2) {
    const s2 = this.parent, n2 = this.services.cartesianScales.getMainXScale(), a2 = this.services.cartesianScales.getMainYScale(), [i2, r2] = n2.range(), [l2, c2] = a2.range();
    this.backdrop = k.appendOrSelect(s2, "svg.chart-grid-backdrop");
    const d2 = k.appendOrSelect(
      this.backdrop,
      e2 || t2 ? "rect.chart-grid-backdrop.stroked" : "rect.chart-grid-backdrop"
    );
    this.backdrop.merge(d2).attr("x", i2).attr("y", c2).attr("width", Math.abs(r2 - i2)).attr("height", Math.abs(l2 - c2)).lower(), d2.attr("width", "100%").attr("height", "100%");
  }
  cleanGrid(e2) {
    e2.selectAll("text").remove(), e2.select(".domain").remove();
  }
}
class mc extends z {
  constructor() {
    super(...arguments), this.type = "area", this.renderType = D$2.SVG, this.gradient_id = "gradient-id-" + Math.floor(Math.random() * 99999999999), this.handleLegendOnHover = (e2) => {
      const { hoveredElement: t2 } = e2.detail;
      this.parent.selectAll("path.area").transition("legend-hover-area").call(
        (s2) => this.services.transitions.setupTransition({
          transition: s2,
          name: "legend-hover-area"
        })
      ).attr("opacity", (s2) => s2.name !== t2.datum().name ? dc$1.opacity.unselected : dc$1.opacity.selected);
    }, this.handleLegendMouseOut = () => {
      this.parent.selectAll("path.area").transition("legend-mouseout-area").call(
        (e2) => this.services.transitions.setupTransition({
          transition: e2,
          name: "legend-mouseout-area"
        })
      ).attr("opacity", dc$1.opacity.selected);
    };
  }
  init() {
    const e2 = this.services.events;
    e2.addEventListener(oE.Legend.ITEM_HOVER, this.handleLegendOnHover), e2.addEventListener(oE.Legend.ITEM_MOUSEOUT, this.handleLegendMouseOut);
  }
  render(e2 = true) {
    const t2 = this.getComponentContainer({ withinChartClip: true }), s2 = this.getOptions();
    let n2 = [0, 0];
    const { cartesianScales: a2 } = this.services, i2 = a2.getOrientation(), r2 = area().curve(this.services.curves.getD3Curve()).defined((L2) => {
      const O2 = a2.getRangeIdentifier(), k2 = L2[O2];
      return k2 != null;
    }), l2 = this.model.getGroupedData(this.configs.groups), c2 = G$1(s2, "bounds"), d2 = c2 && l2 && l2.length === 1;
    !d2 && c2 && console.warn(
      `Bounds can only be shown when having 1 single datagroup, you've supplied ${l2.length}`
    );
    let p2 = 0;
    const h2 = (L2, O2) => {
      G$1(s2, "axes", L2, "includeZero") === false && O2[0] > 0 && O2[1] > 0 && (p2 = O2[0]);
    }, u2 = (L2) => d2 ? a2.getBoundedScaledValues(L2)[0] : a2.getRangeValue(p2), g2 = (L2) => d2 ? a2.getBoundedScaledValues(L2)[1] : a2.getRangeValue(L2);
    i2 === F$2.VERTICAL ? (n2 = a2.getMainYScale().domain(), h2(a2.getMainYAxisPosition(), n2), r2.x((L2) => a2.getDomainValue(L2)).y0((L2) => u2(L2)).y1((L2) => g2(L2))) : (n2 = a2.getMainXScale().domain(), h2(a2.getMainXAxisPosition(), n2), r2.x0((L2) => u2(L2)).x1((L2) => g2(L2)).y((L2) => a2.getDomainValue(L2)));
    const m2 = G$1(s2, "color", "gradient", "enabled"), b2 = l2 && l2.length === 1 && m2;
    l2.length > 1 && m2 && console.error("Gradients can only be enabled when having 1 single dataset");
    const v2 = t2.selectAll("path.area").data(l2, (L2) => L2.name), S2 = select(this.services.domUtils.getMainContainer());
    if (v2.exit().attr("opacity", 0).remove(), !l2.length)
      return;
    if (b2) {
      const L2 = S2.select(
        `path.${this.model.getColorClassName({
          classNameTypes: [b$1.STROKE],
          dataGroupName: l2[0].name
        })}`
      ).node();
      let O2;
      if (L2)
        O2 = getComputedStyle(L2, null).getPropertyValue(
          "stroke"
        );
      else {
        const k2 = G$1(this.model.getOptions(), "color", "scale");
        if (k2 !== null) {
          const I2 = Object.keys(k2);
          O2 = k2[I2[0]];
        }
      }
      le.appendOrUpdateLinearGradient({
        svg: this.parent,
        id: this.services.domUtils.generateElementIDString(
          `${l2[0].name.replace(" ", "")}_${this.gradient_id}`
        ),
        x1: "0%",
        x2: "0%",
        y1: "0%",
        y2: "100%",
        stops: le.getStops(n2, O2)
      });
    } else
      this.parent.selectAll("defs linearGradient").empty() || this.parent.selectAll("defs linearGradient").each(function() {
        this.parentNode.remove();
      });
    const T2 = this, M2 = v2.enter().append("path");
    b2 ? M2.merge(v2).style(
      "fill",
      (L2) => `url(#${this.services.domUtils.generateElementIDString(
        `${L2.name.replace(" ", "")}_${this.gradient_id}`
      )})`
    ).attr("class", "area").attr(
      "class",
      (L2) => this.model.getColorClassName({
        classNameTypes: [b$1.FILL],
        dataGroupName: L2.name,
        originalClassName: "area"
      })
    ).attr("d", (L2) => {
      const { data: O2 } = L2;
      return r2(O2);
    }) : (M2.attr("opacity", 0).merge(v2).attr("class", "area").attr(
      "class",
      (L2) => this.model.getColorClassName({
        classNameTypes: [b$1.FILL, b$1.STROKE],
        dataGroupName: L2.name,
        originalClassName: "area"
      })
    ).style("fill", (L2) => T2.model.getFillColor(L2.name)).transition().call(
      (L2) => this.services.transitions.setupTransition({
        transition: L2,
        name: "area-update-enter",
        animate: e2
      })
    ).attr("opacity", d2 ? 1 : dc$1.opacity.selected).attr("d", (L2) => {
      const { data: O2 } = L2;
      return r2(O2);
    }), d2 && M2.attr("fill-opacity", dc$1.opacity.selected).style("stroke", (L2) => T2.model.getStrokeColor(L2.name)).style("stroke-dasharray", "2, 2").attr("stroke-width", 0.7 + "px"));
  }
  destroy() {
    const e2 = this.services.events;
    e2.removeEventListener(oE.Legend.ITEM_HOVER, this.handleLegendOnHover), e2.removeEventListener(oE.Legend.ITEM_MOUSEOUT, this.handleLegendMouseOut);
  }
}
class fc extends z {
  constructor() {
    super(...arguments), this.type = "line", this.renderType = D$2.SVG, this.handleLegendOnHover = (e2) => {
      const { hoveredElement: t2 } = e2.detail;
      this.parent.selectAll("path.line").transition("legend-hover-line").call(
        (s2) => this.services.transitions.setupTransition({
          transition: s2,
          name: "legend-hover-line"
        })
      ).attr("opacity", (s2) => s2.name !== t2.datum().name ? bc$1.opacity.unselected : bc$1.opacity.selected);
    }, this.handleLegendMouseOut = () => {
      this.parent.selectAll("path.line").transition("legend-mouseout-line").call(
        (e2) => this.services.transitions.setupTransition({
          transition: e2,
          name: "legend-mouseout-line"
        })
      ).attr("opacity", bc$1.opacity.selected);
    };
  }
  init() {
    const { events: e2 } = this.services;
    e2.addEventListener(oE.Legend.ITEM_HOVER, this.handleLegendOnHover), e2.addEventListener(oE.Legend.ITEM_MOUSEOUT, this.handleLegendMouseOut);
  }
  render(e2 = true) {
    const t2 = this.getComponentContainer({ withinChartClip: true }), { cartesianScales: s2, curves: n2 } = this.services, a2 = (g2) => s2.getDomainValue(g2), i2 = (g2) => s2.getRangeValue(g2), [r$12, l2] = yf(
      a2,
      i2,
      s2.getOrientation()
    ), c2 = this.getOptions(), d2 = line().x(r$12).y(l2).curve(n2.getD3Curve()).defined((g2) => {
      const m2 = s2.getRangeIdentifier(g2), b2 = g2[m2];
      return b2 != null;
    });
    let p2 = [];
    if (this.configs.stacked) {
      const g2 = Object.keys(c2.axes).some((v2) => c2.axes[v2].percentage), { groupMapsTo: m2 } = c2.data;
      p2 = this.model.getStackedData({
        groups: this.configs.groups,
        percentage: g2
      }).map((v2) => {
        const S2 = this.services.cartesianScales.getDomainIdentifier(v2), T2 = this.services.cartesianScales.getRangeIdentifier(v2);
        return {
          name: G$1(v2, 0, m2),
          data: v2.map((M2) => ({
            [S2]: M2.data.sharedStackKey,
            [m2]: M2[m2],
            [T2]: M2[1]
          })),
          hidden: !Ha(v2, (M2) => M2[0] !== M2[1])
        };
      });
    } else
      p2 = this.model.getGroupedData(this.configs.groups);
    const h2 = t2.selectAll("path.line").data(p2, (g2) => g2.name);
    h2.exit().attr("opacity", 0).remove(), h2.enter().append("path").classed("line", true).attr("opacity", 0).merge(h2).data(p2, (g2) => g2.name).attr(
      "class",
      (g2) => this.model.getColorClassName({
        classNameTypes: [b$1.STROKE],
        dataGroupName: g2.name,
        originalClassName: "line"
      })
    ).style("stroke", (g2) => this.model.getStrokeColor(g2.name)).attr("role", r.GRAPHICS_SYMBOL).attr("aria-roledescription", "line").attr("aria-label", (g2) => {
      const { data: m2 } = g2;
      return m2.map((b2) => {
        const v2 = this.services.cartesianScales.getRangeIdentifier(b2);
        return b2[v2];
      }).join(",");
    }).transition().call(
      (g2) => this.services.transitions.setupTransition({
        transition: g2,
        name: "line-update-enter",
        animate: e2
      })
    ).attr("opacity", (g2) => g2.hidden ? 0 : 1).attr("d", (g2) => {
      const { data: m2 } = g2;
      return d2(m2);
    });
  }
  destroy() {
    const e2 = this.services.events;
    e2.removeEventListener(oE.Legend.ITEM_HOVER, this.handleLegendOnHover), e2.removeEventListener(oE.Legend.ITEM_MOUSEOUT, this.handleLegendMouseOut);
  }
}
const cs = 5;
function rr(o2, e2) {
  return o2 > e2 - cs && o2 < e2 + cs;
}
let Xs$1 = class Xs extends z {
  constructor() {
    super(...arguments), this.type = "ruler", this.renderType = D$2.SVG, this.isXGridEnabled = G$1(this.getOptions(), "grid", "x", "enabled"), this.isYGridEnabled = G$1(this.getOptions(), "grid", "y", "enabled"), this.isEventListenerAdded = false;
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render(e2 = false) {
    const t2 = G$1(this.getOptions(), "ruler", "enabled");
    this.drawBackdrop(), t2 && !this.isEventListenerAdded ? this.addBackdropEventListeners() : !t2 && this.isEventListenerAdded && this.removeBackdropEventListeners();
  }
  removeBackdropEventListeners() {
    this.isEventListenerAdded = false, this.backdrop.on("mousemove mouseover mouseout", null);
  }
  formatTooltipData(e2) {
    return e2;
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  showRuler(e2, [t2, s2]) {
    const n2 = this.parent, a2 = this.services.cartesianScales.getOrientation(), i2 = this.model.getDisplayData(), r2 = this.services.cartesianScales.getRangeScale(), [l2, c2] = r2.range(), d2 = a2 === F$2.HORIZONTAL ? s2 : t2, p2 = k.appendOrSelect(n2, "g.ruler").attr("aria-label", "ruler"), h2 = k.appendOrSelect(p2, "line.ruler-line"), u2 = n2.selectAll("[role=graphics-symbol]"), g2 = i2.map((b2) => ({
      domainValue: this.services.cartesianScales.getDomainValue(b2),
      originalData: b2
    })).filter((b2) => rr(b2.domainValue, d2));
    if (this.pointsWithinLine && g2.length === this.pointsWithinLine.length && g2.map((b2) => b2.domainValue).join() === this.pointsWithinLine.map((b2) => b2.domainValue).join())
      return this.pointsWithinLine = g2, this.services.events.dispatchEvent(oE.Tooltip.MOVE, {
        mousePosition: [t2, s2]
      });
    this.pointsWithinLine = g2;
    const m2 = this.pointsWithinLine.reduce((b2, v2) => {
      if (b2.length === 0)
        return b2.push(v2), b2;
      const S2 = b2[0].domainValue, T2 = Math.abs(d2 - v2.domainValue), M2 = Math.abs(d2 - S2);
      return T2 > M2 || (T2 < M2 ? b2 = [v2] : b2.push(v2)), b2;
    }, []);
    if (m2.length > 0) {
      const b2 = m2.map((M2) => M2.originalData).filter((M2) => {
        const L2 = this.services.cartesianScales.getRangeIdentifier(M2), O2 = M2[L2];
        return O2 != null;
      }), v2 = m2.map(
        (M2) => M2.domainValue
      ), S2 = u2.filter((M2) => {
        const L2 = this.services.cartesianScales.getDomainValue(M2);
        return v2.includes(L2);
      });
      this.elementsToHighlight && this.elementsToHighlight.size() > 0 && !Gs(this.elementsToHighlight, S2) && this.hideRuler(), S2.dispatch("mouseover"), this.elementsToHighlight = S2, this.services.events.dispatchEvent(oE.Tooltip.SHOW, {
        mousePosition: [t2, s2],
        hoveredElement: h2,
        data: this.formatTooltipData(b2)
      }), p2.attr("opacity", 1);
      const T2 = m2[0];
      a2 === "horizontal" ? h2.attr("x1", c2).attr("x2", l2).attr("y1", T2.domainValue).attr("y2", T2.domainValue) : h2.attr("y1", c2).attr("y2", l2).attr("x1", T2.domainValue).attr("x2", T2.domainValue);
    } else
      this.hideRuler();
  }
  hideRuler() {
    const e2 = this.parent, t2 = k.appendOrSelect(e2, "g.ruler");
    e2.selectAll("[role=graphics-symbol]").dispatch("mouseout"), this.services.events.dispatchEvent(oE.Tooltip.HIDE), t2.attr("opacity", 0);
  }
  /**
   * Adds the listener on the X grid to trigger multiple point tooltips along the x axis.
   */
  addBackdropEventListeners() {
    this.isEventListenerAdded = true;
    const e2 = this, t2 = this.services.domUtils.getHolder(), s2 = this.model.getDisplayData();
    let n2 = function(a2) {
      const i2 = pointer(a2, e2.parent.node());
      e2.showRuler(a2, i2);
    };
    if (s2.length > 100) {
      const a2 = s2.length % 50 * 12.5;
      n2 = ff(
        function(i2) {
          const { mousePosition: r2 } = this;
          e2.showRuler(i2, r2);
        },
        a2,
        t2
      );
    }
    this.backdrop.on("mousemove mouseover", n2).on("mouseout", this.hideRuler.bind(this));
  }
  drawBackdrop() {
    const e2 = this.parent;
    this.backdrop = k.appendOrSelect(e2, "svg.chart-grid-backdrop");
  }
};
class Bt extends z {
  constructor() {
    super(...arguments), this.type = "scatter", this.renderType = D$2.SVG, this.handleChartHolderOnHover = () => {
      if (!this.parent)
        throw new Error("Parent not defined");
      this.parent.selectAll("circle.dot").transition("chart-holder-hover-scatter").call(
        (e2) => {
          var t2;
          return (t2 = this.services.transitions) == null ? void 0 : t2.setupTransition({
            transition: e2,
            name: "chart-holder-hover-scatter"
          });
        }
      ).attr("opacity", 1);
    }, this.handleChartHolderOnMouseOut = () => {
      if (!this.parent)
        throw new Error("Parent not defined");
      this.parent.selectAll("circle.dot").transition("chart-holder-mouseout-scatter").call(
        (e2) => {
          var t2;
          return (t2 = this.services.transitions) == null ? void 0 : t2.setupTransition({
            transition: e2,
            name: "chart-holder-mouseout-scatter"
          });
        }
      ).attr("opacity", 0);
    }, this.handleLegendOnHover = (e2) => {
      const { hoveredElement: t2 } = e2.detail, { groupMapsTo: s2 } = this.getOptions().data;
      if (!this.parent)
        throw new Error("Parent not defined");
      this.parent.selectAll("circle.dot").transition("legend-hover-scatter").call(
        (n2) => {
          var a2;
          return (a2 = this.services.transitions) == null ? void 0 : a2.setupTransition({
            transition: n2,
            name: "legend-hover-scatter"
          });
        }
      ).attr("opacity", (n2) => n2[s2] !== t2.datum().name ? 0.3 : 1);
    }, this.handleLegendMouseOut = () => {
      if (!this.parent)
        throw new Error("Parent not defined");
      this.parent.selectAll("circle.dot").transition("legend-mouseout-scatter").call(
        (e2) => {
          var t2;
          return (t2 = this.services.transitions) == null ? void 0 : t2.setupTransition({
            transition: e2,
            name: "legend-mouseout-scatter"
          });
        }
      ).attr("opacity", 1);
    };
  }
  init() {
    const { events: e2 } = this.services;
    if (!e2)
      throw new Error("Services events are undefined.");
    e2.addEventListener(oE.Legend.ITEM_HOVER, this.handleLegendOnHover), e2.addEventListener(oE.Legend.ITEM_MOUSEOUT, this.handleLegendMouseOut);
    const { fadeInOnChartHolderMouseover: t2 } = this.configs;
    t2 && (e2.addEventListener(oE.Chart.MOUSEOVER, this.handleChartHolderOnHover), e2.addEventListener(oE.Chart.MOUSEOUT, this.handleChartHolderOnMouseOut));
  }
  filterBasedOnZoomDomain(e2) {
    const { cartesianScales: t2 } = this.services;
    if (!t2)
      throw new Error("Services cartesianScales are undefined.");
    const s2 = t2.getDomainIdentifier(e2), n2 = this.model.get("zoomDomain");
    return n2 !== void 0 ? e2.filter(
      (a2) => a2[s2].getTime() >= n2[0].getTime() && a2[s2].getTime() <= n2[1].getTime()
    ) : e2;
  }
  getScatterData() {
    const e2 = this.getOptions(), { stacked: t2 } = this.configs;
    let s2;
    if (t2) {
      const n2 = Object.keys(e2.axes).some((a2) => e2.axes[a2].percentage);
      s2 = this.model.getStackedData({
        groups: this.configs.groups,
        percentage: n2
      });
    } else {
      const { cartesianScales: n2 } = this.services;
      if (!n2)
        throw new Error("Services cartesianScales are undefined.");
      s2 = this.model.getDisplayData(this.configs.groups).filter((a2) => {
        const i2 = n2.getRangeIdentifier(a2);
        return a2[i2] !== void 0 && a2[i2] !== null;
      });
    }
    return this.filterBasedOnZoomDomain(s2);
  }
  render(e2) {
    if (!(G$1(this.getOptions(), "points", "enabled") || G$1(this.getOptions(), "bubble", "enabled")))
      return;
    const s2 = this.getComponentContainer({ withinChartClip: true }), n2 = this.getOptions(), { groupMapsTo: a2 } = n2.data, { cartesianScales: i2 } = this.services;
    if (!i2)
      throw new Error("Services cartesianScales are undefined.");
    const r2 = i2.getDomainIdentifier(), l2 = s2.selectAll("circle.dot").data(
      this.getScatterData(),
      (p2) => `${p2[a2]}-${p2[r2]}`
    );
    l2.exit().attr("opacity", 0).remove();
    const d2 = l2.enter().append("circle").classed("dot", true).attr("opacity", 0).merge(l2);
    this.styleCircles(d2, e2), this.addEventListeners();
  }
  // A value is an anomaly if is above all defined domain and range thresholds
  isDatapointThresholdAnomaly(e2) {
    const { handleThresholds: t2 } = this.configs;
    if (!t2)
      return false;
    const { cartesianScales: s2 } = this.services;
    if (!s2)
      throw new Error("Cartesian scales service is undefined");
    const n2 = s2.getOrientation(), [a2, i2] = yf(
      s2.getHighestDomainThreshold(),
      s2.getHighestRangeThreshold(),
      n2
    ), [r2, l2] = yf(
      (p2) => s2.getDomainValue(p2),
      (p2) => s2.getRangeValue(p2),
      n2
    ), c2 = r2(e2), d2 = l2(e2);
    return i2 && a2 ? d2 <= i2.scaleValue && c2 >= a2.scaleValue : i2 ? d2 <= i2.scaleValue : a2 ? c2 >= a2.scaleValue : false;
  }
  styleCircles(e2, t2) {
    const s2 = this.getOptions(), { filled: n2, fillOpacity: a2 } = s2.points, { cartesianScales: i2 } = this.services;
    if (!i2)
      throw new Error("Cartesian scales service is undefined");
    const { groupMapsTo: r$12 } = s2.data, l2 = (u2) => i2.getDomainValue(u2), c2 = (u2) => i2.getRangeValue(u2), [d2, p2] = yf(
      l2,
      c2,
      i2.getOrientation()
    ), { fadeInOnChartHolderMouseover: h2 } = this.configs;
    e2.raise().classed("dot", true).attr("class", (u2) => {
      const g2 = i2.getDomainIdentifier(u2), b2 = this.model.getIsFilled(u2[r$12], u2[g2], u2, n2) ? [b$1.FILL, b$1.STROKE] : [b$1.STROKE];
      return this.model.getColorClassName({
        classNameTypes: b2,
        dataGroupName: u2[r$12],
        originalClassName: "dot"
      }) || "";
    }).classed("threshold-anomaly", (u2) => this.isDatapointThresholdAnomaly(u2)).classed("filled", (u2) => {
      const g2 = i2.getDomainIdentifier(u2);
      return this.model.getIsFilled(u2[r$12], u2[g2], u2, n2);
    }).classed("unfilled", (u2) => {
      const g2 = i2.getDomainIdentifier(u2);
      return !this.model.getIsFilled(u2[r$12], u2[g2], u2, n2);
    }).transition().call(
      (u2) => {
        var g2;
        return (g2 = this.services.transitions) == null ? void 0 : g2.setupTransition({
          transition: u2,
          name: "scatter-update-enter",
          animate: t2
        });
      }
    ).attr("cx", d2).attr("cy", p2).attr("r", s2.points.radius).style("fill", (u2) => {
      const g2 = i2.getDomainIdentifier(u2);
      if (this.model.getIsFilled(u2[r$12], u2[g2], u2, n2))
        return this.model.getFillColor(u2[r$12], u2[g2], u2);
    }).style("stroke", (u2) => {
      const g2 = i2.getDomainIdentifier(u2);
      return this.model.getStrokeColor(u2[r$12], u2[g2], u2);
    }).attr("fill-opacity", n2 ? a2 : 1).attr("opacity", h2 ? 0 : 1).attr("role", r.GRAPHICS_SYMBOL).attr("aria-roledescription", "point").attr("aria-label", (u2) => {
      const g2 = i2.getRangeIdentifier(u2);
      return u2[g2];
    }), this.addEventListeners();
  }
  // Extended in bubble graphs
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getTooltipAdditionalItems(e2) {
    return null;
  }
  addEventListeners() {
    const e2 = this, { groupMapsTo: t2 } = e2.getOptions().data;
    if (!this.parent)
      throw new Error("Parent not defined");
    this.parent.selectAll("circle").on("mouseover", function(s2, n2) {
      var i2, r2;
      const a2 = select(this);
      a2.classed("hovered", true).attr(
        "class",
        (l2) => e2.model.getColorClassName({
          classNameTypes: [b$1.FILL],
          dataGroupName: l2[t2],
          originalClassName: a2.attr("class")
        })
      ).style("fill", (l2) => {
        var d2;
        const c2 = (d2 = e2.services.cartesianScales) == null ? void 0 : d2.getDomainIdentifier(l2);
        return e2.model.getFillColor(l2[t2], l2[c2], l2);
      }).classed("unfilled", false), (i2 = e2.services.events) == null || i2.dispatchEvent(oE.Tooltip.SHOW, {
        event: s2,
        hoveredElement: a2,
        data: [n2],
        additionalItems: e2.getTooltipAdditionalItems(n2)
      }), (r2 = e2.services.events) == null || r2.dispatchEvent(oE.Scatter.SCATTER_MOUSEOVER, {
        event: s2,
        element: a2,
        datum: n2
      });
    }).on("mousemove", function(s2, n2) {
      var i2, r2;
      const a2 = select(this);
      (i2 = e2.services.events) == null || i2.dispatchEvent(oE.Scatter.SCATTER_MOUSEMOVE, {
        event: s2,
        element: a2,
        datum: n2
      }), (r2 = e2.services.events) == null || r2.dispatchEvent(oE.Tooltip.MOVE, {
        event: s2
      });
    }).on("click", function(s2, n2) {
      var a2;
      (a2 = e2.services.events) == null || a2.dispatchEvent(oE.Scatter.SCATTER_CLICK, {
        event: s2,
        element: select(this),
        datum: n2
      });
    }).on("mouseout", function(s2, n2) {
      var i2, r2, l2;
      const a2 = select(this);
      if (a2.classed("hovered", false), !e2.configs.filled) {
        const { filled: c2 } = e2.getOptions().points, d2 = (i2 = e2.services.cartesianScales) == null ? void 0 : i2.getDomainIdentifier(n2), p2 = e2.model.getIsFilled(
          n2[t2],
          n2[d2],
          n2,
          c2
        );
        a2.classed("unfilled", !p2).style("fill", (h2) => p2 || c2 ? e2.model.getFillColor(h2[t2], h2[d2], h2) : null);
      }
      (r2 = e2.services.events) == null || r2.dispatchEvent(oE.Scatter.SCATTER_MOUSEOUT, {
        event: s2,
        element: a2,
        datum: n2
      }), (l2 = e2.services.events) == null || l2.dispatchEvent(oE.Tooltip.HIDE, {
        hoveredElement: a2
      });
    });
  }
  destroy() {
    var t2;
    (t2 = this.parent) == null || t2.selectAll("circle").on("mousemove", null).on("mouseout", null);
    const { events: e2 } = this.services;
    if (!e2)
      throw new Error("Services events undefined");
    e2.removeEventListener(oE.Legend.ITEM_HOVER, this.handleLegendOnHover), e2.removeEventListener(oE.Legend.ITEM_MOUSEOUT, this.handleLegendMouseOut), e2.removeEventListener(oE.Chart.MOUSEOVER, this.handleChartHolderOnHover), e2.removeEventListener(oE.Chart.MOUSEOUT, this.handleChartHolderOnMouseOut);
  }
}
class Ys extends z {
  constructor(e2, t2, s2) {
    super(e2, t2, s2), this.type = "axes", this.renderType = D$2.SVG, this.truncation = {
      [f.LEFT]: false,
      [f.RIGHT]: false,
      [f.TOP]: false,
      [f.BOTTOM]: false
    }, s2 && (this.configs = s2), this.margins = this.configs.margins;
  }
  render(e2 = true) {
    const { position: t2 } = this.configs, s2 = this.getOptions(), n2 = G$1(s2, "axes", t2, "visible"), a2 = this.getComponentContainer(), { width: i2, height: r$12 } = k.getSVGElementSize(a2, {
      useAttrs: true
    }), l2 = k.appendOrSelect(a2, `g.axis.${t2}`);
    let c2, d2;
    if (t2 === f.BOTTOM || t2 === f.TOP ? (c2 = this.configs.axes[f.LEFT] ? this.margins.left : 0, d2 = this.configs.axes[f.RIGHT] ? i2 - this.margins.right : i2) : (c2 = r$12 - this.margins.bottom, d2 = this.margins.top), !this.services.cartesianScales)
      throw new Error("Services cartesianScales undefined");
    const p2 = this.services.cartesianScales.getScaleByPosition(t2);
    this.scaleType === w$1.LABELS || this.scaleType === w$1.LABELS_RATIO ? p2.rangeRound([c2, d2]) : p2.range([c2, d2]);
    let h2;
    switch (t2) {
      case f.LEFT:
        h2 = axisLeft;
        break;
      case f.BOTTOM:
        h2 = axisBottom;
        break;
      case f.RIGHT:
        h2 = axisRight;
        break;
      case f.TOP:
        h2 = axisTop;
        break;
    }
    l2.attr("aria-label", `${t2} axis`);
    const u2 = !l2.select("g.ticks").empty();
    let g2 = k.appendOrSelect(l2, "g.ticks");
    u2 || (g2.attr("role", `${r.GRAPHICS_OBJECT} ${r.GROUP}`), g2.attr("aria-label", `${t2} ticks`));
    const m2 = k.appendOrSelect(l2, "g.ticks.invisible").style("opacity", "0").style("pointer-events", "none").attr("aria-hidden", true).attr("aria-label", `invisible ${t2} ticks`), b2 = G$1(s2, "axes", t2), v2 = this.scaleType === w$1.TIME || b2.scaleType === w$1.TIME, S2 = t2 === f.LEFT || t2 === f.RIGHT, T2 = this.model.get("zoomDomain");
    if (T2 && v2 && !S2 && p2.domain(T2), !n2) {
      g2.attr("aria-hidden", true);
      return;
    }
    const M2 = G$1(b2, "scaleType"), L2 = G$1(s2, "data", "loading"), O2 = G$1(b2, "ticks", "number"), k$12 = G$1(b2, "ticks", "values"), I2 = G$1(b2, "truncation", "type"), F2 = G$1(b2, "truncation", "threshold"), P2 = G$1(b2, "truncation", "numCharacter"), A2 = O2 !== null, w2 = G$1(s2, "timeScale"), G2 = k.appendOrSelect(m2, "g.tick"), D2 = k.appendOrSelect(G2, "text").text("0"), X2 = k.getSVGElementSize(D2.node(), {
      useBBox: true
    }).height;
    G2.remove();
    const re2 = this.scaleType || b2.scaleType || w$1.LINEAR, W2 = h2(p2).tickSizeOuter(0);
    if (p2.ticks) {
      let B2;
      if (A2 ? B2 = O2 : (B2 = hc$1.ticks.number, S2 && (B2 = this.getNumberOfFittingTicks(
        r$12,
        X2,
        hc$1.ticks.verticalSpaceRatio
      ))), p2.ticks().length === 1 && p2.ticks()[0] === 0 && (B2 = 0), W2.ticks(B2), v2)
        if (!p2.ticks(B2).length)
          W2.tickValues([]);
        else {
          const j2 = G$1(s2, "timeScale", "addSpaceOnEdges"), q2 = G$1(s2, "axes", t2, "domain"), J2 = p2.copy();
          j2 && !q2 && J2.nice(B2);
          const oe2 = J2.ticks(B2);
          j2 && oe2.length > 2 && !q2 && (oe2.splice(oe2.length - 1, 1), oe2.splice(0, 1)), W2.tickValues(oe2);
        }
    }
    let N2;
    const ae2 = G$1(b2, "ticks", "formatter");
    if (v2) {
      const B2 = wf(
        W2.tickValues(),
        G$1(s2, "timeScale", "timeInterval")
      );
      ae2 === null ? N2 = (j2, q2) => bf(j2, q2, W2.tickValues(), B2, w2) : N2 = (j2, q2) => {
        const J2 = bf(
          j2,
          q2,
          W2.tickValues(),
          B2,
          w2
        );
        return ae2(j2, q2, J2);
      };
    } else
      ae2 === null ? re2 === w$1.LINEAR && (N2 = (B2) => B2.toLocaleString()) : N2 = ae2;
    W2.tickFormat(N2);
    const [tt2, st2] = this.services.cartesianScales.getScaleByPosition(t2).domain();
    let _e2;
    if (k$12) {
      if (v2)
        k$12.forEach((B2, j2) => {
          B2.getTime === void 0 && (k$12[j2] = new Date(B2));
        }), _e2 = k$12.filter((B2) => {
          const j2 = B2.getTime();
          return j2 >= new Date(tt2).getTime() && j2 <= new Date(st2).getTime();
        });
      else if (M2 === w$1.LABELS) {
        const B2 = this.services.cartesianScales.getScaleByPosition(t2).domain();
        _e2 = k$12.filter((j2) => B2.includes(j2));
      } else
        _e2 = k$12.filter(
          (B2) => B2 >= tt2 && B2 <= st2
        );
      W2.tickValues(_e2);
    }
    switch (t2) {
      case f.LEFT:
        g2.attr("transform", `translate(${this.margins.left}, 0)`);
        break;
      case f.BOTTOM:
        g2.attr("transform", `translate(0, ${r$12 - this.margins.bottom})`);
        break;
      case f.RIGHT:
        g2.attr("transform", `translate(${i2 - this.margins.right}, 0)`);
        break;
      case f.TOP:
        g2.attr("transform", `translate(0, ${this.margins.top})`);
        break;
    }
    const Nt2 = this.model.isDataEmpty();
    if (b2.title) {
      const B2 = k.appendOrSelect(l2, "text.axis-title").html(
        Nt2 || L2 ? "" : b2.title
      ), j2 = G$1(b2, "titleOrientation");
      let q2;
      switch (t2) {
        case f.LEFT:
          j2 === EE.RIGHT ? B2.attr("transform", "rotate(90)").attr("y", 0).attr("x", p2.range()[0] / 2).attr("dy", "-0.5em").style("text-anchor", "middle") : B2.attr("transform", "rotate(-90)").attr("y", 0).attr("x", -(p2.range()[0] / 2)).attr("dy", "0.75em").style("text-anchor", "middle");
          break;
        case f.BOTTOM:
          B2.attr(
            "transform",
            `translate(${this.margins.left / 2 + p2.range()[1] / 2}, ${r$12 + 4})`
          ).style("text-anchor", "middle");
          break;
        case f.RIGHT:
          j2 === EE.LEFT ? B2.attr("transform", "rotate(-90)").attr("y", i2).attr("x", -(p2.range()[0] / 2)).style("text-anchor", "middle") : B2.attr("transform", "rotate(90)").attr("y", -i2).attr("x", p2.range()[0] / 2).attr("dy", "0.75em").style("text-anchor", "middle");
          break;
        case f.TOP:
          q2 = k.getSVGElementSize(B2, {
            useBBox: true
          }).height, B2.attr(
            "transform",
            `translate(${this.margins.left / 2 + p2.range()[1] / 2}, ${q2 / 2})`
          ).style("text-anchor", "middle");
          break;
      }
    }
    if (v2) {
      const B2 = wf(
        W2.tickValues(),
        G$1(s2, "timeScale", "timeInterval")
      ), j2 = w2.showDayName, q2 = g2;
      e2 && (g2 = g2.transition().call(
        (oe2) => this.services.transitions.setupTransition({
          transition: oe2,
          name: "axis-update",
          animate: e2
        })
      )), g2 = g2.call(W2), q2.selectAll(".tick").data(W2.tickValues(), p2).order().select("text").style("font-weight", (oe2, Ne2) => rf(oe2, Ne2, W2.tickValues(), B2, j2) ? "bold" : "normal");
    } else
      !e2 || !u2 ? g2 = g2.call(W2) : g2 = g2.transition().call(
        (B2) => this.services.transitions.setupTransition({
          transition: B2,
          name: "axis-update",
          animate: e2
        })
      ).call(W2);
    if (m2.call(W2), t2 === f.BOTTOM || t2 === f.TOP) {
      let B2 = false;
      const j2 = G$1(b2, "ticks", "rotation");
      if (j2 === j$3.ALWAYS)
        B2 = true;
      else if (j2 === j$3.NEVER)
        B2 = false;
      else if (!j2 || j2 === j$3.AUTO)
        if (p2.step)
          B2 = m2.selectAll("g.tick text").nodes().some(
            (J2) => k.getSVGElementSize(J2, {
              useBBox: true
            }).width >= p2.step()
          );
        else {
          B2 = false;
          const q2 = m2.append("text").text("A"), J2 = k.getSVGElementSize(q2.node(), {
            useBBox: true
          }).width;
          let oe2;
          m2.selectAll("g.tick").each(function() {
            const Ne2 = select(this), C2 = parseFloat(G$1(hf(this), "tx"));
            C2 !== null && oe2 + Ne2.text().length * J2 * 0.8 >= C2 && (B2 = true), oe2 = C2;
          }), q2.remove();
        }
      B2 ? (A2 || (W2.ticks(
        this.getNumberOfFittingTicks(i2, X2, hc$1.ticks.horizontalSpaceRatio)
      ), m2.call(W2), g2.call(W2)), l2.selectAll("g.ticks g.tick text").attr("transform", "rotate(-45)").attr("text-anchor", t2 === f.TOP ? "start" : "end")) : l2.selectAll("g.ticks g.tick text").attr("transform", null).attr("text-anchor", null);
    }
    if (L2 ? l2.attr("opacity", 0) : l2.attr("opacity", 1), g2.selectAll("g.tick").attr("aria-label", (B2) => B2), m2.selectAll("g.tick").attr("aria-label", (B2) => B2), I2 !== h$1.NONE && M2 === w$1.LABELS && !k$12) {
      const B2 = this.services.cartesianScales.getScaleDomain(t2);
      if (B2.length > 0) {
        const j2 = a2.select(`g.axis.${t2} g.ticks g.tick`).html();
        l2.selectAll("g.ticks g.tick").html(j2);
        const q2 = this;
        l2.selectAll("g.tick text").data(B2).text(function(J2) {
          return J2.length > F2 ? (q2.truncation[t2] = true, pf(J2, I2, P2)) : J2;
        }), this.getInvisibleAxisRef().selectAll("g.tick text").data(B2).text(function(J2) {
          return J2.length > F2 ? pf(J2, I2, P2) : J2;
        }), l2.selectAll("g.ticks").html(this.getInvisibleAxisRef().html()), l2.selectAll("g.tick text").data(B2);
      }
    }
    this.addEventListeners();
  }
  addEventListeners() {
    const e2 = this.getComponentContainer(), { position: t2 } = this.configs, s2 = k.appendOrSelect(e2, `g.axis.${t2}`), n2 = this.getOptions(), a2 = G$1(n2, "axes", t2), i2 = G$1(a2, "scaleType"), r2 = G$1(a2, "truncation", "threshold"), l2 = this;
    s2.selectAll("g.tick text").on("mouseover", function(c2, d2) {
      l2.services.events.dispatchEvent(oE.Axis.LABEL_MOUSEOVER, {
        event: c2,
        element: select(this),
        datum: d2
      }), i2 === w$1.LABELS && d2.length > r2 && l2.services.events.dispatchEvent(oE.Tooltip.SHOW, {
        event: c2,
        hoveredElement: select(this),
        content: d2
      });
    }).on("mousemove", function(c2, d2) {
      l2.services.events.dispatchEvent(oE.Axis.LABEL_MOUSEMOVE, {
        event: c2,
        element: select(this),
        datum: d2
      }), i2 === w$1.LABELS && d2.length > r2 && l2.services.events.dispatchEvent(oE.Tooltip.MOVE, {
        event: c2
      });
    }).on("click", function(c2, d2) {
      l2.services.events.dispatchEvent(oE.Axis.LABEL_CLICK, {
        event: c2,
        element: select(this),
        datum: d2
      });
    }).on("mouseout", function(c2, d2) {
      l2.services.events.dispatchEvent(oE.Axis.LABEL_MOUSEOUT, {
        event: c2,
        element: select(this),
        datum: d2
      }), i2 === w$1.LABELS && l2.services.events.dispatchEvent(oE.Tooltip.HIDE);
    });
  }
  getInvisibleAxisRef() {
    const { position: e2 } = this.configs;
    return this.getComponentContainer().select(`g.axis.${e2} g.ticks.invisible`);
  }
  getTitleRef() {
    const { position: e2 } = this.configs;
    return this.getComponentContainer().select(`g.axis.${e2} text.axis-title`);
  }
  getNumberOfFittingTicks(e2, t2, s2) {
    const n2 = Math.floor(e2 / (t2 * s2));
    return $s(n2, 2, hc$1.ticks.number);
  }
  destroy() {
    const e2 = this.getComponentContainer(), { position: t2 } = this.configs;
    k.appendOrSelect(e2, `g.axis.${t2}`).selectAll("g.tick text").on("mouseover", null).on("mousemove", null).on("mouseout", null);
  }
}
class or extends Ys {
  constructor(e2, t2, s2) {
    super(e2, t2, s2);
  }
  render(e2 = true) {
    super.render(e2), super.destroy();
    const t2 = this.configs.position, s2 = this.getComponentContainer(), n2 = k.appendOrSelect(s2, `g.axis.${t2}`), a2 = this;
    n2.selectAll("g.tick").each(function(i2, r2) {
      const l2 = select(this);
      l2.classed("tick-hover", true).attr("tabindex", r2 === 0 ? 0 : -1);
      const c2 = l2.select("text"), { width: d2, height: p2 } = k.getSVGElementSize(c2, {
        useBBox: true
      }), h2 = k.appendOrSelect(l2, "rect.axis-holder");
      let u2 = 0, g2 = 0;
      switch (t2) {
        case f.LEFT:
          u2 = -d2 + Number(c2.attr("x")), g2 = -(p2 / 2);
          break;
        case f.RIGHT:
          u2 = Math.abs(Number(c2.attr("x"))), g2 = -(p2 / 2);
          break;
        case f.TOP:
          u2 = -(d2 / 2), g2 = -p2 + Number(c2.attr("y")) / 2, a2.truncation[t2] && (u2 = 0, h2.attr("transform", "rotate(-45)"));
          break;
        case f.BOTTOM:
          u2 = -(d2 / 2), g2 = p2 / 2 - 2, a2.truncation[t2] && (u2 = -d2, h2.attr("transform", "rotate(-45)"));
          break;
      }
      h2.attr("x", u2 - hc$1.hover.rectanglePadding).attr("y", g2).attr("width", d2 + hc$1.hover.rectanglePadding * 2).attr("height", p2).lower();
    }), this.addEventListeners();
  }
  addEventListeners() {
    const e2 = this.getComponentContainer(), { position: t2 } = this.configs, s2 = k.appendOrSelect(e2, `g.axis.${t2}`), n2 = this.getOptions(), a2 = G$1(n2, "axes", t2), i2 = G$1(a2, "scaleType"), r2 = G$1(a2, "truncation", "threshold"), l2 = this;
    s2.selectAll("g.tick.tick-hover").on("mouseover", function(c2) {
      const d2 = select(this).select("text"), p2 = d2.datum();
      l2.services.events.dispatchEvent(oE.Axis.LABEL_MOUSEOVER, {
        event: c2,
        element: d2,
        datum: p2
      }), i2 === w$1.LABELS && p2.length > r2 && l2.services.events.dispatchEvent(oE.Tooltip.SHOW, {
        event: c2,
        element: d2,
        datum: p2
      });
    }).on("mousemove", function(c2) {
      const d2 = select(this).select("text"), p2 = d2.datum();
      l2.services.events.dispatchEvent(oE.Axis.LABEL_MOUSEMOVE, {
        event: c2,
        element: d2,
        datum: p2
      }), l2.services.events.dispatchEvent(oE.Tooltip.MOVE, {
        event: c2
      });
    }).on("click", function(c2) {
      l2.services.events.dispatchEvent(oE.Axis.LABEL_CLICK, {
        event: c2,
        element: select(this).select("text"),
        datum: select(this).select("text").datum()
      });
    }).on("mouseout", function(c2) {
      l2.services.events.dispatchEvent(oE.Axis.LABEL_MOUSEOUT, {
        event: c2,
        element: select(this).select("text"),
        datum: select(this).select("text").datum()
      }), i2 === w$1.LABELS && l2.services.events.dispatchEvent(oE.Tooltip.HIDE);
    }).on("focus", function(c2) {
      const d2 = { clientX: 0, clientY: 0 };
      if (c2.target) {
        c2.target.focus();
        const p2 = c2.target.getBoundingClientRect();
        d2.clientX = p2.x, d2.clientY = p2.y;
      }
      l2.services.events.dispatchEvent(oE.Axis.LABEL_FOCUS, {
        event: { ...c2, ...d2 },
        element: select(this),
        datum: select(this).select("text").datum()
      });
    }).on("blur", function(c2) {
      l2.services.events.dispatchEvent(oE.Axis.LABEL_BLUR, {
        event: c2,
        element: select(this),
        datum: select(this).select("text").datum()
      });
    }).on("keydown", function(c2) {
      c2.key && c2.key === "Escape" && (l2.services.events.dispatchEvent(oE.Tooltip.HIDE), l2.services.events.dispatchEvent(oE.Axis.LABEL_BLUR, {
        event: c2,
        element: select(this),
        datum: select(this).select("text").datum()
      })), t2 === f.LEFT || t2 === f.RIGHT ? c2.key && c2.key === "ArrowUp" ? l2.goNext(this, c2) : c2.key && c2.key === "ArrowDown" && l2.goPrevious(this, c2) : c2.key && c2.key === "ArrowLeft" ? l2.goPrevious(this, c2) : c2.key && c2.key === "ArrowRight" && l2.goNext(this, c2);
    });
  }
  // Focus on the next HTML element sibling
  goNext(e2, t2) {
    e2.nextElementSibling && e2.nextElementSibling.tagName !== "path" && e2.nextElementSibling.dispatchEvent(new Event("focus")), t2.preventDefault();
  }
  // Focus on the previous HTML element sibling
  goPrevious(e2, t2) {
    e2.previousElementSibling && e2.previousElementSibling.tagName !== "path" && e2.previousElementSibling.dispatchEvent(new Event("focus")), t2.preventDefault();
  }
  destroy() {
    const e2 = this.getComponentContainer(), { position: t2 } = this.configs;
    k.appendOrSelect(e2, `g.axis.${t2}`).selectAll("g.tick.tick-hover").on("mouseover", null).on("mousemove", null).on("mouseout", null).on("focus", null).on("blur", null);
  }
}
class vc extends z {
  constructor() {
    super(...arguments), this.type = "2D-axes", this.renderType = D$2.SVG, this.children = {}, this.thresholds = [], this.margins = {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }
  render(e2 = false) {
    const t2 = {}, s2 = Object.keys(f), n2 = G$1(this.getOptions(), "axes");
    s2.forEach((r2) => {
      n2[f[r2]] && (t2[f[r2]] = true);
    }), this.configs.axes = t2, s2.forEach((r2) => {
      const l2 = f[r2];
      if (this.configs.axes[l2] && !this.children[l2]) {
        const c2 = {
          position: l2,
          axes: this.configs.axes,
          margins: this.margins
        }, d2 = this.model.axisFlavor === aE.DEFAULT ? new Ys(this.model, this.services, c2) : new or(this.model, this.services, c2);
        d2.setModel(this.model), d2.setServices(this.services), d2.setParent(this.parent), this.children[l2] = d2;
      }
    }), Object.keys(this.children).forEach((r2) => {
      this.children[r2].render(e2);
    });
    const a2 = {};
    Object.keys(this.children).forEach((r2) => {
      const l2 = this.children[r2], c2 = l2.configs.position, d2 = l2.getInvisibleAxisRef(), { width: p2, height: h2 } = k.getSVGElementSize(d2, { useBBox: true });
      let u2;
      switch (l2.getTitleRef().empty() ? u2 = 0 : (u2 = k.getSVGElementSize(l2.getTitleRef(), {
        useBBox: true
      }).height, (c2 === f.LEFT || c2 === f.RIGHT) && (u2 += 5)), c2) {
        case f.TOP:
          a2.top = h2 + u2;
          break;
        case f.BOTTOM:
          a2.bottom = h2 + u2;
          break;
        case f.LEFT:
          a2.left = p2 + u2;
          break;
        case f.RIGHT:
          a2.right = p2 + u2;
          break;
      }
    }), this.services.events.dispatchEvent(oE.Axis.RENDER_COMPLETE), Object.keys(a2).some((r2) => this.margins[r2] !== a2[r2]) && (this.margins = Object.assign(this.margins, a2), this.model.set({ axesMargins: this.margins }, { skipUpdate: true }), this.services.events.dispatchEvent(oE.ZoomBar.UPDATE), Object.keys(this.children).forEach((r2) => {
      const l2 = this.children[r2];
      l2.margins = this.margins;
    }), this.render(true));
  }
}
class lr extends z {
  constructor() {
    super(...arguments), this.type = "skeleton";
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render(e2 = true) {
    const t2 = G$1(this.getOptions(), "data", "loading");
    t2 ? this.renderSkeleton(t2) : this.removeSkeleton();
  }
  renderSkeleton(e2) {
    if (this.configs.skeleton === Z$3.GRID)
      this.renderGridSkeleton(e2);
    else if (this.configs.skeleton === Z$3.VERT_OR_HORIZ)
      this.renderVertOrHorizSkeleton(e2);
    else if (this.configs.skeleton === Z$3.PIE)
      this.renderPieSkeleton(e2);
    else if (this.configs.skeleton === Z$3.DONUT)
      this.renderDonutSkeleton(e2);
    else
      throw new Error(`"${this.configs.skeleton}" is not a valid Skeleton type.`);
  }
  renderGridSkeleton(e2) {
    this.setScales(), this.drawBackdrop(e2), this.drawXGrid(e2), this.drawYGrid(e2), e2 && this.setShimmerEffect("shimmer-lines");
  }
  renderVertOrHorizSkeleton(e2) {
    const t2 = this.services.cartesianScales.getOrientation();
    this.setScales(), this.drawBackdrop(e2), t2 === F$2.VERTICAL && this.drawYGrid(e2), t2 === F$2.HORIZONTAL && this.drawXGrid(e2), this.setShimmerEffect("shimmer-lines");
  }
  renderPieSkeleton(e2) {
    const t2 = this.computeOuterRadius(), s2 = 0;
    this.drawRing(t2, s2, e2), e2 && this.setShimmerEffect("shimmer-areas");
  }
  renderDonutSkeleton(e2) {
    const t2 = this.computeOuterRadius(), s2 = this.computeInnerRadius();
    this.drawRing(t2, s2, e2), e2 && this.setShimmerEffect("shimmer-areas");
  }
  setScales() {
    const e2 = this.services.cartesianScales.getMainXScale().range(), t2 = this.services.cartesianScales.getMainYScale().range();
    this.xScale = scaleLinear().domain([0, 1]).range(e2), this.yScale = scaleLinear().domain([0, 1]).range(t2);
  }
  drawBackdrop(e2) {
    const t2 = this.parent, { width: s2, height: n2 } = k.getSVGElementSize(t2, {
      useAttrs: true
    });
    this.backdrop = k.appendOrSelect(t2, "svg.chart-skeleton.DAII").attr("width", s2).attr("height", n2);
    const a2 = k.appendOrSelect(this.backdrop, "rect.chart-skeleton-backdrop");
    a2.attr("width", "100%").attr("height", "100%");
    const [i2] = this.xScale.range(), [, r2] = this.yScale.range();
    this.backdrop.merge(a2).attr("x", i2).attr("y", r2), a2.classed("shimmer-effect-lines", e2).classed("empty-state-lines", !e2).style(
      "stroke",
      e2 ? `url(#${this.services.domUtils.generateElementIDString("shimmer-lines")})` : null
    );
  }
  drawXGrid(e2) {
    const t2 = +this.backdrop.attr("width"), s2 = G$1(this.getOptions(), "grid", "x", "numberOfTicks"), n2 = this.xScale.ticks(s2).map((r2) => r2 * t2), a2 = k.appendOrSelect(this.backdrop, "g.x.skeleton"), i2 = a2.selectAll("line").data(n2);
    i2.enter().append("line").merge(i2).attr("x1", (r2) => r2).attr("x2", (r2) => r2).attr("y1", 0).attr("y2", "100%"), a2.selectAll("line").classed("shimmer-effect-lines", e2).classed("empty-state-lines", !e2).style(
      "stroke",
      e2 ? `url(#${this.services.domUtils.generateElementIDString("shimmer-lines")})` : null
    );
  }
  drawYGrid(e2) {
    const t2 = +this.backdrop.attr("height"), s2 = this.backdrop.attr("width"), n2 = G$1(this.getOptions(), "grid", "y", "numberOfTicks"), a2 = this.xScale.ticks(n2).map((l2) => l2 * t2), i2 = k.appendOrSelect(this.backdrop, "g.y.skeleton"), r2 = i2.selectAll("line").data(a2);
    r2.enter().append("line").merge(r2).attr("x1", 0).attr("x2", s2).attr("y1", (l2) => l2).attr("y2", (l2) => l2), i2.selectAll("line").classed("shimmer-effect-lines", e2).classed("empty-state-lines", !e2).style(
      "stroke",
      e2 ? `url(#${this.services.domUtils.generateElementIDString("shimmer-lines")})` : null
    );
  }
  drawRing(e2, t2, s2 = true) {
    const n2 = this.parent, { width: a2, height: i2 } = k.getSVGElementSize(n2, {
      useAttrs: true
    }), r2 = k.appendOrSelect(n2, "svg.chart-skeleton").attr("width", a2).attr("height", i2), l2 = t2 === 0 ? "pie" : "donut", c2 = G$1(this.getOptions(), l2, "alignment");
    k.appendOrSelect(r2, "rect.chart-skeleton-area-container").attr("width", a2).attr("height", i2).attr("fill", "none");
    const d2 = arc().innerRadius(t2).outerRadius(e2).startAngle(0).endAngle(Math.PI * 2), p2 = e2 + Math.abs(Tc.radiusOffset), h2 = e2 + (Math.min(a2, i2) - e2 * 2) / 2, u2 = k.appendOrSelect(r2, "path").attr("class", "skeleton-area-shape").attr("transform", `translate(${p2}, ${h2})`).attr("d", d2).classed("shimmer-effect-areas", s2).classed("empty-state-areas", !s2).style(
      "fill",
      s2 ? `url(#${this.services.domUtils.generateElementIDString("shimmer-areas")})` : null
    );
    let g2 = e2 + Tc.xOffset;
    c2 === k$2.CENTER ? g2 = a2 / 2 : c2 === k$2.RIGHT && (g2 = a2 - e2 - Tc.xOffset);
    const m2 = e2 + Tc.yOffset;
    u2.attr("transform", `translate(${g2}, ${m2})`);
  }
  // same logic in pie
  computeOuterRadius() {
    const { width: e2, height: t2 } = k.getSVGElementSize(this.parent, {
      useAttrs: true
    });
    return Math.min(e2, t2) / 2 + Tc.radiusOffset;
  }
  // same logic in donut
  computeInnerRadius() {
    return this.computeOuterRadius() * (3 / 4);
  }
  setShimmerEffect(e2) {
    const a2 = "stop-bg-shimmer", i2 = "stop-shimmer", r2 = this.parent.select(".chart-skeleton"), { width: l2 } = k.getSVGElementSize(this.parent, {
      useAttrs: true
    }), c2 = 0, d2 = l2, p2 = k.appendOrSelect(r2, "defs").lower(), h2 = k.appendOrSelect(p2, "linearGradient").attr("id", this.services.domUtils.generateElementIDString(e2)).attr("class", e2).attr("x1", c2 - 3 * 0.2 * l2).attr("x2", d2).attr("y1", 0).attr("y2", 0).attr("gradientUnits", "userSpaceOnUse").attr("gradientTransform", "translate(0, 0)"), u2 = `
			<stop class="${a2}" offset="${c2}"></stop>
			<stop class="${i2}" offset="${c2 + 0.2}"></stop>
			<stop class="${a2}" offset="${c2 + 2 * 0.2}"></stop>
		`;
    h2.html(u2), g2();
    function g2() {
      h2.attr("gradientTransform", `translate(${c2 - 3 * 0.2 * l2}, 0)`).transition().duration(2e3).delay(1e3).ease(easeLinear).attr("gradientTransform", `translate(${d2 + 3 * 0.2 * l2}, 0)`).on("end", g2);
    }
  }
  removeSkeleton() {
    this.parent.select(".chart-skeleton").remove();
  }
}
class bc extends z {
  constructor() {
    super(...arguments), this.type = "zero-line", this.renderType = D$2.SVG;
  }
  render(e2) {
    const t2 = this.services.cartesianScales.getRangeAxisPosition({
      groups: this.configs.groups
    }), s2 = this.services.cartesianScales.getScaleByPosition(t2), [n2, a2] = s2.domain(), i2 = n2 > 0 && a2 < 0 || n2 < 0 && a2 > 0, r2 = this.getComponentContainer();
    if (!i2) {
      r2.selectAll("line.domain").remove();
      return;
    }
    const [l2, c2] = this.services.cartesianScales.getDomainScale().range();
    let d2 = +s2(0) + 0.5;
    d2 || (d2 = s2.range()[0]);
    const p2 = tf(
      {
        x0: l2,
        x1: c2,
        y0: d2,
        y1: d2
      },
      this.services.cartesianScales.getOrientation()
    );
    k.appendOrSelect(r2, "line.domain").transition().call(
      (u2) => this.services.transitions.setupTransition({
        transition: u2,
        name: "zero-line-update",
        animate: e2
      })
    ).attr("y1", p2.y0).attr("y2", p2.y1).attr("x1", p2.x0).attr("x2", p2.x1);
  }
}
class Oc extends Xs$1 {
  formatTooltipData(e2) {
    return e2.reverse();
  }
}
class Gt extends z {
  // Gets the correct width for bars based on options & configurations
  getBarWidth() {
    const e2 = this.getOptions();
    if (e2.bars.width)
      return e2.bars.width;
    const t2 = this.model.getDisplayData().length, s2 = this.services.cartesianScales.getMainXScale(), n2 = k.getSVGElementSize(this.parent, {
      useAttrs: true
    }).width;
    if (!s2.step) {
      const a2 = G$1(e2, "bars", "spacingFactor");
      return Math.min(e2.bars.maxWidth, n2 * a2 / t2);
    }
    return Math.min(e2.bars.maxWidth, s2.step() / 2);
  }
  isOutsideZoomedDomain(e2, t2) {
    if (this.model.getDisplayData().length <= 1)
      return false;
    const n2 = this.model.get("zoomDomain");
    if (n2 !== void 0) {
      const a2 = this.services.cartesianScales.getDomainScale();
      return e2 < a2(n2[0]) || t2 > a2(n2[1]);
    }
    return false;
  }
}
function vr(o2, e2) {
  const t2 = interpolate(this._current, o2);
  return (s2) => (this._current = t2(s2), e2(this._current));
}
class yr extends z {
  constructor() {
    super(...arguments), this.type = "pie", this.renderType = D$2.SVG, this.handleLegendOnHover = (e2) => {
      const { hoveredElement: t2 } = e2.detail, { groupMapsTo: s2 } = this.getOptions().data;
      this.parent.selectAll("path.slice").transition("legend-hover-bar").call(
        (n2) => this.services.transitions.setupTransition({
          transition: n2,
          name: "legend-hover-bar"
        })
      ).attr(
        "opacity",
        (n2) => n2.data[s2] !== t2.datum().name ? 0.3 : 1
      );
    }, this.handleLegendMouseOut = () => {
      this.parent.selectAll("path.slice").transition("legend-mouseout-bar").call(
        (e2) => this.services.transitions.setupTransition({
          transition: e2,
          name: "legend-mouseout-bar"
        })
      ).attr("opacity", 1);
    };
  }
  init() {
    const e2 = this.services.events;
    e2.addEventListener(oE.Legend.ITEM_HOVER, this.handleLegendOnHover), e2.addEventListener(oE.Legend.ITEM_MOUSEOUT, this.handleLegendMouseOut);
  }
  getInnerRadius() {
    return Tc.innerRadius;
  }
  render(e2 = true) {
    const t2 = this, s2 = this.getComponentContainer(), n2 = this.getOptions(), { groupMapsTo: a2 } = n2.data, { valueMapsTo: i2 } = n2.pie, r$12 = this.model.getDisplayData().filter((w2) => w2[i2] > 0), l2 = this.computeRadius();
    this.arc = arc().innerRadius(this.getInnerRadius()).outerRadius(l2), this.hoverArc = arc().innerRadius(this.getInnerRadius()).outerRadius(l2 + Tc.hoverArc.outerRadiusOffset);
    const d2 = pie().value((w2) => w2[i2]).sort(G$1(n2, "pie", "sortFunction")).padAngle(Tc.padAngle)(r$12), h2 = k.appendOrSelect(s2, "g.slices").attr("role", r.GROUP).attr("data-name", "slices").selectAll("path.slice").data(d2, (w2) => w2.data[a2]);
    h2.exit().attr("opacity", 0).remove(), h2.enter().append("path").classed("slice", true).attr("opacity", 0).merge(h2).attr(
      "class",
      (w2) => this.model.getColorClassName({
        classNameTypes: [b$1.FILL],
        dataGroupName: w2.data[a2],
        originalClassName: "slice"
      })
    ).style("fill", (w2) => t2.model.getFillColor(w2.data[a2])).attr("d", this.arc).transition().call(
      (w2) => this.services.transitions.setupTransition({
        transition: w2,
        name: "pie_slice_enter_update",
        animate: e2
      })
    ).attr("opacity", 1).attr("role", r.GRAPHICS_SYMBOL).attr("aria-roledescription", "slice").attr(
      "aria-label",
      (w2) => `${w2[i2]}, ${mf(w2.data[i2], r$12, i2) + "%"}`
    ).attrTween("d", function(w2) {
      return vr.bind(this)(w2, t2.arc);
    });
    const m2 = n2.pie.labels.enabled, b2 = m2 ? d2.filter((w2) => w2.data[i2] > 0) : [], S2 = k.appendOrSelect(s2, "g.labels").attr("role", r.GROUP).attr("data-name", "labels").selectAll("text.pie-label").data(b2, (w2) => w2.data[a2]);
    S2.exit().attr("opacity", 0).remove();
    const T2 = S2.enter().append("text").classed("pie-label", true), M2 = [];
    T2.merge(S2).style("text-anchor", "middle").text((w2) => n2.pie.labels.formatter ? n2.pie.labels.formatter({
      ...w2,
      percentageValue: mf(
        w2.data[i2],
        r$12,
        i2,
        true
      )
    }) : mf(w2.data[i2], r$12, i2) + "%").datum(function(w2) {
      const G2 = l2 + 7, D2 = (w2.endAngle - w2.startAngle) / 2 + w2.startAngle, X2 = D2 / Math.PI * 180, re2 = this.getComputedTextLength();
      return w2.textOffsetX = re2 / 2, w2.textOffsetY = X2 > 90 && X2 < 270 ? 10 : 0, w2.xPosition = (w2.textOffsetX + G2) * Math.sin(D2), w2.yPosition = (w2.textOffsetY + G2) * -Math.cos(D2), w2;
    }).attr("transform", function(w2, G2) {
      const D2 = b2.length, X2 = (w2.endAngle - w2.startAngle) * (180 / Math.PI);
      if (G2 >= D2 - 2 && X2 < Tc.callout.minSliceDegree) {
        let re2, W2;
        return w2.index === D2 - 1 ? (re2 = w2.xPosition + Tc.callout.offsetX + Tc.callout.textMargin + w2.textOffsetX, W2 = w2.yPosition - Tc.callout.offsetY, w2.direction = q$2.RIGHT, M2.push(w2)) : (re2 = w2.xPosition - Tc.callout.offsetX - w2.textOffsetX - Tc.callout.textMargin, W2 = w2.yPosition - Tc.callout.offsetY, w2.direction = q$2.LEFT, M2.push(w2)), `translate(${re2}, ${W2})`;
      }
      return `translate(${w2.xPosition}, ${w2.yPosition})`;
    }), this.renderCallouts(M2);
    const L2 = G$1(n2, "donut") ? "donut" : "pie", O2 = G$1(n2, L2, "alignment"), { width: k$12 } = k.getSVGElementSize(this.getParent(), {
      useAttrs: true
    }), I2 = m2 ? Tc.xOffset : 0, F2 = m2 ? Tc.yOffset : 0;
    let P2 = l2 + I2;
    O2 === k$2.CENTER ? P2 = k$12 / 2 : O2 === k$2.RIGHT && (P2 = k$12 - l2 - Tc.xOffset);
    let A2 = l2 + F2;
    M2.length > 0 && (A2 += Tc.yOffsetCallout), s2.attr("x", P2 + 7).attr("y", A2), this.addEventListeners();
  }
  renderCallouts(e2) {
    const t2 = k.appendOrSelect(this.getComponentContainer(), "g.callouts").attr("role", r.GROUP).attr("data-name", "callouts"), s2 = t2.selectAll("g.callout").data(e2);
    s2.exit().remove();
    const n2 = s2.enter().append("g").classed("callout", true).attr("role", r.GROUP).attr("aria-roledescription", "label callout");
    n2.merge(s2).datum(function(r2) {
      const { xPosition: l2, yPosition: c2, direction: d2 } = r2;
      return d2 === q$2.RIGHT ? (r2.startPos = {
        x: l2,
        y: c2 + r2.textOffsetY
      }, r2.endPos = {
        x: l2 + Tc.callout.offsetX,
        y: c2 - Tc.callout.offsetY + r2.textOffsetY
      }, r2.intersectPointX = r2.endPos.x - Tc.callout.horizontalLineLength) : (r2.startPos = {
        x: l2,
        y: c2 + r2.textOffsetY
      }, r2.endPos = {
        x: l2 - Tc.callout.offsetX,
        y: c2 - Tc.callout.offsetY + r2.textOffsetY
      }, r2.intersectPointX = r2.endPos.x + Tc.callout.horizontalLineLength), r2;
    }), n2.append("line").classed("vertical-line", true).merge(t2.selectAll("line.vertical-line")).datum(function() {
      return select(this.parentNode).datum();
    }).style("stroke-width", "1px").attr("x1", (r2) => r2.startPos.x).attr("y1", (r2) => r2.startPos.y).attr("x2", (r2) => r2.intersectPointX).attr("y2", (r2) => r2.endPos.y), n2.append("line").classed("horizontal-line", true).merge(t2.selectAll("line.horizontal-line")).datum(function() {
      return select(this.parentNode).datum();
    }).style("stroke-width", "1px").attr("x1", (r2) => r2.intersectPointX).attr("y1", (r2) => r2.endPos.y).attr("x2", (r2) => r2.endPos.x).attr("y2", (r2) => r2.endPos.y);
  }
  addEventListeners() {
    const e2 = this;
    this.parent.selectAll("path.slice").on("mouseover", function(t2, s2) {
      const n2 = select(this);
      n2.classed("hovered", true).transition("pie_slice_mouseover").call(
        (r2) => e2.services.transitions.setupTransition({
          transition: r2,
          name: "pie_slice_mouseover"
        })
      ).attr("d", e2.hoverArc), e2.services.events.dispatchEvent(oE.Pie.SLICE_MOUSEOVER, {
        event: t2,
        element: select(this),
        datum: s2
      });
      const { groupMapsTo: a2 } = e2.getOptions().data, { valueMapsTo: i2 } = e2.getOptions().pie;
      e2.services.events.dispatchEvent(oE.Tooltip.SHOW, {
        event: t2,
        hoveredElement: n2,
        items: [
          {
            label: s2.data[a2],
            value: s2.data[i2]
          }
        ]
      });
    }).on("mousemove", function(t2, s2) {
      const n2 = select(this);
      e2.services.events.dispatchEvent(oE.Pie.SLICE_MOUSEMOVE, {
        event: t2,
        element: n2,
        datum: s2
      }), e2.services.events.dispatchEvent(oE.Tooltip.MOVE, {
        event: t2
      });
    }).on("click", function(t2, s2) {
      e2.services.events.dispatchEvent(oE.Pie.SLICE_CLICK, {
        event: t2,
        element: select(this),
        datum: s2
      });
    }).on("mouseout", function(t2, s2) {
      const n2 = select(this);
      n2.classed("hovered", false).transition("pie_slice_mouseout").call(
        (a2) => e2.services.transitions.setupTransition({
          transition: a2,
          name: "pie_slice_mouseout"
        })
      ).attr("d", e2.arc), e2.services.events.dispatchEvent(oE.Pie.SLICE_MOUSEOUT, {
        event: t2,
        element: n2,
        datum: s2
      }), e2.services.events.dispatchEvent(oE.Tooltip.HIDE, {
        hoveredElement: n2
      });
    });
  }
  // Helper functions
  computeRadius() {
    const { width: e2, height: t2 } = k.getSVGElementSize(this.parent, {
      useAttrs: true
    }), s2 = this.getOptions(), n2 = Math.min(e2, t2) / 2;
    return s2.pie.labels.enabled ? n2 + Tc.radiusOffset : n2;
  }
}
class Vc extends yr {
  constructor() {
    super(...arguments), this.type = "donut", this.renderType = D$2.SVG;
  }
  render(e2 = true) {
    super.render(e2);
    const t2 = this;
    if (this.model.isDataEmpty()) {
      this.getComponentContainer().select("g.center").remove();
      return;
    }
    const s2 = k.appendOrSelect(this.getComponentContainer(), "g.center"), n2 = this.getOptions(), a2 = this.computeRadius(), i2 = G$1(n2, "donut", "center", "label");
    k.appendOrSelect(s2, "text.donut-figure").attr("text-anchor", "middle").style("dominant-baseline", () => i2 === null || i2 === "" ? "central" : "initial").style("font-size", () => n2.donut.center.numberFontSize(a2)).transition().call(
      (r2) => this.services.transitions.setupTransition({
        transition: r2,
        name: "donut-figure-enter-update",
        animate: e2
      })
    ).tween("text", function() {
      return t2.centerNumberTween(select(this));
    }), i2 !== null && i2 !== "" && k.appendOrSelect(s2, "text.donut-title").attr("text-anchor", "middle").style("font-size", () => n2.donut.center.titleFontSize(a2)).attr("y", n2.donut.center.titleYPosition(a2)).text(i2);
  }
  getInnerRadius() {
    return this.computeRadius() * (3 / 4);
  }
  centerNumberTween(e2) {
    const t2 = this.getOptions();
    let s2 = G$1(t2, "donut", "center", "number");
    s2 === null && (s2 = this.model.getDisplayData().reduce((r2, l2) => r2 + l2[t2.pie.valueMapsTo], 0));
    const n2 = parseInt(e2.text().replace(/[, ]+/g, ""), 10) || 0;
    let a2;
    n2 % 1 === 0 && s2 % 1 === 0 ? a2 = interpolateRound : a2 = interpolateNumber;
    const i2 = a2(n2, s2);
    return (r2) => {
      const { numberFormatter: l2 } = t2.donut.center;
      e2.text(l2(i2(r2)));
    };
  }
}
class $c extends Gt {
  constructor() {
    super(...arguments), this.type = "grouped-bar", this.renderType = D$2.SVG, this.padding = 5, this.defaultStepFactor = 70, this.handleLegendOnHover = (e2) => {
      const { hoveredElement: t2 } = e2.detail, { groupMapsTo: s2 } = this.getOptions().data;
      this.parent.selectAll("path.bar").transition("legend-hover-bar").call(
        (n2) => this.services.transitions.setupTransition({
          transition: n2,
          name: "legend-hover-bar"
        })
      ).attr("opacity", (n2) => n2[s2] !== t2.datum().name ? 0.3 : 1);
    }, this.handleLegendMouseOut = () => {
      this.parent.selectAll("path.bar").transition("legend-mouseout-bar").call(
        (e2) => this.services.transitions.setupTransition({
          transition: e2,
          name: "legend-mouseout-bar"
        })
      ).attr("opacity", 1);
    };
  }
  init() {
    const e2 = this.services.events;
    e2.addEventListener(oE.Legend.ITEM_HOVER, this.handleLegendOnHover), e2.addEventListener(oE.Legend.ITEM_MOUSEOUT, this.handleLegendMouseOut);
  }
  render(e2) {
    const t2 = this.model.getDisplayData(this.configs.groups), s2 = this.getOptions(), { groupMapsTo: n2 } = s2.data;
    this.setGroupScale();
    const a2 = this.getComponentContainer({ withinChartClip: true }), i2 = lf(
      t2.map((h2) => {
        const u2 = this.services.cartesianScales.getDomainIdentifier(h2);
        return h2[u2] && typeof h2[u2].toString == "function" ? h2[u2].toString() : h2[u2];
      })
    ), r$12 = a2.selectAll("g.bars").data(i2, (h2) => h2);
    r$12.exit().attr("opacity", 0).remove();
    const c2 = r$12.enter().append("g").classed("bars", true).attr("role", r.GROUP).attr("data-name", "bars").merge(r$12);
    c2.transition().call(
      (h2) => this.services.transitions.setupTransition({
        transition: h2,
        name: "bar-group-update-enter",
        animate: e2
      })
    ).attr("transform", (h2) => {
      const g2 = this.services.cartesianScales.getDomainValue(h2) - this.getGroupWidth() / 2;
      return this.services.cartesianScales.getOrientation() === F$2.VERTICAL ? `translate(${g2}, 0)` : `translate(0, ${g2})`;
    });
    const d2 = c2.selectAll("path.bar").data(
      (h2) => this.getDataCorrespondingToLabel(h2),
      (h2) => h2[n2]
    );
    d2.exit().attr("opacity", 0).remove(), d2.enter().append("path").attr("opacity", 0).merge(d2).classed("bar", true).transition().call(
      (h2) => this.services.transitions.setupTransition({
        transition: h2,
        name: "bar-update-enter",
        animate: e2
      })
    ).attr(
      "class",
      (h2) => this.model.getColorClassName({
        classNameTypes: [b$1.FILL],
        dataGroupName: h2[n2],
        originalClassName: "bar"
      })
    ).style("fill", (h2) => this.model.getFillColor(h2[n2])).attr("d", (h2) => {
      const u2 = this.groupScale(h2[n2]), g2 = this.getBarWidth(), m2 = u2, b2 = u2 + g2, v2 = this.services.cartesianScales.getRangeAxisPosition({ datum: h2 }), S2 = this.services.cartesianScales.getValueThroughAxisPosition(v2, 0), T2 = this.services.cartesianScales.getRangeValue(h2), M2 = this.services.cartesianScales.getDomainValue(h2) - g2 / 2, L2 = M2 + g2;
      if (!this.isOutsideZoomedDomain(M2, L2))
        return vf(
          { x0: m2, x1: b2, y0: S2, y1: T2 },
          this.services.cartesianScales.getOrientation()
        );
    }).attr("opacity", 1).attr("role", r.GRAPHICS_SYMBOL).attr("aria-roledescription", "bar").attr("aria-label", (h2) => h2.value), this.addEventListeners();
  }
  addEventListeners() {
    const e2 = this;
    this.parent.selectAll("path.bar").on("mouseover", function(t2, s2) {
      const n2 = select(this);
      n2.classed("hovered", true), e2.services.events.dispatchEvent(oE.Bar.BAR_MOUSEOVER, {
        event: t2,
        element: n2,
        datum: s2
      }), e2.services.events.dispatchEvent(oE.Tooltip.SHOW, {
        event: t2,
        hoveredElement: n2,
        data: [s2]
      });
    }).on("mousemove", function(t2, s2) {
      const n2 = select(this);
      e2.services.events.dispatchEvent(oE.Bar.BAR_MOUSEMOVE, {
        event: t2,
        element: n2,
        datum: s2
      }), e2.services.events.dispatchEvent(oE.Tooltip.MOVE, {
        event: t2
      });
    }).on("click", function(t2, s2) {
      e2.services.events.dispatchEvent(oE.Bar.BAR_CLICK, {
        event: t2,
        element: select(this),
        datum: s2
      });
    }).on("mouseout", function(t2, s2) {
      const n2 = select(this);
      n2.classed("hovered", false), e2.services.events.dispatchEvent(oE.Bar.BAR_MOUSEOUT, {
        event: t2,
        element: n2,
        datum: s2
      }), e2.services.events.dispatchEvent(oE.Tooltip.HIDE, {
        hoveredElement: n2
      });
    });
  }
  destroy() {
    this.parent.selectAll("path.bar").on("mouseover", null).on("mousemove", null).on("mouseout", null);
    const e2 = this.services.events;
    e2.removeEventListener(oE.Legend.ITEM_HOVER, this.handleLegendOnHover), e2.removeEventListener(oE.Legend.ITEM_MOUSEOUT, this.handleLegendMouseOut);
  }
  getDataCorrespondingToLabel(e2) {
    return this.model.getDisplayData(this.configs.groups).filter((s2) => {
      const n2 = this.services.cartesianScales.getDomainIdentifier(s2);
      return s2[n2].toString() === e2;
    });
  }
  getGroupWidth() {
    const e2 = this.model.getGroupedData(this.configs.groups), t2 = this.getTotalGroupPadding();
    return this.getBarWidth() * e2.length + t2;
  }
  getDomainScaleStep() {
    const e2 = this.services.cartesianScales.getDomainScale(), t2 = this.model.getGroupedData(this.configs.groups);
    let s2 = this.defaultStepFactor;
    if (typeof e2.step == "function")
      s2 = e2.step();
    else if (t2.length > 0) {
      const n2 = t2.find((a2) => {
        var i2;
        return ((i2 = a2.data) == null ? void 0 : i2.length) > 1;
      });
      if (n2) {
        const a2 = this.services.cartesianScales.getDomainIdentifier(n2.data[0]);
        s2 = Math.abs(
          e2(n2.data[1][a2]) - e2(n2.data[0][a2])
        );
      }
    }
    return s2;
  }
  getTotalGroupPadding() {
    const e2 = this.model.getGroupedData(this.configs.groups);
    return e2.length === 1 ? 0 : Math.min(5, 5 * (this.getDomainScaleStep() / this.defaultStepFactor)) * (e2.length - 1);
  }
  // Gets the correct width for bars based on options & configurations
  getBarWidth() {
    const e2 = this.getOptions(), t2 = G$1(e2, "bars", "width"), s2 = G$1(e2, "bars", "maxWidth");
    if (t2 !== null && (s2 === null || t2 <= s2))
      return t2;
    const a2 = this.model.getGroupedData(this.configs.groups).length, i2 = this.getTotalGroupPadding();
    return Math.min(
      s2,
      (this.getDomainScaleStep() - i2) / a2
    );
  }
  setGroupScale() {
    const e2 = this.model.getActiveDataGroupNames(this.configs.groups);
    this.groupScale = scaleBand().domain(e2).rangeRound([0, this.getGroupWidth()]);
  }
}
class Fc extends Gt {
  constructor() {
    super(...arguments), this.type = "simple-bar", this.renderType = D$2.SVG, this.handleLegendOnHover = (e2) => {
      const { hoveredElement: t2 } = e2.detail, { groupMapsTo: s2 } = this.getOptions().data;
      this.parent.selectAll("path.bar").transition("legend-hover-simple-bar").call(
        (n2) => this.services.transitions.setupTransition({
          transition: n2,
          name: "legend-hover-simple-bar"
        })
      ).attr("opacity", (n2) => n2[s2] !== t2.datum().name ? 0.3 : 1);
    }, this.handleLegendMouseOut = () => {
      this.parent.selectAll("path.bar").transition("legend-mouseout-simple-bar").call(
        (e2) => this.services.transitions.setupTransition({
          transition: e2,
          name: "legend-mouseout-simple-bar"
        })
      ).attr("opacity", 1);
    };
  }
  init() {
    const e2 = this.services.events;
    e2.addEventListener(oE.Legend.ITEM_HOVER, this.handleLegendOnHover), e2.addEventListener(oE.Legend.ITEM_MOUSEOUT, this.handleLegendMouseOut);
  }
  render(e2) {
    const t2 = this.getOptions(), { groupMapsTo: s2 } = t2.data, n2 = this.getComponentContainer({ withinChartClip: true }), a2 = this.model.getDisplayData(this.configs.groups), i2 = this.services.cartesianScales.getOrientation(), r$12 = n2.selectAll("path.bar").data(a2, (c2) => c2[s2]);
    r$12.exit().attr("opacity", 0).remove(), r$12.enter().append("path").attr("opacity", 0).merge(r$12).classed("bar", true).attr("width", this.getBarWidth.bind(this)).transition().call(
      (c2) => this.services.transitions.setupTransition({
        transition: c2,
        name: "bar-update-enter",
        animate: e2
      })
    ).attr(
      "class",
      (c2) => this.model.getColorClassName({
        classNameTypes: [b$1.FILL],
        dataGroupName: c2[s2],
        originalClassName: "bar"
      })
    ).style("fill", (c2) => this.model.getFillColor(c2[s2])).attr("d", (c2) => {
      const d2 = this.services.cartesianScales.getRangeIdentifier(), p2 = this.getBarWidth(), h2 = c2[d2], u2 = this.services.cartesianScales.getDomainValue(c2) - p2 / 2, g2 = u2 + p2;
      let m2, b2;
      if (Array.isArray(h2) && h2.length === 2)
        m2 = this.services.cartesianScales.getRangeValue(h2[0]), b2 = this.services.cartesianScales.getRangeValue(h2[1]);
      else {
        const T2 = this.services.cartesianScales.getRangeScale().domain()[0];
        m2 = this.services.cartesianScales.getRangeValue(Math.max(0, T2)), b2 = this.services.cartesianScales.getRangeValue(c2);
      }
      const v2 = Math.abs(b2 - m2);
      if (v2 !== 0 && v2 < 2 && (h2 > 0 && i2 === F$2.VERTICAL || h2 < 0 && i2 === F$2.HORIZONTAL ? b2 = m2 - 2 : b2 = m2 + 2), !this.isOutsideZoomedDomain(u2, g2))
        return vf({ x0: u2, x1: g2, y0: m2, y1: b2 }, i2);
    }).attr("opacity", 1).attr("role", r.GRAPHICS_SYMBOL).attr("aria-roledescription", "bar").attr("aria-label", (c2) => c2.value), this.addEventListeners();
  }
  addEventListeners() {
    const e2 = this;
    this.parent.selectAll("path.bar").on("mouseover", function(t2, s2) {
      const n2 = select(this);
      n2.classed("hovered", true), e2.services.events.dispatchEvent(oE.Bar.BAR_MOUSEOVER, {
        event: t2,
        element: n2,
        datum: s2
      }), e2.services.events.dispatchEvent(oE.Tooltip.SHOW, {
        event: t2,
        hoveredElement: n2,
        data: [s2]
      });
    }).on("mousemove", function(t2, s2) {
      e2.services.events.dispatchEvent(oE.Bar.BAR_MOUSEMOVE, {
        event: t2,
        element: select(this),
        datum: s2
      }), e2.services.events.dispatchEvent(oE.Tooltip.MOVE, {
        event: t2
      });
    }).on("click", function(t2, s2) {
      e2.services.events.dispatchEvent(oE.Bar.BAR_CLICK, {
        event: t2,
        element: select(this),
        datum: s2
      });
    }).on("mouseout", function(t2, s2) {
      const n2 = select(this);
      n2.classed("hovered", false), e2.services.events.dispatchEvent(oE.Bar.BAR_MOUSEOUT, {
        event: t2,
        element: n2,
        datum: s2
      }), e2.services.events.dispatchEvent(oE.Tooltip.HIDE, {
        hoveredElement: n2
      });
    });
  }
  destroy() {
    this.parent.selectAll("path.bar").on("mouseover", null).on("mousemove", null).on("mouseout", null);
    const e2 = this.services.events;
    e2.removeEventListener(oE.Legend.ITEM_HOVER, this.handleLegendOnHover), e2.removeEventListener(oE.Legend.ITEM_MOUSEOUT, this.handleLegendMouseOut);
  }
}
class jc extends z {
  constructor() {
    super(...arguments), this.type = "area-stacked", this.renderType = D$2.SVG, this.handleLegendOnHover = (e2) => {
      const { hoveredElement: t2 } = e2.detail, s2 = this.getOptions(), { groupMapsTo: n2 } = s2.data;
      this.parent.selectAll("path.area").transition("legend-hover-area").call(
        (a2) => this.services.transitions.setupTransition({
          transition: a2,
          name: "legend-hover-area"
        })
      ).attr("opacity", (a2) => G$1(a2, 0, n2) !== t2.datum().name ? dc$1.opacity.unselected : dc$1.opacity.selected);
    }, this.handleLegendMouseOut = () => {
      this.parent.selectAll("path.area").transition("legend-mouseout-area").call(
        (e2) => this.services.transitions.setupTransition({
          transition: e2,
          name: "legend-mouseout-area"
        })
      ).attr("opacity", dc$1.opacity.selected);
    };
  }
  init() {
    const e2 = this.services.events;
    e2.addEventListener(oE.Legend.ITEM_HOVER, this.handleLegendOnHover), e2.addEventListener(oE.Legend.ITEM_MOUSEOUT, this.handleLegendMouseOut);
  }
  render(e2 = true) {
    const t2 = this.getComponentContainer({ withinChartClip: true }), s2 = this, n2 = this.getOptions(), { groupMapsTo: a2 } = n2.data, i2 = Object.keys(n2.axes).some((g2) => n2.axes[g2].percentage), r$12 = this.model.getStackedData({
      percentage: i2,
      groups: this.configs.groups
    }), l2 = G$1(r$12, 0, 0), c2 = this.services.cartesianScales.getDomainAxisPosition({ datum: l2 }), d2 = this.services.cartesianScales.getRangeAxisPosition({ datum: l2 }), p2 = this.services.cartesianScales.getScaleByPosition(d2), h2 = t2.selectAll("path.area").data(r$12, (g2) => G$1(g2, 0, a2));
    this.areaGenerator = area().x(
      (g2) => this.services.cartesianScales.getValueThroughAxisPosition(
        c2,
        g2.data.sharedStackKey
      )
    ).y0((g2) => p2(g2[0])).y1((g2) => p2(g2[1])).curve(this.services.curves.getD3Curve()), h2.exit().attr("opacity", 0).remove(), h2.enter().append("path").attr("opacity", 0).merge(h2).data(r$12, (g2) => G$1(g2, 0, a2)).attr("class", "area").attr(
      "class",
      (g2) => this.model.getColorClassName({
        classNameTypes: [b$1.FILL],
        dataGroupName: G$1(g2, 0, a2),
        originalClassName: "area"
      })
    ).style("fill", (g2) => s2.model.getFillColor(G$1(g2, 0, a2))).attr("role", r.GRAPHICS_SYMBOL).attr("aria-roledescription", "area").attr("aria-label", (g2) => G$1(g2, 0, a2)).transition().call(
      (g2) => this.services.transitions.setupTransition({
        transition: g2,
        name: "area-update-enter",
        animate: e2
      })
    ).attr("opacity", dc$1.opacity.selected).attr("d", this.areaGenerator);
  }
}
class Zc extends Gt {
  constructor() {
    super(...arguments), this.type = "stacked-bar", this.renderType = D$2.SVG, this.handleLegendOnHover = (e2) => {
      const { hoveredElement: t2 } = e2.detail, { groupMapsTo: s2 } = this.model.getOptions().data;
      this.parent.selectAll("path.bar").transition("legend-hover-bar").call(
        (n2) => this.services.transitions.setupTransition({
          transition: n2,
          name: "legend-hover-bar"
        })
      ).attr("opacity", (n2) => n2[s2] !== t2.datum().name ? 0.3 : 1);
    }, this.handleLegendMouseOut = () => {
      this.parent.selectAll("path.bar").transition("legend-mouseout-bar").call(
        (e2) => this.services.transitions.setupTransition({
          transition: e2,
          name: "legend-mouseout-bar"
        })
      ).attr("opacity", 1);
    };
  }
  init() {
    const e2 = this.services.events;
    e2.addEventListener(oE.Legend.ITEM_HOVER, this.handleLegendOnHover), e2.addEventListener(oE.Legend.ITEM_MOUSEOUT, this.handleLegendMouseOut);
  }
  render(e2) {
    const t2 = this.getComponentContainer({ withinChartClip: true }), s2 = this.getOptions(), { groupMapsTo: n2 } = s2.data, a2 = this.model.getStackedData({
      groups: this.configs.groups,
      divergent: true
    }), i2 = this.model.getActiveDataGroupNames(), r$12 = t2.selectAll("g.bars").data(a2, (c2) => G$1(c2, 0, n2));
    r$12.exit().attr("opacity", 0).remove(), r$12.enter().append("g").classed("bars", true).attr("role", r.GROUP).attr("data-name", "bars");
    const l2 = t2.selectAll("g.bars").selectAll("path.bar").data(
      (c2) => c2,
      (c2) => c2.data.sharedStackKey
    );
    l2.exit().remove(), l2.enter().append("path").merge(l2).classed("bar", true).transition().call(
      (c2) => this.services.transitions.setupTransition({
        transition: c2,
        name: "bar-update-enter",
        animate: e2
      })
    ).attr(
      "class",
      (c2) => this.model.getColorClassName({
        classNameTypes: [b$1.FILL],
        dataGroupName: c2[n2],
        originalClassName: "bar"
      })
    ).style("fill", (c2) => this.model.getFillColor(c2[n2])).attr("d", (c2) => {
      const d2 = c2.data.sharedStackKey, p2 = this.getBarWidth(), h2 = this.services.cartesianScales.getDomainValue(d2) - p2 / 2, u2 = h2 + p2, g2 = this.services.cartesianScales.getRangeValue(c2[0]);
      let m2 = this.services.cartesianScales.getRangeValue(c2[1]);
      if (!this.isOutsideZoomedDomain(h2, u2)) {
        if (Math.abs(m2 - g2) > 0 && Math.abs(m2 - g2) > s2.bars.dividerSize) {
          const b2 = c2[0] < 0 && c2[1] <= 0;
          b2 && i2.length > 1 ? this.services.cartesianScales.getOrientation() === F$2.VERTICAL ? m2 += c2[1] === 0 ? 2 : 1 : m2 -= 1 : b2 || (this.services.cartesianScales.getOrientation() === F$2.VERTICAL ? m2 += 1 : m2 -= 1);
        }
        return vf(
          { x0: h2, x1: u2, y0: g2, y1: m2 },
          this.services.cartesianScales.getOrientation()
        );
      }
    }).attr("opacity", 1).attr("role", r.GRAPHICS_SYMBOL).attr("aria-roledescription", "bar").attr("aria-label", (c2) => c2[1] - c2[0]), this.addEventListeners();
  }
  addEventListeners() {
    const e2 = this.getOptions(), { groupMapsTo: t2 } = e2.data, s2 = this;
    this.parent.selectAll("path.bar").on("mouseover", function(n2, a2) {
      const i2 = select(this);
      i2.classed("hovered", true), s2.services.events.dispatchEvent(oE.Bar.BAR_MOUSEOVER, {
        event: n2,
        element: i2,
        datum: a2
      });
      let l2 = s2.model.getDisplayData(s2.configs.groups).find((c2) => {
        const d2 = s2.services.cartesianScales.getDomainIdentifier(c2), p2 = s2.services.cartesianScales.getRangeIdentifier(c2);
        return c2[p2] === a2.data[a2[t2]] && c2[d2].toString() === a2.data.sharedStackKey && c2[t2] === a2[t2];
      });
      if (l2 === void 0) {
        const c2 = s2.services.cartesianScales.getDomainIdentifier(), d2 = s2.services.cartesianScales.getRangeIdentifier();
        l2 = {
          [c2]: a2.data.sharedStackKey,
          [d2]: a2.data[a2[t2]],
          [t2]: a2[t2]
        };
      }
      s2.services.events.dispatchEvent(oE.Tooltip.SHOW, {
        event: n2,
        hoveredElement: i2,
        data: [l2]
      });
    }).on("mousemove", function(n2, a2) {
      const i2 = select(this);
      s2.services.events.dispatchEvent(oE.Bar.BAR_MOUSEMOVE, {
        event: n2,
        element: i2,
        datum: a2
      }), s2.services.events.dispatchEvent(oE.Tooltip.MOVE, {
        event: n2
      });
    }).on("click", function(n2, a2) {
      s2.services.events.dispatchEvent(oE.Bar.BAR_CLICK, {
        event: n2,
        element: select(this),
        datum: a2
      });
    }).on("mouseout", function(n2, a2) {
      const i2 = select(this);
      i2.classed("hovered", false), s2.services.events.dispatchEvent(oE.Bar.BAR_MOUSEOUT, {
        event: n2,
        element: i2,
        datum: a2
      }), s2.services.events.dispatchEvent(oE.Tooltip.HIDE, {
        hoveredElement: i2
      });
    });
  }
  getBarWidth() {
    const e2 = this.getOptions();
    if (G$1(e2, "bars", "width"))
      return e2.bars.width;
    const t2 = this.services.cartesianScales.getMainXScale(), s2 = k.getSVGElementSize(this.parent, {
      useAttrs: true
    }).width, n2 = this.model.getStackKeys().length, a2 = G$1(e2, "bars", "spacingFactor");
    return t2.step ? Math.min(e2.bars.maxWidth, t2.step() / 2) : Math.min(e2.bars.maxWidth, s2 * a2 / n2);
  }
  destroy() {
    this.parent.selectAll("path.bar").on("mouseover", null).on("mousemove", null).on("mouseout", null);
    const e2 = this.services.events;
    e2.removeEventListener(oE.Legend.ITEM_HOVER, this.handleLegendOnHover), e2.removeEventListener(oE.Legend.ITEM_MOUSEOUT, this.handleLegendMouseOut);
  }
}
class Xc extends Bt {
  constructor() {
    super(...arguments), this.type = "scatter-stacked", this.renderType = D$2.SVG;
  }
  render(e2) {
    if (!G$1(this.getOptions(), "points", "enabled"))
      return;
    const s2 = this.getComponentContainer({ withinChartClip: true }), n2 = this.getOptions(), { groupMapsTo: a2 } = n2.data, i2 = Object.keys(n2.axes).some((u2) => n2.axes[u2].percentage), r$12 = this.model.getStackedData({
      groups: this.configs.groups,
      percentage: i2
    }), l2 = s2.selectAll("g.dots").data(r$12, (u2) => G$1(u2, 0, a2));
    l2.exit().attr("opacity", 0).remove();
    const d2 = l2.enter().append("g").classed("dots", true).attr("role", r.GROUP).merge(l2).selectAll("circle.dot").data((u2) => u2);
    d2.exit().attr("opacity", 0).remove();
    const h2 = d2.enter().append("circle").classed("dot", true).attr("opacity", 0).merge(d2).datum((u2) => {
      const g2 = u2[a2], m2 = this.services.cartesianScales.getDomainIdentifier(u2), b2 = this.services.cartesianScales.getRangeIdentifier(u2);
      return {
        [a2]: g2,
        [m2]: u2.data.sharedStackKey,
        [b2]: u2[1]
      };
    });
    this.styleCircles(h2, e2), this.addEventListeners();
  }
  getTooltipData(e2, t2) {
    const s2 = this.getOptions(), { groupMapsTo: n2 } = s2.data, a2 = Object.keys(s2.axes).some((l2) => s2.axes[l2].percentage), i2 = this.model.getStackedData({
      groups: this.configs.groups,
      percentage: a2
    }), r2 = [];
    return i2.forEach((l2, c2) => {
      l2.forEach((d2, p2) => {
        const h2 = d2[n2], u2 = d2.data.sharedStackKey;
        let g2 = d2.data[h2];
        const m2 = d2[1], b2 = this.services.cartesianScales.getDomainIdentifier(d2), v2 = this.services.cartesianScales.getRangeIdentifier(d2);
        g2 != null && e2 === this.services.cartesianScales.getDomainValue(u2) && t2 === this.services.cartesianScales.getRangeValue(m2) && (a2 && (g2 = this.model.getStackedData({
          groups: this.configs.groups
        })[c2][p2].data[h2]), g2 !== null && r2.push({
          [n2]: h2,
          [b2]: u2,
          [v2]: g2
        }));
      });
    }), this.model.getDisplayData(this.configs.groups).filter((l2) => {
      const c2 = this.services.cartesianScales.getDomainIdentifier(l2), d2 = this.services.cartesianScales.getRangeIdentifier(l2);
      return r2.find((p2) => p2[n2] == l2[n2] && p2[c2] == l2[c2] && p2[d2] == l2[d2]) !== void 0;
    });
  }
}
function J(i2, e2) {
  O(2, arguments);
  var t2 = E$2(i2), n2 = B$1(e2);
  return isNaN(n2) ? /* @__PURE__ */ new Date(NaN) : (n2 && t2.setDate(t2.getDate() + n2), t2);
}
function C(i2, e2) {
  O(2, arguments);
  var t2 = E$2(i2), n2 = B$1(e2);
  if (isNaN(n2))
    return /* @__PURE__ */ new Date(NaN);
  if (!n2)
    return t2;
  var s2 = t2.getDate(), o2 = new Date(t2.getTime());
  o2.setMonth(t2.getMonth() + n2 + 1, 0);
  var a2 = o2.getDate();
  return s2 >= a2 ? o2 : (t2.setFullYear(o2.getFullYear(), o2.getMonth(), s2), t2);
}
var Ie = 36e5;
function Q(i2, e2) {
  O(2, arguments);
  var t2 = B$1(e2);
  return hn(i2, t2 * Ie);
}
function G(i2) {
  O(1, arguments);
  var e2 = E$2(i2);
  return e2.setHours(0, 0, 0, 0), e2;
}
var be = 864e5;
function Ce(i2, e2) {
  O(2, arguments);
  var t2 = G(i2), n2 = G(e2), s2 = t2.getTime() - mn(t2), o2 = n2.getTime() - mn(n2);
  return Math.round((s2 - o2) / be);
}
var we = 6e4;
function E(i2, e2) {
  O(2, arguments);
  var t2 = B$1(e2);
  return hn(i2, t2 * we);
}
function I(i2, e2) {
  O(2, arguments);
  var t2 = B$1(e2);
  return hn(i2, t2 * 1e3);
}
function ee(i2, e2) {
  O(2, arguments);
  var t2 = B$1(e2);
  return C(i2, t2 * 12);
}
function M(i2, e2) {
  O(2, arguments);
  var t2 = E$2(i2), n2 = E$2(e2), s2 = t2.getTime() - n2.getTime();
  return s2 < 0 ? -1 : s2 > 0 ? 1 : s2;
}
var Ze = 6e4, Ne = 36e5;
function Fe(i2, e2) {
  O(2, arguments);
  var t2 = E$2(i2), n2 = E$2(e2), s2 = t2.getFullYear() - n2.getFullYear(), o2 = t2.getMonth() - n2.getMonth();
  return s2 * 12 + o2;
}
function Ve(i2, e2) {
  O(2, arguments);
  var t2 = E$2(i2), n2 = E$2(e2);
  return t2.getFullYear() - n2.getFullYear();
}
function _(i2, e2) {
  var t2 = i2.getFullYear() - e2.getFullYear() || i2.getMonth() - e2.getMonth() || i2.getDate() - e2.getDate() || i2.getHours() - e2.getHours() || i2.getMinutes() - e2.getMinutes() || i2.getSeconds() - e2.getSeconds() || i2.getMilliseconds() - e2.getMilliseconds();
  return t2 < 0 ? -1 : t2 > 0 ? 1 : t2;
}
function He(i2, e2) {
  O(2, arguments);
  var t2 = E$2(i2), n2 = E$2(e2), s2 = _(t2, n2), o2 = Math.abs(Ce(t2, n2));
  t2.setDate(t2.getDate() - s2 * o2);
  var a2 = +(_(t2, n2) === -s2), r2 = s2 * (o2 - a2);
  return r2 === 0 ? 0 : r2;
}
function w(i2, e2) {
  return O(2, arguments), E$2(i2).getTime() - E$2(e2).getTime();
}
var U = {
  ceil: Math.ceil,
  round: Math.round,
  floor: Math.floor,
  trunc: function(e2) {
    return e2 < 0 ? Math.ceil(e2) : Math.floor(e2);
  }
  // Math.trunc is not supported by IE
}, ze = "trunc";
function Z(i2) {
  return i2 ? U[i2] : U[ze];
}
function Ye(i2, e2, t2) {
  O(2, arguments);
  var n2 = w(i2, e2) / Ne;
  return Z(t2 == null ? void 0 : t2.roundingMethod)(n2);
}
function $(i2, e2, t2) {
  O(2, arguments);
  var n2 = w(i2, e2) / Ze;
  return Z(t2 == null ? void 0 : t2.roundingMethod)(n2);
}
function Xe(i2) {
  O(1, arguments);
  var e2 = E$2(i2);
  return e2.setHours(23, 59, 59, 999), e2;
}
function ke(i2) {
  O(1, arguments);
  var e2 = E$2(i2), t2 = e2.getMonth();
  return e2.setFullYear(e2.getFullYear(), t2 + 1, 0), e2.setHours(23, 59, 59, 999), e2;
}
function Ge(i2) {
  O(1, arguments);
  var e2 = E$2(i2);
  return Xe(e2).getTime() === ke(e2).getTime();
}
function _e(i2, e2) {
  O(2, arguments);
  var t2 = E$2(i2), n2 = E$2(e2), s2 = M(t2, n2), o2 = Math.abs(Fe(t2, n2)), a2;
  if (o2 < 1)
    a2 = 0;
  else {
    t2.getMonth() === 1 && t2.getDate() > 27 && t2.setDate(30), t2.setMonth(t2.getMonth() - s2 * o2);
    var r2 = M(t2, n2) === -s2;
    Ge(E$2(i2)) && o2 === 1 && M(i2, n2) === 1 && (r2 = false), a2 = s2 * (o2 - Number(r2));
  }
  return a2 === 0 ? 0 : a2;
}
function j(i2, e2, t2) {
  O(2, arguments);
  var n2 = w(i2, e2) / 1e3;
  return Z(t2 == null ? void 0 : t2.roundingMethod)(n2);
}
function Ue(i2, e2) {
  O(2, arguments);
  var t2 = E$2(i2), n2 = E$2(e2), s2 = M(t2, n2), o2 = Math.abs(Ve(t2, n2));
  t2.setFullYear(1584), n2.setFullYear(1584);
  var a2 = M(t2, n2) === -s2, r2 = s2 * (o2 - Number(a2));
  return r2 === 0 ? 0 : r2;
}
function $e(i2, e2) {
  O(2, arguments);
  var t2 = B$1(e2);
  return J(i2, -t2);
}
function je2(i2, e2) {
  O(2, arguments);
  var t2 = B$1(e2);
  return C(i2, -t2);
}
function Ke(i2, e2) {
  O(2, arguments);
  var t2 = B$1(e2);
  return Q(i2, -t2);
}
function K(i2, e2) {
  O(2, arguments);
  var t2 = B$1(e2);
  return E(i2, -t2);
}
function W(i2, e2) {
  O(2, arguments);
  var t2 = B$1(e2);
  return I(i2, -t2);
}
function We(i2, e2) {
  O(2, arguments);
  var t2 = B$1(e2);
  return ee(i2, -t2);
}
function qe(i2) {
  var e2 = i2 == null ? 0 : i2.length;
  return e2 ? yr$1(i2, 1) : [];
}
class it extends oe {
  /**
   * focal:  object to zoom into
   * canvasElements: all the elements to translate and zoom on the chart area
   * zoomSettings: object containing duration, easing and zoomlevel for the zoom behaviours
   *  */
  zoomIn(e2, t2, n2) {
    let s2, o2, a2;
    const r2 = n2 || gc$1;
    e2 && (s2 = e2.x, o2 = e2.y, a2 = 2);
    const { width: c2, height: h2 } = k.getSVGElementSize(this.services.domUtils.getHolder(), {
      useClientDimensions: true
    });
    t2.transition().duration(r2.duration).ease(r2.ease).attr(
      "transform",
      `translate(${c2 / 2}, ${h2 / 2}) scale(${a2}) translate(${-s2},${-o2})`
    ), this.services.events.dispatchEvent(oE.CanvasZoom.CANVAS_ZOOM_IN, {
      element: select(e2)
    });
  }
  zoomOut(e2, t2) {
    const n2 = t2 || gc$1;
    e2.transition().duration(n2.duration).ease(n2.ease).attr("transform", ""), this.services.events.dispatchEvent(oE.CanvasZoom.CANVAS_ZOOM_OUT);
  }
}
class ot extends oe {
  init() {
    this.documentFragment = document.createDocumentFragment();
  }
  addEventListener(e2, t2) {
    this.documentFragment.addEventListener(e2, t2);
  }
  removeEventListener(e2, t2) {
    this.documentFragment.removeEventListener(e2, t2);
  }
  dispatchEvent(e2, t2) {
    let n2;
    t2 ? n2 = new CustomEvent(e2, {
      detail: t2
    }) : (n2 = document.createEvent("Event"), n2.initEvent(e2, false, true)), this.documentFragment.dispatchEvent(n2);
  }
}
class at extends oe {
  constructor(e2, t2) {
    super(e2, t2);
  }
  downloadCSV(e2, t2) {
    const n2 = document.createElement("a"), s2 = "text/csv;encoding:utf-8";
    if (navigator.msSaveBlob)
      navigator.msSaveBlob(
        new Blob([e2], {
          type: s2
        }),
        t2
      );
    else if (URL && "download" in n2) {
      const o2 = URL.createObjectURL(
        new Blob([e2], {
          type: s2
        })
      );
      n2.href = o2, n2.setAttribute("download", t2), document.body.appendChild(n2), n2.click(), document.body.removeChild(n2), URL.revokeObjectURL(o2);
    } else
      location.href = `data:application/octet-stream,${encodeURIComponent(e2)}`;
  }
  downloadImage(e2, t2) {
    const n2 = document.createElement("a");
    n2.download = t2, n2.href = e2, document.body.appendChild(n2), n2.click(), document.body.removeChild(n2);
  }
}
class rt extends oe {
  constructor() {
    super(...arguments), this.pendingTransitions = {};
  }
  init() {
    var e2;
    (e2 = this.services.events) == null || e2.addEventListener(oE.Model.UPDATE, () => {
      this.pendingTransitions = {};
    });
  }
  setupTransition({ transition: e2, name: t2, animate: n2 }) {
    return this.pendingTransitions[e2._id] = e2, e2.on("end interrupt cancel", () => {
      delete this.pendingTransitions[e2._id];
    }), this.model.getOptions().animations === false || n2 === false ? e2.duration(0) : e2.duration(G$1(Cc, t2, "duration") || Cc.default.duration);
  }
  getPendingTransitions() {
    return this.pendingTransitions;
  }
}
class lt extends oe {
  constructor() {
    super(...arguments), this.scaleTypes = {
      top: null,
      right: null,
      bottom: null,
      left: null
    }, this.scales = {
      // null or function
      top: null,
      right: null,
      bottom: null,
      left: null
    };
  }
  getDomainAxisPosition({ datum: e2 = null } = {}) {
    if (this.dualAxes && e2) {
      const t2 = this.model.getOptions(), { groupMapsTo: n2 } = t2.data, s2 = G$1(t2, "axes", this.secondaryDomainAxisPosition), o2 = e2[n2];
      if (s2 != null && s2.correspondingDatasets && s2.correspondingDatasets.includes(o2))
        return this.secondaryDomainAxisPosition;
    }
    return this.domainAxisPosition;
  }
  getRangeAxisPosition({ datum: e2 = null, groups: t2 = null } = {}) {
    if (this.dualAxes) {
      const n2 = this.model.getOptions(), { groupMapsTo: s2 } = n2.data, o2 = G$1(n2, "axes", this.secondaryRangeAxisPosition);
      let a2;
      if (e2 !== null ? a2 = e2[s2] : t2 && t2.length > 0 && (a2 = t2[0]), o2 != null && o2.correspondingDatasets && o2.correspondingDatasets.includes(a2))
        return this.secondaryRangeAxisPosition;
    }
    return this.rangeAxisPosition;
  }
  getAxisOptions(e2) {
    return G$1(this.model.getOptions(), "axes", e2);
  }
  getDomainAxisOptions() {
    const e2 = this.getDomainAxisPosition();
    return this.getAxisOptions(e2);
  }
  getRangeAxisOptions() {
    const e2 = this.getRangeAxisPosition();
    return this.getAxisOptions(e2);
  }
  getScaleLabel(e2) {
    const n2 = this.getAxisOptions(e2).title;
    return n2 || (e2 === f.BOTTOM || e2 === f.TOP ? "x-value" : "y-value");
  }
  getDomainLabel() {
    return this.getScaleLabel(this.getDomainAxisPosition());
  }
  getRangeLabel() {
    return this.getScaleLabel(this.getRangeAxisPosition());
  }
  update() {
    this.determineAxisDuality(), this.findDomainAndRangeAxes(), this.determineOrientation(), Object.keys(f).map(
      (t2) => f[t2]
    ).forEach((t2) => {
      this.scales[t2] = this.createScale(t2);
    });
  }
  findDomainAndRangeAxes() {
    const e2 = this.findVerticalAxesPositions(), t2 = this.findHorizontalAxesPositions(), n2 = this.findDomainAndRangeAxesPositions(
      e2,
      t2
    );
    this.domainAxisPosition = n2.primaryDomainAxisPosition, this.rangeAxisPosition = n2.primaryRangeAxisPosition, this.isDualAxes() && (this.secondaryDomainAxisPosition = n2.secondaryDomainAxisPosition, this.secondaryRangeAxisPosition = n2.secondaryRangeAxisPosition);
  }
  determineOrientation() {
    (this.rangeAxisPosition === f.LEFT || this.rangeAxisPosition === f.RIGHT) && (this.domainAxisPosition === f.BOTTOM || this.domainAxisPosition === f.TOP) ? this.orientation = F$2.VERTICAL : this.orientation = F$2.HORIZONTAL;
  }
  isDualAxes() {
    return this.dualAxes;
  }
  // if any of the axes objects have correspondingDatasets [] asserted we flag the chart as dual axes
  // it does not count as dual axes if it just has another axis turned on but is not actually using it to map a dataset
  determineAxisDuality() {
    var n2, s2, o2, a2;
    const e2 = this.model.getOptions(), t2 = G$1(e2, "axes");
    ((n2 = t2[f.LEFT]) != null && n2.correspondingDatasets && t2[f.RIGHT] || (s2 = t2[f.RIGHT]) != null && s2.correspondingDatasets && t2[f.LEFT] || (o2 = t2[f.TOP]) != null && o2.correspondingDatasets && t2[f.BOTTOM] || (a2 = t2[f.BOTTOM]) != null && a2.correspondingDatasets && t2[f.TOP]) && (this.dualAxes = true);
  }
  getCustomDomainValuesByposition(e2) {
    const t2 = G$1(this.model.getOptions(), "axes", e2, "domain");
    if (t2 && !Array.isArray(t2))
      throw new Error(`Domain in ${e2} axis is not a valid array`);
    if (Array.isArray(t2) && (this.scaleTypes[e2] === w$1.LINEAR || this.scaleTypes[e2] === w$1.TIME) && t2.length !== 2)
      throw new Error(
        `There can only be 2 elements in domain for scale type: ${this.scaleTypes[e2]}`
      );
    return t2;
  }
  getOrientation() {
    return this.orientation;
  }
  getScaleByPosition(e2) {
    return this.scales[e2];
  }
  getScaleTypeByPosition(e2) {
    return this.scaleTypes[e2];
  }
  getDomainAxisScaleType() {
    const e2 = this.getDomainAxisPosition();
    return this.getScaleTypeByPosition(e2);
  }
  getRangeAxisScaleType() {
    const e2 = this.getRangeAxisPosition();
    return this.getScaleTypeByPosition(e2);
  }
  getDomainScale() {
    return this.scales[this.domainAxisPosition];
  }
  getRangeScale() {
    return this.scales[this.rangeAxisPosition];
  }
  // Find the main x-axis out of the 2 x-axis on the chart (when 2D axis is used)
  getMainXAxisPosition() {
    const e2 = [f.BOTTOM, f.TOP];
    return [this.domainAxisPosition, this.rangeAxisPosition].find(
      (t2) => e2.indexOf(t2) > -1
    );
  }
  // Find the main y-axis out of the 2 y-axis on the chart (when 2D axis is used)
  getMainYAxisPosition() {
    const e2 = [f.LEFT, f.RIGHT];
    return [this.domainAxisPosition, this.rangeAxisPosition].find(
      (t2) => e2.indexOf(t2) > -1
    );
  }
  getMainXScale() {
    return this.scales[this.getMainXAxisPosition()];
  }
  getMainYScale() {
    return this.scales[this.getMainYAxisPosition()];
  }
  getValueFromScale(e2, t2, n2, s2) {
    const o2 = this.model.getOptions(), r2 = G$1(o2, "axes")[n2], { mapsTo: c2 } = r2, h2 = G$1(s2, c2) !== null ? s2[c2] : s2;
    let v2;
    switch (t2) {
      case w$1.LABELS:
        v2 = e2(h2) + e2.step() / 2;
        break;
      case w$1.TIME:
        v2 = e2(new Date(h2));
        break;
      default:
        v2 = e2(h2);
    }
    return v2;
  }
  getBoundedScaledValues(e2) {
    const { bounds: t2 } = this.model.getOptions(), n2 = this.getRangeAxisPosition({ datum: e2 }), s2 = this.scales[n2], o2 = this.model.getOptions(), r2 = G$1(o2, "axes")[n2], { mapsTo: c2 } = r2, h2 = e2[c2] !== void 0 ? e2[c2] : e2;
    return [
      s2(
        G$1(e2, t2.upperBoundMapsTo) !== null ? e2[t2.upperBoundMapsTo] : h2
      ),
      s2(
        G$1(e2, t2.lowerBoundMapsTo) !== null ? e2[t2.lowerBoundMapsTo] : h2
      )
    ];
  }
  getValueThroughAxisPosition(e2, t2) {
    const n2 = this.scaleTypes[e2], s2 = this.scales[e2];
    return this.getValueFromScale(s2, n2, e2, t2);
  }
  getDomainValue(e2) {
    const t2 = this.getDomainAxisPosition({ datum: e2 });
    return this.getValueThroughAxisPosition(t2, e2);
  }
  getRangeValue(e2) {
    const t2 = this.getRangeAxisPosition({ datum: e2 });
    return this.getValueThroughAxisPosition(t2, e2);
  }
  getMainXScaleType() {
    return this.getScaleTypeByPosition(this.getMainXAxisPosition());
  }
  getMainYScaleType() {
    return this.getScaleTypeByPosition(this.getMainYAxisPosition());
  }
  getDomainIdentifier(e2) {
    const t2 = this.model.getOptions();
    return G$1(t2, "axes", this.getDomainAxisPosition({ datum: e2 }), "mapsTo");
  }
  getRangeIdentifier(e2) {
    const t2 = this.model.getOptions();
    return G$1(t2, "axes", this.getRangeAxisPosition({ datum: e2 }), "mapsTo");
  }
  extendsDomain(e2, t2) {
    const n2 = this.model.getOptions(), s2 = G$1(n2, "axes", e2);
    if (s2.scaleType === w$1.TIME) {
      const o2 = G$1(n2, "timeScale", "addSpaceOnEdges");
      return Je(t2, o2);
    } else
      return Qe(t2, hc$1.paddingRatio, s2.scaleType);
  }
  findVerticalAxesPositions() {
    const e2 = this.model.getOptions(), t2 = G$1(e2, "axes"), n2 = this.isDualAxes();
    return G$1(t2, f.LEFT) === null && G$1(t2, f.RIGHT) !== null || G$1(t2, f.RIGHT, "main") === true || n2 && G$1(t2, f.LEFT, "correspondingDatasets") ? {
      primary: f.RIGHT,
      secondary: f.LEFT
    } : { primary: f.LEFT, secondary: f.RIGHT };
  }
  findHorizontalAxesPositions() {
    const e2 = this.model.getOptions(), t2 = G$1(e2, "axes"), n2 = this.isDualAxes();
    return G$1(t2, f.BOTTOM) === null && G$1(t2, f.TOP) !== null || G$1(t2, f.TOP, "main") === true || n2 && G$1(t2, f.BOTTOM, "correspondingDatasets") ? {
      primary: f.TOP,
      secondary: f.BOTTOM
    } : { primary: f.BOTTOM, secondary: f.TOP };
  }
  findDomainAndRangeAxesPositions(e2, t2) {
    const n2 = this.model.getOptions(), s2 = G$1(n2, "axes", e2.primary), o2 = G$1(n2, "axes", t2.primary), a2 = s2.scaleType || w$1.LINEAR, r2 = o2.scaleType || w$1.LINEAR, c2 = {
      primaryDomainAxisPosition: null,
      secondaryDomainAxisPosition: null,
      primaryRangeAxisPosition: null,
      secondaryRangeAxisPosition: null
    };
    return c2.primaryDomainAxisPosition = t2.primary, c2.primaryRangeAxisPosition = e2.primary, c2.secondaryDomainAxisPosition = t2.secondary, c2.secondaryRangeAxisPosition = e2.secondary, (!(r2 === w$1.LABELS || r2 === w$1.TIME) && a2 === w$1.LABELS || a2 === w$1.TIME) && (c2.primaryDomainAxisPosition = e2.primary, c2.primaryRangeAxisPosition = t2.primary, c2.secondaryDomainAxisPosition = e2.secondary, c2.secondaryRangeAxisPosition = t2.secondary), c2;
  }
  getScaleDomain(e2) {
    const t2 = this.model.getOptions(), n2 = G$1(t2, "axes", e2), s2 = G$1(t2, "bounds"), { includeZero: o2 } = n2, a2 = G$1(n2, "scaleType") || w$1.LINEAR;
    if (this.model.isDataEmpty())
      return [];
    if (n2.binned) {
      const { bins: m2 } = this.model.getBinConfigurations();
      return [0, max(m2, (p2) => p2.length)];
    } else if (n2.limitDomainToBins) {
      const { bins: m2 } = this.model.getBinConfigurations(), p2 = this.model.getStackKeys({ bins: m2 });
      return [p2[0].split("-")[0], p2[p2.length - 1].split("-")[1]];
    }
    const r2 = this.model.getDisplayData(), { extendLinearDomainBy: c2, mapsTo: h2, percentage: v2, thresholds: y2 } = n2, { reference: A2, compareTo: S2 } = hc$1.ratio;
    if (n2.domain)
      return a2 === w$1.LABELS ? n2.domain : (a2 === w$1.TIME && (n2.domain = n2.domain.map(
        (m2) => m2.getTime === void 0 ? new Date(m2) : m2
      )), this.extendsDomain(e2, n2.domain));
    if (v2)
      return [0, 100];
    if (n2 && a2 === w$1.LABELS)
      return lf(r2.map((m2) => m2[h2]));
    let P2, x;
    const L2 = this.model.getDataGroupNames();
    if (a2 === w$1.LABELS_RATIO)
      return r2.map((m2) => `${m2[A2]}/${m2[S2]}`);
    if (a2 === w$1.TIME)
      x = r2.map((m2) => +new Date(m2[h2]));
    else if (s2 && t2.axes)
      x = [], r2.forEach((m2) => {
        x.push(m2[h2]), m2[s2.upperBoundMapsTo] && x.push(m2[s2.upperBoundMapsTo]), m2[s2.lowerBoundMapsTo] && x.push(m2[s2.lowerBoundMapsTo]);
      });
    else if (n2.stacked === true && L2 && e2 === this.getRangeAxisPosition()) {
      const { groupMapsTo: m2 } = t2.data, p2 = this.model.getDataValuesGroupedByKeys({
        groups: L2
      }), te2 = r2.filter(
        (T2) => !L2.includes(T2[m2])
      ), N2 = [];
      p2.forEach((T2) => {
        const { ...ne2 } = T2;
        let F2 = 0, V2 = 0;
        Object.values(ne2).forEach((R2) => {
          isNaN(R2) || (R2 < 0 ? V2 += R2 : F2 += R2);
        }), N2.push([V2, F2]);
      }), x = [
        ...qe(N2),
        ...te2.map((T2) => T2[h2])
      ];
    } else
      x = [], r2.forEach((m2) => {
        const p2 = m2[h2];
        Array.isArray(p2) && p2.length === 2 ? (x.push(p2[0]), x.push(p2[1])) : (c2 && x.push(Math.max(m2[h2], m2[c2])), x.push(p2));
      });
    return a2 !== w$1.TIME && a2 !== w$1.LOG && o2 && x.push(0), y2 && y2.length > 0 && y2.forEach((m2) => {
      const p2 = G$1(m2, "value");
      p2 !== null && x.push(p2);
    }), P2 = extent(x), P2 = this.extendsDomain(e2, P2), P2;
  }
  createScale(e2) {
    const t2 = this.model.getOptions(), n2 = G$1(t2, "axes", e2);
    if (!n2)
      return null;
    const s2 = G$1(n2, "scaleType") || w$1.LINEAR;
    this.scaleTypes[e2] = s2;
    let o2;
    return s2 === w$1.TIME ? o2 = scaleTime() : s2 === w$1.LOG ? o2 = scaleLog().base(n2.base || 10) : s2 === w$1.LABELS || s2 === w$1.LABELS_RATIO ? o2 = scaleBand() : o2 = scaleLinear(), o2.domain(this.getScaleDomain(e2)), o2;
  }
  getHighestDomainThreshold() {
    const e2 = G$1(this.model.getOptions(), "axes"), t2 = this.getDomainAxisPosition(), { thresholds: n2 } = e2[t2];
    if (!Array.isArray(n2) || Array.isArray(n2) && !n2.length)
      return null;
    const s2 = this.getDomainScale(), o2 = n2.sort((r2, c2) => c2.value - r2.value)[0];
    return this.getScaleTypeByPosition(t2) === w$1.TIME && (typeof o2.value == "string" || o2.value.getTime === void 0) && (o2.value = new Date(o2.value)), {
      threshold: o2,
      scaleValue: s2(o2.value)
    };
  }
  getHighestRangeThreshold() {
    const e2 = G$1(this.model.getOptions(), "axes"), t2 = this.getRangeAxisPosition(), { thresholds: n2 } = e2[t2];
    if (!Array.isArray(n2) || Array.isArray(n2) && !n2.length)
      return null;
    const s2 = this.getRangeScale(), o2 = n2.sort((a2, r2) => r2.value - a2.value)[0];
    return {
      threshold: o2,
      scaleValue: s2(o2.value)
    };
  }
}
function Je(i2, e2) {
  const t2 = new Date(i2[0]), n2 = new Date(i2[1]);
  return Ue(n2, t2) > 1 ? [We(t2, e2), ee(n2, e2)] : _e(n2, t2) > 1 ? [je2(t2, e2), C(n2, e2)] : He(n2, t2) > 1 ? [$e(t2, e2), J(n2, e2)] : Ye(n2, t2) > 1 ? [Ke(t2, e2), Q(n2, e2)] : $(n2, t2) > 30 ? [
    K(t2, e2 * 30),
    E(n2, e2 * 30)
  ] : $(n2, t2) > 1 ? [K(t2, e2), E(n2, e2)] : j(n2, t2) > 15 ? [
    W(t2, e2 * 15),
    I(n2, e2 * 15)
  ] : j(n2, t2) > 1 ? [W(t2, e2), I(n2, e2)] : [t2, n2];
}
function Qe([i2, e2], t2, n2) {
  const o2 = (e2 - i2) * t2, a2 = e2 <= 0 && e2 + o2 > 0 ? 0 : e2 + o2;
  let r2 = i2 >= 0 && i2 - o2 < 0 ? 0 : i2 - o2;
  if (n2 === w$1.LOG && r2 <= 0) {
    if (i2 <= 0)
      throw Error("Data must have values greater than 0 if log scale type is used.");
    r2 = i2;
  }
  return [r2, a2];
}
class ut extends oe {
  constructor() {
    super(...arguments), this.curveTypes = {
      curveLinear,
      curveLinearClosed,
      curveBasis,
      curveBasisClosed,
      curveBasisOpen,
      curveBundle,
      curveCardinal,
      curveCardinalClosed,
      curveCardinalOpen,
      curveCatmullRom,
      curveCatmullRomClosed,
      curveCatmullRomOpen,
      curveMonotoneX,
      curveMonotoneY,
      curveNatural,
      curveStep,
      curveStepAfter,
      curveStepBefore
    };
  }
  getD3Curve() {
    let e2 = "curveLinear";
    const t2 = this.model.getOptions().curve;
    if (t2 && (typeof t2 == "string" ? e2 = t2 : e2 = t2.name), this.curveTypes[e2]) {
      let n2 = this.curveTypes[e2];
      return t2 && Object.keys(t2).forEach((s2) => {
        n2[s2] && (n2 = n2[s2](t2[s2]));
      }), n2;
    }
    return console.warn(`The curve type '${e2}' is invalid, using 'curveLinear' instead`), this.curveTypes.curveLinear;
  }
}
class ct extends oe {
  isZoomBarEnabled() {
    if (!this.services.cartesianScales || !G$1(this.model.getOptions(), "zoomBar", "top", "enabled"))
      return false;
    this.services.cartesianScales.findDomainAndRangeAxes();
    const e2 = this.services.cartesianScales.getMainXAxisPosition(), t2 = G$1(
      this.model.getOptions(),
      "axes",
      e2,
      "scaleType"
    );
    return e2 === f.BOTTOM && t2 === w$1.TIME;
  }
  // get display data for zoom bar
  // basically it's sum of value grouped by time
  getZoomBarData() {
    const e2 = this.model.getZoomBarData();
    return e2 && e2.length > 1 ? e2 : this.model.getDisplayData();
  }
  getDefaultZoomBarDomain(e2) {
    if (!this.services.zoom)
      throw new Error("Services zoom not defined");
    const t2 = e2 || this.services.zoom.getZoomBarData(), { cartesianScales: n2 } = this.services;
    if (!n2)
      throw new Error("Services cartesianScales undefined");
    const s2 = n2.getMainXAxisPosition(), o2 = n2.getDomainIdentifier(), a2 = G$1(this.model.getOptions(), "axes", s2, "domain");
    if (Array.isArray(a2) && a2.length === 2)
      return a2;
    if (!s2)
      throw new Error("Not defined: mainXAxisPosition");
    return n2.extendsDomain(
      s2,
      extent(t2, (r2) => r2[o2])
    );
  }
  handleDomainChange(e2, t2 = { dispatchEvent: true }) {
    var n2;
    this.model.set({ zoomDomain: e2 }, { animate: false }), t2.dispatchEvent && ((n2 = this.services.events) == null || n2.dispatchEvent(oE.ZoomDomain.CHANGE, {
      newDomain: e2
    }));
  }
  getZoomRatio() {
    return G$1(this.model.getOptions(), "zoomBar", "zoomRatio");
  }
  // filter out data not inside zoom domain
  // to get better range value for axis label
  filterDataForRangeAxis(e2, t2) {
    var a2;
    const n2 = this.model.get("zoomDomain"), s2 = Object.assign(
      { stacked: false },
      // default configs
      t2
    ), o2 = G$1(this.model.getOptions(), "zoomBar", "updateRangeAxis");
    if (this.isZoomBarEnabled() && o2 && n2) {
      const r2 = s2.stacked ? "sharedStackKey" : (a2 = this.services.cartesianScales) == null ? void 0 : a2.getDomainIdentifier(), c2 = e2.filter(
        (h2) => new Date(h2[r2]) >= n2[0] && new Date(h2[r2]) <= n2[1]
      );
      if (c2.length > 0)
        return c2;
    }
    return e2;
  }
  zoomIn(e2 = this.getZoomRatio()) {
    var S2;
    const t2 = this.model.get("zoomDomain"), n2 = xc.handleWidth, s2 = (S2 = this.services.cartesianScales) == null ? void 0 : S2.getMainXScale().copy();
    s2.domain(this.getDefaultZoomBarDomain());
    const o2 = s2(t2[0]), a2 = s2(t2[1]);
    if (a2 - o2 < n2 + 1)
      return;
    const r2 = s2.range(), c2 = a2 - o2, h2 = Math.min((r2[1] - r2[0]) / 2 * (e2 / 2), c2 / 2);
    let v2 = o2 + h2, y2 = a2 - h2;
    v2 >= y2 && (v2 = o2 + c2 / 2 - n2 / 2, y2 = a2 - c2 / 2 + n2 / 2);
    const A2 = [s2.invert(v2), s2.invert(y2)];
    (t2[0].valueOf() !== A2[0].valueOf() || t2[1].valueOf() !== A2[1].valueOf()) && this.handleDomainChange(A2);
  }
  zoomOut(e2 = this.getZoomRatio()) {
    const t2 = this.model.get("zoomDomain");
    if (!this.services.cartesianScales)
      throw new Error("Services cartesianScales undefined");
    const n2 = this.services.cartesianScales.getMainXScale().copy();
    n2.domain(this.getDefaultZoomBarDomain());
    const s2 = n2(t2[0]), o2 = n2(t2[1]), a2 = n2.range(), r2 = (a2[1] - a2[0]) / 2 * (e2 / 2), c2 = Math.max(s2 - r2, a2[0]), h2 = Math.min(o2 + r2, a2[1]), v2 = [n2.invert(c2), n2.invert(h2)];
    (t2[0].valueOf() !== v2[0].valueOf() || t2[1].valueOf() !== v2[1].valueOf()) && this.handleDomainChange(v2);
  }
  resetZoomDomain() {
    const e2 = this.model.get("zoomDomain"), t2 = this.getDefaultZoomBarDomain();
    (e2[0].valueOf() !== t2[0].valueOf() || e2[1].valueOf() !== t2[1].valueOf()) && this.handleDomainChange(t2);
  }
  // check if current zoom domain is already the min zoom domain
  // when toolbar is rendered, we don't render chart yet
  // don't depend on scale range
  isMinZoomDomain() {
    const e2 = this.model.get("zoomDomain"), t2 = this.getDefaultZoomBarDomain();
    if (!e2 || !t2)
      return false;
    const n2 = e2[1].valueOf() - e2[0].valueOf(), s2 = t2[1].valueOf() - t2[0].valueOf(), o2 = G$1(this.model.getOptions(), "zoomBar", "minZoomRatio");
    return n2 / s2 < o2;
  }
  // check if current zoom domain is already the max zoom domain
  isMaxZoomDomain() {
    const e2 = this.model.get("zoomDomain"), t2 = this.getDefaultZoomBarDomain();
    return !!(e2 && t2 && e2[0].valueOf() === t2[0].valueOf() && e2[1].valueOf() === t2[1].valueOf());
  }
  isEmptyState() {
    return this.getZoomBarData().length === 0;
  }
  isZoomBarLoading(e2) {
    return G$1(this.model.getOptions(), "zoomBar", e2, "loading");
  }
  isZoomBarLocked(e2) {
    return G$1(this.model.getOptions(), "zoomBar", e2, "locked");
  }
}
class T {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(e2, s2) {
    this.components = [], this.services = {
      canvasZoom: it,
      domUtils: k,
      events: ot,
      files: at,
      gradientUtils: le,
      transitions: rt
    }, this.model = new m(this.services);
  }
  // Contains the code that uses properties that are overridable by the super-class
  init(e2, s2) {
    this.model.set({ holder: e2 }, { skipUpdate: true }), Object.keys(this.services).forEach((n2) => {
      const t2 = this.services[n2];
      this.services[n2] = new t2(this.model, this.services);
    }), this.services.events.addEventListener(oE.Model.UPDATE, (n2) => {
      const t2 = !!G$1(n2, "detail", "animate");
      this.update(t2);
    }), this.model.setData(s2.data), this.services.events.addEventListener(oE.Chart.RESIZE, () => {
      this.update(false);
    }), this.components = this.getComponents(), this.update();
  }
  getComponents() {
    return console.error("getComponents() method is not implemented"), [];
  }
  update(e2 = true) {
    if (!this.components)
      return;
    Object.keys(this.services).forEach((t2) => {
      this.services[t2].update();
    }), this.components.forEach((t2) => t2.render(e2));
    const s2 = this.services.transitions.getPendingTransitions(), n2 = Object.keys(s2).map((t2) => s2[t2].end().catch((m2) => m2));
    Promise.all(n2).then(
      () => this.services.events.dispatchEvent(oE.Chart.RENDER_FINISHED)
    );
  }
  destroy() {
    this.components.forEach((e2) => e2.destroy()), this.services.domUtils.getHolder().remove(), this.model.set({ destroyed: true }, { skipUpdate: true });
  }
  getChartComponents(e2, s2) {
    const n2 = this.model.getOptions(), t2 = G$1(n2, "toolbar", "enabled"), h2 = {
      id: "legend",
      components: [new nr(this.model, this.services)],
      growth: W$3.PREFERRED
    }, m2 = G$1(n2, "canvasZoom", "enabled");
    m2 && m2 === true && e2.push(new oc(this.model, this.services));
    const b2 = !!this.model.getOptions().title, O2 = {
      id: "title",
      components: [new sr(this.model, this.services)],
      growth: W$3.STRETCH
    }, x = {
      id: "toolbar",
      components: [new nc(this.model, this.services)],
      growth: W$3.PREFERRED
    }, L2 = {
      id: "header",
      components: [
        new ac(
          this.model,
          this.services,
          [
            // always add title to keep layout correct
            O2,
            ...t2 ? [x] : []
          ],
          {
            direction: z$2.ROW,
            alignItems: B$2.CENTER
          }
        )
      ],
      growth: W$3.PREFERRED
    }, y2 = {
      id: "graph-frame",
      components: e2,
      growth: W$3.STRETCH,
      renderType: G$1(s2, "graphFrameRenderType") || D$2.SVG
    }, D2 = G$1(s2, "excludeLegend") !== true && n2.legend.enabled !== false;
    let f2 = z$2.COLUMN;
    if (D2) {
      const S2 = G$1(n2, "legend", "position");
      S2 === "left" ? (f2 = z$2.ROW, n2.legend.orientation || (n2.legend.orientation = G$2.VERTICAL)) : S2 === "right" ? (f2 = z$2.ROW_REVERSE, n2.legend.orientation || (n2.legend.orientation = G$2.VERTICAL)) : S2 === "bottom" && (f2 = z$2.COLUMN_REVERSE);
    }
    const P2 = {
      id: "spacer",
      components: [new ic(this.model, this.services)],
      growth: W$3.PREFERRED
    }, v2 = {
      id: "full-frame",
      components: [
        new ac(
          this.model,
          this.services,
          [
            ...D2 ? [h2] : [],
            ...D2 ? [P2] : [],
            y2
          ],
          {
            direction: f2
          }
        )
      ],
      growth: W$3.STRETCH
    }, E2 = [];
    if (b2 || t2) {
      E2.push(L2);
      const S2 = {
        id: "spacer",
        components: [
          new ic(this.model, this.services, t2 ? { size: 15 } : void 0)
        ],
        growth: W$3.PREFERRED
      };
      E2.push(S2);
    }
    return E2.push(v2), [
      new ir(this.model, this.services),
      new rc(this.model, this.services),
      new ac(this.model, this.services, E2, {
        direction: z$2.COLUMN
      })
    ];
  }
}
class u extends T {
  constructor(e2, s2) {
    super(e2, s2), this.services = Object.assign(this.services, {
      cartesianScales: lt,
      curves: ut,
      zoom: ct
    }), this.model = new S(this.services);
  }
  getAxisChartComponents(e2, s2) {
    const n2 = this.model.getOptions(), t2 = G$1(n2, "zoomBar", f.TOP, "enabled"), h2 = G$1(n2, "toolbar", "enabled");
    this.services.cartesianScales.determineAxisDuality(), this.services.cartesianScales.findDomainAndRangeAxes(), this.services.cartesianScales.determineOrientation();
    const m2 = this.services.cartesianScales.getMainXAxisPosition(), b2 = G$1(n2, "axes", m2, "scaleType"), O2 = t2 && m2 === f.BOTTOM && b2 === w$1.TIME, x = this.services.zoom.isZoomBarLocked(f.TOP), L2 = !!this.model.getOptions().title, y2 = {
      id: "title",
      components: [new sr(this.model, this.services)],
      growth: W$3.STRETCH
    }, D2 = {
      id: "toolbar",
      components: [new nc(this.model, this.services)],
      growth: W$3.PREFERRED
    }, f$1 = {
      id: "header",
      components: [
        new ac(
          this.model,
          this.services,
          [
            // always add title to keep layout correct
            y2,
            ...h2 ? [D2] : []
          ],
          {
            direction: z$2.ROW,
            alignItems: B$2.CENTER
          }
        )
      ],
      growth: W$3.PREFERRED
    }, P2 = {
      id: "legend",
      components: [new nr(this.model, this.services)],
      growth: W$3.PREFERRED
    };
    O2 && !x && e2.push(
      new ar(this.model, this.services),
      new lc(this.model, this.services)
    ), e2.push(new dc(this.model, this.services)), e2.push(new hc(this.model, this.services));
    const v2 = {
      id: "graph-frame",
      components: e2,
      growth: W$3.STRETCH,
      renderType: D$2.SVG
    }, E2 = G$1(s2, "legend", "enabled") !== false && this.model.getOptions().legend.enabled !== false;
    let S2 = z$2.COLUMN;
    if (E2) {
      const G2 = G$1(this.model.getOptions(), "legend", "position");
      G2 === P$1.LEFT ? (S2 = z$2.ROW, this.model.getOptions().legend.orientation || (this.model.getOptions().legend.orientation = G$2.VERTICAL)) : G2 === P$1.RIGHT ? (S2 = z$2.ROW_REVERSE, this.model.getOptions().legend.orientation || (this.model.getOptions().legend.orientation = G$2.VERTICAL)) : G2 === P$1.BOTTOM && (S2 = z$2.COLUMN_REVERSE);
    }
    const ge2 = {
      id: "spacer",
      components: [new ic(this.model, this.services)],
      growth: W$3.PREFERRED
    }, we2 = {
      id: "full-frame",
      components: [
        new ac(
          this.model,
          this.services,
          [
            ...E2 ? [P2] : [],
            ...E2 ? [ge2] : [],
            v2
          ],
          {
            direction: S2
          }
        )
      ],
      growth: W$3.STRETCH
    }, Ee2 = {
      id: "zoom-bar",
      components: [new cc(this.model, this.services)],
      growth: W$3.PREFERRED,
      renderType: D$2.SVG
    }, H2 = [];
    if (L2 || h2) {
      H2.push(f$1);
      const G2 = {
        id: "spacer",
        components: [
          new ic(this.model, this.services, h2 ? { size: 15 } : void 0)
        ],
        growth: W$3.PREFERRED
      };
      H2.push(G2);
    }
    return O2 && H2.push(Ee2), H2.push(we2), [
      new uc(this.model, this.services),
      new rc(this.model, this.services),
      new ac(this.model, this.services, H2, {
        direction: z$2.COLUMN
      })
    ];
  }
}
({
  [p$2.LINE]: [fc, Bt],
  [p$2.SCATTER]: [Bt],
  [p$2.AREA]: [mc, fc, Bt],
  [p$2.STACKED_AREA]: [jc, fc, Xc, Oc],
  [p$2.SIMPLE_BAR]: [Fc],
  [p$2.GROUPED_BAR]: [$c, bc],
  [p$2.STACKED_BAR]: [Zc, Oc]
});
class Xs2 extends T {
  // TODO - Optimize the use of "extending"
  constructor(e2, s2, n2 = false) {
    super(e2, s2), this.model = new yt$2(this.services), !n2 && (this.model.setOptions(df(Jc.pieChart, s2.options)), this.init(e2, s2));
  }
  getComponents() {
    const e2 = [
      new yr(this.model, this.services),
      new lr(this.model, this.services, {
        skeleton: Z$3.PIE
      })
    ];
    return this.getChartComponents(e2);
  }
}
class gt extends Xs2 {
  constructor(e2, s2) {
    super(e2, s2, true), this.model.setOptions(df(Jc.donutChart, s2.options)), this.init(e2, s2);
  }
  getComponents() {
    const e2 = [
      new Vc(this.model, this.services),
      new lr(this.model, this.services, {
        skeleton: Z$3.DONUT
      })
    ];
    return this.getChartComponents(e2);
  }
}
class Dt extends u {
  constructor(e2, s2) {
    super(e2, s2), this.model.setOptions(df(Jc.simpleBarChart, s2.options)), this.init(e2, s2);
  }
  getComponents() {
    const e2 = [
      new vc(this.model, this.services),
      new gc(this.model, this.services),
      new Fc(this.model, this.services),
      new bc(this.model, this.services),
      new lr(this.model, this.services, {
        skeleton: Z$3.VERT_OR_HORIZ
      })
    ];
    return this.getAxisChartComponents(e2);
  }
}
const chartHolderCssClass = "cds--chart-holder";
const BaseChart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["data", "options", "Chart", "chart", "ref", "id"]);
  let { data = [] } = $$props;
  let { options = {} } = $$props;
  let { Chart = void 0 } = $$props;
  let { chart = null } = $$props;
  let { ref = null } = $$props;
  let { id = `chart-${Math.random().toString(36)}` } = $$props;
  const dispatch = createEventDispatcher();
  onDestroy(() => {
    if (chart) {
      dispatch("destroy");
      chart.components.forEach((component) => component.destroy());
      chart.model.set({ destroyed: true }, { skipUpdate: true });
      chart = null;
    }
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.Chart === void 0 && $$bindings.Chart && Chart !== void 0)
    $$bindings.Chart(Chart);
  if ($$props.chart === void 0 && $$bindings.chart && chart !== void 0)
    $$bindings.chart(chart);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  return `<div${spread(
    [
      { id: escape_attribute_value(id) },
      {
        class: escape_attribute_value(chartHolderCssClass)
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", ref, 0)}></div>`;
});
const BarChartSimple = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["options", "data", "chart", "ref"]);
  let { options } = $$props;
  let { data } = $$props;
  let { chart = null } = $$props;
  let { ref = null } = $$props;
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.chart === void 0 && $$bindings.chart && chart !== void 0)
    $$bindings.chart(chart);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(BaseChart, "BaseChart").$$render(
      $$result,
      Object.assign({}, $$restProps, { Chart: Dt }, { options }, { data }, { ref }, { chart }),
      {
        ref: ($$value) => {
          ref = $$value;
          $$settled = false;
        },
        chart: ($$value) => {
          chart = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const DonutChart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["options", "data", "chart", "ref"]);
  let { options } = $$props;
  let { data } = $$props;
  let { chart = null } = $$props;
  let { ref = null } = $$props;
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.chart === void 0 && $$bindings.chart && chart !== void 0)
    $$bindings.chart(chart);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(BaseChart, "BaseChart").$$render(
      $$result,
      Object.assign({}, $$restProps, { Chart: gt }, { options }, { data }, { ref }, { chart }),
      {
        ref: ($$value) => {
          ref = $$value;
          $$settled = false;
        },
        chart: ($$value) => {
          chart = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const ChartHistogram = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}><path d="M31,31.36H1c-0.199,0-0.36-0.161-0.36-0.36V1h0.72v14.632c3.704-0.168,5.584-2.933,7.405-5.609	c1.8-2.646,3.662-5.382,7.235-5.382s5.436,2.736,7.235,5.382c1.879,2.762,3.821,5.618,7.765,5.618v0.72	c-4.324,0-6.376-3.016-8.36-5.933C20.867,7.822,19.192,5.36,16,5.36c-3.193,0-4.867,2.461-6.64,5.067	c-1.928,2.834-3.92,5.763-8,5.926V30.64h2.28V20c0-0.199,0.161-0.36,0.36-0.36h3.64V16c0-0.199,0.161-0.36,0.36-0.36h3.64V11	c0-0.199,0.161-0.36,0.36-0.36h4c0.199,0,0.36,0.161,0.36,0.36v1.64H20c0.199,0,0.36,0.161,0.36,0.36v3.64H24	c0.199,0,0.36,0.161,0.36,0.36v4.64H28c0.199,0,0.36,0.161,0.36,0.36v8.64H31V31.36z M24.36,30.64h3.279v-8.28H24.36V30.64z M20.36,30.64h3.279V17.36H20.36V30.64z M16.36,30.64h3.28V13.36h-3.28V30.64z M12.36,30.64h3.28V11.36h-3.28V30.64z M8.36,30.64	h3.28V16.36H8.36V30.64z M4.36,30.64h3.28V20.36H4.36V30.64z"></path></svg>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let dataUltimoMes = data;
  const dataForChart2 = data.ventas.map((venta) => {
    if (venta.expand.pagos && Array.isArray(venta.expand.pagos)) {
      const group = venta.expand.paquete.nombre;
      const value = venta.expand.pagos.reduce((total, pago) => total + (pago.valor || 0), 0);
      return { group, value };
    } else {
      return {
        group: venta.expand.paquete.nombre,
        value: 0
      };
    }
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Grid, "Grid").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Column, "Column").$$render($$result, {}, {}, {
            default: () => {
              return `<h1 data-svelte-h="svelte-15a5y0e">Reportes</h1> <p data-svelte-h="svelte-iwdueb">Reportes de ventas y pagos</p>`;
            }
          })} ${validate_component(Column, "Column").$$render($$result, { class: "flex justify-end" }, {}, {
            default: () => {
              return `${validate_component(ChartHistogram, "ChartHistogram").$$render($$result, {}, {}, {})}`;
            }
          })}`;
        }
      })} ${validate_component(Row, "Row").$$render($$result, { class: "mt-8" }, {}, {
        default: () => {
          return `${validate_component(Column, "Column").$$render($$result, {}, {}, {
            default: () => {
              return `<h4 data-svelte-h="svelte-145bgpx">Registros de pagos</h4>`;
            }
          })}`;
        }
      })} ${validate_component(Row, "Row").$$render($$result, { class: "mb-8" }, {}, {
        default: () => {
          return `${validate_component(Column, "Column").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(TileVentas, "TileVentas").$$render(
                $$result,
                {
                  titulo: "Último mes",
                  data: dataUltimoMes
                },
                {},
                {}
              )}`;
            }
          })} ${validate_component(Column, "Column").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(TileVentas, "TileVentas").$$render($$result, { titulo: "Diario", data }, {}, {})}`;
            }
          })} ${validate_component(Column, "Column").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(TileVentas, "TileVentas").$$render($$result, { titulo: "Última semana", data }, {}, {})}`;
            }
          })}`;
        }
      })} ${validate_component(Row, "Row").$$render($$result, { class: "mt-8" }, {}, {
        default: () => {
          return `${validate_component(Column, "Column").$$render($$result, {}, {}, {
            default: () => {
              return `<h4 data-svelte-h="svelte-kq7584">Gráficos de ventas</h4>`;
            }
          })}`;
        }
      })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Column, "Column").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Tile, "Tile").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Column, "Column").$$render($$result, {}, {}, {
                        default: () => {
                          return `<h5 data-svelte-h="svelte-1xqzdwa">Rango de fechas</h5>`;
                        }
                      })} ${validate_component(Column, "Column").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(DatePicker, "DatePicker").$$render(
                            $$result,
                            {
                              datePickerType: "range",
                              dateFormat: "d/m/Y",
                              locale: Spanish,
                              valueFrom: (/* @__PURE__ */ new Date()).toISOString(),
                              valueTo: (/* @__PURE__ */ new Date()).toISOString()
                            },
                            {},
                            {
                              default: () => {
                                return `${validate_component(DatePickerInput, "DatePickerInput").$$render(
                                  $$result,
                                  {
                                    placeholder: "dd/mm/aaa",
                                    name: "fechasalida"
                                  },
                                  {},
                                  {}
                                )} ${validate_component(DatePickerInput, "DatePickerInput").$$render(
                                  $$result,
                                  {
                                    placeholder: "dd/mm/aaa",
                                    name: "fecharetorno"
                                  },
                                  {},
                                  {}
                                )}`;
                              }
                            }
                          )}`;
                        }
                      })}`;
                    }
                  })} ${validate_component(DonutChart, "DonutChart").$$render(
                    $$result,
                    {
                      data: dataForChart2,
                      options: {
                        theme: "g100",
                        title: "Proporción del total de pagos por paquete",
                        height: "400px",
                        resizable: true,
                        donut: { center: { label: "Total ARS" } }
                      }
                    },
                    {},
                    {}
                  )}`;
                }
              })}`;
            }
          })} ${validate_component(Column, "Column").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Tile, "Tile").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Column, "Column").$$render($$result, {}, {}, {
                        default: () => {
                          return `<h5 data-svelte-h="svelte-1xqzdwa">Rango de fechas</h5>`;
                        }
                      })} ${validate_component(Column, "Column").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(DatePicker, "DatePicker").$$render(
                            $$result,
                            {
                              datePickerType: "range",
                              dateFormat: "d/m/Y",
                              locale: Spanish,
                              valueFrom: (/* @__PURE__ */ new Date()).toISOString(),
                              valueTo: (/* @__PURE__ */ new Date()).toISOString()
                            },
                            {},
                            {
                              default: () => {
                                return `${validate_component(DatePickerInput, "DatePickerInput").$$render(
                                  $$result,
                                  {
                                    placeholder: "dd/mm/aaa",
                                    name: "fechasalida"
                                  },
                                  {},
                                  {}
                                )} ${validate_component(DatePickerInput, "DatePickerInput").$$render(
                                  $$result,
                                  {
                                    placeholder: "dd/mm/aaa",
                                    name: "fecharetorno"
                                  },
                                  {},
                                  {}
                                )}`;
                              }
                            }
                          )}`;
                        }
                      })}`;
                    }
                  })} ${validate_component(BarChartSimple, "BarChartSimple").$$render(
                    $$result,
                    {
                      data: dataForChart2,
                      options: {
                        theme: "g100",
                        title: "Pagos por paquete",
                        height: "400px",
                        axes: {
                          left: { mapsTo: "value" },
                          bottom: { mapsTo: "group", scaleType: "labels" }
                        }
                      }
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
  })}`;
});
export {
  Page as default
};
