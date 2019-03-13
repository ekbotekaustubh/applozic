var events = {
    'onConnectFailed': function(resp) {},
    'onConnect': function(resp) {},
    'onMessageDelivered': function(resp) {},
    'onMessageRead': function(resp) {
        //called when a message is read by the receiver
    },
    'onMessageDeleted': function(resp) {},
    'onConversationDeleted': function(resp) {},
    'onUserConnect': function(resp) {},
    'onUserDisconnect': function(resp) {},
    'onConversationReadFromOtherSource': function(resp) {},
    'onConversationRead': function(resp) {
        //called when the conversation thread is read by the receiver
    },
    'onMessageReceived': function(resp) {
        //called when a new message is received
    },
    'onMessageSentUpdate': function(resp) {},
    'onMessageSent': function(resp) {
        //called when the message is sent
    },
    'onUserBlocked': function(resp) {},
    'onUserUnblocked': function(resp) {},
    'onUserActivated': function(resp) {},
    'onUserDeactivated': function(resp) {},
    'connectToSocket': function(resp) {},
    'onMessage': function(resp) {

        console.log(resp);

        //called when the websocket receive the data

    },
    'onTypingStatus': function(resp) {}
};
