import * as React from 'react';
import styles from './Metracom.module.scss';
import { IMetracomProps } from './IMetracomProps';
import { Welcome } from './Welcome';

export default class Metracom extends React.Component<IMetracomProps, {}> {
  public render(): React.ReactElement<IMetracomProps> {
    const {
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
      <section className={`${styles.metracom} ${hasTeamsContext ? styles.teams : ''}`}>
        <div className={styles.welcome}>
          <Welcome context={this.props.context} userDisplayName={userDisplayName}/>
        </div>
      </section>
    );
  }
}
