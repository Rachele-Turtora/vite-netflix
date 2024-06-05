<script>
export default {
    name: "CardsComponent",
    props: ["img", "title", "original_title", "language", "vote"],
    data() {
        return {
            langs: {
                en: ["en", "england"],
                it: ["it", "italy"],
                es: ["es", "spain"],
                ja: ["ja", "japan"],
                fr: ["fr", "france"],
                de: ["de", "germany"]
            }
        }
    },

    methods: {
        findLang(language) {
            for (let key in this.langs) {
                if (this.langs[key][0] === language) {
                    return this.langs[key];
                }
            }
        },
    }
}

</script>

<template>
    <li>
        <img :src="img" :alt="title">
        <p>{{ title }}</p>
        <p>{{ original_title }}</p>
        <div>
            <img class="flag" v-if="findLang(language)" :src="`/img/${findLang(language)[1]}_flag.png`" :alt="language">
            <p v-else>{{ language }}</p>
        </div>
        <p>{{ vote }}</p>
    </li>
</template>

<style scoped>
li {
    width: calc(25% - 40px);
    margin: 20px 15px 20px 0;
    border: 1px solid black;
    padding-left: 5px;
}

p {
    padding: 5px 0;
}

.flag {
    width: 50px;
    height: 50px;
}
</style>