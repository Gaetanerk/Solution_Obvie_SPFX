import * as React from 'react';
import styles from './Metracom.module.scss';
import { IMetracomProps } from './IMetracomProps';
import { escape } from '@microsoft/sp-lodash-subset';
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
          <img src={require('../images/logoMetracom.png')} />
          <h1>Application Réunion Metracom</h1>
          <h2>Bonjour, {escape(userDisplayName)} !</h2>
          <Welcome context={this.props.context}/>
        </div>
      </section>
    );
  }
}
