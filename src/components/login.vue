<template>
  <div style="width: 100%;height: 100%">
    <div class="head">
      <div>head1</div>
      <div>head2</div>
      <div @click="btnclick ">head3</div>
    </div>
    <div class="foot">
      <div>foot1</div>
      <div>foot2</div>
      <div>foot3</div>
    </div>
  </div>

</template>

<script>
  export default {
    data: function () {
      return {}
    },
    methods: {
      btnclick: function () {
        this.$router.push('/index')
      }
    }

  }

</script>

<style>
  .foot {
    display: flex;
    display: -webkit-flex; /* Safari */
    flex-direction: column-reverse;
    flex-wrap: nowrap;
    height: 70%;
  }

  .foot div {
    width: 2rem;
    height: 100px;
  }

  .foot :nth-child(1) {
    background-color: #5f9;
  }

  .foot :nth-child(2) {
    background-color: #955;
  }

  .foot :nth-child(3) {
    background-color: #4ee;
  }

  .head {
    display: flex;
    display: -webkit-flex; /* Safari */
    flex-direction: row;
    flex-wrap: wrap;
    height: 30%;
  }

  .head div {
    width: 75px;
    height: 100px;
  }

  .head :nth-child(1) {
    background-color: #5f9;
  }

  .head :nth-child(2) {
    background-color: #955;
  }

  .head :nth-child(3) {
    background-color: #4ee;
  }
</style>
