import { IonItem, IonNote, IonInput, IonLabel, IonCheckbox, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

const SubmitPushups: React.FC = () => {
    return <form className="ion-padding">
        <IonHeader>Submit New Push-Ups</IonHeader>
        <IonItem>
            <IonLabel position="floating">Quantity</IonLabel>
            <IonInput />
        </IonItem>
        <IonButton className="ion-margin-top" type="submit" expand="block">
            Submit
        </IonButton>
    </form>;
};

export default SubmitPushups