import React, { ReactElement } from 'react';
import IconList from 'bootstrap-icons/icons/list.svg';
import IconPlus from 'bootstrap-icons/icons/plus.svg';
import IconPencilSquare from 'bootstrap-icons/icons/pencil-square.svg';
import IconChevronRight from 'bootstrap-icons/icons/chevron-right.svg';
import IconChevronUp from 'bootstrap-icons/icons/chevron-up.svg';
import IconChevronDown from 'bootstrap-icons/icons/chevron-down.svg';
import IconArrowDownUp from 'bootstrap-icons/icons/arrow-down-up.svg';
import IconArrowLeftRight from 'bootstrap-icons/icons/arrow-left-right.svg';
import IconCheck from 'bootstrap-icons/icons/check.svg';
import IconThreeDots from 'bootstrap-icons/icons/three-dots.svg';
import IconExclamation from 'bootstrap-icons/icons/exclamation.svg';
import IconQuestion from 'bootstrap-icons/icons/question.svg';
import IconArrowUp from 'bootstrap-icons/icons/arrow-up.svg';
import IconTrash from 'bootstrap-icons/icons/trash.svg';
import IconDash from 'bootstrap-icons/icons/dash.svg';
import IconX from 'bootstrap-icons/icons/x.svg';
import IconClock from 'bootstrap-icons/icons/clock.svg';
import IconSave from 'bootstrap-icons/icons/save.svg';
import IconCalendar from 'bootstrap-icons/icons/calendar.svg';
import IconCalendarX from 'bootstrap-icons/icons/calendar-x.svg';
import IconCalendarCheck from 'bootstrap-icons/icons/calendar-check.svg';
import IconCalendarWeek from 'bootstrap-icons/icons/calendar-week.svg';

export const IList = ({ size }: IconProps): ReactElement => <IconList viewBox={viewBox} width={size} height={size} />;
export const IPlus = ({ size }: IconProps): ReactElement => <IconPlus viewBox={viewBox} width={size} height={size} />;
export const IPencilSquare =
  ({ size }: IconProps): ReactElement => <IconPencilSquare viewBox={viewBox} width={size} height={size} />;
export const IChevronRight =
  ({ size }: IconProps): ReactElement => <IconChevronRight viewBox={viewBox} width={size} height={size} />;
export const IArrowDownUp =
  ({ size }: IconProps): ReactElement => <IconArrowDownUp viewBox={viewBox} width={size} height={size} />;
export const IArrowLeftRight =
  ({ size }: IconProps): ReactElement => <IconArrowLeftRight viewBox={viewBox} width={size} height={size} />;
export const ICheck =
  ({ size }: IconProps): ReactElement => <IconCheck viewBox={viewBox} width={size} height={size} />;
export const IThreeDots =
  ({ size }: IconProps): ReactElement => <IconThreeDots viewBox={viewBox} width={size} height={size} />;
export const IExclamation =
  ({ size }: IconProps): ReactElement => <IconExclamation viewBox={viewBox} width={size} height={size} />;
export const IQuestion =
  ({ size }: IconProps): ReactElement => <IconQuestion viewBox={viewBox} width={size} height={size} />;
export const IArrowUp =
  ({ size }: IconProps): ReactElement => <IconArrowUp viewBox={viewBox} width={size} height={size} />;
export const ITrash =
  ({ size }: IconProps): ReactElement => <IconTrash viewBox={viewBox} width={size} height={size} />;
export const IChevronUp =
  ({ size }: IconProps): ReactElement => <IconChevronUp viewBox={viewBox} width={size} height={size} />;
export const IChevronDown =
  ({ size }: IconProps): ReactElement => <IconChevronDown viewBox={viewBox} width={size} height={size} />;
export const IDash =
  ({ size }: IconProps): ReactElement => <IconDash viewBox={viewBox} width={size} height={size} />;
export const IX =
  ({ size }: IconProps): ReactElement => <IconX viewBox={viewBox} width={size} height={size} />;
export const IClock =
  ({ size }: IconProps): ReactElement => <IconClock viewBox={viewBox} width={size} height={size} />;
export const ISave =
  ({ size }: IconProps): ReactElement => <IconSave viewBox={viewBox} width={size} height={size} />;
export const ICalendar =
({ size }: IconProps): ReactElement => <IconCalendar viewBox={viewBox} width={size} height={size} />;
export const ICalendarX =
({ size }: IconProps): ReactElement => <IconCalendarX viewBox={viewBox} width={size} height={size} />;
export const ICalendarCheck =
({ size }: IconProps): ReactElement => <IconCalendarCheck viewBox={viewBox} width={size} height={size} />;
export const ICalendarWeek =
({ size }: IconProps): ReactElement => <IconCalendarWeek viewBox={viewBox} width={size} height={size} />;

interface IconProps {
  size: IconSize;
}

export type IconSize = '8px' | '16px' | '24px' | '32px';
const viewBox = '0 0 16 16';