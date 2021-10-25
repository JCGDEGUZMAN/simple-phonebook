<template>
        <div v-if="isContactsShow">
            <div v-for="contact in contacts" :key="contact.id" v-bind:class="['contact d-flex justify-content-between border rounded-3 m-3', (contact.id % 2 == 0) ? 'border-primary' : 'border-success']">
                <div class="d-flex text-start">
                    <div class="m-2">
                        <b-icon class="h1" icon="person-circle" v-bind:variant="(contact.id % 2 == 0) ? 'primary' : 'success'"></b-icon>
                    </div>
                    <div class="m-2">
                        <div class="text-break fw-bold">{{ contact.name }}</div>
                        <div class="phone-no">{{ contact.phone_no }}</div>
                    </div>
                </div>
                <div class="m-2">
                    <div>
                        <b-icon icon="pencil-square" variant="warning"></b-icon>
                    </div>
                    <div>
                        <b-icon icon="trash-fill" variant="danger"></b-icon>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
  name: 'ContactItem',
  props: ['contacts', 'isContactsShow'],
}
</script>

<style scope>
.contact {
    background-color: #fff;
}

.phone-no {
    font-size: 12px;
}
</style>