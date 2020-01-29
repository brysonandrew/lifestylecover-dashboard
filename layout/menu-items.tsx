import React from "react"
import {
  People,
  Info,
  AccountCircle,
  RecentActors,
  Description,
  FileCopy,
  Pets,
  AccountBalance,
  Home,
  Timeline,
} from "@material-ui/icons"

export const STATIC_MENU_ITEMS = {
  administrator: ["Profile", "Policies All", "Users"],
  advisor: ["Profile", "Clients", "Policies All"],
  client: ["Profile", "Your Advisor"],
}

export const MENU_ITEM_ICONS = {
  "Policies All": <FileCopy />,
  PolicyRisk: <Timeline />,
  PolicyAsset: <Home />,
  PolicyKiwisaver: <AccountBalance />,
  PolicyPet: <Pets />,
  Users: <RecentActors />,
  Clients: <People />,
  Profile: <AccountCircle />,
  "Your Advisor": <Info />,
}
