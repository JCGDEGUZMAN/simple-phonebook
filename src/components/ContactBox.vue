<template>
    <b-container fluid class="p-0">
        <b-row class="d-flex justify-content-center">
            <b-col class="col-md-5">
                <div class="contact-box p-0 border border-secondary rounded-3">
                    <ContactMenu
                        :handleContactsShow="handleContactsShow"
                    />
                    <ContactItem
                        :contacts="contacts"
                        :isContactsShow="isContactsShow"
                    />
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import ContactItem from './ContactItem.vue';
import ContactMenu from './ContactMenu.vue';

export default {
  name: 'Contact',
  props: {},
  components: {
      ContactItem,
      ContactMenu,
  },
  data() {
      return {
          isContactsShow: true,
          contacts: [
              {
                  id: 1,
                  name: 'Juls G. De Guzman',
                  phone_no: '09876543211',
              },
              {
                  id: 2,
                  name: 'Chris G. De Guzman',
                  phone_no: '09876543222',
              },
          ]
      }
  },
  methods: {
      handleContactsShow()
      {
           this.isContactsShow = ! this.isContactsShow;
      }
  }
}
</script>

<style scope>
.contact-box {
    height: 95vh;
    overflow: scroll;
    position: relative;
    background-color: #c4c4c4;
}
</style>