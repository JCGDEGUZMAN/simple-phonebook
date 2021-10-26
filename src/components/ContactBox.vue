<template>
    <b-container fluid class="p-0">
        <b-row class="d-flex justify-content-center">
            <b-col class="col-md-5">
                <div class="contact-box p-0 border border-secondary rounded-3">
                    <ContactMenu
                        :handleContactsShow="handleContactsShow"
                        :handleContactAction="handleContactAction"
                        :isContactsShow="isContactsShow"
                    />
                    <ContactItem
                        :contacts="contacts"
                        :isContactsShow="isContactsShow"
                        :handleEditData="handleEditData"
                        :handleContactId="handleContactId"
                    />
                    <ContactForm
                        v-if="!isContactsShow"
                        :isContactsShow="isContactsShow"
                        :isEditContact="isEditContact"
                        :editData="editData"
                    />
                    <b-modal 
                        id="modal-sm" 
                        size="sm" 
                        title="Small Modal"
                        ok-title="Yes"
                        cancel-title="No"
                        body-class="fw-bold"
                        centered
                        hide-header
                        @ok="handleContactDelete"
                    >
                       Are you sure?
                    </b-modal>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import ContactItem from './ContactItem.vue';
import ContactMenu from './ContactMenu.vue';
import ContactForm from './ContactForm.vue';

import { getContacts, deleteContact } from '../actions/contacts.js';

export default {
  name: 'Contact',
  props: {},
  components: {
      ContactItem,
      ContactMenu,
      ContactForm,
  },
  data() {
      return {
          isContactsShow: true,
          isEditContact: false,
          contactId: 0,
          editData: {},
          contacts: []
      }
  },
  mounted() {
      this.handleGetContacts();
  },
  methods: {
        async handleGetContacts()
        {
            this.contacts = await getContacts();
        },

        handleContactsShow(value)
        {
            this.isContactsShow = value;
            this.handleGetContacts();
        },

        handleContactAction(type)
        {
            this.isEditContact = type;
        },

        handleEditData(data)
        {
            this.editData = data;
            this.handleContactsShow(false);
            this.handleContactAction(true);
        },

        handleContactId(id)
        {
            this.contactId = id;
        },

        async handleContactDelete()
        {
            await deleteContact(this.contactId);
            this.handleGetContacts();
        },
  }
}
</script>

<style scope>
.contact-box {
    height: 95vh;
    overflow: scroll;
    position: relative;
    background-color: #e0d9d9;
}
</style>