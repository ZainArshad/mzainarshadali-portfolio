import React from 'react';

import { Theme } from '@mui/material';
import { PureLightTheme } from './schemes/PureLightTheme';
import { GreyGooseTheme } from './schemes/GreyGooseTheme';
import { NebulaFighterTheme } from './schemes/NebulaFighterTheme';
import { DarkSpacesTheme } from './schemes/DarkSpacesTheme';
import { PurpleFlowTheme } from './schemes/PurpleFlowTheme';
import { GreenFieldsTheme } from './schemes/GreenFieldsTheme';

const themeMap = {
  PureLightTheme,
  GreyGooseTheme,
  PurpleFlowTheme,
  NebulaFighterTheme,
  DarkSpacesTheme,
  GreenFieldsTheme
};

export function themeCreator(theme) {
  console.log('786 theme themeMap', theme, themeMap[theme]);
  return themeMap[theme];
}
