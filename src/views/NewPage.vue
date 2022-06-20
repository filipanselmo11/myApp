<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <!-- <ion-buttons slot="start">
            </ion-buttons> Depreciado-->
        <ion-buttons>
          <ion-back-button default-href="/home"></ion-back-button>
        </ion-buttons>
        <ion-title>New Page</ion-title>
      </ion-toolbar>
    </ion-header>
    <br />
    <ion-content ref="content">
      <ion-button @click="scrollToBottom">Scroll to Bottom</ion-button>
    </ion-content>
  </ion-page>
  <!-- <ion-app></ion-app> -->
</template>

<script lang="ts">
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
} from "@ionic/vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "NewPage",
  components: {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
  },
  setup() {
    const content = ref();
    const scrollToBottom = () => {
      content.value.$el.scrollToBottom(300);
    };

    return { content, scrollToBottom };
  },
  //   methods:{

  //   },
});
</script>

<style></style>
