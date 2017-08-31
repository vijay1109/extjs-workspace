Ext.define('Button.main.Main', {
    extend: 'Ext.Container',
    xtype: 'link-buttons',
    layout: 'vbox',

    initComponent: function() {
        Ext.apply(this, {
            width: 590,
            items: [{
                xtype: 'checkbox',
                boxLabel: 'disabled',
                margin: '0 0 0 10',
                listeners: {
                    change: this.toggleDisabled,
                    scope: this
                }
            }, {
                xtype: 'container',
                layout: {
                    type: 'table',
                    columns: 4,
                    tdAttrs: { style: 'padding: 5px 10px;' }
                },
                defaults: {
                    arrowAlign: 'bottom',
                     href: 'http://www.google.com/',
                    menu: [{
                        text:'Tools'
                    },{
                        text:'Help'
                    },{
                        text:'Selection'
                    },{
                        text : 'Tasks'
                    }]
                },

                items: [{
                    xtype: 'component',
                    html: 'Text Only'
                }, {
                    xtype: 'splitbutton',
                    text: 'Small'
                }, {
                    xtype: 'button',
                    text: 'Medium',
                    scale: 'medium'
                }, {
                    xtype: 'button',
                    text: 'Large',
                    scale: 'large'
                }, {
                    xtype: 'component',
                    html: 'Icon Only'
                }, {
                    iconCls: 'button-home-small',
                    xtype: 'button'
                }, {
                    xtype: 'splitbutton',
                    iconCls: 'button-home-medium',
                    scale: 'medium'
                }, {
                    xtype: 'button',
                    iconCls: 'button-home-large',
                    scale: 'large'
                }, {
                    xtype: 'component',
                    html: 'Icon and Text (left)'
                }, {
                    xtype: 'button',
                    iconCls: 'button-home-small',
                    text: 'Small'
                }, {
                    xtype: 'button',
                    iconCls: 'button-home-medium',
                    text: 'Medium',
                    scale: 'medium'
                }, {
                    xtype: 'button',
                    iconCls: 'button-home-large',
                    text: 'Large',
                    scale: 'large'
                }, {
                    xtype: 'component',
                    html: 'Icon and Text (top)'
                }, {
                    xtype: 'button',
                    iconCls: 'button-home-small',
                    text: 'Small',
                    iconAlign: 'top'
                }, {
                    xtype: 'button',
                    iconCls: 'button-home-medium',
                    text: 'Medium',
                    scale: 'medium',
                    iconAlign: 'top'
                }, {
                    xtype: 'button',
                    iconCls: 'button-home-large',
                    text: 'Large',
                    scale: 'large',
                    iconAlign: 'top'
                }, {
                    xtype: 'component',
                    html: 'Icon and Text (right)'
                }, {
                    xtype: 'button',
                    iconCls: 'button-home-small',
                    text: 'Small',
                    iconAlign: 'right'
                }, {
                    xtype: 'button',
                    iconCls: 'button-home-medium',
                    text: 'Medium',
                    scale: 'medium',
                    iconAlign: 'right'
                }, {
                    xtype: 'button',
                    iconCls: 'button-home-large',
                    text: 'Large',
                    scale: 'large',
                    iconAlign: 'right'
                }, {
                    xtype: 'component',
                    html: 'Icon and Text (bottom)'
                }, {
                    xtype: 'button',
                    iconCls: 'button-home-small',
                    text: 'Small',
                    iconAlign: 'bottom'
                }, {
                    xtype: 'button',
                    iconCls: 'button-home-medium',
                    text: 'Medium',
                    scale: 'medium',
                    iconAlign: 'bottom'
                }, {
                    xtype: 'button',
                    iconCls: 'button-home-large',
                    text: 'Large',
                    scale: 'large',
                    iconAlign: 'bottom'
                }]
            }]
        });
        this.callParent();
    },

    toggleDisabled: function(checkbox, newValue, oldValue) {
        var toggleFn = newValue ? 'disable' : 'enable';

        Ext.each(this.query('button'), function(item) {
            item[toggleFn]();
        });
    }

});