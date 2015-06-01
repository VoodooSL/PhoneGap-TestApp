function onSuccess(heading) {
    $('#heading').text(heading.magneticHeading);
};

function onError(error) {
    $('#heading').text(error.code);
};

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    $('#btn').click(function () {
        navigator.vibrate(3000);
    });

    navigator.compass.watchHeading(
        onSuccess,
        onError, { frequency: 1000 });
}
