import * as React from 'react';
import { DefaultButton } from '@fluentui/react/lib/Button';
import { IContextualMenuProps } from '@fluentui/react';

const menuProps: IContextualMenuProps = {
    items: [
      {
        key: 'newMeeting',
        text: 'Nouvelle',
        iconProps: { iconName: 'Flag' },
      },
      {
        key: 'inProgress',
        text: 'En cours',
        iconProps: { iconName: 'ConstructionCone' },
      },
      {
        key: 'Finished',
        text: 'Terminées',
        iconProps: { iconName: 'CheckMark' },
      },
      {
        key: 'Late',
        text: 'En retard',
        iconProps: { iconName: 'Clock' },
      },
    ],
  };

export function BtnMeeting() {
  
    return (
        <DefaultButton
          text="Réunion"
          split
          splitButtonAriaLabel="See 4 options"
          aria-roledescription="split button"
          menuProps={menuProps}
        />
    );
  };