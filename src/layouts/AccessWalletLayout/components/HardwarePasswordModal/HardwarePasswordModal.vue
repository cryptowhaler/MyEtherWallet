<template>
  <b-modal
    ref="password"
    :title="$t('accessWallet.password')"
    hide-footer
    class="bootstrap-modal modal-software"
    centered
  >
    <form class="password-form">
      <div class="input-container">
        <input
          v-model="password"
          :type="show ? 'text' : 'password'"
          name="Password"
          autocomplete="off"
        />
        <img
          v-if="show"
          src="@/assets/images/icons/show-password.svg"
          @click.prevent="switchViewPassword"
        />
        <img
          v-if="!show"
          src="@/assets/images/icons/hide-password.svg"
          @click.prevent="switchViewPassword"
        />
      </div>
      <p v-show="error !== ''" class="error">{{ error }}</p>
      <button
        class="submit-button large-round-button-green-filled"
        type="submit"
        @click.prevent="unlockWallet"
      >
        {{ $t('accessWallet.unlock') }} {{ hardwareBrand }}
      </button>
    </form>
  </b-modal>
</template>

<script>
export default {
  props: {
    walletConstructor: {
      type: Function,
      default: function () {}
    },
    hardwareBrand: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      show: false,
      password: '',
      error: ''
    };
  },
  watch: {
    password() {
      this.error = '';
    }
  },
  methods: {
    unlockWallet() {
      this.walletConstructor
        .unlock({ password: this.password })
        .then((wallet) => {
          this.$emit('hardwareWalletOpen', wallet);
        })
        .catch((_error) => {
          // eslint-disable-next-line
          console.error(_error); // todo replace with proper error
        });
    },
    switchViewPassword() {
      this.show = !this.show;
    }
  }
};
</script>
<style lang="scss" scoped>
@import 'HardwarePasswordModal.scss';
</style>
