import React from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonImg,
  IonInput,
  IonPage,
  IonRippleEffect,
  IonTabBar,
  IonText,
  IonTitle,
} from "@ionic/react";

const Home: React.FC = () => {
  return (
    <div>
      <IonInput type="date" multiple ></IonInput>
      <IonButton title="Hello">Hello</IonButton>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>System</IonCardTitle>
          <IonCardSubtitle>Please</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
         <IonCardContent>
           <IonImg src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" ></IonImg>
           <IonText>Hii Bro I am a kqjs qsx qskjqdqwskkspiyush agrawal , My mother name in nirmala devi</IonText>
         </IonCardContent>
        </IonCardContent>
      </IonCard>
    </div>
  );
};

export default Home;
