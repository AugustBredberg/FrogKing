export interface ITooltip {
  header: string;
  body: string;
  effect?: string[];
  price?: number;
  itemId?: number;
  primaryActionText: string;
  secondaryActionText: string;
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
  DYNAMICUNDER = 'dynamicunder',
}
