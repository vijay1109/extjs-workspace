Ext.define('Multi.main.Main', {
    extend: 'Ext.form.Panel',
    xtype: 'form-multicolumn',
    
    
    title: 'Multi Column Form',
    frame: true,
    resizable: true,
    minHeight: 200,

    layout: 'column',
    
    defaults: {
        layout: 'form',
        xtype: 'container',
        defaultType: 'textfield',
        style: 'width: 50%'
    },
    
    items: [{
        items: [
            { fieldLabel: 'First Name' },
            { fieldLabel: 'Last Name' },
            { fieldLabel: 'Phone Number' },
            { fieldLabel: 'Email Address' }
        ]
    }, {
        items: [
            { fieldLabel: 'Street Address 1' },
            { fieldLabel: 'Street Address 2' },
            { fieldLabel: 'City, State' },
            { fieldLabel: 'ZIP code' }
        ]
    }],
    
    buttons: [
        { text: 'OK' },
        { text: 'Cancel' }
    ],
    
    initComponent: function() {
        this.width = 590;
        this.minWidth = 590;
        this.callParent();
    }
});