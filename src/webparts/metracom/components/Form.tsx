import * as React from 'react';
import { TextField } from '@fluentui/react/lib/TextField';
import { DefaultButton } from '@fluentui/react/lib/Button';

export function Form() {
    return (
        <form>
          <TextField label="Objet" required />
          <TextField label="Ordre du jour" required />
          <TextField label="Organisateur" required />
          <TextField label="Nom du projet" required />
          <TextField label="Client" required />
          <TextField label="Participants" required />
          <TextField label="Etat" required />
          <br />
          <DefaultButton text="Valider le formulaire" />
        </form>
    )
  };