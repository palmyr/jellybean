function handleTickInit(tick) {
    var counter = Tick.count.down('2022-09-22T00:00:00+01:00');

    counter.onupdate = function(value) {
        tick.value = value;
    };
}