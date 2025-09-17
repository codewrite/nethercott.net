var globals = {};

globals.uniqueID = new Date(document.lastModified).toISOString()
                                .replace(/(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}).*/g,'$142$3$4$5');

var absLocation = window.location.href;
globals.framePage = 	absLocation.replace(/^.*page=(\w+).*$/, '$1');
globals.subPage = 	absLocation.replace(/^.*sub=(\w+).*$/, '$1');

if (globals.framePage === absLocation) {
globals.framePage = "home";
globals.subPage = "";
}

function debugMessage(msg) {
    //console.log(msg);
}
