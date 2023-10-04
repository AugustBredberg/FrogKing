import { FROG_ELEMENT_ENUM } from '../items';

export interface ITooltip {
  header?: string;
  positiveText?: string[];
  negativeText?: string[];
  body?: string;
  effect?: string[];
  price?: number;
  image?: string;
  itemId?: number;
  type?: string;
}

export interface IItemTooltip extends ITooltip {}

export interface ITargetTooltip extends ITooltip {
  validTarget?: boolean;
  name?: string;
  frogId?: string;
}
export interface IKingPowerUpTooltip extends ITooltip {
  name?: string;
}

export interface IFrogTooltip extends ITooltip {
  name: string;
  frogId?: string;
  description: string;
  image: string;
  level: number;
  tps: number;
  evolveCost?: number;
  evolveStage: number;
  evolvesInto?: string;
  elements?: { [id: string]: number };
  type: string;
}

export interface IPassiveTooltip extends ITooltip {
  element: FROG_ELEMENT_ENUM;
  description?: string;
  amount: number;
}

export interface ITooltipActions {
  primaryAction: () => void;
  secondaryAction: () => void;
}

export enum TooltipPosition {
  ABOVE = 'above',
  BELOW = 'below',
  LEFT = 'left',
  RIGHT = 'right',
  DEFAULT = 'above',
  DYNAMIC = 'dynamic',
  DYNAMICLEFT = 'dynamicleft',
  DYNAMICRIGHT = 'dynamicright',
  DYNAMICUNDER = 'dynamicunder',
}
