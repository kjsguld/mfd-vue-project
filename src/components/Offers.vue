<template>
  <div class="offer-banner container">
      <img class="must-have" src="../assets/img/home/MustHave.jpg" alt="Must have for her">
      <img class="75-off" src="../assets/img/home/75PercentOff.jpg" alt="75% off">
      <img class="new-summer" src="../assets/img/home/NewSummerStyle.jpg" alt="New summer style">      
    </div>
</template>

<script>
export default {
    name: 'offers'
}
</script>

<style lang="scss" scoped>
.offer-banner{
    
    grid-template: 
    "must-have 75-off"
    "must-have new-summer";
    grid-gap: 5px;

    .must-have{
        grid-area: must-have;
    }

    .75-off{
        grid-area: 75-off;
    }

    .new-summer{
        grid-area: new-summer;
    }

}
</style>
