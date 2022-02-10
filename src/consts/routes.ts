import { Films } from "../pages/Films";
import { DetailFilms } from "../pages/Films/Detail";
import Home from "../pages/Home";
import { People } from "../pages/People";
import { Planets } from "../pages/Planets";
import { Starships } from "../pages/Starships";

export const NAVS = [
  {
    label: "Films",
    path: "/films",
    component: Films,
  },
  {
    label: "Planets",
    path: "/planets",
    component: Planets,
  },
  {
    label: "People",
    path: "/people",
    component: People,
  },
  {
    label: "Starships",
    path: "/staships",
    component: Starships,
  },
];

export const ALL_ROUTES = [
  {
    label: "Films",
    path: "/films",
    component: Films,
  },
  {
    label: "Films",
    path: "/films/:id",
    component: DetailFilms,
  },
  {
    label: "Planets",
    path: "/planets",
    component: Planets,
  },
  {
    label: "People",
    path: "/people",
    component: People,
  },
  {
    label: "Starships",
    path: "/staships",
    component: Starships,
  },
];
