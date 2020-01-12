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

export const menuItemContent = {
  "Administrator": {
    "Policies": <div>Policies</div>,
    "Users": <div>Users</div>,
  },
  "Advisor": {
    "Clients": <div>Clients</div>,
    "Policies": <div>Policies</div>,
    "Profile": <div>Profile</div>,
  },
  "Client": {
    "Policies": <div>Policies</div>,
    "Profile": <div>Profile</div>,
    "Your Advisor": <div>Your Advisor</div>,
  },  
}

export const ICONS = {
  "Policies": <Description/>,
  "Users": <RecentActors/>,
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
