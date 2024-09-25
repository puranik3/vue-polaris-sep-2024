<template lang="">
    <div>
        <h2>Request a new session</h2>
        <hr />
        <b-form @submit.prevent="requestSession">
            <b-form-group
                label="Sequence ID"
                label-for="sequenceId"
            >
                <b-form-input
                    id="sequenceId"
                    v-model="form.sequenceId"
                    type="text"
                ></b-form-input>
            </b-form-group>

            <b-form-group label="Name" label-for="name">
                <b-form-input
                    id="name"
                    v-model="form.name"
                ></b-form-input>
            </b-form-group>

            <b-form-group label="Speaker" label-for="speaker">
                <b-form-input
                    id="speaker"
                    v-model="form.speaker"
                ></b-form-input>
            </b-form-group>

            <b-form-group label="Duration" label-for="duration">
                <b-form-input
                    id="duration"
                    v-model="form.duration"
                ></b-form-input>
            </b-form-group>

            <b-form-group label="Level" label-for="level">
                <b-form-select
                    id="level"
                    v-model="form.level"
                    :options="levels"
                ></b-form-select>
            </b-form-group>

            <b-form-group label="Abstract" label-for="abstract">
                <b-form-textarea
                    id="abstract"
                    v-model="form.abstract"
                    rows="3"
                    max-rows="6"
                    ></b-form-textarea>
            </b-form-group>

            <b-button type="submit" variant="primary">Request new session</b-button>
        </b-form>
    </div>
</template>

<script>
export default {
    name: 'RequestSession',
    data() {
        return {
            form: {
                sequenceId: '',
                name: '',
                speaker: '',
                duration: 0,
                level: 'Basic',
                abstract: ''
            },
            levels: [
                'Basic',
                'Intermediate',
                'Advanced'
            ]
        }
    },
    methods: {
        requestSession() {

        }
    }
}
</script>

<style lang="">

</style>