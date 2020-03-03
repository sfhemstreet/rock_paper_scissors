import 'styled-components';
import MasterTheme from './themes/MasterTheme';

type Theme = typeof MasterTheme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}