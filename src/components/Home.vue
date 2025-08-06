<template>
    <v-row class="ma-5">
        <v-col cols="12" sm="4" class="mb-4" v-for="link in links" :key="link.text">
            <v-card class="mx-auto d-flex flex-column" :subtitle="link.subtitle" link :href="link.url" target="_blank"
                height="100%">
                <template v-slot:title>
                    <span class="font-weight-black">{{ link.title }}</span>
                </template>
                <v-card-text class="pt-4">
                    {{ link.text }}
                </v-card-text>
                <v-spacer></v-spacer>
                <v-card-actions>
                    <v-btn text="See More" full append-icon="mdi-arrow-right"></v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<style>
.v-card,
.v-chip {
    transition: transform 0.3s, background-color 0.1s !important;
}

.v-card:hover,
.v-chip:hover {
    transform: scale(1.05) !important;
    background-color: rgba(0, 0, 0, 1);
    color: white;
}
</style>

<script setup lang="ts">
interface CardContent {
    title: string;
    subtitle: string;
    text: string;
    url: string;
}

const links: CardContent[] = [
    {
        title: "Polkadot Wiki",
        subtitle: "The source of truth for the Polkadot Ecosystem",
        text: "Since 2019, the Polkadot Wiki has been the source of truth for the Polkadot ecosystem. It has been built for the curious, the enthusiasts, and the developers seeking the truth about Polkadot.",
        url: "https://wiki.polkadot.com/"
    },
    {
        title: "Polkadot Blockchain Academy",
        subtitle: "World-class, In-Person Blockchain Education",
        text: "The Polkadot Blockchain Academy is setting the global standard in blockchain education.",
        url: "https://polkadot.academy/"
    },
    {
        title: "PBA-X",
        subtitle: "Online Blockchain Education",
        text: "PBA-X is a flexible, part time, 4 week, cohort based, online blockchain course for anyone who wants to understand blockchain technology properly.",
        url: "https://pbax.polkadot.academy/"
    },
    {
        title: "DotCodeSchool",
        subtitle: "Learn to Code Web3 Apps by Building Real Projects.",
        text: "Dot Code School is an interactive online school that teaches you how to build meaningful web3 applications using the Polkadot SDK.",
        url: "https://dotcodeschool.com/"
    },
    {
        title: "Polkadot Documentation",
        subtitle: "Your complete guide to building on Polkadot",
        text: "Your launchpad for all things Polkadot—access tools, guides, and resources to quickly start building custom chains, deploying smart contracts, and creating dApps.",
        url: "https://docs.polkadot.com/"
    },

    {
        title: "edX Courses - Introduction to Web3 & Polkadot",
        subtitle: "Free online courses from Web3 Foundation",
        text: "Build the foundational knowledge required to understand the latest developments in the blockchain space and web3.",
        url: "https://www.edx.org/school/web3x"
    },

    {
        title: "Web3Educhain Tutorials",
        subtitle: "Educating Web3 through Polkadot SDK",
        text: "Learn how to build your own custom blockchain using the Polkadot SDK through the example and development of Educhain.",
        url: "https://web3educhain.xyz/"
    }
];
</script>
