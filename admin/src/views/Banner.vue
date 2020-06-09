<template>
  <div style="width:100%">
    <v-btn class="mb-8" dark color="indigo">
      <v-icon dark>mdi-plus</v-icon>
      添加Banner
    </v-btn>
    <v-card min-width="100%">
      <v-card-title>
        Banners列表
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table :headers="{}" :items="[]" :search="{}"></v-data-table>
    </v-card>
  </div>
</template>

<script lang="ts">
export default {}
</script>
