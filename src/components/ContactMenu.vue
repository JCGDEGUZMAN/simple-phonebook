<template>
    <div class="menu d-flex justify-content-center m-0 p-3">
        <div>
            <b-icon 
                class="h4 m-2" 
                icon="people-fill" 
                variant="primary"
                @click="handleContactsShow"
            >
            </b-icon>
        </div>
        <div>
            <b-icon 
                class="h4 m-2" 
                icon="person-plus-fill" 
                variant="light"
                    @click="handleContactsShow"
            >
            </b-icon>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Menu',
  props: ['handleContactsShow'],
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