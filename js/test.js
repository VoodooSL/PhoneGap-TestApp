function onSuccess(heading) {
    $('#heading').text(heading.magneticHeading);
};

function onError(error) {
};

$(function () {
    $('#btn').click(function () {
        navigator.vibrate(3000);
    });

    var timer = $.timer(function () {
        navigator.compass.getCurrentHeading(onSuccess, onError);
    });
    timer.set({ time: 1000, autostart: true });
});