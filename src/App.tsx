import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonContent,
  IonHeader,
  IonMenu,
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

// icons

import {
  homeOutline,
  documentTextOutline,
  informationCircleOutline
} from 'ionicons/icons';
import SidebarButton from './components/SidebarButton';

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
            <div className="flex flex-row justify-center items-center min-h-[55px]">
              <IonTitle>Menu</IonTitle>
            </div>
          </IonToolbar>
        </IonHeader>

        {/* Sidebar Buttons */}

        <IonContent className="ion-padding">
          <SidebarButton routerLink="/home" icon={homeOutline} text="Home" />
          <SidebarButton
            routerLink="/ticket"
            icon={informationCircleOutline}
            text="Submit a ticket"
          />
          <SidebarButton
            routerLink="/forms"
            icon={documentTextOutline}
            text="Forms"
          />
        </IonContent>
      </IonMenu>

      {/* Pages */}

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
