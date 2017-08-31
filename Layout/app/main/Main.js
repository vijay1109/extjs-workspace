Ext.define('Layout.main.Main',{
    extend : 'Ext.panel.Panel',
    xtype : 'layout-border',
    requires :[
        'Ext.layout.container.Border'
    ],
    layout : 'border',
    width : 400,
    height : 300,
    bodyBorder : false,

    defaluts : {
        collaspsible : true,
        split : true,
        bodyPadding : 10
    },
    items: [
        {
            title : 'Footer',
            region  :'south',
            height : 50,
            minHeight : 70,
            maxHeight : 130,
            html : <p>Footer</p>
        },
        {
            title : 'Navg',
            region : 'west',
            height : 40,
            minHeight : 30,
            maxHeight : 100,
            html : <p>nagv</p>
        },
        
     ]

})