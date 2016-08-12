'use strict';


/**
 * Sends a welcome message in the channel
 * @private
 */
DogBot.prototype._welcomeMessage = function () {
    this.postMessageToChannel(this.channels[0].name, 'Hi guys!!' +
        '\n If you need me just say `dog` or `' + this.name + '` to invoke me!',
        {as_user: true});
};

/**
 * Util function to check if a given real time message is mentioning dog or the dogbot
 * @param {object} message
 * @returns {boolean}
 * @private
 */
DogBot.prototype._isMentioningDog = function (message) {
    return message.text.toLowerCase().indexOf('dog') > -1 ||
        message.text.toLowerCase().indexOf(this.name) > -1;
};

/**
 * Util function to check if a given real time message has ben sent by the dogbot
 * @param {object} message
 * @returns {boolean}
 * @private
 */
NorrisBot.prototype._isFromDogBot = function (message) {
    return message.user === this.user.id;
};

module.exports = DogBot;
