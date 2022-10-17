function handleTickInit(tick) {
    let counter = Tick.count.up('2022-09-29T13:07:00+00:00');

    counter.onupdate = function(value) {
        tick.value = value;
    };
}