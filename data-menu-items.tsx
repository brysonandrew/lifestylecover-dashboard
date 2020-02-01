import React from "react"
import {
  People,
  Info,
  AccountCircle,
  RecentActors,
  FileCopy,
  Pets,
  AccountBalance,
  Home,
  Timeline,
  QuestionAnswer,
} from "@material-ui/icons"
import { EMenuItem } from "./models/layout"

export const STATIC_MENU_ITEMS = {
  administrator: [
    EMenuItem.Profile,
    EMenuItem.PoliciesAll,
    EMenuItem.Users
  ],
  advisor: [
    EMenuItem.Profile,
    EMenuItem.Clients,
    EMenuItem.PoliciesAll
  ],
  client: [
    EMenuItem.Profile,
    EMenuItem.MyAdvisor
  ],
}

export const MENU_ITEM_ICONS = {
  [EMenuItem.PoliciesAll]: <FileCopy />,
  [EMenuItem.PolicyRisk]: <Timeline />,
  [EMenuItem.PolicyAsset]: <Home />,
  [EMenuItem.PolicyKiwisaver]: <AccountBalance />,
  [EMenuItem.PolicyPet]: <Pets />,
  [EMenuItem.Users]: <RecentActors />,
  [EMenuItem.Clients]: <People />,
  [EMenuItem.Profile]: <AccountCircle />,
  [EMenuItem.MyAdvisor]: <QuestionAnswer />,
}
