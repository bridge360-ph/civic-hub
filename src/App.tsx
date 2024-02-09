import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonAvatar,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonMenu,
  IonMenuButton,
  IonMenuToggle,
  IonNavLink,
  IonPage,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/home/Home';
import Ticket from './pages/ticket/Ticket';
import FormApplication from './pages/form-application/FormApplication';

import './index.css';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonMenuToggle autoHide={false}>
            <IonButton
              expand="block"
              routerLink="/home"
              size="small"
              fill="clear"
              style={{ borderBottom: '1px solid #555', padding: '5px 0' }}
            >
              Home
            </IonButton>
          </IonMenuToggle>
          <IonMenuToggle autoHide={false}>
            <IonButton
              expand="block"
              routerLink="/ticket"
              size="small"
              fill="clear"
              style={{ borderBottom: '1px solid #555', padding: '5px 0' }}
            >
              Submit a ticket
            </IonButton>
          </IonMenuToggle>
          <IonMenuToggle autoHide={false}>
            <IonButton
              expand="block"
              routerLink="/forms"
              size="small"
              fill="clear"
              style={{ borderBottom: '1px solid #555', padding: '5px 0' }}
            >
              Forms
            </IonButton>
          </IonMenuToggle>
        </IonContent>
      </IonMenu>

      <IonPage id="main-content">
        <IonContent>
          <IonRouterOutlet>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/ticket">
              <Ticket />
            </Route>
            <Route exact path="/forms">
              <FormApplication />
            </Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </IonRouterOutlet>
        </IonContent>
      </IonPage>
    </IonReactRouter>
  </IonApp>
);

export default App;
