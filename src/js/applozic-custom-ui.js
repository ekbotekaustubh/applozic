var customApp = {
    apiKey: 'easternenterprise9cfa65d65d6f060a9993ecedb95fa3df',
    deviceKey: '',
    login: function(userId, password, displayName) {
        var self = this;
        Applozic.ALApiService.login({
            data: {
                baseUrl: 'https://apps.applozic.com',
                alUser: {
                    userId: userId,
                    password: password,
                    displayName: displayName,
                    appVersionCode: 108,
                    applicationId: self.apiKey,
                    imageLink: '',
                    email: '',
                    contactNumber: '',
                    topicBox: true
                }
            },
            success: function(response) {
                console.log(response);
                var data = {};
                data.token = response.token;
                data.deviceKey = response.deviceKey;
                data.websocketUrl = response.websocketUrl;
                self.deviceKey = response.deviceKey;
                window.Applozic.ALSocket.init(self.apiKey, data, events);
            },
            error: function() {}
        });
    },
    sendMessage: function (type, contentType, message, to) {
        Applozic.ALApiService.sendMessage({
            data: {
                message: {
                    'type': type,
                    'contentType': contentType,
                    'message': message,
                    'to': to,
                    'metadata': {},
                    'source': 1
                }
            },
            success: function (response) { console.log(response); },
            error: function () {}
        });
    },
    messageList: function (offset, limit) {
        Applozic.ALApiService.getMessages({
            data: {
                startIndex: offset,
                mainPageSize: limit
            },
            success: function(response){console.log(response);},
            error: function() {}
        });
    },
    getMessageThread: function (userId, offset, limit) {
        Applozic.ALApiService.getMessages({
            data: {
                startIndex: offset,
                userId: userId,
                pageSize: limit
            },
            success: function(response) {console.log(response);},
            error: function() {}
        });
    },
    getConversationId: function (userId, receiverUserId, topicId, topicDetails) {
        Applozic.ALApiService.getConversationId({
            data: {
                'topicId': topicId,
                'userId': receiverUserId,
                'status': 'new',
                'isGroup': false,
                'topicDetail': JSON.stringify(topicDetails)
            },
            success: function (response) {
                console.log(response);
            },
            error: function () {}
        });
    },
    sendMessageInConversation: function (userId, message, conversationId) {
        Applozic.ALApiService.sendMessage({
            data: {
                message: {
                    'type': 5,
                    'message': message,
                    'to': userId,
                    'conversationId': conversationId,
                    'metadata': {},
                    'source': 1
                }
            },
            success: function (response) { console.log(response); },
            error: function () {}
        });
    },
    getTopicId: function (conversationId) {
        Applozic.ALApiService.getTopicId({
            data: {'conversationId': conversationId},
            success: function (response) {
                console.log(response);
            },
            error: function () {}
        });
    },
    getConversationByTopic: function (topicId, tabId, clientGroupId) {
        Applozic.ALApiService.fetchConversationByTopicId({
            data: {
                'topicId': topicId,
                'tabId': tabId,
                'pageSize': 60,
                'clientGroupId': clientGroupId,
                'isGroup': false
            },
            success: function (response) {
                console.log(response);
            },
            error: function () {}
        });
    },
    getMessagesByTopic: function (userId, conversationId, topicId, offset, limit) {
        Applozic.ALApiService.getMessages({
            data: {
                userId: userId,
                startIndex: offset,
                pageSize: limit,
                topicId: topicId,
                conversationId: conversationId
            },
            success: function(response) {console.log(response);},
            error: function() {}
        });
    },
    getAllTopics: function (offset, limit) {
        Applozic.ALApiService.getMessages({
            data: {
                startIndex: offset,
                pageSize: limit
            },
            success: function(response) {console.log(response);},
            error: function() {}
        });
    },
    sendAttachment: function (fileSelectorId, to, message) {
        var file = document.getElementById(fileSelectorId).files[0];
        var message = {"type": 5, "contentType": 0, "message": message, "to": to, "metadata":{}, "source": 1};
        Applozic.ALApiService.sendAttachment({
            data: {
                file: file,
                messagePxy: message
            },
            success: function(response) {console.log(response);},
            error: function(error) {console.log(response)}
        });
    },
    logout: function () {
        window.Applozic.AlCustomService.logout();
        window.Applozic.ALSocket.disconnect();
    }
};
