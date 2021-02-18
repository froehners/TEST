import DefaultLayout from "~/layouts/Default.vue";
import settings from "../data/theme.json";

import "@/assets/code-highlight.css"

export default function(Vue, { head }) {
  Vue.component("Layout", DefaultLayout);
  head.bodyAttrs = {
    class: settings.dark_mode ? "dark" : ""
  };

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,500;0,700;1,500;1,700&family=Pirata+One&display=swap'
  })
}
