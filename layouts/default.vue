<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      app
      class="no-scroll"
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="miniVariant = !miniVariant" />
      <v-icon style="color: red;">{{ icon }}</v-icon>
      <v-toolbar-title class="header-title">{{ title }}</v-toolbar-title>

      <v-spacer></v-spacer>

        <v-text-field
          v-model="searchText"
          placeholder="Arama..."
          solo-inverted
          hide-details
        ></v-text-field>
        
    </v-app-bar>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      fixed: true, 
      items: [
      {
          icon: 'mdi-home',
          title: 'Ana Sayfa',
          to: '/'
        },
        {
          icon: 'mdi-slack',
          title: 'Shorts',
          to: '/shorts'
        },
        {
          icon: 'mdi-arrow-right-drop-circle',
          title: 'Abonelikler',
          to: '/abonelikler'
        },
        {
          icon: 'mdi-video',
          title: 'Originals',
          to: '/originals'
        },
        {
          icon: 'mdi-bullseye',
          title: 'Youtube Music',
          to: '/youtube-music'
        },
        {
          icon: 'mdi-skip-next-circle-outline',
          title: 'Kitaplık',
          to: '/kitaplik'
        },
        {
          icon: 'mdi-compass',
          title: 'Geçmiş',
          to: '/gecmis'
        },
        {
          icon: 'mdi-play-box-outline',
          title: 'Videolarınız',
          to: '/videolariniz'
        },
        {
          icon: 'mdi-timer',
          title: 'Daha Sonra İzle',
          to: '/daha-sonra-izle'
        },
        {
          icon: 'mdi-download',
          title: 'İndirilenler',
          to: '/indirilenler'
        },
        {
          icon: 'mdi-thumb-up',
          title: 'Beğendiğim Videolar',
          to: '/begendigim-videolar'
        }
      ],
      miniVariant: true, 
      icon: 'mdi-youtube',
      title: 'Youtube'
    }
  }
}
</script>

<style>
.no-scroll .v-navigation-drawer__content {
  overflow-y: hidden;
}

.no-scroll .v-list-item {
  overflow: hidden;
}

.no-scroll .v-list-item__content {
  overflow: visible;
}


.header-title {
  width: 100%;
}

.v-toolbar__content {
  justify-content: center;
}
</style>