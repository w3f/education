<template>
    <v-app-bar :elevation="2">
        <v-img class="mx-2" src="../assets/w3f_logo.svg" max-height="40" max-width="40" contain>
        </v-img>
        <v-app-bar-title class="ma-0 font-weight-bold">Education | Resources</v-app-bar-title>
        <template class="ma-5" v-slot:append>
            <v-chip class="ma-2" prepend-icon="mdi-github" href="https://github.com/w3f/education" target="_blank">
                View on GitHub
            </v-chip>
        </template>
    </v-app-bar>
</template>