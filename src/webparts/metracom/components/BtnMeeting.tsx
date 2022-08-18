import * as React from 'react';
import styles from './Metracom.module.scss';
import { IContextualMenuProps } from '@fluentui/react';
import { DefaultButton } from '@fluentui/react/lib/Button';

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
        key: 'Late',
        text: 'En retard',
        iconProps: { iconName: 'Clock' },
      },
      {
        key: 'Finished',
        text: 'Terminées',
        iconProps: { iconName: 'CheckMark' },
      },
    ],
  };

export function BtnMeeting() {

  const handleMeeting = (e) => {
    e.preventDefault()
    console.log(BtnMeeting);
}
  
    return (
        <DefaultButton onClick={handleMeeting}
          text="Voir les réunions"
          split
          splitButtonAriaLabel="See 4 options"
          aria-roledescription="split button"
          menuProps={menuProps}
          className={styles.btnMeeting}
        />
    );
  };