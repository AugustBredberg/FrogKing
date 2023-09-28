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

export interface IFrogTooltip extends ITooltip {
  name: string;
  description: string;
  image: string;
  level: number;
  tps: number;
  tadpolesProduced: number;
  evolveCost?: number;
  evolveStage: number;
  evolvesInto?: string;
  elements?: { [id: string]: number };
  type: string;
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
