<template>
  <div class="container half-size-centered">
    <div class="row">
      <div class="col-sm">
        <button
          id="button-counter-up"
          class="btn btn-primary"
          @click="increaseCounter"
        >
          +
        </button>
      </div>
      <div class="col-sm">
        <div id="displayed-counter" class="badge badge-secondary display-1">
          {{ counter }}
        </div>
      </div>
      <div class="col-sm">
        <button
          id="button-counter-down"
          class="btn btn-primary"
          @click="decreaseCounter"
        >
          -
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "my-counter",
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    increaseCounter() {
      console.log("increase counter");
      this.counter += 1;
    },
    decreaseCounter() {
      console.log("decrease counter");
      this.counter -= 1;
    }
  }
};
</script>
<style>
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

.half-size-centered {
  width: 50vw;
  position: absolute;
  left: 15vw;
  top: 25vh;
}
</style>
