<template>
    <div>
        <div class="field">
            <label class="label">Name</label>
            <div class="control">
                <input
                    class="input"
                    type="text"
                    v-model="form.name"
                    placeholder="Text input"
                />
            </div>
        </div>

        <div class="field">
            <label class="label">Username</label>
            <div class="control has-icons-left has-icons-right">
                <input
                    :class="{ input: true, 'is-success': isUsernameAvaliable }"
                    type="text"
                    v-model="form.username"
                    placeholder="Text input"
                />
                <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                </span>
                <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                </span>
            </div>
            <p v-if="isUsernameAvaliable" class="help is-success">
                This username is available
            </p>
        </div>

        <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left has-icons-right">
                <input
                    :class="{ input: true, 'is-danger': isEmailValid }"
                    type="email"
                    v-model="form.email"
                    placeholder="Email input"
                />
                <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                    <i class="fas fa-exclamation-triangle"></i>
                </span>
            </div>
            <p v-if="isEmailValid" class="help is-danger">
                This email is invalid
            </p>
        </div>

        <div class="field">
            <label class="label">Subject</label>
            <div class="control">
                <div class="select">
                    <select v-model="form.subject">
                        <option>Select dropdown</option>
                        <option>With options</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="field">
            <label class="label">Message</label>
            <div class="control">
                <textarea
                    class="textarea"
                    placeholder="Textarea"
                    v-model="form.message"
                ></textarea>
            </div>
        </div>

        <div class="field">
            <div class="control">
                <label class="checkbox">
                    <input type="checkbox" v-model="form.agree" />
                    I agree to the <a href="#">terms and conditions</a>
                </label>
            </div>
        </div>

        <div class="field">
            <div class="control">
                <label class="radio">
                    <input
                        type="radio"
                        name="question"
                        v-model="form.radio"
                        value="Y"
                    />
                    Yes
                </label>
                <label class="radio">
                    <input
                        type="radio"
                        name="question"
                        v-model="form.radio"
                        value="N"
                    />
                    No
                </label>
            </div>
        </div>

        <div class="field is-grouped">
            <div class="control">
                <button class="button is-link" @click="onSubmitButtonClicked">
                    Submit
                </button>
            </div>
            <div class="control">
                <button
                    class="button is-link is-light"
                    @click="onCancelButtionClicked"
                >
                    Cancel
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import GlobalMixin from '../mixins/GlobalMixin';

export default {
    mixins: [GlobalMixin],
    data() {
        return {
            form: {
                name: '',
                username: '',
                email: '',
                subject: undefined,
                message: '',
                agree: false,
                radio: undefined
            }
        };
    },
    computed: {
        isUsernameAvaliable() {
            return this.checkUsernameAvaliable();
        },
        isEmailValid() {
            return !this.checkEmailValid();
        }
    },
    methods: {
        checkUsernameAvaliable() {
            // TODO:
            const { username = '' } = this.form;
            return username !== '' ? true : false;
        },
        checkEmailValid() {
            const emailRegex =
                /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            // const emailRegex = new RegExp(
            //     '^(([^<>()[\\]\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\.,;:\\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\\]\\.,;:\\s@\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\"]{2,})$',
            //     'i'
            // );
            // TODO:
            const { email = '' } = this.form;
            return emailRegex.test(email);
        },
        onSubmitButtonClicked() {
            // TODO:
            if (this.checkUsernameAvaliable() && this.checkEmailValid())
                this.$emit('submit-form', true);
            else alert('입력값이 올바르지 않습니다.');
        },
        onCancelButtionClicked() {
            // TODO:
            if (confirm('입력을 취소하시겠습니까?')) {
                const { form } = this;
                for (const property in form) form[property] = '';
            }
        }
    },
    created() {
        this.printLifecycleLog('JoinForm', 'created');
    },
    mounted() {
        this.form.username = 'bulma';
        this.form.email = 'hello@';
    }
};
</script>

<style>
</style>