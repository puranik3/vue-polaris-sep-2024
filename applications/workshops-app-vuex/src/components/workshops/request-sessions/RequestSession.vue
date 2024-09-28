<template lang="">
    <div>
        <h2>Request a new session</h2>
        <hr />
        <b-form @submit.prevent="requestToAddSession">
            <b-form-group
                label="Sequence ID"
                label-for="sequenceId"
            >
                <b-form-input
                    id="sequenceId"
                    v-model.number="form.sequenceId"
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

                <!-- Create an <error-messages> utility component that takes `field` prop which is passed $v.form.* where * is eg. 'speaker'. It displays the errors using v-for (whcih can iterate through object properties as well) -->
                <small v-if="$v.form.speaker.$error" class="text-danger">
                    <div v-if="!$v.form.speaker.required">This field is required</div>
                    <div v-if="!$v.form.speaker.nameValue">Speaker name can have only letters and spaces</div>
                </small>
            </b-form-group>

            <b-form-group label="Duration" label-for="duration">
                <b-form-input
                    id="duration"
                    v-model.number="form.duration"
                    @blur="$v.form.duration.$touch()"
                ></b-form-input>
                <small v-if="$v.form.duration.$error" class="text-danger">
                    <div v-if="!$v.form.duration.required">This field is required</div>
                    <div v-if="!$v.form.duration.decimal">Should be a decimal value</div>
                </small>
            </b-form-group>

            <b-form-group label="Level" label-for="level">
                <b-form-select
                    id="level"
                    :options="levels"
                    v-model="form.level"
                    @blur="$v.form.level.$touch()"
                ></b-form-select>
                <small v-if="$v.form.level.$error" class="text-danger">
                    <div v-if="!$v.form.level.required">This field is required</div>
                </small>
            </b-form-group>

            <b-form-group label="Abstract" label-for="abstract">
                <b-form-textarea
                    id="abstract"
                    rows="3"
                    max-rows="6"
                    v-model="form.abstract"
                    @blur="$v.form.abstract.$touch()"
                ></b-form-textarea>
                <small v-if="$v.form.abstract.$error" class="text-danger">
                    <div v-if="!$v.form.abstract.required">This field is required</div>
                    <div v-if="!$v.form.abstract.minLength">Should have at least 20 characters</div>
                </small>
            </b-form-group>

            <!-- {{ $v.form }} -->

            <b-button type="submit" variant="primary" :disabled="$v.form.$invalid">Request new session</b-button>
        </b-form>
    </div>
</template>

<script>
import { /*alpha, alphaNum,*/ decimal, minLength, minValue, required } from 'vuelidate/lib/validators';
import Validators from '@/services/validators';

import { requestNewSession } from '@/services/sessions';

export default {
    name: 'RequestSession',
    data() {
        return {
            form: {
                sequenceId: 1,
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
        async requestToAddSession() {
            if (this.$v.form.$invalid) {
                this.$v.form.$touch(); // trigger validation on entire form
                return; // don't proceed
            }

            // all good!
            const session = {
                ...this.form,
                workshopId: +this.$route.params.id,
                upvoteCount: 0
            };

            console.log(session);

            try {
                // ideally we could move this backend call to the parent, i.e. in WorkshopDetails
                const updatedSession = await requestNewSession(session);

                // inform the parent
                this.$emit('sessionAdd', {
                    session: updatedSession
                });

                // redirect user
                this.$router.push({
                    name: 'sessions-list'
                });

                // show a toast message
            } catch (error) {
                // show a toast and clear out the fields
                // ...

                alert(error.message);
            }
        }
    }
}
</script>

<style lang="">

</style>