export default function () {
  this.transition(
    this.hasClass('neuron-additional-info-animation'),

    // this makes our rule apply when the liquid-if transitions to the
    // true state.
    this.toValue(true),
    this.use('toLeft', {duration: 300}),

    // which means we can also apply a reverse rule for transitions to
    // the false state.
    this.reverse('toRight', {duration: 300})
  );
}
