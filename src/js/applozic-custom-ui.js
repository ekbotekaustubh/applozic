var customApp = {
    apiKey: 'easternenterprise9cfa65d65d6f060a9993ecedb95fa3df',
    login: function(userId, password, displayName) {
        var self = this;
        Applozic.ALApiService.login(
            {
                data: {
                    baseUrl: 'https://apps.applozic.com',
                    alUser:
                    {
                        userId: userId,
                        password: password,
                        displayName: displayName,
                        appVersionCode: 108,
                        applicationId: self.apiKey,
                        imageLink: '', //User's profile picture url
                        email: '', //optional
                        contactNumber: '', //optional, pass with internationl code eg: +13109097458
                        topicBox: true
                    }
                },
                success: function(response) {
                    console.log(response);
                    var data = {};
                    data.token = response.token;
                    data.deviceKey = response.deviceKey;
                    data.websocketUrl = response.websocketUrl;

                    //Get your App ID from [Applozic Dashboard](https://console.applozic.com/settings/install)
                    window.Applozic.ALSocket.init(self.apiKey, data, events);
                },
                error: function() {

                }
            }
        );
    },
    sendMessage: function (type, contentType, message, to) {
        Applozic.ALApiService.sendMessage({
            data: {
                message: {
                    "type": type,
                    "contentType": contentType,
                    "message": message,
                    "to": to,
                    "metadata": {},
                    "source": 1
                }
            },
            success: function (response) { console.log(response); },
            error: function () { }
        });

    },
    messageList: function (offset, limit) {
        Applozic.ALApiService.getMessages({
            data: {
                startIndex:offset,
                mainPageSize:limit
            },
            success: function(response){console.log(response);},
            error: function() {}
        });
    },
    getMessageThread: function (userId, offset, limit) {
        Applozic.ALApiService.getMessages({
            data: {
                startIndex:0,
                userId:userId,
                pageSize:30
            },
            success: function(response) {console.log(response);},
            error: function() {}});
    },
    getTopicId: function () {
        Applozic.ALApiService.getTopicId({
            data: {
                conversationId: '1edd4ff984fac677987ac6dfa5e1050be'
            },
            success: function(response) {console.log(response);},
            error: function() {}});
    }
};
