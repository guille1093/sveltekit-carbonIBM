import { c as create_ssr_component, a as compute_rest_props, g as createEventDispatcher, j as subscribe, s as setContext, b as spread, d as escape_object, i as add_attribute, h as add_classes, e as escape_attribute_value, f as escape, q as getContext, v as validate_component, k as compute_slots } from "./ssr.js";
import { d as derived, w as writable } from "./index2.js";
import flatpickr from "flatpickr";
import { W as WarningFilled, a as WarningAltFilled } from "./WarningAltFilled.js";
let l10n;
function updateClasses(instance) {
  const {
    calendarContainer,
    days,
    daysContainer,
    weekdayContainer,
    selectedDates
  } = instance;
  calendarContainer.classList.add("bx--date-picker__calendar");
  calendarContainer.querySelector(".flatpickr-month").classList.add("bx--date-picker__month");
  weekdayContainer.classList.add("bx--date-picker__weekdays");
  weekdayContainer.querySelectorAll(".flatpickr-weekday").forEach((node) => {
    node.classList.add("bx--date-picker__weekday");
  });
  daysContainer.classList.add("bx--date-picker__days");
  days.querySelectorAll(".flatpickr-day").forEach((node) => {
    node.classList.add("bx--date-picker__day");
    if (node.classList.contains("today") && selectedDates.length > 0) {
      node.classList.add("no-border");
    } else if (node.classList.contains("today") && selectedDates.length === 0) {
      node.classList.remove("no-border");
    }
  });
}
function updateMonthNode(instance) {
  const monthText = instance.l10n.months.longhand[instance.currentMonth];
  const staticMonthNode = instance.monthNav.querySelector(".cur-month");
  if (staticMonthNode) {
    staticMonthNode.textContent = monthText;
  } else {
    const monthSelectNode = instance.monthsDropdownContainer;
    const span = document.createElement("span");
    span.setAttribute("class", "cur-month");
    span.textContent = monthText;
    monthSelectNode.parentNode.replaceChild(span, monthSelectNode);
  }
}
async function createCalendar({ options, base, input, dispatch }) {
  let locale = options.locale;
  if (options.locale === "en" && l10n && l10n.en) {
    l10n.en.weekdays.shorthand.forEach((_, index) => {
      const shorthand = _.slice(0, 2);
      l10n.en.weekdays.shorthand[index] = shorthand === "Th" ? "Th" : shorthand.charAt(0);
    });
    locale = l10n.en;
  }
  let rangePlugin;
  if (options.mode === "range") {
    const importee = await import("flatpickr/dist/esm/plugins/rangePlugin.js");
    rangePlugin = importee.default;
  }
  return new flatpickr(base, {
    allowInput: true,
    disableMobile: true,
    clickOpens: true,
    locale,
    plugins: [
      options.mode === "range" && new rangePlugin({ position: "left", input })
    ].filter(Boolean),
    nextArrow: '<svg width="16px" height="16px" viewBox="0 0 16 16"><polygon points="11,8 6,13 5.3,12.3 9.6,8 5.3,3.7 6,3 "/><rect width="16" height="16" style="fill: none" /></svg>',
    prevArrow: '<svg width="16px" height="16px" viewBox="0 0 16 16"><polygon points="5,8 10,3 10.7,3.7 6.4,8 10.7,12.3 10,13 "/><rect width="16" height="16" style="fill: none" /></svg>',
    onChange: () => {
      dispatch("change");
    },
    onClose: () => {
      dispatch("close");
    },
    onMonthChange: (s, d, instance) => {
      updateMonthNode(instance);
    },
    onOpen: (s, d, instance) => {
      dispatch("open");
      updateClasses(instance);
      updateMonthNode(instance);
    },
    ...options
  });
}
const DatePicker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "datePickerType",
    "value",
    "valueFrom",
    "valueTo",
    "dateFormat",
    "maxDate",
    "minDate",
    "locale",
    "short",
    "light",
    "id",
    "flatpickrProps"
  ]);
  let $hasCalendar, $$unsubscribe_hasCalendar;
  let $inputValueTo, $$unsubscribe_inputValueTo;
  let $inputValueFrom, $$unsubscribe_inputValueFrom;
  let $inputValue, $$unsubscribe_inputValue;
  let $range, $$unsubscribe_range;
  let $mode, $$unsubscribe_mode;
  let $inputIds, $$unsubscribe_inputIds;
  let $labelTextEmpty, $$unsubscribe_labelTextEmpty;
  let { datePickerType = "simple" } = $$props;
  let { value = "" } = $$props;
  let { valueFrom = "" } = $$props;
  let { valueTo = "" } = $$props;
  let { dateFormat = "m/d/Y" } = $$props;
  let { maxDate = null } = $$props;
  let { minDate = null } = $$props;
  let { locale = "en" } = $$props;
  let { short = false } = $$props;
  let { light = false } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { flatpickrProps = { static: true } } = $$props;
  const dispatch = createEventDispatcher();
  const inputs = writable([]);
  const inputIds = derived(inputs, (_) => _.map(({ id: id2 }) => id2));
  $$unsubscribe_inputIds = subscribe(inputIds, (value2) => $inputIds = value2);
  const labelTextEmpty = derived(inputs, (_) => _.filter(({ labelText }) => !!labelText).length === 0);
  $$unsubscribe_labelTextEmpty = subscribe(labelTextEmpty, (value2) => $labelTextEmpty = value2);
  const inputValue = writable(value);
  $$unsubscribe_inputValue = subscribe(inputValue, (value2) => $inputValue = value2);
  const inputValueFrom = writable(valueFrom);
  $$unsubscribe_inputValueFrom = subscribe(inputValueFrom, (value2) => $inputValueFrom = value2);
  const inputValueTo = writable(valueTo);
  $$unsubscribe_inputValueTo = subscribe(inputValueTo, (value2) => $inputValueTo = value2);
  const mode = writable(datePickerType);
  $$unsubscribe_mode = subscribe(mode, (value2) => $mode = value2);
  const range = derived(mode, (_) => _ === "range");
  $$unsubscribe_range = subscribe(range, (value2) => $range = value2);
  const hasCalendar = derived(mode, (_) => _ === "single" || _ === "range");
  $$unsubscribe_hasCalendar = subscribe(hasCalendar, (value2) => $hasCalendar = value2);
  let calendar = null;
  let datePickerRef = null;
  let inputRef = null;
  let inputRefTo = null;
  setContext("DatePicker", {
    range,
    inputValue,
    inputValueFrom,
    inputValueTo,
    inputIds,
    hasCalendar,
    add: (data) => {
      inputs.update((_) => [..._, data]);
    },
    declareRef: ({ id: id2, ref }) => {
      if ($inputIds.indexOf(id2) === 0) {
        inputRef = ref;
      } else {
        inputRefTo = ref;
      }
    },
    updateValue: ({ type, value: value2 }) => {
      if (!calendar && type === "input" || type === "change") {
        inputValue.set(value2);
      }
      if (!calendar && type === "change") {
        dispatch("change", value2);
      }
    },
    blurInput: (relatedTarget) => {
      if (calendar && !calendar.calendarContainer.contains(relatedTarget)) {
        calendar.close();
      }
    },
    openCalendar: () => {
      calendar.open();
    },
    focusCalendar: () => {
      (calendar.selectedDateElem || calendar.todayDateElem || calendar.calendarContainer.querySelector(".flatpickr-day[tabindex]") || calendar.calendarContainer).focus();
    }
  });
  async function initCalendar(options) {
    if (calendar) {
      calendar.set("minDate", minDate);
      calendar.set("maxDate", maxDate);
      calendar.set("locale", locale);
      calendar.set("dateFormat", dateFormat);
      Object.entries(flatpickrProps).forEach(([option, value2]) => {
        calendar.set(options, value2);
      });
      return;
    }
    calendar = await createCalendar({
      options: {
        ...options,
        appendTo: datePickerRef,
        defaultDate: $inputValue,
        mode: $mode
      },
      base: inputRef,
      input: inputRefTo,
      dispatch: (event) => {
        const detail = { selectedDates: calendar.selectedDates };
        if ($range) {
          const from = inputRef.value;
          const to = inputRefTo.value;
          detail.dateStr = {
            from: inputRef.value,
            to: inputRefTo.value
          };
          valueFrom = from;
          valueTo = to;
        } else {
          detail.dateStr = inputRef.value;
        }
        return dispatch(event, detail);
      }
    });
    calendar?.calendarContainer?.setAttribute("role", "application");
    calendar?.calendarContainer?.setAttribute("aria-label", "calendar-container");
  }
  if ($$props.datePickerType === void 0 && $$bindings.datePickerType && datePickerType !== void 0)
    $$bindings.datePickerType(datePickerType);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.valueFrom === void 0 && $$bindings.valueFrom && valueFrom !== void 0)
    $$bindings.valueFrom(valueFrom);
  if ($$props.valueTo === void 0 && $$bindings.valueTo && valueTo !== void 0)
    $$bindings.valueTo(valueTo);
  if ($$props.dateFormat === void 0 && $$bindings.dateFormat && dateFormat !== void 0)
    $$bindings.dateFormat(dateFormat);
  if ($$props.maxDate === void 0 && $$bindings.maxDate && maxDate !== void 0)
    $$bindings.maxDate(maxDate);
  if ($$props.minDate === void 0 && $$bindings.minDate && minDate !== void 0)
    $$bindings.minDate(minDate);
  if ($$props.locale === void 0 && $$bindings.locale && locale !== void 0)
    $$bindings.locale(locale);
  if ($$props.short === void 0 && $$bindings.short && short !== void 0)
    $$bindings.short(short);
  if ($$props.light === void 0 && $$bindings.light && light !== void 0)
    $$bindings.light(light);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.flatpickrProps === void 0 && $$bindings.flatpickrProps && flatpickrProps !== void 0)
    $$bindings.flatpickrProps(flatpickrProps);
  value = $inputValue;
  {
    inputValue.set(value);
  }
  valueFrom = $inputValueFrom;
  {
    inputValueFrom.set(valueFrom);
  }
  valueTo = $inputValueTo;
  {
    inputValueTo.set(valueTo);
  }
  {
    if ($hasCalendar && inputRef) {
      initCalendar({
        dateFormat,
        locale,
        maxDate,
        minDate,
        // default to static: true so the
        // date picker works inside a modal
        static: true,
        ...flatpickrProps
      });
    }
  }
  $$unsubscribe_hasCalendar();
  $$unsubscribe_inputValueTo();
  $$unsubscribe_inputValueFrom();
  $$unsubscribe_inputValue();
  $$unsubscribe_range();
  $$unsubscribe_mode();
  $$unsubscribe_inputIds();
  $$unsubscribe_labelTextEmpty();
  return `   <div${spread([escape_object($$restProps)], { classes: "bx--form-item" })}> <div${add_attribute("id", id, 0)}${add_classes(("bx--date-picker " + (short ? "bx--date-picker--short" : "") + " " + (light ? "bx--date-picker--light" : "") + " " + (datePickerType === "simple" ? "bx--date-picker--simple" : "") + " " + (datePickerType === "single" ? "bx--date-picker--single" : "") + " " + (datePickerType === "range" ? "bx--date-picker--range" : "") + " " + (datePickerType === "range" && $labelTextEmpty ? "bx--date-picker--nolabel" : "")).trim())}${add_attribute("this", datePickerRef, 0)}>${slots.default ? slots.default({}) : ``}</div></div>`;
});
const DatePicker$1 = DatePicker;
const Calendar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M26,4h-4V2h-2v2h-8V2h-2v2H6C4.9,4,4,4.9,4,6v20c0,1.1,0.9,2,2,2h20c1.1,0,2-0.9,2-2V6C28,4.9,27.1,4,26,4z M26,26H6V12h20	V26z M26,10H6V6h4v2h2V6h8v2h2V6h4V10z"></path></svg>`;
});
const Calendar$1 = Calendar;
const DatePickerInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "size",
    "type",
    "placeholder",
    "pattern",
    "disabled",
    "helperText",
    "iconDescription",
    "id",
    "labelText",
    "hideLabel",
    "invalid",
    "invalidText",
    "warn",
    "warnText",
    "name",
    "ref"
  ]);
  let $$slots = compute_slots(slots);
  let $range, $$unsubscribe_range;
  let $inputIds, $$unsubscribe_inputIds;
  let $inputValueFrom, $$unsubscribe_inputValueFrom;
  let $inputValueTo, $$unsubscribe_inputValueTo;
  let $inputValue, $$unsubscribe_inputValue;
  let $hasCalendar, $$unsubscribe_hasCalendar;
  let { size = void 0 } = $$props;
  let { type = "text" } = $$props;
  let { placeholder = "" } = $$props;
  let { pattern = "\\d{1,2}\\/\\d{1,2}\\/\\d{4}" } = $$props;
  let { disabled = false } = $$props;
  let { helperText = "" } = $$props;
  let { iconDescription = "" } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { labelText = "" } = $$props;
  let { hideLabel = false } = $$props;
  let { invalid = false } = $$props;
  let { invalidText = "" } = $$props;
  let { warn = false } = $$props;
  let { warnText = "" } = $$props;
  let { name = void 0 } = $$props;
  let { ref = null } = $$props;
  const { range, add, hasCalendar, declareRef, inputIds, updateValue, blurInput, openCalendar, focusCalendar, inputValue, inputValueFrom, inputValueTo } = getContext("DatePicker");
  $$unsubscribe_range = subscribe(range, (value) => $range = value);
  $$unsubscribe_hasCalendar = subscribe(hasCalendar, (value) => $hasCalendar = value);
  $$unsubscribe_inputIds = subscribe(inputIds, (value) => $inputIds = value);
  $$unsubscribe_inputValue = subscribe(inputValue, (value) => $inputValue = value);
  $$unsubscribe_inputValueFrom = subscribe(inputValueFrom, (value) => $inputValueFrom = value);
  $$unsubscribe_inputValueTo = subscribe(inputValueTo, (value) => $inputValueTo = value);
  add({ id, labelText });
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.pattern === void 0 && $$bindings.pattern && pattern !== void 0)
    $$bindings.pattern(pattern);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.helperText === void 0 && $$bindings.helperText && helperText !== void 0)
    $$bindings.helperText(helperText);
  if ($$props.iconDescription === void 0 && $$bindings.iconDescription && iconDescription !== void 0)
    $$bindings.iconDescription(iconDescription);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.labelText === void 0 && $$bindings.labelText && labelText !== void 0)
    $$bindings.labelText(labelText);
  if ($$props.hideLabel === void 0 && $$bindings.hideLabel && hideLabel !== void 0)
    $$bindings.hideLabel(hideLabel);
  if ($$props.invalid === void 0 && $$bindings.invalid && invalid !== void 0)
    $$bindings.invalid(invalid);
  if ($$props.invalidText === void 0 && $$bindings.invalidText && invalidText !== void 0)
    $$bindings.invalidText(invalidText);
  if ($$props.warn === void 0 && $$bindings.warn && warn !== void 0)
    $$bindings.warn(warn);
  if ($$props.warnText === void 0 && $$bindings.warnText && warnText !== void 0)
    $$bindings.warnText(warnText);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  {
    if (ref)
      declareRef({ id, ref });
  }
  $$unsubscribe_range();
  $$unsubscribe_inputIds();
  $$unsubscribe_inputValueFrom();
  $$unsubscribe_inputValueTo();
  $$unsubscribe_inputValue();
  $$unsubscribe_hasCalendar();
  return `<div${add_classes(("bx--date-picker-container " + (!labelText ? "bx--date-picker--nolabel" : "")).trim())}>${labelText || $$slots.labelText ? `<label${add_attribute("for", id, 0)}${add_classes(("bx--label " + (hideLabel ? "bx--visually-hidden" : "") + " " + (disabled ? "bx--label--disabled" : "")).trim())}>${slots.labelText ? slots.labelText({}) : ` ${escape(labelText)} `}</label>` : ``} <div${add_classes(("bx--date-picker-input__wrapper " + (invalid ? "bx--date-picker-input__wrapper--invalid" : "") + " " + (warn ? "bx--date-picker-input__wrapper--warn" : "")).trim())}><input${spread(
    [
      {
        "data-invalid": escape_attribute_value(invalid || void 0)
      },
      { id: escape_attribute_value(id) },
      { name: escape_attribute_value(name) },
      {
        placeholder: escape_attribute_value(placeholder)
      },
      { type: escape_attribute_value(type) },
      { pattern: escape_attribute_value(pattern) },
      { disabled: disabled || null },
      escape_object($$restProps),
      {
        value: escape_attribute_value($range ? $inputIds.indexOf(id) === 0 ? $inputValueFrom : $inputValueTo : $inputValue)
      }
    ],
    {
      classes: "bx--date-picker__input " + (invalid ? "bx--date-picker__input--invalid" : "") + " " + (size === "sm" ? "bx--date-picker__input--sm" : "") + " " + (size === "xl" ? "bx--date-picker__input--xl" : "")
    }
  )}${add_attribute("this", ref, 0)}> ${invalid ? `${validate_component(WarningFilled, "WarningFilled").$$render(
    $$result,
    {
      class: "bx--date-picker__icon bx--date-picker__icon--invalid"
    },
    {},
    {}
  )}` : ``} ${!invalid && warn ? `${validate_component(WarningAltFilled, "WarningAltFilled").$$render(
    $$result,
    {
      class: "bx--date-picker__icon bx--date-picker__icon--warn"
    },
    {},
    {}
  )}` : ``} ${$hasCalendar && !invalid && !warn ? `${validate_component(Calendar$1, "Calendar").$$render(
    $$result,
    {
      class: "bx--date-picker__icon",
      "aria-label": iconDescription
    },
    {},
    {}
  )}` : ``}</div> ${invalid ? `<div${add_classes("bx--form-requirement".trim())}>${escape(invalidText)}</div>` : ``} ${!invalid && warn ? `<div${add_classes("bx--form-requirement".trim())}>${escape(warnText)}</div>` : ``} ${!invalid && !warn && helperText ? `<div${add_classes(("bx--form__helper-text " + (disabled ? "bx--form__helper-text--disabled" : "")).trim())}>${escape(helperText)}</div>` : ``}</div>`;
});
const DatePickerInput$1 = DatePickerInput;
export {
  DatePicker$1 as D,
  DatePickerInput$1 as a
};
