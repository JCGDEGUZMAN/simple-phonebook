<template>
    <div class="menu d-flex justify-content-center m-0 p-3">
        <div>
            <b-icon 
                class="h4 m-2" 
                icon="people-fill" 
                v-bind:variant="isContactsShow ? 'primary' : 'light'"
                @click="handleContactsShow(true)"
            >
            </b-icon>
        </div>
        <div>
            <b-icon 
                class="h4 m-2" 
                icon="person-plus-fill" 
                v-bind:variant="isContactsShow ? 'light' : 'primary'"
                @click="handleNewContact()"
            >
            </b-icon>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Menu',
  props: ['handleContactsShow', 'isContactsShow', 'handleContactAction'],
  methods: {
      handleNewContact()
      {
          this.handleContactsShow(false);
          this.handleContactAction(false);
      }
  }
}
</script>

<style scope>
.menu {
    background-color: rgb(48, 47, 47);
    position: sticky;
    top: 0;
    width: 100%;
}

.menu .b-icon:hover {
    transform: scale(1.4);
    cursor: pointer;
}
</style>