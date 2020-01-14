import React from 'react'
import {People, Info, AccountCircle, RecentActors, Description} from '@material-ui/icons';

export const menuItems = {
  "Administrator": [
    "Policies",
    "Users"
  ],
  "Advisor": [
    "Clients",
    "Policies",
    "Profile"
  ],
  "Client": [
    "Policies",
    "Profile",
    "Your Advisor"
  ],  
}

export const ICONS = {
  "Policies": (
    <Description/>
  ),
  "Users": (
    <RecentActors/>
  ),
  "Clients": (
    <People/>
  ),
  "Profile": (
    <AccountCircle/>
  ),
  "Your Advisor": (
    <Info/>
  )
}
