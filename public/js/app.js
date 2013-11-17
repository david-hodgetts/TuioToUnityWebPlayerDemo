var u;

var main = function(){

    var config = {
        width: 960, 
        height: 600,
        params: { enableDebugging:"0" }
    
    };

    u = new UnityObject2(config);
    u.initPlugin(jQuery("#unityPlayer")[0], "Deploy.unity3d");
}


var setupSocket = function(unity){
    var client = new Tuio.Client({
        host: "http://localhost:5000"
    }),

    onConnect = function() {
        console.log("onConnect");
    },

    simplifyCursor = function(cursor){
        return {id: cursor.getCursorId(),
                x: cursor.xPos,
                y: cursor.yPos };
    },

    onAddTuioCursor = function(addCursor) {
        var simplifiedCursor = simplifyCursor(addCursor);
        unity.SendMessage("TouchScript", "OnCursorAdded", JSON.stringify(simplifiedCursor));
        console.log(simplifiedCursor.id);
    },

    onUpdateTuioCursor = function(updateCursor) {
       
        var simplifiedCursor = simplifyCursor(updateCursor);

        unity.SendMessage("TouchScript", "OnCursorUpdated", JSON.stringify(simplifiedCursor));
    },

    onRemoveTuioCursor = function(removeCursor) {

        var simplifiedCursor = simplifyCursor(removeCursor);

        u.getUnity().SendMessage("TouchScript", "OnCursorRemoved", JSON.stringify(simplifiedCursor));
    },

    onAddTuioObject = function(addObject) {
        console.log(addObject);
    },

    onUpdateTuioObject = function(updateObject) {
        console.log(updateObject);
    },

    onRemoveTuioObject = function(removeObject) {
        console.log(removeObject);
    },

    onRefresh = function(time) {
    };

    client.on("connect", onConnect);
    client.on("addTuioCursor", onAddTuioCursor);
    client.on("updateTuioCursor", onUpdateTuioCursor);
    client.on("removeTuioCursor", onRemoveTuioCursor);
    client.on("addTuioObject", onAddTuioObject);
    client.on("updateTuioObject", onUpdateTuioObject);
    client.on("removeTuioObject", onRemoveTuioObject);
    client.on("refresh", onRefresh);
    client.connect();    
};

var unityIsReady = function(){
    console.log("unity is ready");
    setupSocket(u.getUnity());
}

window.onload = main;