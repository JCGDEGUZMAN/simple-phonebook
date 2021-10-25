<template>
    <b-container>
        <b-row>
            <b-col>
                <Contact/>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import Contact from '../components/ContactBox.vue';

export default {
    name: 'Home',
    props: {},
    components: {
      Contact
    },
    data() {
        return {}
    }
}
</script>

<style scope>

</style>