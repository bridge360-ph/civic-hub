import { IonButton, IonIcon, IonMenuToggle } from '@ionic/react';
import React from 'react';

type ButtonProps = {
  routerLink: string;
  icon: string;
  text: string;
};

const SidebarButton = ({ routerLink, icon, text }: ButtonProps) => (
  <div className="w-full flex flex-row items-start min-w-full border-b border-gray-600">
    <IonMenuToggle autoHide={false}>
      <IonButton
        expand="full"
        routerLink={routerLink}
        fill="clear"
        className="ion-align-items-start ion-justify-content-start"
        style={{
          padding: '10px 0'
        }}
        size="small"
      >
        <IonIcon slot="start" icon={icon} className="mr-3"></IonIcon>{' '}
        <span className="text-left">{text}</span>
      </IonButton>
    </IonMenuToggle>
  </div>
);

export default SidebarButton;
