angular.module('appModule')

    .factory('GoogleAnalyticsAbstraction', function () {

        /**
         * @description
         * To start tracking Analytics
         *
         * @function startTrackerWithId
         *
         * @param {string} trackerId
         * @param {number} dispatchIntervalInMinutes
         * */
        function _startTrackerWithId(trackerId, dispatchIntervalInMinutes) {
            if(dispatchIntervalInMinutes) {
                window.ga.startTrackerWithId(trackerId, dispatchIntervalInMinutes);
            } else {
                window.ga.startTrackerWithId(trackerId);
            }
        }

        /**
         * @description
         * To track a Screen (PageView)
         *
         * @function trackView
         *
         * @param {string} screenTitle
         * */
        function _trackView(screenTitle) {
            window.ga.trackView(screenTitle);
        }

        /**
         * @description
         * To track a Screen (PageView) w/ campaign details
         *
         * @function trackViewWithCampaign
         *
         * @param {string} screenTitle
         * @param {string} campaign
         * */
        function _trackViewWithCampaign(screenTitle, campaign) {
            window.ga.trackView(screenTitle, campaign);
        }

        /**
         * @description
         * To track a Screen (PageView) and create a new session
         *
         * @function trackViewNewSession
         *
         * @param {string} screenTitle
         * @param {string} session
         * */
        function _trackViewNewSession(screenTitle, session) {
            window.ga.trackView(screenTitle, session, true)
        }

        /**
         * @description
         * To track an Event
         *
         * @function trackEvent
         *
         * @param {string} category
         * @param {string} action
         * @param {string} [label]
         * @param {number} [value]
         * */
        function _trackEvent(category, action, label, value) {

            if(label && !value){
                window.ga.trackEvent(category, action, label);
            }
            else if(value && !label) {
                window.ga.trackEvent(category, action, value);
            }
            else if(!label && !value) {
                window.ga.trackEvent(category, action);
            }
            else if(label && value) {
                window.ga.trackEvent(category, action, label, value);
            }

        }

        /**
         * @description
         * To track custom metrics
         *
         * @function trackMetric
         *
         * @param {string} key
         * @param {number} [value]
         * */
        function _trackMetric(key, value) {

            if(!value) {
                window.ga.trackMetric(key);
            }
            else if(value) {
                window.ga.trackMetric(key, value);
            }

        }

        /**
         * @description
         * To track an Exception
         *
         * @function trackException
         *
         * @param {string} description
         * @param {boolean} isFatal
         * */
        function _trackException(description, isFatal) {
            window.ga.trackException(description, isFatal)
        }

        /**
         * @description
         * To track User Timing (App Speed)
         *
         * @function trackTiming
         *
         * @param {string} category
         * @param {number} intervalInMilliseconds
         * @param {string} variable
         * @param {string} label
         * */
        function _trackTiming(category, intervalInMilliseconds, variable, label) {
            window.ga.trackTiming(category, intervalInMilliseconds, variable, label);
        }

        /**
         * @description To add a Transaction (E-commerce)
         *
         * @param {string} id
         * @param {string} affiliation
         * @param {number} revenue
         * @param {number} tax
         * @param {number} shipping
         * @param {string} currencyCode
         * */
        function _addTransaction(id, affiliation, revenue, tax, shipping, currencyCode) {
            window.ga.addTransaction(id, affiliation, revenue, tax, shipping, currencyCode);
        }

        /**
         * @description To add a Transaction Item (E-commerce)
         *
         * @param {string} id
         * @param {string} name
         * @param {string} sku
         * @param {string} category
         * @param {number} price
         * @param {number} quantity
         * @param {string} currencyCode
         * */
        function _addTransactionItem(id, name, sku, category, price, quantity, currencyCode) {
            window.ga.addTransactionItem(id, name, sku, category, price, quantity, currencyCode);
        }

        /**
         * @description
         * To add a Custom Dimension
         *
         * Key should be integer index of the dimension i.e. send 1 instead of dimension1 for the first custom dimension you are tracking.
         * e.g. window.ga.addCustomDimension(1, 'Value', success, error)
         *
         * @function addCustomDimension
         *
         * @param {string} key
         * @param {string} value
         * @param {function} success
         * @param {function} error
         * */
        function _addCustomDimension(key, value, success, error) {
            window.ga.addCustomDimension(key, value, success, error);
        }

        /**
         * @description
         * To set a UserId
         *
         * @function setUserId
         *
         * @param {string} userId
         * */
        function _setUserId(userId) {
            window.ga.setUserId(userId);
        }

        /**
         * @description
         * To set a specific app version
         *
         * @function setAppVersion
         *
         * @param {string} version
         * */
        function _setAppVersion(version) {
            window.ga.setAppVersion(version);
        }

        /**
         * @description
         * To set a anonymize Ip address
         *
         * @function setAnonymizeIp
         * */
        function _setAnonymizeIp() {
            window.ga.setAnonymizeIp(true);
        }

        /**
         * @description
         * To set Opt-out
         *
         * @function setOptOut
         * */
        function _setOptOut() {
            window.ga.setOptOut(true);
        }

        /**
         * @description
         * To enabling Advertising Features in Google Analytics allows you to take advantage of Remarketing,
         * Demographics & Interests reports, and more
         *
         * @function setAllowIDFACollection
         * */
        function _setAllowIDFACollection() {
            window.ga.setAllowIDFACollection(true);
        }

        /**
         * @description
         * To enable verbose logging
         *
         * @function debugMode
         * */
        function _debugMode() {
            window.ga.debugMode()
        }

        /**
         * @description
         * To enable/disable automatic reporting of uncaught exceptions
         *
         * @function enableUncaughtExceptionReporting
         *
         * @param {boolean} enable
         * @param {function} success
         * @param {function} error
         * */
        function _enableUncaughtExceptionReporting(enable, success, error) {
            window.ga.enableUncaughtExceptionReporting(enable, success, error);
        }

        return {
            startTrackerWithId: _startTrackerWithId,
            trackView: _trackView,
            trackViewWithCampaign: _trackViewWithCampaign,
            trackViewNewSession: _trackViewNewSession,
            trackEvent: _trackEvent,
            trackMetric: _trackMetric,
            trackException: _trackException,
            trackTiming: _trackTiming,
            addTransaction: _addTransaction,
            addTransactionItem: _addTransactionItem,
            addCustomDimension: _addCustomDimension,
            setUserId: _setUserId,
            setAppVersion: _setAppVersion,
            setAnonymizeIp: _setAnonymizeIp,
            setOptOut: _setOptOut,
            setAllowIDFACollection: _setAllowIDFACollection,
            debugMode: _debugMode,
            enableUncaughtExceptionReporting: _enableUncaughtExceptionReporting
        }

    })

;