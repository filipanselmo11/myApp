<template>
  <ion-app>
    <ion-content :fullscreen="true">
      <ion-router-outlet />
    </ion-content>
    <!--  -->
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet, IonContent } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {
    IonApp,
    IonRouterOutlet,
    IonContent,
  },
});
</script>
