/*
 * File: app/store/MyStore.js
 *
 * This file was generated by Sencha Designer version 2.0.0.
 * http://www.sencha.com/products/designer/
 *
 * This file requires use of the Sencha Touch 2.0.x library, under independent license.
 * License of Sencha Designer does not include license for Sencha Touch 2.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('kModerate.store.MyStore', {
    extend: 'Ext.data.Store',
    requires: [
        'kModerate.model.Entry'
    ],

    config: {
        model: 'kModerate.model.Entry',
        storeId: 'MyStore'
    }
});