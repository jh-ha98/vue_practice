<template>
    <div class="container is-fluid">
        <div v-if="submit">
            <submit-notify-form />
        </div>
        <div v-else class="card">
            <div class="card-content">
                <join-form @submit-form="onSubmitForm" />
            </div>
        </div>
    </div>
</template>

<script>
import 'bulma'
import '@fortawesome/fontawesome-free/css/all.min.css'
import SubmitNotifyForm from './components/SubmitNotifyForm.vue';
import JoinForm from './components/JoinForm.vue';
import GlobalMixin from './mixins/GlobalMixin';

export default {
    mixins: [GlobalMixin],
    components: { JoinForm, SubmitNotifyForm },
    data() {
        return {
            submit: false
        };
    },
    methods: {
        onSubmitForm(value) {
            this.submit = value;
        }
    },
    created() {
        this.printLifecycleLog('VueApp', 'created');
    }
};
</script>

<style>
/* @import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css';
@import 'https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css'; */

html,
body {
    margin: 0;
}

#app {
    display: flex;
    justify-content: space-between;
}

.wrap-item {
    box-sizing: border-box;
    width: 50vw;
    height: 100vh;
    padding: 0.4rem;
    border: 1px solid black;
    overflow-y: auto;
}

.data-table {
    border: 1px solid black;
}
</style>
