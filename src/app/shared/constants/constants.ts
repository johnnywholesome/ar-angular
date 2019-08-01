export const RoutePaths = {
    LOGIN: '/login',
    EXTEND_TOKEN: '/extendtoken',
    LOGOUT: '/logout',
    USER_PROFILE: '/userprofile',
    GET_RATES: '/rates',
    GET_ASSIGNMENT_RATE: '/assignments/rates',
    GET_ASSIGNMENTS: '/assignments',
    GET_ASSIGNMENT_COST: '/assignments/cost',
    GET_JERNAL_SUBMITTED_ENTRIES: '/journalSubmittedEntries',
    GET_JERNAL_NOT_SUBMITTED_ENTRIES: '/journalNotSubmittedEntries',
    REJECT_SUBMITTED_ENTRY: '/rejectJournal',
    SUBMIT_JOURNAL_ENTRIES: '/journalentry',
    GET_JOURNAL_SUMMARY: '/journalsummary',
    GET_JOURNAL_SUMMARY_BY_PERIOD: '/journalsummary/period',
    CALCULATE: '/calculate'
};

export const Messages = {
    ASSISTMSG: 'For assistance please contact the service desk at 1-877-583-9659.',
    INVALIDCREDENTIALS: 'Network ID or password incorrect',
};

export const Roles = {
    USF_LOGISTICS_ADMIN: 'LOGISTICS-ADMIN',
    USF_FIELD_RATE_CONTROLLER: 'FIELD-RATE-CONTROLLER',
    USF_FIELD_COST_CONTROLLER: 'FIELD-COST-CONTROLLER'
};

export const MAX_SHIPMENT_DISPLAY = 20;
export const ValidationPattern = {
    MILES_PER_GALLON_MAX_VALUE: 999.99,
    MAX_VALUE: 9999.99,
    NON_ZERO: '^\s*(?=.*[1-9])[0-9]+(?:\.[0-9]{1,2})?\s*$',
    ZERO: '^\s*(?=.*[0-9])[0-9]+(?:\.[0-9]{1,2})?\s*$'
};

export const RateManager = [
    Roles.USF_FIELD_RATE_CONTROLLER,
    Roles.USF_LOGISTICS_ADMIN
];

