"use client";

import * as React from "react";
import { Select as SelectPrimitive } from "@base-ui/react/select";
import { cn } from "@/lib/utils";
import { ChevronDownIcon, CheckIcon, ChevronUpIcon } from "lucide-react";
import ScrollFade from "@/components/ScrollFade";
import OptionMarquee from "@/components/OptionMarquee";

const Select = SelectPrimitive.Root;

function SelectGroup({ className, ...props }: SelectPrimitive.Group.Props) {
  return (
    <SelectPrimitive.Group
      data-slot="select-group"
      className={cn("scroll-my-1 p-1", className)}
      {...props}
    />
  );
}

function SelectValue({ className, ...props }: SelectPrimitive.Value.Props) {
  return (
    <SelectPrimitive.Value
      data-slot="select-value"
      className={cn("flex flex-1 text-left truncate", className)}
      {...props}
    />
  );
}

function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}: SelectPrimitive.Trigger.Props & {
  size?: "sm" | "default";
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "flex w-full items-center justify-between gap-2 rounded-none border border-outline-variant/40 bg-surface-container-low px-3 text-body-sm font-body-sm text-on-surface transition-colors duration-150 outline-none select-none hover:border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-error data-placeholder:text-on-surface-variant cursor-pointer",
        size === "sm" ? "h-8 min-h-8" : "h-[38px] min-h-[38px]",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon
        render={
          <ChevronDownIcon className="pointer-events-none size-4 text-primary shrink-0 transition-transform duration-200" />
        }
      />
    </SelectPrimitive.Trigger>
  );
}

function SelectContent({
  className,
  children,
  side = "bottom",
  sideOffset = 4,
  align = "start",
  alignOffset = 0,
  alignItemWithTrigger = false,
  ...props
}: SelectPrimitive.Popup.Props &
  Pick<
    SelectPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset" | "alignItemWithTrigger"
  >) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        alignItemWithTrigger={alignItemWithTrigger}
        className="isolate z-50"
      >
        <SelectPrimitive.Popup
          data-slot="select-content"
          data-align-trigger={alignItemWithTrigger}
          className={cn(
            "relative isolate z-50 max-h-60 w-[var(--anchor-width)] min-w-44 origin-[var(--transform-origin)] overflow-hidden rounded-none bg-surface-container-lowest text-on-surface shadow-xl border border-outline-variant/60 duration-100 py-1 data-[open]:animate-in data-[open]:fade-in-0 data-[open]:zoom-in-95 data-[closed]:animate-out data-[closed]:fade-out-0 data-[closed]:zoom-out-95",
            className
          )}
          {...props}
        >
          <ScrollFade direction="vertical" fadeSize={20} fadeMode="scroll">
            <SelectPrimitive.List className="max-h-56 overflow-y-auto outline-none" data-lenis-prevent>
              {children}
            </SelectPrimitive.List>
          </ScrollFade>
        </SelectPrimitive.Popup>
      </SelectPrimitive.Positioner>
    </SelectPrimitive.Portal>
  );
}

function SelectLabel({
  className,
  ...props
}: SelectPrimitive.GroupLabel.Props) {
  return (
    <SelectPrimitive.GroupLabel
      data-slot="select-label"
      className={cn("px-3.5 py-1 text-label-sm font-label-sm uppercase tracking-wider text-secondary", className)}
      {...props}
    />
  );
}

function SelectItem({
  className,
  children,
  ...props
}: SelectPrimitive.Item.Props) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "relative flex w-full cursor-pointer items-center justify-between gap-2 rounded-none px-3.5 py-2 text-body-sm font-body-sm text-on-surface outline-none select-none transition-colors duration-100 hover:bg-surface-container hover:text-primary data-[highlighted]:bg-surface-container data-[highlighted]:text-primary data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      <SelectPrimitive.ItemText className="flex flex-1 min-w-0">
        <OptionMarquee>{children}</OptionMarquee>
      </SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator
        render={
          <span className="flex size-4 items-center justify-center shrink-0">
            <CheckIcon className="size-3.5 text-primary" />
          </span>
        }
      />
    </SelectPrimitive.Item>
  );
}

function SelectSeparator({
  className,
  ...props
}: SelectPrimitive.Separator.Props) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("pointer-events-none -mx-1 my-1 h-px bg-outline-variant/30", className)}
      {...props}
    />
  );
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpArrow>) {
  return (
    <SelectPrimitive.ScrollUpArrow
      data-slot="select-scroll-up-button"
      className={cn(
        "top-0 z-10 flex w-full cursor-default items-center justify-center bg-surface-container-lowest py-1 text-on-surface-variant hover:text-primary",
        className
      )}
      {...props}
    >
      <ChevronUpIcon className="size-4" />
    </SelectPrimitive.ScrollUpArrow>
  );
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownArrow>) {
  return (
    <SelectPrimitive.ScrollDownArrow
      data-slot="select-scroll-down-button"
      className={cn(
        "bottom-0 z-10 flex w-full cursor-default items-center justify-center bg-surface-container-lowest py-1 text-on-surface-variant hover:text-primary",
        className
      )}
      {...props}
    >
      <ChevronDownIcon className="size-4" />
    </SelectPrimitive.ScrollDownArrow>
  );
}

export interface SelectOption {
  value: string;
  label: string;
}

export interface CustomSelectProps {
  options: (string | SelectOption)[];
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  name?: string;
  id?: string;
  required?: boolean;
  className?: string;
  triggerClassName?: string;
  size?: "sm" | "default";
  onChange?: (value: string) => void;
}

/**
 * Unified CustomSelect component built on top of shadcn primitives.
 * Provides drop-in support with options array, form inputs, and ScrollFade.
 */
export function CustomSelect({
  options,
  value,
  defaultValue,
  placeholder = "Select an option",
  name,
  id,
  required = false,
  className = "",
  triggerClassName = "",
  size = "default",
  onChange,
}: CustomSelectProps) {
  const normalizedOptions: SelectOption[] = React.useMemo(
    () =>
      options.map((opt) =>
        typeof opt === "string" ? { value: opt, label: opt } : opt
      ),
    [options]
  );

  const [internalVal, setInternalVal] = React.useState<string>(
    value !== undefined
      ? value
      : defaultValue !== undefined
      ? defaultValue
      : normalizedOptions[0]?.value || ""
  );

  React.useEffect(() => {
    if (value !== undefined) {
      setInternalVal(value);
    }
  }, [value]);

  const activeVal = value !== undefined ? value : internalVal;
  const currentLabel =
    normalizedOptions.find((o) => o.value === activeVal)?.label || placeholder;

  const handleValueChange = (newVal: any) => {
    const stringVal = String(newVal ?? "");
    setInternalVal(stringVal);
    if (onChange) {
      onChange(stringVal);
    }
  };

  return (
    <div className={cn("relative w-full", className)}>
      {name && (
        <input
          type="hidden"
          name={name}
          value={activeVal}
          required={required}
        />
      )}
      <Select
        value={activeVal}
        onValueChange={handleValueChange}
      >
        <SelectTrigger id={id} size={size} className={cn("w-full", triggerClassName)}>
          <SelectValue placeholder={placeholder}>
            {currentLabel}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {normalizedOptions.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default CustomSelect;

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
