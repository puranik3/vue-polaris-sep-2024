<template lang="html">
    <div>
        <b-jumbotron header="Workshops App"
            lead="The Workshops application serves details of (fictitious) technical workshops happening in various cities. Every workshop has a broad topic (eg. JavaScript), and a workshop has many sessions (each session covers a sub-topic, eg. Closures in JavaScript).">
            <p>
                You can view a list of workshops, details of every workshop, sessions in a workshop, and also add a new
                session for a workshop.
            </p>
            <b-button tovariant="primary" to="/workshops">Check out nearby workshops</b-button>
        </b-jumbotron>
    </div>
</template>

<script>
export default {
    name: 'AppHome'
}
</script>

<style lang="scss"></style>