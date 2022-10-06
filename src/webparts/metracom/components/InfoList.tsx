import * as React from 'react';
import { IContextualMenuProps } from '@fluentui/react';
import { DefaultButton } from '@fluentui/react/lib/Button';

export function InfoList(props) {

    const menuProps: IContextualMenuProps = {
        items: [
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

    return (
        <div>
         <h1>Détail de réunion :</h1>
           <DefaultButton 
            text="Modifier l'état"
            menuProps={menuProps} />
        </div>
    )
}