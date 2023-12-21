import { IonContent, IonNote, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Global Leaderboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Global Leaderboard</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonNote>Coming Soon!</IonNote>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
