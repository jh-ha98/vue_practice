<template>
    <div>
        <h1 class="title is-1 has-text-centered py-4">제출되었습니다.</h1>
    </div>
</template>

<script>
import GlobalMixin from '../mixins/GlobalMixin';

export default {
    mixins: [GlobalMixin],
    created() {
        this.printLifecycleLog('SubmitNotifyForm', 'created');
    }
};
</script>

<style>
</style>