import { useRef, useState } from "react";
import ElementsList, { ElementsListHandle, ElementItem } from "./elements/element-list";
import { usePathname, useRouter } from "next/navigation";
import { toLocalePath } from "@/utils/locale";


/**
 * PrefsBtns component displays language and theme preference buttons.
 */
const PrefsBtns: React.FC = () => {
  const langListRef = useRef<ElementsListHandle>(null);
  const router = useRouter();
  const path = usePathname();

  const locales = [
    { title: "العربية", value: "ar" },
    { title: "English", value: "en" },
  ];

  const [isDarkMode, setIsDarkMode] = useState(false);

  function updateLang(item: ElementItem) {
    if (item.value) {
    
      router.push(toLocalePath(path, item.value));
    }
  }

  function setDarkMode() {
    setIsDarkMode((prev) => !prev);
    if(isDarkMode) {
      document.body.classList.remove("dark-theme");
      
    } else {
      document.body.classList.add("dark-theme");
    }
  } 
  return (
    <div className="prefs-btns">
      <div className="change-lang">
        <button
          className="small-btn lang"
          onClick={() => langListRef.current?.toggle()}
        >
          <i className="ri-earth-line"></i>
        </button>
        <ElementsList
          ref={langListRef}
          hidden={true}
          items={locales}
          onItemSelect={updateLang}
        />
      </div>
      <button className="small-btn mode" onClick={setDarkMode}>
        <i className={isDarkMode ? "ri-sun-line" : "ri-moon-clear-line"}></i>
      </button>
    </div>
  );
};

export default PrefsBtns;
