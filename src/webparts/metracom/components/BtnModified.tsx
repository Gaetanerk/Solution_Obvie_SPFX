import * as React from 'react';
import { IIconProps } from '@fluentui/react';
import { ActionButton } from '@fluentui/react/lib/Button';

export function BtnModified() {
      
      const addFriendIcon: IIconProps = { iconName: 'Edit' };
        
      return (
        <ActionButton iconProps={addFriendIcon}>
          Modifier
        </ActionButton>
      );
    };