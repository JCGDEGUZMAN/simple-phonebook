<template>
        <div v-if="isContactsShow">
            <div v-for="contact in contacts" :key="contact.id" class="contact d-flex justify-content-between border rounded-3 m-3 border-primary">
                <div class="d-flex text-start">
                    <div class="m-2">
                        <b-icon class="h1" icon="person-circle" variant="primary"></b-icon>
                    </div>
                    <div class="m-2">
                        <div class="text-break fw-bold">{{ contact.name }}</div>
                        <div class="phone-no">{{ contact.phone_no }}</div>
                    </div>
                </div>
                <div class="action-btns m-2">
                    <div>
                        <b-icon 
                            icon="pencil-square" 
                            variant="warning"
                            @click="handleEditDataAction(contact)"
                        >
                        </b-icon>
                    </div>
                    <div>
                        <b-icon 
                            v-b-modal.modal-sm 
                            icon="trash-fill" 
                            variant="danger"
                            @click="handleContactId(contact.id)"
                        >
                        </b-icon>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
  name: 'ContactItem',
  props: ['contacts', 'isContactsShow', 'handleEditData', 'handleContactId'],
  methods: {
      handleEditDataAction(data)
      {
          this.handleEditData(data);
      }
  }
}
</script>

<style scope>
.contact {
    background-color: #fff;
}

.phone-no {
    font-size: 12px;
}

.action-btns .b-icon {
    cursor: pointer;
}
</style>