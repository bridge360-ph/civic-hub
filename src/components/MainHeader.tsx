import {
  IonAvatar,
  IonButtons,
  IonHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar
} from '@ionic/react';

const MainHeader = () => {
  return (
    <IonHeader>
      <IonToolbar style={{ minHeight: '55px' }}>
        <div className="flex justify-between items-center min-h-[55px]">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle style={{ fontSize: '13px' }}>
            Civic Hub — Brgy. Marites
          </IonTitle>

          <IonAvatar className="overflow-hidden pr-3 w-11 h-8 rounded-full">
            <img
              alt="Silhouette of a person's head"
              src="https://ionicframework.com/docs/img/demos/avatar.svg"
              className="block object-cover w-full h-full"
              style={{ borderRadius: '50%' }}
            />
          </IonAvatar>
        </div>
      </IonToolbar>
    </IonHeader>
  );
};

export default MainHeader;
