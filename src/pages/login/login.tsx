import {
    IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const Login: React.FC = () => {
  return (
    <div>
      <IonHeader>
        <IonToolbar>
          <IonTitle> Login</IonTitle>
        </IonToolbar>
      </IonHeader>
        <IonInput color="primary" prefix="Hii" type="email" ></IonInput>
        <IonButton>Hello</IonButton>
    </div>
  );
};

export default Login;
