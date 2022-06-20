<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Icon Page</ion-title>
      </ion-toolbar>
    </ion-header>
    <br />
    <ion-content>
      <!-- <ion-icon :icon="heart"></ion-icon> -->
      <ion-icon icon="logoAndroid"></ion-icon>
    </ion-content>
  </ion-page>
</template>

<script>
// import { logoApple, logoAndroid } from "ionicons/icons";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonIcon,
} from "@ionic/vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "IconPage",
  components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon },
  setup() {
    return {
      //   heart,
    //   logoApple,
    //   logoAndroid,
    };
  },
});
</script>

<style></style>
