import React from 'react';
import MainHeader from '../../components/MainHeader';
import { IonContent, IonPage } from '@ionic/react';

const FormApplication: React.FC = () => {
  return (
    <IonPage>
      <MainHeader />
      <IonContent>
        <p>Hello World</p>
      </IonContent>
    </IonPage>
  );
};

export default FormApplication;
