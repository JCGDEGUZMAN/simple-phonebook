<template>
    <div v-if="!isContactsShow">
        <b-alert 
            :show="dismissCountDown"
            :variant="variantType"
            @dismissed="dismissCountDown=0"
            @dismiss-count-down="countDownChanged"
        >
            {{ alertMessage }}
        </b-alert>
        <div class="form-box m-3 p-4 border rounded-3">
            <div class="h3 fw-bold">{{isEditContact ? 'EDIT CONTACT' : 'NEW CONTACT' }}</div>
            <b-form @submit="onSubmit" @reset="onReset">
                <b-form-group
                    id="input-group-1"
                    label="Name"
                    label-for="input-1"
                    class="mt-3 text-start fw-bold"
                >
                    <b-form-input
                        id="input-1"
                        v-model="form.name"
                        placeholder="Name"
                        required
                    >
                    </b-form-input>
                </b-form-group>
                <b-form-group
                    id="input-group-1"
                    label="Phone No."
                    label-for="input-1"
                    class="mt-3 text-start fw-bold"
                >
                    <b-form-input
                        id="input-1"
                        v-model="form.phone_no"
                        placeholder="Phone Number"
                        type="number"
                        required
                    >
                    </b-form-input>
                </b-form-group>
                <div class="fluid">
                    <b-button class="m-3" type="submit" variant="primary">{{ isEditContact ? 'Update' : 'Save' }}</b-button>
                    <b-button class="m-3" type="reset" variant="danger">Reset</b-button>
                </div>
            </b-form>
        </div>
    </div>
</template>

<script>
import { addContact } from '../actions/contacts.js';

export default {
    name: 'ContactForm',
    props: ['isContactsShow','isEditContact','editData', 'handleGetContacts'],
    data() {
        return {
            alertMessage: '',
            variantType: null,
            dismissSecs: 3,
            dismissCountDown: 0,
            form: {
                phone_no: this.isEditContact ? this.editData.phone_no : '',
                name: this.isEditContact ? this.editData.name : '',
            },
        }
    },
    methods: {
        async onSubmit(event) {
            event.preventDefault()

            const data = this.form;

            const isCreated = await addContact(data);

            if(isCreated)
            {
                this.handleAlertState('Contact Saved!', 'success');
                this.form.phone_no = ''
                this.form.name = ''
                this.handleGetContacts();
            }
            else
            {
                this.handleAlertState('Creation Failed!', 'danger');
            }
        },

        handleAlertState(message='', type) 
        {
            this.alertMessage = message;
            this.variantType = type;
            this.dismissCountDown = this.dismissSecs
        },

        countDownChanged(dismissCountDown) {
            this.dismissCountDown = dismissCountDown
        },

        onReset(event) {
            event.preventDefault()

            this.form.phone_no = ''
            this.form.name = ''
        },
    },
}
</script>

<style scoped>
.form-box {
    background-color: #fff;
}
</style>
