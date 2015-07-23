/*global define*/
define([
        'jquery',
        'config/submodules/config_base'
    ],
    function ($, config_base) {

        'use strict';

        return $.extend(true, {}, config_base, {

            //Chaplin JS configuration
            CHAPLINJS_CONTROLLER_SUFFIX: '-controller',
            CHAPLINJS_PROJECT_ROOT: '/fenix/',
            CHAPLINJS_PUSH_STATE: false,
            CHAPLINJS_SCROLL_TO: false,
            CHAPLINJS_APPLICATION_TITLE: "FENIX Web App",

            //WDS configuration
            DB_NAME: 'rlm',
            WDS_URL: 'http://hqlprfenixapp2.hq.un.fao.org:10100/wds-5.2.1/rest/crud',
            WDS_OUTPUT_TYPE: 'object',
            WDS_OLAP_OUTPUT_TYPE : 'array',

            //Top Menu configuration
            TOP_MENU_CONFIG: 'config/submodules/fx-menu/top_menu.json',
            TOP_MENU_TEMPLATE: 'fx-menu/templates/blank-fluid.html',
            TOP_MENU_SHOW_BREADCRUMB : true,
            TOP_MENU_SHOW_BREADCRUMB_HOME : true,
            TOP_MENU_SHOW_FOOTER: true,
            TOP_MENU_AUTH_MODE_HIDDEN_ITEMS: ['login'],
            TOP_MENU_PUBLIC_MODE_HIDDEN_ITEMS :['protected', 'logout'],

            SECURITY_NOT_AUTHORIZED_REDIRECTION_LINK : "#home"

        });
    });
