import "server-only";

const dictionaries = {
  ar: () => import("@/lang/ar.json").then((module) => module.default),
  en: () => import("@/lang/en.json").then((module) => module.default),
};

export const getDictionary = async (locale: "ar" | "en") => {
  const loader = dictionaries[locale];
  if (typeof loader !== "function") {
    throw new Error(`No dictionary found for locale: ${locale}`);
  }
  return loader();
};
