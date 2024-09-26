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
                    @blur="$v.form.sequenceId.$touch()"
                    type="text"
                ></b-form-input>
                <small v-if="$v.form.sequenceId.$error" class="text-danger">
                    <div v-if="!$v.form.sequenceId.required">This field is required</div>
                    <div v-if="!$v.form.sequenceId.minValue">Minimum value is 1</div>
                </small>
            </b-form-group>

            <b-form-group label="Name" label-for="name">
                <b-form-input
                    id="name"
                    v-model="form.name"
                    @blur="$v.form.name.$touch()"
                ></b-form-input>
                <small v-if="$v.form.name.$error" class="text-danger">
                    <div v-if="!$v.form.name.required">This field is required</div>
                    <div v-if="!$v.form.name.nameValue">Name can have only letters and spaces</div>
                </small>
            </b-form-group>

            <b-form-group label="Speaker" label-for="speaker">
                <b-form-input
                    id="speaker"
                    v-model="form.speaker"
                    @blur="$v.form.speaker.$touch()"
                ></b-form-input>
            </b-form-group>

            <b-form-group label="Duration" label-for="duration">
                <b-form-input
                    id="duration"
                    v-model="form.duration"
                    @blur="$v.form.duration.$touch()"
                ></b-form-input>
            </b-form-group>

            <b-form-group label="Level" label-for="level">
                <b-form-select
                    id="level"
                    :options="levels"
                    v-model="form.level"
                    @blur="$v.form.level.$touch()"
                ></b-form-select>
            </b-form-group>

            <b-form-group label="Abstract" label-for="abstract">
                <b-form-textarea
                    id="abstract"
                    rows="3"
                    max-rows="6"
                    v-model="form.abstract"
                    @blur="$v.form.abstract.$touch()"
                    ></b-form-textarea>
            </b-form-group>

            {{ $v.form }}

            <b-button type="submit" variant="primary">Request new session</b-button>
        </b-form>
    </div>
</template>

<script>
import { /*alpha, alphaNum,*/ decimal, minLength, minValue, required } from 'vuelidate/lib/validators';
import Validators from '@/services/validators';

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
    validations: {
        form: {
            sequenceId: {
                // required: required
                required,
                minValue: minValue(1)
            },
            name: {
                required,
                // alphaNum,

                nameValue: Validators.nameValue
            },
            speaker: {
                required,
                nameValue: Validators.nameValue
            },
            duration: {
                required,
                decimal
            },
            level: {
                required
            },
            abstract: {
                required,
                minLength: minLength(20)
            }
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