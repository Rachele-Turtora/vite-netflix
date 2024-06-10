<script>
export default {
    name: "CardsComponent",
    props: ["img", "title", "original_title", "language", "vote", "overview"],
    data() {
        return {
            langs: {
                en: ["en", "england"],
                it: ["it", "italy"],
                es: ["es", "spain"],
                ja: ["ja", "japan"],
                fr: ["fr", "france"],
                de: ["de", "germany"]
            },
            displayInfo: false
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

        display() {
            this.displayInfo = !this.displayInfo
        }
    },

    computed: {
        voteInStars() {
            return Math.round(this.vote / 2);
        }
    }
}

</script>

<template>
    <li @click="display()">
        <img class="poster" v-show="!displayInfo" :src="img" :alt="title">
        <div class="info" v-show="displayInfo">
            <p><strong>Titolo:</strong> {{ title }}</p>
            <p><strong>Titolo originale:</strong> {{ original_title }}</p>
            <div>
                <img class="flag" v-if="findLang(language)" :src="`/img/${findLang(language)[1]}_flag.png`" :alt="language">
                <p v-else>{{ language }}</p>
            </div>
            <div><strong>Voto:</strong>
                <span v-for="star in 5">
                    <i :class="star <= voteInStars ? 'fa fa-star' : 'fa fa-star-o'" aria-hidden="true"></i>
                </span>
            </div>
            <p><strong>Overview:</strong> {{ overview }}</p>
        </div>
    </li>
</template>

<style scoped>
li {
    margin: 0 15px;
    flex-shrink: 0;
    max-width: 185px;
    max-height: 278px;
    overflow-y: auto;
}

p {
    margin: 10px 0;
}

.flag {
    width: 50px;
    height: 50px;
}

.poster {
    height: 278px;
}

.fa-star,
.fa-star-o {
    color: rgb(235, 200, 0);
    margin: 2px;
}

.info {
    background-color: rgba(0, 0, 0);
    color: white;
    padding: 10px;
}
</style>