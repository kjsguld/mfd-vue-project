<template>
  <div>
    <img class="full-width-img" src="/static/img/contact-us.jpg" alt="Big discounts">  
    
    <section class="contact-form__wrapper">
      <div class="contact-form__info">
        <h1>Contact us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
      </div>
      
      <form class="contact-form" action="" @submit.prevent="validateBeforeSubmit">
        <label class="label label-email" for="email">Email</label>
        <div class="control control-email">
            <input v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" name="email" type="text" placeholder="Email">
            <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
        </div>

        <label class="label label-first_name">First Name</label>
        <div class="control control-first_name">
            <input name="first_name" v-model="first_name" v-validate="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('first_name') }" type="text" placeholder="First Name">
            <span v-show="errors.has('first_name')" class="help is-danger">{{ errors.first('first_name') }}</span>
        </div>

        <label class="label label-last_name">Last Name</label>
        <div class="control control-last_name">
            <input name="last_name" v-model="last_name" v-validate="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('last_name') }" type="text" placeholder="Last Name">
            <span v-show="errors.has('last_name')" class="help is-danger">{{ errors.first('last_name') }}</span>
        </div>


        <label class="label label-message">Message</label>
        <div class="control control-message">
            <textarea name="message" v-model="message" v-validate.initial="'required|max:250'" :class="{'input': true, 'is-danger': errors.has('message') }" placeholder="Message" id="" ></textarea>
            <span v-show="errors.has('message')" class="help is-danger">{{ errors.first('message') }}</span>              
        </div>

        <div class="control control-submit">
          <button class="btn--blue" type="submit">Submit</button>
        </div>
      </form>
    </section>
    <so-me></so-me>
  </div>
</template>

<script>
import SoMe from '@/components/SoMe'
import Vue from 'vue'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate);

export default {
  name: 'contact',
  components: {
    'so-me': SoMe
  },
  data: () => ({
    email: '',
    first_name: '',
    last_name: '',
    message: ''
  }),
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          
          alert('From Submitted!');
          return;
        }

        alert('Correct them errors!');
      });
    }
  }
}
</script>

<style lang="scss" scoped>

@import '../assets/styles/master';

.contact-form__wrapper{
  display: grid;
  max-width: 1170px;
  margin: 0 auto 5rem auto;
  @include mobile {
    width: calc(100% - 15px);
  }
  @include tablet {
    width: calc(100% - 15px);
    div.contact-form__info{
      max-width: 700px;
    }
  }

  .contact-form__info{
      max-width: 970px;
      margin: 5rem auto;
      text-align: center;
      
      h1{
          font-size: 2.5rem;
          font-weight: 800;
          letter-spacing: 20px;
          color: $darkgrey;
          margin-bottom: 2.5rem;
          &::after{
              content:' ';
              position: absolute;
              display:block;
              width: 80px;
              margin: 0.8rem auto;
              left: calc(50% - 40px);
              border: 4px solid $lightblue;
          }
      }
      p{
          line-height: 1.8rem;
          color: $form-border-color;
      }

  }

  .contact-form{
    display: grid;
    grid-gap: 1rem 30px;

    grid-template-columns: 3fr 2fr 4fr 3fr;
    grid-template-areas: 
    " . l-email c-email . "
    " . l-first-n c-first-n . "
    " . l-last-n c-last-n . "
    " . l-msg c-msg . "
    " . . c-sub . ";
    @include tablet{
      grid-template-columns: 2fr 2fr 3fr 1fr;
    }
    @include mobile{
      grid-template-columns: 1fr;
      grid-template-areas: 
      "l-email"
      "c-email"
      "l-first-n"
      "c-first-n"
      "l-last-n"
      "c-last-n"
      "l-msg"
      "c-msg"
      "c-sub";
      .label-email, .label-first_name, .label-last_name, .label-message{
        text-align: left !important;
      }

    }

    .label-email{
      grid-area: l-email;
    }
    .control-email{
      grid-area: c-email;
    }

    .label-first_name{
      grid-area: l-first-n;
    }
    .control-first_name{
      grid-area: c-first-n;
    }

    .label-last_name{
      grid-area: l-last-n;
    }
    .control-last_name{
      grid-area: c-last-n;
    }

    .label-message{
      grid-area: l-msg;
    }
    .control-message{
      grid-area: c-msg;
    }

    .control-submit{
      grid-area: c-sub;
      button{
        padding: 1rem;      
      }
    }

    .label-email, .label-first_name, .label-last_name, .label-message{
      text-align: right;
    }
  }

}
</style>
