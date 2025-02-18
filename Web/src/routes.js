// Admin Imports
import TranslatePage from "views/Translate";

import UnicodeConverter from "views/unicodeConverter";
import home from "components/home/home";

// Icon Imports
import DictionaryPage from "views/dictionary";
import {Home, LayoutGrid} from 'lucide-react';
import {Webhook} from 'lucide-react';
import {Book} from 'lucide-react';
import HomePage from "components/home/home";

const routes = [
  {
    name: "Home",
    layout: "/home",
    path: "home",
    component: <HomePage />,
  },
  {
    name: "Sinhala to English",
    layout: "/home",
    path: "",
    icon: <LayoutGrid className="h-6 w-6"/>,
    component: <TranslatePage />,
  },
  {
    name: "Dictionary",
    layout: "/home",
    path: "dictionary",
    icon: <Book className="h-6 w-6" />,
    component: <DictionaryPage />,
  },
  {
    name: "Unicode Converter",
    layout: "/home",
    path: "unicode",
    icon: <Webhook className="h-6 w-6" />,
    component: <UnicodeConverter />,
  },
];
export default routes;
