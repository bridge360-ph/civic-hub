import {
  IonAvatar,
  IonButtons,
  IonHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import React from 'react';

const MainHeader = () => {
  return (
    <IonHeader>
      <IonToolbar>
        <div className="flex justify-between items-center">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Civic Hub — Brgy. Marites</IonTitle>

          <div className="w-17 h-17">
            <IonAvatar>
              <img
                alt="Silhouette of a person's head"
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              />
            </IonAvatar>
          </div>
        </div>
      </IonToolbar>
    </IonHeader>
  );
};

export default MainHeader;
