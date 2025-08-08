import { useTrans } from "@/Providers/useTrans";
import React, { useImperativeHandle, useState, forwardRef } from "react";

export interface ElementItem {
  name?: string;
  title?: string;
  value?: string;
}

export interface ElementsListHandle {
  show: () => void;
  close: () => void;
  toggle: () => void;
}

interface ElementsListProps {
  items: ElementItem[];
  hidden?: boolean;
  onItemSelect?: (item: ElementItem, index: number) => void;
}

const ElementsList = forwardRef<ElementsListHandle, ElementsListProps>(
  ({ items, hidden = false, onItemSelect }, ref) => {
    const [isVisible, setIsVisible] = useState(!hidden);
    const lang = useTrans().lang;

    const isRtl = lang === "ar";

    const show = () => setIsVisible(true);
    const close = () => setIsVisible(false);
    const toggle = () => setIsVisible((prev) => !prev);

    useImperativeHandle(ref, () => ({ show, close, toggle }), []);

    return (
      <div
        className={`list-items ${!isVisible ? "hidden" : ""} ${
          hidden ? "absolute" : ""
        }`}
      >
        <div className="list">
          {items.map((item, index) => (
            <span key={index} onClick={() => onItemSelect?.(item, index)}>
              <i
                className={
                  isRtl
                    ? "ri-corner-down-left-line"
                    : "ri-corner-down-right-line"
                }
              ></i>
              {item.name || item.title}
            </span>
          ))}
        </div>
      </div>
    );
  }
);

ElementsList.displayName = "ElementsList";
export default ElementsList;
