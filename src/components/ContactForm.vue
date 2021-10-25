<template>
    <div v-if="!isContactsShow">
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
export default {
    name: 'ContactForm',
    props: ['isContactsShow','isEditContact','editData'],
    data() {
        return {
            form: {
                phone_no: this.isEditContact ? this.editData.phone_no : '',
                name: this.isEditContact ? this.editData.name : '',
            },
        }
    },
    methods: {
        onSubmit(event) {
            event.preventDefault()
            console.log(JSON.stringify(this.form))
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
