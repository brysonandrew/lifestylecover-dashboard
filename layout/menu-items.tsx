import React from 'react'
import {People, Info, AccountCircle, RecentActors, Description, FileCopy} from '@material-ui/icons';

export const menuItems = {
  "administrator": [
    "Profile",
    "Policies",
    "Users"
  ],
  "advisor": [
    "Profile",
    "Clients",
    "Policies",
  ],
  "client": [
    "Profile",
    "Policies",
    "Your Advisor"
  ],  
}

export const ICONS = {
  "Policies": (
    <FileCopy/>
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
