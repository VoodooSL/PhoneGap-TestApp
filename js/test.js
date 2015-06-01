function onSuccess(heading) {
    $('#heading').text(heading.magneticHeading);
    setTimeout(checkCompass(), 1000);
};

function onError(error) {
    setTimeout(checkCompass(), 1000);
};

function checkCompass()
{
    navigator.compass.getCurrentHeading(onSuccess, onError);
}

$(function () {
    $('#btn').click(function () {
        navigator.vibrate(3000);
    });

    setTimeout(checkCompass(), 1000);
});