var application = require('application');

function backSwipe(args) {
    if (args.direction === gestures.SwipeDirection.Right) {
        frame.topmost().goBack();
    }
}
exports.backSwipe = backSwipe;

application.mainModule = "components/navigation/navigation";
application.start();
